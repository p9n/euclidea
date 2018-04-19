import * as Board from '../board.js';

function Iota2(e) {
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

function Iota3(e) {
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

function Iota6(e) {
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

function Iota7(e) {
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

function Iota8(e) {
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

function Iota9(e) {
  var board = new Board.Board(e, -0.5, 4, -1, 2, 120);

  // input
  board.point([0, 0], 'A', {}, Board.FLAG_INIT);
  board.line(['A', [1, -0.1]], 'L1', {straightFirst: false}, Board.FLAG_INIT);
  board.line(['A', [1, 0.85]], 'L2', {straightFirst: false}, Board.FLAG_INIT);
  board.point([1, 0.4], 'B', {}, Board.FLAG_INIT);

  // steps
  board.line(['A', 'B'], 'L3');
  board.circle(['B', 'A'], 'C1');
  board.otherintersection(['C1', 'L3', 'A'], 'D');
  board.circle(['D', 'B'], 'C2');
  board.intersection(['C1', 'C2', 0], 'E');
  board.intersection(['C1', 'C2', 1], 'F');
  board.line(['E', 'F'], 'L4');
  board.intersection(['L3', 'L4'], 'G');
  board.intersection(['C1', 'L1', 0], 'H');
  board.line(['G', 'H'], 'L5');
  board.intersection(['C2', 'L5', 1], 'I');
  board.intersection(['C2', 'L3', 0], 'J');
  board.line(['I', 'J'], 'L6');
  board.intersection(['L2', 'L6'], 'K');

  // solution
  board.line(['G', 'K'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Iota10(e) {
  var board = new Board.Board(e, -1.5, 2, -1, 2, 120);

  // input
  board.point([-1.14, -0.5], 'A', {}, Board.FLAG_INIT);
  board.point([1.44, -0.48], 'B', {}, Board.FLAG_INIT);
  board.point([0.7, 1.54], 'C', {}, Board.FLAG_INIT);
  board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);
  board.segment(['B', 'C'], 'L2', {}, Board.FLAG_INIT);
  board.segment(['C', 'A'], 'L3', {}, Board.FLAG_INIT);

  // steps
  board.glider([0.26, 1.06, 'L3'], 'D');
  board.circle(['D', 'C'], 'C1');
  board.otherintersection(['C1', 'L3', 'C'], 'E');
  board.circle(['E', 'C'], 'C2');
  board.intersection(['C2', 'L1', 0], 'F');
  board.intersection(['C2', 'L1', 1], 'G');
  board.line(['C', 'F'], 'L4');
  board.line(['C', 'G'], 'L5');
  board.otherintersection(['C1', 'L4', 'C'], 'H');
  board.otherintersection(['C1', 'L5', 'C'], 'I');

  // solution
  board.line(['H', 'I'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

export const ITEMS = [
  [9, 2, 'Third Proportional', '3L 3E', Iota2],
  [9, 3, 'Harmonic Mean of Trapezoid bases', '5E', Iota3],
  [9, 6, 'Trisection by Trapezoid Diagonals', '5E', Iota6],
  [9, 7, 'Minimum Perimeter - 2', '8E', Iota7],
  [9, 8, 'Harmonic Mean of Segments', '4E', Iota8],
  [9, 9, 'Triangle by Angle and Centroid', '7E', Iota9],
  [9, 10, 'Triangle Mid-Segment', '5E', Iota10],
];
