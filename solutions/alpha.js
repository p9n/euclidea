import * as Board from '../board.js';

function Alpha7(e) {
  var board = new Board.Board(e, -3, 3, -1.5, 2.5, 100);

  // input
  board.point([0, 0], 'O', {}, Board.FLAG_INIT);
  board.point([0, 1], 'A', {}, Board.FLAG_INIT);
  board.circle(['O', 'A'], 'C1', {}, Board.FLAG_INIT);

  // steps
  board.circle(['A', 'O'], 'C2');
  board.intersection(['C1', 'C2', '0'], 'I1');
  board.otherintersection(['C1', 'C2', 'I1'], 'I2');
  board.circle(['I2', 'I1'], 'C3');
  board.line(['O', 'I2'], 'L1');
  board.otherintersection(['C1', 'C3', 'I1'], 'I3');
  board.intersection(['C3', 'L1', 'O'], 'I4');
  board.otherintersection(['C3', 'L1', 'I4'], 'I5');
  board.line(['I3', 'I4'], 'L2');
  board.line(['I3', 'I5'], 'L3');
  board.otherintersection(['L2', 'C1', 'I3'], 'I6');
  board.otherintersection(['L3', 'C1', 'I3'], 'I7');
  board.line(['A', 'I6'], 'L4');
  board.line(['A', 'I7'], 'L5');

  // solution
  board.segment(['A', 'I7'], '', {}, Board.FLAG_FINAL);
  board.segment(['I7', 'I3'], '', {}, Board.FLAG_FINAL);
  board.segment(['I3', 'I6'], '', {}, Board.FLAG_FINAL);
  board.segment(['I6', 'A'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Gamma9(e) {
  var board = new Board.Board(e, -0.5, 3.5, -0.5, 2.4, 100);

  // input
  board.point([0, 0], 'A', {}, Board.FLAG_INIT);
  board.point([3, 0], 'B', {}, Board.FLAG_INIT);
  board.point([2.1, 1.7], 'C', {}, Board.FLAG_INIT);
  board.point([0.8, 1.9], 'D', {}, Board.FLAG_INIT);
  board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);
  board.segment(['B', 'C'], 'L2', {}, Board.FLAG_INIT);
  board.segment(['C', 'D'], 'L3', {}, Board.FLAG_INIT);
  board.segment(['D', 'A'], 'L4', {}, Board.FLAG_INIT);

  // steps
  board.perpendicularBisector(['A', 'D'], 'L5');
  board.intersection(['L4', 'L5'], 'E');
  board.perpendicularBisector(['B', 'C'], 'L6');
  board.intersection(['L2', 'L6'], 'F');
  board.line(['E', 'F'], 'L7');
  board.perpendicularBisector(['E', 'F'], 'L8');

  // solution
  board.intersection(['L7', 'L8'], 'G', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Gamma10(e) {
  var board = new Board.Board(e, -2.5, 2.5, -2.5, 2.5, 100);

  // input
  board.point([0, 0], 'A', {}, Board.FLAG_INIT);
  board.point([0, -1], 'B', {}, Board.FLAG_INIT);
  board.circle(['A', 'B'], 'C1', {}, Board.FLAG_INIT);
  board.glider([-0.8, 0.58, 'C1'], 'C', {}, Board.FLAG_INIT);

  // steps
  board.circle(['B', 'C'], 'C2');
  board.otherintersection(['C1', 'C2', 'C'], 'D');
  board.circle(['C', 'D'], 'C3');
  board.otherintersection(['C2', 'C3', 'D'], 'E');
  board.line(['C', 'E'], 'L1');
  board.line(['A', 'B'], 'L2');
  board.intersection(['L1', 'L2'], 'F');
  board.line(['D', 'F'], 'L3');
  board.perpendicular(['B', 'L2'], 'L4');

  // solution
  board.intersection(['L1', 'L4'], 'G');
  board.intersection(['L3', 'L4'], 'H');
  board.polygon(['F', 'G', 'H'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Delta2(e) {
  var board = new Board.Board(e, -3, 3, -2, 3, 100);

  // input
  board.point([0, 1], 'A', {}, Board.FLAG_INIT);
  board.line([[-1, 0], [1, 0]], 'L1', {}, Board.FLAG_INIT);

  // steps
  board.glider([-1, 0, 'L1'], 'B');
  board.circle(['A', 'B'], 'C1');
  board.circle(['B', 'A'], 'C2');
  board.intersection(['C2', 'L1', 0], 'I1');
  board.intersection(['C1', 'C2', 1], 'I2');
  board.circle(['I1', 'I2'], 'C3');
  board.otherintersection(['C1', 'C3', 'I2'], 'I3');

  // solution
  board.line(['A', 'I3'], 'L2');
  board.intersection(['L1', 'L2'], 'I4', {}, Board.FLAG_FINAL);
  board.line(['A', 'I4'], '', {straightLast: false}, Board.FLAG_FINAL);
  board.line(['B', 'I4'], '', {straightLast: false}, Board.FLAG_FINAL);

  board.renderAll();
}

function Delta4(e) {
  var board = new Board.Board(e, -3, 3, -2, 1.5, 100);

  // input
  board.circle([[0, 0], [0, 1]], 'C1', {}, Board.FLAG_INIT);
  board.point([1, 0], 'A', {}, Board.FLAG_INIT);

  // steps
  board.glider([0.91, -0.41, 'C1'], 'B');
  board.circle(['B', 'A'], 'C2');
  board.otherintersection(['C1', 'C2', 'A'], 'I1-2');
  board.circle(['A', 'I1-2'], 'C3');
  board.otherintersection(['C2', 'C3', 'I1-2'], 'I2-3');
  board.circle(['I2-3', 'A'], 'C4');
  board.intersection(['C3', 'C4'], 'I3-4');
  board.otherintersection(['C3', 'C4', 'I3-4'], 'I3-4-other');
  board.line(['A', 'I3-4'], 'L1');
  board.line(['A', 'I3-4-other'], 'L2');
  board.otherintersection(['C1', 'L1', 'A'], 'I-C1-L1');
  board.otherintersection(['C1', 'L2', 'A'], 'I-C1-L2');
  board.line(['I-C1-L1', 'I-C1-L2'], 'L3');

  // solution
  board.segment(['A', 'I-C1-L1'], '', {}, Board.FLAG_FINAL);
  board.segment(['A', 'I-C1-L2'], '', {}, Board.FLAG_FINAL);
  board.segment(['I-C1-L1', 'I-C1-L2'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Delta9(e) {
  var board = new Board.Board(e, -2, 3.5, -2.5, 3, 100);

  // input
  board.point([0.5, 0.5], 'A', {}, Board.FLAG_INIT);
  board.point([-0.5, -0.5], 'B', {}, Board.FLAG_INIT);

  // steps
  board.circle(['A', 'B'], 'C1');
  board.circle(['B', 'A'], 'C2');
  board.intersection(['C1', 'C2', '0'], 'I1-2');
  board.circle(['I1-2', 'A'], 'C3');
  board.otherintersection(['C1', 'C3', 'B'], 'I1-3');
  board.circle(['I1-3', 'A'], 'C4');
  board.otherintersection(['C3', 'C4', 'B'], 'I3-4');
  board.line(['A', 'I3-4'], 'L1');
  board.intersection(['L1', 'C1'], 'I1');
  board.circle(['I1', 'A'], 'C5');
  board.intersection(['C1', 'C5'], 'I1-5');
  board.otherintersection(['C1', 'C5', 'I1-5'], 'I1-5-other');
  board.line(['I1-5', 'I1-5-other'], 'L2');
  board.otherintersection(['L1', 'C1', 'I1'], 'I2');
  board.circle(['I2', 'A'], 'C6');
  board.intersection(['C1', 'C6'], 'I1-6');
  board.otherintersection(['C1', 'C6', 'I1-6'], 'I1-6-other');
  board.line(['I1-6', 'I1-6-other'], 'L3');
  board.otherintersection(['C2', 'C5', 'A'], 'I2-5');
  board.otherintersection(['C2', 'C6', 'A'], 'I2-6');
  board.line(['I2-5', 'I2-6'], 'L4');

  // solution
  board.intersection(['L1', 'L2'], 'A1', {visible: false});
  board.intersection(['L2', 'L4'], 'A2', {visible: false});
  board.intersection(['L4', 'L3'], 'A3', {visible: false});
  board.intersection(['L3', 'L1'], 'A4', {visible: false});
  board.segment(['A1', 'A2'], '', {}, Board.FLAG_FINAL);
  board.segment(['A2', 'A3'], '', {}, Board.FLAG_FINAL);
  board.segment(['A3', 'A4'], '', {}, Board.FLAG_FINAL);
  board.segment(['A4', 'A1'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Epsilon3(e) {
  var board = new Board.Board(e, -1.5, 2.5, -1.5, 1.5, 100);

  // input
  board.point([0, 0], 'A', {}, Board.FLAG_INIT);
  board.point([1, 0], 'B', {}, Board.FLAG_INIT);
  board.point([-0.55, 1.1], 'C', {withLabel: true}, Board.FLAG_INIT);

  // steps
  board.circle(['A', 'C'], 'C1');
  board.line(['A', 'C'], 'L1');
  board.otherintersection(['C1', 'L1', 'C'], 'I1');
  board.circle(['B', 'I1'], 'C2');
  board.otherintersection(['C1', 'C2', 'I1'], 'I2');

  // solution
  board.line(['C', 'I2'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Epsilon5(e) {
  var board = new Board.Board(e, -3, 3, -1.5, 3, 100);

  // input
  board.point([0, 0], 'O', {}, Board.FLAG_INIT);
  board.line([[-2, 0], [0, 0.6]], 'L1', {}, Board.FLAG_INIT);
  board.point([0, 1], 'HIDDEN1', {visible: false}, Board.FLAG_INIT);
  board.parallel(['L1', 'HIDDEN1'], 'L2', {}, Board.FLAG_INIT);
  board.line([[0, 1], [1, 0]], 'L3', {}, Board.FLAG_INIT);
  board.point([0, 2.1], 'HIDDEN2', {visible: false}, Board.FLAG_INIT);
  board.parallel(['L3', 'HIDDEN2'], 'L4', {}, Board.FLAG_INIT);

  // steps
  board.intersection(['L2', 'L3'], 'A');
  board.intersection(['L1', 'L4'], 'B');
  board.line(['A', 'O'], 'L5');
  board.circle(['A', 'O'], 'C1');
  board.otherintersection(['C1', 'L5', 'O'], 'C');
  board.circle(['B', 'C'], 'C2');
  board.otherintersection(['C1', 'C2', 'C'], 'D');
  board.line(['O', 'D'], 'L6');

  // solution
  board.intersection(['L1', 'L6'], 'I1');
  board.intersection(['L2', 'L6'], 'I2');
  board.intersection(['L3', 'L6'], 'I3');
  board.intersection(['L4', 'L6'], 'I4');
  board.segment(['I1', 'I2'], '', {}, Board.FLAG_FINAL);
  board.segment(['I3', 'I4'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Epsilon7(e) {
  var board = new Board.Board(e, -3, 3, -1, 2, 100);

  // input
  board.line([[0, 0], [1, 0]], 'L1', {}, Board.FLAG_INIT);
  board.line([[0, 1], [1, 1]], 'L2', {}, Board.FLAG_INIT);

  // steps
  board.glider([-2.1, 0, 'L1'], 'A');
  board.glider([-1.44, 0, 'L1'], 'B');
  board.circle(['B', 'A'], 'C1');
  board.otherintersection(['C1', 'L1', 'A'], 'C');
  board.circle(['C', 'A'], 'C2');
  board.intersection(['C2', 'L2', 0], 'D');
  board.otherintersection(['C2', 'L2', 'D'], 'E');
  board.line(['A', 'D'], 'L3');
  board.line(['A', 'E'], 'L4');
  board.otherintersection(['C1', 'L3', 'A'], 'F');
  board.otherintersection(['C1', 'L4', 'A'], 'G');

  // solution
  board.line(['F', 'G'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Epsilon8(e) {
  var board = new Board.Board(e, -3, 3, -2.5, 3.5, 100);

  // input
  board.line([[0, 0], [1, 0]], 'L1', {}, Board.FLAG_INIT);
  board.point([0, 1.5], 'O', {}, Board.FLAG_INIT);
  board.point([0.6, 1.5], 'P', {}, Board.FLAG_INIT);
  board.circle(['O', 'P'], 'C1', {}, Board.FLAG_INIT);

  // steps
  board.glider([-1.6, 0, 'L1'], 'A');
  board.circle(['A', 'O'], 'C2');
  board.glider([0.9, 0, 'L1'], 'B');
  board.circle(['B', 'O'], 'C3');
  board.otherintersection(['C2', 'C3', 'O'], 'C');
  board.line(['O', 'C'], 'L2');
  board.intersection(['L1', 'L2'], 'D');
  board.circle(['D', 'O'], 'C4');
  board.intersection(['C4', 'L1', 0], 'E');
  board.line(['E', 'O'], 'L3');
  board.intersection(['C1', 'L2', 0], 'F');
  board.intersection(['C1', 'L2', 1], 'G');
  board.circle(['F', 'O'], 'C5');
  board.circle(['G', 'O'], 'C6');
  board.otherintersection(['L3', 'C5', 'O'], 'H');
  board.otherintersection(['L3', 'C6', 'O'], 'I');
  board.line(['F', 'H'], 'L4');
  board.otherintersection(['L4', 'C5', 'H'], 'J');
  board.line(['J', 'I'], 'L5');
  board.line(['I', 'G'], 'L6');
  board.otherintersection(['L6', 'C6', 'I'], 'K');
  board.line(['K', 'H'], 'L7');

  // solution
  board.segment(['H', 'J'], '', {color: 'darkorange'}, Board.FLAG_FINAL);
  board.segment(['I', 'J'], '', {color: 'darkorange'}, Board.FLAG_FINAL);
  board.segment(['I', 'K'], '', {color: 'darkorange'}, Board.FLAG_FINAL);
  board.segment(['H', 'K'], '', {color: 'darkorange'}, Board.FLAG_FINAL);

  board.renderAll();
}

function Epsilon10(e) {
  var board = new Board.Board(e, -2, 3.5, -1.5, 3, 100);

  // input
  board.point([0, 0], 'A', {}, Board.FLAG_INIT);
  board.point([1.5, 0], 'B', {}, Board.FLAG_INIT);
  board.point([1.5, 1.5], 'C', {}, Board.FLAG_INIT);
  board.point([0, 1.5], 'D', {}, Board.FLAG_INIT);
  board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);
  board.segment(['B', 'C'], 'L2', {}, Board.FLAG_INIT);
  board.segment(['C', 'D'], 'L3', {}, Board.FLAG_INIT);
  board.segment(['D', 'A'], 'L4', {}, Board.FLAG_INIT);

  // solution
  board.circle(['A', 'B'], 'C1');
  board.circle(['B', 'A'], 'C2');
  board.intersection(['C1', 'C2', 0], 'E');
  board.intersection(['C1', 'C2', 1], 'F');
  board.line(['E', 'F'], 'L5');
  board.intersection(['L3', 'L5'], 'G');
  board.intersection(['L1', 'L5'], 'H');
  board.circle(['G', 'H'], 'C3');
  board.intersection(['C1', 'C3', 0], 'I');
  board.intersection(['C1', 'C3', 1], 'J');
  board.line(['I', 'J'], 'L6');
  board.intersection(['L6', 'L5'], 'H');

  // solution
  board.circle(['H', 'A'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Zeta6(e) {
  var board = new Board.Board(e, -3, 2.5, -1.5, 3, 100);

  // input
  board.point([-0.5, 0], 'A', {}, Board.FLAG_INIT);
  board.point([0, 0.618], 'B', {}, Board.FLAG_INIT);
  board.point([1, 0], 'C', {}, Board.FLAG_INIT);
  board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);

  // steps
  board.circle(['A', 'B'], 'C1');
  board.circle(['B', 'A'], 'C2');
  board.intersection(['C1', 'C2', 0], 'I1');
  board.intersection(['C1', 'C2', 1], 'I2');
  board.circle(['I1', 'C'], 'C3');
  board.circle(['I2', 'C'], 'C4');
  board.otherintersection(['C3', 'C4', 'C'], 'I3');
  board.line(['C', 'I3'], 'L2');
  board.circle(['B', 'I3'], 'C5');

  // solution
  board.otherintersection(['C5', 'L2', 'I3'], 'D');
  board.segment(['C', 'D'], '', {}, Board.FLAG_FINAL);
  board.point(['X(D)', 'Y(D)'], 'D"', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Zeta8(e) {
  var board = new Board.Board(e, -3.5, 2, -1.5, 3, 100);

  // input
  board.point([-2, 0], 'A', {}, Board.FLAG_INIT);
  board.point([0, 0], 'B', {}, Board.FLAG_INIT);
  board.point([0.1, 1.44], 'C', {}, Board.FLAG_INIT);
  board.point([0.3, 1.25], 'D', {}, Board.FLAG_INIT);
  board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);
  board.segment(['C', 'D'], 'L2', {}, Board.FLAG_INIT);

  // steps
  board.line(['B', 'D'], 'L3');
  board.circle(['D', 'B'], 'C1');
  board.otherintersection(['C1', 'L3', 'B'], 'E');
  board.line(['E', 'C'], 'L4');
  board.circle(['C', 'E'], 'C2');
  board.otherintersection(['C2', 'L4', 'E'], 'F');
  board.circle(['B', 'F'], 'C3');
  board.circle(['A', 'B'], 'C4');
  board.intersection(['C3', 'C4', 0], 'G');
  board.circle(['G', 'B'], 'C5');
  board.intersection(['C3', 'C5', 0], 'H');
  board.line(['A', 'H'], 'L5');
  board.line(['B', 'G'], 'L6');

  // solution
  board.intersection(['L5', 'L6'], 'I', {color: 'darkorange'});
  board.segment(['A', 'I'], '', {}, Board.FLAG_FINAL);
  board.segment(['B', 'I'], '', {}, Board.FLAG_FINAL);
  board.segment(['A', 'B'], '', {}, Board.FLAG_FINAL);
  board.point(['X(A)', 'Y(A)'], 'A"', {color: 'darkorange'});
  board.point(['X(B)', 'Y(B)'], 'B"', {color: 'darkorange'});
  board.point(['X(I)', 'Y(I)'], 'I"', {color: 'darkorange'});

  board.renderAll();
}

function Zeta9(e) {
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
  board.intersection(['L1', 'L4'], 'F');
  board.circle(['F', 'A'], 'C3');
  board.otherintersection(['L2', 'C3', 'B'], 'G');
  board.otherintersection(['L3', 'C3', 'A'], 'H');
  board.circle(['G', 'F'], 'C4');
  board.circle(['H', 'F'], 'C5');
  board.otherintersection(['C4', 'C5', 'F'], 'I');
  board.line(['F', 'I'], 'L5');
  board.intersection(['C3', 'C5', 0], 'J');
  board.intersection(['C3', 'C5', 1], 'K');
  board.line(['J', 'K'], 'L6');
  board.intersection(['L5', 'L6'], 'L');

  // solution
  board.circle(['L', 'F'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Eta3(e) {
  var board = new Board.Board(e, -1.5, 2, -1, 2, 120);

  // input
  board.point([0, 0], 'A', {}, Board.FLAG_INIT);
  board.line(['A', [1, 0]], 'L1', {straightFirst: false}, Board.FLAG_INIT);

  // steps
  board.point([0.09, 1.01], 'B');
  board.circle(['B', 'A'], 'C1');
  board.otherintersection(['C1', 'L1', 'A'], 'C');
  board.circle(['C', 'B'], 'C2');
  board.intersection(['C1', 'C2', 0], 'D');

  // solution
  board.angleBisector(['C', 'A', 'D'], 'L2', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Eta7(e) {
  var board = new Board.Board(e, -1.5, 2, -1, 2, 120);

  // input
  board.point([-1, 0], 'A', {}, Board.FLAG_INIT);
  board.point([1, 0], 'B', {}, Board.FLAG_INIT);
  board.point([0.4, 1.11], 'C', {}, Board.FLAG_INIT);
  board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);
  board.segment(['B', 'C'], 'L2', {}, Board.FLAG_INIT);
  board.segment(['C', 'A'], 'L3', {}, Board.FLAG_INIT);

  // steps
  board.circle(['B', 'C'], 'C1');
  board.intersection(['C1', 'L1', 1], 'D');
  board.circle(['A', 'D'], 'C2');
  board.intersection(['C2', 'L3', 1], 'E');
  board.circle(['C', 'E'], 'C3');
  board.circle(['E', 'C'], 'C4');
  board.intersection(['C3', 'C4', 0], 'F');
  board.intersection(['C3', 'C4', 1], 'G');
  board.line(['F', 'G'], 'L4');
  board.intersection(['C3', 'L2', 1], 'H');
  board.circle(['H', 'C'], 'C5');
  board.otherintersection(['C4', 'C5', 'C'], 'I');
  board.line(['C', 'I'], 'L5');
  board.intersection(['L4', 'L5'], 'J');
  board.intersection(['L4', 'L3'], 'K');

  // solution
  board.circle(['J', 'K'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Eta8(e) {
  var board = new Board.Board(e, -0.5, 3, -1, 2, 120);

  // input
  board.point([0, 0], 'A', {}, Board.FLAG_INIT);
  board.line(['A', [1, -0.1]], 'L1', {straightFirst: false}, Board.FLAG_INIT);
  board.line(['A', [1, 0.85]], 'L2', {straightFirst: false}, Board.FLAG_INIT);
  board.point([1, 0.4], 'B', {}, Board.FLAG_INIT);

  // steps
  board.glider([0.5, 0, 'L1'], 'C');
  board.circle(['B', 'C'], 'C1');
  board.otherintersection(['C1', 'L1', 'C'], 'D');
  board.line(['C', 'B'], 'L3');
  board.line(['D', 'B'], 'L4');
  board.otherintersection(['C1', 'L3', 'C'], 'E');
  board.otherintersection(['C1', 'L4', 'D'], 'F');
  board.line(['E', 'F'], 'L5');
  board.intersection(['L5', 'L2'], 'G');
  board.line(['B', 'G'], 'L6');

  // solution
  board.intersection(['L6', 'L1'], 'H');
  board.segment(['G', 'H'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

function Eta11(e) {
  var board = new Board.Board(e, -1.5, 2, -1, 2, 120);

  // input
  board.point([0.4, 0], 'A', {}, Board.FLAG_INIT);
  board.point([1.51, 0], 'B', {}, Board.FLAG_INIT);
  board.point([0.54, 0.88], 'C', {}, Board.FLAG_INIT);
  board.line(['A', 'B'], 'L1', {}, Board.FLAG_INIT);
  board.line(['B', 'C'], 'L2', {}, Board.FLAG_INIT);
  board.line(['C', 'A'], 'L3', {}, Board.FLAG_INIT);

  // steps
  board.circle(['B', 'C'], 'C1');
  board.intersection(['C1', 'L1', 1], 'D');
  board.circle(['A', 'D'], 'C2');
  board.intersection(['C2', 'L3', 1], 'E');
  board.circle(['C', 'E'], 'C3');
  board.circle(['E', 'C'], 'C4');
  board.intersection(['C3', 'C4', 0], 'F');
  board.intersection(['C3', 'C4', 1], 'G');
  board.line(['F', 'G'], 'L4');
  board.intersection(['C3', 'L2', 0], 'H');
  board.circle(['H', 'C'], 'C5');
  board.otherintersection(['C4', 'C5', 'C'], 'I');
  board.line(['C', 'I'], 'L5');
  board.intersection(['L4', 'L5'], 'J');
  board.intersection(['L4', 'L3'], 'K');

  // solution
  board.circle(['J', 'K'], '', {}, Board.FLAG_FINAL);

  board.renderAll();
}

export const ITEMS = [
  ['1-7 Inscribed Square (7E)', Alpha7],
  ['3-9 Centroid of Quadrilateral (4L 10E)', Gamma9],
  ['3-10 Isosceles Triangle by Tangent Points (8E)', Gamma10],
  ['4-2 Angle of 60° - 2 (4E)', Delta2],
  ['4-4 Equilateral Triangle in Circle (6E)', Delta4],
  ['4-9 Square by Opposite Midpoints (10E)', Delta9],
  ['5-3 Line Equidistant from Two Points - 1 (4E)', Epsilon3],
  ['5-5 Hash (4E)', Epsilon5],
  ['5-7 Line Equidistant from Two Lines (5E)', Epsilon7],
  ['5-8 Circumscribed Square (11E)', Epsilon8],
  ['5-10 Circle Tangent to Square Side (6E)', Epsilon10],
  ['6-6 Translate Segment (6E)', Zeta6],
  ['6-8 Hypotenuse and Leg (9E)', Zeta8],
  ['6-9 Nine Point Circle (9E)', Zeta9],
  ['7-3 Angle of 75° (3L)', Eta3],
  ['7-7 Inscribed Circle (8E)', Eta7],
  ['7-8 Segment by Midpoint (5E)', Eta8],
  ['7-11 Excircle (8E)', Eta11],
];
