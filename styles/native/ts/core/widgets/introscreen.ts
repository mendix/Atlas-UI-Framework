import { isIphoneWithNotch } from "../helpers/_functions/device";
import { font, spacing, introScreen } from "../../variables";
import { IntroScreenButtonType, IntroScreenType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Intro Screen

    Default Class For Mendix Intro Screen Widget
========================================================================== */
// Button styles when the chose to show the indicator above the buttons
export const introScreenButtonPaginationAbove: IntroScreenButtonType = {
    container: {
        // Ripplecolor and all ViewStyle properties are allowed
        flex: 1,
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: introScreen.buttonPaginationAbove.container.paddingVertical,
        backgroundColor: introScreen.buttonPaginationAbove.container.backgroundColor
    },
    icon: {
        // Size and color are allowed
        color: introScreen.button.icon.color,
        size: introScreen.button.icon.size
    },
    caption: {
        // All TextStyle properties are allowed
        color: introScreen.button.caption.color,
        fontSize: introScreen.button.caption.fontSize,
        fontFamily: font.family,
        fontWeight: introScreen.button.caption.fontWeight,
        textTransform: introScreen.button.caption.textTransform,
        paddingHorizontal: introScreen.button.caption.paddingHorizontal
    }
};
// Button styles when the chose to show the indicator between the buttons
export const introScreenButtonPaginationBetween: IntroScreenButtonType = {
    container: {
        // Ripplecolor and all ViewStyle properties are allowed
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        // Size and color are allowed
        color: introScreen.button.icon.color,
        size: introScreen.button.icon.size
    },
    caption: {
        // All TextStyle properties are allowed
        color: introScreen.button.caption.color,
        fontSize: introScreen.button.caption.fontSize,
        fontFamily: font.family,
        fontWeight: introScreen.button.caption.fontWeight,
        textTransform: introScreen.button.caption.textTransform,
        paddingHorizontal: introScreen.button.caption.paddingHorizontal
    }
};
// Default styles
export const com_mendix_widget_native_introscreen_IntroScreen: IntroScreenType = {
    fullscreenContainer: {
        // All ViewStyle properties are allowed
        backgroundColor: introScreen.fullscreenContainer.backgroundColor
    },
    popupContainer: {
        // All ViewStyle properties are allowed
        paddingVertical: introScreen.popupContainer.paddingVertical,
        paddingHorizontal: introScreen.popupContainer.paddingHorizontal,
        backgroundColor: introScreen.popupContainer.backgroundColor
    },

    // Pagination styles
    paginationContainer: {
        // All ViewStyle properties are allowed
        position: "absolute",
        left: 0,
        right: 0,
        width: "100%",
        marginTop: spacing.largest,
        bottom: isIphoneWithNotch ? 22 : 0,
        justifyContent: "space-between",
        alignItems: "center"
    },
    paginationText: {
        // All TextStyle properties are allowed
        color: introScreen.pagination.text.color,
        fontSize: introScreen.pagination.text.fontSize,
        fontFamily: font.family
    },
    dotStyle: {
        // All ViewStyle properties are allowed
        width: introScreen.pagination.dotStyle.size,
        height: introScreen.pagination.dotStyle.size,
        backgroundColor: introScreen.pagination.dotStyle.backgroundColor
    },
    activeDotStyle: {
        // All ViewStyle properties are allowed
        width: introScreen.pagination.activeDotStyle.size,
        height: introScreen.pagination.activeDotStyle.size,
        backgroundColor: introScreen.pagination.activeDotStyle.backgroundColor
    },

    // Button styles
    paginationAbove: {
        buttonsContainer: {
            // All ViewStyle properties are allowed
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            width: "100%"
        },
        buttonSkip: introScreenButtonPaginationAbove,
        buttonPrevious: introScreenButtonPaginationAbove,
        buttonNext: introScreenButtonPaginationAbove,
        buttonDone: introScreenButtonPaginationAbove
    },
    paginationBetween: {
        buttonSkip: introScreenButtonPaginationBetween,
        buttonPrevious: introScreenButtonPaginationBetween,
        buttonNext: introScreenButtonPaginationBetween,
        buttonDone: introScreenButtonPaginationBetween
    }
};
