import "../../styles/components/card.css";

function Card({
  title,
  children,
}) {
  return (
    <div className="app-card">

      {title && (
        <h2 className="app-card-title">
          {title}
        </h2>
      )}

      {children}

    </div>
  );
}

export default Card;