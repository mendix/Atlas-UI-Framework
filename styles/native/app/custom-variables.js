import { setColorBasedOnBackground, setContrastScale } from "../core/_helperfunctions/convertcolors";
import { Platform } from "react-native";
import adjustFont from "../core/_helperfunctions/adjustfont";

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
};

// Dark Mode
const darkMode = false;

// Background Colors
const backgroundColor = darkMode ? "#000" : "#FFF";
const backgroundSecondaryContrast = darkMode ? 0.11 : 0.03;

export const background = {
    primary: backgroundColor,
    secondary: setContrastScale(backgroundSecondaryContrast, backgroundColor),
};

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

// Border Style
export const border = {
    color: setContrastScale(0.17, background.primary),
    width: 1,
    radius: 5,
};

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
    weightLight: "100",
    weightNormal: "normal",
    weightSemiBold: "600",
    weightBold: "bold",
    family: Platform.select({ ios: "System", android: "normal" }),
};

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

// Button Styles
export const button = {
    fontSize: font.size,
    borderRadius: border.radius,

    header: {
        color: brand.primary,
        borderColor: "transparent",
        backgroundColor: "transparent",
    },
    primary: {
        color: "#FFF",
        borderColor: brand.primary,
        backgroundColor: brand.primary,
    },
    secondary: {
        color: brand.primary,
        borderColor: brand.primary,
        backgroundColor: "transparent",
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

//Input Styles
export const input = {
    // Colors
    color: contrast.higher,
    errorColor: brand.danger,
    borderColor: contrast.lower,
    backgroundColor: background.primary,
    selectionColor: contrast.lower,
    placeholderTextColor: contrast.low,
    underlineColorAndroid: Platform.select({ android: "transparent" }),

    // Sizes
    fontSize: font.size,
    fontFamily: font.family,
    borderWidth: border.width,
    borderRadius: border.radius,

    // Alignment
    textAlign: "left",
    paddingHorizontal: spacing.small,
    paddingVertical: spacing.smaller,
};
