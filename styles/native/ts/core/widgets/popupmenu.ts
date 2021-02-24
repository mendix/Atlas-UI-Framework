import { brand, contrast, font, background } from "../../variables";
import { PopupMenuType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Popup Menu

    Default Class For Mendix Popup Menu Widget
========================================================================== */
export const com_mendix_widget_native_popupmenu_PopupMenu: PopupMenuType = {
    container: {
        // All ViewStyle properties are allowed
        backgroundColor: background.gray,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 16
    },
    custom: {
        container: {
            // All ViewStyle properties are allowed
        },
        itemStyle: {
            rippleColor: contrast.lower
        }
    },
    basic: {
        dividerColor: font.colorTitle,
        container: {
            // All ViewStyle properties are allowed
            height: 40
        },
        itemStyle: {
            ellipsizeMode: "tail", // 'head' | 'middle' | 'tail' | 'clip';
            rippleColor: contrast.lower,
            defaultStyle: {
                // All TextStyle properties are allowed
                color: font.colorTitle
            },
            primaryStyle: {
                // All TextStyle properties are allowed
                color: brand.primary
            },
            dangerStyle: {
                // All TextStyle properties are allowed
                color: brand.danger
            },
            customStyle: {
                // All TextStyle properties are allowed
            }
        }
    }
};
