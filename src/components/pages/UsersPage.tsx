import React, { FC, useEffect, useState } from "react";
import axios from "axios";

import AnyList from "../AnyList";
import UserItem from "../UserItem";
import { IUser } from "../../types/types";

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users/"
      );
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AnyList
      items={users}
      renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
    />
  );
};

export default UsersPage;

// const users: IUser[] = [
//   {
//     id: 1,
//     name: "Lol",
//     email: "car@cae.co",
//     address: { city: "Las Palmas", street: "Sunny", zipcode: "M-1929" },
//   },
//   {
//     id: 2,
//     name: "Kek",
//     email: "mex@ea.ku",
//     address: { city: "Las Palmas", street: "Sunny", zipcode: "M-1929" },
//   },
// ];
