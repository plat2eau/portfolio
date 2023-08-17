import "./navigationBar.css";
import NavigationItem, {
  NavigationItemProps,
} from "./navigationItem/navigationItem";

function NavigationBar() {
  let props1: NavigationItemProps = {
    text: "akhilesh-sharma",
    isActive: false,
  };
  let props2: NavigationItemProps = {
    text: "_hello",
    isActive: true,
  };
  let props3: NavigationItemProps = {
    text: "_about-me",
    isActive: false,
  };
  let props4: NavigationItemProps = {
    text: "_projects",
    isActive: false,
  };
  return (
    <div className="navigation-bar">
      <NavigationItem {...props1} />
      <NavigationItem {...props2} />
      <NavigationItem {...props3} />
      <NavigationItem {...props4} />
    </div>
  );
}

export default NavigationBar;
