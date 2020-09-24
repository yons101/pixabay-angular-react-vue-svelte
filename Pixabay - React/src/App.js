import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ContextProvider from "./context";

function App() {
    return (
        <ContextProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about/">
                        <About />
                    </Route>
                </Switch>
            </Router>
        </ContextProvider>
    );
}

export default App;
