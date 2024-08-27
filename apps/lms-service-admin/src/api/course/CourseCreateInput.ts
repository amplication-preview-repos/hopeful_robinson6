import { EnrollmentCreateNestedManyWithoutCoursesInput } from "./EnrollmentCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  courseName?: string | null;
  description?: string | null;
  endDate?: Date | null;
  enrollments?: EnrollmentCreateNestedManyWithoutCoursesInput;
  startDate?: Date | null;
};
