import React from "react";

export default function Footer() {
  return (
    <div className="footer py-10">
      <div className="container mx-auto lg:flex md:flex justify-between lg:flex-row md:flex-row">
        <div className="links lg:w-1/3 sm:w-full mb-4 sm: pl-5">
          <h1 className="font-bold text-xl">Quick Links</h1>
          <div className="my-5">
            <a className="text-md" href="">
              Privacy Policy
            </a>
          </div>
          <div className="my-5 ">
            <a href="">Return Policy</a>
          </div>
          <div className="my-5">
            <a href="">Term of Service</a>
          </div>
          <div className="my-5">
            <a href="">Contact</a>
          </div>
        </div>
        <div className="contact lg:w-1/3 sm: w-full sm: mb-4 sm: pl-5">
          <h1 className="font-bold text-xl">Contact Us</h1>
          <div className="flex mt-6">
            <img
              src="https://e7.pngegg.com/pngimages/313/659/png-clipart-the-daily-dot-internet-logo-online-newspaper-address-icons-company-logo.png"
              alt=""
              className="w-4 h-4 mt-1 mr-1"
            />
            <p className=" ml-1">
              Ho Chi Minh City <br /> Nhat Ban
            </p>
          </div>
          <div className="flex mt-6">
            <img
              src="https://seeklogo.com/images/P/phone-logo-CA0ABEDEEB-seeklogo.com.png"
              alt=""
              className="w-4 h-4 mt-1 mr-1"
            />
            <p className="ml-1">123-456-7890</p>
          </div>
          <div className="flex mt-6">
            <img
              src="https://c1.klipartz.com/pngpicture/298/298/sticker-png-message-logo-email-email-address-text-messaging-sms-email-box-email-client-yahoo-mail.png"
              alt=""
              className="w-5 h-4 mt-1 mr-1"
            />
            <p className=" ml-1">Support@gmail.com</p>
          </div>
        </div>
        <div className="payment lg:w-1/3 sm:w-full sm: pl-5">
          <h1 className="text-xl font-bold mb-7 ">We Accept</h1>
        </div>
      </div>
    </div>
  );
}
