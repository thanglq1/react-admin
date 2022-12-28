import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
import "./App.css";
import PostCreate from "./posts/post-create";
import PostEdit from "./posts/post-edit";
import PostList from "./posts/posts";
import UsersList from "./users/users";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { authProvider } from "./auth/auth";
import Dashboard from "./dashboard/dashboard";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      dashboard={Dashboard}
      authProvider={authProvider}
    >
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
