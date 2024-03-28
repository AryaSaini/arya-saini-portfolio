import Project from '../components/Projects'

function Portfolio() {
    const projects = [
        {
            title: '',
            image: '',
            link: '',
            githubLink: ''
        },
        {
            title: '',
            image: '',
            link: '',
            githubLink: ''
        },
        {
            title: '',
            image: '',
            link: '',
            githubLink: ''
        }
    ]

    return (
        <div>
            <h1>My Projects</h1>
            <div>
                {
                    projects.map((project) => (
                        <Project project={project} key={project.title}></Project>
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio