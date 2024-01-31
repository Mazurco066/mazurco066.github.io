// Components
import { Header, Footer } from '@/presentation/ui/components'
import {
  CarrerSection,
  CertificateSection,
  EducationSection,
  HeroSection,
  ProjectSection,
  SkillSection
} from './elements'
import {
  type Certificate,
  type Carrer,
  type Education,
  type Project,
  type Skill
} from '@/domain/types'

// Home page props
type HomePageProps = {
  carrerData: Carrer[]
  educationData: Education[]
  certificatesData: Certificate[]
  projectsData: Project[]
  skillsData: Skill[]
}

// Home page component
export default function HomePage({
  carrerData,
  certificatesData,
  educationData,
  projectsData,
  skillsData
}: HomePageProps) {
  return (
    <main>
      <Header />
      <HeroSection />
      <CarrerSection carrer={carrerData} />
      <SkillSection skills={skillsData} />
      <EducationSection graduations={educationData} />
      <CertificateSection certificates={certificatesData} />
      <ProjectSection projects={projectsData} />
      <Footer />
    </main>
  )
}
