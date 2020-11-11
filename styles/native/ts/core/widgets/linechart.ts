import { brand, font } from "../variables";
import { LineChartType } from "../../types/widgets";

/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Line Chart

    Default Class For Mendix Line Chart Widget
========================================================================== */
// eslint-disable-next-line @typescript-eslint/camelcase
export const com_mendix_widget_native_linechart_LineChart: LineChartType = {
    container: {
        // All ViewStyle properties are allowed
    },
    errorMessage: {
        // All TextStyle properties are allowed
        fontFamily: font.family,
        fontSize: font.sizeSmall,
    },
    chart: {
        // All ViewStyle properties are allowed
    },
    gridAndLabelsRow: {
        // All ViewStyle properties are allowed
    },
    gridRow: {
        // All ViewStyle properties are allowed
    },
    gridWrapper: {
        // All ViewStyle properties are allowed
    },
    grid: {
        padding: { top: 8, right: 8, bottom: 32, left: 32 },
        xAxis: {
            grid: { stroke: "#CED0D3" },
            axis: { stroke: "#CED0D3" },
            tickLabels: { fontFamily: font.family, fontSize: font.sizeSmall },
        },
        yAxis: {
            grid: { stroke: "#CED0D3" },
            axis: { stroke: "#CED0D3" },
            tickLabels: { fontFamily: font.family, fontSize: font.sizeSmall },
        },
    },
    xAxisLabel: {
        // All TextStyle properties are allowed & relativePositionGrid property ("bottom" or "right")
        color: "#6C717C",
        alignSelf: "center",
        marginHorizontal: 0,
        marginVertical: 8,
        fontFamily: font.family,
        fontSize: font.sizeSmall,
    },
    yAxisLabel: {
        // All TextStyle properties are allowed & relativePositionGrid property ("top" or "left")
        color: "#6C717C",
        marginHorizontal: 0,
        marginVertical: 8,
        fontFamily: font.family,
        fontSize: font.sizeSmall,
    },
    lineStyles: {},
    legend: {
        container: {
            // All ViewStyle properties are allowed
            justifyContent: "flex-start",
            marginHorizontal: 0,
            marginVertical: 8,
        },
        item: {
            // All ViewStyle properties are allowed
            padding: 0,
            paddingRight: 16,
        },
        indicator: {
            // All ViewStyle properties are allowed
            marginRight: 8,
        },
        label: {
            // All TextStyle properties are allowed
            fontFamily: font.family,
            fontSize: font.sizeSmall,
        },
    },
    lineColorPalette: Object.values(brand), // Array of color strings
};
