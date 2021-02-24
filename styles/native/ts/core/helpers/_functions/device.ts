import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
//
const isiPhoneModelWithNotch = (): boolean => {
    const model = DeviceInfo.getDeviceId();
    if (model.includes("iPhone")) {
        switch (model) {
            case "iPhone10,6": // iPhone X GSM
            case "iPhone11,2": // iPhone XS
            case "iPhone11,4": // iPhone XS Max
            case "iPhone11,6": // iPhone XS Max Global
            case "iPhone11,8": // Iphone XR
            case "iPhone12,1": // Iphone 11
            case "iPhone12,3": // Iphone 11 Pro
            case "iPhone12,5": // Iphone 11 Pro Max
                return true;
            default:
                return false;
        }
    }
    return false;
};
//
export const isIphoneWithNotch = DeviceInfo.hasNotch() || (Platform.OS === "ios" && isiPhoneModelWithNotch());
