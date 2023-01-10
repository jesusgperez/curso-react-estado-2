import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../components/TodoForm";
import { useTodos } from "./useTodos";

function EditTodoPage(){
  const { state, stateUpdaters } = useTodos()
  const { loading, getTodo } = state
  const { editTodo } = stateUpdaters
  const { id } = useParams()
  const location = useLocation()

  let todoText

  if (location.state?.todo) {
    todoText = location.state.todo.text
  } else if (loading) {
    return <p>Cargando...</p>
  } else {
    todoText = getTodo(id).text
  }
  return (
    <TodoForm
      label="Edita tu todo"
      defaultValue={todoText}
      submitText="Editar"
      submitEvent={(newText) => editTodo(id, newText)}
    ></TodoForm>
  )
}

export {EditTodoPage}