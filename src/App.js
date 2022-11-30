import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getItems } from './api';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {getItems().then((items) => {setItems(items)});}, []);
  return (
    <div className="App"> { 
      items
      .map(({ title, publisher }) => (
        <div >
          <h4>{title}</h4>  <p>{publisher} </p>
        </div>
      ))
}
      </div>
  );
}

export default App;
