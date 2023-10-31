import { InferProps } from 'prop-types'
import NavigationBar from '../navigationBar/NavigationBar';
import NavigationItem, { NavigationItemProps } from '../navigationBar/navigationItem/NavigationItem';
import './Header.css'
import { useNavigate } from 'react-router-dom';

const HeaderPropTypes = {}

export type HeaderProps = InferProps<typeof HeaderPropTypes>

const Header = (props: HeaderProps) => {

  const navigation = useNavigate();

  let props1: NavigationItemProps = {
    text: "akhilesh-sharma",
    isActive: false
  };
  let props2: NavigationItemProps = {
    text: "_hello",
    isActive: true,
    onClick: () => { navigation("/portfolio") }
  };
  let props3: NavigationItemProps = {
    text: "_about-me",
    isActive: false,
    onClick: () => { navigation("/portfolio/about-me") }
  };
  let props4: NavigationItemProps = {
    text: "_projects",
    isActive: false,
    onClick: () => { navigation("/portfolio/projects") }
  };
  let props5: NavigationItemProps = {
    text: "_contact-me",
    isActive: false,
    onClick: () => { }
  };
  return (
    <div className="header-layout">
      <NavigationBar>
        <NavigationItem {...props1} styles={{ width: "400px" }} />
        <NavigationItem {...props2} />
        <NavigationItem {...props3} />
        <NavigationItem {...props4} />
        <div className="right-align-item">
          <NavigationItem {...props5} />
        </div>
      </NavigationBar>
    </div>
  );
}

Header.propTypes = HeaderPropTypes

export default Header;
