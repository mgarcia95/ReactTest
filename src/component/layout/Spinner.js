import React, {Fragment} from 'react'
import spinner from './loading-buffering.gif';

const Spinner = () => 
    <Fragment>
        <img src={spinner} alt="Loading..." style={{ width: '200px', margin:'auto', display: 'block'}}/>
    </Fragment>
    
export default Spinner
