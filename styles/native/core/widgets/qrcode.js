import { background, contrast } from "../variables";

export const com_mendix_widget_native_qrcode_QRCode = (QRCode = {
    container: {
        // All ViewStyle properties are allowed
    },
    qrcode: {
        // Only size, color and backgroundColor are allowed
        size: 100,
        color: contrast.highest,
        backgroundColor: background.primary,
    },
});
