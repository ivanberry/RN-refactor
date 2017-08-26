export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
export const CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY';
export const CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY';
export const INIT_UPON_STATE = 'INIT_UPON_STATE';

export const CONVERSION_RESULT = 'CONVERSION_RESULT';
export const CONVERSION_ERROR = 'CONVERSION_ERROR';

export const swapCurrency = () => ({
    type: SWAP_CURRENCY,
});

export const changeCurrencyAmount = amount => ({
    type: CHANGE_CURRENCY_AMOUNT,
    amount: parseFloat(amount),
});

export const changeBaseCurrency = currency => ({
    type: CHANGE_BASE_CURRENCY,
    currency, 
});

export const changeQuoteCurrency = currency => ({
    type: CHANGE_QUOTE_CURRENCY,
    currency, 
});

export const getInitialConversions = () => ({
    type: INIT_UPON_STATE,
});