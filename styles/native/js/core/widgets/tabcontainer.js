import { font, spacing, tabContainer } from "../variables";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
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
        pressColor: tabContainer.tabBar.pressColor,
        pressOpacity: 0.8,
        backgroundColor: tabContainer.tabBar.backgroundColor,
        scrollEnabled: false,
        paddingVertical: spacing.smaller,
    },
    indicator: {
        // All ViewStyle properties are allowed
        backgroundColor: tabContainer.indicator.backgroundColor,
        height: tabContainer.indicator.height,
    },
    tab: {
        // All ViewStyle properties are allowed
        paddingVertical: spacing.smaller,
    },
    label: {
        // All TextStyle properties are allowed
        color: tabContainer.label.color,
        fontFamily: font.family,
        fontWeight: tabContainer.label.fontWeight,
        textTransform: tabContainer.label.textTransform,
    },
    activeLabel: {
        // All TextStyle properties are allowed
        color: tabContainer.activeLabel.color,
        fontFamily: font.family,
        fontWeight: tabContainer.activeLabel.fontWeight,
        textTransform: tabContainer.activeLabel.textTransform,
    },
    badgeContainer: {
        // All ViewStyle properties are allowed
        borderRadius: tabContainer.badgeContainer.borderRadius,
        backgroundColor: tabContainer.badgeContainer.backgroundColor,
        paddingVertical: tabContainer.badgeContainer.paddingVertical,
        paddingHorizontal: tabContainer.badgeContainer.paddingHorizontal,
        marginLeft: tabContainer.badgeContainer.marginLeft
    },
    badgeCaption: {
        // All TextStyle properties are allowed
        fontSize: tabContainer.badgeCaption.fontSize,
        color: tabContainer.badgeCaption.color,
        fontFamily: font.family,
        fontWeight: tabContainer.badgeCaption.fontWeight,
        marginTop: -1,
    }
};
