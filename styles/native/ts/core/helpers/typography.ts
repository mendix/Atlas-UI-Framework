import { brand, font } from "../../variables";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Text

//== Design Properties
//## Helper classes to change the look and feel of the widget
========================================================================== */
// Text Colors
export const textTitle = {
    text: {
        color: font.colorTitle
    }
};
export const textParagraph = {
    text: {
        color: font.colorParagraph
    }
};
export const textDisabled = {
    text: {
        color: font.colorDisabled
    }
};
export const textWhite = {
    text: {
        color: "#FFF"
    }
};
export const textPrimary = {
    text: {
        color: brand.primary
    }
};
export const textSuccess = {
    text: {
        color: brand.success
    }
};
export const textWarning = {
    text: {
        color: brand.warning
    }
};
export const textDanger = {
    text: {
        color: brand.danger
    }
};
//
// Text Alignment
export const textLeft = {
    text: {
        textAlign: "left"
    }
};
export const textCenter = {
    text: {
        textAlign: "center"
    }
};
export const textRight = {
    text: {
        textAlign: "right"
    }
};
//
// Text Weights
export const textLight = {
    text: {
        fontWeight: font.weightLight
    }
};
export const textNormal = {
    text: {
        fontWeight: font.weightNormal
    }
};
export const textSemiBold = {
    text: {
        fontWeight: font.weightSemiBold
    }
};
export const textBold = {
    text: {
        fontWeight: font.weightBold
    }
};
//
// Text Sizes
export const textSmall = {
    text: {
        fontSize: font.sizeSmall,
        lineHeight: font.lineHeightSmall
    }
};
export const textLarge = {
    text: {
        fontSize: font.sizeLarge,
        lineHeight: font.lineHeightLarge
    }
};
//
// == Extra Classes
// ## Helper classes to change the look and feel of the widget
// -------------------------------------------------------------------------------------------------------------------//
//
// Text Transformations
export const textLowercase = {
    text: {
        textTransform: "lowercase"
    }
};
export const textUppercase = {
    text: {
        textTransform: "uppercase"
    }
};
export const textCapitalize = {
    text: {
        textTransform: "capitalize"
    }
};
export const textUnderline = {
    text: {
        textDecorationLine: "underline"
    }
};
export const textLineThrough = {
    text: {
        textDecorationLine: "line-through"
    }
};
