import { MenuComponent } from "./MenuComponent.jsx"
import { JobsComponent } from "./JobsComponent.jsx"
import { ProjectsComponent } from "./ProjectsComponent.jsx"
import { ContactComponent } from "./ContactComponent.jsx"
import { FooterComponent } from "./FooterComponent.jsx"
import { AboutComponent } from "./AboutComponent.jsx"

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

