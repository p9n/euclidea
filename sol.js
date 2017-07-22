class Board {
    constructor(id, xmin, xmax, ymin, ymax, zoom) {
        var container = $('#' + id);
        var board = $('<div></div>');
        board.addClass('jxgbox');
        board.css({
            width: (xmax - xmin) * zoom + 'px',
            height: (ymax - ymin) * zoom + 'px',
        })
        board.attr('id', id + '_board');

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


function Alpha7(id) {
    var board = new Board(id, -4, 3, -1.5, 2.5, 100);

    // input
    board.create('point', [0, 0], 'O', {color: 'blue', withLabel: true});
    board.create('point', [0, 1], 'A', {color: 'blue', withLabel: true});
    board.create('circle', ['O', 'A'], 'C1', {strokeColor: 'blue'});

    // steps
    board.push('circle', ['A', 'O'], 'C2');
    board.push('intersection', ['C1', 'C2', '0'], 'I1');
    board.push('otherintersection', ['C1', 'C2', 'I1'], 'I2');
    board.push('circle', ['I2', 'I1'], 'C3');
    board.push('line', ['O', 'I2'], 'L1');
    board.push('otherintersection', ['C1', 'C3', 'I1'], 'I3');
    board.push('intersection', ['C3', 'L1', 'O'], 'I4');
    board.push('otherintersection', ['C3', 'L1', 'I4'], 'I5');

    // solution
    board.push('line', ['I3', 'I4'], 'L2', {color: 'darkorange'});
    board.push('line', ['I3', 'I5'], 'L3', {color: 'darkorange'});
    board.push('otherintersection', ['L2', 'C1', 'I3'], 'I6');
    board.push('otherintersection', ['L3', 'C1', 'I3'], 'I7');
    board.push('line', ['A', 'I6'], 'L4', {color: 'darkorange'});
    board.push('line', ['A', 'I7'], 'L5', {color: 'darkorange'});

    board.createAll();
}

function SetDefaultOptions() {
    JXG.Options.point.size = 1;
    JXG.Options.point.strokeColor = 'darkgrey';
    JXG.Options.point.fillColor = 'darkgrey';
    JXG.Options.point.withLabel = false;
    JXG.Options.circle.strokeColor = 'darkgrey';
    JXG.Options.line.strokeColor = 'darkgrey';
}

SetDefaultOptions();
