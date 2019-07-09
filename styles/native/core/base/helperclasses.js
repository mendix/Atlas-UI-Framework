import { background, spacing } from "../variables";
import { Platform } from "react-native";

// Hide on Android
export const hideOnAndroid = {
    container: {
        display: Platform.select({ android: "none" }),
    },
};
// Hide on iOS
export const hideOnIos = {
    container: {
        display: Platform.select({ ios: "none" }),
    },
};

//== Background Colors
export const backgroundPrimary = {
    container: {
        backgroundColor: background.primary,
    },
};
export const backgroundSecondary = {
    container: {
        backgroundColor: background.secondary,
    },
};

//== Flex layout
export const flexMain = {
    container: {
        // flex 1 will take all available space not taken by flexItems.
        flex: 1,
    },
};
export const flexItem = {
    container: {
        // When flex is -1, the component is normally sized according width and height.
        // However, if there's not enough space, the component will shrink to its minWidth and minHeight
        flex: -1,
    },
};
export const flexRow = {
    container: {
        flexDirection: "row",
    },
};
export const flexWrap = {
    container: {
        // flexWrap controls whether children can wrap around after they hit the end of a flex container.
        flexWrap: "wrap",
    },
};
export const flexSpaceBetween = {
    container: {
        justifyContent: "space-between",
    },
};
export const flexSpaceEvenly = {
    container: {
        justifyContent: "space-evenly",
    },
};
export const flexSpaceAround = {
    container: {
        justifyContent: "space-around",
    },
};
export const alignChildrenStretch = {
    container: {
        // alignItems aligns children in the cross direction.
        // For example, if children are flowing vertically, alignItems controls how they align horizontally.
        alignItems: "stretch",
    },
};
export const alignChildrenCenter = {
    container: {
        // alignItems aligns children in the cross direction.
        // For example, if children are flowing vertically, alignItems controls how they align horizontally.
        alignItems: "center",
    },
};
export const alignChildrenEnd = {
    container: {
        // alignItems aligns children in the cross direction.
        // For example, if children are flowing vertically, alignItems controls how they align horizontally.
        alignItems: "flex-end",
    },
};
export const justifyChildrenSpaceAround = {
    container: {
        // justifyContent aligns children in the main direction.
        // For example, if children are flowing vertically, justifyContent controls how they align vertically.
        justifyContent: "space-around",
    },
};
export const justifyChildrenSpaceBetween = {
    container: {
        // justifyContent aligns children in the main direction.
        // For example, if children are flowing vertically, justifyContent controls how they align vertically.
        justifyContent: "space-between",
    },
};
export const justifyChildrenCenter = {
    container: {
        // justifyContent aligns children in the main direction.
        // For example, if children are flowing vertically, justifyContent controls how they align vertically.
        justifyContent: "center",
    },
};
export const justifyChildrenEnd = {
    container: {
        // justifyContent aligns children in the main direction.
        // For example, if children are flowing vertically, justifyContent controls how they align vertically.
        justifyContent: "flex-end",
    },
};
export const childrenCenter = {
    container: {
        ...justifyChildrenCenter,
        ...alignChildrenCenter,
    },
};
export const alignSelfStretch = {
    container: {
        // controls how a child aligns in the cross direction, overriding the alignItems of the parent.
        alignSelf: "stretch",
    },
};
export const alignSelfStart = {
    container: {
        // controls how a child aligns in the cross direction, overriding the alignItems of the parent.
        alignSelf: "flex-start",
    },
};
export const alignSelfCenter = {
    container: {
        // controls how a child aligns in the cross direction, overriding the alignItems of the parent.
        alignSelf: "center",
    },
};
export const alignSelfEnd = {
    container: {
        // controls how a child aligns in the cross direction, overriding the alignItems of the parent.
        alignSelf: "flex-end",
    },
};

//== Inner Spacing
export const spacingInner = {
    container: {
        padding: spacing.smaller,
    },
};
export const spacingInnerVertical = {
    container: {
        paddingVertical: spacing.smaller,
    },
};
export const spacingInnerHorizontal = {
    container: {
        paddingHorizontal: spacing.smaller,
    },
};
export const spacingInnerTop = {
    container: {
        paddingTop: spacing.smaller,
    },
};
export const spacingInnerRight = {
    container: {
        paddingRight: spacing.smaller,
    },
};
export const spacingInnerLeft = {
    container: {
        paddingLeft: spacing.smaller,
    },
};
export const spacingInnerBottom = {
    container: {
        paddingBottom: spacing.smaller,
    },
};

export const spacingInnerMedium = {
    container: {
        padding: spacing.regular,
    },
};
export const spacingInnerVerticalMedium = {
    container: {
        paddingVertical: spacing.regular,
    },
};
export const spacingInnerHorizontalMedium = {
    container: {
        paddingHorizontal: spacing.regular,
    },
};
export const spacingInnerTopMedium = {
    container: {
        paddingTop: spacing.regular,
    },
};
export const spacingInnerRightMedium = {
    container: {
        paddingRight: spacing.regular,
    },
};
export const spacingInnerLeftMedium = {
    container: {
        paddingLeft: spacing.regular,
    },
};
export const spacingInnerBottomMedium = {
    container: {
        paddingBottom: spacing.regular,
    },
};

export const spacingInnerLarge = {
    container: {
        padding: spacing.larger,
    },
};
export const spacingInnerVerticalLarge = {
    container: {
        paddingVertical: spacing.larger,
    },
};
export const spacingInnerHorizontalLarge = {
    container: {
        paddingHorizontal: spacing.larger,
    },
};
export const spacingInnerTopLarge = {
    container: {
        paddingTop: spacing.larger,
    },
};
export const spacingInnerRightLarge = {
    container: {
        paddingRight: spacing.larger,
    },
};
export const spacingInnerLeftLarge = {
    container: {
        paddingLeft: spacing.larger,
    },
};
export const spacingInnerBottomLarge = {
    container: {
        paddingBottom: spacing.larger,
    },
};

//== Outer Spacing
export const spacingOuter = {
    container: {
        margin: spacing.smaller,
    },
};
export const spacingOuterVertical = {
    container: {
        marginVertical: spacing.smaller,
    },
};
export const spacingOuterHorizontal = {
    container: {
        marginHorizontal: spacing.smaller,
    },
};
export const spacingOuterTop = {
    container: {
        marginTop: spacing.smaller,
    },
};
export const spacingOuterRight = {
    container: {
        marginRight: spacing.smaller,
    },
};
export const spacingOuterLeft = {
    container: {
        marginLeft: spacing.smaller,
    },
};
export const spacingOuterBottom = {
    container: {
        marginBottom: spacing.smaller,
    },
};

export const spacingOuterMedium = {
    container: {
        margin: spacing.regular,
    },
};
export const spacingOuterVerticalMedium = {
    container: {
        marginVertical: spacing.regular,
    },
};
export const spacingOuterHorizontalMedium = {
    container: {
        marginHorizontal: spacing.regular,
    },
};
export const spacingOuterTopMedium = {
    container: {
        marginTop: spacing.regular,
    },
};
export const spacingOuterRightMedium = {
    container: {
        marginRight: spacing.regular,
    },
};
export const spacingOuterLeftMedium = {
    container: {
        marginLeft: spacing.regular,
    },
};
export const spacingOuterBottomMedium = {
    container: {
        marginBottom: spacing.regular,
    },
};

export const spacingOuterLarge = {
    container: {
        margin: spacing.larger,
    },
};
export const spacingOuterVerticalLarge = {
    container: {
        marginVertical: spacing.larger,
    },
};
export const spacingOuterHorizontalLarge = {
    container: {
        marginHorizontal: spacing.larger,
    },
};
export const spacingOuterTopLarge = {
    container: {
        marginTop: spacing.larger,
    },
};
export const spacingOuterRightLarge = {
    container: {
        marginRight: spacing.larger,
    },
};
export const spacingOuterLeftLarge = {
    container: {
        marginLeft: spacing.larger,
    },
};
export const spacingOuterBottomLarge = {
    container: {
        marginBottom: spacing.larger,
    },
};
