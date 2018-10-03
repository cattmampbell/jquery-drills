// .ready() event handler method on document
$(document).ready(() => {
    // Dynamically creates <div class="row justify-content-center" id="row2"> and appends it to <div class="container">
    $('.container').append('<div class="row justify-content-center" id="row2"></div>');

    // .keyup() event handler method on #inputTxt
    $('#inputTxt').keyup(() => {
        if($('#inputTxt').val() !== '') {
            $('#btnSubmit').attr('disabled', false); // <input disabled="false">
        };
    });

    // .click() event handler method on #btnSubmit
    $('#btnSubmit').click(() => {
        if($('#inputTxt').val() !== '') {
            // alert(`You have submitted "${$('#inputTxt').val()}"!`);
            $('#row2').append(`<h2 class="col-8 text-center">${$('#inputTxt').val()}</h2>`)
            $('#inputTxt').val(''); // Clears value

            const myColors = ['#007bff', '#6c757d', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#f8f9fa', '#343a40'];

            // Randomly selects an index from myColors, assigns value to myRandomColor
            const getRandomColor = () => {
                const myRandomColor = myColors[Math.floor(Math.random() * myColors.length)];
                return myRandomColor;
            };

            // .mouseover() event handler method on <h2>
            $('h2').mouseover((event) => {
                const thisRandomColor = getRandomColor();
                $(event.target).css({
                    'background-color': thisRandomColor,
                    'border-radius': '0.25rem'});
            });
        };
    });
});