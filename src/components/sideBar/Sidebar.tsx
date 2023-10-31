import PropTypes, { InferProps } from 'prop-types'
import "./Sidebar.css"

const SidebarPropTypes = {

}

export type SidebarProps = InferProps<typeof SidebarPropTypes>

const getSidebarSubItems = () => {
    return (
        <>
            <div className="sidebar-subitems">
                <div className="sidebar-subitem">Hello1</div>
                <div className="sidebar-subitem">Hello2</div>
            </div>
        </>
    )
}

const getSidebarItems = () => {
    return (
        <div className="sidebar-item">
            <div className="sidebar--item-heading">Heading1</div>
            {getSidebarSubItems()}
        </div>
    )
}

const getSidebarIcons = () => {
    return (
        <>
            <i className="ri-terminal-box-fill ri-2x sidebar-icon" />
            <i className="ri-user-fill ri-2x sidebar-icon" />
            <i className="ri-gamepad-fill ri-2x sidebar-icon" />
        </>
    )
}

const Sidebar = (props: SidebarProps) => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-iconBar">
                {getSidebarIcons()}
            </div>
            <div className="sidebar-infoBar">
                {getSidebarItems()}
            </div>
        </div>
    )
}

Sidebar.propTypes = SidebarPropTypes

export default Sidebar