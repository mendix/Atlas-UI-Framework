import { spacing, rating } from "../../variables";
import { RatingType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Rating

    Default Class For Mendix Rating Widget
========================================================================== */
export const com_mendix_widget_native_rating_Rating: RatingType = {
    container: {
        // All ViewStyle properties are allowed
        justifyContent: "center"
    },
    containerDisabled: {
        // All ViewStyle properties are allowed
        opacity: rating.containerDisabled.opacity
    },
    icon: {
        // Size, color, selectedColor & all ViewStyle properties are allowed
        size: rating.icon.size,
        marginRight: spacing.smaller,
        color: rating.icon.color,
        selectedColor: rating.icon.selectedColor
    }
};
