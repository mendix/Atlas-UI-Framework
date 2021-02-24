import { background, contrast } from "../../variables";
import { QRCodeType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    QR Code

    Default Class For Mendix QR Code Widget
========================================================================== */
export const com_mendix_widget_native_qrcode_QRCode: QRCodeType = {
    container: {
        // All ViewStyle properties are allowed
    },
    qrcode: {
        // Only size, color and backgroundColor are allowed
        size: 100,
        color: contrast.highest,
        backgroundColor: background.primary
    }
};
