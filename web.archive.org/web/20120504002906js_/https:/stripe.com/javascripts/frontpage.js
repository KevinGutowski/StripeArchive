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

$(function() {
    /*
        Code field
    */

    // Update the terminal contents when the selects change
    $("div.api select[name=action]").change(function() {
        setSelectedAction($(this).val());
    });

    $("div.api select[name=lang]").change(function() {
        setSelectedLanguage($(this).val());
    });

    var selectedAction = null;
    var setSelectedAction = function(action) {
        selectedAction = action;
        updateTerminalContents();
    };

    var selectedLanguage = null;
    var setSelectedLanguage = function(language) {
        selectedLanguage = language;
        updateTerminalContents();
    };

    var updateTerminalContents = function() {
        //console.log(selectedLanguage + " => " + selectedAction);
        $("div.api pre").html(jQuery.trim(APIValues[selectedLanguage][selectedAction]));
        $("div.api pre").removeClass().addClass(selectedLanguage);
    };

    // Set the initial values and languages
    selectedLanguage = "curl";
    selectedAction = "charge_create_with_card";
    updateTerminalContents();

});


}
/*
     FILE ARCHIVED ON 08:21:21 May 11, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:27:43 Oct 08, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 140.204
  exclusion.robots: 0.089
  exclusion.robots.policy: 0.082
  RedisCDXSource: 16.776
  esindex: 0.008
  LoadShardBlock: 103.701 (3)
  PetaboxLoader3.datanode: 69.364 (4)
  CDXLines.iter: 16.688 (3)
  load_resource: 93.601
  PetaboxLoader3.resolve: 37.816
*/