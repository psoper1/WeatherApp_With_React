import './App.css';
import Temp from './components/Temp';
import 'bootstrap/dist/css/bootstrap.css';
// import GetButton from './components/GetButton';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://api.openweathermap.org/data/2.5/weather?zip=40515&appid=82d10d8b9124f9ece3e56c62befeda72',
        );
  
        setData(result.data);
        // console.log(result.data);
      };
  
      fetchData();
    }, []);
  
  return (
    <>
    {/* <GetButton setData={setData}/> */}
    <Temp data={data}/>
    </>
  );
}

export default App;
