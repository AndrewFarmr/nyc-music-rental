import instrument1 from './sample_pictures/instrument1.png';
import instrument2 from './sample_pictures/instrument2.png';
import instrument3 from './sample_pictures/instrument3.png';

let reservations = [
	{
		id : 0,
		picture : instrument1, 
		description : 'item 1', 
		contact : 'item_owner1@gmail.com',
		reserved : false
	},
     
    {
    	id : 1,
    	picture : instrument2, 
    	description : 'item 2', 
    	contact : 'item_owner2@gmail.com',
    	reserved : false
    },

    {
    	id : 2,
    	picture : instrument3, 
    	description : 'item 3', 
    	contact : 'item_owner3@gmail.com',
    	reserved : false
    }
 ];

export function addReservation(new_image, new_description, new_contact) {
	let max_id = 0;
	for (var reservation of reservations) {
		max_id = Math.max(max_id, reservation.id)
	}
	reservation = {
		id: max_id + 1,
		picture: new_image,
		description: new_description,
		contact: new_contact,
		reserved: false
	}
	reservations.unshift(reservation);
};

export function getReservations() {
	return reservations;
};

export function updateReservation(id, reserved) {
	for (var reservation of reservations) {
		if (reservation.id === id) {
			reservation.reserved = reserved
		}
	}
}