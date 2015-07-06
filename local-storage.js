$(document).ready(function() {
// CRUD with HTML5 Local Storage
    
    // Create - On Page Load
    localStorage.setItem('flavor','Vanilla');
    
    // Read
    var readFlavor = function() {
        var flavor = localStorage.getItem('flavor');
        $('h2').text(flavor);
    }
    readFlavor();
    
    // Update
    $('.update').on('click', function() {
        var promptFlavor = prompt('What is your new favorite flavor?');
        var flavorUpdate = localStorage.setItem('flavor', promptFlavor);
        readFlavor();
    });
    
    // Delete
    $('.delete').on('click', function() {
        localStorage.removeItem('flavor');
        readFlavor();
    });
    
}); // End Doc Ready