import ExerciseList from "./components/ExerciseList"
import Exercise from "./components/Exercise";
import Random from "./components/Random";
import { Routes, Route } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ExerciseList />} />
        <Route path="/exercise/:id" element={<Exercise />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </div>
  );
}

export default App;
