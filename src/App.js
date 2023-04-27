import React from "react";
import { AuthProvider } from "./contexts/auth";
import RoutesApp from "./routes";
import GlobalStyle from "./styles/global";

const App = () => {
    return (
        <AuthProvider>
            <RoutesApp></RoutesApp>
            <GlobalStyle></GlobalStyle>
        </AuthProvider>
    )
}

export default App