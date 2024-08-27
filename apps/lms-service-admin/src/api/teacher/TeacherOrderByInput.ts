import { SortOrder } from "../../util/SortOrder";

export type TeacherOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
