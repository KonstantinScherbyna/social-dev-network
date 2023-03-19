import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme2 from '../../../theme2';

const Backdrp = () => {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
    };

    return (<ThemeProvider theme={theme2}>
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="warning" />
            </Backdrop>
        </div>
        </ThemeProvider>
    );
}

export default Backdrp
// export default function SimpleBackdrop() {
//   const [open, setOpen] = React.useState(false);
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={open}
//         onClick={handleClose}
//       >
//         <CircularProgress color="inherit" />
//       </Backdrop>
//     </div>
//   );
// }