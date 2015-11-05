$(document).ready(function() {
	
  $('.form-item').submit(function(e) {

  	// Prevents page from refreshing
  	e.preventDefault();
  	// alert('test');

  	var item = $('.new-item').val();

 
 	if (item) {
    	$('.new-item').val('');
    	$('.active-list').append('<li>' + item + '</li>');
    }
  });

  $('ul').on('click', 'li', function(event) {
  
    event.target.remove();
  });

});