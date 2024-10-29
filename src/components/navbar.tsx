"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { user, error, isLoading } = useUser();

  if (error) return <div>{error.message}</div>;

  return (
    <nav className="bg-cyan-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Shinsuke App
        </Link>
        <div className="flex items-center justify-between space-x-4">
          {user ? (
            isLoading ? (
              <div className="animate-spin">
                <Loader2 />
              </div>
            ) : (
              <>
                <Link
                  href="/profile"
                  className="text-white text-lg font-medium mr-5"
                >
                  Profile
                </Link>
                <a
                  href="/api/auth/logout"
                  className="text-white text-lg font-medium"
                >
                  Logout
                </a>
              </>
            )
          ) : (
            <a
              href="/api/auth/login"
              className="text-white text-lg font-medium"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
