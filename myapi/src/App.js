
import React from 'react';
import axios from 'axios';
import UserList from './UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const App = () => {

  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            console.table(res.data)
            setListOfUser(res.data);
        });
    }, []);

  return (
    <div className="App">
      listOfUser ? <UserList listOfUser={listOfUser} /> 
    </div>
  );
}

export default App;
