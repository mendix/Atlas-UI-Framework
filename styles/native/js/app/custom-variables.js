import { NativeModules, Platform } from "react-native";
import adjustFont from "../core/helpers/_functions/adjustfont";
import { anyColorToRgbString, setColorBasedOnBackground, setContrastScale, } from "../core/helpers/_functions/convertcolors";
/*

==> You can find a copy of the core variables below. (From styles/native/core/variables.js)
==> You can freely change any value in this file.
==> DO NOT change the core variable file (or any other file in core), as that makes updating Atlas a lot harder in the future.

*/
//== Global variables
//## Variables to be used during styling
//-------------------------------------------------------------------------------------------------------------------//
// Brand Style
export const brand = {
    primary: "#0595DB",
    success: "#76CA02",
    warning: "#f99b1d",
    danger: "#ed1c24",
    primaryLight: `rgba(${anyColorToRgbString("#0595DB")}, 0.14)`,
    successLight: `rgba(${anyColorToRgbString("#76CA02")}, 0.14)`,
    warningLight: `rgba(${anyColorToRgbString("#f99b1d")}, 0.14)`,
    dangerLight: `rgba(${anyColorToRgbString("#ed1c24")}, 0.14)`,
};
//
// Dark Mode - Inherits OS theme if possible
export const darkMode = NativeModules && NativeModules.RNDarkMode && NativeModules.RNDarkMode.initialMode
    ? NativeModules.RNDarkMode.initialMode === "dark"
    : false;
//
// Background Colors
const backgroundColor = darkMode ? "#000" : "#FFF";
const backgroundSecondaryContrast = darkMode ? 0.11 : 0.03;
//
export const background = {
    primary: backgroundColor,
    secondary: setContrastScale(backgroundSecondaryContrast, backgroundColor),
    gray: "#c6c6cc",
    brandPrimary: brand.primary,
    brandSuccess: brand.success,
    brandWarning: brand.warning,
    brandDanger: brand.danger,
};
//
// Contrast (Gray) colors based on background.primary
export const contrast = {
    highest: setContrastScale(0.95, background.primary),
    higher: setContrastScale(0.8, background.primary),
    high: setContrastScale(0.65, background.primary),
    regular: setContrastScale(0.5, background.primary),
    low: setContrastScale(0.35, background.primary),
    lower: setContrastScale(0.2, background.primary),
    lowest: setContrastScale(0.05, background.primary),
};
//
// Border Style
export const border = {
    color: setContrastScale(0.17, background.primary),
    width: 1,
    radius: 5,
};
//
// Font Styles
export const font = {
    size: adjustFont(14),
    sizeSmall: adjustFont(12),
    sizeLarge: adjustFont(18),
    sizeH1: adjustFont(31),
    sizeH2: adjustFont(26),
    sizeH3: adjustFont(24),
    sizeH4: adjustFont(18),
    sizeH5: adjustFont(14),
    sizeH6: adjustFont(12),
    color: setColorBasedOnBackground(background.primary),
    colorDisabled: "#9DA1A8",
    labelColorDisabled: "#474E5C",
    weightLight: "100",
    weightNormal: "normal",
    weightSemiBold: "600",
    weightBold: "bold",
    family: Platform.select({ ios: "System", android: "normal" }),
};
//
// Spacing
export const spacing = {
    smallest: 5,
    smaller: 10,
    small: 15,
    regular: 20,
    large: 25,
    larger: 30,
    largest: 40,
};
//
// Button Styles
export const button = {
    fontSize: font.sizeSmall,
    fontSizeLarge: font.size,
    fontWeight: font.weightBold,
    fontSizeIcon: font.sizeSmall,
    fontSizeIconLarge: font.size,
    borderRadius: border.radius,
    paddingVertical: spacing.smaller,
    paddingHorizontal: spacing.regular,
    header: {
        color: contrast.highest,
        borderColor: "transparent",
        backgroundColor: "transparent",
        fontSize: font.sizeSmall,
        fontSizeIcon: font.sizeSmall,
        paddingLeft: 0,
        paddingRight: 10,
    },
    primary: {
        color: "#FFF",
        colorDisabled: font.colorDisabled,
        borderColor: brand.primary,
        borderColorDisabled: border.color,
        backgroundColor: brand.primary,
        backgroundColorDisabled: border.color,
    },
    secondary: {
        color: brand.primary,
        borderColor: brand.primary,
        backgroundColor: "transparent",
        inversedColor: "#FFF",
    },
    success: {
        color: "#FFF",
        borderColor: brand.success,
        backgroundColor: brand.success,
    },
    warning: {
        color: "#FFF",
        borderColor: brand.warning,
        backgroundColor: brand.warning,
    },
    danger: {
        color: "#FFF",
        borderColor: brand.danger,
        backgroundColor: brand.danger,
    },
};
//
// Input Styles
export const input = {
    // Colors
    color: font.color,
    colorDisabled: font.colorDisabled,
    errorColor: brand.danger,
    labelColor: font.color,
    labelColorDisabled: font.labelColorDisabled,
    borderColor: contrast.lower,
    borderColorFocused: "",
    backgroundColor: background.primary,
    backgroundColorDisabled: contrast.lowest,
    selectionColor: contrast.lower,
    placeholderTextColor: contrast.regular,
    underlineColorAndroid: "transparent",
    inputContainerUnderlayColor: `rgba(${anyColorToRgbString(contrast.low)},0.4)`,
    // Sizes
    fontSize: font.size,
    fontFamily: font.family,
    borderWidth: border.width,
    borderRadius: border.radius,
    // Alignment
    textAlign: "left",
    paddingHorizontal: spacing.smaller,
    paddingVertical: spacing.small,
};
//
// Navigation Styles
export const navigation = {
    statusBar: {
        backgroundColor: background.primary,
        barStyle: darkMode ? "light-content" : "dark-content",
    },
    topBar: {
        backgroundColor: background.primary,
        backButtonColor: contrast.highest,
        titleColor: contrast.highest,
        titleFontSize: Platform.select({ android: font.sizeH4, ios: font.sizeH5 }),
    },
    bottomBar: {
        color: contrast.high,
        selectedTextColor: contrast.high,
        selectedIconColor: brand.primary,
        backgroundColor: background.primary,
        fontSize: font.sizeSmall,
        iconSize: font.sizeSmall,
    },
    progressOverlay: {
        color: font.color,
        activityIndicatorColor: font.color,
        backgroundColor: `rgba(0, 0, 0, 0.5)`,
        containerBackgroundColor: background.secondary,
        fontSize: font.size,
        borderRadius: border.radius,
        elevation: 1.5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
};
//
// Badge Styles
export const badge = {
    fontWeight: font.weightBold,
    borderRadius: 30,
    paddingVertical: 3,
    paddingHorizontal: spacing.smaller,
    default: {
        color: contrast.higher,
        backgroundColor: contrast.lower,
    },
    primary: {
        color: brand.primary,
        backgroundColor: brand.primaryLight,
    },
    success: {
        color: brand.success,
        backgroundColor: brand.successLight,
    },
    warning: {
        color: brand.warning,
        backgroundColor: brand.warningLight,
    },
    danger: {
        color: brand.danger,
        backgroundColor: brand.dangerLight,
    },
};
//
// Tabcontainer Styles
export const tabContainer = {
    tabBar: {
        pressColor: contrast.lower,
        backgroundColor: background.primary,
    },
    indicator: {
        backgroundColor: brand.primary,
        height: Platform.select({ ios: 2, android: 2 }),
    },
    label: {
        color: contrast.highest,
        fontWeight: font.weightBold,
        textTransform: "uppercase",
    },
    activeLabel: {
        color: brand.primary,
        fontWeight: font.weightBold,
        textTransform: "uppercase",
    },
    badgeContainer: {
        borderRadius: badge.borderRadius,
        backgroundColor: badge.default.backgroundColor,
        paddingVertical: badge.paddingVertical,
        paddingHorizontal: badge.paddingHorizontal,
        marginLeft: 8,
    },
    badgeCaption: {
        fontSize: font.size,
        color: badge.default.color,
        fontWeight: badge.fontWeight,
    },
};
//
// ListView Styles
export const listView = {
    border: {
        color: border.color,
        width: border.width,
    },
};
//
// Layoutgrid Styles
export const layoutGrid = {
    gutterSize: 15,
};
