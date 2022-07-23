import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import NoPage from "./Pages/NoPage";


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/browse" element={<Browse />}></Route>
                    <Route path="*" element={<NoPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}