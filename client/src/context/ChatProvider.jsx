import React, { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import ChatContext from "./ChatContext";

// const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [selectedChat, setSelectedChat] = useState();
    const [user, setUser] = useState();
    // const [notification, setNotification] = useState([]);
    const [chats, setChats] = useState();

    // const navigate = useNavigate();

    useEffect(() => {
        try {
            const userInfo = JSON.parse(localStorage.getItem("userInfo"));
            setUser(userInfo || {});

            // if (!userInfo) {
            //     navigate('/')
            // }
        } catch (error) {
            console.error("Error parsing user info:", error);
        }
    }, []);


    return (
        <ChatContext.Provider
            value={{
                selectedChat,
                setSelectedChat,
                user,
                setUser,
                // notification,
                // setNotification,
                chats,
                setChats,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

// using chatState we  can access the state of our provider in any child component 
//! this is not working
// export const ChatState = () => {
//     return useContext(ChatContext);
// };

export default ChatProvider;


