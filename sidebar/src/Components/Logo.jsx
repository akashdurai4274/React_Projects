import { FireFilled } from "@ant-design/icons";
import { Collapse } from "antd";
const Logo = ({collapsed}) => {
  return (
    <div className="logo">
      <div className="logo-icon">
        <FireFilled onClick={()=>collapsed(false)} />
      </div>
    </div>
  );
};

export default Logo;
