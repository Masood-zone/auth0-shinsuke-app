"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { user, error, isLoading } = useUser();
  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="animate-spin">
          <Loader2 />
        </span>
      </div>
    );
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <div>
        {!user ? (
          <>
            <h1 className="mb-4">Welcome to Shinsuke App</h1>
            <p className="mb-4">Please login to access your profile</p>
          </>
        ) : (
          <>
            <h1 className="mb-4">Welcome back, {user.name}!</h1>
            <p className="lead">You can now access your profile</p>
          </>
        )}
      </div>
    </>
  );
}
