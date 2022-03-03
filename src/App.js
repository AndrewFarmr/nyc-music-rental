import React from 'react';
import { getReservations } from  './data'
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
        <button onClick={() => this.props.onClick()}>Reserve</button>
      </div>
    );
  }
}

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: getReservations(),
    };
  };

  handleReservationClick(i) {
    console.log("handleReservationClick")
    var reservations_copy = this.state.reservations.slice();
    reservations_copy[i].contact = "N/A. Reserved.";
    this.setState({reservations: reservations_copy});
  }

  render() {
    // handleReservationClick={() => this.handleReservationClick(i)}
    var reservationItems = [];
    for (let i = 0; i < this.state.reservations.length; i++) {
      const reservationIth = this.state.reservations[i];
      // Transform reservations from state to React UI.
      const reservationUI = <Reservation 
        picture = {reservationIth.picture}
        description={reservationIth.description}
        contact={reservationIth.contact}
        onClick={() => this.handleReservationClick(i)}
      />;
      reservationItems.push(reservationUI);
    }
    // const reservationItems = this.state.reservations.map((r) =>
    //   <Reservation 
    //     picture={r.picture} 
    //     description={r.description}
    //     contact={r.contact}
    //   />
    // );
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