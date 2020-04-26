/*global REACT_APP_COVID_URL*/

import map from 'lodash/fp/map';
import pick from 'lodash/fp/pick';
import delay from 'delay';
import { createEntitySlice } from '@app/src/helpers/entityHelpers';

export const caseSlice = createEntitySlice({
  reducerKey: 'switzerland',
  name: 'case',
  getEntitiesRemote: () => async (dispatch, getState, { axiosInstance }) => {
    const res = await axiosInstance.get(
      `${REACT_APP_COVID_URL}/total/country/switzerland/status/confirmed`
    );
    await delay(1000);
    const mappedData = map((c) => pick(['Country', 'Cases', 'Date'])(c))(
      res.data
    );
    return mappedData;
  },
});

export const getCaseEntities = caseSlice.actions.getCaseEntities;
