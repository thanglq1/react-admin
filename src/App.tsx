import jsonServerProvider from "ra-data-json-server";
import "./App.css";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import UsersList from "./users/users";
import PostList from "./posts/posts";
import PostEdit from "./posts/post-edit";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UsersList} recordRepresentation="name" />
      <Resource name="posts" list={PostList} edit={PostEdit} />
      <Resource name="comments" list={ListGuesser} />
    </Admin>
  );
}

export default App;
