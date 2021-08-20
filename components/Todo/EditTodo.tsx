const EditTodo = ({ editTodo, setEditTodo, handleEditTodo }: any) => {
  return (
    <div style={{ paddingTop: 10 }}>
      <input
        type="text"
        style={{ marginLeft: 10 }}
        value={editTodo}
        onChange={(e) => setEditTodo(e.target.value)}
      />
      <input type="submit" value="submit" onClick={handleEditTodo} />
    </div>
  );
};

export default EditTodo;
