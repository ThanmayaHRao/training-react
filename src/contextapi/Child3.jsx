import React, { useContext } from "react";
import Child4 from "./Child4";
import { GlobalDataContext } from "./Contextapi";

const Child3 = () => {
  const { users } = useContext(GlobalDataContext);

  return (
    <div>
      <h2>Child3</h2>

      {users.map((user) => (
        <img
          key={user.id}
          src={user.avatar_url}
          alt={user.login}
          width="60"
          style={{ margin: "5px", borderRadius: "50%" }}
        />
      ))}

      <hr />
      <Child4 />
    </div>
  );
};

export default Child3;
