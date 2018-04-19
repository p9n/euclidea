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

  let last_group = '';

  for (let [x, y, title, steps, sol] of ITEMS) {
    if (last_group != x) {
      last_group = x;
      const header = $('<a></a>');
      header.text(`${x}. ${sol.name.match(/[A-Za-z]+/)[0]}`);
      header.addClass('tab-header');
      header.click(() => $(`a.group-${x}`).toggle());

      sidenav.append(header);
    }

    let suffix = '';
    if (steps.indexOf('L') != -1) suffix = 'L';
    else if (steps.indexOf('E') != -1) suffix = 'E';

    const item = $('<a></a>');
    const hash = `${x}-${y}-${suffix}`
    item.text(`${x}-${y} ${title} (${steps})`);
    item.addClass('tab');
    item.addClass(`group-${x}`);
    item.attr('href', `#${hash}`);
    item.attr('id', `id-${hash}`);
    item.data('callback', sol);
    item.hide();

    sidenav.append(item);
  }

  $(window).on('hashchange', HandleHashChange);
}

function HandleHashChange(e) {
  let hash = location.hash.substr(1);
  let target = $(`#id-${hash}`);
  let container = $('#jxg-container');

  if (target.hasClass('active-tab')) {
    return;
  }

  target.each((i, e) => {
    e.classList.forEach(c => {
      if (c.startsWith('group-')) {
        $(`.${c}`).show();
      }
    })});
  $('.active-tab').removeClass('active-tab');
  target.addClass('active-tab');
  target.data('callback')(container);
}

$(document).ready(InitNav);
$(document).ready(Board.SetDefaultOptions);
$(document).ready(() => $(window).trigger('hashchange'));
