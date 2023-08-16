import React, { useEffect, useState } from "react";
import Select from "react-select";
import { City } from "country-state-city";

const LocationSelector = ({ selectedCity, setSelectedCity }) => {
  const colombiaIsoCode = "CO"; // Código ISO para Colombia

  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    const allCities = City.getAllCities();
    const colombianCities = allCities.filter(
      (city) => city.countryCode === colombiaIsoCode
    );
    setCityData(colombianCities);
  }, []);

  const handleCityChange = (option) => {
    setSelectedCity(option);
  };

  const cityOptions = cityData.map((city) => ({
    value: city.name,
    label: city.name,
  }));

  return (
    <div className="w-1/2">
      <label className="block font-medium text-gray-700 mb-1">Ciudad:</label>
      <Select
        options={cityOptions}
        value={selectedCity}
        onChange={handleCityChange}
        placeholder="Seleccione una ciudad..."
        isSearchable={true}
      />
    </div>
  );
};

export default LocationSelector;
