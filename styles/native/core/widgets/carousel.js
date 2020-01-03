import { shadeBlendConvert }           from "../helpers/_functions/shadeblendconvert.js";
import { background, brand, contrast } from "../variables.js";

//
// DISCLAIMER:
// Do not change this file because it is core styling.
// Customizing core files will make updating Atlas much more difficult in the future.
// To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.
//

/* ==========================================================================
    Button

    Default Class For Mendix Carousel Widget
========================================================================== */


// Card
export const com_mendix_widget_native_nativecarousel_NativeCarousel = {
    container: {
        // All ViewStyle properties are allowed
    },
    carousel: {
        // All ViewStyle properties are allowed, with the exception that width and height should be a number
    },
    inactiveSlideItem: {
        // Only opacity and scale are allowed
    },
    slideItem: {
        // All ViewStyle properties are allowed
        paddingBottom: 20,
        elevation: 1.5,
        shadowColor: shadeBlendConvert(-0.5, background.primary),
        shadowOpacity: 0.7,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    paginationContainer: {
        // All ViewStyle properties are allowed
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingVertical: undefined,
    },
    paginationText: {
        // All TextStyle properties are allowed
    },
    dotStyle: {
        // Only opacity, scale and color are allowed
        color: contrast.high,
        marginHorizontal: 0,
        scale: 1,
    },
    activeDotStyle: {
        // Opacity, scale, color and all ViewStyle properties are allowed
        color: brand.primary,
        marginHorizontal: 0,
    },
};

// Full width
// export const com_mendix_widget_native_nativecarousel_NativeCarousel = {
//     container: {
//         // All ViewStyle properties are allowed
//     },
//     carousel: {
//         // All ViewStyle properties are allowed, with the exception that width and height should be a number
//     },
//     inactiveSlideItem: {
//         // Only opacity and scale are allowed
//     },
//     slideItem: {
//         // All ViewStyle properties are allowed
//     },
//     paginationContainer: {
//         // All ViewStyle properties are allowed
//         position: "absolute",
//         bottom: 0,
//         width: "100%",
//         padding: 20,
//         paddingHorizontal: undefined,
//         paddingVertical: undefined,
//     },
//     paginationText: {
//         // All TextStyle properties are allowed
//     },
//     dotStyle: {
//         // Only opacity, scale and color are allowed
//         color: contrast.high,
//         marginHorizontal: 0,
//         scale: 1,
//     },
//     activeDotStyle: {
//         // Opacity, scale, color and all ViewStyle properties are allowed
//         color: "#FFF",
//         marginHorizontal: 0,
//     },
// };