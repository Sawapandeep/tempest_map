'use client';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';
// Import Library type from @googlemaps/js-api-loader

// Use the Library type from @googlemaps/js-api-loader
const defaultTarget = { lat: 32.26325, lng: 75.59422 };

type GoogleMapInstance = google.maps.Map;
const Map: React.FC = () => {


    const options = {
        mapId: "5e138c66d669e81a",
        mapTypeControl: false,
    }
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
    })


    if (!isLoaded) return <div><span className="loading loading-infinity bg-white loading-lg"></span></div>;


    return isLoaded ? (
        <div className="h-[90vh] w-[90vw]  rounded-3xl overflow-hidden mx-auto">
            <GoogleMap
                mapContainerClassName='h-[100%] w-[100%]'
                options={options}
                zoom={14}
                center={defaultTarget}
            // onLoad={onLoad}
            // onUnmount={onUnmount}
            >
                {/* <Marker position={defaultTarget} /> */}
            </GoogleMap>
        </div >


    ) : <></>

};

export default Map;


// import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
// import { Library } from '@react-google-maps/api/dist/utils/make-load-script-url'
// import React from 'react';

// const libraries: Library[] = ['places'];

// const Map: React.FC = () => {
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
//         libraries,
//     });
//     const defaultTarget = { lat: 32.26325, lng: 75.59422 };

//     if (isLoaded) return <div><span className="loading loading-infinity loading-lg"></span></div>
//     return (
//         <GoogleMap
//             mapContainerClassName='h-[60vh] w-[60vw]'
//             zoom={14}
//             center={defaultTarget}>
//             <Marker position={defaultTarget} />
//         </GoogleMap>
//     );
// };

// export default Map