import React from 'react';
import { getReservations, updateReservation } from  './data';

class Reservation extends React.Component {

  render() {
    let action_button;
    if (this.props.reserved) {
      action_button = <button onClick={() => this.props.onClick()}>Release</button>
    } else {
      action_button = <button onClick={() => this.props.onClick()}>Reserve</button>
    }
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
        {action_button}
      </div>
    );
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: getReservations(),
    };
  };

  handleReservationClick(id, reserved_before) {
    if (reserved_before) {
      console.log("Releasing item: " + id);
      updateReservation(id, false);
    } else {
      console.log("Reserving item: " + id);
      updateReservation(id, true);
    }
    // var reservations_copy = this.state.reservations.slice();
    // reservations_copy[i].contact = "N/A. Reserved.";
    this.setState({reservations: getReservations()});
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
        reserved={reservationIth.reserved}
        onClick={() => this.handleReservationClick(
          reservationIth.id, reservationIth.reserved)}
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

export default Search;