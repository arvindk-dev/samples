import React, { useLayoutEffect, useEffect, useState, useRef } from "react";

export default function UseLayoutEffectDemo() {
    const [show, setShow] = useState(false);
    const popup = useRef();
    const button = useRef();

    useLayoutEffect(() => {
        if (popup.current == null || button.current == null) return 
        const { bottom } = button.current.getBoundingClientRect();
        popup.current.style.top= `${bottom + 25}px` 
    }, [show]);

    return(
        <React.Fragment>
        <button ref={button} onClick={() => setShow(prev => !prev)}>
        Click Here </button>
        {show && ( 
        <div style={{ position: "absolute" }} ref={popup} >
        This is a popup </div>
        )}
        </React.Fragment>
    );
}
