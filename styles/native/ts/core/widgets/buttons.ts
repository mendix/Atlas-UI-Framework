import { button, font } from "../../variables";
import { ActionButtonType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Button

    Default Class For Mendix Button Widget
========================================================================== */
export const ActionButton: ActionButtonType = {
    container: {
        // Ripplecolor and all ViewStyle properties are allowed
        borderWidth: 1,
        borderStyle: "solid",
        rippleColor: button.container.rippleColor,
        borderColor: button.primary.borderColor,
        backgroundColor: button.primary.backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: button.container.borderRadius,

        minWidth: button.container.minWidth,
        minHeight: button.container.minHeight,
        paddingVertical: button.container.paddingVertical,
        paddingHorizontal: button.container.paddingHorizontal
    },
    containerDisabled: {
        // All ViewStyle properties are allowed
        borderColor: button.containerDisabled.borderColor,
        backgroundColor: button.containerDisabled.backgroundColor
    },
    icon: {
        // Size and color are allowed
        color: button.primary.color,
        size: button.icon.size
    },
    iconDisabled: {
        // Size and color are allowed
        color: button.iconDisabled.color
    },
    caption: {
        // All TextStyle properties are allowed
        color: button.primary.color,
        fontSize: button.caption.fontSize,
        fontFamily: font.family,
        fontWeight: button.caption.fontWeight,
        lineHeight: font.lineHeight
    },
    captionDisabled: {
        // All TextStyle properties are allowed
        color: button.captionDisabled.color
    }
};
//
// Default style for button inside a header
export const ActionButtonHeader: ActionButtonType = {
    container: {
        borderColor: button.header.borderColor,
        backgroundColor: button.header.backgroundColor,
        paddingLeft: button.header.paddingLeft,
        paddingRight: button.header.paddingRight
    },
    icon: {
        color: button.header.color,
        size: button.header.fontSizeIcon
    },
    caption: {
        color: button.header.color,
        fontSize: button.header.fontSize,
        fontFamily: font.family
    }
};
