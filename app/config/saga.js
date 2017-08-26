import { takeEvery, select, put, call } from 'redux-saga/effects';
import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, INIT_UPON_STATE, CONVERSION_RESULT, CONVERSION_ERROR } from '../actions/currencies';

const getLatestRate = currency => fetch(`https://api.fixer.io/latest?base=${currency}`);

const fetchLatestConversionRates = function* (action) {
    try {
        let currency = action.currency;
        if (currency === undefined) {
            currency = yield select(state => state.currencies.baseCurrency);
        }
        const reponse = yield call(getLatestRate, currency);
        const result = yield reponse.json();

        if (result.error) {
            yield put({ type: CONVERSION_ERROR, error: result.error });
        } else {
            yield put({ type: CONVERSION_RESULT, result });
        }

    } catch (e) {
        yield put({ type: CONVERSION_ERROR, error: e.message });
    }
}

const rootSaga = function* () {
    yield takeEvery(INIT_UPON_STATE, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
}

export default rootSaga;