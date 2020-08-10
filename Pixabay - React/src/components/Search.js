import React, { useState } from "react";

export default function Search(props) {
    const [searchTerm, setSearchTerm] = useState("");

    const search = () => {
        document.getElementById("search").addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
                props.search(searchTerm);
            }
        });
    };
    return (
        <div className="my-5 input-group container">
            <input
                className="form-control"
                type="text"
                id="search"
                placeholder="Search for images"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyUp={search}
            />

            <div className="input-group-append">
                <button
                    className="btn btn-primary px-5"
                    type="button"
                    onClick={() => props.search(searchTerm)}
                >
                    Go!
                </button>
            </div>
        </div>
    );
}
