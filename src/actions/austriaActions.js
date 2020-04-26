/*global REACT_APP_COVID_URL*/

import map from 'lodash/fp/map';
import pick from 'lodash/fp/pick';
import delay from 'delay';
import { createAction } from '@reduxjs/toolkit';
import { createEntitySlice } from '@app/src/helpers/entityHelpers';

export const SET_FOO = 'austria/SET_FOO';
export const SET_COMMENT = 'austria/SET_COMMENT';

export const setFoo = createAction(SET_FOO);
export const setComment = createAction(SET_COMMENT);

export const recordSlice = createEntitySlice({
  reducerKey: 'austria',
  name: 'record',
  getEntitiesRemote: () => async (dispatch, getState, { axiosInstance }) => {
    const res = await axiosInstance.get(
      `${REACT_APP_COVID_URL}/total/country/austria/status/confirmed`
    );
    await delay(1000);
    const mappedData = map((c) => pick(['Country', 'Cases', 'Date'])(c))(
      res.data
    );
    return mappedData;
  },
});

export const getRecordEntities = recordSlice.actions.getRecordEntities;
