import React, { createContext, useState } from "react";

export const Context = createContext();

function ContextProvider(props) {
    const [state, setState] = useState({
        images: [],
        loading: false
    });

    const fetchImages = (searchTerm) => {
        setState({
            ...state,
            loading: true
        });
        fetch(
            `https://pixabay.com/api/?key=17039239-7ccdc3f5c80caa80d628661b2&q=${searchTerm}&image_type=photo`
        )
            .then((res) => res.json())
            .then((data) => {
                setState({
                    images: data.hits,
                    loading: false
                });
            });
    };

    return (
        <Context.Provider value={{ state, fetchImages }}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;
