import * as Solutions from './solutions.js';
import * as Board from './board.js';

const ITEMS = [
    ['1-7 Inscribed Square (7E)', Solutions.Alpha7],
    ['4-2 Angle of 60° - 2 (4E)', Solutions.Delta2],
    ['4-4 Equilateral Triangle in Circle (6E)', Solutions.Delta4],
    ['4-9 Square by Opposite Midpoints (10E)', Solutions.Delta9],
    ['5-3 Line Equidistant from Two Points - 1 (4E)', Solutions.Epsilon3],
    ['5-5 Hash (4E)', Solutions.Epsilon5],
    ['5-7 Line Equidistant from Two Lines (5E)', Solutions.Epsilon7],
    ['5-8 Circumscribed Square (11E)', Solutions.Epsilon8],
    ['6-6 Translate Segment (6E)', Solutions.Zeta6],
    ['6-8 Hypotenuse and Leg (9E)', Solutions.Zeta8],
]

function InitNav() {
    const sidenav = $('#sidenav');
    for (let [title, sol] of ITEMS) {
        const item = $('<div></div>');
        item.text(title);
        item.click((e) => HandleClick(e, sol));
        item.addClass('tab');
        sidenav.append(item);
    }
}

function HandleClick(e, sol) {
    let target = $(e.target);
    let container = $('#jxg-container');

    if (target.hasClass('active')) {
        return;
    }

    $('.active').removeClass('active');
    target.addClass('active');
    sol(container);
}

$(document).ready(InitNav);
$(document).ready(Board.SetDefaultOptions());
