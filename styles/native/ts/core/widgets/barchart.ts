import { border, brand, font, spacing } from "../../variables";
import { BarChartType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Bar Chart

    Default Class For Mendix Bar Chart Widget
========================================================================== */
export const com_mendix_widget_native_barchart_BarChart: BarChartType = {
    container: {
        // All ViewStyle properties are allowed
    },
    errorMessage: {
        // All TextStyle properties are allowed
        fontFamily: font.family,
        fontSize: font.sizeSmall,
        fontWeight: font.weightNormal
    },
    chart: {
        // All ViewStyle properties are allowed
    },
    grid: {
        /*
            Allowed properties:
              -  backgroundColor (string)
              -  dashArray (string)
              -  lineColor (string)
              -  padding (number)
              -  paddingBottom (number)
              -  paddingHorizontal (number)
              -  paddingLeft (number)
              -  paddingRight (number)
              -  paddingTop (number)
              -  paddingVertical (number)
              -  width (number)
        */
        lineColor: border.color,
        paddingBottom: 32,
        paddingLeft: 32,
        paddingRight: 8,
        paddingTop: 8
    },
    xAxis: {
        /*
            Allowed properties:
              -  color (string)
              -  dashArray (string)
              -  fontFamily (string)
              -  fontSize (number)
              -  fontStyle ("normal" or "italic")
              -  fontWeight ("normal" or "bold" or "100" or "200" or "300" or "400" or "500" or "600" or "700" or "800" or "900")
              -  lineColor (string)
              -  width (number)
        */
        color: font.colorTitle,
        fontFamily: font.family,
        fontSize: font.sizeSmall,
        fontWeight: font.weightNormal,
        label: {
            /*
                All TextStyle properties are allowed and:
                  -  relativePositionGrid ("bottom" or "right")
            */
            color: font.colorParagraph,
            alignSelf: "center",
            marginHorizontal: 0,
            marginVertical: 8,
            fontFamily: font.family,
            fontSize: font.sizeSmall,
            fontWeight: font.weightNormal
        },
        lineColor: border.color
    },
    yAxis: {
        /*
            Allowed properties:
              -  color (string)
              -  dashArray (string)
              -  fontFamily (string)
              -  fontSize (number)
              -  fontStyle ("normal" or "italic")
              -  fontWeight ("normal" or "bold" or "100" or "200" or "300" or "400" or "500" or "600" or "700" or "800" or "900")
              -  lineColor (string)
              -  width (number)
        */
        color: font.colorTitle,
        fontFamily: font.family,
        fontSize: font.sizeSmall,
        fontWeight: font.weightNormal,
        label: {
            /*
               All TextStyle properties are allowed and:
                 -  relativePositionGrid ("top" or "left")
           */
            color: font.colorParagraph,
            marginHorizontal: 0,
            marginVertical: 8,
            fontFamily: font.family,
            fontSize: font.sizeSmall,
            fontWeight: font.weightNormal
        },
        lineColor: border.color
    },
    bars: {
        /*
            Allowed properties:
                -  barColorPalette (string with array of colors separated by ';')
                -  barsOffset (number)

        */
        barColorPalette: Object.values(brand)
            .map((color, index, brandColors) => (index === brandColors.length - 1 ? color : `${color};`))
            .join(""),
        barsOffset: 20,
        customBarStyles: {
            your_static_or_dynamic_attribute_value: {
                bar: {
                    /*
                    Allowed properties:
                      -  ending (number)
                      -  barColor (string)
                      -  width (number)
                */
                },
                label: {
                    /*
                    Allowed properties:
                      -  fontFamily (string)
                      -  fontSize (number)
                      -  fontStyle ("normal" or "italic")
                      -  fontWeight ("normal" or "bold" or "100" or "200" or "300" or "400" or "500" or "600" or "700" or "800" or "900")
                    */
                }
            }
        }
    },
    legend: {
        container: {
            // All ViewStyle properties are allowed
            justifyContent: "flex-start",
            marginHorizontal: 0,
            marginVertical: spacing.small
        },
        item: {
            // All ViewStyle properties are allowed
            padding: 0,
            paddingRight: spacing.regular
        },
        indicator: {
            // All ViewStyle properties are allowed
            marginRight: spacing.small
        },
        label: {
            // All TextStyle properties are allowed
            color: font.colorTitle,
            fontFamily: font.family,
            fontSize: font.sizeSmall,
            fontWeight: font.weightNormal
        }
    }
};
