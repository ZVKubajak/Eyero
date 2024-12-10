import "./stockpreview.css";
import StockGraph from "../../images/images.jpeg";

const StockPreview = () => {
  const stockName = "Dow Jones Industrial Accositoion!";
  const maxLength = 22;

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="stock-preview-container">
      <div className="stock-name">
        <h1>Dow Jones</h1>
        <h2>{truncateText(stockName, maxLength)}</h2>
      </div>
      <div className="stock-preview-graph">
        <img src={StockGraph.src} alt="example stock graph" width={60}/>
      </div>
      <div className="stock-preview-prices">
        <h1>44,401.93</h1>
        <div className="change-holder">
            <h2>-240.59</h2>
        </div>
      </div>
    </div>
  );
};

export default StockPreview;
