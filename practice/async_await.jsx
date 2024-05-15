import React, { useEffect } from "react";
import axios from "axios";
const Async_await = () => {
  const fetchData = async () => {
    try {
      const respone = await axios.get("https://api.frankfurter.app/currencies");
      console.log("data", respone);
    } catch (error) {
      console.log("error:", error);
    } finally {
      console.log("finally done:finalize the task");
    }
  };
  useEffect(() => {
    fetchData();
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("hello");
    }, 2000);
    return() => clearTimeout(timer);
  });
  useEffect(() => {
    const timerInterval = setInterval(() => {
      console.log("hello");
    }, 2000);
    return() => clearTimeout(timer);
  });
  return <>hello</>;
};

export default Async_await;
