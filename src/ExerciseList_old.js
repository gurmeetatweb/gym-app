import React from 'react';
import data from './data.json';
let exerciseCounter =0;
// A component that displays a single exercise
function Exercise(props) {
// Destructure the props object to get the exercise data
const { exercise,videoURL, warmupSets, workingSets, reps, rest } = props;

// Find the video url for the exercise from the data


return (
<div className="exercise">
<h3>{exercise}</h3>

<p>Warmup sets: {warmupSets}</p>
<p>Working sets: {workingSets}</p>
<p>Reps: {reps}</p>
<p>Rest: {rest}</p>
<p>Video Url: <a href={videoURL} target="_blank" rel="noreferrer">Watch video</a>  </p>
<iframe
className="video"
title="Youtube player"
src={videoURL}
allow="autoplay; encrypted-media"
allowFullScreen
/>
{/* <iframe width="853" height="480" src="https://www.youtube.com/embed/vthMCtgVtFw" frameborder="0" allowfullscreen ng-show="showvideo"></iframe> */}
</div>
);
}

// A component that displays a list of exercises
function ExerciseList(props) {
// Destructure the props object to get the data
const { data } = props;

// Map over the data to create an array of Exercise components
const exercises = data[0].exercises.map(exercise => (
<Exercise key={exercise.exercise} {...exercise} />
));
debugger;

let exerciseSingle =
    <Exercise key={data[0].exercises[exerciseCounter].exercise} {...data[0].exercises[exerciseCounter]} />
    ;

//const videoUrl = data[1].videos.find(video => video[key])[exercise];
const handleClick = () => {
    exerciseCounter++
    let exerciseSingle =
    <Exercise key={data[0].exercises[exerciseCounter].exercise} {...data[0].exercises[exerciseCounter]} />
    ;
    console.log('this is:', exerciseCounter);
  }
return (
<div className="exercise-list">
<h2>Exercises</h2>
{exerciseSingle}
<button onClick={handleClick}>Next</button>
</div>
);
}

export default ExerciseList;