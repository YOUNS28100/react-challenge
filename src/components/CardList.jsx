import Card from "../components/Card";
import "../assets/styles/cardList.css";

function CardList({ data }) {
  return (
    <div className="cardList">
      {data.map((e) => (
        <Card
          {...data}
          key={e.id}
          title={e.title}
          description={e.description}
          image={e.image}
          price={e.price}
        />
      ))}
    </div>
  );
}

export default CardList;
