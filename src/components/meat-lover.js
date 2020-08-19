import React from 'react';
import meat from './images/meat.jpg';
import './css/slice.css';

function MeatLover() {
  return(
    <div className="MeatLover col-4">
      <div className="card">
        <img src={ meat } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Meat Lover's Slice</h5>
          <p className="card-text">Don't let your pepperoni be alone; acoompany it with Italian spice, bacon, and sausage.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $2.00</li>
        </ul>
      </div>
    </div>
  );
}

export default MeatLover;
