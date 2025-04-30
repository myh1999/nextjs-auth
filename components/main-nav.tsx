"use client"

import Image from "next/image"

import CustomLink from "./custom-link"
import React from "react"

export function MainNav() {
  return (
    <div className="flex items-center gap-4 align-middle">
      <CustomLink href="/" className="flex items-center space-x-2">
        <Image
            src="/logo.png"
            alt="Home"
            width="42"
            height="42"
            className="min-w-8 rounded-3xl"
          />
        <h2 className='w-full text-sm font-bold truncate transform-gpu sm:text-xl'>HeroUI</h2>
      </CustomLink>
    </div>
  )
}
