import { border, brand, contrast, image } from "../../variables";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Image

//== Design Properties
//## Helper classes to change the look and feel of the widget
========================================================================== */
//
//
// == Extra Classes
// ## Helper classes to change the look and feel of the widget
// -------------------------------------------------------------------------------------------------------------------//
// Image Overlay
export const imageOverlay = {
    container: {
        zIndex: 10,
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.4)"
    }
};
//
// Image Shapes
export const imageSquare = {
    image: {
        width: "100%",
        height: "auto",
        aspectRatio: 1,
        borderRadius: border.radiusSmall
    }
};
export const imageCircle = {
    image: {
        width: "100%",
        height: "auto",
        aspectRatio: 1,
        borderRadius: 50000
    }
};
// Image Sizes
export const imageIcon = {
    image: {
        width: image.icon,
        height: image.icon
    }
};
export const imageSmall = {
    image: {
        width: image.image.small,
        height: image.image.small
    }
};
export const imageMedium = {
    image: {
        width: image.image.medium,
        height: image.image.medium
    }
};
export const imageLarge = {
    image: {
        width: image.image.large,
        height: image.image.large
    }
};
export const imageLarger = {
    image: {
        width: image.image.larger,
        height: image.image.larger
    }
};
export const imageFullSize = {
    image: {
        width: "100%",
        height: "auto"
    }
};
//
// Image / SVG Styles
export const imageIconPrimary = {
    image: {
        fill: brand.primary,
        color: brand.primary
    }
};
export const imageIconSecondary = {
    image: {
        fill: contrast.low,
        color: contrast.low
    }
};
export const imageIconSuccess = {
    image: {
        fill: brand.success,
        color: brand.success
    }
};
export const imageIconWarning = {
    image: {
        fill: brand.warning,
        color: brand.warning
    }
};
export const imageIconDanger = {
    image: {
        fill: brand.danger,
        color: brand.danger
    }
};
export const imageIconInfo = {
    image: {
        fill: brand.info,
        color: brand.info
    }
};
