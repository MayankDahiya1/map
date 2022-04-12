import React from 'react'
import {Line} from "react-simple-maps";
const LineC = ({color, from, to}) => {
  return (
    <>
         <Line
            from={from}
            to={to}
            stroke={color}
            strokeWidth={2}
          />
    </>
  )
}

export default LineC