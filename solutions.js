import {Board} from "./board.js";

export function Alpha7(e) {
    var board = new Board(e, -3, 3, -1.5, 2.5, 100);

    // input
    board.create('point', [0, 0], 'O', {color: 'blue'});
    board.create('point', [0, 1], 'A', {color: 'blue'});
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

export function Delta2(e) {
    var board = new Board(e, -3, 3, -2, 3, 100);

    // input
    board.create('point', [0, 1], 'A', {color: 'blue'});
    board.create('line', [[-1, 0], [1, 0]], 'L1', {strokeColor: 'blue'});

    // steps
    board.push('glider', [-1, 0, 'L1'], 'B');
    board.push('circle', ['A', 'B'], 'C1');
    board.push('circle', ['B', 'A'], 'C2');
    board.push('intersection', ['C2', 'L1', 0], 'I1');
    board.push('intersection', ['C1', 'C2', 1], 'I2');
    board.push('circle', ['I1', 'I2'], 'C3');
    board.push('otherintersection', ['C1', 'C3', 'I2'], 'I3');

    // solution
    board.push('line', ['A', 'I3'], 'L2', {color: 'darkorange'});
    board.push('intersection', ['L1', 'L2'], 'I4', {color: 'darkorange'});
    board.push('line', [[-1, 0], 'I4'], 'L3', {straightLast: false, color: 'darkorange'});

    board.createAll();
}

export function Delta4(e) {
    var board = new Board(e, -3, 3, -2, 1.5, 100);

    // input
    board.create('circle', [[0, 0], [0, 1]], 'C1', {strokeColor: 'blue'});
    board.create('point', [1, 0], 'A', {color: 'blue'});

    // steps
    board.push('glider', [0.91, -0.41, 'C1'], 'B');
    board.push('circle', ['B', 'A'], 'C2');
    board.push('otherintersection', ['C1', 'C2', 'A'], 'I1-2');
    board.push('circle', ['A', 'I1-2'], 'C3');
    board.push('otherintersection', ['C2', 'C3', 'I1-2'], 'I2-3');
    board.push('circle', ['I2-3', 'A'], 'C4');

    // solution
    board.push('intersection', ['C3', 'C4'], 'I3-4');
    board.push('otherintersection', ['C3', 'C4', 'I3-4'], 'I3-4-other');
    board.push('line', ['A', 'I3-4'], 'L1', {color: 'darkorange'});
    board.push('line', ['A', 'I3-4-other'], 'L2', {color: 'darkorange'});
    board.push('otherintersection', ['C1', 'L1', 'A'], 'I-C1-L1');
    board.push('otherintersection', ['C1', 'L2', 'A'], 'I-C1-L2');
    board.push('line', ['I-C1-L1', 'I-C1-L2'], 'L3', {color: 'darkorange'});

    board.createAll();
}

export function Delta9(e) {
    var board = new Board(e, -2, 3.5, -2.5, 3, 100);

    // input
    board.create('point', [0.5, 0.5], 'A', {color: 'blue'});
    board.create('point', [-0.5, -0.5], 'B', {color: 'blue'});

    // steps
    board.push('circle', ['A', 'B'], 'C1');
    board.push('circle', ['B', 'A'], 'C2');
    board.push('intersection', ['C1', 'C2', '0'], 'I1-2');
    board.push('circle', ['I1-2', 'A'], 'C3');
    board.push('otherintersection', ['C1', 'C3', 'B'], 'I1-3');
    board.push('circle', ['I1-3', 'A'], 'C4');
    board.push('otherintersection', ['C3', 'C4', 'B'], 'I3-4');

    board.push('line', ['A', 'I3-4'], 'L1', {color: 'darkorange'});

    board.push('intersection', ['L1', 'C1'], 'I1');
    board.push('circle', ['I1', 'A'], 'C5');
    board.push('intersection', ['C1', 'C5'], 'I1-5');
    board.push('otherintersection', ['C1', 'C5', 'I1-5'], 'I1-5-other');
    board.push('line', ['I1-5', 'I1-5-other'], 'L2', {color: 'darkorange'});

    board.push('otherintersection', ['L1', 'C1', 'I1'], 'I2');
    board.push('circle', ['I2', 'A'], 'C6');
    board.push('intersection', ['C1', 'C6'], 'I1-6');
    board.push('otherintersection', ['C1', 'C6', 'I1-6'], 'I1-6-other');
    board.push('line', ['I1-6', 'I1-6-other'], 'L3', {color: 'darkorange'});

    board.push('otherintersection', ['C2', 'C5', 'A'], 'I2-5');
    board.push('otherintersection', ['C2', 'C6', 'A'], 'I2-6');
    board.push('line', ['I2-5', 'I2-6'], 'L4', {color: 'darkorange'});

    board.createAll();
}

export function Epsilon3(e) {
    var board = new Board(e, -1.5, 2.5, -1.5, 1.5, 100);

    // input
    board.create('point', [0, 0], 'A', {color: 'blue'});
    board.create('point', [1, 0], 'B', {color: 'blue'});
    board.create('point', [-0.55, 1.1], 'C', {color: 'blue', withLabel: true});

    // steps
    board.push('circle', ['A', 'C'], 'C1');
    board.push('line', ['A', 'C'], 'L1');
    board.push('otherintersection', ['C1', 'L1', 'C'], 'I1');
    board.push('circle', ['B', 'I1'], 'C2');
    board.push('otherintersection', ['C1', 'C2', 'I1'], 'I2');

    // solution
    board.push('line', ['C', 'I2'], 'L2', {color: 'darkorange'});

    board.createAll();
}
