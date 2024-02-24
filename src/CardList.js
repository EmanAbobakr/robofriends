import { Card } from "./Card";

export const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => {
        return <Card id={robot.id} name={robot.name} email={robot.email} />;
      })}
    </div>
  );
};
