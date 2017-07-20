function CreateJXGBoard(id, xmin, xmax, ymin, ymax, zoom) {
    var elem = document.getElementById(id);
    elem.className = 'jxgbox';
    elem.style.width = (xmax - xmin) * zoom + 'px';
    elem.style.height = (ymax - ymin) * zoom + 'px';
    return JXG.JSXGraph.initBoard(id, 
        {
            boundingbox: [xmin, ymax, xmax, ymin],
            showNavigation: false,
            zoom: false,
        });
}

function Alpha7(id) {
    var board = CreateJXGBoard(id, -4, 3, -2, 3, 100);

    // input
    var o = board.create('point', [0, 0], {name: 'O', color: 'blue', withLabel: true});
    var a = board.create('point', [0, 1], {name: 'A', color: 'blue', withLabel: true});
    var c1 = board.create('circle', [o, a], {strokeColor: 'blue'});

    // steps
    var c2 = board.create('circle', [a, o]);
    var i1 = board.create('intersection', [c1, c2, 0]);
    var i2 = board.create('otherintersection', [c1, c2, i1]);
    var c3 = board.create('circle', [i2, i1]);
    var l1 = board.create('line', [o, i2]);
    var i3 = board.create('otherintersection', [c1, c3, i1]);
    var i4 = board.create('intersection', [c3, l1, 0]);
    var i5 = board.create('otherintersection', [c3, l1, i4]);

    // solution
    var l2 = board.create('line', [i3, i4], {color: 'darkorange'});
    var l3 = board.create('line', [i3, i5], {color: 'darkorange'});
    var i6 = board.create('otherintersection', [l2, c1, i3]);
    var i7 = board.create('otherintersection', [l3, c1, i3]);
    var l4 = board.create('line', [a, i6], {color: 'darkorange'});
    var l5 = board.create('line', [a, i7], {color: 'darkorange'});
}

function SetDefaultOptions() {
    JXG.Options.point.size = 1;
    JXG.Options.point.strokeColor = 'darkgrey';
    JXG.Options.point.fillColor = 'darkgrey';
    JXG.Options.point.withLabel = false;
    JXG.Options.circle.strokeColor = 'darkgrey';
    JXG.Options.line.strokeColor = 'darkgrey';
}

SetDefaultOptions();
