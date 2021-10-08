var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function(){

    // Set up fancy labels
    $(".fancy-labels").fancyLabel();

    // This is a huge hack to remove a pixel on the signin button in Firefox
    if (jQuery.browser['mozilla']) {
      $("body").addClass('mozilla');
    }

    // Add the dropshadow to each box,
    // NOTE: We do this here to not clutter up the html,
    //       and we don't use CSS3 because that slows the rendering speed
    //       down to a crawl.
    $("div.box").each(function() {
        var parts = ["top", "center", "bottom"],
            parent = this;

        for (var i = 0; i < parts.length; i++)
        {
            var element = document.createElement("div");
            element.className = "box-shadow " + parts[i];
            parent.appendChild(element);
        }
    });

});

}
/*
     FILE ARCHIVED ON 03:21:51 Nov 22, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:24:12 Oct 08, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 86.603
  exclusion.robots: 0.1
  exclusion.robots.policy: 0.092
  RedisCDXSource: 0.598
  esindex: 0.008
  LoadShardBlock: 67.445 (3)
  PetaboxLoader3.datanode: 129.961 (4)
  CDXLines.iter: 15.854 (3)
  load_resource: 237.047
  PetaboxLoader3.resolve: 138.225
*/