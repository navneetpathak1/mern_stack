

//! for app bar 


// import { atom, selector } from "recoil";

// export const networkAtom=atom({
//     key:"networkAtom",
//     default: 104
// })
// export const jobsAtom=atom({
//     key:"jobsAtom",
//     default: 0
// })
// export const notificationAtom =atom({
//     key:"notificationAtom",
//     default: 12
// })
// export const messagingAtom=atom({
//     key:"messagingAtom",
//     default: 0
// })

// export const totalNotificationSelector=selector({
//     key: "totalNotification",
//     get: ({get})=>{
//         const networkAtomCount=get(networkAtom);
//         const jobAtomCount=get(jobsAtom);
//         const notificationAtomCount=get(notificationAtom);
//         const messagingAtomCount=get(messagingAtom);
//          return networkAtomCount+jobAtomCount+notificationAtomCount+messagingAtomCount;
//     }
// })

// ! for Asynchronous data queries

// import axios from "axios";
// import { atom, selector } from "recoil";

// export const notificationAtom = atom({
//   key: "notificationAtom",
//   default: selector({
//     key: "networkAtomSelector",
//     get: async () => {
//       const res = await axios.get("https://sum-server.100xdevs.com/notification");
//       return res.data;
//     },
//   }),
// });

// export const totalNotificationSelector = selector({
//   key: "totalNotificationSelector",
//   get: ({ get }) => {
//     const allNotifications = get(notificationAtom);
//     return (
//       allNotifications.jobAtom +
//       allNotifications.messageAtom +
//       allNotifications.networkAtom +
//       allNotifications.notificationAtom
//     );
//   },
// });

// ! atomFamily

// import { atomFamily } from "recoil";
// import { Todos } from "./src/todo";


// export const todoAtomFamily = atomFamily({
//   key: "todoAtomFamily",
//   default: (id) => {
//     return Todos.find((x) => x.id === id);
//   },
// });


// ! selectorFamily


import { atomFamily, selector } from "recoil";
import axios from "axios";


export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: selector({
    key:"todoSelectorFamily",
    get:(id)=> async ({get})=>{
        const res=await axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`);
        return res.data.todo;
    }
  })
});