import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {languages} from '@utils/enums';

/**
 * Interface representing the initial state shape for localisation settings.
 */
interface LocalisationInitialStateProps {
  localisationFlag: string;
}

/**
 * Initial state for the localisation slice.
 */
const initialState: LocalisationInitialStateProps = {
  localisationFlag: languages.EN,
};

/**
 * Slice for managing localisation settings in the Redux store.
 */
export const localisationSlice = createSlice({
  name: 'localisationSlice',
  initialState,
  reducers: {
    /**
     * Reducer function for setting the localisation flag in the state.
     * @param state - The current state of the localisation slice.
     * @param action - The action containing the localisation flag payload.
     */
    setLocalisation(state, action: PayloadAction<string>) {
      state.localisationFlag = action.payload;
    },
  },
});

/**
 * Action creator for setting the localisation flag.
 */
export const { setLocalisation } = localisationSlice.actions;

/**
 * Reducer function for the localisation slice.
 */
export default localisationSlice.reducer;
