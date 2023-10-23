import { NextResponse } from "next/server";
import connect from "@/backend/config/db";
import Contact from "@/backend/models/Contact";
import nodemailer from 'nodemailer'

export const POST = async (request) => {
  const { nameValue,emailValue ,msgValue} = await request.json()

  try {
    await connect();

    const newContact = new Contact({
        name:nameValue,
        email:emailValue,
        message:msgValue
    });

      await newContact.save();


      //send email

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: '24ishwork@gmail.com', // Replace with your Gmail address
          pass: '2023@#ish', // Replace with your Gmail password or app-specific password
        },
      });
  
      const mailOptions = {
        from: '24ishwork@gmail.com', // Replace with your Gmail address
        to: '24ishwork@gmail.com', // Replace with your personal email address
        subject: 'New Contact Form Submission',
        text: `Name: ${nameValue} \n Email: ${emailValue}\nMessage: ${msgValue}`,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.messageId);
        }
      });



      return new NextResponse("Msg sent", {
        status: 201,
      });
    } catch (err) {
      return new NextResponse(err.message, {
        status: 500,
      });
    }
  };