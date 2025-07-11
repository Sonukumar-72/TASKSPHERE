import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-4 bg-gray-100 border-t border-gray-200 mt-8">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} <span className="font-semibold text-indigo-600">TaskSphere</span>. Built with 💻 + ☕
      </p>
    </footer>
  );
};

export default Footer;
