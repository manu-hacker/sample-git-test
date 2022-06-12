import React from 'react'
import Header from "./Header";
import { Todos } from "./Todos";
import { Footer } from "./Footer";
import { AddTodo } from "./AddTodo";
import About from "./About"
import TechStack from "./TechStack";
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
function Home({onDelete,addTodo,todos}) {
  return (
    <div>
    <Router>
      <Header title="My Todo-s List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} /> 
      <Routes>
       <Route path="/about" element= {<About />}/>  
       <Route path="/tech"  element={<TechStack/>}/>
       </Routes> 
       <Footer />
      </Router>
    </div>
  )
}

export default Home