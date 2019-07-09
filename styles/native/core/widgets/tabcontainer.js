import { background, brand, contrast } from "../variables";
import { Platform } from "react-native";

/* ==========================================================================
    Tab Container

    Default Class For Mendix Tab Container Widget
========================================================================== */

export const TabContainer = {
    container: {
        // All ViewStyle properties are allowed
        flex: 1,
    },
    tabBar: {
        // bounces, pressColor, pressOpacity, scrollEnabled and all ViewStyle properties are allowed
        bounces: true,
        pressColor: contrast.lower,
        pressOpacity: 0.8,
        backgroundColor: background.primary,
        scrollEnabled: false,
    },
    indicator: {
        // All ViewStyle properties are allowed
        backgroundColor: brand.primary,
        height: Platform.select({ ios: 2, android: 2 }),
    },
    tab: {
        // All ViewStyle properties are allowed
    },
    label: {
        // All TextStyle properties are allowed
        color: contrast.highest,
    },
};

//== Design Properties
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// Enable scroll for the tab bar
export const tabContainerScroll = {
    tabBar: {
        scrollEnabled: true,
    },
};

//== Extra Classes
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// Tab container as content of page
export const tabContainerMinimal = {
    container: {
        backgroundColor: "transparent",
    },
    tabBar: {
        backgroundColor: "transparent",
        elevation: 0,
    },
};
