import ReactDOM from 'react-dom/client'
import './index.css'
import ChatProvider from './context/ChatProvider'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'



ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <ChatProvider>
      <App />
    </ChatProvider>
  </ChakraProvider>
)

