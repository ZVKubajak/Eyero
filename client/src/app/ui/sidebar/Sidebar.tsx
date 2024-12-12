import "./sidebar.css";
import StockPreview from "../stock-preview/StockPreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { sideChartHomepageDefaults } from "@/lib/utils";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="stockpreview-holder">
        <StockPreview
          ticker={sideChartHomepageDefaults[0].ticker}
          company={sideChartHomepageDefaults[0].company}
        />
        <StockPreview
          ticker={sideChartHomepageDefaults[1].ticker}
          company={sideChartHomepageDefaults[1].company}
        />
        <StockPreview
          ticker={sideChartHomepageDefaults[2].ticker}
          company={sideChartHomepageDefaults[2].company}
        />
        <StockPreview
          ticker={sideChartHomepageDefaults[3].ticker}
          company={sideChartHomepageDefaults[3].company}
        />
        <StockPreview
          ticker={sideChartHomepageDefaults[4].ticker}
          company={sideChartHomepageDefaults[4].company}
        />
        <StockPreview
          ticker={sideChartHomepageDefaults[5].ticker}
          company={sideChartHomepageDefaults[5].company}
        />
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
  );
};

export default Sidebar;
