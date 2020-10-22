import { font, input, spacing } from "../variables";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Text Box

    Default Class For Mendix Text Box Widget
========================================================================== */
export const TextBox = {
    container: {
    // All ViewStyle properties are allowed
    },
    containerDisabled: {
    // All ViewStyle properties are allowed
    },
    label: {
        // numberOfLines and all TextStyle properties are allowed
        numberOfLines: 1,
        color: input.labelColor,
        fontSize: input.fontSize,
        fontFamily: font.family,
        textAlign: input.textAlign,
        marginRight: spacing.small,
    },
    labelDisabled: {
        // TextStyle properties are allowed
        color: input.labelColorDisabled,
    },
    input: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        color: input.color,
        borderColor: input.borderColor,
        backgroundColor: input.backgroundColor,
        selectionColor: input.selectionColor,
        placeholderTextColor: input.placeholderTextColor,
        fontSize: input.fontSize,
        fontFamily: input.fontFamily,
        borderWidth: input.borderWidth,
        borderRadius: input.borderRadius,
        paddingHorizontal: input.paddingHorizontal,
        paddingVertical: input.paddingVertical,
    },
    inputDisabled: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        backgroundColor: input.backgroundColorDisabled,
        color: input.colorDisabled,
    },
    inputError: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        color: input.errorColor,
        borderColor: input.errorColor,
        placeholderTextColor: input.errorColor,
        underlineColorAndroid: input.underlineColorAndroid,
    },
    inputFocused: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        borderColor: input.borderColorFocused
    },
    validationMessage: {
        // All TextStyle properties are allowed
        color: input.errorColor,
        fontSize: font.size,
        fontFamily: font.family,
    },
};
export const TextBoxVertical = {
    container: {},
    containerDisabled: TextBox.containerDisabled,
    label: {
        numberOfLines: 1,
        color: input.labelColor,
        fontSize: input.fontSize,
        fontFamily: font.family,
        textAlign: input.textAlign,
        marginBottom: spacing.smallest,
    },
    labelDisabled: TextBox.labelDisabled,
    input: {
        color: input.color,
        borderColor: input.borderColor,
        backgroundColor: input.backgroundColor,
        selectionColor: input.selectionColor,
        placeholderTextColor: input.placeholderTextColor,
        fontSize: input.fontSize,
        fontFamily: input.fontFamily,
        borderRadius: input.borderRadius,
        borderWidth: input.borderWidth,
        paddingHorizontal: input.paddingHorizontal,
        paddingVertical: input.paddingVertical,
    },
    inputFocused: TextBox.inputFocused,
    inputDisabled: TextBox.inputDisabled,
    inputError: TextBox.inputError,
    validationMessage: TextBox.validationMessage,
};
