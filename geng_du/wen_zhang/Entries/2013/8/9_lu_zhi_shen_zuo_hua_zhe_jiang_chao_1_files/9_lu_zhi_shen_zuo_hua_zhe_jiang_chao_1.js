// Created by iWeb 3.0.4 local-build-20150324

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="256" height="16"><param name="src" value="../../../../Media/20150322%20150829.m4a" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="256" height="16"><param name="src" value="../../../../Media/20150322%20150829.m4a"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="256" height="16" data="../../../../Media/20150322%20150829.m4a"><param name="src" value="../../../../Media/20150322%20150829.m4a"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{dynamicallyPopulate();loadMozillaCSS('9_lu_zhi_shen_zuo_hua_zhe_jiang_chao_1_files/9_lu_zhi_shen_zuo_hua_zhe_jiang_chao_1Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../../../../Media/transparent.gif');fixupIECSS3Opacity('id4');BlogFixupPreviousNext();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
