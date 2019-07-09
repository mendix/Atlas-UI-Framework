import { TextHeading1 } from "./typography";
import { font } from "../variables";

/* ==========================================================================
    Page Title

    Default Class For Mendix Page Title Widget
========================================================================== */

export const PageTitle = {
    container: {
        // All ViewStyle properties are allowed
    },
    text: {
        // All TextStyle properties are allowed
        ...TextHeading1.text,
        color: font.color,
    },
};
