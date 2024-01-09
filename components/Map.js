import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import Image from "next/image";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.results?.map((data) => ({
    //returns an object everytime it loops through(direct return ({}))
    longitude: data.lng,
    latitude: data.lat,
  }));

  const center = getCenter(coordinates);

  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/aryanbhosale/clr621bz101gl01pj146jhqj7"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewState}
      onMove={(e) => setViewState(e.viewState)}
    >
      {searchResults.results?.map((data) => (
        <div key={data.lng}>
          <Marker latitude={data.lat} longitude={data.lng} anchor="bottom">
            <p
              role="img"
              onClick={() => setSelectedLocation(data)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {selectedLocation?.lng === data?.lng ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={data?.lat}
              longitude={data?.lng}
            >
              {data?.name}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;

//https://visgl.github.io/react-map-gl/docs/api-reference/marker

// import * as React from 'react';
// import {useRef, useMemo, useCallback} from 'react';
// import Map, {Marker} from 'react-map-gl';
// import mapboxgl from 'mapbox-gl';

// function App() {
//   const markerRef = useRef<mapboxgl.Marker>();

//   const popup = useMemo(() => {
//     return mapboxgl.Popup().setText('Hello world!');
//   }, [])

//   const togglePopup = useCallback(() => {
//     markerRef.current?.togglePopup();
//   }, []);

//   return <>
//     <Map>
//       <Marker longitude={-122.4} latitude={37.8} color="red" popup={popup} ref={markerRef} />
//     </Map>
//     <button onClick={togglePopup}>Toggle popup</button>
//   </>;
// }