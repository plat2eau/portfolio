import PropTypes, { InferProps } from 'prop-types'

const SidebarPropTypes = {

}

export type SidebarProps = InferProps<typeof SidebarPropTypes>

const Sidebar = (props: SidebarProps) => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-iconBar">
            </div>
            <div className="sidebar-infoBar">
                <div className="sidebar-heading"></div>
                <div className="sidebar-main-content">

                </div>
            </div>
        </div>
    )
}

Sidebar.propTypes = SidebarPropTypes

export default Sidebar