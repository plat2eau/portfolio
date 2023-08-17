import "./navigationItem.css";

export type NavigationItemProps = {
  text: string;
  isActive: boolean;
};

function NavigationItem(props: NavigationItemProps) {
  return (
    <div className="navigation-item">
      <div className="navigation-item-text">{props.text}</div>
      <div
        className="active-tab-indicator"
        style={{ backgroundColor: props.isActive ? "#FEA55F" : "" }}
      />
    </div>
  );
}

export default NavigationItem;
