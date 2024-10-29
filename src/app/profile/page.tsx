"use client";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { LoaderPinwheel } from "lucide-react";
import Image from "next/image";
import React from "react";

function Profile() {
  const { user, error, isLoading } = useUser();
  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="animate-spin">
          <LoaderPinwheel />
        </span>
      </div>
    );
  if (error) return <div>{error.message}</div>;
  return (
    <>
      {user && (
        <section className="pt-5 px-5">
          <h1 className="text-2xl font-semibold">Profile</h1>
          <div>
            <Image
              src={user.picture || ""}
              alt={user.name || "User picture"}
              width={100}
              height={100}
              className="h-12 w-12 rounded-full m-2 border"
            />
          </div>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
          <div className="w-5/12 bg-gray-800 p-3 leading-8">
            <code className="text-white">{JSON.stringify(user, null, 2)}</code>
          </div>
        </section>
      )}
    </>
  );
}

export default withPageAuthRequired(Profile);
