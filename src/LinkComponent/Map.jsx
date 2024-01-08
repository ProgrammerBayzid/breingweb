import  { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import { useMemo } from "react";
import axios from "axios";

const Map = () => {
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: "AIzaSyBqybgfOd1_p1YKH1nOPOuR_C8Nbfv3kQ0",
//       });
// const location ="chattogram"

//     const center = useMemo(()=>({lat: 23.8041, lng: 90.4152}),[])
const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBqybgfOd1_p1YKH1nOPOuR_C8Nbfv3kQ0", // Replace with your Google Maps API key
  });

  const location = "sylhet";

  const [cente, setCenter] = useState({ lat: 23.8041, lng: 90.4152 });
  const [markerPosition, setMarkerPosition] = useState(null);


  useEffect(() => {
    // Use the Google Maps Geocoding API to convert location to coordinates
    axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          address: location,
          key: "AIzaSyBqybgfOd1_p1YKH1nOPOuR_C8Nbfv3kQ0", // Replace with your Google Maps API key
        },
      })
      .then((response) => {
        const results = response.data.results;
        if (results && results.length > 0) {
          const { lat, lng } = results[0].geometry.location;
          setCenter({ lat, lng });
          setMarkerPosition({ lat, lng }); // Set the marker position

        } else {
          console.error("Location not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching location data", error);
      });
  }, [location]); 
    return (
        <div>
        <div className="flex justify-center">
          {!isLoaded ? (
            <div>Loading...</div>
          ) : (
            <div className="w-full h-[400px]">
              <GoogleMap zoom={10} center={cente} mapContainerClassName="w-full h-[400px]">
              {markerPosition && (
                <Marker position={markerPosition} /> // Add the marker at the specified position
              )}
              </GoogleMap>
            </div>
          )}
        </div>
      </div>
    );
};

export default Map;