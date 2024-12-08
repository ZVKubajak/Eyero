import { InewsItem } from "@/interfaces";
import "./newsCard.css";

const NewsCard = ({
  name,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
}: InewsItem) => {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="newscard-div">
        <img className="news-image" src={urlToImage} alt={description} />
        <div className="info-container">
          <h1 className="newscard-title">{title}</h1>
            <div className="minor-detail-info">
            <p className="minor-detail">{name}</p>
            <p className="minor-detail">{publishedAt}</p>
            </div>
        </div>
      </div>
      </a>
    </div>
  );
};

export default NewsCard;
