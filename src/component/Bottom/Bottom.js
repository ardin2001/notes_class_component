import React from 'react';
import './style.css'

function Bottom({ id,action, type }) {
  return <button className={`btn btn-${type}`} onClick={ () => { action(id)}}>{type}</button>
}
 
export default Bottom;