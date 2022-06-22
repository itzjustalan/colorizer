import { BaseApp } from "$lib/apps/base"

export const Mutt = new BaseApp({
  name: 'Mutt',
  configName: 'colorizer.muttrc',
  icon: 'http://jasonwryan.com/images/post_images/mutt-1.png',
  format: 'ansi?',
  colors: {
    errorFG: 'default',
    indicatorFG: 'default',
    markersFG: 'default',
    messageFG: 'default',
    normalFG: 'default',
    promptFG: 'default',
    searchFG: 'default',
    statusFG: 'default',
    tildeFG: 'default',
    treeFG: 'default',
    hdrdefaultFG: 'default',
    headerFG: 'default',
    attachmentFG: 'default',
    quotedFG: 'default',
    quoted1FG: 'default',
    quoted2FG: 'default',
    quoted3FG: 'default',
    quoted4FG: 'default',
    signatureFG: 'default',
    errorBG: 'default',
    indicatorBG: 'default',
    markersBG: 'default',
    messageBG: 'default',
    normalBG: 'default',
    promptBG: 'default',
    searchBG: 'default',
    statusBG: 'default',
    tildeBG: 'default',
    treeBG: 'default',
    hdrdefaultBG: 'default',
    headerBG: 'default',
    attachmentBG: 'default',
    quotedBG: 'default',
    quoted1BG: 'default',
    quoted2BG: 'default',
    quoted3BG: 'default',
    quoted4BG: 'default',
    signatureBG: 'default',
  },

  buildConfig: (colors) => {
    return `
# general ------------ foreground ---- background -----------------------------
color error   ${colors.errorFG}    ${colors.errorBG}
color indicator   ${colors.indicatorFG}    ${colors.indicatorBG}
color markers		${colors.markersFG}    ${colors.markersBG}
color message		${colors.messageFG}    ${colors.messageBG}
color normal		${colors.normalFG}		${colors.normalBG}
color prompt		${colors.promptFG}   ${colors.promptBG}
color search		${colors.searchFG}   ${colors.searchBG}
color status    ${colors.statusFG}   ${colors.statusBG}
color tilde   ${colors.tildeFG}    ${colors.tildeBG}
color tree    ${colors.treeFG}   ${colors.treeBG}
color hdrdefault	${colors.hdrdefaultFG}	${colors.hdrdefaultBG}
color header		${colors.headerFG}	${colors.headerBG}
color attachment	${colors.attachmentFG}	${colors.attachmentBG}
color quoted		${colors.quotedFG}		${colors.quotedBG}
color quoted1		${colors.quoted1FG}	${colors.quoted1BG}
color quoted2		${colors.quoted2FG}		${colors.quoted2BG}
color quoted3		${colors.quoted3FG}	${colors.quoted3BG}
color quoted4		${colors.quoted4FG}	${colors.quoted4BG}
color signature		${colors.signatureFG}	${colors.signatureBG}
`
  }
})
