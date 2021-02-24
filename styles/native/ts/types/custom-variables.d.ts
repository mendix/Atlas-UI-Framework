declare type FontWeight = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
declare type TextAlign = "auto" | "left" | "right" | "center" | "justify";

export interface VariablesBrand {
    primary?: string;
    success?: string;
    warning?: string;
    danger?: string;
    primaryLight?: string;
    successLight?: string;
    warningLight?: string;
    dangerLight?: string;
}

export interface VariablesBackground {
    primary?: string;
    secondary?: string;
    gray?: string;
    brandPrimary?: string;
    brandSuccess?: string;
    brandWarning?: string;
    brandDanger?: string;
}

export interface VariablesContrast {
    highest?: string;
    higher?: string;
    high?: string;
    regular?: string;
    low?: string;
    lower?: string;
    lowest?: string;
}

export interface VariablesBorder {
    color?: string;
    width?: number;
    radius?: number;
}

export interface VariablesFont {
    size?: number;
    sizeSmall?: number;
    sizeLarge?: number;
    sizeH1?: number;
    sizeH2?: number;
    sizeH3?: number;
    sizeH4?: number;
    sizeH5?: number;
    sizeH6?: number;
    color?: string;
    weightLight?: FontWeight;
    weightNormal?: FontWeight;
    weightSemiBold?: FontWeight;
    weightBold?: FontWeight;
    family?: string;
}

export interface VariablesSpacing {
    smallest?: number;
    smaller?: number;
    small?: number;
    regular?: number;
    large?: number;
    larger?: number;
    largest?: number;
}

interface VariablesButtonStyles {
    color?: string;
    borderColor?: string;
    backgroundColor?: string;
    inversedColor?: string;
}

export interface VariablesButton {
    fontSize?: number;
    fontSizeLarge?: number;
    fontWeight?: FontWeight;
    fontSizeIcon?: number;
    fontSizeIconLarge?: number;
    borderRadius?: number;
    paddingVertical?: number;
    paddingHorizontal?: number;

    header?: {
        color?: string;
        borderColor?: string;
        backgroundColor?: string;
        fontSize?: number;
        fontSizeIcon?: number;
        paddingLeft?: number;
        paddingRight?: number;
    };

    primary?: VariablesButtonStyles;
    secondary?: VariablesButtonStyles;
    success?: VariablesButtonStyles;
    warning?: VariablesButtonStyles;
    danger?: VariablesButtonStyles;
}

export interface VariablesInput {
    color?: string;
    errorColor?: string;
    labelColor?: string;
    borderColor?: string;
    backgroundColor?: string;
    disabledBackgroundColor?: string;
    selectionColor?: string;
    placeholderTextColor?: string;
    underlineColorAndroid?: string;

    fontSize?: number;
    fontFamily?: string;
    borderWidth?: number;
    borderRadius?: number;

    textAlign?: TextAlign;
    paddingVertical?: number;
    paddingHorizontal?: number;
}

export interface VariablesNavigation {
    statusBar?: {
        backgroundColor?: string;
        barStyle?: "light-content" | "dark-content";
    };
    topBar?: {
        backgroundColor?: string;
        backButtonColor?: string;
        titleColor?: string;
        titleFontSize?: number;
    };
    bottomBar?: {
        color?: string;
        selectedTextColor?: string;
        selectedIconColor?: string;
        backgroundColor?: string;
        fontSize?: number;
        iconSize?: number;
    };
    progressOverlay?: {
        color?: string;
        activityIndicatorColor?: string;
        backgroundColor?: string;
        containerBackgroundColor?: string;
        shadowColor?: string;
        fontSize?: number;
    };
}

export interface VariablesTabContainer {
    tabBar?: {
        pressColor?: string;
        backgroundColor?: string;
    };
    indicator?: {
        backgroundColor?: string;
        height?: number;
    };
    label?: {
        color?: string;
        fontWeight?: FontWeight;
    };
}

export interface VariablesListView {
    border?: {
        color?: string;
        width?: number;
    };
}

export interface VariablesLayoutgrid {
    gutterSize?: number;
}

// ## Pluggable Widgets
// -------------------------------------------------------------------------------------------------------------------//

interface VariablesBadgeStyles {
    color?: string;
    backgroundColor?: string;
}

export interface VariablesBadge {
    fontWeight?: FontWeight;
    borderRadius?: number;
    paddingVertical?: number;
    paddingHorizontal?: number;

    default?: VariablesBadgeStyles;
    primary?: VariablesBadgeStyles;
    success?: VariablesBadgeStyles;
    warning?: VariablesBadgeStyles;
    danger?: VariablesBadgeStyles;
}
