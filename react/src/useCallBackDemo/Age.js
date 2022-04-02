import React, { useEffect, useState } from 'react';

function Age(props) {
  console.log("Rendered Age!");

  return <div>
        <input value={props.Age} onChange={ (e) => props.handleChange(e.target.value)}/>
  </div>;
}

export default React.memo(Age);
//export default Age;
