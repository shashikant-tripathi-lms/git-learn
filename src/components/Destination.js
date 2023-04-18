import React, { useState } from 'react'
import "./Destination.css"
import { Button } from 'react-bootstrap'

function Destination() {
    const [location, setLocation] = useState([
        {
            location: 'ahmedabad',
            shortName:  'AMD',
            airportName: 'Sardar Vallabh Bhai Patel airport'
        },{
            location: 'Bengaluru',
            shortName:  'BLR',
            airportName: 'Banglaluru airport'
        },{
            location: 'Mumbai',
            shortName:  'BMB',
            airportName: 'chhatrapati shivaji maharaj airport'
        }
    ])
    return (
        <div className='destination-name'>
            {location.map(location => 
                <>
                <div>
                <Button variant="secondary">{location.shortName}</Button>
            </div>
            <div>
                <div>{location.location}</div>
                <div>{location.airportName}</div>
            </div>
            </>
            )}
            

        </div>
    )
}

export default Destination