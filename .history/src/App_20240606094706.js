// import React, { useState, useEffect } from "react";
// import "./App.css";

// const WeatherApp = () => {
//   const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState([]);
//   const [main, setMain] = useState()
//   const [loading, setLoading] = useState(false);
//   const API_KEY = "1fa9ff4126d95b8db54f3897a208e91c";

//   const fetchWeatherData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch weather data");
//       }
//       const data = await response.json();
//       setWeatherData(data.weather);
//       setMain(data)
//       console.log(main)
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       alert("Failed to fetch weather data");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchWeatherData();
//   };

//   return (
//     <div className="weather-app">
//       <h1>Weather Application</h1>
//       <form onSubmit={handleSubmit}>
//         <div class="w-72">
//           <div class="relative w-full min-w-[200px] h-10">
//             <input
//               type="text"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
//               placeholder=" "
//             />
//             <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
//               Enter City
//             </label>
//           </div>
//         </div>
//         <button
//           type="submit"
//           class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//         >
//           Button
//         </button>
//       </form>
//       {loading && <p>Loading data...</p>}
      
//       {weatherData.length > 0 && (
//         <div className="weather-cards">
//           {weatherData.map((weather, index) => (
//             <div className="weather-card" key={index}>
//               <a
//                 href="#"
//                 class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//               >
//                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   {weather.main}
//                 </h5>
//                 <p class="font-normal text-gray-700 dark:text-gray-400">
//                   {weather.description}
//                 </p>
//                 <p>
//                   temperature is {main.main.temp}<br/>
//                   pressure is {main.main.pressure}
//                 </p>
//               </a>
              
// <div class="flex justify-center">
// 	<div
// 		class="card  min-w-sm max-w-sm border border-gray-100 bg-gray-50   transition-shadow test  shadow-lg hover:shadow-shadow-xl w-full bg-green-600 text-purple-50 rounded-md">
// 		<h2 class="text-md mb-2 px-4 pt-4">
// 			<div class="flex justify-between">
// 				<div class="badge relative top-0">
// 					<span class="mt-2 py-1 h-12px text-md font-semibold w-12px  rounded right-1 bottom-1 px-4">Laghouat</span></div>
// 				<span class="text-lg font-bold ">{Date.datetime.now()}</span>
// 			</div>
// 		</h2>
	
// 		<div class="flex items-center p-4">
// 			<div class="flex justify-center items-center w-96"><svg height="20" width="20" viewBox="0 0 32 32"
// 					class="fill-current h-32 w-32 text-yellow-300">
// 					<path
// 						d="M21.743,18.6872A6.05,6.05,0,0,0,22.8,17.6006a5.9977,5.9977,0,1,0-10.7334-4.4444,7.5568,7.5568,0,0,0-5.7158,5.0879A5.9926,5.9926,0,0,0,8,30H19a5.9854,5.9854,0,0,0,2.743-11.3128ZM18,10a4.0042,4.0042,0,0,1,4,4,3.9613,3.9613,0,0,1-.8,2.3994,4.0122,4.0122,0,0,1-.94.8917,7.5416,7.5416,0,0,0-6.1339-4.2395A3.9985,3.9985,0,0,1,18,10Zm1,18H8a3.9928,3.9928,0,0,1-.6729-7.93L7.99,19.958l.1456-.6562a5.4958,5.4958,0,0,1,10.729,0l.1464.6562.6622.1123A3.9928,3.9928,0,0,1,19,28Z"
// 						transform="translate(0 .005)"></path>
// 					<path d="M26 13.005H30V15.005H26z"></path>
// 					<path d="M23.071 5.929H27.071V7.929H23.071z" transform="rotate(-45 25.077 6.931)"></path>
// 					<path d="M17 2.005H19V6.005H17z"></path>
// 					<path d="M9.929 4.929H11.929V8.929H9.929z" transform="rotate(-45 10.935 6.931)"></path>
// 				</svg></div>
// 		</div>
// 		<div class="text-md pt-4 pb-4 px-4">
// 			<div class="flex justify-between items-center">
// 				<div class="space-y-2">
// 					<span class="flex space-x-2 items-center"><svg height="20" width="20" viewBox="0 0 32 32" class="fill-current"><path d="M13,30a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V20h9a5,5,0,0,1,0,10Z"></path><path d="M25 25a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H2V15H25a5 5 0 010 10zM21 12H6V10H21a3 3 0 10-3-3H16a5 5 0 115 5z"></path></svg> <span>27km/h</span></span><span class="flex space-x-2 items-center"><svg height="20" width="20" viewBox="0 0 32 32" class="fill-current"><path d="M16,24V22a3.2965,3.2965,0,0,0,3-3h2A5.2668,5.2668,0,0,1,16,24Z"></path><path d="M16,28a9.0114,9.0114,0,0,1-9-9,9.9843,9.9843,0,0,1,1.4941-4.9554L15.1528,3.4367a1.04,1.04,0,0,1,1.6944,0l6.6289,10.5564A10.0633,10.0633,0,0,1,25,19,9.0114,9.0114,0,0,1,16,28ZM16,5.8483l-5.7817,9.2079A7.9771,7.9771,0,0,0,9,19a7,7,0,0,0,14,0,8.0615,8.0615,0,0,0-1.248-3.9953Z"></path></svg> <span>32%</span></span>
// 				</div>
// 				<div>
// 					<h1 class="text-6xl"> 12° </h1>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
              
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherApp;
