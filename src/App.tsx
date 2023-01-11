import { NavLink, Route, Routes } from "react-router-dom";

import Card, { CardOption } from "./components/Card";

import EventsExample from "./components/EventsExample";
import UsersPage from "./components/pages/UsersPage";
import TodosPage from "./components/pages/TodosPage";

function App() {
  return (
    <>
      <nav>
        <NavLink to="users">Users</NavLink>
        <NavLink to="todos">Todos</NavLink>
      </nav>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>

      <div>
        <EventsExample />
        <hr />

        <Card
          width="300px"
          height="200px"
          option={CardOption.outlined}
          onClick={() => console.log("Tap")}
        >
          <button>Tap me</button>
        </Card>
        {/* <UserList users={users} /> */}
      </div>
    </>
  );
}

export default App;
