import { background, brand, contrast, font } from '../variables';

/* ==========================================================================
    Floating Action Button

    Default Class For Mendix Floating Action Button Widget
========================================================================== */

export const com_mendix_widget_native_floatingactionbutton_FloatingActionButton = (FloatingActionButton = {
    container: {
        margin: 30,
    },
    button: {
        size: 50,
        // rippleColor: ,
        backgroundColor: brand.primary,
        shadowColor: contrast.low,
        shadowOpacity: 0.9,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 2,
    },
    buttonIcon: {
        size: font.sizeLarge,
        color: contrast.lowest,
    },
    secondaryButton: {
        size: 30,
        backgroundColor: background.secondary,
        shadowColor: contrast.lower,
        shadowOpacity: 0.9,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 2,
    },
    secondaryButtonIcon: {
        size: font.sizeSmall,
        color: contrast.high,
    },
    secondaryButtonCaption: {},
    secondaryButtonCaptionContainer: {
        overflow: 'hidden',
        marginHorizontal: 15,
    },
});

export const floatingActionButtonSuccess = {
    button: {
        backgroundColor: brand.success,
    },
};

export const floatingActionButtonWarning = {
    button: {
        backgroundColor: brand.warning,
    },
};

export const floatingActionButtonDanger = {
    button: {
        backgroundColor: brand.danger,
    },
};
