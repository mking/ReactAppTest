import get from 'lodash/fp/get';
import { recordSlice } from '@app/src/actions/austriaActions';

export const fooSelector = get(['austria', 'foo']);
export const commentSelector = get(['austria', 'comment']);

const {
  recordLoadingSelector,
  recordErrorSelector,
  recordRequestIdSelector,
  recordEntitiesSelector,
} = recordSlice.selectors;

export {
  recordLoadingSelector,
  recordErrorSelector,
  recordRequestIdSelector,
  recordEntitiesSelector,
};
