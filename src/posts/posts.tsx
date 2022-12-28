import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
} from "react-admin";

const postFilters = [
  <TextInput source="q" alwaysOn label="Search" />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];

const PostList = () => {
  return (
    <List filters={postFilters}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="userId" reference="users" />
        <TextField source="title" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default PostList;
