"use client";

import SuccessAnimationData from "@/public/animations/Success.json"; 
import LoadingAnimationData from "@/public/animations/Loading.json";
import CrossAnimation from "@/public/animations/Cross.json";
import Exclamation from "@/public/animations/Exclamation.json";
import lottie from "lottie-web";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";

const SuccessAnimation = () => {
  useEffect(() => {
    // Initialize Lottie animation
    const anim = lottie.loadAnimation({
      container: document.getElementById("animation-container"),
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: SuccessAnimationData,
    });

    return () => {
      anim.destroy(); // Cleanup animation when component unmounts
    };
  }, []);

  return <div id="animation-container" className="w-12 h-12"></div>;
};

const LoadingAnimation = () => {
  useEffect(() => {
    // Initialize Lottie animation
    const anim = lottie.loadAnimation({
      container: document.getElementById("loading-animation-container"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: LoadingAnimationData,
    });

    return () => {
      anim.destroy(); // Cleanup animation when component unmounts
    };
  }, []);

  return <div id="loading-animation-container" className="w-12 h-12"></div>;
}

const ErrorAnimation = () => {
  useEffect(() => {
    // Initialize Lottie animation
    const anim = lottie.loadAnimation({
      container: document.getElementById("error-animation-container"),
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: CrossAnimation,
    });

    return () => {
      anim.destroy(); // Cleanup animation when component unmounts
    };
  }, []);

  return <div id="error-animation-container" className="w-12 h-12"></div>;
}

const WarningAnimation = () => {
  useEffect(() => {
    // Initialize Lottie animation
    const anim = lottie.loadAnimation({
      container: document.getElementById("warning-animation-container"),
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: Exclamation,
    });

    return () => {
      anim.destroy(); // Cleanup animation when component unmounts
    };
  }, []);

  return <div id="warning-animation-container" className="w-12 h-12"></div>;
}


export { SuccessAnimation, LoadingAnimation, ErrorAnimation, WarningAnimation };
