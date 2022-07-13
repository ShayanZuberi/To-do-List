import './App.css';
import React, {useState} from 'react' ;
import GoalList from "./components/Goal-list/Goal-list";
import NewGoal from "./components/NewGoal/NewGoal";

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
    <div>
      <h2>To-do List</h2>
      <NewGoal onAddGoal = {onAddGoalHandler}/>
      <GoalList goals = {course_goals}/>
      
    </div>
  );
};

export default App;
