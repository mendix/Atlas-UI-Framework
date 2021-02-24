import colors from "./colorwords.js";
//
//
declare type ColorPartial = string | number;

interface RGB {
    r: number;
    g: number;
    b: number;
}

//
interface RGBA extends RGB {
    a: number;
}

/**
 *
 * Converts RGB color to HEX
 *
 * @param   {number || string}    r   Accepts RGB as string || Accepts R as string or number
 * @param   {number || string}    g   Accepts G as string or number
 * @param   {number || string}    b   Accepts B as string or number
 *
 * @return  {string} Returns HEX color
 */
function RgbToHex(r: ColorPartial, g: ColorPartial | undefined, b: ColorPartial | undefined): string {
    if (typeof r === "string" && !g && !b) {
        const color = r.replace(/rgb[(]|[)]/gm, "");
        [r, g, b] = color.split(",");
    }
    // eslint-disable-next-line no-bitwise
    return "#" + ((1 << 24) + (Number(r) << 16) + (Number(g) << 8) + Number(b)).toString(16).slice(1);
}

/**
 *
 * Converts HEX or HEX Alpha to RGB
 *
 * @param   {string}    hex   Accepts HEX color
 *
 * @return  {object} Returns RGB color; {r,g,b}
 */
function hexToRgb(hex: string): RGB {
    hex = hex.substring(1);
    hex = hex.length === 3 || hex.length === 4 ? [...hex].map(x => x + x).join("") : hex;
    return rgbaToRgb({
        r: parseInt("0x" + hex[0] + hex[1], 16),
        g: parseInt("0x" + hex[2] + hex[3], 16),
        b: parseInt("0x" + hex[4] + hex[5], 16),
        a: parseInt("0x" + hex[6] + hex[7], 16) / 255 || 1
    });
}

/**
 *
 * Converts any color format to RGB string
 *
 * @param   {string}    anyColor   Accepts any color format
 *
 * @return  {string} Returns RGB color; `r,g,b`
 */
export function anyColorToRgbString(anyColor: string): string {
    const { r, g, b } = checkColor(anyColor);
    return [r, g, b].join(",");
}

/**
 *
 * Converts HSL to RGB color
 *
 * @param   {string}    hsl   Accepts HSL color
 *
 * @return  {object} Returns RGB color; {r,g,b}
 */
function hslToRgb(hsl: string): RGB {
    const hslArray: string[] = hsl
        .replace(/hsla?[(]|[%]|[)]/gm, "")
        .split(",")
        .map(x => x.trim());

    let h: ColorPartial = hslArray[0];
    const s: ColorPartial = Number(hslArray[1]) / 100;
    const l: ColorPartial = Number(hslArray[2]) / 100;
    const a: ColorPartial = 1;

    // Strip label and convert to degrees (if necessary)
    // eslint-disable-next-line no-bitwise
    if (~h.indexOf("deg")) {
        h = h.substr(0, h.length - 3);
        // eslint-disable-next-line no-bitwise
    } else if (~h.indexOf("rad")) {
        h = Math.round(Number(h.substr(0, h.length - 3)) * (180 / Math.PI));
        // eslint-disable-next-line no-bitwise
    } else if (~h.indexOf("turn")) {
        h = Math.round(Number(h.substr(0, h.length - 4)) * 360);
    }

    h = Number(h);
    if (h >= 360) {
        h %= 360;
    } // Keep hue fraction of 360 if h is higher than 360

    let r = 255;
    let g = 255;
    let b = 255;
    const c = (1 - Math.abs(2 * l - 1)) * s; // chroma -> color intensity
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1)); // Second largest component (first being chroma)
    const m = l - c / 2; // Amount to add to each channel to match lightness

    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    return rgbaToRgb({
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255),
        a
    });
}

/**
 *
 * Convert RGB string with HEX or Word inside to RGB object
 *
 * @param   {string}    rgb   Accepts RGB color as string
 *
 * @return  {object} Returns RGB color; {r,g,b}
 */
function rgbStringToRgb(rgb: string): RGB {
    const color = rgb.replace(/rgb[(]|[)]/gm, "");
    // if RGB has hex color definition
    // eslint-disable-next-line no-bitwise
    if (~rgb.indexOf("#")) {
        return hexToRgb(color);
    }
    // if RGB has word color definition
    else if (!/\d/.test(rgb)) {
        return colors[color.toLowerCase()];
    }
    // if RGB has RGB color definition
    else {
        const [r, g, b] = color.split(",");
        [r, g, b].forEach(x => x.trim());
        return { r: Number(r), g: Number(g), b: Number(b) };
    }
}

/**
 *
 * Converts RGB Alpha to RGB object
 *
 * @param   {string}    rgba   Accepts RGB Alpha color
 *
 * @return  {object} Returns RGB color; {r,g,b}
 */
function rgbaToRgb(rgba: RGBA | string): RGB {
    let newAlpha = 1;
    let RGB = typeof rgba === "object" ? rgba : { r: 255, g: 255, b: 255 };
    const calc = (val: number): number => Math.round(newAlpha * (val / 255) * 255); // Calc best color contrast values
    // const calc = val => Math.round((RGB.a * (val / 255) + (RGB.a * ( 0 / 255))) * 255); // Calc best color contrast values

    if (typeof rgba === "string") {
        const val = rgba.replace(/rgba[(]|[)]/gm, "");
        const color = val.slice(0, val.lastIndexOf(",")).trim();
        const alpha = Number(val.slice(val.lastIndexOf(",") + 1).trim());

        // if RGBA has HEX color definition
        if (color[0] === "#") {
            RGB = hexToRgb(color);
        }
        // if RGBA has word color definition
        else if (!/\d/.test(color)) {
            RGB = colors[color.toLowerCase()];
        }
        // if RGBA has RGB color definition
        else {
            const [r, g, b] = color.split(",");
            [r, g, b].forEach(x => Number(x.trim()));
            RGB = { r: Number(r), g: Number(g), b: Number(b) };
        }
        // RGB.a = alpha;
        newAlpha = alpha === 1 ? 1 : Number((1 - alpha).toPrecision(2));
    }
    return { r: calc(RGB.r), g: calc(RGB.g), b: calc(RGB.b) };
}

/**
 *
 * Check what color format is being used.
 *
 * @param   {string}    color   Accepts any color format
 *
 * @return  {object} Returns RGB color; {r,g,b}
 */
function checkColor(color: string): RGB {
    if (color in colors) {
        return colors[color.toLowerCase()];
    } else if (color[0] === "#") {
        return hexToRgb(color);
        // eslint-disable-next-line no-bitwise
    } else if (~color.indexOf("hsl")) {
        return hslToRgb(color);
        // eslint-disable-next-line no-bitwise
    } else if (~color.indexOf("rgba")) {
        return rgbaToRgb(color);
        // eslint-disable-next-line no-bitwise
    } else if (~color.indexOf("rgb")) {
        return rgbStringToRgb(color);
    }
    return { r: 255, g: 255, b: 255 };
}

/**
 *
 * Set best contrast color based on a (background) color
 *
 * @param   {string}    color   Accepts any color format
 *
 * @return  {string} Returns RGB Alpha color
 */
export function setColorBasedOnBackground(color: string): string {
    const c = checkColor(color);
    const RGB = typeof c === "object" ? c : { r: 255, g: 255, b: 255 };

    // https://www.w3.org/TR/AERT/#color-contrast
    const o = Math.round((RGB.r * 299 + RGB.g * 587 + RGB.b * 114) / 1000);
    return o > 125 ? "rgba(0,0,0,.87)" : "rgba(255,255,255,.87)";
}

/**
 *
 * Expects a color and a contrast value between 0 and 1.'
 * It will look at the supplied color's brightness and will start the contrast scale either from #000 (black) or #FFF (white).
 * This function will work best when you supply a very dark or very bright color.
 * It will return a gray color with the desired contrast which is based on the specified color.
 *
 * @param   {string}    color   Accepts any color format
 * @param   {number}    contrast   Accepts a value between 0 and 1
 *
 * @return  {string} Returns HEX color
 */
export function setContrastScale(contrast: number, color: string): string {
    if (contrast > 1) {
        contrast = 1;
    }
    if (contrast < 0) {
        contrast = 0;
    }
    const max = 256;
    const c = checkColor(color);
    const { r, g, b } = typeof c === "object" ? c : { r: 255, g: 255, b: 255 };

    // https://www.w3.org/TR/AERT/#color-contrast
    const brightness = Math.round((r * 299 + g * 587 + b * 114) / 1000);
    const value = Math.round(brightness > max / 2 ? max - max * contrast : max * contrast);
    return RgbToHex(value, value, value);
}
