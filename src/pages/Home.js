import styled from "@emotion/styled";
import HomeVectorRight from '../assets/home-vector-right.svg'
import HomeVectorLeft from '../assets/home-vector-left.svg'
const HomeContainer = styled.div`
  background-color: blue;
  width: 100%;
  height: 100vh;
  background-color: white;

`;

const BackgroundVectors = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  overflow:hidden;
 z-index:0;
`;

export default function Home() {
  return (
    <HomeContainer>
      <BackgroundVectors>

        <div style={{
            display:'flex',
            justifyContent:'flex-start',
            width:'100%',
            marginTop:'-15%',
            marginLeft:'-9%'
        }}> <img height={400} src={HomeVectorLeft}></img>
        </div>
        <div style={{
            display:'flex',
            justifyContent:'flex-end',
            width:'100%',
            marginTop:'7%',
            marginLeft:'10%'
        }}> <img height={500} src={HomeVectorRight}></img>
        </div>
       

      </BackgroundVectors>
    </HomeContainer>
  );
}
