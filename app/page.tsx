'use client';
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
import { Metadata } from "next";
import { useState } from "react";

export default function Home() {
  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
      <button onClick={async () => {
        const _ =  (await import('lodash')).default;
        const users = [
          {name: 'c'},
          {name: 'b'},
          {name: 'a'}
        ];

        const sorted = _.orderBy(users, ['name']);
        console.log('sorted ', sorted);
      }}>Show</button>
    </main>
  );
}

