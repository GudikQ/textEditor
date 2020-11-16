import {
  GET_SYNONYMS_PENDING,
  GET_SYNONYMS_DONE,
  GET_SYNONYMS_ERROR,
  GET_WORDS_PENDING,
  GET_WORDS_DONE,
  GET_WORDS_ERROR, CHANGE_WORDS,
} from './action-types'

export const getSynonyms = selectedWordText => ({
  type: GET_SYNONYMS_PENDING,
  payload: selectedWordText
});

export const getSynonymsDone = synonyms => ({
  type: GET_SYNONYMS_DONE,
  payload: synonyms
});

export const getSynonymsError = error => ({
  type: GET_SYNONYMS_ERROR,
  payload: error
});

export const getWords = () => ({
  type: GET_WORDS_PENDING
});

export const getWordsDone = words => ({
  type: GET_WORDS_DONE,
  payload: words
});

export const getWordsError = error => ({
  type: GET_WORDS_ERROR,
  payload: error
});

export const changeWords = words => ({
  type: CHANGE_WORDS,
  payload: words
})