import { SignUp } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-slate-600">Welcome back</h1>
        </div>
        <p className="text-base text-slate-400">
          Log in or Create account to get back to your dashboard
        </p>
        <div className="flex items-center justify-normal mt-8">
          <SignUp path="/sign-in"/>
        </div>
      </div>
    </div>
  )
}