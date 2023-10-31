import PropTypes, { InferProps } from 'prop-types'
import "./ContentViewer.css"

const ContentViewerPropTypes = {}

export type ContentViewerProps = InferProps<typeof ContentViewerPropTypes>

const ContentViewer = (props: ContentViewerProps) => {
    return (
        <div className="content-viewer-container">
            <div className="cv-tab-container">
                <div className="cv-tab">
                    <div className="cv-tab-name">personal-info</div>
                    <div className="cv-close-icon">
                        <i className="ri-close-circle-fill ri-lg" style={{ display: "inline" }}></i>
                    </div>
                </div>
            </div>
            <div className="cv-childern-container">
                {/* Render Childern */}
                Hello
            </div>
        </div >
    )
}

ContentViewer.propTypes = ContentViewerPropTypes

export default ContentViewer