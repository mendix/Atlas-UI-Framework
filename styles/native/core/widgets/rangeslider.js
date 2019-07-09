import { com_mendix_widget_native_slider_Slider as Slider, sliderDanger, sliderSuccess, sliderWarning } from "./slider";

/* ==========================================================================
    Range Slider

    Default Class For Mendix Range Slider Widget
========================================================================== */

export const com_mendix_widget_native_rangeslider_RangeSlider = (RangeSlider = Slider);

//== Design Properties
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// Range Slider Color

export const rangeSliderSuccess = sliderSuccess;
export const rangeSliderWarning = sliderWarning;
export const rangeSliderDanger = sliderDanger;
