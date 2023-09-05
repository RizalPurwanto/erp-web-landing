import styled from "@emotion/styled";

const NavContainer =styled.div`
    width:100vw;
    margin-top:30px;
    display:flex;
    justify-content:flex-end;
    position:fixed;
    margin-right:60px;
    align-items:center;
    z-index:1;

`

const NavItem =  styled.div`
    margin-left:15px;
    margin-right:15px;
    color:black;
    font-weight:700;
    font-size:26px;
    text-align:center;
`

const LoginButton = styled.button`
    border-style:solid;
    border-color:#08b6feff;
    color:#08b6feff;
    background-color:white;
    width:13vw;
    border-radius:12px;
    padding:10px;
    text-align:center;
    font-weight:500;
    font-size:17px;

    margin-left:15px;
    margin-right:15px;
`
export default function Navbar() {
        return (
            <NavContainer>
                <NavItem>ABOUT</NavItem>
                <NavItem>PRICING</NavItem>
                <NavItem>CONTACT</NavItem>
                <LoginButton>LOGIN</LoginButton>
            </NavContainer>
        )
}