import { InferProps } from 'prop-types'
import TypeWriter from 'react-typewriter'
import "./Home.css"

const HomePropTypes = {

}

export type HomeProps = InferProps<typeof HomePropTypes>

const Home = (props: HomeProps) => {
    return (
        <>
            <img src={window.location.origin + "/graphics/graphic1.svg"} style={{ position: "absolute", left: "35vw", top: "0vh", zIndex: -1, height: "1000px", opacity: "0.8" }} alt="Background Graphic 1" />
            <img src={window.location.origin + "/graphics/graphic2.svg"} style={{ position: "absolute", left: "55vw", top: "30vh", zIndex: -1, height: "1000px", opacity: "0.8" }} alt="Background Graphic 2" />
            <div className="home-main-container">
                <div className="home-content">
                    <div className="home-text">
                        <TypeWriter typing={2}>
                            <div className="self-intro">

                                <h3>
                                    Hi all, I am
                                </h3>
                                <h1>
                                    Akhilesh Sharma
                                </h1>
                                <h2 className="font-blue">
                                    &gt; Front-end developer
                                </h2>
                            </div>
                            <div className="game-intro">
                                <div className="font-secondary">
                                    <h4>
                    // complete the game to continue
                                    </h4>
                                    <h4>
                    // you can also see it on my Github page
                                    </h4>
                                </div>
                                <div className="intro-github-link">
                                    <span id="github-const">
                                        const&nbsp;
                                    </span>
                                    <span id="github-githubLink">
                                        githubLink&nbsp;
                                    </span>
                                    <span id="github-equals-sign">
                                        =&nbsp;
                                    </span>
                                    <span id="github-link-string">
                                        https://github.com/plat2eau
                                    </span>
                                </div>
                            </div>
                        </TypeWriter>
                    </div>
                    <div className="home-game">
                        <img src={window.location.origin + "/game.png"} style={{ height: "54vh", float: "right" }} alt="Game" />
                    </div>
                </div>
            </div>
        </>
    )
}

Home.propTypes = HomePropTypes

export default Home