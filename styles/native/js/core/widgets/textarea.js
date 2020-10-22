import { input } from "../variables";
import { TextBox, TextBoxVertical } from "./textbox";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Text Area

    Default Class For Mendix Text Area Widget
========================================================================== */
export const TextArea = {
    container: {
        // All ViewStyle properties are allowed
        ...TextBox.container,
    },
    containerDisabled: {
        // All ViewStyle properties are allowed
        ...TextBox.containerDisabled,
    },
    label: {
        // numberOfLines and all TextStyle properties are allowed
        ...TextBox.label,
        height: "100%",
        textAlignVertical: "top",
        paddingVertical: input.paddingVertical,
    },
    labelDisabled: {
        // All ViewStyle properties are allowed
        ...TextBox.labelDisabled
    },
    input: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        ...TextBox.input,
        textAlignVertical: "top",
        paddingTop: input.paddingVertical,
    },
    inputDisabled: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        ...TextBox.inputDisabled
    },
    inputError: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        ...TextBox.inputError,
    },
    inputFocused: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        ...TextBox.inputFocused,
    },
    validationMessage: {
        // All TextStyle properties are allowed
        ...TextBox.validationMessage,
    },
};
export const TextAreaVertical = {
    container: TextBoxVertical.container,
    containerDisabled: TextBoxVertical.containerDisabled,
    label: {
        ...TextBoxVertical.label,
        height: undefined,
        paddingVertical: undefined,
        textAlignVertical: undefined,
    },
    labelDisabled: TextBoxVertical.labelDisabled,
    input: TextBoxVertical.input,
    inputDisabled: TextBoxVertical.inputDisabled,
    inputError: TextBoxVertical.inputError,
    inputFocused: TextBoxVertical.inputFocused,
    validationMessage: TextBoxVertical.validationMessage,
};
