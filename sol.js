function Alpha7(e) {
    var board = new Board(e, -3, 3, -1.5, 2.5, 100);

    // input
    board.create('point', [0, 0], 'O', {color: 'blue'});
    board.create('point', [0, 1], 'A', {color: 'blue'});
    board.create('circle', ['O', 'A'], 'C1', {strokeColor: 'blue'});

    // steps
    board.push('circle', ['A', 'O'], 'C2');
    board.push('intersection', ['C1', 'C2', '0'], 'I1');
    board.push('otherintersection', ['C1', 'C2', 'I1'], 'I2');
    board.push('circle', ['I2', 'I1'], 'C3');
    board.push('line', ['O', 'I2'], 'L1');
    board.push('otherintersection', ['C1', 'C3', 'I1'], 'I3');
    board.push('intersection', ['C3', 'L1', 'O'], 'I4');
    board.push('otherintersection', ['C3', 'L1', 'I4'], 'I5');

    // solution
    board.push('line', ['I3', 'I4'], 'L2', {color: 'darkorange'});
    board.push('line', ['I3', 'I5'], 'L3', {color: 'darkorange'});
    board.push('otherintersection', ['L2', 'C1', 'I3'], 'I6');
    board.push('otherintersection', ['L3', 'C1', 'I3'], 'I7');
    board.push('line', ['A', 'I6'], 'L4', {color: 'darkorange'});
    board.push('line', ['A', 'I7'], 'L5', {color: 'darkorange'});

    board.createAll();
}

function Delta9(e) {
    var board = new Board(e, -2, 3.5, -2.5, 3, 100);

    // input
    board.create('point', [0.5, 0.5], 'A', {color: 'blue'});
    board.create('point', [-0.5, -0.5], 'B', {color: 'blue'});

    // steps
    board.push('circle', ['A', 'B'], 'C1');
    board.push('circle', ['B', 'A'], 'C2');
    board.push('intersection', ['C1', 'C2', '0'], 'I1-2');
    board.push('circle', ['I1-2', 'A'], 'C3');
    board.push('otherintersection', ['C1', 'C3', 'B'], 'I1-3');
    board.push('circle', ['I1-3', 'A'], 'C4');
    board.push('otherintersection', ['C3', 'C4', 'B'], 'I3-4');

    board.push('line', ['A', 'I3-4'], 'L1', {color: 'darkorange'});

    board.push('intersection', ['L1', 'C1'], 'I1');
    board.push('circle', ['I1', 'A'], 'C5');
    board.push('intersection', ['C1', 'C5'], 'I1-5');
    board.push('otherintersection', ['C1', 'C5', 'I1-5'], 'I1-5-other');
    board.push('line', ['I1-5', 'I1-5-other'], 'L2', {color: 'darkorange'});

    board.push('otherintersection', ['L1', 'C1', 'I1'], 'I2');
    board.push('circle', ['I2', 'A'], 'C6');
    board.push('intersection', ['C1', 'C6'], 'I1-6');
    board.push('otherintersection', ['C1', 'C6', 'I1-6'], 'I1-6-other');
    board.push('line', ['I1-6', 'I1-6-other'], 'L3', {color: 'darkorange'});

    board.push('otherintersection', ['C2', 'C5', 'A'], 'I2-5');
    board.push('otherintersection', ['C2', 'C6', 'A'], 'I2-6');
    board.push('line', ['I2-5', 'I2-6'], 'L4', {color: 'darkorange'});

    board.createAll();
}

