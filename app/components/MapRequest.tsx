import React from 'react'
import MapComponent from '../provider/RequestComponent/MapComponent'
import TripRequest from '../provider/RequestComponent/TripRequest'
const MapRequest = () => {
    return (
        <div className="flex flex-col align-middle">
            <div className=""><TripRequest /></div>
            <div className="" > <MapComponent /></div >
        </div>
    )
}

export default MapRequest



















//!!!
// 'use client';
// import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
// import React from 'react';
// import finish from '@/public/Images/finish.png'; // Import the image correctly

// const defaultTarget = { lat: 32.26325, lng: 75.59422 };


// const Map: React.FC = () => {

//     const options = {
//         mapId: "5e138c66d669e81a",
//         mapTypeControl: true,
//         zoomControl: true,
//         fullscreenControl: false,
//         clickableIcons: true,
//         scrollwheel: true,
//         streetViewControl: false,
//     };

//     const { isLoaded } = useJsApiLoader({
//         googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
//     });

//     // Pin icon configuration
//     const pinIcon = {
//         url: finish.src, // Use correct path to imported image
//         scaledSize: new google.maps.Size(50, 50), // Use google.maps.Size for scaledSize
//     };

//     if (!isLoaded) {
//         return <div><span className="loading loading-infinity bg-white loading-lg"></span></div>;
//     }

//     return isLoaded ? (
//         <div className="h-[90vh] w-[90vw] rounded-3xl overflow-hidden mx-auto">
//             <GoogleMap
//                 mapContainerClassName='h-[100%] w-[100%]'
//                 options={options}
//                 zoom={14}
//                 center={defaultTarget}
//             >
//                 <MarkerF position={defaultTarget} visible draggable icon={pinIcon} />
//             </GoogleMap>
//         </div>
//     ) : <></>;
// };

// export default Map;

//!!

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