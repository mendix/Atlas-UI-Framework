import { TextBox, TextBoxVertical } from "./textbox";
import { TextBoxType } from "../../types/widgets";
import { input } from "../../variables";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Text Area

    Default Class For Mendix Text Area Widget
========================================================================== */
export const TextArea: TextBoxType = {
    container: {
        // All ViewStyle properties are allowed
        ...TextBox.container
    },
    containerDisabled: {
        // All ViewStyle properties are allowed
        ...TextBox.containerDisabled
    },
    label: {
        // numberOfLines and all TextStyle properties are allowed
        ...TextBox.label,
        lineHeight: input.input.lineHeight,
        height: "100%",
        textAlignVertical: "top",
        paddingVertical: TextBox.input?.paddingVertical
    },
    labelDisabled: {
        color: TextBox.labelDisabled?.color
    },
    input: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        ...TextBox.input,
        textAlignVertical: "top",
        paddingTop: TextBox.input?.paddingVertical
    },
    inputDisabled: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        backgroundColor: TextBox.inputDisabled?.backgroundColor,
        borderColor: TextBox.inputDisabled?.borderColor,
        color: TextBox.inputDisabled?.color
    },
    inputFocused: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
    },
    inputError: {
        // autoCapitalize, placeholderTextColor, selectionColor, underlineColorAndroid and all TextStyle properties are allowed
        ...TextBox.inputError
    },
    validationMessage: {
        // All TextStyle properties are allowed
        ...TextBox.validationMessage
    }
};
export const TextAreaVertical: TextBoxType = {
    container: TextBoxVertical.container,
    containerDisabled: TextBoxVertical.containerDisabled,
    label: {
        ...TextBoxVertical.label,
        height: undefined,
        paddingVertical: undefined,
        textAlignVertical: undefined
    },
    labelDisabled: {
        ...TextBoxVertical.labelDisabled,
        height: undefined,
        paddingVertical: undefined,
        textAlignVertical: undefined
    },
    input: {
        ...TextBoxVertical.input,
        lineHeight: input.input.lineHeight
    },
    inputDisabled: TextBoxVertical.inputDisabled,
    inputFocused: TextBoxVertical.inputFocused,
    inputError: TextBoxVertical.inputError,
    validationMessage: TextBoxVertical.validationMessage
};
