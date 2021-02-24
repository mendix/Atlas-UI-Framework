import { Helperclass } from "../../types/helperclass";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

*/
// == Flex layout
export const flexMain: Helperclass = {
    container: {
        // flex 1 will take all available space not taken by flexItems.
        flex: 1
    }
};
export const flexItem: Helperclass = {
    container: {
        // When flex is -1, the component is normally sized according width and height.
        // However, if there's not enough space, the component will shrink to its minWidth and minHeight
        flex: -1
    }
};
export const flexRow: Helperclass = {
    container: {
        flexDirection: "row"
    }
};
export const flexColumn: Helperclass = {
    container: {
        flexDirection: "column"
    }
};
export const flexRowReverse: Helperclass = {
    container: {
        flexDirection: "row-reverse"
    }
};
export const flexColumnReverse: Helperclass = {
    container: {
        flexDirection: "column-reverse"
    }
};
export const flexWrap: Helperclass = {
    container: {
        // flexWrap controls whether children can wrap around after they hit the end of a flex container.
        flexWrap: "wrap"
    }
};
export const justifyContentStart: Helperclass = {
    container: {
        // justifyContent aligns children in the main direction.
        // For example, if children are flowing vertically, justifyContent controls how they align vertically.
        justifyContent: "flex-start"
    }
};
export const justifyContentCenter: Helperclass = {
    container: {
        // justifyContent aligns children in the main direction.
        // For example, if children are flowing vertically, justifyContent controls how they align vertically.
        justifyContent: "center"
    }
};
export const justifyContentEnd: Helperclass = {
    container: {
        // justifyContent aligns children in the main direction.
        // For example, if children are flowing vertically, justifyContent controls how they align vertically.
        justifyContent: "flex-end"
    }
};
export const justifyContentSpaceBetween: Helperclass = {
    container: {
        // justifyContent aligns children in the main direction.
        // For example, if children are flowing vertically, justifyContent controls how they align vertically.
        justifyContent: "space-between"
    }
};
export const justifyContentSpaceAround: Helperclass = {
    container: {
        // justifyContent aligns children in the main direction.
        // For example, if children are flowing vertically, justifyContent controls how they align vertically.
        justifyContent: "space-around"
    }
};
export const justifyContentSpaceEvenly: Helperclass = {
    container: {
        // justifyContent aligns children in the main direction.
        // For example, if children are flowing vertically, justifyContent controls how they align vertically.
        justifyContent: "space-evenly"
    }
};
export const alignChildrenStart: Helperclass = {
    container: {
        // alignItems aligns children in the cross direction.
        // For example, if children are flowing vertically, alignItems controls how they align horizontally.
        alignItems: "flex-start"
    }
};
export const alignChildrenCenter: Helperclass = {
    container: {
        // alignItems aligns children in the cross direction.
        // For example, if children are flowing vertically, alignItems controls how they align horizontally.
        alignItems: "center"
    }
};
export const alignChildrenEnd: Helperclass = {
    container: {
        // alignItems aligns children in the cross direction.
        // For example, if children are flowing vertically, alignItems controls how they align horizontally.
        alignItems: "flex-end"
    }
};
export const alignChildrenStretch: Helperclass = {
    container: {
        // alignItems aligns children in the cross direction.
        // For example, if children are flowing vertically, alignItems controls how they align horizontally.
        alignItems: "stretch"
    }
};
export const alignChildrenBaseline: Helperclass = {
    container: {
        // alignContent aligns children in the cross direction.
        // For example, if children are flowing vertically, alignContent controls how they align horizontally.
        alignItems: "baseline"
    }
};
export const childrenCenter: Helperclass = {
    container: {
        ...justifyContentCenter.container,
        ...alignChildrenCenter.container
    }
};
export const alignContentStart: Helperclass = {
    container: {
        // alignContent aligns rows of children in the cross direction.
        // For example, if children are flowing vertically, alignContent controls how they align horizontally.
        alignContent: "flex-start"
    }
};
export const alignContentCenter: Helperclass = {
    container: {
        // alignContent aligns rows of children in the cross direction.
        // For example, if children are flowing vertically, alignContent controls how they align horizontally.
        alignContent: "center"
    }
};
export const alignContentEnd: Helperclass = {
    container: {
        // alignContent aligns rows of children in the cross direction.
        // For example, if children are flowing vertically, alignContent controls how they align horizontally.
        alignContent: "flex-end"
    }
};
export const alignContentStretch: Helperclass = {
    container: {
        // alignContent aligns rows of children in the cross direction.
        // For example, if children are flowing vertically, alignContent controls how they align horizontally.
        alignContent: "stretch"
    }
};
export const alignContentSpaceAround: Helperclass = {
    container: {
        // alignContent aligns rows of children in the cross direction.
        // For example, if children are flowing vertically, alignContent controls how they align horizontally.
        alignContent: "space-around"
    }
};
export const alignContentSpaceBetween: Helperclass = {
    container: {
        // alignContent aligns rows of children in the cross direction.
        // For example, if children are flowing vertically, alignContent controls how they align horizontally.
        alignContent: "space-between"
    }
};
export const alignSelfStart: Helperclass = {
    container: {
        // controls how a child aligns in the cross direction, overriding the alignItems of the parent.
        alignSelf: "flex-start"
    }
};
export const alignSelfCenter: Helperclass = {
    container: {
        // controls how a child aligns in the cross direction, overriding the alignItems of the parent.
        alignSelf: "center"
    }
};
export const alignSelfEnd: Helperclass = {
    container: {
        // controls how a child aligns in the cross direction, overriding the alignItems of the parent.
        alignSelf: "flex-end"
    }
};
export const alignSelfStretch: Helperclass = {
    container: {
        // controls how a child aligns in the cross direction, overriding the alignItems of the parent.
        alignSelf: "stretch"
    }
};
export const alignSelfBaseline: Helperclass = {
    container: {
        // controls how a child aligns in the cross direction, overriding the alignItems of the parent.
        alignSelf: "baseline"
    }
};
