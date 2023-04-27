import { Employee, department, active } from "../types";

export const employees: Employee[] = [
   {
      id: 1,
      firstName: "Dan",
      lastName: "Mac",
      email: "dan.mac@domain.com",
      department: department.FINANCE,
      tel: 11111,
      isActive: active.Yes,
   },
   {
      id: 2,
      firstName: "Jake",
      lastName: "Ross",
      email: "jake.ross@domain.com",
      department: department.FINANCE,
      tel: 44444,
      isActive: active.Yes,
   },
   {
      id: 3,
      firstName: "Ian",
      lastName: "Moss",
      email: "ian.moss@domain.com",
      department: department.IT,
      tel: 33333,
      isActive: active.No,
   },

   {
      id: 4,
      firstName: "Derek",
      lastName: "Joss",
      email: "derek.joss@domain.com",
      department: department.IT,
      tel: 77777,
      isActive: active.No,
   },
];
