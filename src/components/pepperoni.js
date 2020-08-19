import React from 'react';
import pepperoni from './images/pepperoni.jpg';
import './css/slice.css';

function Pepperoni() {
  return(
    <div className="Pepperoni col-4">
      <div className="card">
        <img src={ pepperoni } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Pepperoni Slice</h5>
          <p className="card-text">Pepperoni has a bold, spicy flavour, often with a slight smokiness and of course, that vibrant red color...added on your basic cheese slice.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.50</li>
        </ul>
      </div>
    </div>
  );
}

export default Pepperoni;
