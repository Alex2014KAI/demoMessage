import React from "react";
import classesPreloader from './Preloader.module.css';
// import preloader from '../../../../assets/images/preloader.svg'
import preloader from '../../../../assets/images/preloadreRU.gif'

const Preloader = () => {

    return (<div>
        <img src={preloader} alt="preloade"
            className={classesPreloader.img} />
    </div>

    )
}

export default Preloader;