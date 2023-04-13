import Card from "./Card";

const CardList = (props) => (
  <div className="">
    {props.profiles.map((profile) => (
      <Card key={profile.id} {...profile} />
    ))}
  </div>
);

export default CardList;
