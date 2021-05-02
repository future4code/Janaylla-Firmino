import {DivConteiner, ButtonHeader, DivIcon, ImgIcon} from './styled'
import Reddit from '../../assets/reddit_icon.png'
import {goToHome} from '../../router/coordinator'
import { useHistory } from "react-router-dom";
export default function Header({textButton, onClickButton}){
  const history = useHistory();
    return (<DivConteiner>
<DivIcon onClick={() => goToHome(history)}>
  <ImgIcon src={Reddit} />
  <h3>LabeEddit</h3>
</DivIcon>
         <ButtonHeader variant="outlined" color="primary" onClick={onClickButton} >
        {textButton}
      </ButtonHeader>
    </DivConteiner>)
}