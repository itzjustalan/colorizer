import { BaseApp } from "$lib/apps/base"

export const Firefox = new BaseApp({
  name: 'Firefox',
  configName: 'manifest.json',
  icon: 'https://3u26hb1g25wn1xwo8g186fnd-wpengine.netdna-ssl.com/files/2019/10/Fx-Browser-icon-fullColor.svg',
  colors: {
    bookmark_text: 'red',
    button_background_active: 'red',
    button_background_hover: 'red',
    icons: 'red',
    icons_attention: 'red',
    frame: 'red',
    frame_inactive: 'red',
    ntp_background: 'red',
    ntp_text: 'red',
    popup: 'red',
    popup_border: 'red',
    popup_highlight: 'red',
    popup_highlight_text: 'red',
    popup_text: 'red',
    sidebar: 'red',
    sidebar_border: 'red',
    sidebar_highlight: 'red',
    sidebar_highlight_text: 'red',
    sidebar_text: 'red',
    tab_background_text: 'red',
    tab_line: 'red',
    tab_loading: 'red',
    tab_selected: 'red',
    tab_text: 'red',
    toolbar: 'red',
    toolbar_bottom_separator: 'red',
    toolbar_field: 'red',
    toolbar_field_border: 'red',
    toolbar_field_border_focus: 'red',
    toolbar_field_focus: 'red',
    toolbar_field_highlight: 'red',
    toolbar_field_highlight_text: 'red',
    toolbar_field_text: 'red',
    toolbar_field_text_focus: 'red',
    toolbar_text: 'red',
    toolbar_top_separator: 'red',
    toolbar_vertical_separator: 'red',
  },
  buildConfig: (colors) => {
    return `
{
  "manifest_version": 2,
  "version": "1.9.3",
  "name": "Colorizer Theme",
  "short_name": "Colorizer",
  "theme": {
    "colors": {
      "bookmark_text": ${colors.bookmark_text},
      "button_background_active": ${colors.button_background_active},
      "button_background_hover": ${colors.button_background_hover},
      "icons": ${colors.icons},
      "icons_attention": ${colors.icons_attention},
      "frame": ${colors.frame},
      "frame_inactive": ${colors.frame_inactive},
      "ntp_background": ${colors.ntp_background},
      "ntp_text": ${colors.ntp_text},
      "popup": ${colors.popup},
      "popup_border": ${colors.popup_border},
      "popup_highlight": ${colors.popup_highlight},
      "popup_highlight_text": ${colors.popup_highlight_text},
      "popup_text": ${colors.popup_text},
      "sidebar": ${colors.sidebar},
      "sidebar_border": ${colors.sidebar_border},
      "sidebar_highlight": ${colors.sidebar_highlight},
      "sidebar_highlight_text": ${colors.sidebar_highlight_text},
      "sidebar_text": ${colors.sidebar_text},
      "tab_background_text": ${colors.tab_background_text},
      "tab_line": ${colors.tab_line},
      "tab_loading": ${colors.tab_loading},
      "tab_selected": ${colors.tab_selected},
      "tab_text": ${colors.tab_text},
      "toolbar": ${colors.toolbar},
      "toolbar_bottom_separator": ${colors.toolbar_bottom_separator},
      "toolbar_field": ${colors.toolbar_field},
      "toolbar_field_border": ${colors.toolbar_field_border},
      "toolbar_field_border_focus": ${colors.toolbar_field_border_focus},
      "toolbar_field_focus": ${colors.toolbar_field_focus},
      "toolbar_field_highlight": ${colors.toolbar_field_highlight},
      "toolbar_field_highlight_text": ${colors.toolbar_field_highlight_text},
      "toolbar_field_text": ${colors.toolbar_field_text},
      "toolbar_field_text_focus": ${colors.toolbar_field_text_focus},
      "toolbar_text": ${colors.toolbar_text},
      "toolbar_top_separator": ${colors.toolbar_top_separator},
      "toolbar_vertical_separator": ${colors.toolbar_vertical_separator}
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
`
  }
})