import { EnrollmentUpdateManyWithoutCoursesInput } from "./EnrollmentUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  courseName?: string | null;
  description?: string | null;
  endDate?: Date | null;
  enrollments?: EnrollmentUpdateManyWithoutCoursesInput;
  startDate?: Date | null;
};
