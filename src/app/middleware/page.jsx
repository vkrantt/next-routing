import React from "react";

const Middleware = () => {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-sky-600">
        Middleware Component
        <span className="text-green-600">( Highly - Recommended)</span>
      </h1>
      <p className="text-red-600">
        This page is protected with next middleware.
      </p>

      <a
        className="underline text-sky-600 mt-10"
        target="_blank"
        href="https://nextjs.org/docs/app/building-your-application/routing/middleware"
      >
        Next route middleware documentation
      </a>
    </main>
  );
};

export default Middleware;
