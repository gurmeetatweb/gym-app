// import logo from './logo.svg';
// import './App.css';
// import data from './data.json';
// import ExerciseList from './ExerciseList';

// function App() {
//   return (
//     <div className="App">
//       <h1>ReactJS App for Exercise Data</h1>
//       <ExerciseList data={data} />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import importData from './data.json';
import ExerciseList from './ExerciseList';

function App() {
// Create a state variable called index and initialize it to 0
const [index, setIndex] = useState(0);
const data = importData;



// Use the useEffect hook to update the index when the user clicks on the next button
useEffect(() => {
// Get the previous button element by its id
const prevButton = document.getElementById('prevQuestion');  
// Get the next button element by its id
const nextButton = document.getElementById('nextQuestion');

// Add a click event listener to the next button
nextButton.addEventListener('click', () => {
// Increment the index by 1
setIndex(index + 1);
});




// Add a click event listener to the previous button
prevButton.addEventListener('click', () => {  
  // Decrement the index by 1
  setIndex(index === 0 ? 0 : index - 1);
  });



// Remove the event listener when the component unmounts
return () => {
nextButton.removeEventListener('click', () => {
setIndex(index + 1);
});
prevButton.removeEventListener('click', () => {  
  // Decrement the index by 1
  setIndex(prevIndex => prevIndex -1 );
  });
};
}, [index]); // Pass the index as a dependency to the useEffect hook




// Use the index to access the corresponding exercise data from the data array
const exerciseData = data[0].exercises;
return (
<div className="App">
<h1>App for Gym Exercise</h1>
{/* Pass the exercise data and the index as props to the ExerciseList component */}
<ExerciseList data={exerciseData} index={index} />
</div>
);
}

export default App;