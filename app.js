var refURL = '';

var data = ['.q1', '.q2', '.q3', '.q4', '.q5', '.q6', '.q7'];

// when clicking other, enable the textarea.
$textarea = $('.ad-survey__form--option--text');
$other = $('.ad-survey__form--option--other input');
$other.on('click', function() {
  $(this).toggleClass('checked');
  if ($other.hasClass('checked')) {
    $textarea.removeAttr('disabled');
  } else {
    $textarea.attr('disabled', 'disabled').val('');
  }
});

// Form submission
$('#ad-survey-form').one('submit',function(){
  $.each(data, function(i){
    var isChecked = $(data[i]).find('input').prop('checked');
    var optionText = $(data[i]).find('label').html();
    if (isChecked == true) {
      var encodedValue = encodeURIComponent(optionText);
      var ref = '&entry.1999326285=' + encodedValue;
      refURL = refURL + ref;
    }
  });

  var otherText = $('.ad-survey__form--option--text').val();
  var encodedValue = encodeURIComponent(otherText);
  var ref = '&entry.616667361=' + encodedValue;
  refURL = refURL + ref;
  var baseURL = 'https://docs.google.com/a/voxmedia.com/forms/d/1u7JK3TY7L3hV0BqO-ZffKwUS7JwbQt1ONBC4xJbbzCs/formResponse?';
  var submitRef = '&submit=submit';
  var submitURL = baseURL + refURL + submitRef;
  $(this)[0].action=submitURL;
  $('.ad-survey__form').html('<h3>Thank You!</h3>');
});
