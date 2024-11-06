'use client';

import React, { useRef } from 'react';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';

interface GooglePlacesAutocompleteProps {
  onPlaceSelected: (address: string) => void;
}

const libraries: ("places")[] = ["places"];

const GooglePlacesAutocomplete: React.FC<GooglePlacesAutocompleteProps> = ({ onPlaceSelected }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();
    if (place?.formatted_address) {
      onPlaceSelected(place.formatted_address);
    }
  };

  if (loadError) return <p>Error loading Google Maps API</p>;
  if (!isLoaded) return <p>Loading...</p>;

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <input
        type="text"
        placeholder="Enter your address"
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />
    </Autocomplete>
  );
};

export default GooglePlacesAutocomplete;
