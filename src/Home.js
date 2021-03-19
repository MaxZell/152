import { App } from "./Autocomplete";

function Ani(){
    return App();
}

export function createHome(){
    return (
        <div className="home">
            <h2>Home</h2>
            <div className="Title">MaxZel Webseite</div>
            <Ani />
        </div>
    );
}