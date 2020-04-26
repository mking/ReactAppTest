import { caseSlice } from '../actions/switzerlandActions';

const {
  caseLoadingSelector,
  caseErrorSelector,
  caseRequestIdSelector,
  caseEntitiesSelector,
} = caseSlice.selectors;

export {
  caseLoadingSelector,
  caseErrorSelector,
  caseRequestIdSelector,
  caseEntitiesSelector,
};
