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

    var debug = !!(window && window.location && window.location.hostname && window.location.hostname == "127.0.0.1");

    // This is a huge hack to remove a pixel on the signin button in Firefox
    if (jQuery.browser['mozilla']) {
      $("body").addClass('mozilla');
    }

    var selector = "div.account-dropdown-view",
        clickEvent = "click.account_dropdown_view_global_click";

    // Account dropdown
    $("div.account-dropdown-view a.account").click(function(event){
        event.preventDefault();

        if ($(selector).hasClass("shown"))
          hideSubmenu();
        else
          showSubmenu();
    });

    var showSubmenu = function() {
        $(selector).addClass("shown");

        // Global click handler, so we can hide the menu on a click,
        // but on a slight delay so it doesnt fire on the same click
        // which created this event
        setTimeout(function(){
            $(document).bind(clickEvent, hideSubmenu);
        }, 100);
    };

    var hideSubmenu = function() {
        $(selector).removeClass("shown");
        $(document).unbind(clickEvent);
    };
});


}
/*
     FILE ARCHIVED ON 08:27:38 May 11, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:27:42 Oct 08, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 224.86
  exclusion.robots: 0.141
  exclusion.robots.policy: 0.129
  RedisCDXSource: 40.597
  esindex: 0.008
  LoadShardBlock: 165.078 (3)
  PetaboxLoader3.datanode: 164.983 (4)
  CDXLines.iter: 16.225 (3)
  load_resource: 149.044
  PetaboxLoader3.resolve: 95.456
*/