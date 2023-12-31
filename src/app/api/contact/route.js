import { NextResponse } from "next/server";
import connect from "@/backend/config/db";
import Contact from "@/backend/models/Contact";
import axios from "axios";


const sendOTP=async(name)=>{
  const postData = {
    to: `0934608749`,
    message: name,
    template_id: 'welcome',
    username: 'zaahirahtravels',
    password: "K;X4(;8puQiD0*r0-+z"
  };
  await axios.post('https://sms.yegara.com/api2/send',postData).then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
}


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

      //send msg
      const msg=`msg from ${nameValue}`
      await sendOTP(msg);

      return new NextResponse("Msg sent", {
        status: 201,
      });
    } catch (err) {
      return new NextResponse(err.message, {
        status: 500,
      });
    }
  };