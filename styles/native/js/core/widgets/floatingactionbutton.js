import { background, brand, contrast, font } from "../variables";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Floating Action Button

    Default Class For Mendix Floating Action Button Widget
========================================================================== */
export const com_mendix_widget_native_floatingactionbutton_FloatingActionButton = {
    container: {
        // All ViewStyle properties are allowed
        margin: 30,
    },
    button: {
        // Size, ripplecolor and all ViewStyle properties are allowed
        size: 50,
        height: 50,
        width: 50,
        rippleColor: contrast.lowest,
        backgroundColor: brand.primary,
        borderRadius: 25,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    buttonIcon: {
        // Size and color are allowed
        size: font.sizeLarge,
        color: contrast.lowest,
    },
    secondaryButton: {
        // Size and all ViewStyle properties are allowed
        size: 30,
        backgroundColor: background.secondary,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    secondaryButtonIcon: {
        // Size and color are allowed
        size: font.sizeSmall,
        color: contrast.high,
    },
    secondaryButtonCaption: {
        // All TextStyle properties are allowed
        color: font.color,
        fontSize: font.size,
        lineHeight: font.size,
        fontFamily: font.family,
    },
    secondaryButtonCaptionContainer: {
        // All ViewStyle properties are allowed
        marginHorizontal: 5,
        elevation: 2,
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
};
