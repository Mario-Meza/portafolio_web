import { HomePage } from "./HomePage"
import { Projects } from "./Projects"
import { Articles } from "./Articles"
import { Contact } from "./Contact"
import { Footer } from "./Footer"

import "../styles/HomePage.css"
import "../styles/Projects.css"
import "../styles/Articles.css"
import "../styles/Contact.css"
import "../styles/Footer.css"

export const IndexComponent = () => {
  return (
    // Aplicamos clases condicionales basadas en el tema
    <div className="app">
      <main>
        <HomePage />
        <Projects />
        <Articles />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

