import { encryptionApi } from '@api/encryption';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Reducer } from 'redux';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import { RESET_STATE_ACTION_TYPE } from './actions/resetState';
import { unauthenticatedMiddleware } from './middleware/unauthenticatedMiddleware';
import localisationSlice from './slices/localisationSlice';
import themeSlice from './slices/themeSlice';

/**
 * Object containing all the reducers used in the application.
 */
const reducers = {
  [encryptionApi.reducerPath]: encryptionApi.reducer,
  localisationReducer: localisationSlice,
  themeReducer: themeSlice
};

/**
 * Combined reducer created using combineReducers from redux.
 */
const combinedReducer = combineReducers<typeof reducers>(reducers);

/**
 * Root reducer function that handles the global state reset action.
 */
export const rootReducer: Reducer<RootState> = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }

  return combinedReducer(state, action);
};

/**
 * Configuration for persisting the Redux store.
 */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['localisationSlice', 'themeSlice']
};

/**
 * Persisted reducer created using persistReducer from redux-persist.
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Redux store instance configured using configureStore from redux-toolkit.
 */
export const store = configureStore({
  reducer: persistedReducer,

  /**
   * Middleware setup for the Redux store.
   */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat([unauthenticatedMiddleware, encryptionApi.middleware])
});

/**
 * Setup listeners for Redux toolkit query.
 */
setupListeners(store.dispatch);

/**
 * Persistor instance for persisting the Redux store.
 */
export const persistor = persistStore(store);

/**
 * Type representing the dispatch function of the Redux store.
 */
export type AppDispatch = typeof store.dispatch;

/**
 * Type representing the root state of the Redux store.
 */
export type RootState = ReturnType<typeof combinedReducer>;

/**
 * Hook for accessing the typed dispatch function of the Redux store.
 */
export const useTypedDispatch = () => useDispatch<AppDispatch>();

/**
 * Hook for accessing the typed selector function of the Redux store.
 */
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
