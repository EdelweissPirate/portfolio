import Badges from "./Badges"

function ProjectExample(props) {
    const { name, tech, description, comments, url, repo } = props

    const handleVisit = (e) => {
        e.preventDefault()

        window.open(url, '_blank')
    }

    const handleRepo = (e) => {
        e.preventDefault()

        window.open(repo, '_blank')
    }

    const truncateText = (str, len) => {
        if(str?.length > len){
            return str.split('').splice(0, len).join('') + '...'
        }

        return str
    }

    return (
        <div className="example-project glass fadeIn">
                <div style={{height: '100%'}}>
                    <h2>
                        {name}
                    </h2>
                    <article>
                        <Badges
                            dataType='card'
                            solidity={tech.includes('solidity')}
                            react={tech.includes('react')}
                            tailwind={tech.includes('tailwind')}
                            electron={tech.includes('electron')}
                            mongo={tech.includes('mongo')}
                            three={tech.includes('three')}
                            blender={tech.includes('blender')}
                        />
                        <p>
                            {truncateText(description, 150)}
                        </p>
                        <p>
                            {truncateText(comments, window.innerWidth > 900 ? 400 : 200)}
                        </p>
                    </article>
                    <div style={{width: window.innerWidth > 900 ? '60%' : '100%', display: 'flex', flexDirection: 'row', alignSelf: 'center'}}>
                        <button onClick={handleVisit} className="btn glass-btn">
                            VISIT
                        </button>

                        <button onClick={handleRepo} className="btn glass-btn">
                            REPO
                        </button>
                    </div>
                </div>
                <div className="site-preview">
                    <embed type="text/html" src={url} width="100%" height="100%" style={{overflow:'auto', borderRadius: '16px'}}>
                    </embed>
                </div>
            </div>
    )
}

export default ProjectExample