import * as Alpha from './solutions/alpha.js';  // alpha to eta
import * as Theta from './solutions/theta.js';
import * as Iota from './solutions/iota.js';
import * as Kappa from './solutions/kappa.js';
import * as Lambda from './solutions/lambda.js';
import * as Board from './board.js';

const ITEMS = [Alpha, Theta, Iota, Kappa, Lambda]
    .map(m => m.ITEMS)
    .reduce((x, y) => x.concat(y), []);

function InitNav() {
  const sidenav = $('#sidenav');
  const title_re = /^(\d+-\d+) .* \((.*)\)$/;

  let last_group = '';
  const get_group = s => s.match(/[A-Za-z]+/)[0].toLowerCase();

  for (let [title, sol] of ITEMS) {
    let group = get_group(sol.name);
    if (group != last_group) {
      last_group = group;
      const header = $('<a></a>');
      header.text(group);
      header.addClass('tab-header');
      header.click(() => $('a.group-' + group).toggle());

      sidenav.append(header);
    }

    let [unused_str, problem_no, steps] = title_re.exec(title);
    let suffix = '';
    if (steps.indexOf('L') != -1) suffix = '-L';
    else if (steps.indexOf('E') != -1) suffix = '-E';
    let hash = problem_no + suffix;

    const item = $('<a></a>');
    item.text(title);
    item.addClass('tab');
    item.addClass('group-' + group);
    item.attr('href', '#' + hash);
    item.attr('id', 'id-' + hash);
    item.data('callback', sol);
    item.hide();

    sidenav.append(item);
  }

  $(window).on('hashchange', HandleHashChange);
}

function HandleHashChange(e) {
  let hash = location.hash.substr(1);
  let target = $('#id-' + hash);
  let container = $('#jxg-container');

  if (target.hasClass('active-tab')) {
    return;
  }

  $('.active-tab').removeClass('active-tab');
  target.addClass('active-tab');
  target.data('callback')(container);
}

$(document).ready(InitNav);
$(document).ready(Board.SetDefaultOptions);
$(document).ready(() => $(window).trigger('hashchange'));
