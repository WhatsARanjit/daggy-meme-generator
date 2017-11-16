function meme() {
  question = $('input[name="question"]').val();
  answer1  = $('input[name="answer1"]').val();
  answer2  = $('input[name="answer2"]').val();
  text     = question + '<br>';

  if (answer1 !== '' && answer1 !== 'undefined') {
    text += '<button class="button">' + answer1 + '</button>';
  }
  if (answer2 !== '' && answer2 !== 'undefined') {
    text += '<button class="button">' + answer2 + '</button>';
  }
    
  $('td.bubble').html(text);

  // http://html2canvas.hertzen.com/index.html
  $('table#meme').show();
  html2canvas(document.getElementById('meme'), {
    onrendered: function(canvas) {
      $('#output').html(canvas);
      $('table#meme').hide();
    },
    width: $('#meme').width()
  });
}
