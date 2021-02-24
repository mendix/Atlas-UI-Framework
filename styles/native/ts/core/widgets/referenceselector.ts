import { DropDown, DropDownVertical } from "./dropdown";
import { DropDownType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Reference Selector

    Default Class For Mendix Reference Selector Widget
========================================================================== */
export const ReferenceSelector: DropDownType = {
    container: {
        // All ViewStyle properties are allowed
        ...DropDown.container
    },
    containerDisabled: {
        // All ViewStyle properties are allowed
        ...DropDown.containerDisabled
    },
    label: {
        // numberOfLines and all TextStyle properties are allowed
        ...DropDown.label
    },
    labelDisabled: {
        // All TextStyle properties are allowed
        ...DropDown.labelDisabled
    },
    value: {
        // All TextStyle properties & placeholderTextColor are allowed
        ...DropDown.value
    },
    valueDisabled: {
        // All TextStyle properties are allowed
        ...DropDown.valueDisabled
    },
    valueFocused: {
        // All TextStyle properties are allowed
        ...DropDown.valueFocused
    },
    validationMessage: {
        // All TextStyle properties are allowed
        ...DropDown.validationMessage
    },
    /*  New dropdown styles start */
    valueContainer: {
        // All ViewStyle properties & rippleColor are allowed
        ...DropDown.valueContainer
    },
    valueContainerDisabled: {
        // All ViewStyle properties are allowed
    },
    valueContainerFocused: {
        // All ViewStyle properties are allowed
        ...DropDown.valueContainerFocused
    },
    iconStyle: {
        // All TextStyle properties are allowed
        ...DropDown.iconStyle
    },
    menuWrapper: {
        // All ViewStyle properties are allowed
        ...DropDown.menuWrapper
    },
    itemContainer: {
        // All ViewStyle properties are allowed
        ...DropDown.itemContainer
    },
    item: {
        // All TextStyle properties are allowed
        ...DropDown.item
    },
    selectedItem: {
        // All TextStyle properties are allowed
        ...DropDown.selectedItem
    },
    selectedItemContainer: {
        // All ViewStyle properties are allowed
        ...DropDown.selectedItemContainer
    },
    /*  New dropdown styles end */
    useUniformDesign: DropDown.useUniformDesign,
    /*  Old dropdown styles start */
    pickerIOS: {
        // All ViewStyle properties are allowed
        ...DropDown.pickerIOS
    },
    pickerItemIOS: {
        // All TextStyle properties are allowed
        ...DropDown.pickerItemIOS
    },
    pickerBackdropIOS: {
        // All ViewStyle properties are allowed
        ...DropDown.pickerBackdropIOS
    },
    pickerTopIOS: {
        // All ViewStyle properties are allowed
        ...DropDown.pickerTopIOS
    }
    /*  Old dropdown styles end */
};
export const ReferenceSelectorVertical: DropDownType = {
    container: DropDownVertical.container,
    label: DropDownVertical.label,
    value: DropDownVertical.value,
    valueFocused: DropDownVertical.valueFocused,
    validationMessage: DropDownVertical.validationMessage,
    valueContainer: DropDownVertical.valueContainer,
    valueContainerFocused: DropDownVertical.valueContainerFocused,
    iconStyle: DropDownVertical.iconStyle,
    menuWrapper: DropDownVertical.menuWrapper,
    itemContainer: DropDownVertical.itemContainer,
    item: DropDownVertical.item,
    useUniformDesign: DropDownVertical.useUniformDesign,
    pickerIOS: DropDownVertical.pickerIOS,
    pickerItemIOS: DropDownVertical.pickerItemIOS,
    pickerBackdropIOS: DropDownVertical.pickerBackdropIOS,
    pickerTopIOS: DropDownVertical.pickerTopIOS
};
