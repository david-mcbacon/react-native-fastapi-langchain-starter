const colors = {
  white: "#fff",
  black: "#000",
  gray: "rgba(0, 0, 0, .5)",
  lightWhite: "rgba(255, 255, 255, .5)",
  blueTintColor: "#0281ff",
  lightPink: "#F7B5CD",
};

const fonts = {
  ultraLightFont: "Geist-Ultralight",
  thinFont: "Geist-Thin",
  regularFont: "Geist-Regular",
  lightFont: "Geist-Light",
  mediumFont: "Geist-Medium",
  semiBoldFont: "Geist-SemiBold",
  boldFont: "Geist-Bold",
  blackFont: "Geist-Black",
  ultraBlackFont: "Geist-Ultrablack",
};

const lightTheme = {
  ...fonts,
  name: "Light",
  label: "light",
  textColor: colors.black,
  secondaryTextColor: colors.white,
  mutedForegroundColor: colors.gray,
  highlightedTextColor: colors.white,
  backgroundColor: colors.white,
  placeholderTextColor: colors.gray,
  secondaryBackgroundColor: colors.black,
  borderColor: "rgba(0, 0, 0, .15)",
  buttonTextColor: colors.white,
  tintColor: "#0281ff",
  tabBarActiveTintColor: colors.black,
  tabBarInactiveTintColor: colors.gray,
};

const darkTheme = {
  ...fonts,
  name: "Dark",
  label: "dark",
  textColor: colors.white,
  secondaryTextColor: colors.black,
  mutedForegroundColor: colors.lightWhite,
  highlightedTextColor: colors.black,
  backgroundColor: colors.black,
  placeholderTextColor: colors.lightWhite,
  laceholderTextColor: colors.lightWhite,
  secondaryBackgroundColor: colors.white,
  borderColor: "rgba(255, 255, 255, .2)",
  buttonTextColor: colors.white,
  tintColor: "#0281ff",
  tabBarActiveTintColor: colors.blueTintColor,
  tabBarInactiveTintColor: colors.lightWhite,
};

const vercel = {
  ...darkTheme,
  name: "Dark",
  label: "vercel",
  backgroundColor: colors.black,
  tintColor: "#171717",
  buttonTextColor: colors.white,
  tabBarActiveTintColor: colors.white,
  secondaryTextColor: colors.white,
  highlightedTextColor: colors.white,
};

export { lightTheme, vercel };
