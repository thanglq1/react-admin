import jsonServerProvider from "ra-data-json-server";
import "./App.css";
import { Admin, Resource } from "react-admin";
import UsersList from "./users/users";
import PostList from "./posts/posts";
import PostEdit from "./posts/post-edit";
import PostCreate from "./posts/post-create";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import Dashboard from "./dashboard/dashboard";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
  return (
    <Admin dataProvider={dataProvider} dashboard={Dashboard}>
      <Resource
        name="users"
        list={UsersList}
        recordRepresentation="name"
        icon={UserIcon}
      />
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
    </Admin>
  );
}

export default App;
