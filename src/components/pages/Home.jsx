import CustomCanvas from "../CustomCanvas"
import { useEffect, useState } from "react"

import Title from "../Title"
import Copyright from '../Copyright'
import ProjectViewer from "../ProjectViewer"

import { getProjects } from "../../utils"

function Home() {
    const [showingProject, setShowingProject] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        const projects = getProjects()
        setData([{doClose: showProject}, ...projects])
    
        return () => {
            
        }
    }, [])
    

    const showProject = (bool) => {
        setShowingProject(bool)
    }

    return (
        <>
            <section className="fadeIn-delay">
                <CustomCanvas isClicked={showProject} />
            </section>
            <section className="ignore-mouse">
                <Title />
            </section>

            {showingProject ? 
            <section>
                <ProjectViewer 
                    {...data}
                />
            </section>
            : 
            <div style={{display: window.innerWidth > 900 ? 'none' : 'block'}}>
                <button onPointerUp={() => showProject(true)} className="btn glass-btn center-absolute" style={{position: 'absolute', top: '70%', maxWidth: '50%'}}>
                    VIEW
                </button>
            </div>
            }

            <aside className="copyright fadeIn-delay">
                <Copyright />
            </aside>
        </>
    )
}

export default Home