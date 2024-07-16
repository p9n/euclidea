import * as Board from '../board.js';

function Lambda1(e) {
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

function Lambda2_L(e) {
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

function Lambda2_E(e) {
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

function Lambda3_L(e) {
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

function Lambda3_E(e) {
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

function Lambda5(e) {
  var board = new Board.Board(e, -2, 2.5, -1.5, 2.5, 100);

  // input
  board.point([0.27, 1.51], 'A', {}, Board.FLAG_INIT);
  board.line([[0, -0.1], [1, -0.1]], 'L1', {}, Board.FLAG_INIT);
  board.point([0, 0.66], 'B', {visible: false}, Board.FLAG_INIT);
  board.parallel(['L1', 'B'], 'L2', {}, Board.FLAG_INIT);

  // steps
  board.glider([0.04, 0.66, 'L2'], 'C');
  board.glider([1.29, 0.66, 'L2'], 'D');
  board.line(['A', 'C'], 'L3');
  board.line(['A', 'D'], 'L4');
  board.glider([0.4, -0.1, 'L1'], 'E');
  board.line(['E', 'C'], 'L5');
  board.line(['E', 'D'], 'L6');
  board.intersection(['L4', 'L5'], 'F');
  board.intersection(['L1', 'L3'], 'G');
  board.line(['F', 'G'], 'L7');
  board.intersection(['L2', 'L7'], 'H');
  board.intersection(['L3', 'L6'], 'I');
  board.line(['H', 'I'], 'L8');
  board.intersection(['L5', 'L8'], 'J');

  // solution
  board.line(['A', 'J'], '', {}, Board.FLAG_FINAL);
  
  board.renderAll();
}

function Lambda7_L(e) {
  var board = new Board.Board(e, -0.5, 4, -2, 3, 100);

  // input
  board.point([0, 0], 'A', {}, Board.FLAG_INIT);
  board.point([3.2, 0], 'B', {}, Board.FLAG_INIT);
  board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);
  board.point([1.7, 1.5], 'C', {}, Board.FLAG_INIT);
  board.parallel(['L1', 'C'], 'LCD_hidden', {visible: false}, Board.FLAG_INIT);
  board.glider([0.8, 1.5, 'LCD_hidden'], 'D', {color: 'blue'}, Board.FLAG_INIT);
  board.segment(['B', 'C'], 'L2', {}, Board.FLAG_INIT);
  board.segment(['C', 'D'], 'L3', {}, Board.FLAG_INIT);
  board.segment(['D', 'A'], 'L4', {}, Board.FLAG_INIT);

  // steps
  board.parallel(['L4', 'C'], 'L5');
  board.intersection(['L5', 'L1'], 'E');
  board.perpendicularBisector(['A', 'E'], 'L6');
  board.circle(['B', 'A'], 'C1');
  board.intersection(['C1', 'L6', 0], 'F');
  board.circle(['A', 'F'], 'C2');
  board.intersection(['L1', 'C2', 0], 'G');
  board.parallel(['L4', 'G'], 'L7');
  board.intersection(['L2', 'L7'], 'H');
  board.parallel(['L1', 'H'], 'L8');

  // solution
  board.intersection(['L4', 'L8'], 'I');
  board.segment(['H', 'I'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Lambda10_L(e) {
  var board = new Board.Board(e, -3, 3, -3, 3, 100);

  // input
  board.point([-1, 0], 'A', {}, Board.FLAG_INIT);
  board.point([1, 0], 'B', {}, Board.FLAG_INIT);
  board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);

  // steps
  board.perpendicularBisector(['A', 'B'], 'L2');
  board.intersection(['L1', 'L2'], 'C');
  board.copySegment(['A', 'B', 'C'], 'C1');
  board.intersection(['C1', 'L2', 1], 'D');
  board.line(['A', 'D'], 'L3');
  board.otherintersection(['C1', 'L3', 'D'], 'E');
  board.otherintersection(['C1', 'L2', 'D'], 'F');
  board.angleBisector(['B', 'F', 'E'], 'L4');

  // solution
  board.intersection(['L1', 'L4'], 'G', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Lambda10_E(e) {
  var board = new Board.Board(e, -2, 4, -3, 3, 100);

  // input
  board.point([-1, 0], 'A', {}, Board.FLAG_INIT);
  board.point([-0.3, 0], 'B', {}, Board.FLAG_INIT);
  board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);

  // steps
  board.line(['A', 'B'], 'L2');
  board.circle(['A', 'B'], 'C1');
  board.otherintersection(['C1', 'L2', 'B'], 'C');
  board.circle(['B', 'C'], 'C2');
  board.otherintersection(['C2', 'L2', 'C'], 'D');
  board.circle(['D', 'A'], 'C3');
  board.intersection(['C1', 'C3', 0], 'E');
  board.intersection(['C1', 'C3', 1], 'F');
  board.line(['E', 'F'], 'L3');

  // solution
  board.intersection(['L1', 'L3'], 'G', {}, Board.FLAG_FINAL);

  board.renderAll();
}

export const ITEMS = [
  [11, 1, 'Fourth Proportional', '3E', Lambda1],
  [11, 2, 'Geometric Mean of Segments', '3L', Lambda2_L],
  [11, 2, 'Geometric Mean of Segments', '5E', Lambda2_E],
  [11, 3, 'Golden Section', '4L', Lambda3_L],
  [11, 3, 'Golden Section', '5E', Lambda3_E],
  [11, 5, 'Third Parallel Line', '7E', Lambda5],
  [11, 7, 'Geometric Mean of Trapezoid Bases', '6L', Lambda7_L],
  [11, 10, 'Ratio 1 to 5', '4L', Lambda10_L],
  [11, 10, 'Ratio 1 to 5', '5E', Lambda10_E],
];
