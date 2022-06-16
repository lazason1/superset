import { t, validateNonEmpty } from '@superset-ui/core';
import {
    ControlSetItem,
    sharedControls,
} from '@superset-ui/chart-controls';
export const xAxisControl: ControlSetItem = {
    name: 'x_axis',
    config: {
        ...sharedControls.groupby,
        label: t('X-axis'),
        default: null,
        multi: false,
        description: t('Dimension to use on x-axis.'),
        validators: [validateNonEmpty],
    },
};
