import "./sidebar.css";
import StockPreview from "../stock-preview/StockPreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {

    return (

        <div className="sidebar-container">
            <div className="stockpreview-holder">
            <StockPreview />
            <StockPreview />
            <StockPreview />
            <StockPreview />
            <StockPreview />
            <StockPreview />
            </div>
            <div className="upgrade-container">
                <div className="upgrade-button">
                    <div className="upgrade-children">
                        <div className="star-upgrade">
                        <FontAwesomeIcon className="star-icon " icon={faStar} />
                        </div>
                        <div className="upgrade-text">
                            <h1>Upgrade</h1>
                            <h3>Become a member today</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;