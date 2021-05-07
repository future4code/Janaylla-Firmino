import React, {useState} from 'react';
import Slide from '@material-ui/core/Slide';
import {SnackbarError, SnackbarSucess} from './styled'

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}
export default function DirectionSnackbar({text, sucess}) {
  const [open, setOpen] = useState(true);

  return (
    <div>
     { sucess ? 
     <SnackbarSucess
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={TransitionUp}
        message={text}
        key={'erro'}
      />:
      <SnackbarError
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={TransitionUp}
        message={text}
        key={'erro'}
      />
      }
      
    </div>
  );
}