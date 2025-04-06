import { v4 } from "uuid";

export type FormFieldType = {
  id: string;
  field: string;
  label: string;
  place: string;
  type?: string;
  reg?: RegExp;
};

export const fieldsForm: FormFieldType[] = [
  {
    field: "firstName",
    label: "First Name",
    place: "e.g. Will",
  },
  {
    field: "lastName",
    label: "Last Name",
    place: "e.g. Smith",
  },
  {
    field: "email",
    label: "Email",
    place: "You@gmail.com",
    type: "email",
  },
].map((el) => ({
  ...el,
  id: v4(),
}));
