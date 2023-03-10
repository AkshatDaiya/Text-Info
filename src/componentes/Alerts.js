import React from 'react'

function Alerts(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.Alerts && <div className={`alert alert-${props.Alerts.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.Alerts.type)}</strong>: {props.Alerts.msg}
        </div>
    )
}

export default Alerts
