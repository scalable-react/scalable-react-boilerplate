import { createSelector } from 'reselect';

export const selectLanding = () => state => state.landing;

export const selectIsLoading = createSelector(
  selectLanding(),
  landing => landing.isLoading,
);

export const selectError = createSelector(
  selectLanding(),
  landing => landing.error,
);