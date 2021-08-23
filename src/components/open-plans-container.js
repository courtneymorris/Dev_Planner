import React from 'react';
import Plan from './plan'

export default function openPlans(props) {
    const renderPlan = plan =>(
        <Plan
            key={plan.id}
            project_name={plan.project_name}
            main_objective={plan.main_objective}
            priority={plan.priority}
            tasks={plan.tasks}
        />
    )

    return (
        <div className="open-plans-container">
            {props.data.map(plan => renderPlan(plan))}
        </div>
    )
}

// define Plan, keys, data, renderPlan