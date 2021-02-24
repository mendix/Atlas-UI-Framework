import { slider } from "../../variables";
import { SliderType } from "../../types/widgets";
import { TextBox } from "./textbox";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Slider

    Default Class For Mendix Slider Widget
========================================================================== */
export const com_mendix_widget_native_slider_Slider: SliderType = {
    container: {
        // All ViewStyle properties are allowed
        alignSelf: "stretch"
    },
    track: {
        // All ViewStyle properties are allowed
        height: slider.track.height,
        backgroundColor: slider.track.backgroundColor
    },
    trackDisabled: {
        // All ViewStyle properties are allowed
        height: slider.track.height,
        backgroundColor: slider.trackDisabled.backgroundColor,
        opacity: slider.trackDisabled.opacity
    },
    highlight: {
        // All ViewStyle properties are allowed
        height: slider.track.height,
        backgroundColor: slider.highlight.backgroundColor
    },
    highlightDisabled: {
        // All ViewStyle properties are allowed
        height: slider.track.height,
        backgroundColor: slider.highlightDisabled.backgroundColor
    },
    marker: {
        // All ViewStyle properties are allowed
        backgroundColor: slider.marker.backgroundColor,
        width: slider.marker.size,
        height: slider.marker.size,
        borderRadius: slider.marker.size / 2,
        borderColor: slider.marker.borderColor,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 }
    },
    markerActive: {
        // All ViewStyle properties are allowed
        width: slider.markerActive.size,
        height: slider.markerActive.size,
        borderRadius: slider.markerActive.size / 2,
        borderWidth: 0
    },
    markerDisabled: {
        // All ViewStyle properties are allowed
        backgroundColor: slider.markerDisabled.backgroundColor,
        width: slider.markerDisabled.size,
        height: slider.markerDisabled.size,
        borderRadius: slider.markerDisabled.size / 2,
        borderColor: slider.markerDisabled.borderColor,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 }
    },
    validationMessage: {
        // All TextStyle properties are allowed
        ...TextBox.validationMessage
    }
};
