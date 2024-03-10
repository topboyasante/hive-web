interface LoginSchema {
  username: string;
  password: string;
}

interface SignupSchema {
  username: string;
  fullname: string;
  password: string;
  dob: Date;
  phone_number: string;
  email: string;
}

export interface BaseTaskSchema {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  created_at: string;
  number_of_applicants: number;
  user: {
    username: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
  };
  due_date:string
}
export interface FullTaskSchema extends BaseTaskSchema {
  requirements: string;
  responsibilities: string;
}
