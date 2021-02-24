import { brand, button, contrast, font } from "../../variables";
import merge from "./_functions/mergeobjects";
import { ActionButtonType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Button

//== Design Properties
//## Helper classes to change the look and feel of the widget
========================================================================== */
// Button Colors
export const btnSecondary: ActionButtonType = {
    container: {
        borderColor: button.secondary.borderColor,
        backgroundColor: button.secondary.backgroundColor
    },
    icon: {
        color: button.secondary.color
    },
    caption: {
        color: button.secondary.color
    }
};
export const btnSuccess: ActionButtonType = {
    container: {
        borderColor: button.success.borderColor,
        backgroundColor: button.success.backgroundColor
    },
    icon: {
        color: button.success.color
    },
    caption: {
        color: button.success.color
    }
};
export const btnWarning: ActionButtonType = {
    container: {
        borderColor: button.warning.borderColor,
        backgroundColor: button.warning.backgroundColor
    },
    icon: {
        color: button.warning.color
    },
    caption: {
        color: button.warning.color
    }
};
export const btnDanger: ActionButtonType = {
    container: {
        borderColor: button.danger.borderColor,
        backgroundColor: button.danger.backgroundColor
    },
    icon: {
        color: button.danger.color
    },
    caption: {
        color: button.danger.color
    }
};
export const btnPrimaryInversed: ActionButtonType = {
    container: {
        borderColor: button.primary.color,
        backgroundColor: button.primary.color
    },
    icon: {
        color: button.primary.backgroundColor
    },
    caption: {
        color: button.primary.backgroundColor
    }
};
//
// == Extra Classes
// ## Helper classes to change the look and feel of the widget
// -------------------------------------------------------------------------------------------------------------------//
//
// Button Icon Only
export const btnIcon: ActionButtonType = {
    container: {
        borderWidth: 0,
        backgroundColor: "transparent",
        width: font.sizeLarge,
        height: font.sizeLarge,
        minWidth: undefined,
        minHeight: undefined,
        paddingVertical: 0,
        paddingHorizontal: 0
    },
    icon: {
        color: font.colorTitle
    },
    caption: {
        fontSize: 0
    }
};
export const btnIconPrimary: ActionButtonType = merge(btnIcon, {
    icon: {
        color: button.primary.backgroundColor
    }
});
export const btnIconSecondary: ActionButtonType = merge(btnIcon, {
    icon: {
        color: contrast.low
    }
});
export const btnIconSuccess: ActionButtonType = merge(btnIcon, {
    icon: {
        color: button.success.backgroundColor
    }
});
export const btnIconWarning: ActionButtonType = merge(btnIcon, {
    icon: {
        color: button.warning.backgroundColor
    }
});
export const btnIconDanger: ActionButtonType = merge(btnIcon, {
    icon: {
        color: button.danger.backgroundColor
    }
});
export const btnIconWhite: ActionButtonType = merge(btnIcon, {
    icon: {
        color: "#FFF"
    }
});
//
export const btnIconGrayRounded: ActionButtonType = {
    container: {
        height: 80,
        width: 80,
        padding: 10,
        borderRadius: 20,
        borderWidth: 0,
        backgroundColor: contrast.lowest
    },
    icon: {
        size: 30,
        color: contrast.high
    },
    caption: {
        fontSize: 0
    }
};
//
// Round Button Icon With Background
export const btnIconPrimaryBackground: ActionButtonType = {
    container: {
        width: 40,
        height: 40,
        borderRadius: 20,
        paddingVertical: 0,
        paddingHorizontal: 0
    },
    icon: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        size: font.sizeLarge,
        color: button.primary.color
    }
};
//
//
// Text only
export const btnAsText: ActionButtonType = {
    container: {
        maxHeight: 22,
        borderWidth: 0,
        borderRadius: 0,
        rippleColor: contrast.lowest,
        backgroundColor: "transparent"
        // paddingVertical: 0,
        // paddingHorizontal: 0,
    },
    icon: {
        size: button.icon.size
    },
    caption: {
        fontWeight: font.weightSemiBold,
        fontSize: button.caption.fontSize
    }
};
export const btnAsTextPrimary: ActionButtonType = merge(btnAsText, {
    icon: {
        color: brand.primary
    },
    caption: {
        color: brand.primary
    }
});
export const btnAsTextSecondary: ActionButtonType = merge(btnAsText, {
    icon: {
        color: font.colorTitle
    },
    caption: {
        color: font.colorTitle
    }
});
//
// Button sizes
export const btnLarge: ActionButtonType = {
    icon: {
        size: font.size
    },
    caption: {
        fontSize: font.size
    }
};
