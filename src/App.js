import Axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setEmployeeList([...employeeList, {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage,
      }])
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data)
    })
  }

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text" onChange={(event) => {
          setName(event.target.value)
        }} />
        <label>Age:</label>
        <input type="number" onChange={(event) => {
          setAge(event.target.value)
        }} />
        <label>Country:</label>
        <input type="text" onChange={(event) => {
          setCountry(event.target.value)
        }} />
        <label>Position:</label>
        <input type="text" onChange={(event) => {
          setPosition(event.target.value)
        }} />
        <label>Wage (Year): </label>
        <input type="number" onChange={(event) => {
          setWage(event.target.value)
        }} />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div className="employees">
        <button onClick={getEmployees}>Show Employee</button>

        {
          employeeList.map((employee) => {
            return (
              <div className="card">
                <div className="employees">
                  <h2><b>Name:{employee.name}</b></h2>
                  <h3>Age:{employee.age}</h3>
                  <h3>Country : {employee.country}</h3>
                  <h3>Position: {employee.position}</h3>
                  <h3>Salary:{employee.wage}</h3>

                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
