import { NativeModules } from "react-native";
import { darkMode } from "../../../../theme/native/custom-variables";
import { background, font, navigation } from "../variables";
import { LayoutType } from "../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Sidebar / Statusbar / Header

    Default Class For Mendix Sidebar, Statusbar and Header
========================================================================== */

// backgroundColor of the native iOS statusbar can not be changed.
// To fix this we change the barStyle of the statusbar if OS theme is dark and app theme is light (And the other way around).
const isOSDarkMode =
    NativeModules &&
    NativeModules.RNDarkMode &&
    NativeModules.RNDarkMode.initialMode &&
    NativeModules.RNDarkMode.initialMode === "dark";
const statusBarStyle =
    !darkMode && isOSDarkMode
        ? "dark-content"
        : darkMode && !isOSDarkMode
        ? "light-content"
        : navigation.statusBar.barStyle;
//
export const Layout: LayoutType = {
    sidebar: {
        // All ViewStyle properties are allowed
    },
    statusBar: {
        // Only backgroundColor and barStyle are allowed
        backgroundColor: navigation.statusBar.backgroundColor, // Android only
        barStyle: statusBarStyle
    },
    header: {
        container: {
            // All ViewStyle properties are allowed
            backgroundColor: navigation.topBar.backgroundColor,
            elevation: 0,
            shadowOpacity: 0,
            shadowOffset: undefined,
            borderBottomWidth: undefined
        },
        title: {
            // All TextStyle properties are allowed
            color: navigation.topBar.titleColor,
            fontSize: navigation.topBar.titleFontSize,
            fontFamily: font.family,
            fontWeight: font.weightBold
        },
        backButtonText: {
            // All TextStyle properties are allowed
            color: navigation.topBar.backButtonColor,
            fontFamily: font.family
        },
        backButtonIcon: {
            // All ImageStyle properties are allowed
            tintColor: navigation.topBar.backButtonColor
        }
    },
    container: {
        // All ViewStyle properties are allowed
        backgroundColor: background.primary
    }
};
