import { sessionStatus } from "@/utils/session";
import { redirect } from "next/navigation";
import React from "react";

const ServerSide = () => {
  const session = sessionStatus;
  if (!session) {
    redirect("/");
  }
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-sky-600">Server Side Component</h1>
      <p className="text-red-600">This page is protected on server side.</p>
    </main>
  );
};

export default ServerSide;
