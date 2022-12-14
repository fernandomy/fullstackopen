import React from "react";
import Content from "./Content";
import Header from "./Header";

function Course({course}) {
  const total = course.parts.reduce((a,b)=>a+b.exercises,0)
  return <div className="card m-3 p-3" >
  <Header name={course.name}/>
  <Content parts={course.parts}/>
  <b>Total exercises: {total}</b>
  </div>
}

export default Course;
