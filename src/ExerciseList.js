import React from 'react';
import data from './data.json';

// A component that displays a single exercise
function Exercise(props) {
// Destructure the props object to get the exercise data
const { exercise,videoURL, warmupSets, workingSets, reps, rest } = props;

// Find the video url for the exercise from the data
//const videoUrl = data.videos.find(video => video[exercise])[exercise];

return (
<div className="container">
    <div className="video">
        {/* <iframe src="https://www.youtube.com/embed/4pKly2JojMw" frameborder="0" allowfullscreen></iframe> */}
        <iframe className="video" title="Youtube player" src={videoURL} allow="autoplay; encrypted-media" allowFullScreen />
    </div>
    <section className="exercise">
        <h1>Exercise: {exercise}</h1>
        <p>How to do it:</p>
        <ol>
            <li>Warmup sets: {warmupSets}</li>
            <li>Working sets: {workingSets}</li>
            <li>Reps: {reps}</li>
            <li>Rest: {rest}</li>
        </ol>
    </section>
</div>




);
}

// A component that displays a list of exercises
function ExerciseList(props) {

    // Destructure the props object to get the data and the index
const { data, index } = props;

// Conditionally render the Exercise component based on the index

const exercise = data ? <Exercise key={data[index].exercise} {...data[index]} /> : null;

// Disable the next button when the index reaches the last exercise
const isLastExercise = index === data.length - 1;

const isFirstExercise = index === 0;

return (
<div className="exercise-list">
<h2>Navigate Exercises using buttons</h2>
{exercise}
{/* Disable the next button when the isLastExercise is true */}
<br></br>
<p></p>
<button id="prevQuestion" className="prevQuestion" disabled={isFirstExercise}>Previous</button>
<button id="nextQuestion" className="nextButton" disabled={isLastExercise}>Next</button>
</div>
);
}

export default ExerciseList;
