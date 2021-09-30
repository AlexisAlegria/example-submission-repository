import React from 'react'

  const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]

    const Header = () => {
      return (
      <h1>{course}</h1>
      )
    }
    const Part1 = () => {
      return(
        <p>
        {parts[0].name} {parts[0].exercises}
        </p>
      )
    }
    const Part2 = () => {
      return(
        <p>
        {parts[1].name} {parts[1].exercises}
        </p>
      )
    }
    const Part3 = () => {
      return(
        <p>
        {parts[2].name} {parts[2].exercises}
        </p>
      )
    }
    const Content = () => {
      return (
        <>
        <Part1 />
        <Part2 />
        <Part3 />
        </>
        )
    }
    const Total = () => {
      return (
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
      )
    }
    return (
      <div>
        <Header course={course} />
        <Content />
        <Total />
      
      </div>
    )
  }
export default App;
