(function($) {
  $(function() {
    var $shareLink = $('#sharelink'),
      $downloadLink = $('#downloadlink'),
      $copyButton = $('#copylinkbtn'),
      clipboard;

    $shareLink.on('keyup paste', function() {
      var link = $shareLink.val(),
        l = link.replace(/.+\/file\/d\/(.+)\/(.+)/, "https://www.googleapis.com/drive/v3/files/$1?alt=media&key=AIzaSyAyyVjiR3FTTBEWu6mM_v1nTGFKuJlQieA");
      if(l !== link) {
        $downloadLink.val(l);
        $copyButton.removeAttr('disabled');
      } else {
        $downloadLink.val('');
        $copyButton.attr('disabled', 'disabled');
      }
    });

    $downloadLink.on('click', function() {
      $downloadLink.select();
    });

    clipboard = new Clipboard('#copylinkbtn');
    clipboard.on('success', function(e) {
      $.notify({
        icon: 'glyphicon glyphicon-ok-circle',
        title: 'Link copied to clipboard:',
        message: e.text,
        url: e.text,
        target: '_blank'
      }, {
        // settings
        type: "success",
        placement: {
          from: "top",
          align: "center"
        }
      });

      // $.notify(e.text + " copied to clipboard.");

      e.clearSelection();
    });

  });
})(jQuery);