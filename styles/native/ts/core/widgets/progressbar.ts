import { progressBar } from "../../variables";
import { ProgressBarType } from "../../types/widgets";
import { TextBox } from "./textbox";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Progress Bar

    Default Class For Mendix Progress Bar Widget
========================================================================== */
export const com_mendix_widget_native_progressbar_ProgressBar: ProgressBarType = {
    container: {
        // All ViewStyle properties are allowed
        alignSelf: "stretch"
    },
    bar: {
        // All ViewStyle properties are allowed
        height: progressBar.bar.height,
        borderWidth: 0,
        borderRadius: progressBar.bar.height / 2,
        backgroundColor: progressBar.bar.backgroundColor
    },
    fill: {
        // Only the backgroundColor property is allowed
        backgroundColor: progressBar.fill.backgroundColor
    },
    validationMessage: {
        // All TextStyle properties are allowed
        ...TextBox.validationMessage
    }
};
