interface Profile {
  name: string
  email: string
  githubUsername: string
  school: string
  department: string
  degree: string
  enrollmentPeriod: string
}

// Fill these in with the details you want to display publicly.
export const profile: Profile = {
  name: '',
  email: '',
  githubUsername: 'chocofly233',
  school: '',
  department: '',
  degree: '',
  enrollmentPeriod: ''
}

export const featuredProject = {
  title: 'IQ-learn-on-Basalt',
  url: 'https://github.com/chocofly233/IQ-learn-on-Basalt',
  description: '用 IQ-Learn 完成 MineRL 的 FindCave 任务。',
  descriptionEn: 'An IQ-Learn implementation for the MineRL FindCave task.'
}
