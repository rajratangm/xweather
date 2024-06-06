import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [main, setMain] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const API_KEY = "1fa9ff4126d95b8db54f3897a208e91c";

  const fetchWeatherData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data.weather);
      setMain(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Failed to fetch weather data");
      toast.error("Error Notification !",{});
      
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };



  const getBackgroundImage = () => {
    if (weatherData.length > 0) {
      const weatherCondition = weatherData[0].main.toLowerCase();
      switch (weatherCondition) {
        case "clear":
          return "url('https://images.unsplash.com/photo-1613931189161-1f4d2660bd1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFyJTIwc2t5fGVufDB8fDB8fHww')";
        case "clouds":
          return "url('https://images.unsplash.com/photo-1594156596782-656c93e4d504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5fGVufDB8fDB8fHww')";
        case "haze":
          return "url('https://images.unsplash.com/photo-1423209086112-cf2c8acd502f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D')";
          case "rain":
            return "url('https://images.unsplash.com/photo-1428592953211-077101b2021b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW58ZW58MHx8MHx8fDA%3D')";
          default:
            return "url('https://images.unsplash.com/photo-1613931189161-1f4d2660bd1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFyJTIwc2t5fGVufDB8fDB8fHww')";
          }
    }
    return "url('https://images.unsplash.com/photo-1617142020344-59ba7bded648?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNsZWFyJTIwc2t5fGVufDB8fDB8fHww')";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="weather-app"   style={{
      backgroundImage: getBackgroundImage(),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <div class="flex h-screen w-full items-center justify-center">
    <span class="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
    Weather Application by Raj
  </span>
    <h1
        class="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        Weather Application by Raj
    </h1>
</div>
      <form onSubmit={handleSubmit}>
        <div className="w-72">
          <div className="relative w-full min-w-[200px] h-10">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-input peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
              
            />
            <label className="flex font-bold  w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-00 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content-[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content-[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-00 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              Enter City
            </label>
            
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Button
        </button>
      </form>
      {loading && <p>Loading data...</p>}
      {/* {toast("Default Notification !", {})} */}
      {weatherData.length > 0 && main && (
        <div className="weather-cards">
          {weatherData.map((weather, index) => (
            <div className="weather-card" key={index}>
              <div className="flex justify-center">
                <div className="card min-w-sm max-w-sm border border-gray-100 bg-gray-50 transition-shadow test shadow-lg hover:shadow-shadow-xl w-full bg-green-600 text-purple-50 rounded-md">
                  <h2 className="text-md mb-2 px-4 pt-4">
                    <div className="flex justify-between">
                      <div className="badge relative top-0">
                        <span className="mt-2 py-1 h-12px text-md font-semibold w-12px rounded right-1 bottom-1 px-4">
                          {weather.main}
                        </span>
                      </div>
                      <span className="text-lg font-bold ">
                        {currentDateTime.toLocaleString()}
                      </span>
                    </div>
                  </h2>
                  
                  <div className="flex items-center p-4">
                    <div className="flex justify-center items-center w-96">
                      <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.description} />
                    </div>
                  </div>
                  <div className="text-md pt-4 pb-4 px-4">
                    <div className="flex justify-between items-center">
                      <div className="space-y-2">
                        <span className="flex space-x-2 items-center">
                          <svg height="20" width="20" viewBox="0 0 32 32" className="fill-current">
                            <path d="M13,30a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V20h9a5,5,0,0,1,0,10Z"></path>
                            <path d="M25 25a5.0057 5.0057,0 01-5-5h2a3 3 0 103-3H2V15H25a5 5 0 010 10zM21 12H6V10H21a3 3 0 10-3-3H16a5 5 0 115 5z"></path>
                          </svg>
                          <span>{main.wind.speed}km/h</span>
                        </span>
                        <span className="flex space-x-2 items-center">
                          <svg height="20" width="20" viewBox="0 0 32 32" className="fill-current">
                            <path d="M16,24V22a3.2965,3.2965,0,0,0,3-3h2A5.2668,5.2668,0,0,1,16,24Z"></path>
                            <path d="M16,28a9.0114,9.0114,0,0,1-9-9,9.9843,9.9843,0,0,1,1.4941-4.9554L15.1528,3.4367a1.04,1.04,0,0,1,1.6944,0l6.6289,10.5564A10.0633,10.0633,0,0,1,25,19,9.0114,9.0114,0,0,1,16,28ZM16,5.8483l-5.7817,9.2079A7.9771,7.9771,0,0,0,9,19a7,7,0,0,0,14,0,7.9165,7.9165,0,0,0-.9756-3.7757Z"></path>
                          </svg>
                          <span>{main.main.humidity}%</span>
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="avatar relative right-0 bottom-0 block">
                          <span className="inline-block p-1 bg-white rounded-full">
                            <img
                              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                              alt={weather.description}
                              className="w-16 h-16 rounded-full"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;


