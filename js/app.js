// Api

const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => showCountries(data))
}

const showCountries = countries => {
    console.log(countries);
    const countriesHTML = countries.map(country => getHTML(country));
    console.log(countriesHTML);
}

const getHTML = country => {
    return `
        <div>
            <h3>Country name : ${country.name.common}</h3>
        </div>
    
    `
}

loadCountries();