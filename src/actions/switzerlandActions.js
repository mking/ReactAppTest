/*global REACT_APP_COVID_URL*/

import fp from 'lodash/fp';
import Promise from 'bluebird';
import { createEntitySlice } from '@app/src/helpers/entityHelpers';

export const caseSlice = createEntitySlice({
  reducerKey: 'switzerland',
  name: 'case',
  getEntitiesRemote: () => async (dispatch, getState, { axiosInstance }) => {
    const res = await axiosInstance.get(
      `${REACT_APP_COVID_URL}/total/country/switzerland/status/confirmed`
    );
    await Promise.delay(1000);
    const mappedData = fp.map((c) => fp.pick(['Country', 'Cases', 'Date'])(c))(
      res.data
    );
    return mappedData;
  },
});

export const getCaseEntities = caseSlice.actions.getCaseEntities;
