import React from 'react';

export default function plan(props) {
    return (
        <div className="plan-wrapper">
            <h1>
                {props.title}
            </h1>

            <h3>
                {props.main_objective}
            </h3>

            <li>
                {props.tasks}
            </li>
        </div>
    )
}