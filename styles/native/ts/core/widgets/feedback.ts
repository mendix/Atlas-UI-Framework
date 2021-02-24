import { Platform } from "react-native";
import { background, border, brand, button, contrast, font, input } from "../../variables";
import { FeedbackType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Feedback

    Default Class For Mendix Feedback Widget
========================================================================== */
export const com_mendix_widget_native_feedback_Feedback: FeedbackType = {
    floatingButton: {
        // All ViewStyle properties are allowed
        borderRadius: 0,
        backgroundColor: background.gray,
        borderTopLeftRadius: button.container.borderRadius,
        borderBottomLeftRadius: button.container.borderRadius,
        elevation: 1.5,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    dialog: {
        // All ViewStyle properties are allowed
        backgroundColor: background.primary
    },
    title: {
        // All TextStyle properties are allowed
        color: font.colorTitle,
        fontFamily: font.family
    },
    textAreaInput: {
        // placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        color: input.input.color,
        borderColor: input.input.borderColor,
        backgroundColor: input.input.backgroundColor,
        selectionColor: input.input.selectionColor,
        placeholderTextColor: input.input.placeholderTextColor,
        underlineColorAndroid: "transparent",

        height: 100,
        fontSize: input.input.fontSize,
        fontFamily: font.family,
        borderRadius: input.input.borderRadius,
        borderTopWidth: input.input.borderWidth,
        borderBottomWidth: input.input.borderWidth,
        borderWidth: Platform.select({ android: border.width }),

        textAlignVertical: "top",
        paddingVertical: input.input.paddingVertical,
        paddingHorizontal: input.input.paddingHorizontal
    },
    switchLabel: {
        // All TextStyle properties are allowed
        color: input.label.color,
        fontSize: input.label.fontSize,
        fontFamily: font.family
    },
    switchInput: {
        // thumbColorOn, thumbColorOff, trackColorOn, trackColorOff and all TextStyle properties are allowed
        margin: 0,
        padding: 0,
        marginRight: Platform.select({ ios: 0, android: -5 }),
        thumbColorOn: background.primary,
        trackColorOn: brand.success,
        thumbColorOff: contrast.regular,
        trackColorOff: contrast.lower
    },
    button: {
        // Just these 3 properties are allowed
        color: brand.primary,
        borderColor: border.color, // Required for IOS
        borderWidth: border.width // Required for IOS
    },
    activityIndicator: {
        // Only color is allowed
        color: font.colorTitle
    }
};
