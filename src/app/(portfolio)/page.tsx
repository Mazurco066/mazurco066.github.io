import { HomePage } from '@/presentation/ui/pages'
import {
  type Certificate,
  type Carrer,
  type Education,
  type Project,
  type Skill
} from '@/domain/types'
import { fetchPortfolioData } from '@/infra/api'

import './home.scss'
import { Suspense } from 'react'

export const revalidate = 3600

export default async function Home() {
  // Server side fetching
  const certificateItems = await fetchPortfolioData('certificates')
  const carrerItems = await fetchPortfolioData('carrers')
  const educationItems = await fetchPortfolioData('graduations')
  const projectItems = await fetchPortfolioData('projects')
  const skillItems = await fetchPortfolioData('skills')

  // Computed data
  const certificateData = certificateItems.map(i => {
    const imageObj: any = { ...i.fields['imgUrl'] as object }
    return {
      title: i.fields['title'],
      description: i.fields['description'],
      platform: i.fields['platform'],
      finishDate: i.fields['finishDate'],
      hours: i.fields['hours'],
      image: imageObj.fields['file'].url,
      url: i.fields['certUrl'] || null
    }
  }) as Certificate[]

  const carrerData = carrerItems.map(i => {
    const imageObj: any = { ...i.fields['imgUrl'] as object }
    return {
      title: i.fields['title'],
      date: i.fields['date'],
      company: i.fields['company'],
      admission: i.fields['admission'],
      roles: i.fields['roles'],
      logo: imageObj.fields['file'].url
    }
  }) as Carrer[]

  const educationData = educationItems.map(i => {
    const imageObj: any = { ...i.fields['imgUrl'] as object }
    return {
      title: i.fields['title'],
      date: i.fields['date'],
      company: i.fields['company'],
      completition: i.fields['completition'],
      logo: imageObj.fields['file'].url
    }
  }) as Education[]

  const projectData = projectItems.map(i => {
    const imgArray: any[] = (i.fields['images'] as Array<any>)!.map((j: any) => ({ ...j }))
    const thumbObj: any = { ...i.fields['thumbnail'] as object }
    return {
      title: i.fields['title'],
      description: i.fields['description'],
      url: i.fields['url'],
      images: imgArray.reduce((ac, cv) => [ ...ac, cv.fields.file.url ], []),
      thumbnail: thumbObj.fields['file'].url
    }
  }) as Project[]

  const skillData = skillItems.map(i => ({
    title: i.fields['title'],
    user: i.fields['user'],
    date: i.fields['date'],
    class: i.fields['class']
  })) as Skill[]

  // Portifolio component
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage
        certificatesData={certificateData}
        carrerData={carrerData}
        educationData={educationData}
        projectsData={projectData}
        skillsData={skillData}
      />
    </Suspense>
  )
}
