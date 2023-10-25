import PropTypes, { InferProps } from 'prop-types'
import "./Footer.css"
import NavigationBar from '../navigationBar/NavigationBar'
import NavigationItem, { NavigationItemProps } from '../navigationBar/navigationItem/NavigationItem'

const FooterPropTypes = {}

export type FooterProps = InferProps<typeof FooterPropTypes>

const Footer = (props: FooterProps) => {
    let props1: NavigationItemProps = {
        text: "find me in: "
    };
    let props2: NavigationItemProps = {
        icon: "ri-whatsapp-fill ri-2x",
        isActive: false,
        onClick: () => { window.open("http://wa.me/916284196632", "_blank", "noreferrer") }
    };
    let props3: NavigationItemProps = {
        icon: "ri-instagram-fill ri-2x",
        isActive: false,
        onClick: () => { window.open("https://www.instagram.com/local_tram", "_blank", "noreferrer") }
    };
    let props5: NavigationItemProps = {
        text: "@plat2eau",
        icon: "ri-github-fill ri-2x",
        isActive: false,
        onClick: () => { window.open("https://github.com/plat2eau/", "_blank", "noreferrer") }
    };
    return (
        <div className='footer-container'>
            <NavigationBar styles={{ borderTop: '1px solid #1e2d3d' }}>
                <NavigationItem styles={{ cursor: "default", hover: "" }} {...props1} />
                <NavigationItem {...props2} />
                <NavigationItem {...props3} />
                <div className="right-align-item github-tag">
                    <NavigationItem styles={{ width: "250px" }} {...props5} />
                </div>
            </NavigationBar>
        </div>
    )
}

Footer.propTypes = FooterPropTypes

export default Footer