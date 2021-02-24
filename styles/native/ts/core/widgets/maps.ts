import { brand } from "../../variables";
import { MapsType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Maps

    Default Class For Mendix Maps Widget
========================================================================== */
export const com_mendix_widget_native_maps_Maps: MapsType = {
    container: {
        // All ViewStyle properties are allowed
        flex: 1,
        maxWidth: "100%",
        aspectRatio: 4 / 2
    },
    loadingOverlay: {
        // All ViewStyle properties are allowed
    },
    loadingIndicator: {
        // Only color is allowed
        color: brand.primary
    },
    marker: {
        // Only color & opacity are allowed
        color: brand.primary,
        opacity: 1
    }
};
