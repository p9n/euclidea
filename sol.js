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
}

