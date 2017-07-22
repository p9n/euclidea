class Board {
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

    push(elementType, parents, name = undefined, attributes = {}) {
        this.stack_.push([elementType, parents, name, attributes]);
    }

    createAll() {
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
                if (!(e.getType() == 'intersection' || e.getType() == 'otherintersection')) {
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
            if (!(elementType == 'intersection' || elementType == 'otherintersection')) {
                break;
            }
        }
    }
};

Board.counter_ = 0;

function SetDefaultOptions() {
    JXG.Options.point.size = 1;
    JXG.Options.point.strokeColor = 'darkgrey';
    JXG.Options.point.fillColor = 'darkgrey';
    JXG.Options.point.withLabel = false;
    JXG.Options.circle.strokeColor = 'darkgrey';
    JXG.Options.line.strokeColor = 'darkgrey';
}

SetDefaultOptions();
