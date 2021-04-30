import {DivConteiner, ButtonHeader} from './styled'
export default function Header({textButton, onClickButton}){
    return (<DivConteiner>
         <ButtonHeader variant="outlined" color="primary" onClick={onClickButton} >
        {textButton}
      </ButtonHeader>
    </DivConteiner>)
}