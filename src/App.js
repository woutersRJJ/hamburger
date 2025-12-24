import React, { useState } from "react";
import "./App.css";
import {FILMS_DATA, SERIES_DATA} from "./data/data";
import {REGISSEURS_DATA} from "./data/data";

export default function App() {
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState("home");

    const handleNavigate = (target) => {
        setPage(target);
        setOpen(false); // close menu after click
    };

    return (
        <div className="app">
            <div className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={`menu ${open ? "show" : ""}`}>
                <button onClick={() => handleNavigate("home")}>Home</button>
                <button onClick={() => handleNavigate("films")}>Films</button>
                <button onClick={() => handleNavigate("series")}>Series</button>
                <button onClick={() => handleNavigate("regisseurs")}>Regisseurs</button>
            </nav>

            <main>
                {page === "home" && <Home />}
                {page === "films" && <Films />}
                {page === "series" && <Series />}
                {page === "regisseurs" && <Regisseurs />}
            </main>
        </div>
    );
}

function Home() {
    return <h1>Home</h1>;
}

function Films() {
    return (
        <>
            <h1>Films</h1>
            <div className="movie-grid">
                {FILMS_DATA.sort((a,b)=>a.title.localeCompare(b.title)).map((f, index) => <Film film={f} key={index}/>)}
            </div>
        </>
    );
}

function Regisseurs() {
    return (
        <>
            <h1>Regisseurs</h1>
            <div className="movie-grid">
                {REGISSEURS_DATA.sort((a,b)=>a.name.localeCompare(b.name)).map((r, index) => <Regisseur regisseur={r} key={index}/>)}
            </div>
        </>
    );
}

function Series() {
    return (
        <>
            <h1>Series</h1>
            <div className="movie-grid">
                {SERIES_DATA.sort((a,b)=>a.name.localeCompare(b.name)).map((s, index) => <Serie serie={s} key={index}/>)}
            </div>
        </>
    );
}

function Film({film}){
    return <div className="movie-card">
        <img src={film.image} alt={film.title} className="movie-image" />
        <div className="movie-info">
            <div>
                <h2>{film.title}</h2>
                <h3>{film.genre}</h3>
                <h4>{film.year}</h4>
            </div>

            <ul>
                {film.actors.map((actor,index) => <li key={index}>{actor}</li>)}
            </ul>
        </div>
    </div>
}

function Regisseur({regisseur}) {
    return <div className="movie-card">
        <div className="movie-info">
            <div>
                <h2>{regisseur.name}</h2>
                <h3>{regisseur.country}</h3>
            </div>
            <h4>Films</h4>
            <div className="list-container">
                <ul>
                    {regisseur.movies.map((movie,index) => <li key={index}>{movie}</li>)}
                </ul>
            </div>
        </div>
    </div>
}

function Serie({serie}) {
    const [expanded,setExpanded]=useState(false)

    const toggle=()=>{
        setExpanded(!expanded)
    }

    return <div className="movie-card">
        <div className="movie-info">
            <div>
                <h2>{serie.name}</h2>
                <h3>{serie.period}</h3>
            </div>
            <h4>Figuranten</h4>
            <div className={expanded ? "list expanded" : "list collapsed"}>
                <ul>
                    {serie.figuranten.map((figurant,index) => <li key={index}>{figurant}</li>)}
                </ul>
            </div>
            <button onClick={toggle} id="toggle">
                {expanded?'Toon minder':'Toon meer'}
            </button>
        </div>
    </div>
}
