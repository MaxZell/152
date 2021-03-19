import { App } from "./Autocomplete";
// import React, {Suspense } from 'react';
// const App = React.lazy(() => import('./Autocomplete'), App => App.default);

function Ani(){
    return App();
}

export function createHome(){
    return (
        <div className="home">
            <h2>Home</h2>
            <div className="Title">MaxZel Webseite</div>
            {/* <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense> */}
            <Ani />
        </div>
    );
}