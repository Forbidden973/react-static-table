import React from 'react'
import './style.css';

function App() {
  return (
    <div className="App">
      <h1>Table for Task</h1>
      <table>
        <thead>
        <tr>
          <th>Name of Employee</th>
          <th>Age of Employee</th>
          <th>Male/female</th>
          <th>Designation</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dewesh</td>
            <td>23</td>
            <td>Male</td>
            <td>Full Stack (React) Developer</td>
          </tr>
          <tr>
            <td>Sonu</td>
            <td>24</td>
            <td>Male</td>
            <td>Full Stack Engineer</td>
          </tr>
          <tr>
            <td>Anjali</td>
            <td>24</td>
            <td>Female</td>
            <td>React Developer</td>
          </tr>
          <tr>
            <td>Shubham</td>
            <td>26</td>
            <td>Male</td>
            <td>Front End Developer</td>
          </tr>
          <tr>
            <td>namita</td>
            <td>27</td>
            <td>Female</td>
            <td>UI/UX Designer</td>
          </tr>
          </tbody>
      </table>
    </div>
  );
}

export default App;