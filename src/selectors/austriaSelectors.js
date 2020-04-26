import fp from 'lodash/fp';
import { recordSlice } from '../actions/austriaActions';

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

export const fooSelector = fp.get(['austria', 'foo']);
