import { TextBox, TextBoxVertical } from "./textbox";

/* ==========================================================================
    Text Area

    Default Class For Mendix Text Area Widget
========================================================================== */

export const TextArea = {
    container: {
        // All ViewStyle properties are allowed
        ...TextBox.container,
    },
    label: {
        // numberOfLines and all TextStyle properties are allowed
        ...TextBox.label,
        height: "100%",
        textAlignVertical: "top",
        paddingVertical: TextBox.input.paddingVertical,
    },
    input: {
        // placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        ...TextBox.input,
        textAlignVertical: "top",
        paddingTop: TextBox.input.paddingVertical,
    },
    inputDisabled: {
        // All TextStyle properties are allowed
        backgroundColor: TextBox.inputDisabled.backgroundColor,
    },
    inputError: {
        // All TextStyle properties are allowed
        ...TextBox.inputError,
    },
    validationMessage: {
        // All TextStyle properties are allowed
        ...TextBox.validationMessage,
    },
};

export const TextAreaVertical = {
    container: TextBoxVertical.container,
    label: {
        ...TextBoxVertical.label,
        height: null,
        paddingVertical: null,
        textAlignVertical: null,
    },
    input: TextBoxVertical.input,
    inputError: TextBoxVertical.inputError,
    validationMessage: TextBoxVertical.validationMessage,
};
