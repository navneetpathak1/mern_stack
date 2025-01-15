import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "./todos";
import axios from "axios";

// export const todosAtomFamily = atomFamily({
//     key: "todosAtomFamily", // Ensure key is unique across the app
//     default: (id) => {
//         const todo = TODOS.find((x) => x.id === id);
//         return (
// /            todo || {
//                 id,
//                 title: "Not Found",
//                 description: "This task does not exist in the system.",
//             }
//         );
//     },
// });

//!  selectorFamily

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily", 
    default: selectorFamily({
        key:"todosSelectorFamily",
        get: (id) => async({get}) => {
            const res= await axios.get("https://sum-server.100xdevs.com/todo?is="+{id});
            return res.data.todo;
        }
    })
});
