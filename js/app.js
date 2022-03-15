// Api

const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => showCountries(data))
}

const showCountries = countries => {
    const countriesHTML = countries.map(country => getHTML(country));
    const countryContainer = document.getElementById("container");
    countryContainer.innerHTML = countriesHTML.join(" ");
}
loadCountries();

// Original
/* const getHTML = country => {
    return `
    <div class="country">
        <h3>Country name : ${country.name.common}</h3>
        <h4>Capital name : ${country.capital}</h4>
        <img src="${country.flags.png}">
    </div>
    
    `
} */

// Destructuring method-1
/* const getHTML = country => {
    const { name, capital, flags } = country;
    return `
    <div class="country">
        <h3>Country name : ${name.common}</h3>
        <h4>Capital name : ${capital}</h4>
        <img src="${flags.png}">
    </div>
    
    `
} */

// Destructuring method-2
const getHTML = ({ name, capital, flags }) => {
    return `
    <div class="country">
        <h3>Country name : ${name.common}</h3>
        <h4>Capital name : ${capital}</h4>
        <img src="${flags.png}">
    </div>
    
    `
}

