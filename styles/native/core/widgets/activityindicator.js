import { brand } from "../variables";

/* ==========================================================================
    Activity Indicator

    Default Class For Mendix Activity Indicator Widget
========================================================================== */

export const com_mendix_widget_native_activityindicator_ActivityIndicator = (ActivityIndicator = {
    container: {
        // All ViewStyle properties are allowed
    },
    indicator: {
        // Just this property
        color: brand.primary,
    },
});

//== Design Properties
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// Activity indicator Colors

export const activityIndicatorSuccess = {
    indicator: {
        color: brand.success,
    },
};

export const activityIndicatorWarning = {
    indicator: {
        color: brand.warning,
    },
};

export const activityIndicatorDanger = {
    indicator: {
        color: brand.danger,
    },
};
