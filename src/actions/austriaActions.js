/*global REACT_APP_COVID_URL*/

import fp from 'lodash/fp';
import Promise from 'bluebird';
import { createEntitySlice } from '../helpers/entityHelpers';

export const recordSlice = createEntitySlice({
  reducerKey: 'austria',
  name: 'record',
  getEntitiesRemote: () => async (dispatch, getState, { axiosInstance }) => {
    const res = await axiosInstance.get(
      `${REACT_APP_COVID_URL}/total/country/austria/status/confirmed`
    );
    await Promise.delay(1000);
    const mappedData = fp.map((c) => fp.pick(['Country', 'Cases', 'Date'])(c))(
      res.data
    );
    return mappedData;
  },
});

export const getRecordEntities = recordSlice.actions.getRecordEntities;
