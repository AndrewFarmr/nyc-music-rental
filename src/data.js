import instrument1 from './sample_pictures/instrument1.png';
import instrument2 from './sample_pictures/instrument2.png';
import instrument3 from './sample_pictures/instrument3.png';

let reservations = [
	{
		picture : instrument1, 
		description : 'item 1', 
		contact : 'item_owner1@gmail.com'
	},
     
    {
    	picture : instrument2, 
    	description : 'item 2', 
    	contact : 'item_owner2@gmail.com'
    },

    {
    	picture : instrument3, 
    	description : 'item 3', 
    	contact : 'item_owner3@gmail.com'
    }
 ];

export function getReservations() {
	return reservations;
}