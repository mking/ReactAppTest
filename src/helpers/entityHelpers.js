import { createAction, createReducer, nanoid } from '@reduxjs/toolkit';
import { camelCase, constantCase } from 'change-case';
import fp from 'lodash/fp';

const debug = require('debug')('ReactAppTest:entityHelpers');

export const createEntitySlice = ({ reducerKey, name, getEntitiesRemote }) => {
  const SET_LOADING = `${reducerKey}/${constantCase(`set ${name} loading`)}`;
  const SET_ERROR = `${reducerKey}/${constantCase(`set ${name} error`)}`;
  const SET_REQUEST_ID = `${reducerKey}/${constantCase(
    `set ${name} request id`
  )}`;
  const SET_ENTITIES = `${reducerKey}/${constantCase(`set ${name} entities`)}`;

  const constants = {
    [constantCase(`set ${name} loading`)]: SET_LOADING,
    [constantCase(`set ${name} error`)]: SET_ERROR,
    [constantCase(`set ${name} request id`)]: SET_REQUEST_ID,
    [constantCase(`set ${name} entities`)]: SET_ENTITIES,
  };

  const loadingSelector = fp.get([reducerKey, camelCase(`${name} loading`)]);
  const errorSelector = fp.get([reducerKey, camelCase(`${name} error`)]);
  const requestIdSelector = fp.get([
    reducerKey,
    camelCase(`${name} request id`),
  ]);
  const entitiesSelector = fp.get([reducerKey, camelCase(`${name} entities`)]);

  const selectors = {
    [camelCase(`${name} loading selector`)]: loadingSelector,
    [camelCase(`${name} error selector`)]: errorSelector,
    [camelCase(`${name} request id selector`)]: requestIdSelector,
    [camelCase(`${name} entities selector`)]: entitiesSelector,
  };

  const setLoading = createAction(SET_LOADING);
  const setError = createAction(SET_ERROR);
  const setRequestId = createAction(SET_REQUEST_ID);
  const setEntities = createAction(SET_ENTITIES);

  const getEntities = () => async (dispatch, getState) => {
    dispatch(setLoading(true));

    try {
      const requestId = nanoid();
      dispatch(setRequestId(requestId));
      debug(`getting entities (requestId: ${requestId})`);

      const entities = await dispatch(getEntitiesRemote());

      const currentRequestId = requestIdSelector(getState());
      if (currentRequestId !== requestId) {
        debug(`debounced (current: ${currentRequestId}, old: ${requestId})`);
        return;
      }

      dispatch(setEntities(entities));
      dispatch(setError(null));
      debug(`got entities (requestId: ${requestId})`, entities);
    } catch (e) {
      dispatch(setError(e));
      debug('error', e);
    }

    dispatch(setLoading(false));
  };

  const actions = {
    [camelCase(`get ${name} entities`)]: getEntities,
  };

  const loadingReducer = createReducer(false, {
    [setLoading]: (state, action) => action.payload,
  });

  const errorReducer = createReducer(null, {
    [setError]: (state, action) => action.payload,
  });

  const requestIdReducer = createReducer(null, {
    [setRequestId]: (state, action) => action.payload,
  });

  const entitiesReducer = createReducer([], {
    [setEntities]: (state, action) => action.payload,
  });

  const reducers = {
    [camelCase(`${name} loading`)]: loadingReducer,
    [camelCase(`${name} error`)]: errorReducer,
    [camelCase(`${name} request id`)]: requestIdReducer,
    [camelCase(`${name} entities`)]: entitiesReducer,
  };

  return {
    constants,
    selectors,
    actions,
    reducers,
  };
};
