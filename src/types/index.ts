export interface UserProfileSchema {
  age: number;
  date_of_birth: string;
  email: string;
  first_name: string;
  id: string;
  last_name: string;
  phone_number: string;
  residential_address: string;
  role: string;
  token_number: number;
  username: string;
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

  due_date: string;
}
export interface FullTaskSchema extends BaseTaskSchema {
  requirements: string;
  responsibilities: string;
}

export interface Applicants {
  username: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
}
