import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnrollmentListRelationFilter } from "../enrollment/EnrollmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type StudentWhereInput = {
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  enrollments?: EnrollmentListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
