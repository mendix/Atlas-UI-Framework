import { contrast } from "../variables";

/* ==========================================================================
    Image

    Default Class For Mendix Image Widgets
========================================================================== */

export const Image = {
    container: {
        // All ViewStyle properties are allowed
    },
    image: {
        // All ImageStyle properties are allowed
        resizeMode: "contain",
    },
};

export const NativeDynamicImage = {
    container: {
        // All ViewStyle properties are allowed
    },
    image: {
        // All ImageStyle properties are allowed
        resizeMode: "contain",
    },
};

//== Design Properties
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// Image Sizes
export const avatarSmall = {
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
};
export const avatarLarge = {
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
};

//== Extra Classes
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// Make the image look like a header
export const imageHeader = {
    container: {
        // width: '100%',
        elevation: 2,
        shadowColor: contrast.lowest,
        shadowOpacity: 0.9,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        zIndex: 10,
    },
    image: {
        width: "100%",
        height: 250,
        resizeMode: "cover",
    },
};
