export const Projects = () => {
    const courses = [
        { name: "Object Oriented Programming"},
        { name: "Data Structures and Algorithms"},
        { name: "Web ebgginering"},
        { name: "Artificial intelligence"},
        { name: "Human Computer Interaction"},
        { name: "Computer Graphics"},
        { name: "Database Managment Systems"},
        { name: "Distributed Database Systems"},
        { name: "React"}
    ]
    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="grid">
                    {/*SECTION PROJECTS*/}
                    <div className="section">
                        <h2>Projects</h2>
                        <ul className="project-list">
                            <li>HTML only Portafolio</li>
                            <li>Calculator</li>
                            <li>Quiz App</li>
                            <li>Coutdown time</li>
                            <li>Product upcoming</li>
                        </ul>
                    </div>
                    {/*SECTION PROJECTS*/}
                    <div className="section">
                        <h2>Work experience</h2>
                        <div className="work-section">
                            <h3>Accenture</h3>
                            <p>Solved all the frontend projects</p>
                            <a href="#" className="profile-link">Visit my Profile</a>
                        </div>
                        <div className="work-section">
                            <h3>Opensource work</h3>
                            <p>Contribuited to 50 opensource projects. Made my own projects with 200 stars</p>
                            <a href="#" className="profile-link">Visit my Github Profile</a>
                        </div>
                    </div>
                    <div className="section">
                        <h3>Courses i took...</h3>
                        <ul className="course-list">
                            { courses.map((item, index) => (
                                <li key={index}>- {item.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}