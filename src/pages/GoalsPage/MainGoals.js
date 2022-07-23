import React from 'react';
import GoalList from '../../components/Goal-list/Goal-list';
import NewGoal from '../../components/NewGoal/NewGoal';

const MainGoals = (props)=>{
    return(
        <React.Fragment>
            <NewGoal onAddGoal={props.onAddGoal}/>
            <GoalList goals={props.goals}/>
        </React.Fragment>
    );

};

export default MainGoals