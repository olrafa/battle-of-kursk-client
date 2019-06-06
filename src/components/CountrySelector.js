import React, { Component } from 'react';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


export default class CountrySelector extends Component {
  state = {
    country: '',
  };

  selectCountry(val) {
    this.setState({ country: val });
  }

  render() {
    const { country } = this.state;
    return (
      <div>
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} />
      </div>
    );
  }
}