import { Platform } from "react-native";
import { background, border } from "../../variables";
import { Helperclass } from "../../types/helperclass";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

*/
// Hide on Android
export const hideOnAndroid: Helperclass = {
    container: {
        display: Platform.select({ ios: "flex", android: "none" })
    }
};
// Hide on iOS
export const hideOnIos: Helperclass = {
    container: {
        display: Platform.select({ ios: "none", android: "flex" })
    }
};
//
// == Background Colors
export const backgroundPrimary: Helperclass = {
    container: {
        backgroundColor: background.primary
    }
};
export const backgroundGray: Helperclass = {
    container: {
        backgroundColor: background.gray
    }
};
export const backgroundBrandPrimary: Helperclass = {
    container: {
        backgroundColor: background.brandPrimary
    }
};
export const backgroundBrandSuccess: Helperclass = {
    container: {
        backgroundColor: background.brandSuccess
    }
};
export const backgroundBrandWarning: Helperclass = {
    container: {
        backgroundColor: background.brandWarning
    }
};
export const backgroundBrandDanger: Helperclass = {
    container: {
        backgroundColor: background.brandDanger
    }
};
export const backgroundBrandInfo: Helperclass = {
    container: {
        backgroundColor: background.brandInfo
    }
};
//
// borders
export const borderTop: Helperclass = {
    container: {
        borderColor: border.color,
        borderTopWidth: border.width
    }
};
export const borderBottom: Helperclass = {
    container: {
        borderColor: border.color,
        borderBottomWidth: border.width
    }
};
export const borderRadiusSmall: Helperclass = {
    container: {
        overflow: "hidden",
        borderRadius: border.radiusSmall
    }
};
export const borderRadiusLarge: Helperclass = {
    container: {
        overflow: "hidden",
        borderRadius: border.radiusLarge
    }
};
//
// Positioning
export const absoluteBottom: Helperclass = {
    container: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        maxWidth: "100%",
        zIndex: 99
    }
};
export const absoluteTop: Helperclass = {
    container: {
        position: "absolute",
        top: 0,
        width: "100%",
        maxWidth: "100%",
        zIndex: 99
    }
};
