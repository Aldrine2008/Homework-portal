import React, { useEffect } from "react";
import BackgroundImage from "../../assets/snowice.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignupForm from "./SignupForm";

function Signup() {
  const navigate = useNavigate();

  // Redirect if a user is already logged in.
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      navigate("/classdashboard");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-blue-200 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={BackgroundImage}
          alt="background3"
          className="w-full h-full object-cover opacity-100"
        />
      </div>
      <SignupForm />
    </div>
  );
}

export default Signup;
