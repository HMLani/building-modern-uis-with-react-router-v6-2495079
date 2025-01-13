import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Categories from "./Categories";
import Category from "./Category";
import About from "./About";
import Header from "./Header";
import Session from "./Session";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path='/' element={<Home title='Welcome to Red30 Tech' />}/>
        <Route path='Categories' element={<Categories />}>
          <Route path=':catId' element={<Category />}>
            <Route path=':sessionId' element={<Session />}/>
          </Route>
          <Route index element={<h3>Select a category from above</h3>}/>
        </Route>
        <Route path='About' element={<About />}/>
        <Route path='Register' element={<Register />}/>
        <Route path='Confirmed' element={<Confirmation />}/>
        <Route path='*' element={<h1 className='not-found'>404 Page not found</h1>}/>
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
