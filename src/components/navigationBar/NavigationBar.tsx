import PropTypes, { InferProps } from "prop-types";
import "./NavigationBar.css";

const NavigationBarPropTypes = {
  children: PropTypes.any,
  styles: PropTypes.any
}

export type NavigationBarProps = InferProps<typeof NavigationBarPropTypes>

const NavigationBar = (props: NavigationBarProps) => {
  return (
    <div className="navigation-bar" style={props.styles} >
      {props.children}
    </div >
  );
}

NavigationBar.propTypes = NavigationBarPropTypes

export default NavigationBar;
