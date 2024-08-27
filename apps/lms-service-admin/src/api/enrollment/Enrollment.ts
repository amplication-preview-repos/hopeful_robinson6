import { Course } from "../course/Course";
import { Student } from "../student/Student";

export type Enrollment = {
  course?: Course | null;
  createdAt: Date;
  enrollmentDate: Date | null;
  id: string;
  student?: Student | null;
  updatedAt: Date;
};
