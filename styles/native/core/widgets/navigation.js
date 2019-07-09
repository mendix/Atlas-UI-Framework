import { background, brand, contrast, font } from "../variables";
import { Platform } from "react-native";

/* ==========================================================================
    TopBar / BottomBar

    Default Class For Mendix TopBar / BottomBar
========================================================================== */

export const navigationStyle = {
    topBar: {
        backgroundColor: background.primary,
        backButtonColor: contrast.highest,
        backButtonFontSize: font.size,
        titleColor: contrast.highest,
        titleFontSize: font.sizeH4,
        fontWeight: Platform.select({ ios: font.weightBold, android: font.weightNormal }),
    },
    bottomBar: {
        fontSize: font.sizeSmall,
        backgroundColor: background.primary,
        textColor: contrast.high,
        iconColor: contrast.high,
        selectedIconColor: brand.primary,
        selectedTextColor: brand.primary,
    },
};
