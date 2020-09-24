import React, { useState, useEffect, useContext } from "react";
import Search from "../components/Search";
import ImageCard from "../components/ImageCard";
import { Context } from "../context";

function Home() {
    const [searchTerm, setSearchTerm] = useState("Nature");
    const { state, fetchImages } = useContext(Context);

    useEffect(() => {
        fetchImages(searchTerm);
    }, [searchTerm]); // eslint-disable-line

    return (
        <main class="container">
            <Search search={(value) => setSearchTerm(value)} />
            <div className="row justify-content-center">
                {state.loading ? (
                    <div className="spinner-border text-dark" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    <div className="container">
                        <div className="row  justify-content-center">
                            {state.images.map((image, i) => (
                                <ImageCard image={image} key={i} />
                            ))}
                        </div>
                    </div>
                )}
                {state.images.length === 0 && <p>No images</p>}
            </div>
        </main>
    );
}

export default Home;
