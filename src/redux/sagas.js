import { put, takeEvery } from 'redux-saga/effects'

import { GET_SYNONYMS_PENDING, GET_WORDS_PENDING } from './action-types'
import apiClient from '../services/axios-service'
import {
  getSynonymsDone,
  getSynonymsError,
  getWordsDone,
  getWordsError
} from './actions'
import { mockText } from '../services/text-service'

function* handleGetSynonyms(action) {
  const synonyms = action.payload
  try {
    const { data } = yield apiClient.get(`words?rel_syn=${synonyms}`)
    const listOfSynonyms = data.map(x => x.word)
    yield put(getSynonymsDone(listOfSynonyms))
  } catch (error) {
    yield put(getSynonymsError(error))
  }
}

function* handleGetWords() {
  try {
    const wordsArray = mockText.split(' ')
    const words = wordsArray.map(word => ({
      word: word,
      bold: false,
      underlined: false,
      itallic: false,
    }))
    yield put(getWordsDone(words))
  } catch (error) {
    yield put(getWordsError(error))
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_SYNONYMS_PENDING, handleGetSynonyms)
  yield takeEvery(GET_WORDS_PENDING, handleGetWords)
}