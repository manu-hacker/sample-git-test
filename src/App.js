import Header from "./Components/Header";
// import { Todos } from "./Components/Todos";
// import { Footer } from "./Components/Footer";
// import { AddTodo } from "./Components/AddTodo";
// import About from "./Components/About"
// import TechStack from "./Components/TechStack";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./Components/Home";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("im on deltet", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("i am adding", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
      // <Router>
      // <Header title="My Todo-s List" searchBar={false} />
      // <AddTodo addTodo={addTodo} />
      // <Todos todos={todos} onDelete={onDelete} /> 
      // <Routes>
      // <Route path="/about" element= {<About />}/>  
      // <Route path="/tech"  element={<TechStack/>}/>
      // </Routes> 
      // <Footer />
      // </Router>
      <Home todos={todos} addTodo={addTodo} onDelete={onDelete} />
  );
}

export default App;
