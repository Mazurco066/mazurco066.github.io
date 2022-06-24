import Img from 'gatsby-image';
import React from 'react';
import Zoom from 'react-reveal/Zoom';

import SEO from '../../components/SEO';

import avatar from '../../images/me.png';
import facebook from '../../images/facebook.svg';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';

import { useStaticQuery, graphql } from 'gatsby';

import {
  // Avatar section
  AvatarSection,
  AvatarContainer,
  AvatarDisplay,
  AvatarFrame,
  AvatarImage,
  AvatarInfo,
  AvatarName,
  AvatarRole,
  AvatarSocialMedia,
  // Carrer section
  CarrerBadge,
  CarrerBadgeContainer,
  CarrerContainer,
  CarrerInnerContainer,
  CarrerItem,
  CarrerImgWrapper,
  CarrerName,
  CarrerInfo,
  CarrerDate,
  CarrerCompany,
  CarrerLabel,
  CarrerSection,
  CarrerTimeline,
  CarrerTitle,
  // Education
  EducationCompany,
  EducationDate,
  EducationImgWrapper,
  EducationInfo,
  EducationInnerContainer,
  EducationItem,
  EducationLabel,
  EducationLabelAlt,
  EducationName,
  EducationTimeline,
  EducationTitle,
  EducationContainer,
  EducationSection,
  // Certificates section
  CertificateDescription,
  CertificateInnerContainer,
  CertificateSection,
  CertificateTitle,
  CertificateItem,
  CertificateContent,
  CertificateFooter,
  CertificateHeader,
  CertificateDate,
  CertificateHours,
  CertificateLink,
  CertificateName,
  CertificatePlace,
  CertificateSumary,
  CertificateImg,
  Container,
  CubeEffect,
  HomeWrapper,
  // Project section
  ProjectDescription,
  ProjectLink,
  ProjectLogo,
  ProjectImg,
  ProjectItem,
  ProjectTitle,
  ProjectsDescription,
  ProjectsInnerContainer,
  ProjectsSection,
  ProjectsTitle,
  // Skills section
  SkillSection,
  SkillTitle,
  SkillVersion,
  SocialMediaButton,
  SocialMediaIcon,
  // Terminal section
  TerminalCommand,
  TerminalCommandPrefix,
  TerminalCursor,
  TerminalDivider,
  TerminalResult
} from './styles';

const query = graphql`
  {
    carrers: allContentfulCarrer(sort: {fields: admission, order: DESC}) {
      nodes {
        date
        id
        company
        roles
        title
        imgUrl {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        admission
      }
    }
    certificates: allContentfulCertificate {
      nodes {
        certUrl
        description
        finishDate
        hours
        id
        imgUrl {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        title
        platform
      }
    }
    graduations: allContentfulEducation(sort: {order: DESC, fields: completition}) {
      nodes {
        completition
        date
        id
        company
        title
        imgUrl {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    skills: allContentfulSkill {
      nodes {
        user
        title
        class
        date
        id
      }
    }
    projects: allContentfulProjects {
      nodes {
        id
        title
        url
        description {
          description
        }
        thumbnail {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        images {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    contact: site {
      info: siteMetadata {
        facebookUrl
        githubUrl
        linkedinUrl
      }
    }
  }
`;

const Home = () => {
  // Retrieve static data
  const data = useStaticQuery(query);
  const { carrers, certificates, graduations, projects, skills, contact } = data;

  // JSX
  return (
    <HomeWrapper>
      <SEO title="Home" />
      {/* Avatar section */ }
      <AvatarSection id="home">
        <CubeEffect/>
        <CubeEffect/>
        <CubeEffect/>
        <CubeEffect/>
        <CubeEffect/>
        <CubeEffect/> 
        <Container>
          <AvatarContainer>
            <AvatarDisplay>
              <AvatarFrame />
              <AvatarImage src={avatar} />
            </AvatarDisplay>
            <AvatarInfo>
              <AvatarName>Gabriel Mazurco</AvatarName>
              <AvatarRole>Desenvolvedor Web</AvatarRole>
              <AvatarSocialMedia>
                <SocialMediaButton
                  href={contact.info.facebookUrl}
                  target="_blank"
                >
                  <SocialMediaIcon src={facebook} alt="facebook"/>
                </SocialMediaButton>
                <SocialMediaButton
                  href={contact.info.linkedinUrl}
                  target="_blank"
                >
                  <SocialMediaIcon src={linkedin} alt="linkedin"/>
                </SocialMediaButton>
                <SocialMediaButton
                  href={contact.info.githubUrl}
                  target="_blank"
                >
                  <SocialMediaIcon src={github} alt="github"/>
                </SocialMediaButton>
              </AvatarSocialMedia>
            </AvatarInfo>
          </AvatarContainer> 
        </Container>
      </AvatarSection>
      {/* Carrer section */}
      <CarrerSection id="carrer">
        <Zoom>
          <Container>
            <CarrerContainer>
              <CarrerTitle>Carreira</CarrerTitle>
              <CarrerInnerContainer>
                <CarrerLabel>
                  Sou um profissional voltado para área de programação Web, tenho como Stack principal
                  a linguagem de programação <strong>Javascript</strong>. Utilizo frameworks para tornar
                  o trabalho mais eficiente como: <strong>Vue, React, React Native, Gatsby, Node...</strong>{' '}
                  Seguindo esse caminho, ja trabalhei nas seguintes empresas:
                  <br/><br />
                  <strong>Linguagens e Frameworks: </strong>
                  <CarrerBadgeContainer>
                    <CarrerBadge>html</CarrerBadge>
                    <CarrerBadge>css</CarrerBadge>
                    <CarrerBadge>javascript</CarrerBadge>
                    <CarrerBadge>Java</CarrerBadge>
                    <CarrerBadge>Kotlin</CarrerBadge>
                    <CarrerBadge>node.js</CarrerBadge>
                    <CarrerBadge>Vue</CarrerBadge>
                    <CarrerBadge>React</CarrerBadge>
                    <CarrerBadge>Gatsby</CarrerBadge>
                    <CarrerBadge>Express</CarrerBadge>
                  </CarrerBadgeContainer>
                </CarrerLabel>
                <CarrerTimeline>
                  { carrers.nodes.map(carrer =>  (
                      <CarrerItem key={carrer.id}>
                        <CarrerInfo>
                          <CarrerDate>{ carrer.date }</CarrerDate>
                          <CarrerName>{ carrer.title }</CarrerName>
                          <CarrerCompany>{ carrer.company }</CarrerCompany>  
                        </CarrerInfo>
                        <CarrerImgWrapper>
                          <Img fluid={carrer.imgUrl.fluid}></Img>
                        </CarrerImgWrapper>
                      </CarrerItem>
                    )
                  ) }
                </CarrerTimeline>
              </CarrerInnerContainer>
            </CarrerContainer>
          </Container>
        </Zoom>
      </CarrerSection>
      {/* Skills section */}
      <SkillSection id="skill">
        <Zoom>
          <Container>         
            <SkillTitle>&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;_&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</SkillTitle>
            <SkillTitle>|&nbsp;|&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;(_)&nbsp;(_)&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</SkillTitle>
            <SkillTitle>|&nbsp;|__|&nbsp;|&nbsp;__&nbsp;_|&nbsp;|__&nbsp;&nbsp;_|&nbsp;|_&nbsp;&nbsp;__|&nbsp;|&nbsp;__&nbsp;_&nbsp;&nbsp;__|&nbsp;|&nbsp;___&nbsp;&nbsp;___&nbsp;</SkillTitle>
            <SkillTitle>|&nbsp;&nbsp;__&nbsp;&nbsp;|/&nbsp;_`&nbsp;|&nbsp;'_&nbsp;\|&nbsp;|&nbsp;|&nbsp;|/&nbsp;_`&nbsp;|/&nbsp;_`&nbsp;|/&nbsp;_`&nbsp;|/&nbsp;_&nbsp;\/&nbsp;__|</SkillTitle>
            <SkillTitle>|&nbsp;|&nbsp;&nbsp;|&nbsp;|&nbsp;(_|&nbsp;|&nbsp;|_)&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;(_|&nbsp;|&nbsp;(_|&nbsp;|&nbsp;(_|&nbsp;|&nbsp;&nbsp;__/\__&nbsp;\</SkillTitle>
            <SkillTitle>|_|&nbsp;&nbsp;|_|\__,_|_.__/|_|_|_|\__,_|\__,_|\__,_|\___||___/</SkillTitle>
            <SkillVersion>v2020.04</SkillVersion>
            <TerminalDivider/>
            <TerminalCommandPrefix>
              mazurco@portfolio:~/Skills$
            </TerminalCommandPrefix>
            <TerminalCommand>
              {' '}ls -l
            </TerminalCommand>
            { skills.nodes.map(skill => (
              <TerminalResult key={skill.id}>-rwxr-xr-x {skill.user} {skill.date} <strong>"{skill.title}"</strong></TerminalResult>
            ))}
            <TerminalCommandPrefix>
              mazurco@portfolio:~/Skills$
            </TerminalCommandPrefix>
            <TerminalCursor />
          </Container>
        </Zoom>
      </SkillSection>
      {/* Education section */}
      <EducationSection id="education">
        <Zoom>
          <Container>
            <EducationContainer>
              <EducationTitle>Graduação</EducationTitle>
              <EducationInnerContainer>
                <EducationLabelAlt>
                  Sou graduado em <strong>Tecnologia de Análise e Desenvolvimento de Sistemas</strong> e possuo o 
                  título de <strong>Tecnólogo</strong>. Segue ao lado as instituições de ensino em que estudei.
                </EducationLabelAlt>
                <EducationTimeline>
                  { graduations.nodes.map(education =>  (
                      <EducationItem key={education.id}>
                        <EducationImgWrapper>
                          <Img fluid={education.imgUrl.fluid}></Img>
                        </EducationImgWrapper>
                        <EducationInfo>
                          <EducationDate>{ education.date }</EducationDate>
                          <EducationName>{ education.title }</EducationName>
                          <EducationCompany>{ education.company }</EducationCompany>  
                        </EducationInfo>
                      </EducationItem>
                    )
                  )}
                </EducationTimeline>
                <EducationLabel>
                  Sou graduado em <strong>Tecnologia de Análise e Desenvolvimento de Sistemas</strong> e possuo o 
                  título de <strong>Tecnólogo</strong>. Segue ao lado as instituições de ensino em que estudei.
                </EducationLabel>
              </EducationInnerContainer>
            </EducationContainer>
          </Container>
        </Zoom>
      </EducationSection>
      {/* Certificates section */}
      <CertificateSection id="certificate">
        <Zoom>
          <Container>
            <CertificateTitle>Certificados</CertificateTitle>
            <CertificateDescription>
              Durante meus estudos completei alguns cursos e fiz algumas
              certificações, elas serão listadas abaixo com seus respectivos 
              links ao certificado de conclusão.
            </CertificateDescription>
            <CertificateInnerContainer>
              { certificates.nodes.map(cert => (
                <CertificateItem
                  href={cert.certUrl ? cert.certUrl : null}
                  target="_blank"
                  key={cert.id}
                >
                  <CertificateHeader>
                    <CertificateImg>
                      <Img fluid={cert.imgUrl.fluid}></Img>
                    </CertificateImg>
                    <CertificateLink>
                      <CertificateName>{cert.title}</CertificateName>
                      <CertificatePlace>{cert.platform}</CertificatePlace>
                    </CertificateLink>
                  </CertificateHeader>
                  <CertificateContent>
                    <CertificateSumary>{cert.description}</CertificateSumary>
                  </CertificateContent>
                  <CertificateFooter>
                    <CertificateHours>{cert.hours}hrs</CertificateHours>
                    <CertificateDate>{cert.finishDate}</CertificateDate>
                  </CertificateFooter>
                </CertificateItem>
              ))}
            </CertificateInnerContainer>
          </Container>
        </Zoom>  
      </CertificateSection>
      {/* Projects section */}
      <ProjectsSection id="projects">
        <Zoom>
          <Container>
            <ProjectsTitle>Projetos</ProjectsTitle>
            <ProjectsDescription>
              Segue abaixo uma lista de projetos independentes que desenvolvi. Esses projetos foram criados com o intuito de 
              possuir qualidade e utilidade para um nicho especifico.
            </ProjectsDescription>
            <ProjectsInnerContainer>
              { projects.nodes.map(project => (
                <ProjectItem key={project.id}>
                  <ProjectLogo>
                    <ProjectImg>
                      <Img fluid={project.thumbnail.fluid}></Img>
                    </ProjectImg>
                  </ProjectLogo>
                  <ProjectTitle>
                    { project.title }
                  </ProjectTitle>
                  <ProjectDescription>
                    { project.description.description }
                  </ProjectDescription>
                  <ProjectLink href={project.url} target="_blank" rel="noopener">
                    Acessar
                  </ProjectLink>
                </ProjectItem>
              ))}
            </ProjectsInnerContainer>
          </Container>
        </Zoom>
      </ProjectsSection>
    </HomeWrapper>
  );
};

export default Home;