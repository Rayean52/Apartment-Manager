import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt } from "react-icons/fa";

// Custom map icon
const locationIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
});

const ApartmentLocation = () => {
    const gulshanCoords = [23.7925, 90.4078];

    const openInGoogleMaps = () => {
        window.open("https://www.google.com/maps/place/Gulshan,+Dhaka", "_blank");
    };

    return (
        <section className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden bg-gradient-to-br from-[#f4f7fa] via-[#f7faff] to-[#ffffff]">
            {/* Gradient animation background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(129,230,217,0.15)_0%,transparent_40%)] pointer-events-none z-0"></div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto relative z-10"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT: Title & Description */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                            Apartment Location
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 mb-6 font-light max-w-xl">
                            Located in the heart of Gulshan, Dhaka – a prime neighborhood known for its business hubs, embassies, schools, and lifestyle convenience. Easily reachable via all major transport routes.
                        </p>

                        {/* Nearby places */}
                        <ul className="text-gray-600 text-base space-y-2 mb-6">
                            <li><FaMapMarkerAlt className="inline-block mr-2 text-blue-500" />Gulshan Circle 1 – 3 mins</li>
                            <li><FaMapMarkerAlt className="inline-block mr-2 text-blue-500" />United Hospital – 6 mins</li>
                            <li><FaMapMarkerAlt className="inline-block mr-2 text-blue-500" />Gulshan Lake Park – 4 mins</li>
                            <li><FaMapMarkerAlt className="inline-block mr-2 text-blue-500" />Banani – 5 mins</li>
                        </ul>

                        {/* Google Maps Button */}
                        <button
                            onClick={openInGoogleMaps}
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-all"
                        >
                            Open in Google Maps
                        </button>
                    </div>

                    {/* RIGHT: Map */}
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[400px]">
                        <MapContainer
                            center={gulshanCoords}
                            zoom={20}
                            scrollWheelZoom={false}
                            whenCreated={(map) => {
                                // Enable scroll zoom when mouse enters the map
                                map.getContainer().addEventListener("mouseenter", () => {
                                    map.scrollWheelZoom.enable();
                                });

                                // Disable scroll zoom when mouse leaves
                                map.getContainer().addEventListener("mouseleave", () => {
                                    map.scrollWheelZoom.disable();
                                });
                            }}
                            style={{ width: "100%", height: "100%" }}
                            zoomControl={false} // We'll place zoom manually
                        >
                            {/* Tile Layer */}
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            {/* Marker */}
                            <Marker position={gulshanCoords} icon={locationIcon}>
                                <Popup>Our Building, Gulshan, Dhaka</Popup>
                            </Marker>

                            {/* Zoom controls (bottom-right) */}
                            <div className="leaflet-bottom leaflet-right z-[9999]">
                                <div className="leaflet-control-zoom leaflet-bar">
                                    <button
                                        onClick={() => {
                                            const map = document.querySelector(".leaflet-container")._leaflet_map;
                                            map.zoomIn();
                                        }}
                                        className="leaflet-control-zoom-in"
                                        aria-label="Zoom in"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => {
                                            const map = document.querySelector(".leaflet-container")._leaflet_map;
                                            map.zoomOut();
                                        }}
                                        className="leaflet-control-zoom-out"
                                        aria-label="Zoom out"
                                    >
                                        −
                                    </button>
                                </div>
                            </div>
                        </MapContainer>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ApartmentLocation;
