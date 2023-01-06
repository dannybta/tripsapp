import React from 'react'
import { CardItem } from '../CardItem';
import { CardsGrid } from '../CardsGrid';

const TRIPS_URL = 'http://localhost:3001/api/v1/trips'

function App() {

    const [trips, setTrips] = React.useState([])
    const [tripsAreFetched, setTripsAreFetched] = React.useState(false)

    React.useEffect(() => {
        const fetchTripsData = async () => {
            try {
                let tripsResponse = await fetch(TRIPS_URL)
                if (tripsResponse.status !== 200) {
                    setTripsAreFetched(false)
                } else {
                    trips = await tripsResponse.json()
                    setTripsAreFetched(true)
                }
                setTrips(trips)
            } catch (e) {
                window.alert('error fetching trips')
                setTripsAreFetched(false)
            }
        };
        let trips
        fetchTripsData()
    }, []);
    return (
        <React.Fragment>
            <CardsGrid >
                {tripsAreFetched && trips.map(trip => (<CardItem key={trip.name} name={trip.name} price={trip.price} currency={trip.currency} />))}
            </CardsGrid>
        </React.Fragment >
    )
}

export default App 