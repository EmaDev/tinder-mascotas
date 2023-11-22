import { useState } from "react";
import { BottomBar } from '../components/BottomBar';
import { NavBar } from '../components/NavBar';
import { HomeScreen } from './HomeScreen';
import { SettingsScreen } from "./SettingsScreen";
import { LoginScreen } from "./LoginScreen";
import { LikesScreen } from "./LikesScreen";
import { ChatsScreen } from "./ChatsScreen";
import { RegisterScreen } from "./RegisterScreen";
import { CompleteProfile } from "./CompleteProfile";
import { ProfileScreen } from "./ProfileScreen";
import { ChatScreen } from "./ChatScreen";

export type ScreenType = "Home" | "Settings" | "Likes"|"Chat" 
| "Login" | "Register"|"CompleteProfile"|"User"|"Chats";

interface ScreenNavigator {
    actual: ScreenType;
    prev: ScreenType;
}
export const Navigator = () => {
    const [actualScreen, setActualScreen] = useState<ScreenNavigator>({ actual: "Login", prev: "Login" });

    const navigate = (screen: ScreenType, goHome = false) => {
        setActualScreen({
            actual: screen,
            prev: goHome ? "Home" : actualScreen.actual
        })
    }

    const renderScreen = () => {
        switch (actualScreen.actual) {
            case "Home": return <HomeScreen />
            case "Settings": return <SettingsScreen/>
            case "Chat": return <ChatScreen/>
            case "Chats": return <ChatsScreen navigate={navigate}/>
            case "Likes": return <LikesScreen/>
            case "CompleteProfile": return <CompleteProfile navigate={navigate}/>
            case "User": return <ProfileScreen/>
            default: return <HomeScreen />
        }
    }

    if(actualScreen.actual == "Login") {
        return <LoginScreen navigate={navigate}/>
    }else if(actualScreen.actual == "Register"){
        return <RegisterScreen navigate={navigate}/>
    }
    return (
        <>
        <NavBar title={actualScreen.actual} prevScreen={actualScreen.prev} navigate={navigate}/>
        {renderScreen()}
        <BottomBar actualScreen={actualScreen.actual} navigate={navigate}/>
        </>
    )
}
