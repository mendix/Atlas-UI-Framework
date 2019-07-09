import { brand, contrast, font, spacing } from "../variables";
import { Platform } from "react-native";

/* ==========================================================================
    Text

    Default Class For Mendix Text Widget
========================================================================== */

export const Text = {
    container: {
        // All ViewStyle properties are allowed
    },
    text: {
        // All TextStyle properties are allowed
        color: font.color,
        fontSize: font.size,
        lineHeight: font.size,
    },
};

export const TextHeading1 = {
    text: {
        fontWeight: Platform.select({ ios: font.weightSemiBold, android: font.weightNormal }),
        fontSize: font.sizeH1,
        lineHeight: font.sizeH1,
        marginBottom: spacing.small,
    },
};
export const TextHeading2 = {
    text: {
        fontWeight: Platform.select({ ios: font.weightSemiBold, android: font.weightNormal }),
        fontSize: font.sizeH2,
        lineHeight: font.sizeH2,
        marginBottom: spacing.small,
    },
};
export const TextHeading3 = {
    text: {
        fontWeight: Platform.select({ ios: font.weightSemiBold, android: font.weightNormal }),
        fontSize: font.sizeH3,
        lineHeight: font.sizeH3,
        marginBottom: spacing.small,
    },
};
export const TextHeading4 = {
    text: {
        fontWeight: Platform.select({ ios: font.weightSemiBold, android: font.weightNormal }),
        fontSize: font.sizeH4,
        lineHeight: font.sizeH4,
        marginBottom: spacing.smaller,
    },
};
export const TextHeading5 = {
    text: {
        fontWeight: Platform.select({ ios: font.weightSemiBold, android: font.weightNormal }),
        fontSize: font.sizeH5,
        lineHeight: font.sizeH5,
        marginBottom: spacing.smallest,
    },
};
export const TextHeading6 = {
    text: {
        fontWeight: Platform.select({ ios: font.weightSemiBold, android: font.weightNormal }),
        fontSize: font.sizeH6,
        lineHeight: font.sizeH6,
        marginBottom: spacing.smallest,
    },
};

//== Design Properties
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// Text Colors

export const textPrimary = {
    text: {
        color: brand.primary,
    },
};
export const textSuccess = {
    text: {
        color: brand.success,
    },
};
export const textWarning = {
    text: {
        color: brand.warning,
    },
};
export const textDanger = {
    text: {
        color: brand.danger,
    },
};
export const textWhite = {
    text: {
        color: "#FFF",
    },
};

export const textContrastLowest = {
    text: {
        color: contrast.lowest,
    },
};
export const textContrastLower = {
    text: {
        color: contrast.lower,
    },
};
export const textContrastLow = {
    text: {
        color: contrast.low,
    },
};
export const textContrastDefault = {
    text: {
        color: contrast.regular,
    },
};
export const textContrastHigh = {
    text: {
        color: contrast.high,
    },
};
export const textContrastHigher = {
    text: {
        color: contrast.higher,
    },
};
export const textContrastHighest = {
    text: {
        color: contrast.highest,
    },
};

// Text Alignment
export const textLeft = {
    text: {
        textAlign: "left",
    },
};
export const textCenter = {
    text: {
        textAlign: "center",
    },
};
export const textRight = {
    text: {
        textAlign: "right",
    },
};

// Text Weights
export const textLight = {
    text: {
        fontWeight: font.weightLight,
    },
};
export const textNormal = {
    text: {
        fontWeight: font.weightNormal,
    },
};
export const textSemiBold = {
    text: {
        fontWeight: font.weightSemiBold,
    },
};
export const textBold = {
    text: {
        fontWeight: font.weightBold,
    },
};

//== Extra Classes
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// Text Sizes
export const textSmall = {
    text: {
        fontSize: font.sizeSmall,
        lineHeight: font.sizeSmall,
    },
};
export const textLarge = {
    text: {
        fontSize: font.sizeLarge,
        lineHeight: font.sizeLarge,
    },
};

// Text Transformations
export const textLowercase = {
    text: {
        textTransform: "lowercase",
    },
};
export const textUppercase = {
    text: {
        textTransform: "uppercase",
    },
};
export const textCapitalize = {
    text: {
        textTransform: "capitalize",
    },
};
