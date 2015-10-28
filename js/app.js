$(document).ready(function() {
  // alert('test');
  $('.add-item').click(function() {
    // alert('test');
    var item = $('.new-item').val();

    $('.new-item').val('');
    $('.active-list').append('<li>' + item + '</li>');
  });

  $('ul').on('click', 'li', function(event) {
  
    event.target.remove();
  });

});