import React from "react";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar";
import Header from "../components/Header";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
