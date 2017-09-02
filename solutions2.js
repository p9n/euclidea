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
    board.otherintersection(['C3', 'L', 'A'], 'E', {color: 'darkorange'});
    board.segment(['A', 'E'], '', {color: 'darkorange'});
    
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
    board.line(['E', 'G'], '', {color: 'darkorange'});

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
    board.segment(['A', 'B'], '', {color: 'darkorange'}, Board.FLAG_FINAL);
    board.segment(['B', 'A3'], '', {color: 'darkorange'}, Board.FLAG_FINAL);
    board.segment(['A3', 'A4'], '', {color: 'darkorange'}, Board.FLAG_FINAL);
    board.segment(['A4', 'A5'], '', {color: 'darkorange'}, Board.FLAG_FINAL);
    board.segment(['A5', 'F'], '', {color: 'darkorange'}, Board.FLAG_FINAL);
    board.segment(['F', 'A7'], '', {color: 'darkorange'}, Board.FLAG_FINAL);
    board.segment(['A7', 'A8'], '', {color: 'darkorange'}, Board.FLAG_FINAL);
    board.segment(['A8', 'A'], '', {color: 'darkorange'}, Board.FLAG_FINAL);

    board.renderAll();
}

export function Theta7_E(e) {
}
