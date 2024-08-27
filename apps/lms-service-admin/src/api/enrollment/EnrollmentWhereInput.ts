import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type EnrollmentWhereInput = {
  course?: CourseWhereUniqueInput;
  enrollmentDate?: DateTimeNullableFilter;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
};
