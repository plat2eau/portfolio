import PropTypes, { InferProps } from 'prop-types'
import Header from './header/Header'
import Footer from './footer/Footer'

const LayoutPropTypes = {
    children: PropTypes.any
}

export type LayoutProps = InferProps<typeof LayoutPropTypes>

const Layout = (props: LayoutProps) => {
    return (
        <>
            <main>
                <div className="background-color background-layout">
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