import axios from "axios";
import { atom, selector } from "recoil";
// ! linkedin
export const networkAtom= atom({
    key: "networkAtom",
    default:102
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default:0
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default:12
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default:0
})

export const totalMessCount = selector({
    key: "totalMessCount",
    get: ({ get }) => {
      const networkCount = get(networkAtom);
      const jobsCount = get(jobsAtom);
      const notificationCount = get(notificationAtom);
      const messagingCount = get(messagingAtom);
      return networkCount + jobsCount + notificationCount + messagingCount;
    },
  });

// ! Asynchronous data queries

// export const notifications= atom({
//     key:"notifications",
//     default: selector({
//         key:"notificationsSelector",
//         get: async()=>{
//             const res = await axios.get("https://sum-server.100xdevs.com/notifications")
//             return res.data
//         }
//     })
// });

// export const totalMessCount = selector({
//     key:"totalMessCount",
//     get:({get}) => {
//         const totalCount= get(notifications);
//         return totalCount.jobs + totalCount.message + totalCount.network + totalCount.notifications
//     }
// })