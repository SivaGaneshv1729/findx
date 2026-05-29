import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';

const API_BASE_URL = 'http://localhost:8080/api';

const MapPage = () => {
    const [plots, setPlots] = useState([]);
    const position = [17.0425, 81.8228]; // Default position

    useEffect(() => {
        fetch(`${API_BASE_URL}/plots`)
        .then(res => res.json())
        .then(data => setPlots(data))
        .catch(err => console.error("Failed to fetch plots:", err));
    }, []);

    return (
        <motion.div 
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <MapContainer center={position} zoom={15} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {plots.map((plot) => (
                    <Marker key={plot.id} position={[plot.lat, plot.lng]}>
                        <Popup>
                            <div>
                                <h3>{plot.title}</h3>
                                <p>{plot.price}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </motion.div>
    );
};

export default MapPage;
