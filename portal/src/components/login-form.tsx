"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "@/hooks/use-toast"
import { signIn } from "next-auth/react";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandle = async (event: FormEvent) => {
    event.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      toast({
        title: "LOGIN FAILED",
        description: res.error, 
        variant: "destructive", 
      });
    } else {  
      toast({
        title:"LOGIN",
        description:"Login successfully"
      })
      router.push("/"); 
    }
  }

  return (
    <Card className="mx-auto w-1/3">
      <CardHeader>
        <CardTitle className="text-2xl">Đăng nhập</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button type="button" className="w-full" onClick={submitHandle}>
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
