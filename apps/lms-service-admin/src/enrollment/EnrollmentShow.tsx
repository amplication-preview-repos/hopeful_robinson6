import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const EnrollmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="enrollmentDate" source="enrollmentDate" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
