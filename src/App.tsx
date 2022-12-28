import jsonServerProvider from "ra-data-json-server";
import "./App.css";
import { Admin, Resource, ListGuesser } from "react-admin";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={ListGuesser} />
      <Resource name="comments" list={ListGuesser} />
    </Admin>
  );
}

export default App;
