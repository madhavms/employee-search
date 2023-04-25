export enum department  {
    IT = 'IT',
    FINANCE = 'Finance'
}

enum active {
    Y = 'Y',
    N = 'N'
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: department;
  tel: number;
  isActive: active;
}

