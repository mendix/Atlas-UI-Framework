import { contrast, image } from "../../variables";
import { ImageType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Image

    Default Class For Mendix Image Widgets
========================================================================== */
export const Image: ImageType = {
    container: {
        // rippleColor & all ViewStyle properties are allowed
        rippleColor: contrast.lowest,
        maxWidth: "100%",
        maxHeight: "100%"
    },
    containerDisabled: {
        // All ViewStyle properties are allowed
    },
    image: {
        // All ImageStyle properties are allowed
        maxWidth: "100%",
        maxHeight: "100%",
        resizeMode: "cover"
    },
    imageDisabled: {
        // All ImageStyle properties are allowed
        opacity: image.imageDisabled.opacity
    }
};
export const ImageViewer: ImageType = {
    container: {
        // RippleColor & All ViewStyle properties are allowed
        rippleColor: contrast.lowest,
        maxWidth: "100%",
        maxHeight: "100%"
    },
    containerDisabled: {
        // All ViewStyle properties are allowed
    },
    image: {
        // All ImageStyle properties are allowed
        maxWidth: "100%",
        maxHeight: "100%",
        resizeMode: "cover"
    },
    imageDisabled: {
        // All ImageStyle properties are allowed
        opacity: image.imageDisabled.opacity
    }
};
