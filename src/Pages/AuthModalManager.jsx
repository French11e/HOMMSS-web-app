import React, { useState } from "react";
import SignInModal from "./SignInModal";
import RegisterModal from "./RegisterModal";

export default function AuthModalManager() {
  const [modal, setModal] = useState(null); // 'signIn' | 'register' | null

  const openSignIn = () => setModal("signIn");
  const openRegister = () => setModal("register");
  const closeModal = () => setModal(null);

  return (
    <>
      {/* Buttons to open modals */}
      <button
        onClick={openSignIn}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Sign In
      </button>
      <button
        onClick={openRegister}
        className="px-4 py-2 bg-gray-500 text-white rounded"
      >
        Sign Up
      </button>

      {/* Modals */}
      {modal === "signIn" && (
        <SignInModal onClose={closeModal} onSwitch={openRegister} />
      )}
      {modal === "register" && (
        <RegisterModal onClose={closeModal} onSwitch={openSignIn} />
      )}
    </>
  );
}
