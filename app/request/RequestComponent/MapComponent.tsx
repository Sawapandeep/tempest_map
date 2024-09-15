'use client';
import finish from '@/public/Images/finish.png';
import possibility from '@/public/Images/possibility.png'; // Ensure this is the correct path to the image
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';

const defaultTarget = { lat: 32.26325, lng: 75.59422 };

const MapComponent: React.FC = () => {
    const options = {
        mapId: "5e138c66d669e81a",
        mapTypeControl: true,
        zoomControl: true,
        fullscreenControl: false,
        clickableIcons: true,
        scrollwheel: true,
        streetViewControl: false,
    };

    //?info window
    const [IsInfoWindowFOpen, setIsInfoWindowFOpen] = useState(false);
    //?on click  function
    //@ts-ignore
    function MarkerClicked(event) {
        console.log("marker clicked");
        console.log(event.latLng.lat());
        console.log(event.latLng.lng());
        setIsInfoWindowFOpen(true);

    }
    //?on drag end function 
    //@ts-ignore
    function MarkerFinishDrag(event) {
        console.log("marker drageed ", event);
        console.log("the final lattitude:", event.latLng.lat());
        console.log("the final longitude:", event.latLng.lng());

    }

    // Load the Google Maps API
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    });

    // Only create the pinIcon once the Google Maps API has been loaded
    const pinIcon = useMemo(() => {
        if (!isLoaded) return null;

        return {
            url: finish.src, // Use correct path to imported image
            scaledSize: new google.maps.Size(50, 50), // Now google is defined
        };
    }, [isLoaded]);

    if (!isLoaded) {
        return <div><span className="loading loading-infinity bg-white loading-lg"></span></div>;
    }

    return (
        <div className="h-[88vh] max-w-[90vw] rounded-3xl overflow-hidden mx-auto">
            <GoogleMap
                mapContainerClassName="h-[100%] w-[100%]"
                options={options}
                zoom={14}
                center={defaultTarget}
                onClick={() => setIsInfoWindowFOpen(false)}
            >
                {/* Only render the marker if the pinIcon is available */}
                {/* @ts-ignore */}
                <MarkerF
                    position={defaultTarget}
                    visible
                    // @ts-ignore
                    draggable icon={pinIcon}
                    onClick={MarkerClicked}
                    onDragEnd={MarkerFinishDrag}
                >
                    //*info window should always be a child of Marker Component
                    {IsInfoWindowFOpen && (<InfoWindowF
                        onCloseClick={() => setIsInfoWindowFOpen(false)}
                        position={defaultTarget}>
                        <div className='w-80 p-2 text-[#0c0c0c]'>
                            <div className="flex items-center mb-2 space-x-5 ">
                                <Image src={possibility} alt="default image" className='w-14 h-14 rounded-lg' />
                                <div>
                                    <h3 className='text-xl font-bold'>Some Title</h3>
                                    <p>Some Subtitle </p>
                                </div>
                            </div>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec libero odio, tempor eget diam sed, dapibus sodales est.
                                Suspendisse potenti. Curabitur in pulvinar enim, congue venenatis est</p>
                        </div>
                    </InfoWindowF>)}
                </MarkerF>

            </GoogleMap>
        </div>
    );
};

export default MapComponent;
