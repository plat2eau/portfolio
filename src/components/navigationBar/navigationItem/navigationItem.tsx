import "./NavigationItem.css";
import PropTypes, { InferProps } from "prop-types";

const NavigationItemPropTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  styles: PropTypes.any,
  icon: PropTypes.string
}

export type NavigationItemProps = InferProps<typeof NavigationItemPropTypes>

function NavigationItem(props: NavigationItemProps) {
  return (
    <div className="navigation-item"
      style={{ ...props.styles, pointerEvents: `${!props.onClick ? "none" : "auto"}` }}
      onClick={props.onClick ? props.onClick : () => { }}>
      <div className="navigation-item-content">
        {props.text && <div
          className="navigation-item-text">
          {props.text}
        </div>}
        {props.icon && <div
          className="navigation-item-icon">
          <i className={props.icon} />
        </div>}
      </div>
      <div
        className="active-tab-indicator"
        style={{ backgroundColor: props.isActive ? "#FEA55F" : "" }}
      />
    </div>
  );
}

NavigationItem.propTypes = NavigationItemPropTypes

export default NavigationItem;
