import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

const PostList = () => {
  return (
    <List>
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
