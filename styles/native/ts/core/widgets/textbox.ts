import { font, input, spacing } from "../variables";
import { TextBoxType }          from "../../types/widgets";
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
        numberOfLines: 1,
        color: input.labelColor,
        fontSize: input.fontSize,
        fontFamily: font.family,
        textAlign: input.textAlign,
        marginRight: spacing.small,
    },
    labelDisabled: {
        // TextStyle properties are allowed
        color: "#474E5C",
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
        // todo: move to variables.
        backgroundColor: "#F8F8F8",
        borderColor: "#CED0D3",
        color: "rgba(0,0,0,0.38)",
    },
    inputError: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        color: input.errorColor,
        borderColor: input.errorColor,
        placeholderTextColor: input.errorColor,
        underlineColorAndroid: input.underlineColorAndroid,
    },
    validationMessage: {
        // All TextStyle properties are allowed
        color: input.errorColor,
        fontSize: font.size,
        fontFamily: font.family,
    },
};
export const TextBoxVertical: TextBoxType = {
    container: {},
    label: {
        numberOfLines: 1,
        color: input.labelColor,
        fontSize: input.fontSize,
        fontFamily: font.family,
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
        fontFamily: input.fontFamily,
        borderRadius: input.borderRadius,
        borderWidth: input.borderWidth,

        paddingHorizontal: input.paddingHorizontal,
        paddingVertical: input.paddingVertical,
    },
    inputError: TextBox.inputError,
    validationMessage: TextBox.validationMessage,
};
