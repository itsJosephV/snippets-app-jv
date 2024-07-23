"use client";
import { Plus } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Modal from "../modal/Modal";
import NewCollectionForm from "../forms/NewCollectionForm";

const SidebarHeader = () => {
  return (
    <div className="border-b px-3 h-16 bg-blue-50 flex gap-2 items-center">
      <div className="flex gap-2 flex-1">
        <button className="bg-blue-200 p-1" onClick={() => signOut()}>
          signout
        </button>
        <Link href="/" className="bg-blue-200 p-1">
          go home
        </Link>
      </div>
      <button
        onClick={() => console.log("Add new collection")}
        className="bg-violet-100 p-1 rounded-md"
      >
        <Modal>
          <Modal.Trigger>
            <Plus size={20} />
          </Modal.Trigger>
          <Modal.Content title="Add new collection">
            <NewCollectionForm />
          </Modal.Content>
        </Modal>
      </button>
    </div>
  );
};

export default SidebarHeader;
