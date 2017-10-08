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
