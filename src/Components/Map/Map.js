import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import LineC from "../LineC/LineC";
import MapComponent from "../MapComponent/MapComponent";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  // Paris
  {
    radius: 4,
    country: "Paris",
    color: "#f2f2f2",
    color1: "#01369e",
    color2: "#cf0822",
    color3: "#cf0822",
    coordinates: [2.3, 48.8566],
    number: "500,000",
    size: 14,
  },
  // Moscow
  {
    radius: 4,
    color: "#f2f2f2",
    color1: "#01369e",
    color2: "#cb291c",
    color3: "#cb291c",
    coordinates: [37.6173, 55.7558],
    country: "Moscow",
    number: "60,000",
    size: 14,
  },
  // Peru
  {
    radius: 4,
    color: "#f2f2f2",
    color1: "#d20e22",
    color2: "#f2f2f2",
    color3: "#38a449",
    coordinates: [-50.0152, -9.19],
    country: "Peru",
    number: "100,000",
    size: 14,
  },
  // Uruguay
  {
    radius: 4,
    color: "#f2f2f2",
    color1: "#0037a3",
    color2: "#f4cb1a",
    color3: "#f4cb1a",
    coordinates: [-70.7658, -50.5228],
    country: "Uruguay",
    number: "100,000",
    size: 14,
  },
  // Indonesia
  {
    radius: 4,
    color: "#f2f2f2",
    color1: "#f60100",
    color2: "#f60100",
    color3: "#f60100",
    coordinates: [123.9213, -30.7893],
    country: "Indonesia",
    number: "50,000",
    size: 14,
  },
  // Nigeria
  {
    radius: 4,
    color: "#f2f2f2",
    color1: "#00834f",
    color2: "#00834f",
    color3: "#00834f",
    coordinates: [-10.6753, 9.082],
    country: "Nigeria",
    number: "1000",
    size: 14,
  },
  // Kenya
  {
    radius: 4,
    color: "#f2f2f2",
    color1: "#b40001",
    color2: "#016300",
    color3: "#202124",
    coordinates: [20.9062, -30.0236],
    country: "Kenya",
    number: "10000",
    size: 14,
  },
  // Delhi
  {
    radius: 4,
    color: "#f69431",
    color1: "#f69431",
    color2: "#016300",
    color3: "#f7f7f7",
    coordinates: [75.1025, 26.7041],
    country: "Delhi",
    number: "100,00000",
    size: 14,
  },
  // Egypt
  {
    radius: 4,
    color: "#c71024",
    color1: "#c71024",
    color2: "#caad6c",
    color3: "#f7f7f7",
    coordinates: [30.8025, 5.8206],
    country: "Egypt",
    number: "60,0000",
    size: 14,
  },
  // Tokyo
  {
    radius: 4,
    color: "#c71024",
    color1: "#c71024",
    color2: "#b5002b",
    color3: "#f7f7f7",
    coordinates: [139.6503, 35.6762],
    country: "Tokyo",
    number: "500,0000",
    size: 14,
  },
];
const lines = [
  // Paris to Peru
  {
    from: [2.3, 48.8566],
    to: [-50.0152, -9.19],
    color: "#f60100",
  },
  // Peru to Uruguay
  {
    from: [-50.0152, -9.19],
    to: [-70.7658, -50.5228],
    color: "#f4cb1a",
  },
  
  // Peru to Nigeria
  {
    from: [-50.0152, -9.19],
    to: [-10.6753, 9.082],
    color: "#016300",
  },
  // Nigeria to Kenya
  {
    from: [-10.6753, 9.082],
    to: [20.9062, -30.0236],
    color: "#b40001",
  },
  // Delhi to Kenya
  {
    from: [75.1025, 26.7041],
    to: [20.9062, -30.0236],
    color: "#f69431",
  },
  // Egypt to Delhi
  {
    from: [75.1025, 26.7041],
    to: [30.8025, 5.8206],
    color: "#f69431",
  },
  // Nigeria to Egypt
  {
    from: [-10.6753, 9.082],
    to: [30.8025, 5.8206],
    color: "#caad6c",
  },
  // Indonesia to Tokyo
  {
    from: [139.6503, 35.6762],
    to: [123.9213, -30.7893],
    color: "#f60100",
  },
  // Delhi to Indonesia
  {
    from: [75.1025, 26.7041],
    to: [123.9213, -30.7893],
    color: "#f60100",
  },
  // Moscow to Paris
  {
    from : [2.3, 48.8566 ],
    to:[37.6173, 55.7558],
    color:"#f60100"
  },
  // Moscow to Tokyo
  {
    from : [37.6173, 55.7558],
    to: [139.6503, 35.6762],
    color:"#01369e"
  }
];
const Map = () => (
  <div>
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {/* Coordinates */}
      {markers.map(
        ({
          radius,
          color,
          color1,
          color2,
          color3,
          coordinates,
          country,
          number,
          size,
        }) => (
          <MapComponent
            radius={radius}
            color={color}
            color1={color1}
            color2={color2}
            color3={color3}
            coordinates={coordinates}
            country={country}
            number={number}
            size={size}
          />
        )
      )}

      {/* Lines */}

      {lines.map(({ from, to, color }) => (
        <LineC from={from} to={to} color={color} />
      ))}
    </ComposableMap>
  </div>
);

export default Map;
