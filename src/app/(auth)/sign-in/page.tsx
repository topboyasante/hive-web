import SignInForm from '@/components/forms/auth/sign-in'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Sign in to Hive",
  description: "Log in to your account",
};

function SignIn() {
  return (
    <SignInForm/>
  )
}

export default SignIn