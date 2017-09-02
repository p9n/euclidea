import * as Board from './board.js';

export function Theta3(e) {
    var board = new Board.Board(e, -1.5, 2, -2, 2, 120);

    // input
    board.point([-0.2, 0], 'A', {}, Board.FLAG_INIT);
    board.point([0.9, 0], 'B', {}, Board.FLAG_INIT);
    board.point([1.4, 0], 'C', {}, Board.FLAG_INIT);
    board.line(['A', 'B'], 'L', {straightFirst: false}, Board.FLAG_INIT);

    // steps
    board.circle(['C', 'A'], 'C1');
    board.circle(['A', 'B'], 'C2');
    board.intersection(['C1', 'C2', 0], 'D');
    board.circle(['D', 'A'], 'C3');

    // solution
    board.otherintersection(['C3', 'L', 'A'], 'E', {}, Board.FLAG_FINAL);
    board.segment(['A', 'E'], '', {}, Board.FLAG_FINAL);
    
    board.renderAll();
}

export function Theta5(e) {
    var board = new Board.Board(e, -0.5, 5, -2, 3.5, 100);

    // input
    board.point([0.7, 0.64], 'A', {}, Board.FLAG_INIT);
    board.point([2.4, 0.64], 'B', {}, Board.FLAG_INIT);
    board.segment(['A', 'B'], 'LAB', {}, Board.FLAG_INIT);
    board.point([1.6, 1.3], 'C', {}, Board.FLAG_INIT);
    board.parallel(['LAB', 'C'], 'LCD_hidden', {visible: false}, Board.FLAG_INIT);
    board.glider([1, 1.3, 'LCD_hidden'], 'D', {color: 'blue'}, Board.FLAG_INIT);
    board.segment(['B', 'C'], 'LBC', {}, Board.FLAG_INIT);
    board.segment(['C', 'D'], 'LCD', {}, Board.FLAG_INIT);
    board.segment(['D', 'A'], 'LDA', {}, Board.FLAG_INIT);

    // steps
    board.line(['A', 'C'], 'L1');
    board.line(['B', 'D'], 'L2');
    board.intersection(['L1', 'L2'], 'E');
    board.circle(['A', 'E'], 'C1');
    board.otherintersection(['C1', 'L1', 'E'], 'F');
    board.circle(['B', 'F'], 'C2');
    board.otherintersection(['C1', 'C2', 'F'], 'G');

    // solution
    board.line(['E', 'G'], '', {}, Board.FLAG_FINAL);

    board.renderAll();
}

export function Theta7_L(e) {
    var board = new Board.Board(e, -3, 4, -2, 4.5, 100);

    // input
    board.point([0, 0], 'A', {}, Board.FLAG_INIT);
    board.point([1, 0], 'B', {}, Board.FLAG_INIT);
    board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);

    // steps
    board.perpendicular(['L1', 'A'], 'L2');
    board.glider([0, -1, 'L2'], 'C', {visible: false});
    board.bisector(['B', 'A', 'C'], 'L3');
    board.perpendicular(['L3', 'B'], 'L4');
    board.intersection(['L3', 'L4'], 'D', {visible: false});
    board.mirrorpoint(['B', 'D'], 'E', {visible: false});
    board.bisector(['E', 'B', 'A'], 'L5');
    board.intersection(['L2', 'L5'], 'F');
    board.perpendicular(['L3', 'F'], 'L6');
    board.perpendicular(['L2', 'F'], 'L7');
    board.intersection(['L4', 'L7'], 'G');
    board.midpoint(['B', 'G'], 'H');
    board.perpendicular(['L4', 'H'], 'L8');
    board.intersection(['L5', 'L8'], 'I');
    board.perpendicular(['L7', 'I'], 'L9');
    board.intersection(['L3', 'L5'], 'J');
    board.perpendicular(['L7', 'J'], 'L10');

    // solution
    board.intersection(['L4', 'L10'], 'A3');
    board.intersection(['L8', 'L10'], 'A4');
    board.intersection(['L7', 'L8'], 'A5');
    board.intersection(['L6', 'L9'], 'A7');
    board.intersection(['L3', 'L9'], 'A8');
    board.segment(['A', 'B'], '', {}, Board.FLAG_FINAL);
    board.segment(['B', 'A3'], '', {}, Board.FLAG_FINAL);
    board.segment(['A3', 'A4'], '', {}, Board.FLAG_FINAL);
    board.segment(['A4', 'A5'], '', {}, Board.FLAG_FINAL);
    board.segment(['A5', 'F'], '', {}, Board.FLAG_FINAL);
    board.segment(['F', 'A7'], '', {}, Board.FLAG_FINAL);
    board.segment(['A7', 'A8'], '', {}, Board.FLAG_FINAL);
    board.segment(['A8', 'A'], '', {}, Board.FLAG_FINAL);

    board.renderAll();
}

export function Theta7_E(e) {
    var board = new Board.Board(e, -2, 3, -2, 3, 100);

    // input
    board.point([0, 0], 'A', {}, Board.FLAG_INIT);
    board.point([1, 0], 'B', {}, Board.FLAG_INIT);
    board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);

    // steps
    board.circle(['A', 'B'], 'C1');
    board.circle(['B', 'A'], 'C2');
    board.intersection(['C1', 'C2', 0], 'C');
    board.intersection(['C1', 'C2', 1], 'D');
    board.line(['C', 'D'], 'L2');
    board.intersection(['L1', 'L2'], 'E');
    board.circle(['E', 'A'], 'C3');
    board.intersection(['L2', 'C3', 1], 'F');
    board.line(['A', 'F'], 'L3');
    board.line(['B', 'F'], 'L4');
    board.intersection(['C1', 'L3', 1], 'A8');
    board.circle(['F', 'A8'], 'C4');
    board.intersection(['C2', 'C4'], 'A3');
    board.otherintersection(['L3', 'C4', 'A8'], 'G');
    board.otherintersection(['L4', 'C4', 'A3'], 'H');
    board.line(['A3', 'G'], 'L5');
    board.line(['A8', 'H'], 'L6');
    board.intersection(['L2', 'C4', 0], 'I');
    board.circle(['I', 'F'], 'C5');
    board.otherintersection(['L2', 'C5', 'F'], 'J');
    board.otherintersection(['L4', 'C5', 'F'], 'K');
    board.otherintersection(['L3', 'C5', 'F'], 'L');
    board.line(['J', 'K'], 'L7');
    board.line(['J', 'L'], 'L8');
    board.intersection(['C5', 'L5', 1], 'M');
    board.intersection(['C5', 'L6', 1], 'N');
    board.line(['M', 'N'], 'L9');

    // solution
    board.intersection(['L5', 'L7'], 'A4');
    board.intersection(['L9', 'L7'], 'A5');
    board.intersection(['L9', 'L8'], 'A6');
    board.intersection(['L6', 'L8'], 'A7');
    board.segment(['A', 'B'], '', {}, Board.FLAG_FINAL);
    board.segment(['B', 'A3'], '', {}, Board.FLAG_FINAL);
    board.segment(['A3', 'A4'], '', {}, Board.FLAG_FINAL);
    board.segment(['A4', 'A5'], '', {}, Board.FLAG_FINAL);
    board.segment(['A5', 'A6'], '', {}, Board.FLAG_FINAL);
    board.segment(['A6', 'A7'], '', {}, Board.FLAG_FINAL);
    board.segment(['A7', 'A8'], '', {}, Board.FLAG_FINAL);
    board.segment(['A8', 'A'], '', {}, Board.FLAG_FINAL);

    board.renderAll();
}

export function Theta8(e) {
    var board = new Board.Board(e, -0.5, 4, -0.5, 2.5, 100);

    // input
    board.point([0, 0], 'A', {}, Board.FLAG_INIT);
    board.point([3.2, 0], 'B', {}, Board.FLAG_INIT);
    board.segment(['A', 'B'], 'LAB', {}, Board.FLAG_INIT);
    board.point([1.7, 1.5], 'C', {}, Board.FLAG_INIT);
    board.parallel(['LAB', 'C'], 'LCD_hidden', {visible: false}, Board.FLAG_INIT);
    board.glider([0.8, 1.5, 'LCD_hidden'], 'D', {color: 'blue'}, Board.FLAG_INIT);
    board.segment(['B', 'C'], 'LBC', {}, Board.FLAG_INIT);
    board.segment(['C', 'D'], 'LCD', {}, Board.FLAG_INIT);
    board.segment(['D', 'A'], 'LDA', {}, Board.FLAG_INIT);
    board.segment(['A', 'C'], 'LAC', {}, Board.FLAG_INIT);
    board.segment(['B', 'D'], 'LBD', {}, Board.FLAG_INIT);

    // steps
    board.intersection(['LAC', 'LBD'], 'E');
    board.line(['C', 'D'], 'L1');
    board.circle(['C', 'D'], 'C1');
    board.otherintersection(['C1', 'L1', 'D'], 'F');
    board.line(['F', 'A'], 'L2');
    board.line(['F', 'E'], 'L3');
    board.intersection(['L2', 'LBD'], 'G');
    board.intersection(['L3', 'LDA'], 'H');
    board.line(['G', 'H'], 'L4');

    // solution
    board.intersection(['L4', 'LBC'], 'I');
    board.segment(['H', 'I'], '', {}, Board.FLAG_FINAL);

    board.renderAll();
}

export function Theta9(e) {
    var board = new Board.Board(e, -2.5, 3, -2, 2, 100);

    // input
    board.point([-0.5, 0], 'A', {}, Board.FLAG_INIT);
    board.point([1, 0], 'B', {}, Board.FLAG_INIT);
    board.point([0.4, 1.21], 'C', {}, Board.FLAG_INIT);
    board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);
    board.segment(['B', 'C'], 'L2', {}, Board.FLAG_INIT);
    board.segment(['C', 'A'], 'L3', {}, Board.FLAG_INIT);

    // steps
    board.circle(['A', 'B'], 'C1');
    board.circle(['B', 'A'], 'C2');
    board.intersection(['C1', 'C2', 0], 'D');
    board.intersection(['C1', 'C2', 1], 'E');
    board.line(['D', 'E'], 'L4');
    board.intersection(['L1', 'L4'], 'F');
    board.circle(['F', 'A'], 'C3');
    board.otherintersection(['C3', 'L2', 'B'], 'G');
    board.otherintersection(['C3', 'L3', 'A'], 'H');
    board.circle(['A', 'H'], 'C4');
    board.otherintersection(['C3', 'C4', 'H'], 'I');
    board.line(['G', 'I'], 'L5');
    board.intersection(['L1', 'L5'], 'J');
    board.line(['G', 'H'], '');
    board.line(['H', 'J'], '');

    // solution
    board.segment(['G', 'H'], '', {}, Board.FLAG_FINAL);
    board.segment(['J', 'H'], '', {}, Board.FLAG_FINAL);
    board.segment(['G', 'J'], '', {}, Board.FLAG_FINAL);

    board.renderAll();
}

export function Theta10(e) {
    var board = new Board.Board(e, -2.5, 3, -1, 2, 100);

    // input
    board.point([-1, 0], 'A', {}, Board.FLAG_INIT);
    board.point([2, 0], 'B', {}, Board.FLAG_INIT);
    board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);
    board.glider([-0.1, 0, 'L1'], 'C', {color: 'darkblue'}, Board.FLAG_INIT);
    board.point([1.1, 1.3], 'D', {}, Board.FLAG_INIT);
    board.line(['C', 'D'], 'L2', {straightFirst: false}, Board.FLAG_INIT);

    // steps
    board.circle(['C', 'A'], 'C1');
    board.intersection(['C1', 'L2', 0], 'E');
    board.otherintersection(['C1', 'L1', 'A'], 'F');
    board.circle(['E', 'F'], 'C2');
    board.otherintersection(['C1', 'C2', 'F'], 'G');
    board.line(['A', 'G'], 'L3');
    board.otherintersection(['C2', 'L3', 'G'], 'H');
    board.line(['B', 'H'], 'L4');

    // solution
    board.intersection(['L4', 'L2'], 'I');
    board.segment(['C', 'I'], '', {}, Board.FLAG_FINAL);

    board.renderAll();
}
