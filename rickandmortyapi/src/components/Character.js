import React from 'react';

function Character(item) {
  return (
    <div className="col-3">
      <div className="card">
        <img src={item.image} alt={item.name} width="300" />
      </div>
      <h3>{item.name}</h3>
      
      <p>{`Origin: ${item.origin && item.origin.name}`}</p>
    </div>
  );
}

export default Character;
