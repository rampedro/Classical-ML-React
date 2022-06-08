// like the class componenet we created in chart Wrapper but this 
// one DOSE NOT extend from component class !
import * as d3 from 'd3';

const url = "http://127.0.0.1:5000/patterns"
// Regular javascript class always ones a Constructor ,
// Which is run whenever the class is initialized

export default class D3Items{
  constructor(element,shape){


    const svg = d3.select(element)
    .append("svg")
      .attr("width", 1000)
      .attr("height", 1000)

    console.log(shape)
      if (shape == "circle"){
    svg
      .append(shape)
      .attr("cx", 100)
      .attr("cy", 50)
      .attr("r", 40)
      .attr("fill", "pink")

  } else if (shape == "rect"){
    svg
      
    .append(shape)
      .attr("x", 100)
      .attr("y", 50)
      .attr("width", 50)
      .attr("height", 40)
      

  }
 // ### Reading from a DATA source D3 style ###
//  d3.json(url).then(myData => {
//    console.log(myData)

    // Accessing different keys (eg, loc and count)
       
   

  }
    }

    
 
  
 // })



        



 // ### Iterating Data by looping ###

 //   dummyData.forEach((d,i) => {
 //   svg.append("rect")
 //    .attr("x", 10)
 //     .attr("y", 200)
 //     .attr("width", 100 )
 //     .attr("height", 100 )
 //     .attr("fill", "red")
 //  })




  
 