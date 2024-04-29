import { useEffect, useState } from "react";
import {
  FaHome,
  // FaUser,
  // FaCog,
  // FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaDashcube,
  FaUser,
  FaBlog,
  FaAddressBook,
  FaSearch,
  FaAccusoft,
  FaApplePay,
  FaDochub,
  FaFire,
  // FaBookmark,
  // FaBlog,
} from "react-icons/fa";
import subItemsData from "./Detials.json";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [upBlog, setUpBlog] = useState(false); // State for Blog dropdown
  const [upHome, setUpHome] = useState(false); // State for Home dropdown
  const [address, setAddress] = useState(false); // State for Address dropdown
  const [user, setUser] = useState(false); // State for User dropdown
  const [explore, setExplore] = useState(false); // State for Explore dropdown
  const [bookmark, setBookmark] = useState(false); // State for Bookmark dropdown
  const [upDashboard, setUpDashboard] = useState(false);
  const [first, setfirst] = useState(false); // State for Dashboard dropdown
  const [second, setsecond] = useState(false); // State for Dashboard dropdown
  const [third, setThird] = useState(false); // State for Dashboard dropdown
  const [fourth, setfourth] = useState(false); // State for Dashboard dropdown

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", collapsed);
  }, [collapsed]);

  return (
    <div className="whole">
      <div
        className={`sidebar ${collapsed ? "collapsed" : ""}`}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
      >
        <div className="header">
          <div className="brand">
            <FaFire />
          </div>
          <hr className="custom-hr" />
        </div>

        <div className={collapsed ? "contents" : "content"}>
          <div className="scroll">
            <div className={collapsed ? "containerss" : "containers"}>
              <div className="icon">
                <FaDashcube />
              </div>
              <div className={collapsed ? "nameshide" : "names"}>Dashboard</div>
              <div className={`names ${collapsed ? "nameshide" : ""}`}>
                {/* Arrow icon for toggle */}
                {upDashboard ? (
                  <FaChevronUp
                    className="arrow-icon"
                    onClick={() => setUpDashboard(!upDashboard)}
                  />
                ) : (
                  <FaChevronDown
                    className="arrow-icon"
                    onClick={() => setUpDashboard(!upDashboard)}
                  />
                )}
              </div>
            </div>
            {!collapsed && upDashboard && (
              <ul className="sub-items">
                {subItemsData.dashboardSubItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            {!collapsed && <p>Pages</p>}

            <div className="container">
              <div className="icon">
                <FaHome />
              </div>
              <div className={collapsed ? "nameshide" : "names"}>Home</div>
              <div className="container-end">
                <div className={`namess ${collapsed ? "nameshide" : ""}`}>
                  {/* Arrow icon for toggle */}
                  {upHome ? (
                    <FaChevronUp
                      className="arrow-icon"
                      onClick={() => setUpHome(!upHome)}
                    />
                  ) : (
                    <FaChevronDown
                      className="arrow-icon"
                      onClick={() => setUpHome(!upHome)}
                    />
                  )}
                </div>
              </div>
            </div>
            {!collapsed && upHome && (
              <ul className="sub-items">
                {subItemsData.homeSubItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            <div className="container">
              <div className="icon">
                <FaUser />
              </div>
              <div className={collapsed ? "nameshide" : "names"}>User</div>
              <div className="container-end">
                <div className={`namess ${collapsed ? "nameshide" : ""}`}>
                  {/* Arrow icon for toggle */}
                  {user ? (
                    <FaChevronUp
                      className="arrow-icon"
                      onClick={() => setUser(!user)}
                    />
                  ) : (
                    <FaChevronDown
                      className="arrow-icon"
                      onClick={() => setUser(!user)}
                    />
                  )}
                </div>
              </div>
            </div>
            {!collapsed && user && (
              <ul className="sub-items">
                {subItemsData.homeSubItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            <div className="container">
              <div className="icon">
                <FaBlog />
              </div>
              <div className={collapsed ? "nameshide" : "names"}>Blog</div>
              <div className="container-end">
                <div className={`namess ${collapsed ? "nameshide" : ""}`}>
                  {/* Arrow icon for toggle */}
                  {upBlog ? (
                    <FaChevronUp
                      className="arrow-icon"
                      onClick={() => setUpBlog(!upBlog)}
                    />
                  ) : (
                    <FaChevronDown
                      className="arrow-icon"
                      onClick={() => setUpBlog(!upBlog)}
                    />
                  )}
                </div>
              </div>
            </div>
            {!collapsed && upBlog && (
              <ul className="sub-items">
                {subItemsData.homeSubItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            <div className="container">
              <div className="icon">
                <FaAddressBook />
              </div>
              <div className={collapsed ? "nameshide" : "names"}>Address</div>
              <div className="container-end">
                <div className={`namess ${collapsed ? "nameshide" : ""}`}>
                  {/* Arrow icon for toggle */}
                  {address ? (
                    <FaChevronUp
                      className="arrow-icon"
                      onClick={() => setAddress(!address)}
                    />
                  ) : (
                    <FaChevronDown
                      className="arrow-icon"
                      onClick={() => setAddress(!address)}
                    />
                  )}
                </div>
              </div>
            </div>
            {!collapsed && address && (
              <ul className="sub-items">
                {subItemsData.homeSubItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            <div className="containersss">
              <div className="icon">
                <FaSearch />
              </div>
              <div className={collapsed ? "nameshides" : "names"}>Explore</div>
              <div className="container-end">
                <div className={`namess ${collapsed ? "nameshide" : ""}`}>
                  {/* Arrow icon for toggle */}
                  {explore ? (
                    <FaChevronUp
                      className="arrow-icon"
                      onClick={() => setExplore(!explore)}
                    />
                  ) : (
                    <FaChevronDown
                      className="arrow-icon"
                      onClick={() => setExplore(!explore)}
                    />
                  )}
                </div>
              </div>
            </div>
            {!collapsed && explore && (
              <ul className="sub-items">
                {subItemsData.homeSubItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            {!collapsed && <p className="par">Apps</p>}
            <div className={collapsed ? "paras" : "para"}>
              <div className="icon">
                <FaHome />
              </div>
              <div className={collapsed ? "nameshide" : "names"}>Book</div>
              <div className="container-end">
                <div className={`namess ${collapsed ? "nameshide" : ""}`}>
                  {/* Arrow icon for toggle */}
                  {bookmark ? (
                    <FaChevronUp
                      className="arrow-icon"
                      onClick={() => setBookmark(!bookmark)}
                    />
                  ) : (
                    <FaChevronDown
                      className="arrow-icon"
                      onClick={() => setBookmark(!bookmark)}
                    />
                  )}
                </div>
              </div>
            </div>
            {!collapsed && bookmark && (
              <ul className="sub-items">
                {subItemsData.homeSubItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            <div className="container">
              <div className="icon">
                <FaAddressBook />
              </div>
              <div className={collapsed ? "nameshide" : "names"}>Address</div>
              <div className="container-end">
                <div className={`namess ${collapsed ? "nameshide" : ""}`}>
                  {/* Arrow icon for toggle */}
                  {first ? (
                    <FaChevronUp
                      className="arrow-icon"
                      onClick={() => setfirst(!first)}
                    />
                  ) : (
                    <FaChevronDown
                      className="arrow-icon"
                      onClick={() => setfirst(!first)}
                    />
                  )}
                </div>
              </div>
            </div>
            {!collapsed && first && (
              <ul className="sub-items">
                {subItemsData.homeSubItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            <div className="container">
              <div className="icon">
                <FaUser />
              </div>
              <div className={collapsed ? "nameshide" : "names"}>First</div>
              <div className="container-end">
                <div className={`namess ${collapsed ? "nameshide" : ""}`}>
                  {/* Arrow icon for toggle */}
                  {second ? (
                    <FaChevronUp
                      className="arrow-icon"
                      onClick={() => setsecond(!second)}
                    />
                  ) : (
                    <FaChevronDown
                      className="arrow-icon"
                      onClick={() => setsecond(!second)}
                    />
                  )}
                </div>
              </div>
            </div>
            {!collapsed && second && (
              <ul className="sub-items">
                {subItemsData.homeSubItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            <div className="container">
              <div className="icon">
                <FaAccusoft />
              </div>
              <div className={collapsed ? "nameshide" : "names"}>Second</div>
              <div className="container-end">
                <div className={`namess ${collapsed ? "nameshide" : ""}`}>
                  {/* Arrow icon for toggle */}
                  {third ? (
                    <FaChevronUp
                      className="arrow-icon"
                      onClick={() => setThird(!third)}
                    />
                  ) : (
                    <FaChevronDown
                      className="arrow-icon"
                      onClick={() => setThird(!third)}
                    />
                  )}
                </div>
              </div>
            </div>
            {!collapsed && third && (
              <ul className="sub-items">
                {subItemsData.homeSubItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            <div className="container">
              <div className="icon">
                <FaApplePay />
              </div>
              <div className={collapsed ? "nameshide" : "names"}>Pay</div>
              <div className="container-end">
                <div className={`namess ${collapsed ? "nameshide" : ""}`}>
                  {/* Arrow icon for toggle */}
                  {fourth ? (
                    <FaChevronUp
                      className="arrow-icon"
                      onClick={() => setfourth(!fourth)}
                    />
                  ) : (
                    <FaChevronDown
                      className="arrow-icon"
                      onClick={() => setfourth(!fourth)}
                    />
                  )}
                </div>
              </div>
            </div>
            {!collapsed && fourth && (
              <ul className="sub-items">
                {subItemsData.homeSubItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            {/* Add similar logic for other main items like Bookmark, Blog, User, Explore, and Address */}
          </div>
        </div>
        <div className="but">
          <button className={!collapsed ? "butcol" : "nbut"}>
            {collapsed ? <FaDochub /> : "Docs "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
