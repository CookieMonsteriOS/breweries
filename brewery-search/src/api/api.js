
//GET- Brewery By Name
const getBreweries =(method, searchTerm) => {
    return makeRequest(method,searchTerm);
}

//Make Request and covert response to JSON
const makeRequest=(method, params)=> {
    const queryString = 'https://api.openbrewerydb.org/breweries/search?query=' + params;
    const options = {mode: 'cors', method: method, headers: new Headers({'Content-Type': 'application/json'}),};
    return fetch(queryString, options).then(response => response.json());

}

//Export workflow functions only
export default {getBreweries}