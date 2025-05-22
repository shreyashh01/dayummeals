"use client";

import { Card, CardContent } from "@/components/ui/card";
import confetti from "canvas-confetti";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Dialogbox({ open, onClose }) {
  const confettiFiredRef = useRef(false);

  useEffect(() => {
    if (open && !confettiFiredRef.current) {
      confettiFiredRef.current = true;
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      }, 300);
    } else if (!open) {
      confettiFiredRef.current = false;
    }
  }, [open]);

  if (!open) return null;

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      <div className="fixed z-60 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[75%] max-w-4xl">
        <Card
          className="relative overflow-hidden shadow-lg"
          style={{ backgroundColor: "#e1e1e1" }}
        >
          {/* Close button - visible on all screen sizes but especially important for mobile */}
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Close dialog"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>

          <CardContent className="py-3 px-2 sm:px-4">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
              <div className="w-full md:w-1/3 px-4 md:pl-6 flex justify-center mb-4 md:mb-0">
                <div
                  className="w-full max-w-[200px] md:max-w-xs cursor-pointer"
                  onClick={() =>
                    openInNewTab(
                      "https://play.google.com/store/apps/details?id=com.dayummeals.androidapp"
                    )
                  }
                >
                  <Image
                    src="/Dummy_replica.png"
                    alt="Dummy Plan Preview"
                    width={260}
                    height={173}
                    className="rounded-md w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3 px-4 md:pr-6 flex flex-col items-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">Order Authentic Meal Now!</h2>
                <p className="text-xs sm:text-sm text-gray-700 mt-1 text-center">
                  Scan the QR code below to download our app
                </p>

                <div
                  className="mt-4 md:mt-6 cursor-pointer"
                  onClick={() =>
                    openInNewTab(
                      "https://play.google.com/store/apps/details?id=com.dayummeals.androidapp"
                    )
                  }
                >
                  <Image
                    src="/qr.jpg"
                    alt="QR Code"
                    width={120}
                    height={120}
                    className="object-contain"
                    priority
                  />
                </div>

                <div
                  className="mt-4 md:mt-6 cursor-pointer"
                  onClick={() =>
                    openInNewTab(
                      "https://play.google.com/store/apps/details?id=com.dayummeals.androidapp"
                    )
                  }
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play Store Badge"
                    className="h-10 sm:h-12 md:h-14"
                  />
                </div>

                <hr
                  className="w-full mt-4 md:mt-6 border-0 h-px"
                  style={{ backgroundColor: "#f4f4f4" }}
                />

                {/* Footer Links */}
                <div className="w-full mt-4 flex flex-col items-center">
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
                    <a
                      href="https://dayummeals.in/terms-and-conditions"
                      className="hover:underline cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms & Conditions
                    </a>
                    <a
                      href="https://dayummeals.in/privacy-policy"
                      className="hover:underline cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="https://docs.google.com/forms/u/0/d/1a2EJq3q2MR8vpGIHFXiz_9OoyZBQGRXP9_-sU-hYJhY/viewform?ts=67d53292&edit_requested=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline cursor-pointer"
                    >
                      Contact Us
                    </a>
                    <a
                      href="https://dayummeals.in/about-us"
                      className="hover:underline cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      About Us
                    </a>
                    <a
                      href="https://docs.google.com/forms/d/1botNK0WdrnKcBOg4f_Iv8Z4MauQ5F1eBylubFtzqneE/viewform?ts=67d53231&edit_requested=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline cursor-pointer"
                    >
                      Partner with us
                    </a>
                  </div>

                  {/* Social Icons */}
                  <div className="flex space-x-4 mt-3">
                    <a
                      href="https://x.com/dayummeals"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/dayummeals/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm8.88 2.32a.88.88 0 110 1.76.88.88 0 010-1.76zm-4.38 2.92a4.38 4.38 0 110 8.76 4.38 4.38 0 010-8.76zm0 1.5a2.88 2.88 0 100 5.76 2.88 2.88 0 000-5.76z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/dayummeals/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.74l-.44 2.89h-2.3v6.99C18.34 21.13 22 17 22 12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}