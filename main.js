import * as Alpha from './solutions/alpha.js';  // alpha to eta
import * as Theta from './solutions/theta.js';
import * as Iota from './solutions/iota.js';
import * as Kappa from './solutions/kappa.js';
import * as Lambda from './solutions/lambda.js';
import * as Board from './board.js';

const ITEMS = [].concat(Alpha.ITEMS, Theta.ITEMS, Iota.ITEMS, Kappa.ITEMS,
                        Lambda.ITEMS);

function InitNav() {
  const sidenav = $('#sidenav');
  const title_re = /^(\d+-\d+) .* \((.*)\)$/;
  const callback_map = {};
  for (let [title, sol] of ITEMS) {
    const item = $('<a></a>');
    item.text(title);
    item.addClass('tab');

    let [unused_str, problem_no, steps] = title_re.exec(title);
    let suffix = '';
    if (steps.indexOf('L') != -1) suffix = '-L';
    else if (steps.indexOf('E') != -1) suffix = '-E';
    let hash = problem_no + suffix;
    item.attr('href', '#' + hash);
    callback_map[hash] = sol;
    item.attr('id', 'id-' + hash);

    sidenav.append(item);
  }

  $(window).on('hashchange', () => HandleHashChange(callback_map));
}

function HandleHashChange(callback_map) {
  let hash = location.hash.substr(1);
  let target = $('#id-' + hash);
  let container = $('#jxg-container');

  if (target.hasClass('active')) {
    return;
  }

  $('.active').removeClass('active');
  target.addClass('active');
  callback_map[hash](container);
}

$(document).ready(InitNav);
$(document).ready(Board.SetDefaultOptions);
$(document).ready(() => $(window).trigger('hashchange'));
