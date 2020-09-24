import { button, contrast, font } from "../variables";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Button

    Default Class For Mendix Button Widget
========================================================================== */
export const ActionButton = {
    container: {
        // Ripplecolor and all ViewStyle properties are allowed
        borderWidth: 1,
        borderStyle: "solid",
        rippleColor: contrast.lowest,
        borderColor: button.primary.borderColor,
        backgroundColor: button.primary.backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: button.borderRadius,
        paddingVertical: button.paddingVertical,
        paddingHorizontal: button.paddingHorizontal,
    },
    containerDisabled: {
        // All ViewStyle properties are allowed
        borderColor: button.primary.borderColorDisabled,
        backgroundColor: button.primary.backgroundColorDisabled,
    },
    icon: {
        // size and color are allowed
        color: button.primary.color,
        size: button.fontSizeIcon,
    },
    iconDisabled: {
        // size and color are allowed
        color: button.primary.colorDisabled,
    },
    caption: {
        // All TextStyle properties are allowed
        color: button.primary.color,
        fontSize: button.fontSize,
        fontFamily: font.family,
        fontWeight: button.fontWeight,
    },
    captionDisabled: {
        // All TextStyle properties are allowed
        color: button.primary.colorDisabled,
    },
};
//
// Default style for button inside a header
export const ActionButtonHeader = {
    container: {
        borderColor: button.header.borderColor,
        backgroundColor: button.header.backgroundColor,
        paddingLeft: button.header.paddingLeft,
        paddingRight: button.header.paddingRight,
    },
    icon: {
        color: button.header.color,
        size: button.header.fontSizeIcon,
    },
    caption: {
        color: button.header.color,
        fontSize: button.header.fontSize,
        fontFamily: font.family,
    },
};
