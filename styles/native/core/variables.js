import * as custom from "../app/custom-variables";
import { Dimensions, Platform } from "react-native";
import { setColorBasedOnBackground, setContrastScale } from "./_helperfunctions/convertcolors";
import adjustFont from "./_helperfunctions/adjustfont";
import merge from "./_helperfunctions/mergeobjects";

//== Global variables
//## Variables to be used during styling
//-------------------------------------------------------------------------------------------------------------------//
// System defined read-only values
export const { height: deviceHeight, width: deviceWidth } = Dimensions.get("window");

// Brand Style
let brand = {
    primary: "#0595DB",
    success: "#76CA02",
    warning: "#f99b1d",
    danger: "#ed1c24",
};
brand = merge(brand, custom.brand || {});

let background = {
    primary: "#FFF",
    secondary: setContrastScale(0.03, "#FFF"),
};
background = merge(background, custom.background || {});

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

// Border Style
let border = {
    color: setContrastScale(0.17, background.primary),
    width: 1,
    radius: 5,
};
border = merge(border, custom.border || {});

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
    weightLight: "100",
    weightNormal: "normal",
    weightSemiBold: "600",
    weightBold: "bold",
    family: Platform.select({ ios: "System", android: "normal" }),
};
font = merge(font, custom.font || {});

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

// Button Styles
let button = {
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
button = merge(button, custom.button || {});

//Input Styles
let input = {
    // Colors
    color: contrast.higher,
    errorColor: brand.danger,
    borderColor: contrast.lower,
    backgroundColor: background.primary,
    disabledBackgroundColor: contrast.lowest,
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
input = merge(input, custom.input || {});

export { brand, background, border, contrast, font, spacing, button, input };
