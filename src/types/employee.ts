export enum department  {
    IT = 'IT',
    FINANCE = 'Finance'
}

export enum active {
    Yes = 'Y',
    No = 'N'
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

