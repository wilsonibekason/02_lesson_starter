import { useState } from "react";
import { useEffect } from "react";

export const learn = () => {
  const [user, setUser] = useState([]);

  const { id } = "useParams";
  const _id = useLocation().pathname.split("/")[2];
  let axios = {
    get: "get",
    patch: "",
    delete: "de",
    cancleToken: {
      source: {
        cancel: "",
        open: "opeen",
        uncancle: () => console.log("i am cancelled"),
      },
    },
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
    return () => {
      console.log("cancelled");
      controller.abort();
    };
  });

  useEffect(() => {
    // using axios cancle token
    let axiosCancelToken = axios.cancleToken.source || source();
    axios
      .get(`data${_id}`, { axiosCancelToken: axiosCancelToken.token })
      .then((data) => setUser(data))
      .catch((err) => {
        axios.isCancel(err) ? console.log("cancelled") : ""; //todo handle error
      });

    return () => {
      axiosCancelToken.cancel();
    };
  }, []);

  // using the clear interval method
  useEffect(() => {
    const interval = setInterval(() => {
      // state logic
    });
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>hello world</h1>
    </>
  );
};
