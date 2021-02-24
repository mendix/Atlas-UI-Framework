import { brand, progressBar } from "../../variables";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Progress Bar

//== Design Properties
//## Helper classes to change the look and feel of the widget
========================================================================== */
// Progress Bar Color
export const progressBarSuccess = {
    fill: {
        backgroundColor: brand.success
    }
};
export const progressBarWarning = {
    fill: {
        backgroundColor: brand.warning
    }
};
export const progressBarDanger = {
    fill: {
        backgroundColor: brand.danger
    }
};
//
// Progress Bar Size
export const progressBarSmall = {
    bar: {
        height: progressBar.bar.heightSmall,
        borderRadius: progressBar.bar.heightSmall / 2
    }
};
export const progressBarLarge = {
    bar: {
        height: progressBar.bar.heightLarge,
        borderRadius: progressBar.bar.heightLarge / 2
    }
};
