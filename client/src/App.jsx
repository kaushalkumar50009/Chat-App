import './App.css'
import { router } from './Router/routes.jsx'
import { RouterProvider } from 'react-router-dom'
// import ChatProvider from "./context/ChatProvider.jsx"

function App() {

    return (
        <>
            <div className="App">
                <RouterProvider router={router}>
                    {/* <ChatProvider ></ChatProvider> */}
                </RouterProvider>
            </div>
        </>
    )
}

export default App
