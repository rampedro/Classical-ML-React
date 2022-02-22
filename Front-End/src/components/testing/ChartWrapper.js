// We use lifecyclye method from react

import React, { useRef, useState, useEffect } from 'react';
import D3Chart from './D3Chart';
 
const ChartWrapper = ({data}) => {

  // Calling useRef() returns a ref, which 
  //we can use to keep track of an element 
  //in our between re-renders, which means 
 // that we can update its contents ourselves,
  // rather than letting React handle updates 
  // by redrawing the entire component every 
  // time the component's props change
  const chartArea = useRef(null)
  const [chart, setChart] = useState(null)
 
  // It essentially combines the functionality 
  //of componentDidMount and componentDidUpdate into one block of code.

  useEffect(() => {
    if (!chart) {
      // Attaching our d3 element to DIV
      setChart(new D3Chart(chartArea.current))
    }
    else {
      //chart.update(data)
    }
  }, [chart,data])
 
  return (
    <div className="chart-area" ref={chartArea}></div>
  )
}
 
export default ChartWrapper