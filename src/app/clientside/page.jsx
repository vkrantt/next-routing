"use client";

import { sessionStatus } from "@/utils/session";
import { redirect } from "next/navigation";

import React, { useLayoutEffect } from "react";

const ClientSide = () => {
  useLayoutEffect(() => {
    const session = sessionStatus;
    if (!session) {
      redirect("/");
    }
  }, []);

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-sky-600">Client side</h1>
      <p className="text-red-600">This page is protected on client side.</p>
    </main>
  );
};

export default ClientSide;
