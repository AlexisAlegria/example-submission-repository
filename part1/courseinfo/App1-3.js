import React from 'react'
// function App() {
  const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }

    const Header = () => {
      return (
      <h1>{course}</h1>
      )
    }
    const Part1 = () => {
      return(
        <p>
        {part1.name} {part1.exercises}
        </p>
      )
    }
    const Part2 = () => {
      return(
        <p>
        {part2.name} {part2.exercises}
        </p>
      )
    }
    const Part3 = () => {
      return(
        <p>
        {part3.name} {part3.exercises}
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
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
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
