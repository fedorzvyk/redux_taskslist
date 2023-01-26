// import { nanoid } from "nanoid";
import { createAction, nanoid } from "@reduxjs/toolkit";

// export const addTask = text => {
//   return {
//     type: "tasks/addTask",
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };




// console.log(addTask("Learn Redux Toolkit"));
// {type: "tasks/addTask", payload: "Learn Redux Toolkit"}

// export const deleteTask = taskId => {
//   return {
//     type: "tasks/deleteTask",
//     payload: taskId,
//   };
// };

// export const toggleCompleted = taskId => {
//   return {
//     type: "tasks/toggleCompleted",
//     payload: taskId,
//   };
// };

// export const setStatusFilter = value => {
//   return {
//     type: "filters/setStatusFilter",
//     payload: value,
//   };
// };





export const addTask = createAction("tasks/AddTask", text => {
    return {
      payload: {
        text,
        id: nanoid(),
        completed: false,
      },
    };
  });
export const deleteTask = createAction("tasks/deleteTask");
export const toggleCompleted = createAction("tasks/toggleCompleted");
export const setStatusFilter = createAction("filters/setStatusFilter");