import PropTypes, { InferProps } from 'prop-types'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import "./Layout.css"

const LayoutPropTypes = {
    children: PropTypes.any
}

export type LayoutProps = InferProps<typeof LayoutPropTypes>

const Layout = (props: LayoutProps) => {
    return (
        <>
            <main className="background-layout">
                <div className="main-container">
                    <Header />
                    {props.children}
                    <Footer />
                </div>
            </main>
        </>
    )
}

Layout.propTypes = LayoutPropTypes

export default Layout; 