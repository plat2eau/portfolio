import PropTypes, { InferProps } from 'prop-types'
import Sidebar from '../../components/sideBar/Sidebar'
import "./AboutMe.css"
import ContentViewer from '../../components/contentViewer/ContentViewer'

const AboutMePropTypes = {

}

export type AboutMeProps = InferProps<typeof AboutMePropTypes>

const getDescTabs = () => {

    return (
        <div className="about-desc-tab">
            <div className="about-desc-tab-text">

            </div>
            <div className="about-desc-tab-closeicon">

            </div>
        </div>
    )
}

const getDescContent = () => {

    return (
        <>
            <div className="about-desc-content-lineno">

            </div>
            <div className="about-desc-content-text">

            </div>
        </>
    )
}

const AboutMe = (props: AboutMeProps) => {

    return (
        <div className="about-main-container">
            <Sidebar />
            <div className="about-desc-container">
                <ContentViewer />
            </div>
            <div className="about-snippet-showcase">
                <ContentViewer />
            </div>
        </div>
    )
}

AboutMe.propTypes = AboutMePropTypes

export default AboutMe