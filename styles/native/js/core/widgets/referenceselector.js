import { border, contrast, font, input } from "../variables";
import { DropDownVertical } from "./dropdown";
import { TextBox, TextBoxVertical } from "./textbox";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Reference Selector

    Default Class For Mendix Reference Selector Widget
========================================================================== */
export const ReferenceSelector = {
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
    },
    labelDisabled: {
        // All TextStyle properties are allowed
        ...TextBox.labelDisabled,
    },
    value: {
        // All TextStyle properties & placeholderTextColor are allowed
        color: input.color,
        fontSize: input.fontSize,
        fontFamily: input.fontFamily,
        overflow: "hidden",
        placeholderTextColor: input.placeholderTextColor,
    },
    validationMessage: {
        // All TextStyle properties are allowed
        ...TextBox.validationMessage,
    },
    /*  New dropdown styles start */
    valueFocused: {
    // All TextStyle properties are allowed
    },
    valueDisabled: {
        // All TextStyle properties are allowed
        ...TextBox.inputDisabled,
    },
    valueContainer: {
        // All ViewStyle properties & rippleColor are allowed
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: input.borderWidth,
        borderRadius: input.borderRadius,
        borderColor: input.borderColor,
        paddingHorizontal: input.paddingHorizontal,
        paddingVertical: input.paddingVertical,
        backgroundColor: input.backgroundColor,
    },
    valueContainerFocused: {
        // All ViewStyle properties are allowed
        ...TextBox.inputFocused,
    },
    valueContainerDisabled: {
    // All ViewStyle properties are allowed
    },
    menuWrapper: {
        // All ViewStyle properties are allowed
        borderRadius: border.radius,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 16,
        backgroundColor: input.backgroundColor,
    },
    itemContainer: {
        // All ViewStyle properties & rippleColor & activeOpacity & underlayColor are allowed
        maxWidth: 500,
        paddingVertical: 6,
        paddingHorizontal: 16,
        backgroundColor: input.backgroundColor,
        underlayColor: input.inputContainerUnderlayColor,
    },
    iconStyle: {
        // All TextStyle properties are allowed
        color: input.color,
    },
    item: {
        // All TextStyle properties are allowed
        color: input.color,
    },
    selectedItem: {
        // All TextStyle properties are allowed
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
};
export const ReferenceSelectorVertical = {
    container: TextBoxVertical.container,
    containerDisabled: TextBoxVertical.containerDisabled,
    label: TextBoxVertical.label,
    labelDisabled: TextBoxVertical.labelDisabled,
    value: DropDownVertical.value,
    valueFocused: DropDownVertical.valueFocused,
    validationMessage: TextBoxVertical.validationMessage,
    valueContainer: DropDownVertical.valueContainer,
    valueContainerFocused: DropDownVertical.valueContainerFocused,
    valueContainerDisabled: DropDownVertical.valueContainerDisabled,
    menuWrapper: DropDownVertical.menuWrapper,
    itemContainer: DropDownVertical.itemContainer,
    item: DropDownVertical.item,
    iconStyle: DropDownVertical.iconStyle,
    useUniformDesign: DropDownVertical.useUniformDesign,
    pickerIOS: DropDownVertical.pickerIOS,
    pickerItemIOS: DropDownVertical.pickerItemIOS,
    pickerBackdropIOS: DropDownVertical.pickerBackdropIOS,
    pickerTopIOS: DropDownVertical.pickerTopIOS,
};
