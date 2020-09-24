import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary shadow-sm">
            <div className="container">
                <Link className="navbar-brand logo text-white" to="/">
                    Pixabay - React
                </Link>
                <Link class="navbar-brand logo text-white" to="/about/">
                    About
                </Link>
            </div>
        </nav>
    );
}
