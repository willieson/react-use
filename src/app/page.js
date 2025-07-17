'use client'
import React, { useState, useEffect } from "react";
import Introduction from "@/components/introdocution";
import Profile from "@/components/profile";

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const Home = () => {

  const [mobilSaya, setmobilSaya] = useState(1)
const [jumlahMobil, setjumlahMobil] = useState()
 const [isLoading, setIsLoading] = useState(false);

useEffect(()=>{
 if (mobilSaya >= 5) {
    setjumlahMobil("Saya Punya Mobil Banyak");
  } else if (mobilSaya <= 0) {
    setjumlahMobil("Saya tidak punya Mobil");
  } else {
    setjumlahMobil("Saya punya Mobil");
  }
}, [mobilSaya])

const tambahMobil = async () => {
    setIsLoading(true);
    await delay(500);
    setmobilSaya((prev) => prev + 1);
    setIsLoading(false);
  };

  const kurangiMobil = async () => {
    setIsLoading(true);
    await delay(500);
    setmobilSaya((prev) => prev - 1);
    setIsLoading(false);
  };

  return (
   <div className="m-4">
      <h1 className="text-2xl">{jumlahMobil}</h1>
      <h1 className="text-2xl">Mobil saya ada: {mobilSaya}</h1>
      <div className="flex gap-4 mt-4">
        <button
          onClick={tambahMobil}
          disabled={isLoading || mobilSaya >= 5}
          className={`px-4 py-2 rounded text-white transition ${
            isLoading || mobilSaya >= 5
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isLoading ? "Tunggu..." : "+"}
        </button>

        <button
          onClick={kurangiMobil}
          disabled={isLoading || mobilSaya <= 0}
          className={`px-4 py-2 rounded text-white transition ${
            isLoading || mobilSaya <= 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isLoading ? "Tunggu..." : "-"}
        </button>
      </div>
    </div>
  );
}

export default Home
