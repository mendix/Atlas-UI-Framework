import { background, brand, contrast, font } from "../../variables";
import { ToggleButtonsType } from "../../types/widgets";
import { TextBox } from "./textbox";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Segmented Controls

    Default Class For Mendix Segmented Controls Widget
========================================================================== */
export const com_mendix_widget_native_togglebuttons_ToggleButtons: ToggleButtonsType = {
    container: {
        // All ViewStyle properties are allowed
        backgroundColor: background.gray,
        borderRadius: 16,
        alignSelf: "stretch"
    },
    containerDisabled: {
        opacity: 0.6,
        alignSelf: "stretch"
    },
    button: {
        // All ViewStyle properties are allowed
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderRadius: 16
    },
    text: {
        // All TextStyle properties are allowed
        color: contrast.low,
        fontSize: font.size,
        fontFamily: font.family
    },
    activeButton: {
        // All ViewStyle properties are allowed
        backgroundColor: brand.primary,
        borderColor: brand.primary,
        borderRadius: 16
    },
    activeButtonText: {
        // All TextStyle properties are allowed
        color: "#FFF",
        fontSize: font.size,
        fontFamily: font.family
    },
    validationMessage: {
        // All TextStyle properties are allowed
        ...TextBox.validationMessage
    }
};
