'use client';

import { useState } from "react"
import Link from "next/Link";
import ContactUsForm from "@/components/Contact-us-form";


export default function ContactUs () {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [numOfStaff, setNumOfStaff] = useState("");
  const [message, setMessage] = useState(""); 


  return (
    <div>
      <Link href="/">Home</Link>
      <br></br>
      Contact Us
      <br></br>
      <ContactUsForm />
    </div>
  )
}