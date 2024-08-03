import Image from "next/image";
import React from "react";

const user = {
  name: "John Doe",
  jobTitle: "Software Engineer",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac justo nec metus ultricies iaculis.",
  email: "johndoe@example.com",
  phone: "(123) 456-7890",
  profilePicture:
    "https://p1.hiclipart.com/preview/57/433/160/user-profile-circle-user-account-data-login-symbol-blackandwhite-line-art-png-clipart.jpg",
  backgroundPicture: "https://via.placeholder.com/800x200",
  linkedin: "#",
  github: "#",
};

const UserProfile = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="shadow-2xl rounded-lg w-full max-w-md">
        {/* Profile Header */}
        <div className="relative">
          <div className="w-full h-32 rounded-t-lg bg-neutral-content" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              className="w-24 h-24 rounded-full border-4 border-white"
              src={user.profilePicture}
              alt="Profile Picture"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="p-6 text-center bg-neutral">
          <h1 className="text-2xl font-semibold text-primary">{user.name}</h1>
          <p className="text-sm text-secondary">{user.jobTitle}</p>
          <p className="text-neutral-content mt-2">{user.bio}</p>

          {/* Contact Information */}
          <div className="mt-4">
            <div className="flex items-center justify-center flex-wrap space-x-4">
              <div className="flex items-center space-x-2 text-base-content">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M3 6h18M3 14h18m-5 6h5v-6h-5v6zM7 20v-6H2v6h5zm0-8V4H2v8h5zm0-6h8V2H7v4z"
                  ></path>
                </svg>
                <span>{user.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-base-content">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7l-5 5m0 0l-5-5m5 5V3"
                  ></path>
                </svg>
                <span>{user.phone}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-4">
            <div className="flex justify-center space-x-4">
              <a href={user.linkedin} className="btn btn-outline btn-primary">
                LinkedIn
              </a>
              <a href={user.github} className="btn btn-outline btn-secondary">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
