import { background, border, brand, contrast, font } from "../../variables";
import { BottomSheetType } from "../../types/widgets";

//
// DISCLAIMER:
// Do not change this file because it is core styling.
// Customizing core files will make updating Atlas much more difficult in the future.
// To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.
//

/* ==========================================================================
    Bottom Sheet

    Default Class For Mendix Bottom Sheet Widget
========================================================================== */
export const com_mendix_widget_native_bottomsheet_BottomSheet: BottomSheetType = {
    container: {
        // All ViewStyle properties are allowed
        backgroundColor: background.primary,
        borderRadius: border.radiusLarge,
        elevation: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {
            width: 0,
            height: -4
        }
    },
    containerWhenExpandedFullscreen: {
        // All ViewStyle properties are allowed
        height: "100%",
        alignSelf: "stretch",
        backgroundColor: background.primary
    },
    modal: {
        // All ViewStyle properties are allowed
        margin: 0,
        justifyContent: "flex-end"
    },
    modalItems: {
        container: {
            // rippleColor & All TextStyle properties are allowed
            height: 50,
            marginTop: 0,
            rippleColor: contrast.lower,
            backgroundColor: background.primary
        },
        defaultStyle: {
            // All TextStyle properties are allowed
            fontSize: 16,
            color: font.colorTitle
        },
        primaryStyle: {
            // All TextStyle properties are allowed
            fontSize: 16,
            color: brand.primary
        },
        dangerStyle: {
            // All TextStyle properties are allowed
            fontSize: 16,
            color: brand.danger
        },
        customStyle: {
            // All TextStyle properties are allowed
            fontSize: 16,
            color: font.colorTitle
        }
    }
};
