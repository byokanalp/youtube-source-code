$( document ).ready(function() {

    let $randomnbr = $('.nbr');
    let $timer = 30;
    let $data = 0;
    let index;
    let change;
    let letters = ["a", "b", "o", "n", "e", " ", "o", "l"];

    $randomnbr.each(function() {
        change = Math.round( Math.random() * 100 );
        $( this ).attr('data-change', change);
    })

    function random() {
        return Math.round( Math.random() * 9 );
    }

    function select() {
        return Math.round( Math.random() * $randomnbr.length + 1 );
    }

    function value() {
        $('.nbr:nth-child(' + select() + ')').html('' + random() + '');
        $('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
        $data++;

        $randomnbr.each(function() {
            if(parseInt($( this ).attr('data-number')) > parseInt($( this ).attr('data-change'))) {
                index = $('.ltr').index( this );
                $( this ).html(letters[index]);
                $( this ).removeClass('nbr');
            }
        })
    }

    $it = setInterval(value, $timer);

})