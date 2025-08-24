import React from 'react'

export default function Footer(props) {
    return (
    <>
    <footer 
    className={`footer sticky-bottom py-3 ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
    style={{
        borderTop: props.mode === 'dark' ? '1px solid #495057' : '1px solid #dee2e6',
        boxShadow: props.mode === 'dark' ? '0 -2px 10px rgba(0,0,0,0.3)' : '0 -2px 10px rgba(0,0,0,0.1)'
    }}
    >
        <div className="container text-center">
        <p className="mb-1">
            © {new Date().getFullYear()} textify-tools | All Rights Reserved
        </p>
        <div>
            <a href="https://github.com/akashchawla-bot" 
            className={`mx-2 text-decoration-none ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`}
            target="_blank" rel="noopener noreferrer">
            GitHub
            </a>
        </div>
        </div>
    </footer>
    </>
    )
}
