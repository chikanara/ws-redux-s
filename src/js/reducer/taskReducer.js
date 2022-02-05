import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "../const";

const intialState = {
  tasks: [
    {
      id: 0,
      name: "learn html",
      isDone: true,
    },
    {
      id: 1,
      name: "learn css",
      isDone: true,
    },
    {
      id: 2,
      name: "learn node js",
      isDone: false,
    },
  ],
};
const taskReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== payload),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id == payload ? { ...item, isDone: !item.isDone } : item
        ),
      };

    default:
      return state;
  }
};

export default taskReducer;
