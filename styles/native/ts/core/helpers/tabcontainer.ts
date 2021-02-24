/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Tab Container

//== Design Properties
//## Helper classes to change the look and feel of the widget
========================================================================== */
// Enable scroll for the tab bar
export const tabContainerScroll = {
    tabBar: {
        scrollEnabled: true
    }
};
//
// == Extra Classes
// ## Helper classes to change the look and feel of the widget
// -------------------------------------------------------------------------------------------------------------------//
// Tab container as content of page
export const tabContainerMinimal = {
    container: {
        backgroundColor: "transparent"
    },
    tabBar: {
        backgroundColor: "transparent",
        elevation: 0
    }
};
