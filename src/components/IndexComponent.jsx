import { MenuComponent } from "./MenuComponent.jsx"
import { AboutComponent } from "./AboutComponent.jsx"
import { JobsComponent } from "./JobsComponent.jsx"
import { ProjectsComponent } from "./ProjectsComponent.jsx"
import { ContactComponent } from "./ContactComponent.jsx"
import { FooterComponent } from "./FooterComponent.jsx"

import "../styles/Menu.css"

import "../styles/About.css"

import "../styles/Jobs.css"

import "../styles/Projects.css"
import "../styles/Contact.css"
import "../styles/Footer.css"


export const IndexComponent = () => {
  return (
    // Aplicamos clases condicionales basadas en el tema
    <div className="app">
      <main>
        <MenuComponent />
        <AboutComponent />
        <JobsComponent />
        <ProjectsComponent />
        <ContactComponent />
        <FooterComponent />
      </main>
    </div>
  )
}

