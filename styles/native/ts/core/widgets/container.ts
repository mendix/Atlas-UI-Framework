import { ContainerType } from "../../types/widgets";
import { container } from "../../variables";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Container

    Default Class For Mendix Container Widget
========================================================================== */
export const Container: ContainerType = {
    container: {
        // rippleColor & all ViewStyle properties are allowed
    },
    containerDisabled: {
        // All ViewStyle properties are allowed
        opacity: container.containerDisabled.opacity
    }
};

export const ScrollContainer: ContainerType = {
    container: {
        // All ViewStyle properties are allowed
    }
};
