import { background, font, input } from "../../variables";
import { TextBox, TextBoxVertical } from "./textbox";
import { DatePickerType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Date Picker

    Default Class For Mendix Date Picker Widget
========================================================================== */
export const DatePicker: DatePickerType = {
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
        ...TextBox.label
    },
    labelDisabled: {
        // All TextStyle properties are allowed
        ...TextBox.labelDisabled
    },
    pickerIOS: {
        // All ViewStyle properties & "color" (type: string) are allowed
        backgroundColor: background.primary,
        color: font.colorTitle
    },
    pickerBackdropIOS: {
        // All ViewStyle properties are allowed
    },
    pickerTopIOS: {
        // All ViewStyle properties are allowed
        backgroundColor: background.primary
    },
    value: {
        // All TextStyle properties are allowed
        color: input.input.color,
        borderColor: input.input.borderColor,
        backgroundColor: input.input.backgroundColor,

        fontSize: input.input.fontSize,
        lineHeight: input.input.lineHeight,
        fontFamily: font.family,
        borderWidth: input.input.borderWidth,
        borderRadius: input.input.borderRadius,

        textAlignVertical: "center",
        minWidth: input.input.minWidth,
        minHeight: input.input.minHeight,
        paddingHorizontal: input.input.paddingHorizontal,
        paddingVertical: input.input.paddingVertical
    },
    valueDisabled: {
        // All TextStyle properties are allowed
        color: TextBox.inputDisabled?.color,
        borderColor: TextBox.inputDisabled?.borderColor,
        backgroundColor: TextBox.inputDisabled?.backgroundColor
    },
    placeholder: {
        // All TextStyle properties are allowed
        color: input.input.placeholderTextColor
    },
    placeholderDisabled: {
        // All TextStyle properties are allowed
        color: TextBox.inputDisabled?.color
    },
    validationMessage: {
        // All TextStyle properties are allowed
        ...TextBox.validationMessage
    }
};
export const DatePickerVertical: DatePickerType = {
    container: TextBoxVertical.container,
    containerDisabled: TextBoxVertical.containerDisabled,
    label: TextBoxVertical.label,
    labelDisabled: TextBoxVertical.labelDisabled,
    value: DatePicker.value,
    valueDisabled: DatePicker.valueDisabled,
    placeholder: DatePicker.placeholder,
    validationMessage: TextBoxVertical.validationMessage
};
