function GetButton( { setData } ) {
    return (
        <button onClick={() => setData(true)} id="submitZip" className="btn btn-outline-primary">Get Weather</button>
    )
}

export default GetButton;