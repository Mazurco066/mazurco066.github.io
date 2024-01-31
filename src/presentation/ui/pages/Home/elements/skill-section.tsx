// Dependencies
import { ReactElement } from 'react'
import { type Skill } from '@/domain/types'

// Components

// Component Props
type SkillSectionProps = {
  skills: Skill[]
}

// Skill component
export default function SkillSection({ skills }: SkillSectionProps): ReactElement {

  // Component TSX
  return (
    <section id="skill-section" className="min-h-screen relative">
      <div className="container mx-auto h-full p-4">
        <p className="text-white smaller">&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;_&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p className="text-white smaller">|&nbsp;|&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;(_)&nbsp;(_)&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p className="text-white smaller">|&nbsp;|__|&nbsp;|&nbsp;__&nbsp;_|&nbsp;|__&nbsp;&nbsp;_|&nbsp;|_&nbsp;&nbsp;__|&nbsp;|&nbsp;__&nbsp;_&nbsp;&nbsp;__|&nbsp;|&nbsp;___&nbsp;&nbsp;___&nbsp;</p>
        <p className="text-white smaller">|&nbsp;&nbsp;__&nbsp;&nbsp;|/&nbsp;_`&nbsp;|&nbsp; _&nbsp;\|&nbsp;|&nbsp;|&nbsp;|/&nbsp;_`&nbsp;|/&nbsp;_`&nbsp;|/&nbsp;_`&nbsp;|/&nbsp;_&nbsp;\/&nbsp;__|</p>
        <p className="text-white smaller">|&nbsp;|&nbsp;&nbsp;|&nbsp;|&nbsp;(_|&nbsp;|&nbsp;|_)&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;(_|&nbsp;|&nbsp;(_|&nbsp;|&nbsp;(_|&nbsp;|&nbsp;&nbsp;__/\__&nbsp;\</p>
        <p className="text-white smaller">|_|&nbsp;&nbsp;|_|\__,_|_.__/|_|_|_|\__,_|\__,_|\__,_|\___||___/</p>
        <p className="text-white text-sm">v2024.01</p>
        <div className="w-full border-dashed text-white border-b-2 mt-2 mb-2"></div>
        <p className="text-white text-sm"><strong>mazurco@portfolio:~/Skills$</strong> ls -l</p>
        {
          skills.map((s, i) => (
            <p className="text-white text-sm" key={i}>
              -rwxr-xr-x {s.user} {s.date} <strong>{s.title}</strong>
            </p>
          ))
        }
        <p className="text-white text-sm">
          <strong>mazurco@portfolio:~/Skills$</strong> <span className="terminal-cursor"></span>
        </p>
      </div>
    </section>
  )
}
