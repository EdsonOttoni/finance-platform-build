import { Loader2 } from "lucide-react"
import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import Image from "next/image"

export default function SignUpPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-slate-600">Welcome back</h1>
          <p className="text-base text-slate-400">
            Log in or Create account to get back to your dashboard
          </p>
        </div>
        
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp path="/sign-up"/>
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground"/>
          </ClerkLoading>
        </div>
      </div>

    <div className="h-full flex-col space-y-4 bg-blue-600 hidden lg:flex items-center justify-center">
            <Image alt="logo" src='/logo.svg' height={100} width={100}/>
            <h1 className="text-3xl text-white tracking-wider">Finance</h1>
          </div>
    </div>
  )
}