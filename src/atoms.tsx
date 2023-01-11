import { doesNotMatch } from "assert";
import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["a", "b", "e"],
    Doing: ["c", "d"],
    Done: ["f"],
  },
});
