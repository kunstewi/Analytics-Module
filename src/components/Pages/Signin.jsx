import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const Button = ({ onClick, children, className }) => (
  <button
    onClick={onClick}
    className={`w-full px-4 py-2 rounded-lg text-white font-semibold transition-colors duration-200 flex items-center justify-center ${className}`}
  >
    {children}
  </button>
);

const Card = ({ children }) => (
  <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
    {children}
  </div>
);

const Signin = () => {
  const handleInstagramLogin = () => {
    // Implement Instagram login logic here
    console.log('Instagram login clicked');
  };

  const handleTwitterLogin = () => {
    // Implement Twitter login logic here
    console.log('Twitter login clicked');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card>
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-[#473627]">Signin to Analytics Module</h2>
        <div className="space-y-4">
          <Button 
            onClick={handleInstagramLogin} 
            className="bg-pink-500 hover:bg-pink-700"
          >
            <Instagram className="mr-2" size={20} />
            Login with Instagram
          </Button>
          <Button 
            onClick={handleTwitterLogin} 
            className="bg-blue-400 hover:bg-blue-500"
          >
            <Twitter className="mr-2" size={20} />
            Login with Twitter
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Signin;

