import { EnrollmentCreateNestedManyWithoutStudentsInput } from "./EnrollmentCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  dateOfBirth?: Date | null;
  email?: string | null;
  enrollments?: EnrollmentCreateNestedManyWithoutStudentsInput;
  firstName?: string | null;
  lastName?: string | null;
};
