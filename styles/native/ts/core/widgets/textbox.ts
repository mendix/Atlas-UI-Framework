import { font, input, spacing } from "../../variables";
import { TextBoxType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Text Box

    Default Class For Mendix Text Box Widget
========================================================================== */
export const TextBox: TextBoxType = {
    container: {
        // All ViewStyle properties are allowed
    },
    containerDisabled: {
        // All ViewStyle properties are allowed
    },
    label: {
        // numberOfLines and all TextStyle properties are allowed
        numberOfLines: input.label.numberOfLines,
        color: input.label.color,
        fontSize: input.label.fontSize,
        fontFamily: font.family,
        textAlign: input.label.textAlign,
        marginRight: spacing.small
    },
    labelDisabled: {
        // TextStyle properties are allowed
        color: input.labelDisabled.color
    },
    input: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        color: input.input.color,
        borderColor: input.input.borderColor,
        backgroundColor: input.input.backgroundColor,
        selectionColor: input.input.selectionColor,
        placeholderTextColor: input.input.placeholderTextColor,

        fontSize: input.input.fontSize,
        fontFamily: font.family,
        borderWidth: input.input.borderWidth,
        borderRadius: input.input.borderRadius,

        // textAlignVertical: "center",
        minWidth: input.input.minWidth,
        minHeight: input.input.minHeight,
        paddingHorizontal: input.input.paddingHorizontal,
        paddingVertical: input.input.paddingVertical
    },
    inputDisabled: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        color: input.inputDisabled.color,
        borderColor: input.inputDisabled.borderColor,
        backgroundColor: input.inputDisabled.backgroundColor
    },
    inputFocused: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
    },
    inputError: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        color: input.inputError.color,
        borderColor: input.inputError.borderColor,
        placeholderTextColor: input.inputError.placeholderTextColor,
        underlineColorAndroid: "transparent"
    },
    validationMessage: {
        // All TextStyle properties are allowed
        color: input.validationMessage.color,
        fontSize: input.validationMessage.fontSize,
        fontFamily: font.family
    }
};
export const TextBoxVertical: TextBoxType = {
    container: {},
    containerDisabled: {},
    label: {
        numberOfLines: input.label.numberOfLines,
        color: input.label.color,
        fontSize: input.label.fontSize,
        fontFamily: font.family,
        textAlign: input.label.textAlign,
        marginBottom: spacing.smallest
    },
    labelDisabled: {
        color: input.labelDisabled.color
    },
    input: {
        color: input.input.color,
        borderColor: input.input.borderColor,
        backgroundColor: input.input.backgroundColor,
        selectionColor: input.input.selectionColor,
        placeholderTextColor: input.input.placeholderTextColor,

        fontSize: input.input.fontSize,
        fontFamily: font.family,
        borderWidth: input.input.borderWidth,
        borderRadius: input.input.borderRadius,

        // textAlignVertical: "center",
        minWidth: input.input.minWidth,
        minHeight: input.input.minHeight,
        paddingHorizontal: input.input.paddingHorizontal,
        paddingVertical: input.input.paddingVertical
    },
    inputDisabled: TextBox.inputDisabled,
    inputFocused: TextBox.inputFocused,
    inputError: TextBox.inputError,
    validationMessage: TextBox.validationMessage
};
