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
const getHTML = country => {
    return `
    <div class="country">
        <h3>Country name : ${country.name.common}</h3>
        <h4>Capital name : ${country.capital}</h4>
        <img src="${country.flags.png}">
    </div>
    
    `
}

