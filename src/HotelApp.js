import React from 'react';
import SearchForm from './Components/SearchForm';
import HotelList from './Components/HotelList';
import BookingForm from './Components/BookingForm';
import Confirmation from './Components/Confirmation';


class App extends React.Component {
  state = {
    search: {
      location: '',
      checkIn: '',
      checkOut: '',
      guests: ''
    },
    hotels: [],
    selectedHotel: null,
    booking: {
      firstName: '',
      lastName: '',
      email: ''
    },
    confirmation: null
  };

  handleSearch = search => {
    // code to search hotels based on search criteria
  };

  handleSelectHotel = hotel => {
    this.setState({ selectedHotel: hotel });
  };

  handleBooking = booking => {
    // code to book a hotel
  };

  render() {
    return (
      <div className="app">
        <SearchForm onSearch={this.handleSearch} />
        <HotelList hotels={this.state.hotels} onSelectHotel={this.handleSelectHotel} />
        {this.state.selectedHotel && (
          <React.Fragment>
            <BookingForm onBooking={this.handleBooking} />
            {this.state.confirmation && <Confirmation />}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
