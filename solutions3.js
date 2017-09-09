import * as Board from './board.js';

export function Iota1(e) {
    var board = new Board.Board(e, -2.5, 3.5, -2.5, 2.5, 100);

    // input
    board.point([0, 0], 'A', {}, Board.FLAG_INIT);
    board.point([-1.57, -0.1], 'B', {}, Board.FLAG_INIT);
    board.circle(['A', [0.8, 0]], 'C1', {}, Board.FLAG_INIT);

    // steps
    board.line(['A', 'B'], 'L1');
    board.circle(['A', 'B'], 'C2');
    board.intersection(['C1', 'L1', 0], 'C');
    board.circle(['C', 'B'], 'C3');
    board.otherintersection(['C2', 'L1', 'B'], 'D');
    board.otherintersection(['C3', 'L1', 'B'], 'E');
    board.circle(['D', 'E'], 'C4');
    board.intersection(['C2', 'C4', 0], 'F');
    board.line(['B', 'F'], 'L2');

    // solution
    board.line(['B', 'F'], '', {straightFirst: false}, Board.FLAG_FINAL); 

    board.renderAll();
}

