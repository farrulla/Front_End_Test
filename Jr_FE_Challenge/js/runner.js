

$( "#header-search-email" ).submit(function( event ) {
    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    var $form = $( this ),
        exp= $form.find( "input[name='email']" ).val(),
        url = $form.attr( "action" );

    // Send the data using post
    var posting = $.get({
      url: url,
      data: { experience: exp } ,
      success: function( data ) {
        window.location='result.html';
        sessionStorage.setItem('email-Address', exp);
      }
    });
});