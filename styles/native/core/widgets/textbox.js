import { input, spacing } from "../variables";

/* ==========================================================================
    Text Box

    Default Class For Mendix Text Box Widget
========================================================================== */

export const TextBox = {
    container: {
        // All ViewStyle properties are allowed
    },
    label: {
        // numberOfLines and all TextStyle properties are allowed
        numberOfLines: 1,
        color: input.color,
        fontSize: input.fontSize,
        textAlign: input.textAlign,
        marginRight: spacing.small,
    },
    input: {
        // placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        color: input.color,
        borderColor: input.borderColor,
        backgroundColor: input.backgroundColor,
        selectionColor: input.selectionColor,
        placeholderTextColor: input.placeholderTextColor,

        fontSize: input.fontSize,
        borderWidth: input.borderWidth,
        borderRadius: input.borderRadius,

        paddingHorizontal: input.paddingHorizontal,
        paddingVertical: input.paddingVertical,
    },
    inputDisabled: {
        // All TextStyle properties are allowed
        backgroundColor: input.disabledBackgroundColor,
    },
    inputError: {
        // All TextStyle properties are allowed
        color: input.errorColor,
        borderColor: input.errorColor,
        selectionColor: input.errorColor,
        placeholderTextColor: input.errorColor,
        underlineColorAndroid: input.underlineColorAndroid,
    },
    validationMessage: {
        // All TextStyle properties are allowed
        color: input.errorColor,
    },
};

export const TextBoxVertical = {
    container: {},
    label: {
        numberOfLines: 1,
        color: input.color,
        fontSize: input.fontSize,
        textAlign: input.textAlign,
        marginBottom: spacing.smallest,
    },
    input: {
        color: input.color,
        borderColor: input.borderColor,
        backgroundColor: input.backgroundColor,
        selectionColor: input.selectionColor,
        placeholderTextColor: input.placeholderTextColor,

        fontSize: input.fontSize,
        borderRadius: input.borderRadius,
        borderWidth: input.borderWidth,

        paddingHorizontal: input.paddingHorizontal,
        paddingVertical: input.paddingVertical,
    },
    inputError: TextBox.inputError,
    validationMessage: TextBox.validationMessage,
};
