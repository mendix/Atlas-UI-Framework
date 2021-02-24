import { background, border, contrast, spacing } from "../variables";
/*
==========================================================================
    Maps

==========================================================================
*/
//
// == Elements
// -------------------------------------------------------------------------------------------------------------------//
export const mapsBackground = {
    container: {
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: 0
    }
};
export const mapsFooter = {
    container: {
        bottom: 0,
        position: "absolute"
    }
};
export const mapsFooterSendLocation = {
    container: {
        flex: 1,
        alignSelf: "flex-end",
        backgroundColor: background.primary,
        padding: spacing.regular,
        margin: spacing.regular,
        borderRadius: border.radiusSmall,
        elevation: 4,
        shadowColor: contrast.lower,
        shadowOpacity: 0.8,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 2
        }
    }
};
export const mapsListItemImage = {
    container: {
        backgroundColor: background.primary,
        borderRadius: border.radiusSmall,
        marginVertical: spacing.regular,
        marginLeft: spacing.smallest,
        marginRight: spacing.regular,
        elevation: 4,
        shadowColor: contrast.lower,
        shadowOpacity: 0.8,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    image: {
        borderRadius: border.radiusSmall
    }
};
//
// == Variations
// -------------------------------------------------------------------------------------------------------------------//
//
