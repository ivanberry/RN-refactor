import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY, swapCurrency, changeCurrencyAmount } from '../actions/currencies';

const initialState = {
    baseCurrency: 'CNY',
    quoteCurrency: 'USD',
    amount: 100,
    conversions: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENCY_AMOUNT:
            return {
                ...state,
                amount: action.amount,
            };
        case SWAP_CURRENCY:
        default:
            return state;    
    }
};

console.log(initialState);
console.log('swap',reducer(initialState, swapCurrency()));
console.log('change',reducer(initialState, changeCurrencyAmount('123')));

export default reducer;


