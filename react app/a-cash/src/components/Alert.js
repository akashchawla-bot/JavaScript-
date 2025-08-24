import React from 'react'

export default function Alert(props) {
    return (
        props.alert && (
            <div style={{
                position: 'fixed',
                top: '55px',
                left: '85%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
                minWidth: '400px'
            }}>
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{props.alert.type}</strong> : {props.alert.msg}
                </div>
            </div>
        )
    );
}
