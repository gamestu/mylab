$(document).ready(function(){
  $('.search-anobii').on('submit', function(e){
    e.preventDefault();
    var isbn = $('.isbn').val();
    var url = 'http://www.anobii.com/search?s=1&keyword='+isbn;
    $('.iframe-container').empty().append("<iframe src="+url+">");
  });
});