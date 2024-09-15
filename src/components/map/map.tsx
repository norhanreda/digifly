"use client";
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./map.css"

const Map: React.FC = () => {
  useEffect(() => {
    let map: L.Map | undefined;
    let marker: L.Marker | undefined;

    if (typeof window !== 'undefined') {
      // Check if the map is already initialized
      if (!map) {
        map = L.map('map').setView([30.061748208037105, 31.337524913021518], 20); 
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);
    
        const customIcon = L.icon({
          iconUrl: '/leaflet/marker-icon.png',
          iconRetinaUrl: '/leaflet/marker-icon-2x.png',
          shadowUrl: '/leaflet/marker-shadow.png',
          iconSize: [32, 32], // icon size
          iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
        });

        if (!marker) {
          marker = L.marker([30.061748208037105, 31.337524913021518], { icon: customIcon }).addTo(map); 
      
          marker.bindTooltip("<div class='loc'><p><span class='digi'>Digi</span><span class='fly'>fly</span> Company </p><p>welcomes You</p></div>", {
            direction: 'top'
          }).openTooltip();
        }
      }
    }

    return () => {
      // Clean up the map instance when the component unmounts
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <div>
      <div id="map" className='map' />
    </div>
  );
};

export default Map;