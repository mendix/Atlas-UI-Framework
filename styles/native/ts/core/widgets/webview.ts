import { font } from "../../variables";
import { WebViewType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Web View

    Default Class For Mendix Web View Widget
========================================================================== */
export const com_mendix_widget_native_webview_WebView: WebViewType = {
    container: {
        // All ViewStyle properties are allowed
    },
    errorContainer: {
        // All ViewStyle properties are allowed
    },
    errorText: {
        // All TextStyle properties are allowed
        fontSize: font.size,
        fontFamily: font.family
    }
};
