import { useEffect, useState } from "react";
import axios from "axios";

export default function User() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUserData(res.data);
        console.log(userData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>User Data</h1>

      {userData.map((v) => {
        return (
          <div style={{ background: "gray" }} key={v.id}>
            <h3>Name: {v.name}</h3>
            <h3>Email: {v.email}</h3>
            <h3>Address: {v["address"].street}</h3>
          </div>
        );
      })}
    </>
  );
}
