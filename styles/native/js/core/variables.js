import { Platform } from "react-native";
import * as custom from "../app/custom-variables";
import adjustFont, { height, width } from "./helpers/_functions/adjustfont";
import { anyColorToRgbString, setColorBasedOnBackground, setContrastScale } from "./helpers/_functions/convertcolors";
import merge from "./helpers/_functions/mergeobjects";
//
//
//== Global variables
//## Variables to be used during styling
//-------------------------------------------------------------------------------------------------------------------//
// System defined read-only values
export const deviceHeight = height;
export const deviceWidth = width;
//
// Brand Style
let brand = {
    primary: "#0595DB",
    success: "#76CA02",
    warning: "#f99b1d",
    danger: "#ed1c24",
    primaryLight: `rgba(${anyColorToRgbString("#0595DB")}, 0.14)`,
    successLight: `rgba(${anyColorToRgbString("#76CA02")}, 0.14)`,
    warningLight: `rgba(${anyColorToRgbString("#f99b1d")}, 0.14)`,
    dangerLight: `rgba(${anyColorToRgbString("#ed1c24")}, 0.14)`,
};
brand = merge(brand, custom.brand || {});
//
// Background colors
let background = {
    primary: "#FFF",
    secondary: setContrastScale(0.03, "#FFF"),
    gray: "#c6c6cc",
    brandPrimary: brand.primary,
    brandSuccess: brand.success,
    brandWarning: brand.warning,
    brandDanger: brand.danger,
};
background = merge(background, custom.background || {});
//
// Contrast (Gray) colors based on background.primary
let contrast = {
    highest: setContrastScale(0.95, background.primary),
    higher: setContrastScale(0.8, background.primary),
    high: setContrastScale(0.65, background.primary),
    regular: setContrastScale(0.5, background.primary),
    low: setContrastScale(0.35, background.primary),
    lower: setContrastScale(0.2, background.primary),
    lowest: setContrastScale(0.05, background.primary),
};
contrast = merge(contrast, custom.contrast || {});
//
// Border Style
let border = {
    color: setContrastScale(0.17, background.primary),
    width: 1,
    radius: 5,
};
border = merge(border, custom.border || {});
//
// Font Styles
let font = {
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
font = merge(font, custom.font || {});
//
// Spacing
let spacing = {
    smallest: 5,
    smaller: 10,
    small: 15,
    regular: 20,
    large: 25,
    larger: 30,
    largest: 40,
};
spacing = merge(spacing, custom.spacing || {});
//
// Button Styles
let button = {
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
button = merge(button, custom.button || {});
//
//Input Styles
let input = {
    // Colors
    color: font.color,
    colorDisabled: font.colorDisabled,
    errorColor: brand.danger,
    labelColor: font.color,
    labelColorDisabled: font.labelColorDisabled,
    borderColor: contrast.lower,
    borderColorFocused: brand.primary,
    backgroundColor: background.primary,
    backgroundColorDisabled: background.secondary,
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
input = merge(input, custom.input || {});
//
// Navigation Styles
let navigation = {
    statusBar: {
        backgroundColor: background.primary,
        barStyle: custom.darkMode ? "light-content" : "dark-content",
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
navigation = merge(navigation, custom.navigation || {});
//
// Badge Styles
let badge = {
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
badge = merge(badge, custom.badge || {});
//
// Tabcontainer Styles
let tabContainer = {
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
        marginLeft: 8
    },
    badgeCaption: {
        fontSize: font.size,
        color: badge.default.color,
        fontWeight: badge.fontWeight,
    }
};
tabContainer = merge(tabContainer, custom.tabContainer || {});
//
// Listview Styles
let listView = {
    border: {
        color: border.color,
        width: border.width,
    },
};
listView = merge(listView, custom.listView || {});
//
// Layoutgrid Styles
let layoutGrid = {
    gutterSize: 15,
};
layoutGrid = merge(layoutGrid, custom.layoutGrid || {});
//
export { brand, background, border, contrast, font, spacing, button, input, navigation, tabContainer, listView, layoutGrid, badge, };
