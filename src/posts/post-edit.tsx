import { Edit, ReferenceInput, SimpleForm, TextInput } from "react-admin";

const PostEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="id" />
        <TextInput source="title" />
        <TextInput source="body" multiline rows={5} />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
