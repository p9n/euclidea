var DEBUG = false;

var POINT_SUBTYPES = new Set(
    ['glider', 'intersection', 'otherintersection', 'point', 'midpoint'])

function isPointType(type) {
    return POINT_SUBTYPES.has(type)
}

function colorAttribute(type, color) {
    if (isPointType(type)) {
        return {color: color};
    } else {
        return {strokeColor: color};
    }
}

export const FLAG_INIT = 1;
export const FLAG_FINAL = 2;

export class Board {
    static UniqueId_() {
        // TODO: improve this
        Board.counter_ += 1;
        return 'board_' + Board.counter_;
    }

    constructor(container, xmin, xmax, ymin, ymax, zoom) {
        var board = $('<div></div>');
        board.addClass('jxgbox');
        board.css({
            width: (xmax - xmin) * zoom + 'px',
            height: (ymax - ymin) * zoom + 'px',
        })
        board.attr('id', Board.UniqueId_());

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
    }

    init_(elementType, parents, name, attributes) {
        var defaultColor = colorAttribute(elementType, 'blue')
        var combinedAttribute = Object.assign({}, defaultColor, attributes);
        this.create(elementType, parents, name, combinedAttribute);
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
            e.setLabel(name);
            e.label.setAttribute({visible: false});
            e.on('over', () => e.label.setAttribute({visible: true}));
            e.on('out', () => e.label.setAttribute({visible: false}));
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
            this.init_(elementType, parents, name, attributes);
        } else {
            this.step_(elementType, parents, name, attributes, flag == FLAG_FINAL);
        }
    }

    circle(...args) {
        this.initOrStep_.apply(this, ['circle'].concat(args));
    }

    glider(...args) {
        this.initOrStep_.apply(this, ['glider'].concat(args));
    }

    intersection(...args) {
        this.initOrStep_.apply(this, ['intersection'].concat(args));
    }

    line(...args) {
        this.initOrStep_.apply(this, ['line'].concat(args));
    }

    midpoint(...args) {
        this.initOrStep_.apply(this, ['midpoint'].concat(args));
    }

    otherintersection(...args) {
        this.initOrStep_.apply(this, ['otherintersection'].concat(args));
    }

    parallel(...args) {
        this.initOrStep_.apply(this, ['parallel'].concat(args));
    }

    perpendicular(...args) {
        this.initOrStep_.apply(this, ['perpendicular'].concat(args));
    }

    point(...args) {
        this.initOrStep_.apply(this, ['point'].concat(args));
    }

    segment(...args) {
        this.initOrStep_.apply(this, ['segment'].concat(args));
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

    JXG.Options.glider.strokeColor = 'red';
    JXG.Options.glider.fillColor = 'red';
}
