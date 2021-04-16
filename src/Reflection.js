import './styles/Reflection.css';
import {drawTopButton} from './topButton';

const imagesBrowserUrl = process.env.PUBLIC_URL + '/assets/browsers/';

function Button(){
    return drawTopButton();
}

export function createReflection() {

  return (
    <div className="reflection">
        <img src={imagesBrowserUrl + ""} alt="" title="" />
        <Button />
    </div>
  );
}
