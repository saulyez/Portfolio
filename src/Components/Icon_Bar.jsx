import React from 'react';
import Linux from '../assets/linux.svg'
import HTML_IMG from '../assets/html_bw.svg'
import Python from '../assets/python.svg'
import JS from '../assets/js_bw.svg'
import '../Styles/icon-bar.css'

const Icon_Bar = () => {
    return (
        <div className="icon-bar">
            <img src={Python} alt="Icon" className='icon'/>
            <img src={JS} alt="JS" className='icon'/>
            <img src={Linux} alt="Linux" className='icon'/>
            <img src={HTML_IMG} alt="HTML" className='icon'/>
        </div>
    );
}
export default Icon_Bar;