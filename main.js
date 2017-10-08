import * as Alpha from './solutions/alpha.js';  // alpha to eta
import * as Theta from './solutions/theta.js';
import * as Iota from './solutions/iota.js';
import * as Kappa from './solutions/kappa.js';
import * as Board from './board.js';

const ITEMS = [
  ['1-7 Inscribed Square (7E)', Alpha.Alpha7],
  ['3-9 Centroid of Quadrilateral (4L 10E)', Alpha.Gamma9],
  ['4-2 Angle of 60° - 2 (4E)', Alpha.Delta2],
  ['4-4 Equilateral Triangle in Circle (6E)', Alpha.Delta4],
  ['4-9 Square by Opposite Midpoints (10E)', Alpha.Delta9],
  ['5-3 Line Equidistant from Two Points - 1 (4E)', Alpha.Epsilon3],
  ['5-5 Hash (4E)', Alpha.Epsilon5],
  ['5-7 Line Equidistant from Two Lines (5E)', Alpha.Epsilon7],
  ['5-8 Circumscribed Square (11E)', Alpha.Epsilon8],
  ['5-10 Circle Tangent to Square Side (6E)', Alpha.Epsilon10],
  ['6-6 Translate Segment (6E)', Alpha.Zeta6],
  ['6-8 Hypotenuse and Leg (9E)', Alpha.Zeta8],
  ['6-9 Nine Point Circle (9E)', Alpha.Zeta9],
  ['7-3 Angle of 75° (3L)', Alpha.Eta3],
  ['7-7 Inscribed Circle (8E)', Alpha.Eta7],
  ['7-8 Segment by Midpoint (5E)', Alpha.Eta8],
  ['7-11 Excircle (8E)', Alpha.Eta11],
  ['8-2 Third Proportional (3L 3E)', Theta.Theta3],
  ['8-3 Harmonic Mean of Trapezoid bases (5E)', Theta.Theta5],
  ['8-7 Regular Octagon (9L)', Theta.Theta7_L],
  ['8-7 Regular Octagon (13E)', Theta.Theta7_E],
  ['8-8 Trisection by Trapezoid Diagonals (5E)', Theta.Theta8],
  ['8-9 Minimum Perimeter - 2 (8E)', Theta.Theta9],
  ['8-10 Harmonic Mean of Segments (4E)', Theta.Theta10],
  ['8-11 Triangle by Angle and Centroid (7E)', Theta.Theta11],
  ['8-12 Triangle Mid-Segment (5E)', Theta.Theta12],
  ['9-1 Tangent of Circle (5E)', Iota.Iota1],
  ['9-2 Outer Tangent (6L)', Iota.Iota2_L],
  ['9-2 Outer Tangent (8E)', Iota.Iota2_E],
  ['9-3 Inner Tangent (6L)', Iota.Iota3_L],
  ['9-3 Inner Tangent (8E)', Iota.Iota3_E],
  ['9-4 Rotation 90° (5L 9E)', Iota.Iota4],
  ['9-5 Rotation 60° (4L 4E)', Iota.Iota5],
  ['9-6 Segment Trisection (5L)', Iota.Iota6_L],
  ['9-6 Segment Trisection (6E)', Iota.Iota6_E],
  ['9-7 Segment Trisection* (8E)', Iota.Iota7],
  ['9-8 Chord Trisection (3L)', Iota.Iota8_L],
  ['9-8 Chord Trisection (3E)', Iota.Iota8_E],
  ['9-9 Ratio 1 to 5 (4L)', Iota.Iota9_L],
  ['9-9 Ratio 1 to 5 (5E)', Iota.Iota9_E],
  ['9-10 Three Circles - 1 (7L)', Iota.Iota10_L],
  ['9-10 Three Circles - 1 (10E)', Iota.Iota10_E],
  ['9-11 Chord Bisection (4L)', Iota.Iota11_L],
  ['9-11 Chord Bisection (5E)', Iota.Iota11_E],
  ['9-12 Three Circles - 2 (9L)', Iota.Iota12_L],
  ['9-12 Three Circles - 2 (14E)', Iota.Iota12_E],
  ['10-1 Fourth Proportional (3E)', Kappa.Kappa1],
  ];

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
