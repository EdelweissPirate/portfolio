export const handleFadeOut = (component, callback, navTo) => {
    if(component){
        component.classList = ''
        component.classList = 'fadeOut'

        setTimeout(() => {
            callback(navTo)
        }, 1000)
    }
}

const projects = [
    {
        name: 'Librarium Cinematica',
        tech: ['react', 'three', 'blender'],
        description: 'Simple web app that allows user to search and view movie posters.', 
        comments: 'Created using ReactJS, I wanted to make something easy to refresh my familiarity with the library as well as practice some design. I probably spent more time than anyone would feel necessary on the splash screen and the fading animations but I feel like it really makes the site flow nicer, instead of elements abruptly popping in and out. It also allowed me to reuse elements for this site as well.',
        url: 'https://librarium-cinematica.vercel.app/',
        repo: 'https://github.com/EdelweissPirate/librarium-cinematica'
    }
]

export const getProject = () => {
    const index = Math.floor(Math.random() * (projects.length))
    // console.log(index);

    // const thisProject = projects.shift()

    // projects.push(thisProject)

    // console.log(thisProject);

    return projects[index] //thisProject
} 

export const getProjects = () => {
    return projects
} 