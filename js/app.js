// Api

const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => showCountries(data))
}

const showCountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getHTML(country));
    const container = document.getElementById("container");
    container.innerHTML = countriesHTML.join(" ");
    console.log(countriesHTML);
}

const getHTML = country => {
    return `
        <div>
            <h3>Country name : ${country.name.common}</h3>
            <h4>Capital name : ${country.capital}</h4>
            <img src="${country.flags.png}"
        </div>
    
    `
}

loadCountries();