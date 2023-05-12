import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [input, setInput] = useState('');
  const [time, setTime] = useState(new Date());
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=82d10d8b9124f9ece3e56c62befeda72`;
  const temp = Math.round(data?.main?.temp * 9 / 5 - 459.67);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    axios
      .get(BASE_URL)
      .then((res) => {
        setData(res.data);
        console.log(data?.main?.humidity)
      })
      .catch((error) => {
        alert('Zip Code not found, please try again.')
        console.error(error);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const hours = time.getHours() % 12 || 12;
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM';
  const timeString = `${hours}:${minutes} ${ampm}`;

  return (
    <>
      <section className="section vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4" onKeyDown={handleKeyPress}>
                  <input id="input" className='form-control' onChange={(e) => setInput(e.target.value)} />
                  <div className='button text-center'>
                  <button onClick={handleClick} id="submitZip" className="btn btn-primary">Get Weather</button>
                  </div>
                  <div className="d-flex">
                    <h6 className="flex-grow-1">{data.name}</h6>
                    <h6 className='time'>{timeString}</h6>
                  </div>
                  <div className="d-flex flex-column text-center mt-5 mb-4">
                    {temp ?
                      <h6 className="h6 display-4 mb-0 font-weight-bold">{temp}°F</h6> :
                      <div className="mb-0">&nbsp;</div>
                    }
                    <span className="divclassname small">{data?.weather?.[0]?.main}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="classFont flex-grow-1">
                      {Object.keys(data).length === 0 ? (
                        <div></div>
                      ) : (
                        <>
                        <div><i className="divcolor fas fa-tint fa-fw"></i> <span className="ms-1">Humidity: {data?.main?.humidity}% </span>
                      </div>
                      <div><i className="divcolor fas fa-wind fa-fw"></i> <span className="ms-1">Wind Speed: {data?.wind?.speed}km/h</span>
                      </div>
                        </>
)}
                      {/* <div><i className="divcolor fas fa-sun fa-fw"></i> <span className="ms-1"> 0.2h </span>
                      </div> */}
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
