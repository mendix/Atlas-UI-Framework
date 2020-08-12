import { border, contrast, font, input } from "../variables";
import { TextBox, TextBoxVertical }      from "./textbox";
import { DropDownType }                  from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Drop Down

    Default Class For Mendix Drop Down Widget
========================================================================== */
export const DropDown: DropDownType = {
    container: {
        // All ViewStyle properties are allowed
        ...TextBox.container,
    },
    label: {
        // numberOfLines and all TextStyle properties are allowed
        ...TextBox.label,
    },
    value: {
        // All TextStyle properties & placeholderTextColor are allowed
        color: input.color,
        borderColor: input.borderColor,
        backgroundColor: input.backgroundColor,

        fontSize: input.fontSize,
        fontFamily: input.fontFamily,
        borderWidth: input.borderWidth,
        borderRadius: input.borderRadius,

        paddingHorizontal: input.paddingHorizontal,
        paddingVertical: input.paddingVertical,

        placeholderTextColor: input.placeholderTextColor, // Only applied when useUniformDesign is true
    },
    valueDisabled: {
        // All TextStyle properties are allowed
        backgroundColor: input.disabledBackgroundColor,
    },
    validationMessage: {
        // All TextStyle properties are allowed
        ...TextBox.validationMessage,
    },
    /*  New dropdown styles start */
    valueContainer: {
        // All ViewStyle properties & rippleColor are allowed
        backgroundColor: input.backgroundColor,
    },
    menuWrapper: {
        // All ViewStyle properties are allowed
        borderRadius: border.radius,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 16,
    },
    itemContainer: {
        // All ViewStyle properties are allowed
        maxWidth: 500,
        paddingVertical: 6,
        paddingHorizontal: 16,
    },
    item: {
        // All TextStlye properties are allowed
        color: input.color,
    },
    selectedItem: {
        // All TextStlye properties are allowed
        fontWeight: font.weightBold,
    },
    selectedItemContainer: {
        // All ViewStyle properties are allowed
        backgroundColor: contrast.lowest,
    },
    /*  New dropdown styles end */
    useUniformDesign: true,
    /*  Old dropdown styles start */
    pickerIOS: {
        // All ViewStyle properties are allowed
        backgroundColor: input.backgroundColor,
    },
    pickerItemIOS: {
        // All TextStyle properties are allowed
    },
    pickerBackdropIOS: {
        // All ViewStyle properties are allowed
    },
    pickerTopIOS: {
        // All ViewStyle properties are allowed
        backgroundColor: input.backgroundColor,
    },
    /*  Old dropdown styles start */
};
export const DropDownVertical: DropDownType = {
    container: TextBoxVertical.container,
    label: TextBoxVertical.label,
    value: DropDown.value,
    validationMessage: TextBoxVertical.validationMessage,
    valueContainer: DropDown.valueContainer,
    menuWrapper: DropDown.menuWrapper,
    itemContainer: DropDown.itemContainer,
    item: DropDown.item,
    useUniformDesign: DropDown.useUniformDesign,
    pickerIOS: DropDown.pickerIOS,
    pickerItemIOS: DropDown.pickerItemIOS,
    pickerBackdropIOS: DropDown.pickerBackdropIOS,
    pickerTopIOS: DropDown.pickerTopIOS,
};
