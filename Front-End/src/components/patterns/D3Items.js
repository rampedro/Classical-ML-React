// like the class componenet we created in chart Wrapper but this 
// one DOSE NOT extend from component class !
import * as d3 from 'd3';

const url = "http://127.0.0.1:5000/patterns"
// Regular javascript class always ones a Constructor ,
// Which is run whenever the class is initialized

export default class D3Items{
  constructor(element){

    const svg = d3.select(element)
    .append("svg")
      .attr("width", 1000)
      .attr("height", 1000)


    svg
      .append("circle")
      .attr("cx", 100)
      .attr("cy", 50)
      .attr("r", 40)
      .attr("fill", "pink")


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




  
 