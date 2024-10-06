const mainPurple = '#8d53f9';
const btnPurple = '#7030e7';
const shared = {
  primary: mainPurple,
  primaryTransparent: '#7030e714',
  border: 'rgba(138,150,163,.25)',
  grey: '#8996a3',
  scrollbar: 'hsla(0, 0%, 67%, 0.6)',
  // hoverGray: 'rgba(255, 255, 255, .65)',
  grey065: 'rgba(255, 255, 255, .65)',
  grey07: 'rgba(255, 255, 255, .07)',
  backgroundGrey: 'rgb(34, 34, 34)',
  primaryBtn: {
    bkg: btnPurple,
    text: '#FAFAFA',
    bkgHover: '#662ed0',
  },
  secondaryBtn: {
    bkg: 'transparent',
    text: '#FAFAFA',
    bkgHover: '#7030e714',
  },
};

export const lightTheme = {
  ...shared,
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  pageBorders: true,
  // hoverSecondaryBtn: hoverBkgPurple,
  spacerBkg: '#f6f7f8',
  marked: '#f6f7f8',
};

export const darkTheme = {
  ...shared,
  // body: '#161618',
  body: '#000000',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  pageBorders: true,
  hoverSecondaryBtn: 'hsla(0,0%,100%,.12)',
  spacerBkg: '#242529',
  marked: '#242529',
};
