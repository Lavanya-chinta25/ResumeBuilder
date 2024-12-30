import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationSelector = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const API_TOKEN = 'Rzb4zo9HQW4d3J1sy3-qczb2Q5lea5U4cUfY2vwYQSbO9mhpUbJBGXn3OFRfTS28IxQ';  // Replace with your actual API token

  // Fetch all countries on component mount
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data.map(country => ({
          name: country.name.common,
          code: country.cca2,
        })));
      })
      .catch(err => {
        console.error("Error fetching countries", err);
      });
  }, []);

  // Fetch states when a country is selected
  useEffect(() => {
    if (selectedCountry) {
      axios.get(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`, {
        headers: {
          'Authorization': `Bearer ${Rzb4zo9HQW4d3J1sy3-qczb2Q5lea5U4cUfY2vwYQSbO9mhpUbJBGXn3OFRfTS28IxQ}`, // Using the API token for authentication
        },
      })
        .then(response => {
          setStates(response.data);
          setSelectedState('');
          setCities([]);
        })
        .catch(err => {
          console.error("Error fetching states", err);
        });
    }
  }, [selectedCountry]);

  // Fetch cities when a state is selected
  useEffect(() => {
    if (selectedState) {
      axios.get(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states/${selectedState}/cities`, {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`, // Using the API token for authentication
        },
      })
        .then(response => {
          setCities(response.data);
          setSelectedCity('');
        })
        .catch(err => {
          console.error("Error fetching cities", err);
        });
    }
  }, [selectedState]);

  return (
    <div className="container">
      <h1>Select Country, State, and City</h1>

      {/* Country Selection */}
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select
          id="country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {/* State Selection */}
      <div className="form-group">
        <label htmlFor="state">State</label>
        <select
          id="state"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          disabled={!selectedCountry}
        >
          <option value="">Select a state</option>
          {states.map((state) => (
            <option key={state.isoCode} value={state.isoCode}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      {/* City Selection */}
      <div className="form-group">
        <label htmlFor="city">City</label>
        <select
          id="city"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedState}
        >
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p>Selected Country: {selectedCountry}</p>
        <p>Selected State: {selectedState}</p>
        <p>Selected City: {selectedCity}</p>
      </div>
    </div>
  );
};

export default LocationSelector;
