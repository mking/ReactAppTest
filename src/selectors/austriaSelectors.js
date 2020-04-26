import fp from 'lodash/fp';
import { recordSlice } from '@app/src/actions/austriaActions';

export const fooSelector = fp.get(['austria', 'foo']);
export const commentSelector = fp.get(['austria', 'comment']);

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
