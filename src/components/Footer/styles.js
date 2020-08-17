import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: #010611;
  border-top: 2px solid #ffc20a;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;


export const SocialMedia = styled.div`
width: 111px;
list-style: none;
align-items: center;
justify-content: center;
padding-bottom: auto;
margin: auto;
display: flex;
`;

export const FooterNavListaItem = styled.div`
border-radius: 0.5rem;
margin-right: 2vw;
text-align: center;
height: 100%;
:hover{
  filter: brightness(80%);
}
`;

export const FooterNavLink = styled.a`
color: #ffc20a;
text-decoration: none;
`;