"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button
          onClick={() => signOut()}
          className="text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded"
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button
        onClick={() => signIn()}
        className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded"
      >
        Sign in
      </button>
    </>
  );
}
