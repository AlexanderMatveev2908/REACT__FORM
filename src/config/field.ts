import { v4 } from "uuid";
import { REG_EMAIL, REG_NAME } from "./reg";

export type FormFieldType = {
  id: string;
  field: string;
  label: string;
  place: string;
  reg: RegExp;
  type?: string;
};

export const fieldsForm: FormFieldType[] = [
  {
    field: "firstName",
    label: "First Name",
    place: "e.g. Will",
    reg: REG_NAME,
  },
  {
    field: "lastName",
    label: "Last Name",
    place: "e.g. Smith",
    reg: REG_NAME,
  },
  {
    field: "email",
    label: "Email",
    place: "You@gmail.com",
    reg: REG_EMAIL,
    type: "email",
  },
].map((el) => ({
  ...el,
  id: v4(),
}));
