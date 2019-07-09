import { background, border } from "../variables";

/* ==========================================================================
    List View

    Default Class For Mendix List View Widget
========================================================================== */

export const ListView = {
    container: {
        // numColumns and all ViewStyle properties are allowed
    },
    listItem: {
        // All ViewStyle properties are allowed
    },
};

//== Design Properties
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// List item dividers

export const listItemBorderBottom = {
    listItem: {
        borderColor: border.color,
        backgroundColor: background.primary,
        borderBottomWidth: border.width,
    },
};
export const listItemBorderRight = {
    listItem: {
        borderColor: border.color,
        backgroundColor: background.primary,
        borderRightWidth: border.width,
    },
};
