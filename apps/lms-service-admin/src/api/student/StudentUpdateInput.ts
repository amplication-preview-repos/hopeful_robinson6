import { EnrollmentUpdateManyWithoutStudentsInput } from "./EnrollmentUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  dateOfBirth?: Date | null;
  email?: string | null;
  enrollments?: EnrollmentUpdateManyWithoutStudentsInput;
  firstName?: string | null;
  lastName?: string | null;
};
