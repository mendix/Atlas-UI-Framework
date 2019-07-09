import { background, brand, contrast } from "../variables";
import { Platform } from "react-native";

/* ==========================================================================
    Segmented Controls

    Default Class For Mendix Segmented Controls Widget
========================================================================== */

export const com_mendix_widget_native_togglebuttons_ToggleButtons = (ToggleButtons = {
    container: {
        // All ViewStyle properties are allowed
        alignSelf: 'stretch',
    },
    containerDisabled: {
        opacity: 0.6,
        alignSelf: 'stretch',
    },
    button: {
        // All ViewStyle properties are allowed
        backgroundColor: background.primary,
        borderColor: Platform.select({ ios: brand.primary, android: contrast.lower }),
    },
    text: {
        // All TextStyle properties are allowed
        color: Platform.select({ ios: brand.primary, android: contrast.high }),
    },
    activeButton: {
        // All ViewStyle properties are allowed
        ...Platform.select({
            ios: {
                backgroundColor: brand.primary,
                borderColor: brand.primary,
            },
            android: {
                backgroundColor: brand.primary,
                borderColor: brand.primary,
            },
        }),
    },
    activeButtonText: {
        // All TextStyle properties are allowed
    },
});
