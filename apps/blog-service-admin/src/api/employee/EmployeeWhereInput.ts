import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmployeeWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  hireDate?: DateTimeNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  position?: StringNullableFilter;
};
