import React from "react";
import ReactDOM from "react-dom/client";

const Header=({course})=><h1>{course}</h1>

const Part =({part})=> <p>{part.title} {part.exercises}</p>

const Content=({parts})=>{
 return (
  <div>
    {parts.map((part,i)=><Part part={part} key={i}/>)}
  </div>
 )
}

const Total = ({parts})=>{
  const sum= parts.reduce((a,b)=>a+b.exercises,0)
  return <p>Number of exercises {sum}</p>
}

const App = () => {
  const data={
    course:"Half Stack application development",
    parts:[
      {
        title:"Fundamentals of React",
        exercises: 10
      },
      {
        title:"Using props to pass data",
        exercises: 7
      },
      {
        title:"State of a component",
        exercises: 14
      }
    ]
  } 
  return (
    <div>
      <Header course={data.course}/>
      <Content parts={data.parts}/>
      <Total parts={data.parts}/>
    </div>
  );
};

ReactDOM.createRoot( document.getElementById("root")).render(<App />);
