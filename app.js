// One euro is:
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

// Euro → Dollar
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs["USD"];
};

// Dollar → Yen
const fromDollarToYen = function(dollars) {
    let euros = dollars / oneEuroIs["USD"];  // USD → EUR
    return euros * oneEuroIs["JPY"];         // EUR → JPY
};

// Yen → Pound
const fromYenToPound = function(yen) {
    let euros = yen / oneEuroIs["JPY"];      // JPY → EUR
    return euros * oneEuroIs["GBP"];         // EUR → GBP
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };