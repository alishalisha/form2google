var refURL = '';

// $.each(environmentData, function(index, value){
//   var obj = value;
//   // find each field and prepopulate it with the value
//   if (obj.value) {
//     $(obj.id).attr('value', obj.value);
//   };
//   if (obj.env == true) {
//     $('#browser-info').append(obj.markup + obj.value + '<br />');
//   }
// });

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
$('#ad-report-form').one('submit',function(){
  $.each(environmentData, function(index, value){
    var obj = value;
    // find the value of each field and encode it
    var encodedValue = encodeURIComponent($(obj.id).val());
    var ref = '&entry.' + obj.entryID + '=' + encodedValue;
    refURL = refURL + ref;
  });
  var baseURL = 'https://docs.google.com/a/voxmedia.com/forms/d/1OYouWfgdIPXOBBsoLznAawKYdJ9tjEz_Tccb8dFpJjg/formResponse?';
  var submitRef = '&submit=submit';
  var submitURL = baseURL + refURL + submitRef;
  $(this)[0].action=submitURL;
  $('body').append('<h3>Thank You!</h3>');
});
