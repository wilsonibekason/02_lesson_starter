import { useState } from "react";
import { useEffect } from "react";

export const learn = () => {
  const [user, setUser] = useState([]);

  const { id } = "useParams";
  let axios = {
    get: "get",
    patch: "",
    delete: "de",
  };
  useEffect(() => {
    const subscibed = false;
    fetch("api").then((res) => res.json((data) => !subscibed && setUser(data)));
    // fetch api
    // add a clean up function
    return () => {
      console.log("clean up function worked correctedly");
      subscibed = true;
    };
  }, []);
  // more advanced using the javascript abort controller
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller?.signal;
    fetch(`data${id}`, { signal }).then((res) =>
      res
        .json((data) => setUser(data))
        .catch((error) => error?.name === "AbortError")
        ? console.log("cancelled")
        : new Error("there is an error please help")
    );

    useEffect(() => {
      axios.get("data").then((data) => setUser(data));
    }, []);

    return () => {
      console.log("cancelled");
      controller.abort();
    };
  });
  return (
    <>
      <h1>hello world</h1>
    </>
  );
};
