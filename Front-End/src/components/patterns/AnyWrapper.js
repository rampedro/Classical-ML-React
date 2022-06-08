// We use lifecyclye method from react

import React, { useRef, useState, useEffect } from 'react';
import D3Items from './D3Items';
 
const AnyWrapper = ({data}) => {

 
  const myRef = useRef(null)
  const [anyItem, setItem] = useState(null)
 
  // It essentially combines the functionality 
  //of componentDidMount and componentDidUpdate into one block of code.

  useEffect(() => {
    if (!anyItem) {
      // Attaching our d3 element to DIV
      setItem(new D3Items(myRef.current,"rect"))
    }
    else {
      //chart.update(data)
    }
  }, [anyItem,data])

  // [anyItem,data] are the dependencies, these are bing tracked for any changes ! 
 
  return (

    // This is the div to whcih we render what is inside the AnyWrapper 
    <div className="Any-Item-Area" ref={myRef}></div>
  )
}
 
export default AnyWrapper