import type { IProjects } from '../../types/IProjects'
import './index.scss'

export function ProjectsContent({children, ProjectAcessUrl = '', projectDescription = '', projectImageUrl = '', projectName= '', ProjectYear = ''}: IProjects) {
    return (
        <div className='projectContentClass'>
            <img src={projectImageUrl} alt="Imagem Ilustrativa do Projeto" />
            <h3>{projectName}</h3>
            <p>Desenvolvido em {ProjectYear}</p>
            <p>{projectDescription}</p>
            <div>{children}</div>
            <button onClick={()=> window.open(ProjectAcessUrl, '_blank')}>Visualizar</button>
        </div>
    )
}