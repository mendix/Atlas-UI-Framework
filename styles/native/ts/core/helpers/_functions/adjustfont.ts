import { Dimensions, PixelRatio } from "react-native";
const { height, width } = Dimensions.get("window");
const pixelRatio = PixelRatio.get();
/**
 *
 * Adjust the font size based on the screen size
 *
 * @param   {number}    size   Font size
 *
 * @return  {number} Returns adjusted font size
 */
function adjustFont(size: number): number {
    if (pixelRatio === 2) {
        // iphone 5s and older Androids
        if (width < 360) {
            return size * 0.95;
        }
        // iphone 5
        if (height < 667) {
            return size;
        }
        // iphone 6-6s
        else if (height >= 667 && height <= 735) {
            return size * 1.15;
        }
        // older phablets
        return size * 1.25;
    }
    if (pixelRatio === 3) {
        // catch Android font scaling on small machines
        // where pixel ratio / font scale ratio => 3:3
        if (width <= 360) {
            return size;
        }
        // Catch other weird android width sizings
        if (height < 667) {
            return size * 1.15;
        }
        // catch in-between size Androids and scale font up
        if (height >= 667 && height <= 735) {
            return size * 1.2;
        }
        // catch larger devices
        // ie iphone 6s plus / 7 plus / mi note
        return size * 1.27;
    }
    if (pixelRatio === 3.5) {
        // catch Android font scaling on small machines
        // where pixel ratio / font scale ratio => 3:3
        if (width <= 360) {
            return size;
        }
        // Catch other smaller android height sizings
        if (height < 667) {
            return size * 1.2;
        }
        // catch in-between size Androids and scale font up
        if (height >= 667 && height <= 735) {
            return size * 1.25;
        }
        // catch larger phablet devices
        return size * 1.4;
    }
    // if older device ie pixelRatio !== 2 || 3 || 3.5
    return size;
}
//
export { adjustFont as default, height, width };
