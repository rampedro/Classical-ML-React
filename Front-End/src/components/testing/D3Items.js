// like the class componenet we created in chart Wrapper but this 
// one DOSE NOT extend from component class !
import * as d3 from 'd3';

const url = "http://127.0.0.1:5000/dataFetch"
// Regular javascript class always ones a Constructor ,
// Which is run whenever the class is initialized

export default class D3Items{
  constructor(element){

    const svg = d3.select(element)
    .append("svg")
      .attr("width", 500)
      .attr("height", 500)

 // ### Reading from a DATA source D3 style ###
  d3.json(url).then(myData => {
    console.log(myData)

    // Accessing different keys (eg, loc and count)
       
      const txt = svg.selectAll("text")
        .data(myData.loc)
  
      txt.enter()
        .append("text")
         .attr("x", 100)
         .attr("y", (d,i)=> i*20)
         .attr("font-size", 11)
         .attr("fill", "red")
         .text(d => d)
  
      const hline = svg.selectAll("rect")
         .data(myData.count)
  

         hline.enter()
         .append("rect")
         .attr("x", 200)
        .attr("y", (d,i)=> i*20 + 10)
        .attr("width", d => d/1000000)
        .attr("height", 10)
        .attr("fill", "black")
  })




 // ### Iterating Data by looping ###

 //   dummyData.forEach((d,i) => {
 //   svg.append("rect")
 //    .attr("x", 10)
 //     .attr("y", 200)
 //     .attr("width", 100 )
 //     .attr("height", 100 )
 //     .attr("fill", "red")
 //  })




  
  }
}