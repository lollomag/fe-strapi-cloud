"use client"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEvent } from "react"
import useSWRMutation from "swr/mutation"
import useSWR from "swr"

export default function Signup() {
  

  async function signup(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="w-full h-[calc(100svh-64px)] lg:grid lg:grid-cols-2">
      <div className="hidden bg-muted lg:block h-[calc(100svh-64px)]">
        <Image
          src="/login-bkg.jpg"
          alt="Image"
          width="960"
          height="540"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Registrati</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form onSubmit={signup} className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">First name</Label>
                <Input id="name" placeholder="Max" name="name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="surname">Last name</Label>
                <Input id="surname" placeholder="Robinson" name="surname" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" name="password" />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
