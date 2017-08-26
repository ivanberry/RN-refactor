import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY, CHANGE_BASE_CURRENCY, CHANGE_QUOTE_CURRENCY, INIT_UPON_STATE, CONVERSION_ERROR, CONVERSION_RESULT } from '../actions/currencies';

const initialState = {
    baseCurrency: 'CNY',
    quoteCurrency: 'USD',
    amount: 100,
    conversions: {},
};

const setConversions = (state, action) => {
    let conversion = {
        isFetching: true,
        data: '',
        rates: {},
    };

    if (state.conversions[action.currency]) {
        conversion = state.conversions[action.currency];
    };

    return {
        ...state.conversions,
        [action.currency]: conversion,
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENCY_AMOUNT:
            return {
                ...state,
                amount: action.amount || 0,
            };
        case SWAP_CURRENCY:
            return {
                ...state,
                baseCurrency: state.quoteCurrency,
                quoteCurrency: state.baseCurrency,
            };
        case CHANGE_BASE_CURRENCY:
            return {
                ...state,
                baseCurrency: action.currency,
                conversions: setConversions(state, action),
            }
        case CHANGE_QUOTE_CURRENCY:
            return {
                ...state,
                quoteCurrency: action.currency,
                conversions: setConversions(state, action),
            }
        case INIT_UPON_STATE:
            return {
                ...state,
                conversions: setConversions(state, {currency: state.baseCurrency}),
            }
        case CONVERSION_RESULT:
            return {
                ...state,
                baseCurrency: action.result.base,
                conversions: {
                    ...state.conversions, //keep the prev conversion data.
                    [action.result.base]: {
                        isFetching: false,
                        ...action.result,
                    }
                }
            }
        case CONVERSION_ERROR:
        default:
            return state;
    }
};
export default reducer;


