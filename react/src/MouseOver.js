import React, {useState, useEffect} from 'react'

function MouseOver() {
    let [x, setX] = useState(0);
    let [y, setY] = useState(0);

    let updateCoordinates = (e) => {
        console.log(e.x, e.y)
        setX(e.x);
        setY(e.y);
    };
    
    useEffect(() => {
        console.log("After Initial Render");
        document.addEventListener('mouseover', updateCoordinates);

        return () => {
            console.log("Cleaning Up");
            document.removeEventListener('mouseover', updateCoordinates);
        }
    }, []);
    return (
        <div>
            Mouse X coordinate {x}
            <br/>
            Mouse Y coordinate {y}
        </div>
    )
}

export default MouseOver

