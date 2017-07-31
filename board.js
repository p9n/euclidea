var POINT_SUBTYPES = new Set(
    ['glider', 'intersection', 'otherintersection', 'point'])

export class Board {
    static UniqueId_() {
        // TODO: improve this
        Board.counter_ += 1;
        return 'board_' + Board.counter_;
    }

    static IsPointType_(type) {
        return POINT_SUBTYPES.has(type)
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

    init(elementType, parents, name = undefined, attributes = {}) {
        this.create(elementType, parents, name, attributes)
    }

    step(elementType, parents, name = undefined, attributes = {}) {
        this.stack_.push([elementType, parents, name, attributes]);
    }

    renderAll() {
        for (const x of this.stack_) {
            let [elementType, parents, name, attributes] = x;
            let e = this.create(elementType, parents, name, attributes);
            this.elements_.push(e);
        }
    }

    create(elementType, parents, name, attributes = {}) {
        var e = this.board_.create(elementType, parents.slice(), attributes);
        e.setName(name);
        return e;
    }

    prev() {
        while (true) {
            let e = this.elements_.pop();
            if (e !== undefined) {
                this.board_.removeObject(e);
                if (!Board.IsPointType_(e.getType())) {
                    break;
                }
            } else {
                break;
            }
        }
    }

    next() {
        while (true) {
            let n = this.elements_.length;
            if (n == this.stack_.length) break;
            let [elementType, parents, name, attributes] = this.stack_[n];
            let e = this.create(elementType, parents, name, attributes);
            this.elements_.push(e);
            if (!Board.IsPointType_(elementType)) break;
        }
    }
};

Board.counter_ = 0;

export function SetDefaultOptions() {
    JXG.Options.point.size = 1;
    JXG.Options.point.strokeColor = 'darkgrey';
    JXG.Options.point.fillColor = 'darkgrey';
    JXG.Options.point.withLabel = false;

    JXG.Options.circle.strokeColor = 'darkgrey';

    JXG.Options.line.strokeColor = 'darkgrey';

    JXG.Options.elements.fixed = true;

    JXG.Options.glider.fixed = false;
    JXG.Options.glider.strokeColor = 'red';
    JXG.Options.glider.fillColor = 'red';
}
