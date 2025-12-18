export type ViewType = 'home' | 'client' | 'worker';

export interface ClientFormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  budget: string;
  experience: string;
  quantity: string;
  other: string;
}

export interface WorkerFormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  skills: string;
  availability: string;
}
