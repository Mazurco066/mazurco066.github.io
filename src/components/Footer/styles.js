import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) { max-width: 540px; }
  @media (min-width: 768px) { max-width: 720px; }
  @media (min-width: 992px) { max-width: 960px; }
`;

export const MainFooter = styled.footer`
  width: 100%;
  background-color: #212121;
  padding: 20px 0 0 0;
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  @media (max-width:768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const FooterSectionTitle = styled.h4`
  color: #FFFFFF;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const FooterAuthor = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 2rem;

  @media (max-width:768px) {
    flex-grow: 0;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const FooterAuthorCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const FooterAuthorImg = styled.img`
  max-width: 2.5rem;
  object-fit: cover;
  margin-right: 0.5rem;
`;

export const FooterAuthorName = styled.p`
  color: #FFFFFF;
  text-transform: uppercase;
  font-weight: 600;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 2rem;
`;

export const FooterContact = styled.p`
  text-decoration: none;
  color: #FFFFFF;
  font-weight: 600;
  margin-bottom: 0.25rem;
  text-transform: none;
  @media (max-width:768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const FooterNavigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width:768px) {
    width: 100%;
  }
`;

export const FooterNavigationLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #FFFFFF;
  font-weight: 600;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  &:hover {
    text-decoration: underline;
  }
`;

export const FooterCopyright = styled.div`
  padding: 20px 0;
  background-color: #121212;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const FooterCopyrightText = styled.p`
  color: #FFFFFF;
  font-size: 0.75rem;
  font-weight: normal;
`;

export const FooterSubtitle = styled.small`
  color: #FFFFFF;
  font-weight: 300;
  margin-bottom: 0.5rem;
`;

export const GatsbyLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const GatsbyLink = styled.a`
  cursor: pointer;
  max-width: 2.5rem;
  margin-right: 0.5rem;
`;

export const GatsbyImg = styled.img`
  max-width: 100%;
  object-fit: cover;
`;