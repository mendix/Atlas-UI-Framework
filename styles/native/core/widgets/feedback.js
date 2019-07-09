import { background, border, brand, button, contrast, font, input } from "../variables";
import { Platform } from "react-native";
import { anyColorToRgbString } from "../_helperfunctions/convertcolors";

/* ==========================================================================
    Feedback

    Default Class For Mendix Feedback Widget
========================================================================== */

export const com_mendix_widget_native_feedback_Feedback = (Feedback = {
    floatingButton: {
        // All ViewStyle properties are allowed
        borderRadius: 0,
        backgroundColor: background.secondary,
        borderTopLeftRadius: button.borderRadius,
        borderBottomLeftRadius: button.borderRadius,
        shadowColor: contrast.lower,
        shadowOpacity: 0.9,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 2,
    },
    dialog: {
        // All ViewStyle properties are allowed
        backgroundColor: background.primary,
    },
    title: {
        // All TextStyle properties are allowed
        color: font.color,
    },
    textAreaInput: {
        // All TextStyle properties are allowed
        color: input.color,
        borderColor: input.borderColor,
        backgroundColor: input.backgroundColor,
        selectionColor: input.selectionColor,
        placeholderTextColor: input.placeholderTextColor,
        underlineColorAndroid: input.underlineColorAndroid,

        height: 100,
        fontSize: input.fontSize,
        fontFamily: input.fontFamily,
        borderWidth: input.width,
        borderRadius: input.borderRadius,
        borderTopWidth: input.borderWidth,
        borderBottomWidth: input.borderWidth,
        borderWidth: Platform.select({ android: border.width }),

        textAlignVertical: "top",
        paddingVertical: input.paddingVertical,
        paddingHorizontal: input.paddingHorizontal,
    },
    switchLabel: {
        // All TextStyle properties are allowed
        color: input.color,
        fontSize: input.fontSize,
        fontFamily: input.fontFamily,
    },
    switchInput: {
        // All TextStyle properties are allowed
        margin: 0,
        padding: 0,
        marginRight: Platform.select({ ios: 0, android: -5 }),
        thumbColorOn: brand.primary,
        trackColorOn: `rgba(${anyColorToRgbString(brand.primary)},0.2)`,
        thumbColorOff: contrast.low,
        trackColorOff: `rgba(${anyColorToRgbString(contrast.low)},0.2)`,
    },
    button: {
        // Just these 3 properties are allowed
        color: brand.primary,
        borderColor: border.color, // Required for IOS
        borderWidth: border.width, // Required for IOS
    },
    activityIndicator: {
        color: font.color,
    },
});
