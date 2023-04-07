import './App.css';
// import Temp from './components/Temp';
import 'bootstrap/dist/css/bootstrap.css';
// import GetButton from './components/GetButton';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({});
  const inputRef = useRef('');
  const [input, setInput] = useState(inputRef);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=82d10d8b9124f9ece3e56c62befeda72`
      );

      setData(result.data);
      // console.log(result.data);
    };

    fetchData();
  }, []);

  // const handleClick = () => {
  //   console.log(inputRef.current.value)
  // }

  const temp = Math.round(data?.main?.temp * 9 / 5 - 459.67);
  return (
    <>
      <section className="section vh-100">
        <div className="container py-5 h-100">

          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4">

              <div className="card">
                <div className="card-body p-4">
                  <input id="input" ref={inputRef} />
                  <button onClick={setInput(inputRef)} id="submitZip" className="btn btn-outline-primary">Get Weather</button>

                  <div className="d-flex">
                    <h6 className="flex-grow-1">{data.name}</h6>
                    <h6>15:07</h6>
                  </div>

                  <div className="d-flex flex-column text-center mt-5 mb-4">
                    <h6 className="h6 display-4 mb-0 font-weight-bold">{temp}°F</h6>
                    {/* Why doesn't this work? It's an array? */}
                    <span className="divclassname small">{data?.weather?.[0]?.main}</span>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="classFont flex-grow-1">
                      <div><i className="divcolor fas fa-wind fa-fw"></i> <span className="ms-1"> {data?.wind?.speed}km/h</span>
                      </div>
                      <div><i className="divcolor fas fa-tint fa-fw"></i> <span className="ms-1"> {data?.main?.humidity}% </span>
                      </div>
                      <div><i className="divcolor fas fa-sun fa-fw"></i> <span className="ms-1"> 0.2h </span>
                      </div>
                    </div>
                    <div>
                      {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                                                width="100px"/> */}
                    </div>
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

export default App;
