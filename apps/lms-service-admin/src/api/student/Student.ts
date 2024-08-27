import { Enrollment } from "../enrollment/Enrollment";

export type Student = {
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  enrollments?: Array<Enrollment>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
