import { brand } from "../../variables";
import { ActivityIndicatorType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Activity Indicator

    Default Class For Mendix Activity Indicator Widget
========================================================================== */
export const com_mendix_widget_native_activityindicator_ActivityIndicator: ActivityIndicatorType = {
    container: {
        // All ViewStyle properties are allowed
    },
    indicator: {
        // Color and size are allowed
        color: brand.primary,
        size: "large"
    }
};
