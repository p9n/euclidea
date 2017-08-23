import * as Solutions from "./solutions.js";
import * as Board from "./board.js";

function InitButtons() {
    $('.tab').click(HandleClick);
}

function HandleClick(e) {
    let target = $(e.target);
    let sol = Solutions[target.attr('data-solution')];
    let container = $('#jxg-container');

    if (target.hasClass('active')) {
        return;
    }

    $('.active').removeClass('active');
    target.addClass('active');
    sol(container);
}

$(document).ready(InitButtons);
$(document).ready(Board.SetDefaultOptions());
