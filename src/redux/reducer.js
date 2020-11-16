import { createReducer } from '@reduxjs/toolkit';

import {
  GET_SYNONYMS_PENDING,
  GET_SYNONYMS_DONE,
  GET_SYNONYMS_ERROR,
  GET_WORDS_DONE,
  GET_WORDS_ERROR, CHANGE_WORDS,
} from './action-types'

const initialState = {
  synonyms: [],
  synonymsError: null,
  isSynonymsLoading: false,
  words: [],
  wordsError: null,
};

export default createReducer(initialState, {
  [GET_SYNONYMS_PENDING]: (state) => ({
    ...state,
    isSynonymsLoading: true,
    synonymsError: null
  }),
  [GET_SYNONYMS_DONE]: (state, { payload }) => ({
    ...state,
    synonyms: payload,
    isSynonymsLoading: false,
    synonymsError: null
  }),
  [GET_SYNONYMS_ERROR]: (state, { payload }) => ({
    ...state,
    synonyms: null,
    isSynonymsLoading: false,
    synonymsError: payload
  }),
  [GET_WORDS_DONE]: (state, { payload }) => ({
    ...state,
    words: payload,
    wordsError: null
  }),
  [GET_WORDS_ERROR]: (state, { payload }) => ({
    ...state,
    synonyms: null,
    wordsError: payload
  }),
  [CHANGE_WORDS]: (state, {payload}) => ({
    ...state,
    words: payload,
  })
});