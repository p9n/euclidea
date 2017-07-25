import * as Solutions from "./solutions.js";
import * as Board from "./board.js";

function InitButtons() {
    $('h3').each((index, element) => {
        let sol = Solutions[$(element).attr('data-solution')];
        let container = $('<div></div>');
        let button = $('<button>show</button>').click((e) => HandleClick(e, sol, container));
        $(element).append(' ', button);
        $(element).after(container);
    });
}

function HandleClick(e, sol, container) {
    if (container.children().length == 0) {
        sol(container);
        $(e.target).text('hide');
    } else {
        container.empty();
        $(e.target).text('show')
    }
}

$(document).ready(InitButtons);
$(document).ready(Board.SetDefaultOptions());
