import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

const IndividualCoachingPanel = (props) => {
    return (
        <div className="window_modal">
            <div className="head_modal">
                <h3>Coaching individuel</h3>
                <div className="close_icon" onClick={props.close}>
                    <AiOutlineCloseCircle />
                </div>
            </div>
        </div>
    )
}

export default IndividualCoachingPanel;