import PropTypes, { InferProps } from 'prop-types'

const SidebarEntryPropTypes = {

}

export type SidebarEntryProps = InferProps<typeof SidebarEntryPropTypes>

const SidebarEntry = (props: SidebarEntryProps) => {
    return (
        <div className="SidebarEntry-container">
            <div className="SidebarEntry-iconBar">
            </div>
            <div className="SidebarEntry-infoBar">
                <div className="SidebarEntry-heading"></div>
                <div className="SidebarEntry-main-content">

                </div>
            </div>
        </div>
    )
}

SidebarEntry.propTypes = SidebarEntryPropTypes

export default SidebarEntry