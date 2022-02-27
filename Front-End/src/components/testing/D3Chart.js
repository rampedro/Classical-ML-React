// like the class componenet we created in chart Wrapper but this 
// one DOSE NOT extend from component class !
import * as d3 from 'd3';

const url = "https://udemy-react-d3.firebaseio.com/ages.json"
// Regular javascript class always ones a Constructor ,
// Which is run whenever the class is initialized

export default class D3Chart{
  constructor(element){

  const svg = d3.select(element)
    .append("svg")
      .attr("width", 500)
      .attr("height", 500)

  d3.json(url).then(agesData => {
    
    const rects = svg.selectAll("rect")
      .data(agesData)

    const txt = svg.selectAll("text")
      .data(agesData)

    txt.enter()
      .append("text")
        .attr("x", (d, i) => i * 100)
        .attr("y", 200)
        .attr("font-size", 11)
        .attr("fill", "red")
        .text(d => d.name)

    rects.enter()
    
      .append("rect")
        .attr("x", (d, i) => i * 100)
        .attr("y", 50)
        .attr("width", 50)
        .attr("height", d => d.age * 10)
        .attr("fill", d => {
          if (d.age > 10) {
            return "red"
          }
          return "green"
        })
   
  })

  

  
  }
}