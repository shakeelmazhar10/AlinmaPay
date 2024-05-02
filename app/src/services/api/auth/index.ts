import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiEndpoints } from '@utils/index';
import Config from 'react-native-config';
import { requestType } from '@utils/enums';
import { queryParam } from '..';
import { AuthApiResponse } from './types';

const baseUrl = Config.BASE_URL; // Set baseurl from config

export const AUTH_REDUCER_KEY = 'checkIfUserExists';
export const authApi = createApi({
  reducerPath: AUTH_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl
  }),
  endpoints: (builder) => ({
    checkIfUserExists: builder.query<AuthApiResponse, string>({
      query: (payload) =>
        queryParam({
          url: apiEndpoints.GET_ENCRYPTION_KEYS,
          method: requestType.POST,
          body: payload
        })
    })
  })
});

export const { useCheckIfUserExists } = authApi;
