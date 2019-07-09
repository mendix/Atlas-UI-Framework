import { TextBox, TextBoxVertical } from "./textbox";
import { brand, contrast, spacing } from "../variables";
import { Platform } from "react-native";
import { anyColorToRgbString } from "../_helperfunctions/convertcolors";

/* ==========================================================================
    CheckBox

    Default Class For Mendix CheckBox Widget
========================================================================== */

export const CheckBox = {
    container: {
        // All ViewStyle properties are allowed
        ...TextBox.container,
        paddingVertical: spacing.smallest,
        justifyContent: "center",
    },
    label: {
        // numberOfLines and all TextStyle properties are allowed
        ...TextBox.label,
    },
    input: {
        // thumbColorOn, thumbColorOff, trackColorOn, trackColorOff and all TextStyle properties are allowed
        backgroundColor: "transparent",
        marginRight: Platform.select({ android: -3 }),
        thumbColorOn: brand.primary,
        trackColorOn: `rgba(${anyColorToRgbString(brand.primary)},0.2)`,
        thumbColorOff: contrast.low,
        trackColorOff: `rgba(${anyColorToRgbString(contrast.low)},0.2)`,
    },
    inputDisabled: {
        opacity: Platform.select({ android: 0.5 }),
    },
    inputError: {
        // thumbColorOn, thumbColorOff, trackColorOn, trackColorOff and all TextStyle properties are allowed
        ...TextBox.inputError,
        thumbColorOn: brand.danger,
        trackColorOn: `rgba(${anyColorToRgbString(brand.danger)},0.2)`,
        thumbColorOff: brand.danger,
        trackColorOff: `rgba(${anyColorToRgbString(brand.danger)},0.2)`,
    },
    validationMessage: {
        // All TextStyle properties are allowed
        ...TextBox.validationMessage,
        alignSelf: "stretch",
    },
};

export const CheckBoxVertical = {
    container: TextBoxVertical.container,
    label: TextBoxVertical.label,
    input: {
        alignSelf: "flex-start",
    },
    inputError: TextBoxVertical.inputError,
    validationMessage: TextBoxVertical.validationMessage,
};
