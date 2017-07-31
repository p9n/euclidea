import {Board} from "./board.js";

export function Alpha7(e) {
    var board = new Board(e, -3, 3, -1.5, 2.5, 100);

    // input
    board.init('point', [0, 0], 'O');
    board.init('point', [0, 1], 'A');
    board.init('circle', ['O', 'A'], 'C1');

    // steps
    board.step('circle', ['A', 'O'], 'C2');
    board.step('intersection', ['C1', 'C2', '0'], 'I1');
    board.step('otherintersection', ['C1', 'C2', 'I1'], 'I2');
    board.step('circle', ['I2', 'I1'], 'C3');
    board.step('line', ['O', 'I2'], 'L1');
    board.step('otherintersection', ['C1', 'C3', 'I1'], 'I3');
    board.step('intersection', ['C3', 'L1', 'O'], 'I4');
    board.step('otherintersection', ['C3', 'L1', 'I4'], 'I5');

    // solution
    board.step('line', ['I3', 'I4'], 'L2', {color: 'darkorange'});
    board.step('line', ['I3', 'I5'], 'L3', {color: 'darkorange'});
    board.step('otherintersection', ['L2', 'C1', 'I3'], 'I6');
    board.step('otherintersection', ['L3', 'C1', 'I3'], 'I7');
    board.step('line', ['A', 'I6'], 'L4', {color: 'darkorange'});
    board.step('line', ['A', 'I7'], 'L5', {color: 'darkorange'});

    board.renderAll();
}

export function Delta2(e) {
    var board = new Board(e, -3, 3, -2, 3, 100);

    // input
    board.init('point', [0, 1], 'A');
    board.init('line', [[-1, 0], [1, 0]], 'L1');

    // steps
    board.step('glider', [-1, 0, 'L1'], 'B');
    board.step('circle', ['A', 'B'], 'C1');
    board.step('circle', ['B', 'A'], 'C2');
    board.step('intersection', ['C2', 'L1', 0], 'I1');
    board.step('intersection', ['C1', 'C2', 1], 'I2');
    board.step('circle', ['I1', 'I2'], 'C3');
    board.step('otherintersection', ['C1', 'C3', 'I2'], 'I3');

    // solution
    board.step('line', ['A', 'I3'], 'L2', {color: 'darkorange'});
    board.step('intersection', ['L1', 'L2'], 'I4', {color: 'darkorange'});
    board.step('line', [[-1, 0], 'I4'], 'L3', {straightLast: false, color: 'darkorange'});

    board.renderAll();
}

export function Delta4(e) {
    var board = new Board(e, -3, 3, -2, 1.5, 100);

    // input
    board.init('circle', [[0, 0], [0, 1]], 'C1');
    board.init('point', [1, 0], 'A');

    // steps
    board.step('glider', [0.91, -0.41, 'C1'], 'B');
    board.step('circle', ['B', 'A'], 'C2');
    board.step('otherintersection', ['C1', 'C2', 'A'], 'I1-2');
    board.step('circle', ['A', 'I1-2'], 'C3');
    board.step('otherintersection', ['C2', 'C3', 'I1-2'], 'I2-3');
    board.step('circle', ['I2-3', 'A'], 'C4');

    // solution
    board.step('intersection', ['C3', 'C4'], 'I3-4');
    board.step('otherintersection', ['C3', 'C4', 'I3-4'], 'I3-4-other');
    board.step('line', ['A', 'I3-4'], 'L1', {color: 'darkorange'});
    board.step('line', ['A', 'I3-4-other'], 'L2', {color: 'darkorange'});
    board.step('otherintersection', ['C1', 'L1', 'A'], 'I-C1-L1');
    board.step('otherintersection', ['C1', 'L2', 'A'], 'I-C1-L2');
    board.step('line', ['I-C1-L1', 'I-C1-L2'], 'L3', {color: 'darkorange'});

    board.renderAll();
}

export function Delta9(e) {
    var board = new Board(e, -2, 3.5, -2.5, 3, 100);

    // input
    board.init('point', [0.5, 0.5], 'A');
    board.init('point', [-0.5, -0.5], 'B');

    // steps
    board.step('circle', ['A', 'B'], 'C1');
    board.step('circle', ['B', 'A'], 'C2');
    board.step('intersection', ['C1', 'C2', '0'], 'I1-2');
    board.step('circle', ['I1-2', 'A'], 'C3');
    board.step('otherintersection', ['C1', 'C3', 'B'], 'I1-3');
    board.step('circle', ['I1-3', 'A'], 'C4');
    board.step('otherintersection', ['C3', 'C4', 'B'], 'I3-4');

    board.step('line', ['A', 'I3-4'], 'L1', {color: 'darkorange'});

    board.step('intersection', ['L1', 'C1'], 'I1');
    board.step('circle', ['I1', 'A'], 'C5');
    board.step('intersection', ['C1', 'C5'], 'I1-5');
    board.step('otherintersection', ['C1', 'C5', 'I1-5'], 'I1-5-other');
    board.step('line', ['I1-5', 'I1-5-other'], 'L2', {color: 'darkorange'});

    board.step('otherintersection', ['L1', 'C1', 'I1'], 'I2');
    board.step('circle', ['I2', 'A'], 'C6');
    board.step('intersection', ['C1', 'C6'], 'I1-6');
    board.step('otherintersection', ['C1', 'C6', 'I1-6'], 'I1-6-other');
    board.step('line', ['I1-6', 'I1-6-other'], 'L3', {color: 'darkorange'});

    board.step('otherintersection', ['C2', 'C5', 'A'], 'I2-5');
    board.step('otherintersection', ['C2', 'C6', 'A'], 'I2-6');
    board.step('line', ['I2-5', 'I2-6'], 'L4', {color: 'darkorange'});

    board.renderAll();
}

export function Epsilon3(e) {
    var board = new Board(e, -1.5, 2.5, -1.5, 1.5, 100);

    // input
    board.init('point', [0, 0], 'A');
    board.init('point', [1, 0], 'B');
    board.init('point', [-0.55, 1.1], 'C', {withLabel: true});

    // steps
    board.step('circle', ['A', 'C'], 'C1');
    board.step('line', ['A', 'C'], 'L1');
    board.step('otherintersection', ['C1', 'L1', 'C'], 'I1');
    board.step('circle', ['B', 'I1'], 'C2');
    board.step('otherintersection', ['C1', 'C2', 'I1'], 'I2');

    // solution
    board.step('line', ['C', 'I2'], 'L2', {color: 'darkorange'});

    board.renderAll();
}

export function Epsilon5(e) {
    var board = new Board(e, -0.5, 3.5, -0.5, 2, 100);

    // input
    board.init('point', [0, 0], 'A');
    board.init('point', [3, 0], 'B');
    board.init('point', [2.34, 1.5], 'C');
    board.init('point', [1.22, 1.5], 'D');
    board.init('segment', ['A', 'B'], 'LAB')
    board.init('segment', ['B', 'C'], 'LBC')
    board.init('segment', ['C', 'D'], 'LCD')
    board.init('segment', ['D', 'A'], 'LDA')

    // steps
    board.step('glider', [0.93, 1.14, 'LDA'], 'O1', {fixed: true, color: 'darkgrey'})
    board.step('circle', ['O1', 'D'], 'C1')
    board.step('otherintersection', ['C1', 'LDA', 'O1'], 'O2')
    board.step('circle', ['O2', 'D'], 'C2')
    board.step('intersection', ['C2', 'LAB', 0], 'E')
    board.step('intersection', ['C2', 'LAB', 1], 'F')
    board.step('line', ['D', 'E'], 'L1')
    board.step('line', ['D', 'F'], 'L2')
    board.step('otherintersection', ['C1', 'L1', 'D'], 'G')
    board.step('otherintersection', ['C1', 'L2', 'D'], 'H')

    // solution
    board.step('line', ['G', 'H'], 'L3', {color: 'darkorange'});

    board.renderAll();
}
