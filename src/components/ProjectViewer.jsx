import { useEffect } from "react"
import { getProject } from "../utils";
import ProjectExample from "./ProjectExample";

function ProjectViewer(props) {
    
    const doClose = props[0].doClose

    const processProjects = () => {
        let _projects = []
        
        for(const p in props){
            if(p !== '0'){
                _projects.push(props[p])
            }
        }

        return _projects
    }

    const projects = processProjects()

    useEffect(() => {
        document.body.style.cursor = 'default';
    
        return () => {
            
        }
    }, [])
    
    
    const handleClose = (e) => {
        e.preventDefault()

        doClose(false)
    }

    return (
        <>  
            <div className="spacer"></div>
            <div className='fadeIn-delay' style={{position: 'absolute', top: window.innerWidth > 900 ? '5%' : '2.5%', left: window.innerWidth > 900 ? '90%' : '80%', zIndex: '999'}}>
                <button onClick={handleClose}><h5>CLOSE</h5></button>
            </div>
            {window.innerWidth > 900 ? 
                <div style={{height: '100%', width: '100%'}}>
                    <ProjectExample {...getProject()} />
                </div>
                :
                <div id="wrapper">
                    {projects.map((item, i) => {
                        return <ProjectExample key={`pE - ${i}`} {...item} />
                    })}
                </div>
            }
            <div className="spacer"></div>
        </>
    )
}

export default ProjectViewer