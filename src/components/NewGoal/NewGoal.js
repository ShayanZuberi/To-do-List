import "./NewGoal.css";
import React, {useState}  from "react";

const NewGoal = (props) =>{
    let [newGoalText, setNewGoalText] = useState('');
    const addGoalHandler = (event) =>{
        event.preventDefault();
        const newGoal = {
            id: Math.random.toString(),
            text: newGoalText,
        };
        setNewGoalText('');
        props.onAddGoal(newGoal); 
    };

    const textChangeHandler = (event) =>{
        setNewGoalText(event.target.value);

    };

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input id="newGoalText" type="text" value={newGoalText} onChange={textChangeHandler}/>
            <button type="submit">Add Goal</button>
        </form>
    );
};

export default NewGoal;