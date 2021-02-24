import { background, listViewSwipe } from "../../variables";
import { ListViewSwipeType } from "../../types/widgets";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    List View Swipe

    Default Class For Mendix List View Swipe Widget
========================================================================== */
export const com_mendix_widget_native_listviewswipe_ListViewSwipe: ListViewSwipeType = {
    container: {
        // All ViewStyle properties are allowed
        flex: 1,
        alignItems: "stretch",
        justifyContent: "space-between",
        backgroundColor: background.primary
    },
    leftAction: {
        // PanelSize & All ViewStyle properties are allowed
        panelSize: listViewSwipe.leftAction.panelSize,
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch",
        backgroundColor: listViewSwipe.leftAction.backgroundColor
    },
    rightAction: {
        // PanelSize & All ViewStyle properties are allowed
        panelSize: listViewSwipe.rightAction.panelSize,
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch",
        backgroundColor: listViewSwipe.rightAction.backgroundColor
    }
};
