import SignUpForm from '@/components/forms/auth/sign-up'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Get started with Hive",
  description: "Create an account | Hive",
};

function SignUp() {
  return (
    <SignUpForm/>
  )
}

export default SignUp