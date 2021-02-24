import { floatingActionButton, font } from "../../variables";
import { FloatingActionButtonType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Floating Action Button

    Default Class For Mendix Floating Action Button Widget
========================================================================== */
export const com_mendix_widget_native_floatingactionbutton_FloatingActionButton: FloatingActionButtonType = {
    container: {
        // All ViewStyle properties are allowed
        margin: floatingActionButton.container.margin
    },
    button: {
        // Size, ripplecolor and all ViewStyle properties are allowed
        size: floatingActionButton.button.size,
        height: floatingActionButton.button.size,
        width: floatingActionButton.button.size,
        rippleColor: floatingActionButton.button.rippleColor,
        backgroundColor: floatingActionButton.button.backgroundColor,
        borderColor: floatingActionButton.button.borderColor,
        borderRadius: floatingActionButton.button.size / 2,
        borderWidth: 1,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    buttonIcon: {
        // Size and color are allowed
        size: floatingActionButton.buttonIcon.size,
        color: floatingActionButton.buttonIcon.color
    },
    secondaryButton: {
        // Size and all ViewStyle properties are allowed
        size: floatingActionButton.secondaryButton.size,
        backgroundColor: floatingActionButton.secondaryButton.backgroundColor,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    secondaryButtonIcon: {
        // Size and color are allowed
        size: floatingActionButton.secondaryButtonIcon.size,
        color: floatingActionButton.secondaryButtonIcon.color
    },
    secondaryButtonCaption: {
        // All TextStyle properties are allowed
        color: floatingActionButton.secondaryButtonCaption.color,
        fontSize: floatingActionButton.secondaryButtonCaption.fontSize,
        lineHeight: floatingActionButton.secondaryButtonCaption.fontSize,
        fontFamily: font.family
    },
    secondaryButtonCaptionContainer: {
        // All ViewStyle properties are allowed
        backgroundColor: floatingActionButton.secondaryButtonCaptionContainer.backgroundColor,
        marginHorizontal: 5,
        elevation: 2,
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2
        }
    }
};
