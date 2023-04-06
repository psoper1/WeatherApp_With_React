import { useRef } from "react";

function GetButton( { setData } ) {
    const inputRef = useRef('');
    const handleClick = () => {
        console.log(inputRef.current.value)
    }
    return (
        <>
        <input id="input" ref={inputRef}/>
        <button onClick={handleClick} id="submitZip" className="btn btn-outline-primary">Get Weather</button>
        </>
    )
}

export default GetButton;