import { createSelector } from '@reduxjs/toolkit';

export const selectSynonyms = createSelector(
  (state) => state,
  (state) => state.synonyms,
);

export const selectSynonymsError = createSelector(
  (state) => state,
  (state) => state.synonymsError,
);

export const selectIsSynonymsLoading = createSelector(
  (state) => state,
  (state) => state.isSynonymsLoading,
);

export const selectWords = createSelector(
  (state) => state,
  (state) => state.words,
);

export const selectWordsError = createSelector(
  (state) => state,
  (state) => state.wordsError,
);