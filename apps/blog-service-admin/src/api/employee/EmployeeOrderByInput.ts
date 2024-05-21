import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  hireDate?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  position?: SortOrder;
  updatedAt?: SortOrder;
};
