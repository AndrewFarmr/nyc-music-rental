import React from 'react';

import instrument1 from './sample_pictures/instrument1.png';
import instrument2 from './sample_pictures/instrument2.png';
import instrument3 from './sample_pictures/instrument3.png';

import './App.css';

class Reservation extends React.Component {
  render() {
    return (
      <div className="Reservation">
        <div className="Reservation-picture">
          <img src={this.props.picture} className="Instrument-logo" />
        </div>
        <div className="Reservation-description">
          {this.props.description}
        </div>
        <div className="Reservation-contact">
          {this.props.contact}
        </div>
      </div>
    );
  }
}

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [
        {picture : instrument1, 'description' : 'item 1', 'contact' : 'item_owner1@gmail.com'},
        {picture : instrument2, 'description' : 'item 2', 'contact' : 'item_owner2@gmail.com'},
        {picture : instrument3, 'description' : 'item 3', 'contact' : 'item_owner3@gmail.com'}],
    };
  };
  render() {
    const reservationItems = this.state.reservations.map((r) =>
      <Reservation 
        picture={r.picture} 
        description={r.description}
        contact={r.contact}
      />
    );
    return (
      reservationItems
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
         <div class="ui-bar">
          <h1>NYC Instruments Rental </h1>
        </div>
      </header>
      <SearchPage />
    </div>
  );
}

export default App;