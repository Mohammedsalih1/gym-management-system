import { mockMembers } from "../data/Mockdata";

// const STORAGE_KEY = "fitness-day-members";

export const initializeStorage = () => {
    const existingData =
      localStorage.getItem("fitness-day-members");
  
    if (!existingData) {
      localStorage.setItem(
        "fitness-day-members",
        JSON.stringify(mockMembers)
      );
    }
  };

// // getting all members 
// export const getMembers = () => {
//     const data = localStorage.getItem(STORAGE_KEY);
  
//     return data ? JSON.parse(data) : [];
//   };

// // saving members 
// export const saveMembers = (members) => {
//     localStorage.setItem(
//       STORAGE_KEY,
//       JSON.stringify(members)
//     );
//   };

// // add new members
// export const addMember = (memberData) => {
//     const members = getMembers();
  
//     const newMember = {
//       id: Date.now(),
//       ...memberData,
//     };
  
//     members.push(newMember);
  
//     saveMembers(members);
  
//     return newMember;
//   };

// //   delete member
// export const deleteMember = (memberId) => {
//     const members = getMembers();
  
//     const updatedMembers = members.filter(
//       (member) => member.id !== memberId
//     );
  
//     saveMembers(updatedMembers);
//   };

// // edit member
// export const updateMember = (
//     memberId,
//     updatedData
//   ) => {
//     const members = getMembers();
  
//     const updatedMembers = members.map(
//       (member) =>
//         member.id === memberId
//           ? {
//               ...member,
//               ...updatedData,
//             }
//           : member
//     );
  
//     saveMembers(updatedMembers);
//   };

// // renew 
// export const renewSubscription = (
//     memberId,
//     duration = 30
//   ) => {
//     const members = getMembers();
  
//     const updatedMembers = members.map(
//       (member) => {
//         if (member.id !== memberId)
//           return member;
  
//         const today = new Date();
  
//         const endDate = new Date();
  
//         endDate.setDate(
//           today.getDate() + duration
//         );
  
//         return {
//           ...member,
  
//           startDate: today
//             .toISOString()
//             .split("T")[0],
  
//           endDate: endDate
//             .toISOString()
//             .split("T")[0],
  
//           status: "active",
//         };
//       }
//     );
  
//     saveMembers(updatedMembers);
//   };

// // get days left
// export const getRemainingDays = (
//     endDate
//   ) => {
//     const today = new Date();
  
//     const expiry = new Date(endDate);
  
//     const diff =
//       expiry.getTime() - today.getTime();
  
//     return Math.ceil(
//       diff / (1000 * 60 * 60 * 24)
//     );
//   };

// // update
// export const getMemberStatus = (
//     endDate
//   ) => {
//     const remaining =
//       getRemainingDays(endDate);
  
//     if (remaining <= 0)
//       return "expired";
  
//     if (remaining <= 7)
//       return "expiring";
  
//     return "active";
//   };

// // money
// export const getTotalRevenue = () => {
//     const members = getMembers();
  
//     return members.reduce(
//       (total, member) =>
//         total + member.plan.price,
//       0
//     );
//   };

// // total members
// export const getTotalMembers = () => {
//     return getMembers().length;
//   };

// // active members
// export const getActiveMembersCount =
//   () => {
//     return getMembers().filter(
//       (member) =>
//         getMemberStatus(
//           member.endDate
//         ) === "active"
//     ).length;
//   };




const STORAGE_KEY = "fitnessday_members";
export const PLANS = {
  "3 أيام أسبوعياً":       { price: 300, durationDays: 30 },
  "4 أيام أسبوعياً":       { price: 400, durationDays: 30 },
  "كل الأيام عدا الجمعة":  { price: 500, durationDays: 30 },
};
function loadAll() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}
function saveAll(members) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(members));
}
export function getMembers() {
  return loadAll();
}
export function addMember({ name, phone, plan, startDate }) {
  const members = loadAll();
  const planInfo = PLANS[plan] || { price: 0, durationDays: 30 };
  const start = startDate || new Date().toISOString().split("T")[0];
  const end = new Date(new Date(start).getTime() + planInfo.durationDays * 86400000)
    .toISOString().split("T")[0];
  const newMember = {
    id: Date.now().toString(),
    name, phone, plan,
    price: planInfo.price,
    startDate: start,
    endDate: end,
    createdAt: new Date().toISOString(),
  };
  members.unshift(newMember);
  saveAll(members);
  return newMember;
}
export function updateMember(id, updates) {
  const members = loadAll().map((m) => {
    if (m.id !== id) return m;
    const updated = { ...m, ...updates };
    if (updates.plan && updates.plan !== m.plan) {
      const planInfo = PLANS[updates.plan] || { price: m.price, durationDays: 30 };
      updated.price = planInfo.price;
      updated.endDate = new Date(new Date(updated.startDate).getTime() + planInfo.durationDays * 86400000)
        .toISOString().split("T")[0];
    }
    return updated;
  });
  saveAll(members);
}
export function deleteMember(id) {
  saveAll(loadAll().filter((m) => m.id !== id));
}
export function renewSubscription(id, extraDays) {
  const members = loadAll().map((m) => {
    if (m.id !== id) return m;
    const base = new Date(m.endDate) > new Date() ? new Date(m.endDate) : new Date();
    const newEnd = new Date(base.getTime() + extraDays * 86400000).toISOString().split("T")[0];
    return { ...m, endDate: newEnd, startDate: new Date().toISOString().split("T")[0] };
  });
  saveAll(members);
}
export function getRemainingDays(endDate) {
  return Math.ceil((new Date(endDate) - new Date()) / 86400000);
}
export function getMemberStatus(endDate) {
  const days = getRemainingDays(endDate);
  if (days <= 0) return "منتهي";
  if (days <= 7) return "ينتهي قريباً";
  return "نشط";
}




export function getTotalMembers() {
  return loadAll().length;
}
export function getActiveMembersCount() {
  return loadAll().filter(
    (member) =>
      getMemberStatus(member.endDate) === "نشط"
  ).length;
}
export function getExpiringMembersCount() {
  return loadAll().filter(
    (member) =>
      getMemberStatus(member.endDate) === "ينتهي قريباً"
  ).length;
}
export function getTotalRevenue() {
  return loadAll().reduce(
    (total, member) =>
      total + (member.price || 0),
    0
  );
}
export function getMostPopularPlan() {
  const members = loadAll();

  const plans = {};

  members.forEach((member) => {
    plans[member.plan] =
      (plans[member.plan] || 0) + 1;
  });

  let mostPopular = null;
  let count = 0;

  Object.entries(plans).forEach(
    ([plan, total]) => {
      if (total > count) {
        count = total;
        mostPopular = plan;
      }
    }
  );

  return {
    plan: mostPopular,
    count,
  };
}

