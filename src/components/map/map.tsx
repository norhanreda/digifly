"use client";
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./map.css"
import { useSelector } from "react-redux";
interface User {
  id: number;
  FirstName: string;
  LastName: string;
  Phone: string;
  Email: string;
}
interface State {
  users: User[];
  language: string;
  error: string | null;
}

const Map: React.FC = () => {
  const language:string = useSelector((state: State) => state.language); 
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
          iconUrl: 'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png',
          iconSize: [32, 32], // icon size
          iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
        });

        if (!marker) {
          marker = L.marker([30.061748208037105, 31.337524913021518], { icon: customIcon }).addTo(map); 
          let tooltipContent = "<div class='loc'><p><span class='digi'>Digi</span><span class='fly'>fly</span> Company</p><p>welcomes You</p></div>";
          if(language==='en') {
             tooltipContent = "<div class='loc'><p><span class='digi'>Digi</span><span class='fly'>fly</span> Company</p><p>welcomes You</p></div>";
          }
          else{
            tooltipContent = "<div class='loc' dir='rtl' > شركة <span class='digi'>ديجى</span>  <span class='fly'>فلاى </span>ترحب بكم </div>";
            
            
          }
      
          marker.bindTooltip(tooltipContent, {
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