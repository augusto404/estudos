/* Converter Celsius em Fahrenheit. */

const temperatura = "10C";

function conversorTemperatura(string) {
    const F = string.toUpperCase().includes("F");
    const C = string.toUpperCase().includes("C");
    const Number = parseInt(string);
    let result;
    let unit;

    if (F) {
        result = (Number - 32) * 5 / 9;
        unit = "Celsius";
    } else if (C) {
        result = Number * 9 / 5 + 32;
        unit = "Fahrenheit";
    } else {
        return Error("Verifique o valor inserido.");
    }
    
    return `O valor ${string} equivale à ${result.toFixed(1)} ${unit}.`
}

console.log(conversorTemperatura(temperatura));