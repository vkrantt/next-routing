"use client";

import auth from "@/components/auth";
import React from "react";

const ClientSideHOC = () => {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-sky-600">ClientSideHOC</h1>
      <p className="text-red-600">
        This page is protected on client side with HOC.
      </p>
    </main>
  );
};

export default auth(ClientSideHOC);
