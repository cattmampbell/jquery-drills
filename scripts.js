// .ready() event handler method on document
$(document).ready(() => {
    $('#inputTxt').keyup(() => {
        if($('#inputTxt').val() !== '') {
            $('#btnSubmit').attr('disabled', false); // <input disabled="false">
        }
    })

    // .click() event handler method on #btnSubmit
    $('#btnSubmit').click(() => {
        if($('#inputTxt').val() !== '') {
            // alert(`You have submitted "${$('#inputTxt').val()}"!`);
            $('#row2').append(`<h2>${$('#inputTxt').val()}</h2>`)
            $('#inputTxt').val(''); // Clears value
        } 
    });

    $('.container').append('<div class="row justify-content-center" id="row2"></div>');

});
