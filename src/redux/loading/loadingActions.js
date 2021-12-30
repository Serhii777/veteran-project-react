/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const onLoading = createAction('ON_LOADING');
const offLoading = createAction('OFF_LOADING');

export default {
  onLoading,
  offLoading,
};
