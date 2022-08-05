import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import SinglePokemon from "./Pages/SinglePokemon";
import NoPage from "./Pages/NoPage";

import AllPokemon from "./Hooks/AllPokemon";

import "./index.css"

export default function App() {
    AllPokemon()
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/pokemon/browse" element={<Browse />}></Route>
                    <Route path="/pokemon/:name" element={<SinglePokemon />}></Route>
                    <Route path="*" element={<NoPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}