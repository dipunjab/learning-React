import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <>
            <h1>My App! | Javascript</h1>
        </>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }
const user = "CR7"


const ReactElement2 = React.createElement(
    'a',
    {href: 'https://google.com', target: "_blank"},
    'Click me to visit Google'
)

const anotherElem = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)


ReactDOM.createRoot(document.getElementById('root'))
.render(
        // <App/>
    // <MyApp />
    // MyApp()
    // ReactElement
    ReactElement2
    // anotherElem
)
