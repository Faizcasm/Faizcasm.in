"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { Import } from "lucide-react";
import axios from "axios";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const [name,setName] =useState("")
  const [email,setEmail] =useState("")
  const [message,setMessage] =useState("")
  const [processing,setProcessing] =useState(false)

  const handleSubmit = (e) => {
    setProcessing(true)
    e.preventDefault();
    axios.post(`/api/contact`,{name,email,message})
    .then(res=>{
      console.log(res);
      toast.success("Message sended")
      setProcessing(false)
      setName("")
      setEmail("")
      setMessage("")
    })
    .catch(err=>{
      console.log(err);
      toast.error("Something went wrong")
      setProcessing(false)
    })
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="name"
          name="name"
          onChange={(e)=>setName(e.target.value)}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        <motion.input
          variants={item}
          type="email"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="email"
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        <motion.textarea
          variants={item}
          placeholder="message"
          name="message"
          onChange={(e)=>setMessage(e.target.value)}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />


        <motion.input
          variants={item}
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize
      "
          type="submit"
          value={processing ? "Casting..." : "Cast Your Message!"}
        />
      </motion.form>
    </>
  );
}
