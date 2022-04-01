import Todo from "./Todo";

const List = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return <Todo todo={todo} key={index} />;
      })}
    </div>
  );
};
export default List;
