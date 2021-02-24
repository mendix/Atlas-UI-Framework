import { border, brand } from "../../variables";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Maps

//== Design Properties
//## Helper classes to change the look and feel of the widget
========================================================================== */
// Maps Colors
export const mapsSuccess = {
    marker: {
        color: brand.success
    }
};
export const mapsWarning = {
    marker: {
        color: brand.warning
    }
};
export const mapsDanger = {
    marker: {
        color: brand.danger
    }
};
//
// Maps Size
export const mapsSquare = {
    container: {
        aspectRatio: 1 / 1
    }
};
export const mapsMaxSpace = {
    container: {
        flex: 1,
        aspectRatio: undefined
    }
};
//
// == Extra Classes
// ## Helper classes to change the look and feel of the widget
// -------------------------------------------------------------------------------------------------------------------//
// Maps Shape
export const mapsRounded = {
    container: {
        borderRadius: border.radiusSmall,
        overflow: "hidden"
    }
};
