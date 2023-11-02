"use client";
import { useState } from "react";

import { trpc } from "../_trpc/client";

export default function TodoList({initialData}: {initialData?: any}) {
  const {data} = trpc.getListings.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnReconnect: false,
    suspense: true,
    initialData
  });

  return (
    <div>
      <div className="text-black my-5 text-3xl">
        {data ? <>{JSON.stringify(data)}</> : "Loading..."}
      </div>
    </div>
  );
}
