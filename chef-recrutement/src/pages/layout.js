import React from "react";

export function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Profil</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/vacataires">Vacataires</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/recrutement">Recrutement</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/conventions">Conventions</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/annonces">Annonces</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export function Footer(){
    return(
        <footer>
            <div className="container p-3 mt-5 border-hrefp">
            <small className="d-block text-muted text-center">&copy; 2024-vacatairesFsac</small>
            </div>
        </footer>
    );
}