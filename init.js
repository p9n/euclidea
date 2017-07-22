function InitButtons() {
    $('h3').each((index, element) => {
        let sol = eval($(element).attr('data-solution'));
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
