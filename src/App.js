import './App.css';
import React, {useState} from 'react' ;
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import MainGoals from './pages/GoalsPage/MainGoals';

const App = () => {
  const[course_goals, setCourseGoals] = useState([  //ret latest state snapshot and a function to allow updation of state snapshot
    {id: "cg1", text: "Finish the course"},
    {id: "cg2", text: "Learn some JS"},
    {id: "cg3", text: "Learn some React"}
  ]);

  const onAddGoalHandler = (newGoal) =>{
    //setCourseGoals(course_goals.concat(newGoal));
    setCourseGoals((prevCourses)=>{return prevCourses.concat(newGoal)}); 
  };
   

  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
        <Route path="/" element={<MainGoals goals={course_goals} onAddGoal={onAddGoalHandler}/>} />
        <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
