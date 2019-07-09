import { TextBox, TextBoxVertical } from "./textbox";
import { input } from "../variables";

/* ==========================================================================
    Drop Down

    Default Class For Mendix Drop Down Widget
========================================================================== */

export const DropDown = {
    container: {
        // All ViewStyle properties are allowed
        ...TextBox.container,
    },
    label: {
        // All TextStyle properties are allowed
        ...TextBox.label,
    },
    pickerIOS: {
        // All ViewStyle properties are allowed
    },
    pickerItemIOS: {
        // All TextStyle properties are allowed
    },
    pickerBackdropIOS: {
        // All ViewStyle properties are allowed
    },
    pickerTopIOS: {
        // All ViewStyle properties are allowed
    },
    value: {
        // All TextStyle properties are allowed
        color: input.color,
        borderColor: input.borderColor,
        backgroundColor: input.backgroundColor,

        borderWidth: input.borderWidth,
        borderRadius: input.radius,

        paddingHorizontal: input.paddingHorizontal,
        paddingVertical: input.paddingVertical,
    },
    valueDisabled: {
        // All TextStyle properties are allowed
        backgroundColor: input.disabledBackgroundColor,
    },
    validationMessage: {
        // All TextStyle properties are allowed
        ...TextBox.validationMessage,
    },
};
export const DropDownVertical = {
    container: TextBoxVertical.container,
    label: TextBoxVertical.label,
    pickerIOS: DropDown.pickerIOS,
    pickerItemIOS: DropDown.pickerItemIOS,
    pickerBackdropIOS: DropDown.pickerBackdropIOS,
    pickerTopIOS: DropDown.pickerTopIOS,
    value: {
        color: input.color,
        borderColor: input.borderColor,
        backgroundColor: input.backgroundColor,

        borderRadius: input.radius,
        borderWidth: input.borderWidth,

        paddingVertical: input.paddingVertical,
        paddingHorizontal: input.paddingHorizontal,
    },
    validationMessage: TextBoxVertical.validationMessage,
};
