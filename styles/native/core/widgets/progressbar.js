import { Platform } from "react-native";
import { anyColorToRgbString } from "../_helperfunctions/convertcolors";
import { brand } from "../variables";

/* ==========================================================================
    Progress Bar

    Default Class For Mendix Progress Bar Widget
========================================================================== */

export const com_mendix_widget_native_progressbar_ProgressBar = (ProgressBar = {
    container: {
        // All ViewStyle properties are allowed
        alignSelf: "stretch",
    },
    bar: {
        // All ViewStyle properties are allowed
        ...Platform.select({
            ios: {
                borderColor: brand.primary,
            },
            android: {
                borderRadius: 0,
                borderWidth: 0,
                backgroundColor: `rgba(${anyColorToRgbString(brand.primary)},0.2)`,
            },
        }),
    },
    fill: {
        //Only the backgroundColor property is allowed
        backgroundColor: brand.primary,
    },
});

//== Design Properties
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// Progress Bar Color

export const progressBarSuccess = {
    bar: {
        borderColor: Platform.select({ ios: brand.success }),
        backgroundColor: Platform.select({ android: `rgba(${anyColorToRgbString(brand.success)},0.2)` }),
    },
    fill: {
        backgroundColor: brand.success,
    },
};

export const progressBarWarning = {
    bar: {
        borderColor: Platform.select({ ios: brand.warning }),
        backgroundColor: Platform.select({ android: `rgba(${anyColorToRgbString(brand.warning)},0.2)` }),
    },
    fill: {
        backgroundColor: brand.warning,
    },
};

export const progressBarDanger = {
    bar: {
        borderColor: Platform.select({ ios: brand.danger }),
        backgroundColor: Platform.select({ android: `rgba(${anyColorToRgbString(brand.danger)},0.2)` }),
    },
    fill: {
        backgroundColor: brand.danger,
    },
};

// Progress Bar Size
export const progressBarSmall = {
    bar: {
        height: 3,
        borderRadius: Platform.select({ ios: 2 }),
    },
};
export const progressBarLarge = {
    bar: {
        height: 10,
        borderRadius: Platform.select({ ios: 8 }),
    },
};
