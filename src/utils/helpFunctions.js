const getMobileUIwebApps = WEB_DATA.filter(
  (item) => item.responsiveUI[0] && !item.isNew,
);
const getDesktopUIwebApps = WEB_DATA.filter(
  (item) => item.responsiveUI[1] && !item.isNew,
);
