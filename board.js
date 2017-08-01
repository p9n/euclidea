var DEBUG = false;

var POINT_SUBTYPES = new Set(
    ['glider', 'intersection', 'otherintersection', 'point'])

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

    init(elementType, parents, name=undefined, attributes = {}) {
        var defaultColor = colorAttribute(elementType, 'blue')
        var combinedAttribute = Object.assign({}, defaultColor, attributes);
        this.create(elementType, parents, name, combinedAttribute);
    }

    step(elementType, parents, name=undefined, attributes = {}, isFinalDecoration=false) {
        if (isPointType(elementType) || isFinalDecoration) {
            if (this.stack_.length == 0) this.stack_.push([]);
        } else {
            this.stack_.push([]);
        }
        this.stack_[this.stack_.length - 1].push([elementType, parents, name, attributes, isFinalDecoration]);
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
};

Board.counter_ = 0;

export function SetDefaultOptions() {
    JXG.Options.point.size = 1;
    JXG.Options.point.strokeColor = 'darkgrey';
    JXG.Options.point.fillColor = 'darkgrey';

    JXG.Options.circle.strokeColor = 'darkgrey';

    JXG.Options.line.strokeColor = 'darkgrey';

    JXG.Options.glider.strokeColor = 'red';
    JXG.Options.glider.fillColor = 'red';
}
