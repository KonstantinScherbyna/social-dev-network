import { CircularProgress, LinearProgress } from '@mui/material';
import React from 'react';
import preloader from "../../../assets/images/preloader.svg";


// animation when loadin'
let Preloader = () => {
    debugger
    return <CircularProgress color="secondary" />
}
// let Preloader = () => {
//     return <div style={{ backgroundColor: 'white' }}>
//         <img src={preloader} />
//     </div>
// }

export default Preloader;