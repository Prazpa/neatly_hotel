"use client";
import React, { useState } from "react";
import NavbarComponent from "@/components/Navbar";
import { Button, Input } from "@nextui-org/react";
import noto from "@/assets/fonts";
import { formData } from "@/types/formData";


const Register = () => {
  const [formData, setFormData] = useState<formData>({
    fullname: "",
    username: "",
    email: "",
    password: "",
    id_number: "",
    dob: "",
    country: "",
    profile_pic: null,
    card_number: "",
    card_owner: "",
    expiry_date: "",
    cvc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "profile_pic") {
      setFormData((prevFormData: formData) => ({
        ...prevFormData,
        [name]: files?.[0] || null,
      }));
    } else {
      setFormData((prevFormData: formData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        data.append(key, value as string | Blob);
      }
    });

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Registration successful", result);
      } else {
        console.error("Registration failed", result);
      }
    } catch (error) {
      console.error("Error during registration", error);
    }
  };

  return (
    <div>
      <NavbarComponent />
      <div className="flex h-auto w-full justify-center rounded-md bg-[url('/cover.jpg')] py-[80px]">
        <div className="flex w-[1000px] flex-col bg-white p-[50px]">
          <div>
            <span className={`${noto.className} text-[68px]`}>Register</span>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Input
              isRequired
              type="text"
              placeholder="Enter your name and last name"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
            />

            <Input
              isRequired
              type="text"
              placeholder="Enter your username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />

            <Input
              isRequired
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              isRequired
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <Input
              isRequired
              type="text"
              placeholder="Enter your ID Number"
              name="id_number"
              value={formData.id_number}
              onChange={handleChange}
            />

            <Input
              isRequired
              type="date"
              placeholder="Select your date of birth"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />

            <Input
              isRequired
              type="text"
              placeholder="Enter your country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />

            <Input
              type="file"
              placeholder="Upload photo"
              name="profile_pic"
              onChange={handleChange}
            />

            <Input
              isRequired
              type="text"
              placeholder="Enter your card number"
              name="card_number"
              value={formData.card_number}
              onChange={handleChange}
            />

            <Input
              isRequired
              type="text"
              placeholder="Enter your card name"
              name="card_owner"
              value={formData.card_owner}
              onChange={handleChange}
            />

            <Input
              isRequired
              type="date"
              placeholder="MM/YY"
              name="expiry_date"
              value={formData.expiry_date}
              onChange={handleChange}
            />

            <Input
              isRequired
              type="text"
              placeholder="CVC/CVV"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
            />

            <Button
              className="w-[400px] rounded-md bg-orange-600 text-white"
              type="submit"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
