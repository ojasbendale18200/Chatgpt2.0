/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import NewChat from "./NewChat";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";

function Sidbar() {
  const { data: session } = useSession();
  const [chats, error, loading] = useCollection(
    session && collection(db, "users", session?.user?.email!, "chats")
  );
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>{/* ModelSelection */}</div>
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt={session.user?.name!}
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}

export default Sidbar;
