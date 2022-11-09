// api connect and call this function
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();
const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital}</p>
            <p>Countries: ${country.continents}</p>
            <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `;
        countriesDiv.appendChild(div)
    });
}


// const loadCountryByName = name =>{
//     const url = `https://restcountries.com/v3.1/name/${name}`;
//     console.log(url);
// }

const loadCountryByName = jodu => {
    const url = `https://restcountries.com/v3.1/name/${jodu}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
}
const displayCountryDetail = country => { 
    console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h4>Country Name: ${country.name.common}</h4>
    <img style="width: 200px" src=${country.flags.png}></img>
    `;
}
