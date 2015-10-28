var
  $ = require('jquery'),
  slideview = require('jquery-slideview'),
  curzory = require('curzory/src/jquery.curzory'),
  slideviewCSS = require('jquery-slideview/dist/css/jquery.slideview.css'),
  magnetCSS = require('../css/magnet.css'),
  
  slugify = function(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  };
  
module.exports = (function() {
  
  
  
  $(function() {
    
    // Find Channels
    $("*[itemtype='http://squirrel.do/magnet/Channel']").each(function() {

      // Setup Slideview markup
      $(this).children().addClass('slideview-slide');
      $(this).wrapInner('<div class="slideview-content"></div>');
      $(this).append('<a class="slideview-button slideview-next"></a>');
      $(this).append('<a class="slideview-button slideview-prev"></a>');
      
      // Init Slideview
      $(this).slideview({
        slideState: function(item) {
          var
            base = location.protocol + "//" + location.hostname + location.pathname,
            title = $(item).find("*[itemprop='title']").text(),
            id = $(item).attr('itemid') || slugify(title);
          return {
            url: base + (id ? '?/' + id : ""),
            title: title
          };
        }
      });
    
      // Init curzory with Slideview buttons
      $(this).find('.slideview-next').curzory({
        bounds: function(container) {
          return {
            x: "85%",
            y: 0,
            height: $(container).height(),
            width: "15%"
          };
        }
      });
      $('body').find('.slideview-prev').curzory({
        bounds: function(container) {
          return {
            x: 0,
            y: 0,
            height: $(container).height(),
            width: "15%"
          };
        }
      });
      
    });
  });
})();