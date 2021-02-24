import { TextBoxType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Text Box

//== Design Properties
//## Helper classes to change the look and feel of the widget
========================================================================== */
// Text Box Color
export const textInputCapitalizeNone: TextBoxType = {
    input: {
        autoCapitalize: "none"
    }
};
export const textInputCapitalizeCharacters: TextBoxType = {
    input: {
        autoCapitalize: "characters"
    }
};
export const textInputCapitalizeWords: TextBoxType = {
    input: {
        autoCapitalize: "words"
    }
};
export const textInputCapitalizeSentences: TextBoxType = {
    input: {
        autoCapitalize: "sentences"
    }
};
