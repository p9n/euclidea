import * as Solutions from './solutions.js';
import * as Solutions2 from './solutions2.js';
import * as Solutions3 from './solutions3.js';
import * as Board from './board.js';

const ITEMS = [
    ['1-7 Inscribed Square (7E)', Solutions.Alpha7],
    ['3-9 Centroid of Quadrilateral (4L 10E)', Solutions.Gamma9],
    ['4-2 Angle of 60° - 2 (4E)', Solutions.Delta2],
    ['4-4 Equilateral Triangle in Circle (6E)', Solutions.Delta4],
    ['4-9 Square by Opposite Midpoints (10E)', Solutions.Delta9],
    ['5-3 Line Equidistant from Two Points - 1 (4E)', Solutions.Epsilon3],
    ['5-5 Hash (4E)', Solutions.Epsilon5],
    ['5-7 Line Equidistant from Two Lines (5E)', Solutions.Epsilon7],
    ['5-8 Circumscribed Square (11E)', Solutions.Epsilon8],
    ['5-10 Circle Tangent to Square Side (6E)', Solutions.Epsilon10],
    ['6-6 Translate Segment (6E)', Solutions.Zeta6],
    ['6-8 Hypotenuse and Leg (9E)', Solutions.Zeta8],
    ['6-9 Nine Point Circle (9E)', Solutions.Zeta9],
    ['7-3 Angle of 75° (3L)', Solutions.Eta3],
    ['7-7 Inscribed Circle (8E)', Solutions.Eta7],
    ['7-8 Segment by Midpoint (5E)', Solutions.Eta8],
    ['7-11 Excircle (8E)', Solutions.Eta11],
    ['8-2 Third Proportional (3L 3E)', Solutions2.Theta3],
    ['8-3 Harmonic Mean of Trapezoid bases (5E)', Solutions2.Theta5],
    ['8-7 Regular Octagon (9L)', Solutions2.Theta7_L],
    ['8-7 Regular Octagon (13E)', Solutions2.Theta7_E],
    ['8-8 Trisection by Trapezoid Diagonals (5E)', Solutions2.Theta8],
    ['8-9 Minimum Perimeter - 2 (8E)', Solutions2.Theta9],
    ['8-10 Harmonic Mean of Segments (4E)', Solutions2.Theta10],
    ['8-11 Triangle by Angle and Centroid (7E)', Solutions2.Theta11],
    ['8-12 Triangle Mid-Segment (5E)', Solutions2.Theta12],
    ['9-1 Tangent of Circle (5E)', Solutions3.Iota1],
    ['9-2 Outer Tangent (6L)', Solutions3.Iota2_L],
    ['9-2 Outer Tangent (8E)', Solutions3.Iota2_E],
    ['9-3 Inner Tangent (6L)', Solutions3.Iota3_L],
    ['9-3 Inner Tangent (8E)', Solutions3.Iota3_E],
    ['9-4 Rotation 90° (5L 9E)', Solutions3.Iota4],
    ['9-5 Rotation 60° (4L 4E)', Solutions3.Iota5],
    ['9-6 Segment Trisection (5L)', Solutions3.Iota6_L],
    ['9-6 Segment Trisection (6E)', Solutions3.Iota6_E],
    ['9-7 Segment Trisection* (8E)', Solutions3.Iota7],
    ['9-8 Chord Trisection (3L)', Solutions3.Iota8_L],
    ['9-8 Chord Trisection (3E)', Solutions3.Iota8_E],
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
