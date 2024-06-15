import { Box } from "@chakra-ui/layout";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { useContext, useState } from "react";
import ChatContext from "../context/ChatContext";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";


const ChatPage = () => {

    const [fetchAgain, setFetchAgain] = useState(false);
    const { user } = useContext(ChatContext);


    return (
        <div style={{ width: "100%" }}>
            {user && <SideDrawer />}
            <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
                {user && <MyChats fetchAgain={fetchAgain} />}
                {user && (
                    <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
                )}

            </Box>
        </div>


    )
}

export default ChatPage


