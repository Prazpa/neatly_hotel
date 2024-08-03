"use client";
import React, { useState } from "react";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import { Button, Input } from "@nextui-org/react";
import { Noto_Serif } from "next/font/google";

const noto = Noto_Serif({ subsets: ["latin"] });

const Register = () => {
  const [fullname, setFullname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [idNumber, setIdNumber] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardOwner, setCardOwner] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // ตรวจสอบว่าค่าของ password เป็น string และไม่เป็น null
    if (!password || typeof password !== 'string') {
      console.error('Password is required');
      return;
    }
  
    try {
      // สร้าง FormData
      const formData = new FormData();
      formData.append('fullname', fullname);
      formData.append('username', username);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('id_number', idNumber);
      formData.append('dob', dob);
      formData.append('country', country);
  
      if (profilePic) {
        formData.append('profile_pic', profilePic);
      }
  
      formData.append('card_number', cardNumber);
      formData.append('card_owner', cardOwner);
      formData.append('expiry_date', expiryDate);
      formData.append('cvc', cvc);
  
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Registration successful', data);
        // Handle successful registration
      } else {
        console.error('Registration failed', data);
        // Handle registration failure
      }
    } catch (error) {
      console.error('Error during registration', error);
    }
  };
  
  return (
    <div>
      <NavbarComponent />
      <div className="w-full h-auto bg-[url('/cover.jpg')] flex justify-center py-[80px] rounded-md">
        <div className="bg-white w-[1000px] flex flex-col p-[50px]">
          <div>
            <span className={`${noto.className} text-[68px]`}>Register</span>
          </div>
          <form onSubmit={handleRegister} className="flex flex-col gap-5">
            {/* Basic Information */}
            <div>
              <span className="text-gray-400 font-bold">Basic Information</span>
            </div>

            <div>
              <span>Full Name</span>
              <Input
                isRequired
                type="text"
                placeholder="Enter your name and last name"
                className="w-full border border-gray-300 rounded-sm"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>

            <div className="flex justify-between">
              <div>
                <span>Username</span>
                <Input
                  isRequired
                  type="text"
                  placeholder="Enter your username"
                  className="w-[400px] border border-gray-300 rounded-sm"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <span>Email</span>
                <Input
                  isRequired
                  type="email"
                  placeholder="Enter your email"
                  className="w-[400px] border border-gray-300 rounded-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <span>Password</span>
                <Input
                  isRequired
                  type="password"
                  placeholder="Enter your password"
                  className="w-[400px] border border-gray-300 rounded-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <span>ID Number</span>
                <Input
                  isRequired
                  type="text"
                  placeholder="Enter your ID Number"
                  className="w-[400px] border border-gray-300 rounded-sm"
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <span>Date of Birth</span>
                <Input
                  isRequired
                  type="date"
                  placeholder="Select your date of birth"
                  className="w-[400px] border border-gray-300 rounded-sm"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div>
                <span>Country</span>
                <Input
                  isRequired
                  type="text"
                  placeholder="Enter your country"
                  className="w-[400px] border border-gray-300 rounded-sm"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>

            {/* Upload Image */}
            <div>
              <span className="text-gray-400 font-bold">Profile Picture</span>
              <Input
                type="file"
                placeholder="Upload photo"
                className="w-[100px] border border-black rounded-lg"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setProfilePic(e.target.files[0]);
                  }
                }}
              />
            </div>

            {/* Credit Card */}
            <div>
              <span className="text-gray-400 font-bold">Credit Card</span>
            </div>

            <div className="flex justify-between">
              <div>
                <span>Card Number</span>
                <Input
                  isRequired
                  type="text"
                  placeholder="Enter your card number"
                  className="w-[400px] border border-gray-300 rounded-sm"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div>
                <span>Card Owner</span>
                <Input
                  isRequired
                  type="text"
                  placeholder="Enter your card name"
                  className="w-[400px] border border-gray-300 rounded-sm"
                  value={cardOwner}
                  onChange={(e) => setCardOwner(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <span>Expiry Date</span>
                <Input
                  isRequired
                  type="date"
                  placeholder="MM/YY"
                  className="w-[400px] border border-gray-300 rounded-sm"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
              <div>
                <span>CVC/CVV</span>
                <Input
                  isRequired
                  type="text"
                  placeholder="CVC/CVV"
                  className="w-[400px] border border-gray-300 rounded-sm"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
              </div>
            </div>

            <Button className="bg-orange-600 text-white w-[400px] rounded-md" type="submit">Register</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
