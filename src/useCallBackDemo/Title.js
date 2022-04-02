import React from 'react';

function Title(props) {
    console.log("Rendered Title!");
  return <div>
        {props.Title}
  </div>;
}

export default React.memo(Title);
//export default Title;
