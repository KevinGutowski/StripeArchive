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

/*
#
# fancylabel.jquery.js
#
# by Ludwig Pettersson
# <http://luddep.se>
#

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
*/

(function($){

    var speed = 80,
        startColor,
        fadedColor;

    // Sometimes the first color animation wont fire, so we fire off one.
    //$('html').animate({'backgroundColor': $('html').css('background-color')}, 1);

    $.fn.fancyLabel = function(_fadedColor){

        $('span', this).each(function() {

            var p = $(this).parent();
            var span = $(this);
            p.addClass('fancy-label');

            var input = $('input', span),
                label = $('label', span);

            startColor = label.css('color');
            fadedColor = _fadedColor ? _fadedColor : "#eee";

            // Safari takes a few ms to actually set focus on the input
            label.click(function() {
                input.focus();
                return false;
            });

            var showLabel = function() {
                label
                    .show(0)
                    //.animate({'color': startColor}, speed);
            };

            var keyupTimeout = null;

            input
                .focus(function() {
                    //label.animate({'color': fadedColor}, speed);
                })
                .keydown(function(event) {

                    // Timeout because the event isn't propogated
                    // to the actual DOM element until a bit after
                    // this method gets called.
                    setTimeout(function() {
                        if (input.val().length)
                            label.hide(0);
                    }, 0);

                    /*
                    if (keyupTimeout)
                        window.clearTimeout(keyupTimeout);

                    keyupTimeout = window.setTimeout(function(element) {
                        if (element.val().length === 0)
                            showLabel();
                    }, 0, $(this));
                    */
                })
                .keyup(function() {
                    if (keyupTimeout)
                        window.clearTimeout(keyupTimeout);

                    keyupTimeout = window.setTimeout(function(element) {
                        if (element.val().length === 0)
                            showLabel();
                    }, 0, $(this));
                })
                .blur(function(event) {
                    if (/*event.which !== 8 && */$(this).val().length === 0)
                    {
                        showLabel();
                    }
                });
        });
    }

})(jQuery);

}
/*
     FILE ARCHIVED ON 03:21:46 Nov 22, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:24:11 Oct 08, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 88.491
  exclusion.robots: 0.172
  exclusion.robots.policy: 0.158
  RedisCDXSource: 3.615
  esindex: 0.011
  LoadShardBlock: 65.39 (3)
  PetaboxLoader3.datanode: 69.192 (4)
  CDXLines.iter: 16.482 (3)
  load_resource: 75.435
  PetaboxLoader3.resolve: 45.949
*/