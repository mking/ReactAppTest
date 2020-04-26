import { caseSlice } from '@app/src/actions/switzerlandActions';

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
