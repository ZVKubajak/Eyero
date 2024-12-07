import { InewsItem } from "@/interfaces";

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
        <img src={urlToImage} alt={description} />
        <div className="info-container">
          <h1 style={{ color: "white" }}>{title}</h1>
          <p style={{ color: "white" }}>{name}</p>
          <p style={{ color: "white" }}>{publishedAt}</p>
        </div>
      </div>
      </a>
    </div>
  );
};

export default NewsCard;
