import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import Header from "../components/NavBar";

const Search = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [userLocation, setUserLocation] = useState<google.maps.LatLng | null>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyCY2KwiH47RNsp1S1Bc8EMrTISs-x7wn0s",
        version: 'weekly',
        libraries: ['places'],
      });

      const google = await loader.load();

      const center = new google.maps.LatLng(39.1653, -86.5264);

      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: center,
        zoom: 11,
        mapId: 'DEMO_MAP_ID',
      });

      setMap(map);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            setUserLocation(location);

            map.setCenter(location);

            const userMarker = new google.maps.Marker({
              position: location,
              map: map,
              title: 'Your Location',
            });
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    initMap();
  }, []);

  const handleNearbyHospitals = () => {
    if (!map) {
      console.error('Map is not initialized.');
      return;
    }
  
    if (userLocation) {
      try {
        const google = window.google;

        const request: google.maps.places.PlaceSearchRequest = {
          location: userLocation,
          radius: 5000,
          type: 'hospital',
        };

        const placesService = new google.maps.places.PlacesService(map);
        placesService.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            markers.forEach(marker => marker.setMap(null));

            const newMarkers: google.maps.Marker[] = [];
            results.forEach((result) => {
              if (result.geometry && result.geometry.location) {
                const marker = new google.maps.Marker({
                  position: result.geometry.location,
                  map: map,
                  title: result.name,
                });
                newMarkers.push(marker);

                marker.addListener('click', () => {
                  // Here you can handle marker click events
                  console.log(`Marker clicked: ${result.name}`);
                });
              } else {
                console.error('Geometry location is not defined for this result:', result);
              }
            });

            setMarkers(newMarkers);
          } else {
            console.error('Nearby search request failed:', status);
          }
        });
      } catch (error) {
        console.error('Error searching for nearby hospitals:', error);
      }
    } else {
      console.error('User location is not available.');
    }
  };
  
  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
        onClick={handleNearbyHospitals}
      >
        Find Nearby Hospitals
      </button>
      <div id="map" style={{ height: '600px', marginTop: '20px' }} />
    </div>
  );
};

export default Search;
