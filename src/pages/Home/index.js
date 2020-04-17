import React from 'react';
import Zoom from 'react-reveal/Zoom';

import SEO from '../../components/SEO';

import avatar from '../../images/me.png';
import facebook from '../../images/facebook.svg';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';

import { useStaticQuery, graphql } from "gatsby";

import {
  AvatarSection,
  AvatarContainer,
  AvatarDisplay,
  AvatarFrame,
  AvatarImage,
  AvatarInfo,
  AvatarName,
  AvatarRole,
  AvatarSocialMedia,
  CarrerBadge,
  CarrerBadgeContainer,
  CarrerContainer,
  CarrerInnerContainer,
  CarrerItem,
  CarrerImgWrapper,
  CarrerName,
  CarrerImage,
  CarrerInfo,
  CarrerDate,
  CarrerCompany,
  CarrerLabel,
  CarrerSection,
  CarrerTimeline,
  CarrerTitle,
  EducationCompany,
  EducationDate,
  EducationImage,
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
  CertificateImg,
  CertificateLink,
  CertificateName,
  CertificatePlace,
  CertificateSumary,
  Container,
  CubeEffect,
  EducationSection,
  HomeWrapper,
  SkillSection,
  SkillTitle,
  SkillVersion,
  SocialMediaButton,
  SocialMediaIcon,
  TerminalCommand,
  TerminalCommandPrefix,
  TerminalCursor,
  TerminalDivider,
  TerminalResult
} from './styles';

export default function Home() {
  const data = useStaticQuery(graphql`
    query homePageQuery {
      site {
        siteMetadata {
          facebookUrl,
          githubUrl,
          linkedinUrl,
          carrers { id, title, date, company, imgUrl },
          certificates { id, title, platform, description, hours, finishDate, imgUrl, certUrl },
          education { id, title, date, company, imgUrl },
          skills { id, date, title, user }
        }
      }
    }
  `);

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
                  href={data.site.siteMetadata.facebookUrl}
                  target="_blank"
                >
                  <SocialMediaIcon src={facebook} alt="facebook"/>
                </SocialMediaButton>
                <SocialMediaButton
                  href={data.site.siteMetadata.linkedinUrl}
                  target="_blank"
                >
                  <SocialMediaIcon src={linkedin} alt="linkedin"/>
                </SocialMediaButton>
                <SocialMediaButton
                  href={data.site.siteMetadata.githubUrl}
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
                  { data.site.siteMetadata.carrers.map(carrer =>  (
                      <CarrerItem key={carrer.id}>
                        <CarrerInfo>
                          <CarrerDate>{ carrer.date }</CarrerDate>
                          <CarrerName>{ carrer.title }</CarrerName>
                          <CarrerCompany>{ carrer.company }</CarrerCompany>  
                        </CarrerInfo>
                        <CarrerImgWrapper>
                          <CarrerImage src={carrer.imgUrl}></CarrerImage>
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
            { data.site.siteMetadata.skills.map(skill => (
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
                  { data.site.siteMetadata.education.map(education =>  (
                      <EducationItem key={education.id}>
                        <EducationImgWrapper>
                          <EducationImage src={education.imgUrl}></EducationImage>
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
              { data.site.siteMetadata.certificates.map(cert => (
                <CertificateItem
                  href={cert.certUrl ? cert.certUrl : null}
                  target="_blank"
                  key={cert.id}
                >
                  <CertificateHeader>
                    <CertificateImg src={cert.imgUrl} alt="Certificate Image" />
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
    </HomeWrapper>
  );
}
