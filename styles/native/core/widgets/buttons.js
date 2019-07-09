import { brand, button, contrast, font, spacing } from "../variables";
import { Platform } from "react-native";
import merge from "../_helperfunctions/mergeobjects";

/* ==========================================================================
    Button

    Default Class For Mendix Button Widget
========================================================================== */

export const ActionButton = {
    container: {
        // Ripplecolor and all ViewStyle properties are allowed
        borderWidth: 1,
        borderStyle: "solid",
        // rippleColor: ,
        borderColor: button.primary.borderColor,
        backgroundColor: button.primary.backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: button.borderRadius,
        ...Platform.select({
            ios: {
                paddingVertical: spacing.smaller,
                paddingHorizontal: spacing.regular,
            },
            android: {
                paddingVertical: spacing.smaller,
                paddingHorizontal: spacing.small,
            },
        }),
    },
    icon: {
        // Size, Color and all ViewStyle properties are allowed
        color: button.primary.color,
        fontSize: font.sizeSmall,
    },
    caption: {
        // All TextStyle properties are allowed
        color: button.primary.color,
        fontSize: font.sizeSmall,
    },
};

export const ActionButtonHeader = {
    container: {
        borderColor: button.header.borderColor,
        backgroundColor: button.header.backgroundColor,
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    icon: {
        size: font.size,
        color: button.header.color,
    },
    caption: {
        color: button.header.color,
    },
};

//== Design Properties
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// Button Colors

export const btnSecondary = {
    container: {
        borderColor: button.secondary.borderColor,
        backgroundColor: button.secondary.backgroundColor,
    },
    icon: {
        color: button.secondary.color,
    },
    caption: {
        color: button.secondary.color,
    },
};
export const btnSuccess = {
    container: {
        borderColor: button.success.borderColor,
        backgroundColor: button.success.backgroundColor,
    },
    icon: {
        color: button.success.color,
    },
    caption: {
        color: button.success.color,
    },
};
export const btnWarning = {
    container: {
        borderColor: button.warning.borderColor,
        backgroundColor: button.warning.backgroundColor,
    },
    icon: {
        color: button.warning.color,
    },
    caption: {
        color: button.warning.color,
    },
};
export const btnDanger = {
    container: {
        borderColor: button.danger.borderColor,
        backgroundColor: button.danger.backgroundColor,
    },
    icon: {
        color: button.danger.color,
    },
    caption: {
        color: button.danger.color,
    },
};

// Button sizes
export const btnSmall = {
    icon: {
        size: font.sizeSmall,
    },
    caption: {
        fontSize: font.sizeSmall,
    },
};
export const btnLarge = {
    icon: {
        size: font.sizeLarge,
    },
    caption: {
        fontSize: font.sizeLarge,
    },
};

//== Extra Classes
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// Button Icon Only

export const btnIconPrimary = {
    container: {
        borderWidth: 0,
        backgroundColor: "transparent",
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    icon: {
        color: button.primary.backgroundColor,
    },
    caption: {
        fontSize: 0,
    },
};
export const btnIconSecondary = merge(btnIconPrimary, {
    icon: {
        color: contrast.low,
    },
});
export const btnIconSuccess = merge(btnIconPrimary, {
    icon: {
        color: button.success.backgroundColor,
    },
});
export const btnIconWarning = merge(btnIconPrimary, {
    icon: {
        color: button.warning.backgroundColor,
    },
});
export const btnIconDanger = merge(btnIconPrimary, {
    icon: {
        color: button.danger.backgroundColor,
    },
});

export const btnAsText = {
    container: {
        maxHeight: 22,
        borderWidth: 0,
        borderRadius: 0,
        rippleColor: "rgba(0,0,0,0.05)",
        backgroundColor: "transparent",
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    icon: {
        color: brand.primary,
        fontWeight: font.weightSemiBold,
        fontSize: font.sizeSmall,
    },
    caption: {
        color: brand.primary,
        fontWeight: font.weightSemiBold,
        fontSize: font.sizeSmall,
    },
};
