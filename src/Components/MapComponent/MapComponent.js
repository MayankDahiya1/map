import React from 'react'
import {Marker} from "react-simple-maps";
const MapComponent = ({color,color1,color2,color3 ,radius, coordinates, country , number, size}) => {
  return (
    <>
        <Marker coordinates={coordinates}>
        <g
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle fill={color3} cx="12" cy="10" r={radius} />
            <path   d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={15}
            style={{ fontSize:"12", fontWeight:"800", fontFamily: "system-ui", fill: color1  }}
          >
            {country}
          </text>
          <text
            textAnchor="middle"
            y={30}
            style={{fontSize:"10",fontWeight:"800", fontFamily: "system-ui", fill: color2 }}
          >
            {number}
          </text>
          </Marker>
          
    </>
  )
}

export default MapComponent;