// Styled components
import styled from 'styled-components';

// Images
import buildings from '../../images/buildings.png';
import confetti from '../../images/confetti.png';
import clouds from '../../images/clouds.png';
import graduation from '../../images/graduates.png';

// Containers
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

export const ContainerFluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

// Avatar section
export const AvatarSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary};
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const CubeEffect = styled.div`
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: 1px solid ${props => props.theme.primaryDark};
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 12s ease-in forwards infinite;
  &:nth-child(2n) {
    border-color: lighten(#0040C1, 10%);
  }
  &:nth-child(2) {
    animation-delay: 2s;
    left: 25vw;
    top: 40vh;
  }
  &:nth-child(3) {
    animation-delay: 4s;
    left: 75vw;
    top: 50vh;
  }
  &:nth-child(4) {
    animation-delay: 6s;
    left: 90vw;
    top: 10vh;
  }
  &:nth-child(5) {
    animation-delay: 8s;
    left: 10vw;
    top: 85vh;
  }
  &:nth-child(6) {
    animation-delay: 10s;
    left: 50vw;
    top: 10vh;
  }
  @keyframes cube {
    from {
      transform: scale(0) rotate(0deg) translate(-50%, -50%);   
      opacity: 1;
    }
    to {
      transform: scale(20) rotate(960deg) translate(-50%, -50%); 
      opacity: 0;
    }
  }
`;

export const AvatarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const AvatarDisplay = styled.div`
  max-width: 300px;
  padding: 10px;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.secondary};
  position: relative;
`;

export const AvatarFrame = styled.div`
  border-radius: 50%;
	border-width: 3px;
	border-style: solid;
  position: absolute;
  top: -15px;
  left: -15px;
  width: 110%;
  height: 110%;
  border-color: ${props => props.theme.secondary} transparent ${props => props.theme.secondary} transparent;
  animation: rotation 8s infinite linear;
  -webkit-animation: rotation 8s infinite linear;
  @media (max-width: 320px) {
    top: -13px;
    left: -13px;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
      -webkit-transform: rotate(359deg);
    }
  }
  @-webkit-keyframes rotation {
    from {
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
      -webkit-transform: rotate(359deg);
    }
  }
`;

export const AvatarImage = styled.img`
  max-width: 100%;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;

export const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AvatarName = styled.h2`
  margin-top: 1.5rem;
  font-size: 1.75rem;
  text-transform: uppercase;
  color: ${props => props.theme.secondary};
  white-space: nowrap;
  text-align: center;
`;

export const AvatarRole = styled.h3`
  margin-top: 0.25rem;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: #FFFFFF;
  white-space: nowrap;
  text-align: center;
`;

export const AvatarSocialMedia = styled.div`
  margin-top: 1rem;
  width: 100%;
  max-width: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SocialMediaButton = styled.a`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: none;
  outline: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  font-weight: bold;
  background-color: ${props => props.theme.secondary};
  &:hover {
    background-color: #5d2b30;
    color: ${props => props.theme.secondary};
  }
`;

export const SocialMediaIcon = styled.img`
  max-width: 50%;
  object-fit: cover;
`;

// Carrer section
export const CarrerSection = styled.div`
  position: relative;
  background-color: ${props => props.theme.background};
  width: 100%;
  padding-top: 40px;
  padding-bottom: 70px;
  background-image: url(${clouds}), url(${buildings});
  background-position: top, bottom;
  background-repeat: repeat-x;
`;

export const CarrerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CarrerTitle = styled.h1`
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 2.75rem;
  text-transform: uppercase;
  color: ${props => props.theme.secondary};
  width: 100%;
  border-bottom: 2px solid ${props => props.theme.secondary};
  @media (max-width:576px) { font-size: 2rem; }
`;

export const CarrerInnerContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CarrerLabel = styled.span`
  max-width: 300px;
  font-size: 1rem;
  text-align: justify;
  line-height: 1.25rem;
  @media (max-width:991px) {
    max-width: 100%;
  }
`;

export const CarrerBadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  flex-wrap: wrap;
  max-width: 100%;
  padding-top: 0.5rem;
`;

export const CarrerBadge = styled.span`
  font-size: 0.875rem;
  border-radius: 0.75rem;
  border: 1px solid ${props => props.theme.secondary};
  padding: 2px 5px;
  height: 1rem;
  text-align: center;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const CarrerTimeline = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: flex-end;
  @media (max-width: 576px) { margin-top: 1rem; }
`;

export const CarrerItem = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  &::after {
    content: '';
    width: 3px;
    height: 2rem;
    background-color: ${props => props.theme.secondary};
    position: absolute;
    bottom: -2rem;
    right: 3rem;
    margin: 0 auto; 
  }
  &:last-child {
    &::after{
      display: none;
    }
  }
`;

export const CarrerImgWrapper = styled.div`
  min-width: 100px;
  max-width: 100px;
  height: 100px;
  border-radius: 20px;
  border: 3px solid ${props => props.theme.secondary};
  margin-left: 1rem;
  position: relative;
  overflow: hidden;
  flex-grow: 1;
`;

export const CarrerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const CarrerDate = styled.span`
  color: ${props => props.theme.secondary};
  font-weight: 300;
  text-transform: uppercase;
  text-align: right;
`;

export const CarrerName = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
  text-align: right;
`;

export const CarrerCompany = styled.span`
  font-weight: 600;
  color: ${props => props.theme.secondary};
  text-align: right;
`;

// Skills scetion
export const SkillSection = styled.div`
  position: relative;
  background-color: #000000;
  width: 100%;
  color: #FFFFFF;
  padding: 40px 0 40px 0;
`;

export const SkillTitle = styled.p`
  color: #FFFFFF;
  font-size: 0.6rem;
  text-transform: uppercase;
  font-family: monospace;
`;

export const SkillVersion = styled.p`
  color: #FFFFFF;
  font-size: 0.75rem;
  margin: 0.5rem 0;
  font-family: monospace;
`;

export const TerminalDivider = styled.p`
  border-bottom: 1px dashed #FFFFFF;
  margin: 0.5rem 0;
`;

export const TerminalCommandPrefix = styled.span`
  color: #FFFFFF;
  font-size: 0.875rem;
  margin: 0.5rem 0;
  font-weight: 600;
  white-space: nowrap;
  font-family: monospace;
`;

export const TerminalCommand = styled.span`
  color: #FFFFFF;
  font-weight: normal;
  margin: 0.5rem 0;
  font-family: monospace;
`;

export const TerminalCursor = styled.span`
  border-right: 4px solid orange;
  margin-left: 0.5rem;
  animation: blink .75s step-end infinite;
  @keyframes blink {
    from, to { border-color: transparent }
    50% { border-color: orange; }
  }
`;

export const TerminalResult = styled.p`
  color: #FFFFFF;
  font-size: 0.875rem;
  margin: 0.5rem 0;
  font-weight: normal;
  font-family: monospace;
`;

// Education scetion
export const EducationSection = styled.div`
  position: relative;
  background-color: ${props => props.theme.background};
  width: 100%;
  padding-top: 40px;
  padding-bottom: 192px;
  background-image: url(${confetti}), url(${graduation});
  background-position: top, bottom;
  background-repeat: repeat-x;
`;

export const EducationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const EducationTitle = styled.h1`
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 2.75rem;
  text-transform: uppercase;
  color: ${props => props.theme.secondary};
  width: 100%;
  border-bottom: 2px solid ${props => props.theme.secondary};
  @media (max-width:576px) { font-size: 2rem; }
`;

export const EducationInnerContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const EducationLabel = styled.span`
  max-width: 300px;
  font-size: 1rem;
  text-align: justify;
  line-height: 1.25rem;
  @media (max-width:991px) {
    display: none;
  }
`;

export const EducationLabelAlt = styled.span`
  max-width: 100%;
  font-size: 1rem;
  text-align: justify;
  line-height: 1.25rem;
  margin-bottom: 1rem;
  @media (min-width:991px) {
    display: none;
  }
`;

export const EducationTimeline = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const EducationItem = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  &::after {
    content: '';
    width: 3px;
    height: 2rem;
    background-color: ${props => props.theme.secondary};
    position: absolute;
    bottom: -2rem;
    left: 3rem;
    margin: 0 auto; 
    @media (max-width:991px) {
      display: none;
    }
  }
  &:last-child {
    &::after{
      display: none;
    }
  }
`;

export const EducationImgWrapper = styled.div`
  min-width: 100px;
  max-width: 100px;
  height: 100px;
  border-radius: 20px;
  border: 3px solid ${props => props.theme.secondary};
  margin-right: 1rem;
  position: relative;
  overflow: hidden;
  flex-grow: 1;
`;

export const EducationInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const EducationDate = styled.span`
  color: ${props => props.theme.secondary};
  font-weight: 300;
  text-transform: uppercase;
  text-align: left;
`;

export const EducationName = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
  text-align: left;
`;

export const EducationCompany = styled.span`
  font-weight: 600;
  color: ${props => props.theme.secondary};
  text-align: left;
`;

// Certificates scetion
export const CertificateSection = styled.div`
  position: relative;
  background-color: ${props => props.theme.primary};
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const CertificateTitle = styled.h1`
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 2.75rem;
  text-transform: uppercase;
  color: ${props => props.theme.secondary};
  width: 100%;
  border-bottom: 2px solid ${props => props.theme.secondary};
  @media (max-width:576px) { font-size: 2rem; }
`;

export const CertificateDescription = styled.p`
  color: #FFFFFF;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const CertificateInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  @media (min-width: 560px) and (max-width: 991px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
  }
  @media (max-width: 559px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
`;

export const CertificateItem = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  border-radius: 0.5rem;
  width: 32%;
  padding: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  text-decoration: none;
  &:nth-child(3n) {
    margin-right: 0;
  }
  &:hover {
    background-color: #F5F5F5;
  }
  @media (min-width:769px) and (max-width:992px) {
    width: 31%;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
  @media (min-width:577px) and (max-width:768px) {
    width: 46%;
    &:nth-child(3n) {
      margin-right: 1rem;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  @media (max-width:576px) {
    width: 100%;
    margin-right: 0!important;
  }
`;

export const CertificateHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ababab;
`;

export const CertificateContent = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0.5rem 0;
`;

export const CertificateFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CertificateLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CertificateImg = styled.div`
  width: 4rem;
  height: 4rem;
  margin-right: 0.5rem;
`;

export const CertificateName = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  color: #000000;
`;

export const CertificatePlace = styled.p`
  font-weight: 300;
  color: ${props => props.theme.secondary};
`;

export const CertificateSumary = styled.p`
  font-size: 0.875rem;
  text-align: left;
  margin: 0;
  color: #000000;
`;

export const CertificateHours = styled.p`
  font-size: 0.75rem;
  color: #ababab;
  font-weight: 300;
`;

export const CertificateDate = styled.p`
  font-size: 0.75rem;
  color: #ababab;
  font-weight: 300;
`;

// Projects section
export const ProjectsSection = styled.div`
  position: relative;
  background-color: ${props => props.theme.background};
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;


  background-color:black;
background-image:
radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;


`;

export const ProjectsTitle = styled.h1`
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 2.75rem;
  text-transform: uppercase;
  color: ${props => props.theme.secondary};
  width: 100%;
  border-bottom: 2px solid ${props => props.theme.secondary};
  @media (max-width:576px) { font-size: 2rem; }
`;

export const ProjectsDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.5rem;
  color: ${props => props.theme.background};
`;

export const ProjectsInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  @media (min-width: 560px) and (max-width: 991px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
  }
  @media (max-width: 559px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
`;

export const ProjectItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.primary};
  border-radius: 0.5rem;
  width: 32%;
  padding: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  text-decoration: none;
  cursor: default;
  transition: all 0.3s ease;
  &:nth-child(3n) {
    margin-right: 0;
  }
  &:hover {
    background-color: ${props => props.theme.secondaryLight};
  }
  @media (min-width:769px) and (max-width:992px) {
    width: 46%;
    &:nth-child(3n) {
      margin-right: 1rem;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  @media (min-width:577px) and (max-width:768px) {
    width: 46%;
    &:nth-child(3n) {
      margin-right: 1rem;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  @media (max-width:576px) {
    width: 100%;
    margin-right: 0!important;
  }
`;

export const ProjectLogo = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  width: 100%;
`

export const ProjectImg = styled.div`
  width: 8rem;
  height: 8rem;
  margin-right: 0.5rem;
`;

export const ProjectTitle = styled.h4`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: #212121;
  width: 100%;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`

export const ProjectDescription = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  font-weight: 600;
  color: #212121;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`

export const ProjectLink = styled.a`
  background-color: ${props => props.theme.secondary};
  padding: 1rem 0.5rem;
  border-radius: 8px;
  width: 100%;
  color: ${props => props.theme.background};
  font-weight: bold;
  text-align: center;
  font-size: 1rem;
  text-transform: uppercase;
`