import './App.css';
import java from './images/java.png';
import Javascript from './images/js.png';
import HTML5 from './images/html-5.png';
import CSS from './images/css-3.png';
import SQL from './images/mysql.png';
import GitHub from './images/github.png';
import Bootstrap from './images/bootstrap.png';
import react from './images/science.png';

function Skills(){
    return(
        <div className='Skills' id='Skills'>
            <h1>Skills :</h1>
            <img src={java} alt="Logo" className='icons' />
            <img src={Javascript} alt="Javascript" className='icons' />
            <img src={HTML5} alt="HTML5" className='icons' />
            <img src={CSS} alt="CSS" className='icons' />
            <img src={SQL} alt="SQL" className='icons' />
            <img src={GitHub} alt="GitHub" className='icons' />
            <img src={Bootstrap} alt="Bootstrap" className='icons' />
            <img src={react} alt="react" className='icons' />
        </div>
    );
}
export default Skills;