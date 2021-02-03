import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYnVqb3NhIiwiYSI6ImNra25ldzBlZDEzdnYydnBkZXNob2Q1a3cifQ.VQsp-0l_cbGfhyGnLnJigA";

const initialPoint = {
  lng: 5,
  lat: 34,
  zoom: 10,
};

export const MapPage = () => {
  const mapDiv = useRef();

  const [, setMap] = useState();

  useEffect(() => {
    const mapbox = new mapboxgl.Map({
      container: mapDiv.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [initialPoint.lng, initialPoint.lat],
      zoom: initialPoint.zoom,
    });
    setMap(mapbox);
  }, []);

  return (
    <>
      <div ref={mapDiv} className="mapContainer" />
    </>
  );
};