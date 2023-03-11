// import GetButton from "./GetButton";

function Temp( { data } ) {
    return (
        <>
            <section className="vh-100">

                <div className="container py-5 h-100">

                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4">

                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-center">
                                        <input type="text" id="inputField"/>
                                            {/* <GetButton /> */}
                                    </div>

                                    <div className="d-flex">
                                        <h6 className="flex-grow-1" id="city">{data.name}</h6>

                                    </div>

                                    <div className="d-flex flex-column text-center mt-5 mb-4">
                                        <h6 id="temperature" className="display-4 mb-0 font-weight-bold">{data.name}
                                        </h6>
                                        <span className="small" id="wConditions"></span>
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>      
            </section>
        </>
    )
}

export default Temp;