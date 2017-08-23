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
    board.step('line', ['A', 'I3'], 'L2');
    board.step('intersection', ['L1', 'L2'], 'I4', {color: 'darkorange'});
    board.step('line', ['A', 'I4'], '', {straightLast: false, color: 'darkorange'}, true);
    board.step('line', ['B', 'I4'], '', {straightLast: false, color: 'darkorange'}, true);

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
    board.init('segment', ['A', 'B'], 'LAB');
    board.init('point', [2.34, 1.5], 'C');
    board.init('parallel', ['LAB', 'C'], 'LCD_hidden', {visible: false});
    board.init('glider', [1.22, 1.5, 'LCD_hidden'], 'D');
    board.init('segment', ['B', 'C'], 'LBC');
    board.init('segment', ['C', 'D'], 'LCD');
    board.init('segment', ['D', 'A'], 'LDA');

    // steps
    board.step('glider', [0.93, 1.14, 'LDA'], 'O1');
    board.step('circle', ['O1', 'D'], 'C1');
    board.step('otherintersection', ['C1', 'LDA', 'O1'], 'O2');
    board.step('circle', ['O2', 'D'], 'C2');
    board.step('intersection', ['C2', 'LAB', 0], 'E');
    board.step('intersection', ['C2', 'LAB', 1], 'F');
    board.step('line', ['D', 'E'], 'L1');
    board.step('line', ['D', 'F'], 'L2');
    board.step('otherintersection', ['C1', 'L1', 'D'], 'G');
    board.step('otherintersection', ['C1', 'L2', 'D'], 'H');

    // solution
    board.step('line', ['G', 'H'], 'L3', {color: 'darkorange'});

    board.renderAll();
}

export function Epsilon6(e) {
    var board = new Board(e, -3, 3, -1.5, 3, 100);

    // input
    board.init('point', [0, 0], 'O');
    board.init('line', [[-2, 0], [0, 0.6]], 'L1');
    board.init('point', [0, 1], 'HIDDEN1', {visible: false});
    board.init('parallel', ['L1', 'HIDDEN1'], 'L2');
    board.init('line', [[0, 1], [1, 0]], 'L3');
    board.init('point', [0, 2.1], 'HIDDEN2', {visible: false});
    board.init('parallel', ['L3', 'HIDDEN2'], 'L4');

    // steps
    board.step('intersection', ['L2', 'L3'], 'A');
    board.step('intersection', ['L1', 'L4'], 'B');
    board.step('line', ['A', 'O'], 'L5');
    board.step('circle', ['A', 'O'], 'C1');
    board.step('otherintersection', ['C1', 'L5', 'O'], 'C');
    board.step('circle', ['B', 'C'], 'C2');
    board.step('otherintersection', ['C1', 'C2', 'C'], 'D');
    board.step('line', ['O', 'D'], 'L6');

    // solution
    board.step('intersection', ['L1', 'L6'], 'I1');
    board.step('intersection', ['L2', 'L6'], 'I2');
    board.step('intersection', ['L3', 'L6'], 'I3');
    board.step('intersection', ['L4', 'L6'], 'I4');
    board.step('segment', ['I1', 'I2'], '', {color: 'darkorange'}, true);
    board.step('segment', ['I3', 'I4'], '', {color: 'darkorange'}, true);

    board.renderAll();
}

export function Epsilon8(e) {
    var board = new Board(e, -3, 3, -2.5, 3.5, 100);

    // input
    board.init('line', [[0, 0], [1, 0]], 'L1');
    board.init('point', [0, 1.5], 'O');
    board.init('point', [0.6, 1.5], 'P');
    board.init('circle', ['O', 'P'], 'C1');

    // steps
    board.step('glider', [-1.6, 0, 'L1'], 'A');
    board.step('circle', ['A', 'O'], 'C2');
    board.step('glider', [0.9, 0, 'L1'], 'B');
    board.step('circle', ['B', 'O'], 'C3');
    board.step('otherintersection', ['C2', 'C3', 'O'], 'C');
    board.step('line', ['O', 'C'], 'L2');
    board.step('intersection', ['L1', 'L2'], 'D');
    board.step('circle', ['D', 'O'], 'C4');
    board.step('intersection', ['C4', 'L1', 0], 'E');
    board.step('line', ['E', 'O'], 'L3');
    board.step('intersection', ['C1', 'L2', 0], 'F');
    board.step('intersection', ['C1', 'L2', 1], 'G');
    board.step('circle', ['F', 'O'], 'C5')
    board.step('circle', ['G', 'O'], 'C6')
    board.step('otherintersection', ['L3', 'C5', 'O'], 'H');
    board.step('otherintersection', ['L3', 'C6', 'O'], 'I');
    board.step('line', ['F', 'H'], 'L4');
    board.step('otherintersection', ['L4', 'C5', 'H'], 'J');
    board.step('line', ['J', 'I'], 'L5');
    board.step('line', ['I', 'G'], 'L6');
    board.step('otherintersection', ['L6', 'C6', 'I'], 'K');
    board.step('line', ['K', 'H'], 'L7');

    // solution
    board.step('segment', ['H', 'J'], '', {color: 'darkorange'}, true);
    board.step('segment', ['I', 'J'], '', {color: 'darkorange'}, true);
    board.step('segment', ['I', 'K'], '', {color: 'darkorange'}, true);
    board.step('segment', ['H', 'K'], '', {color: 'darkorange'}, true);

    board.renderAll();
}

export function Zeta6(e) {
    var board = new Board(e, -3, 2.5, -1.5, 3, 100);

    // input
    board.init('point', [-0.5, 0], 'A');
    board.init('point', [0, 0.618], 'B');
    board.init('point', [1, 0], 'C');
    board.init('segment', ['A', 'B'], 'L1');

    // steps
    board.step('circle', ['A', 'B'], 'C1');
    board.step('circle', ['B', 'A'], 'C2');
    board.step('intersection', ['C1', 'C2', 0], 'I1');
    board.step('intersection', ['C1', 'C2', 1], 'I2');
    board.step('circle', ['I1', 'C'], 'C3');
    board.step('circle', ['I2', 'C'], 'C4');
    board.step('otherintersection', ['C3', 'C4', 'C'], 'I3');
    board.step('line', ['C', 'I3'], 'L2');
    board.step('circle', ['B', 'I3'], 'C5');

    // solution
    board.step('otherintersection', ['C5', 'L2', 'I3'], 'D');
    board.step('segment', ['C', 'D'], '', {color: 'darkorange'});
    board.step('point', ['X(D)', 'Y(D)'], 'D"', {color: 'darkorange'});

    board.renderAll();
}

export function Zeta8(e) {
    var board = new Board(e, -3.5, 2, -1.5, 3, 100);

    // input
    board.init('point', [-2, 0], 'A');
    board.init('point', [0, 0], 'B');
    board.init('point', [0.1, 1.44], 'C');
    board.init('point', [0.3, 1.25], 'D');
    board.init('segment', ['A', 'B'], 'L1');
    board.init('segment', ['C', 'D'], 'L2');

    // steps
    board.step('line', ['B', 'D'], 'L3');
    board.step('circle', ['D', 'B'], 'C1');
    board.step('otherintersection', ['C1', 'L3', 'B'], 'E');
    board.step('line', ['E', 'C'], 'L4');
    board.step('circle', ['C', 'E'], 'C2');
    board.step('otherintersection', ['C2', 'L4', 'E'], 'F');
    board.step('circle', ['B', 'F'], 'C3');
    board.step('circle', ['A', 'B'], 'C4');
    board.step('intersection', ['C3', 'C4', 0], 'G');
    board.step('circle', ['G', 'B'], 'C5');
    board.step('intersection', ['C3', 'C5', 0], 'H');
    board.step('line', ['A', 'H'], 'L5');
    board.step('line', ['B', 'G'], 'L6');
    
    // solution
    board.step('intersection', ['L5', 'L6'], 'I', {color: 'darkorange'});
    board.step('segment', ['A', 'I'], '', {color: 'darkorange'}, true);
    board.step('segment', ['B', 'I'], '', {color: 'darkorange'}, true);
    board.step('segment', ['A', 'B'], '', {color: 'darkorange'}, true);
    board.step('point', ['X(A)', 'Y(A)'], 'A"', {color: 'darkorange'});
    board.step('point', ['X(B)', 'Y(B)'], 'B"', {color: 'darkorange'});
    board.step('point', ['X(I)', 'Y(I)'], 'I"', {color: 'darkorange'});
    
    board.renderAll();
}
