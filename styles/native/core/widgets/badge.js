import { button, contrast } from '../variables';

/* ==========================================================================
    Badge

    Default Class For Mendix Badge Widget
========================================================================== */

export const com_mendix_widget_native_badge_Badge = (Badge = {
    container: {
        // All ViewStyle properties are allowed
        backgroundColor: contrast.lower,
    },
    caption: {
        // All TextStyle properties are allowed
        color: contrast.higher,
    },
});

//== Design Properties
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// Badge Colors

export const badgePrimary = {
    container: {
        backgroundColor: button.primary.backgroundColor,
    },
    caption: {
        color: button.primary.color,
    },
};
export const badgeSuccess = {
    container: {
        backgroundColor: button.success.backgroundColor,
    },
    caption: {
        color: button.success.color,
    },
};
export const badgeWarning = {
    container: {
        backgroundColor: button.warning.backgroundColor,
    },
    caption: {
        color: button.warning.color,
    },
};
export const badgeDanger = {
    container: {
        backgroundColor: button.danger.backgroundColor,
    },
    caption: {
        color: button.danger.color,
    },
};
