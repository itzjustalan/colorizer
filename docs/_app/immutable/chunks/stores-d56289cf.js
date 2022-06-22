import{r as d,w as a}from"./index-408207a5.js";class r{constructor(e){({name:this.name,icon:this.icon,colors:this.colors,configName:this.configName,buildConfig:this.buildConfig}=e)}}const o=new r({name:"Firefox",configName:"manifest.json",icon:"https://3u26hb1g25wn1xwo8g186fnd-wpengine.netdna-ssl.com/files/2019/10/Fx-Browser-icon-fullColor.svg",colors:{bookmark_text:"red",button_background_active:"red",button_background_hover:"red",icons:"red",icons_attention:"red",frame:"red",frame_inactive:"red",ntp_background:"red",ntp_text:"red",popup:"red",popup_border:"red",popup_highlight:"red",popup_highlight_text:"red",popup_text:"red",sidebar:"red",sidebar_border:"red",sidebar_highlight:"red",sidebar_highlight_text:"red",sidebar_text:"red",tab_background_text:"red",tab_line:"red",tab_loading:"red",tab_selected:"red",tab_text:"red",toolbar:"red",toolbar_bottom_separator:"red",toolbar_field:"red",toolbar_field_border:"red",toolbar_field_border_focus:"red",toolbar_field_focus:"red",toolbar_field_highlight:"red",toolbar_field_highlight_text:"red",toolbar_field_text:"red",toolbar_field_text_focus:"red",toolbar_text:"red",toolbar_top_separator:"red",toolbar_vertical_separator:"red"},buildConfig:t=>`
{
  "manifest_version": 2,
  "version": "1.9.3",
  "name": "Colorizer Theme",
  "short_name": "Colorizer",
  "theme": {
    "colors": {
      "bookmark_text": ${t.bookmark_text},
      "button_background_active": ${t.button_background_active},
      "button_background_hover": ${t.button_background_hover},
      "icons": ${t.icons},
      "icons_attention": ${t.icons_attention},
      "frame": ${t.frame},
      "frame_inactive": ${t.frame_inactive},
      "ntp_background": ${t.ntp_background},
      "ntp_text": ${t.ntp_text},
      "popup": ${t.popup},
      "popup_border": ${t.popup_border},
      "popup_highlight": ${t.popup_highlight},
      "popup_highlight_text": ${t.popup_highlight_text},
      "popup_text": ${t.popup_text},
      "sidebar": ${t.sidebar},
      "sidebar_border": ${t.sidebar_border},
      "sidebar_highlight": ${t.sidebar_highlight},
      "sidebar_highlight_text": ${t.sidebar_highlight_text},
      "sidebar_text": ${t.sidebar_text},
      "tab_background_text": ${t.tab_background_text},
      "tab_line": ${t.tab_line},
      "tab_loading": ${t.tab_loading},
      "tab_selected": ${t.tab_selected},
      "tab_text": ${t.tab_text},
      "toolbar": ${t.toolbar},
      "toolbar_bottom_separator": ${t.toolbar_bottom_separator},
      "toolbar_field": ${t.toolbar_field},
      "toolbar_field_border": ${t.toolbar_field_border},
      "toolbar_field_border_focus": ${t.toolbar_field_border_focus},
      "toolbar_field_focus": ${t.toolbar_field_focus},
      "toolbar_field_highlight": ${t.toolbar_field_highlight},
      "toolbar_field_highlight_text": ${t.toolbar_field_highlight_text},
      "toolbar_field_text": ${t.toolbar_field_text},
      "toolbar_field_text_focus": ${t.toolbar_field_text_focus},
      "toolbar_text": ${t.toolbar_text},
      "toolbar_top_separator": ${t.toolbar_top_separator},
      "toolbar_vertical_separator": ${t.toolbar_vertical_separator}
    },
    "properties": {
      "color_scheme": "dark",
      "panel_hover": "color-mix(in srgb, currentColor 9%, transparent)",
      "panel_active": "color-mix(in srgb, currentColor 14%, transparent)",
      "panel_active_darker": "color-mix(in srgb, currentColor 25%, transparent)",
      "toolbar_field_icon_opacity": "1",
      "zap_gradient": "linear-gradient(90deg, red 0%, red 52.08%, red 100%)"
    }
  }
}
`}),i=new r({name:"Mutt",configName:"colorizer.muttrc",icon:"http://jasonwryan.com/images/post_images/mutt-1.png",colors:{errorFG:"default",indicatorFG:"default",markersFG:"default",messageFG:"default",normalFG:"default",promptFG:"default",searchFG:"default",statusFG:"default",tildeFG:"default",treeFG:"default",hdrdefaultFG:"default",headerFG:"default",attachmentFG:"default",quotedFG:"default",quoted1FG:"default",quoted2FG:"default",quoted3FG:"default",quoted4FG:"default",signatureFG:"default",errorBG:"default",indicatorBG:"default",markersBG:"default",messageBG:"default",normalBG:"default",promptBG:"default",searchBG:"default",statusBG:"default",tildeBG:"default",treeBG:"default",hdrdefaultBG:"default",headerBG:"default",attachmentBG:"default",quotedBG:"default",quoted1BG:"default",quoted2BG:"default",quoted3BG:"default",quoted4BG:"default",signatureBG:"default"},buildConfig:t=>`
# general ------------ foreground ---- background -----------------------------
color error   ${t.errorFG}    ${t.errorBG}
color indicator   ${t.indicatorFG}    ${t.indicatorBG}
color markers		${t.markersFG}    ${t.markersBG}
color message		${t.messageFG}    ${t.messageBG}
color normal		${t.normalFG}		${t.normalBG}
color prompt		${t.promptFG}   ${t.promptBG}
color search		${t.searchFG}   ${t.searchBG}
color status    ${t.statusFG}   ${t.statusBG}
color tilde   ${t.tildeFG}    ${t.tildeBG}
color tree    ${t.treeFG}   ${t.treeBG}
color hdrdefault	${t.hdrdefaultFG}	${t.hdrdefaultBG}
color header		${t.headerFG}	${t.headerBG}
color attachment	${t.attachmentFG}	${t.attachmentBG}
color quoted		${t.quotedFG}		${t.quotedBG}
color quoted1		${t.quoted1FG}	${t.quoted1BG}
color quoted2		${t.quoted2FG}		${t.quoted2BG}
color quoted3		${t.quoted3FG}	${t.quoted3BG}
color quoted4		${t.quoted4FG}	${t.quoted4BG}
color signature		${t.signatureFG}	${t.signatureBG}
`}),u=a({schemedata:{}}),n=a([]),l=d([],t=>(t([o,i]),()=>{}));export{u as a,l as b,n as c};
