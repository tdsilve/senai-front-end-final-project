import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 38px;
  padding: 22px 18px;
`;

const StyledFooterDescription = styled.div`
  width: 220px;
`

const StyledPrivacyPolicy = styled.p`
  text-decoration: underline;
`;

const StyledFooterBottom = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 18px;

  @media(max-width: 498px){
    flex-direction: column;
    aligm-itens: center;
    justify-content: center;
    height: 300px;
    text-align: center;
  }

`

export { StyledFooter, StyledPrivacyPolicy, StyledFooterDescription, StyledFooterBottom };
