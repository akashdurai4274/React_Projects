import { Button } from "antd";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
const TogglethemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <div className="toggle-theme-btn">
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineMoon /> : <HiOutlineSun />}
      </Button>
    </div>
  );
};

export default TogglethemeButton;
