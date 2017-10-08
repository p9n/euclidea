var DEBUG = false;

const POINT_SUBTYPES = new Set([
    'glider', 'intersection', 'otherintersection', 'point',
    'midpoint', 'mirrorpoint', 'parallelpoint',
]);

const ALL_TYPES = [
  'circle', 'glider', 'intersection', 'line', 'midpoint',
  'otherintersection', 'parallel', 'perpendicular', 'point',
  'segment', 'bisector', 'angle', 'mirrorpoint', 'parallelpoint',
];

function isPointType(type) {
  return POINT_SUBTYPES.has(type)
}

function colorAttribute(type, color) {
  if (isPointType(type)) {
    return {color: color};
  } else {
    return {strokeColor: color, highlightStrokeColor: color};
  }
}

export const FLAG_INIT = 1;
export const FLAG_FINAL = 2;
export const FLAG_SKIP = 4;

export class Board {
  static uniqueId_() {
    // TODO: improve this
    Board.counter_ += 1;
    return 'uuid-' + Board.counter_;
  }

  constructor(container, xmin, xmax, ymin, ymax, zoom) {
    var board = $('<div></div>');
    board.addClass('jxgbox');
    board.css({
      width: (xmax - xmin) * zoom + 'px',
      height: (ymax - ymin) * zoom + 'px',
    })
    board.attr('id', Board.uniqueId_());

    var prev = $('<button>&lt;&lt;</button>').click(() => this.prev());
    var next = $('<button>&gt;&gt;</button>').click(() => this.next());
    container.empty();
    container.append(board, prev, ' ', next);

    this.board_ = JXG.JSXGraph.initBoard(board.attr('id'), 
        {
          boundingbox: [xmin, ymax, xmax, ymin],
          showNavigation: false,
          zoom: false,
        });
    this.stack_ = [];
    this.elements_ = [];

    for (let t of ALL_TYPES) {
      this[t] = this.initOrStep_.bind(this, t);
    }
  }

  init_(elementType, parents, name, attributes) {
    this.create(elementType, parents, name, attributes);
  }

  step_(elementType, parents, name, attributes, isFinalDecoration) {
    let isLine = !(isPointType(elementType) || isFinalDecoration);

    if (this.stack_.length == 0) {
      this.stack_.push([]);
    }
    var last = this.stack_[this.stack_.length - 1];
    if (last.hasLine) {
      last = [];
      this.stack_.push(last);
    }

    last.hasLine = last.hasLine || isLine;
    last.push([elementType, parents, name, attributes, isFinalDecoration]);
  }

  renderAll() {
    while (this.next());
  }

  create(elementType, parents, name, attributes={}) {
    var e = this.board_.create(elementType, parents.slice(), attributes);
    if (name != '') {
      e.setName(name);
      if (attributes.showLabel === false) {
        e.setLabel('');
        e.label.setAttribute({visible: false});
      } else {
        e.setLabel(name);
        e.label.setAttribute({visible: false});
        e.on('over', () => e.label.setAttribute({visible: true}));
        e.on('out', () => e.label.setAttribute({visible: false}));
      }
    }
    return e;
  }

  prev() {
    let e = this.elements_.pop();
    if (e !== undefined) {
      for (let i = e.length - 1; i >= 0; i--) this.board_.removeObject(e[i]);
    }
  }

  next() {
    let n = this.elements_.length;
    if (n >= this.stack_.length) return false;
    var nextElementsGroup = [];
    for (let [elementType, parents, name, attributes, isFinalDecoration] of this.stack_[n]) {
      let e = this.create(elementType, parents, name, attributes);
      nextElementsGroup.push(e);
    }
    this.elements_.push(nextElementsGroup);
    return true;
  }

  initOrStep_(elementType, parents, name='', attributes={}, flag=0) {
    if (flag == FLAG_INIT) {
      var defaultColor = colorAttribute(elementType, 'blue');
      var combinedAttribute = Object.assign({}, defaultColor, attributes);
      this.init_(elementType, parents, name, combinedAttribute);
    } else if (flag == FLAG_FINAL) {
      var defaultAttribute = colorAttribute(elementType, 'darkorange');
      defaultAttribute.strokeWidth = 3;
      defaultAttribute.highlightStrokeWidth = 3;
      var combinedAttribute = Object.assign({}, defaultAttribute, attributes);
      this.step_(elementType, parents, name, combinedAttribute, true);
    } else {
      this.step_(elementType, parents, name, attributes, flag == FLAG_SKIP);
    }
  }

  angleBisector(parents, name='', attributes={}, flag=0) {
    var [a, b, c] = parents;
    this.segment([b, a], '', {dash: 2}, FLAG_SKIP);
    this.segment([b, c], '', {dash: 2}, FLAG_SKIP);
    this.angle([a, b, c], '', {}, FLAG_SKIP);
    this.bisector(parents, name, attributes, flag);
  }

  copySegment(parents, name='', attributes={}, flag=0) {
    const dotted_line_attr = {showLabel: false, dash: 2, color: 'grey'};
    var [a, b, c] = parents;
    const segment_id = Board.uniqueId_();
    this.segment([a, b], segment_id, dotted_line_attr, FLAG_SKIP);
    const point_id = Board.uniqueId_();
    this.parallelpoint([a, b, c], point_id, {visible: false, withLabel: false});
    this.segment([c, point_id], '', dotted_line_attr, FLAG_SKIP);
    this.circle([c, point_id], name, attributes, flag);
  }

  perpendicularBisector(parents, name='', attributes={}, flag=0) {
    const segment_id = Board.uniqueId_();
    this.segment(parents, segment_id, {visible: false}, FLAG_SKIP);
    const point_id = Board.uniqueId_();
    this.midpoint([segment_id], point_id, {visible: false});
    this.perpendicular([segment_id, point_id], name, attributes, flag);
  }
};

Board.counter_ = 0;

export function SetDefaultOptions() {
  JXG.Options.point.size = 1;
  JXG.Options.point.strokeColor = 'darkgrey';
  JXG.Options.point.fillColor = 'darkgrey';

  JXG.Options.circle.strokeColor = 'darkgrey';

  JXG.Options.line.strokeColor = 'darkgrey';
  JXG.Options.perpendicular.strokeColor = 'darkgrey';
  JXG.Options.bisector.strokeColor = 'darkgrey';

  JXG.Options.glider.strokeColor = 'red';
  JXG.Options.glider.fillColor = 'red';

  JXG.Options.angle.withLabel = false;
  JXG.Options.angle.radius = 0.2;
  JXG.Options.angle.fillColor = '#87CEFA';
  JXG.Options.angle.strokeColor = '#48D1CC';

}
