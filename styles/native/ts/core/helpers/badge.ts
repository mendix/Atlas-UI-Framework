import { badge } from "../../variables";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Badge

//== Design Properties
//## Helper classes to change the look and feel of the widget
========================================================================== */
// Badge Colors
export const badgePrimary = {
    container: {
        backgroundColor: badge.primary.backgroundColor
    },
    caption: {
        color: badge.primary.color
    }
};
export const badgeSuccess = {
    container: {
        backgroundColor: badge.success.backgroundColor
    },
    caption: {
        color: badge.success.color
    }
};
export const badgeWarning = {
    container: {
        backgroundColor: badge.warning.backgroundColor
    },
    caption: {
        color: badge.warning.color
    }
};
export const badgeDanger = {
    container: {
        backgroundColor: badge.danger.backgroundColor
    },
    caption: {
        color: badge.danger.color
    }
};
