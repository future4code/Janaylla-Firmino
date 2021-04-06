import CardProfile from '../components/CardProfile'
import styled from "styled-components"
import Choose from '../components/Choose'
const Bory = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
`
function Index() {
    return (
      <Bory>
          <CardProfile/>
          <Choose/>
          
          </Bory>
      
    );
  }
  
  export default Index;
  