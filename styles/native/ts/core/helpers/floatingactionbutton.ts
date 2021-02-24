import { background, brand } from "../../variables";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Floating Action Button

//== Design Properties
//## Helper classes to change the look and feel of the widget
========================================================================== */
// Floating Action Button Colors
export const floatingActionButtonSecondary = {
    button: {
        backgroundColor: background.primary
    },
    buttonIcon: {
        color: brand.primary
    }
};
export const floatingActionButtonSuccess = {
    button: {
        backgroundColor: brand.success,
        borderColor: brand.success
    }
};

export const floatingActionButtonWarning = {
    button: {
        backgroundColor: brand.warning,
        borderColor: brand.warning
    }
};

export const floatingActionButtonDanger = {
    button: {
        backgroundColor: brand.danger,
        borderColor: brand.danger
    }
};
