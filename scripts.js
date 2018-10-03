// .ready() event handler method on document
$(document).ready(() => {
    // Creates <div class="row">, appends to <div class="container">
    $('.container').append('<div class="row justify-content-center" id="row3"></div>');
    // Creates <ul>, appends to <div class="container">
    $('#row3').append(`<ul class="list-group col-4 ml-3" id="myList"></ul>`);

    // .keyup() event handler method on #inputTxt
    $('#inputTxt').keyup(() => {
        if($('#inputTxt').val() !== '') {
            $('#btnSubmit').attr('disabled', false); // <input disabled="false">
        }
    })

    // .click() event handler method on #btnSubmit
    $('#btnSubmit').click(() => {
        if($('#inputTxt').val() !== '') {
            // Creates <li>, appends to #myList
             $('#myList').append(`<li class="list-group-item">${$('#inputTxt').val()}</li>`)
             $('#inputTxt').val(''); // Clear!

             const myColors = ['#007bff', '#6c757d', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#f8f9fa', '#343a40'];

             // Randomly selects an index from myColors, assigns value to myRandomColor
             const getRandomColor = () => {
                 const myRandomColor = myColors[Math.floor(Math.random() * myColors.length)];
                 return myRandomColor;
             }

             // .click() event handler method on <li>
             $('li').click((event) => {
                 const thisRandomColor = getRandomColor();
                 $(event.target).css('background-color', thisRandomColor);
            })

            // .dblclick() event handler method on <li>
            $('li').dblclick((event) => {
                $(event.target).remove();
            })
        }
    })
})