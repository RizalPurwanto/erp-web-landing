import styled from "@emotion/styled";
import HomeVectorRight from "../assets/home-vector-right.svg";
import HomeVectorLeft from "../assets/home-vector-left.svg";
import ErpLogo from "../assets/ERP-logo.svg";
import ChartVector from "../assets/chart-vector.svg"
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
  overflow: hidden;
  z-index: 0;
`;

const ChartVectorContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
z-index:1;
width:100%;
`

export default function Home() {
  return (
    <HomeContainer>
      <BackgroundVectors>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            marginTop: "-15%",
            marginLeft: "-9%",
          }}
        >
          <img height={400} src={HomeVectorLeft}></img>
          <div
            style={{
              zIndex: 3,
              marginTop: "9%",
              marginLeft: "-30%",
              color:'white',
              fontSize:'25px',
              fontWeight:'700',
              display:'flex',
              alignItems:'center',
              gap:'15px'

            }}
          >
            {" "}
            <img style={{}} height={70} src={ErpLogo}></img>
            <div>HOME</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "7%",
            marginLeft: "10%",
          }}
        >
          {" "}
           <div style={{
            height:'100%',
            display:'flex',
            alignItems:'center',
           justifyContent:'flex-start'
           }}><img height={150} src={ChartVector}></img></div>
          <img height={500} src={HomeVectorRight}></img>
        </div>
      </BackgroundVectors>
      <ChartVectorContainer>
       
      </ChartVectorContainer>
    </HomeContainer>
  );
}
