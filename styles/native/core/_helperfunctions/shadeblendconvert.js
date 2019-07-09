/**
 * Blend two colors or add a shade to color
 * Colors can be:
 *      HEX => (#FFFFFF / #FFF)
 *      RGB => rgb(255,255,255)
 *      RGBA => rgba(255,255,255, 0.8)
 *
 * Usage:
 *      shade => shadeBlendConvert(-0.5, "#FFF") // Makes #FFF 50% darker
 *      shade => shadeBlendConvert(0.5, "#000") // Makes #000 50% lighter
 *      shade => shadeBlendConvert(0.5, "#000", "c") // Makes #000 50% lighter and converts HEX to RGB
 *      blend => shadeBlendConvert(0.2, "rgb(0,0,0)", "rgb(0,200,0)") // rgb(0,0,0) + rgb(0,200,0) + 20% Blend will become rgb(0,40,0)
 *      blend => shadeBlendConvert(-0.2, "rgb(0,0,0)", "rgb(0,200,0)") // rgb(0,0,0) + rgb(0,200,0) + -20% Blend will become rgb(0,160,0)
 *      blend => shadeBlendConvert(0.75, "rgb(200,60,20)", "#67DAF0") // rgb(200,60,20) + #67DAF0 + 75% Blend will become #7fb3b9
 *
 *
 * @param   {number}    p   Amount of change. Value between -1 and 1
 * @param   {string}    from   HEX / RGB / RGBA Color
 * @param   {string}    to   HEX / RGB / RGBA Color to blend with. If (to === 'c') return value will be RGB Color
 *
 * @return  {string} Returns HEX color or RGB color if parameter to === 'c'
 */
export default function(p, from, to) {
    if (
        typeof p != "number" ||
        p < -1 ||
        p > 1 ||
        typeof from != "string" ||
        (from[0] != "r" && from[0] != "#") ||
        (to && typeof to != "string")
    ) return null; //ErrorCheck
    if (!this.sbcRip) this.sbcRip = d => {
            const l = d.length,
                RGB = {};
            if (l > 9) {
                d = d.split(",");
                if (d.length < 3 || d.length > 4) return null; //ErrorCheck
                (RGB[0] = i(d[0].split("(")[1])),
                    (RGB[1] = i(d[1])),
                    (RGB[2] = i(d[2])),
                    (RGB[3] = d[3] ? parseFloat(d[3]) : -1);
            } else {
                if (l == 8 || l == 6 || l < 4) return null; //ErrorCheck
                if (l < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (l > 4 ? d[4] + "" + d[4] : ""); //3 or 4 digit
                (d = i(d.slice(1), 16)),
                    (RGB[0] = (d >> 16) & 255),
                    (RGB[1] = (d >> 8) & 255),
                    (RGB[2] = d & 255),
                    (RGB[3] = -1);
                if (l == 9 || l == 5) (RGB[3] = r((RGB[2] / 255) * 10000) / 10000),
                        (RGB[2] = RGB[1]),
                        (RGB[1] = RGB[0]),
                        (RGB[0] = (d >> 24) & 255);
            }
            return RGB;
        };
    var i = parseInt,
        r = Math.round,
        h = from.length > 9,
        h = typeof to == "string" ? (to.length > 9 ? true : to == "c" ? !h : false) : h,
        b = p < 0,
        p = b ? p * -1 : p,
        to = to && to != "c" ? to : b ? "#000000" : "#FFFFFF",
        f = this.sbcRip(from),
        t = this.sbcRip(to);
    if (!f || !t) return null; //ErrorCheck
    if (h) return (
            "rgb" +
            (f[3] > -1 || t[3] > -1 ? "a(" : "(") +
            r((t[0] - f[0]) * p + f[0]) +
            "," +
            r((t[1] - f[1]) * p + f[1]) +
            "," +
            r((t[2] - f[2]) * p + f[2]) +
            (f[3] < 0 && t[3] < 0
                ? ")"
                : "," +
                  (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 10000) / 10000 : t[3] < 0 ? f[3] : t[3]) +
                  ")")
        );
    else return (
            "#" +
            (
                0x100000000 +
                r((t[0] - f[0]) * p + f[0]) * 0x1000000 +
                r((t[1] - f[1]) * p + f[1]) * 0x10000 +
                r((t[2] - f[2]) * p + f[2]) * 0x100 +
                (f[3] > -1 && t[3] > -1
                    ? r(((t[3] - f[3]) * p + f[3]) * 255)
                    : t[3] > -1
                    ? r(t[3] * 255)
                    : f[3] > -1
                    ? r(f[3] * 255)
                    : 255)
            )
                .toString(16)
                .slice(1, f[3] > -1 || t[3] > -1 ? undefined : -2)
        );
}
