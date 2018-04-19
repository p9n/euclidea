import * as Board from '../board.js';

function Theta4_L(e) {
  var board = new Board.Board(e, -3, 4, -2, 4.5, 100);

  // input
  board.point([0, 0], 'A', {}, Board.FLAG_INIT);
  board.point([1, 0], 'B', {}, Board.FLAG_INIT);
  board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);

  // steps
  board.perpendicular(['L1', 'A'], 'L2');
  board.glider([0, -1, 'L2'], 'C', {visible: false});
  board.angleBisector(['B', 'A', 'C'], 'L3');
  board.perpendicular(['L3', 'B'], 'L4');
  board.intersection(['L3', 'L4'], 'D', {visible: false});
  board.mirrorpoint(['B', 'D'], 'E', {visible: false});
  board.angleBisector(['E', 'B', 'A'], 'L5');
  board.intersection(['L2', 'L5'], 'F');
  board.perpendicular(['L3', 'F'], 'L6');
  board.perpendicular(['L2', 'F'], 'L7');
  board.intersection(['L4', 'L7'], 'G');
  board.perpendicularBisector(['B', 'G'], 'L8');
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

function Theta4_E(e) {
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

function Theta5_L(e) {
  var board = new Board.Board(e, -1.5, 2, -1, 2, 120);

  // input
  board.point([-1, 0], 'A', {}, Board.FLAG_INIT);
  board.point([1, 0], 'B', {}, Board.FLAG_INIT);
  board.point([0.4, 1.11], 'C', {}, Board.FLAG_INIT);
  board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);
  board.segment(['B', 'C'], 'L2', {}, Board.FLAG_INIT);
  board.segment(['C', 'A'], 'L3', {}, Board.FLAG_INIT);

  // steps
  board.perpendicularBisector(['A', 'B'], 'L4');
  board.intersection(['L4', 'L1'], 'D');
  board.angleBisector(['A', 'C', 'B'], 'L5');

  // solution
  board.parallel(['L5', 'D'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Theta5_E(e) {
  var board = new Board.Board(e, -1.5, 2, -1, 3, 120);

  // input
  board.point([-1, 0], 'A', {}, Board.FLAG_INIT);
  board.point([1, 0], 'B', {}, Board.FLAG_INIT);
  board.point([0.4, 1.11], 'C', {}, Board.FLAG_INIT);
  board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);
  board.segment(['B', 'C'], 'L2', {}, Board.FLAG_INIT);
  board.segment(['C', 'A'], 'L3', {}, Board.FLAG_INIT);

  // steps
  board.line(['B', 'C'], 'L4');
  board.circle(['C', 'A'], 'C1');
  board.intersection(['C1', 'L4', 0], 'E');
  board.perpendicularBisector(['B', 'E'], 'L5');
  board.intersection(['L4', 'L5'], 'F');
  board.circle(['C', 'F'], 'C2');
  board.intersection(['C2', 'L3', 0], 'G');

  // solution
  board.line(['F', 'G'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Theta6(e) {
  var board = new Board.Board(e, -2.5, 2, -3, 3, 120);

  // input
  board.point([-1, 0], 'A', {}, Board.FLAG_INIT);
  board.point([1, 0], 'B', {}, Board.FLAG_INIT);
  board.point([0.4, 1.11], 'C', {}, Board.FLAG_INIT);
  board.polygon(['A', 'B', 'C'], '', {}, Board.FLAG_INIT);

  // steps
  board.circle(['A', 'B'], 'C1');
  board.circle(['B', 'A'], 'C2');
  board.intersection(['C1', 'C2', 0], 'D');
  board.line(['C', 'D'], 'L1');
  board.circle(['A', 'C'], 'C3');
  board.circle(['C', 'A'], 'C4');
  board.intersection(['C3', 'C4', 1], 'E');
  board.line(['B', 'E'], 'L2');

  // solution
  board.intersection(['L1', 'L2'], 'F', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Theta7(e) {
  var board = new Board.Board(e, -2.5, 2, -1.5, 2.5, 120);

  // input
  board.point([-1.8, 0.4], 'A', {}, Board.FLAG_INIT);
  board.point([-1.1, 1.8], 'B', {}, Board.FLAG_INIT);
  board.point([-0.24, 1.1], 'C', {}, Board.FLAG_INIT);
  board.point([0.4, 1], 'D', {}, Board.FLAG_INIT);

  // steps
  board.perpendicularBisector(['A', 'B'], 'L1');
  board.perpendicularBisector(['C', 'D'], 'L2');
  board.intersection(['L1', 'L2'], 'E');
  board.circle(['E', 'A'], 'C1');
  board.circle(['E', 'C'], 'C2');
  board.intersection(['C1', 'L1', 0], 'F');
  board.intersection(['C2', 'L1', 0], 'G');
  board.perpendicularBisector(['F', 'G'], 'L3');
  board.intersection(['L1', 'L3'], 'H');

  // solution
  board.circle(['E', 'H'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

export const ITEMS = [
  [8, 4, 'Regular Octagon', '9L', Theta4_L],
  [8, 4, 'Regular Octagon', '13E', Theta4_E],
  [8, 5, 'Triangle Cleaver', '3L', Theta5_L],
  [8, 5, 'Triangle Cleaver', '7E', Theta5_E],
  [8, 6, 'Torricelli Point', '6L 6E', Theta6],
  [8, 7, 'Circle Equidistant from Four Points', '6L 12E', Theta7],
];
