import { contrast, font, spacing } from '../../../core/variables';
import { Platform } from 'react-native';

/* ==========================================================================
   Form Block

   Used in default forms
========================================================================== */

//== Elements
//-------------------------------------------------------------------------------------------------------------------//

export const formTitle = {
    container: {
        marginHorizontal: spacing.small,
        ...Platform.select({
            ios: {
                color: contrast.regular,
                fontSize: font.sizeSmall,
                textTransform: 'uppercase',
                marginBottom: spacing.smallest,
            },
            android: {
                color: contrast.high,
                fontWeight: font.weightSemiBold,
                marginBottom: spacing.smaller,
            },
        }),
    },
};

export const inputFieldIcon = {
    container: {
        marginRight: spacing.small,
    },
    image: {
        width: 30,
        height: 30,
    },
};
