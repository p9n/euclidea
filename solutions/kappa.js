import * as Board from '../board.js';

export function Kappa1(e) {
  var board = new Board.Board(e, -0.5, 3.5, -0.5, 2.5, 100);

  // input
  board.point([0, 0], 'O', {withLabel: true}, Board.FLAG_INIT);
  board.point([2.1, 0], 'A', {withLabel: true}, Board.FLAG_INIT);
  board.line(['O', 'A'], 'L1', {}, Board.FLAG_INIT);
  board.glider([2.56, 0, 'L1'], 'B', {withLabel: true}, Board.FLAG_INIT);
  board.point([1.53, 1.1], 'C', {withLabel: true}, Board.FLAG_INIT);
  board.line(['O', 'C'], 'L2', {straightFirst: false}, Board.FLAG_INIT);

  // steps
  board.circle(['A', 'B'], 'C1');
  board.otherintersection(['L1', 'C1', 'B'], 'D');
  board.circle(['C', 'D'], 'C2');
  board.otherintersection(['C1', 'C2', 'D'], 'E');
  board.line(['B', 'E'], 'L3');

  // solution
  board.intersection(['L2', 'L3'], 'F', {}, Board.FLAG_FINAL);

  board.renderAll();
}

export function Kappa2_L(e) {
  var board = new Board.Board(e, -0.5, 2.5, -2, 1.5, 100);

  // input
  board.point([0, 0], 'A', {}, Board.FLAG_INIT);
  board.point([2.1, 0], 'B', {}, Board.FLAG_INIT);
  board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);
  board.glider([0.6, 0, 'L1'], 'C', {}, Board.FLAG_INIT);
  board.point([1.53, 1.1], 'D', {}, Board.FLAG_INIT);
  board.line(['C', 'D'], 'L2', {straightFirst: false}, Board.FLAG_INIT);

  // steps
  board.perpendicularBisector(['A', 'B'], 'L3');
  board.perpendicular(['L2', 'C'], 'L4');
  board.intersection(['L3', 'L4'], 'E');
  board.circle(['E', 'A'], 'C1');
  board.intersection(['C1', 'L2', 0], 'F');

  // solution
  board.segment(['C', 'F'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

export function Kappa2_E(e) {
  var board = new Board.Board(e, -0.5, 3.5, -2, 1.5, 100);

  // input
  board.point([0, 0], 'A', {}, Board.FLAG_INIT);
  board.point([2.1, 0], 'B', {}, Board.FLAG_INIT);
  board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);
  board.glider([0.6, 0, 'L1'], 'C', {}, Board.FLAG_INIT);
  board.point([1.53, 1.1], 'D', {}, Board.FLAG_INIT);
  board.line(['C', 'D'], 'L2', {straightFirst: false}, Board.FLAG_INIT);

  // steps
  board.circle(['B', 'C'], 'C1');
  board.circle(['C', 'A'], 'C2');
  board.otherintersection(['C2', 'L1', 'A'], 'E');
  board.circle(['E', 'C'], 'C3');
  board.intersection(['C2', 'C3', 0], 'F');
  board.intersection(['C2', 'C3', 1], 'G');
  board.line(['F', 'G'], 'L3');
  board.intersection(['C1', 'L3', 0], 'H');
  board.circle(['C', 'H'], 'C4');
  board.intersection(['C4', 'L2', 0], 'I');

  // solution
  board.segment(['C', 'I'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

export function Kappa3_L(e) {
  var board = new Board.Board(e, -2.5, 2.5, -2, 2, 100);

  // input
  board.point([0, 0], 'A', {}, Board.FLAG_INIT);
  board.point([1.5, 0], 'B', {}, Board.FLAG_INIT);
  board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);

  // steps
  board.line(['A', 'B'], 'L2');
  board.perpendicularBisector(['A', 'B'], 'L3');
  board.intersection(['L1', 'L3'], 'C');
  board.copySegment(['A', 'B', 'C'], 'C1');
  board.intersection(['C1', 'L3', 0], 'D');
  board.intersection(['C1', 'L2', 1], 'E');
  board.copySegment(['A', 'D', 'E'], 'C2');

  // solution
  board.intersection(['C2', 'L2', 0], 'F', {}, Board.FLAG_FINAL);
  
  board.renderAll();
}

export function Kappa3_E(e) {
  var board = new Board.Board(e, -2, 2.5, -1.5, 2.5, 100);

  // input
  board.point([0, 0], 'A', {}, Board.FLAG_INIT);
  board.point([1, 0], 'B', {}, Board.FLAG_INIT);
  board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);

  // steps
  board.circle(['A', 'B'], 'C1');
  board.circle(['B', 'A'], 'C2');
  board.intersection(['C1', 'C2', 1], 'C');
  board.circle(['C', 'A'], 'C3');
  board.otherintersection(['C2', 'C3', 'A'], 'D');
  board.line(['A', 'D'], 'L2');
  board.otherintersection(['C1', 'C3', 'B'], 'E');
  board.intersection(['L2', 'C1'], 'F');
  board.circle(['E', 'F'], 'C4');

  // solution
  board.intersection(['C4', 'L1', 0], 'G', {}, Board.FLAG_FINAL);
  
  board.renderAll();
}
