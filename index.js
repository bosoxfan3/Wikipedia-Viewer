$(document).ready(function() {
  $('.js-search-form').submit(function() {
    event.preventDefault();
    value = $('input').val();
    let results = '';
    $.getJSON('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch='+value, function(data) {
      data.query.search.forEach(function(item) {
        let baseUrl = 'https://en.wikipedia.org/wiki/';
        results += (
          `<a href="${baseUrl}${item.title}" target="_blank" class="search-results text-left col-lg-12">
            <h4>${item.title}</h4>
            <p>${item.snippet}...</p>
          </a>`
        );
        $('.js-results').html(results);
      });
    });
    $('input').val('');
  });
});