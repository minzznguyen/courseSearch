// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React from "react";
// import LoginPage from './pages/login';
// import DetailsPage from './pages/details';
// import ProgressPage from './pages/progress';
// import FinderPage from './pages/finder';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element = {<LoginPage/>}></Route>
//         <Route path="/details" element = {<DetailsPage/>}></Route>
//         <Route path="/find" element = {<FinderPage/>}></Route>
//         <Route path="/progress" element = {<ProgressPage/>}></Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import {useState} from "react"
const cardList = [
  {
    name: "Math",
    desc: "Math is awesome",
  },
  {
    name: "Biology",
    desc: "Biology is cool",
  },
];

const App = () => {
  const [input, setInput] = useState('')

  const [fitleredList, setFilteredList] = useState(cardList)
  const filterList = () => {
    setFilteredList(cardList.filter((item) => (item.name.toLowerCase().includes(input)  || item.desc.toLowerCase().includes(input)) ))
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      filterList();
    }
  };
  return (
    <div className="flex justify-center w-full">
      <div className="searchbar  w-3/4 mt-8">
        <div className="flex  flex-row justify-stretch text-black cursor-text h-16 pl-8 pr-4  border-ora rounded-full border-2">
          <input
            type="text"
            placeholder="Search course"
            className="w-full outline-none"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button 
          onClick={filterList}
          className="flex justify-center  items-center bg-indigo-800 text-white  font-medium h-12 p-2 text-center w-32 rounded-full mt-1.5">
            <svg
              style={{ stroke: "rgb(255, 255, 255)" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 -ml-1 mr-1 align-middle w-5 truncate"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search
          </button>
        </div>

        <div className="cardlist m-8 justify-center rounded-lg ">
          {fitleredList.map((item) => (
            <div
              key={item.name}
              className="card  my-5 hover:bg-gray-100 border-2  bg-white pl-6 text-neutral-700 text-sm py-6 border-gray-200 rounded-lg border-1"
            >
              <div className="pb-5">
                <h1 className="font-bold text-4xl text-indigo-800">{item.name}</h1>
              </div>
              <div>
                <>{item.desc}</>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
