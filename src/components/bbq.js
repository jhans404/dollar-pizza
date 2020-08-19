import React from 'react';
import bbq from './images/bbq.jpg';
import './css/slice.css';

function Bbq() {
  return(
    <div className="Bbq col-4">
      <div className="card">
        <img src={ bbq } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">BBQ Slice</h5>
          <p className="card-text">Classic cheese slice with tangy BBQ sauce, chicken, and red onion. Gouda cheese gives the homemade pizza the most delicious smoky flavor and cilantro adds a touch of freshness.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $3.50</li>
        </ul>
      </div>
    </div>
  )
}
export default Bbq;