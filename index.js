// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user call makeGrid()

function makeGrid(height, width) {
    $('tr').remove();
    
// Your code goes here!
    for (var i = 1; i <= height; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <= width; j++) {
            $('#table' + i).append('<td></td>');
        }
    }
    
    // Color when click
    $('td').click(function addColor() {
        color = $('#colorPicker').val();
        
        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    });
}

$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
    console.log('Height' + height + 'and width:' + width);
});



// <script src="index.js"></script> // js/    
// <link rel="stylesheet" href="styles.css"> // css/

         