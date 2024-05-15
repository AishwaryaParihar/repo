import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

let food = ['dal','roti','chawal','bread','sabji',]
  return (
    <>
    <h2>food</h2>
   <ul  className="list-group">
    {food.map((item)=>  (<li key={item} className="list-group-item">{item}</li>) )}
  <h1>hello this is githfgffgfub class</h1>

</ul>

  
    
    </>
  )
}

export default App
