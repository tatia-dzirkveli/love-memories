import React, { useMemo, useState } from 'react';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';

const LocationMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [selectedMarker, setSelectedMarker] = useState<{
    position: { lat: number; lng: number };
    name: string;
    description: string;
  } | null>(null);
  
  const locations = useMemo(() => [
    { position: { lat: 43.0423, lng: 42.7205 }, name: "მესტია", description: "სვანეთის მთავარი ქალაქი" },
    // { position: { lat: 42.9986, lng: 42.6977 }, name: "უშგული", description: "საქართველოს ყველაზე მაღალი დასახლებული პუნქტი" },
    // დაამატე სხვა ადგილები საჭიროებისამებრ
  ], []);
  
  const defaultCenter = useMemo(() => ({ lat: 43.0423, lng: 42.7205 }), []);
  
  const mapStyles = {
    height: "500px",
    width: "100%",
  };
  
  if (!isLoaded) return <p>რუკა იტვირთება...</p>;
  
  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        ჩვენი განსაკუთრებული ადგილები 
      </h2>
      <div className="rounded-xl overflow-hidden shadow-xl">
        <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
          {locations.map((location, index) => (
            <Marker 
              key={index} 
              position={location.position}
              onClick={() => setSelectedMarker(location)}
            />
          ))}
          
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.position}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div>
                <h3 className="font-bold text-lg">{selectedMarker.name}</h3>
                <p>{selectedMarker.description}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

export default React.memo(LocationMap);