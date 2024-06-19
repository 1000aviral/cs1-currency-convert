import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_d0Vm4Z4SLHkqsSoD7ivteknFWqaruXFu2kDCtxJ9');

//convertCurrency("INR", "USD", 3);

export async function convertCurrency(fromCurrency, toCurrency, units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    //console.log(multiplier);
    return multiplier*units;
}