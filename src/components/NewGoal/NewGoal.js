import "./NewGoal.css";
import React, {useState}  from "react";
import Button from '../../shared/components/FormElements/Button';

const NewGoal = (props) =>{
    let [newGoalText, setNewGoalText] = useState('');
    const addGoalHandler = (event) =>{
        event.preventDefault();
        const newGoal = {
            id: Math.random.toString(),
            text: newGoalText,
        };
        setNewGoalText('');////
        props.onAddGoal(newGoal); 
    };

    const textChangeHandler = (event) =>{
        setNewGoalText(event.target.value);

    };

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input id="newGoalText" type="text" value={newGoalText} onChange={textChangeHandler}/>
            <Button default type='submit'>Add Goal</Button>
        </form>
    );
};

export default NewGoal;