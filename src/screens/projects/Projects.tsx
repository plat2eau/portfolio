import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import Sidebar from '../../components/sideBar/Sidebar'
import "./Projects.css"
import ContentViewer from '../../components/contentViewer/ContentViewer'

const ProjectsPropTypes = {
}

export type ProjectsProps = InferProps<typeof ProjectsPropTypes>

const Projects = (props: ProjectsProps) => {
    return (
        <div className="projects-main-container">
            <Sidebar />
            <div className="projects-content-container">
                <ContentViewer />

            </div>
        </div>
    )
}

Projects.propTypes = ProjectsPropTypes

export default Projects