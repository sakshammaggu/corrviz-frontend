"use client"
import React from "react";
import Link from "next/link"
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input } from '@/components/ui/input';
import { Button } from "../ui/button";
import GoogleSignupButton from "../GoogleAuthenticationButton/GoogleSignupButton/page";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { 
    Form, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormControl, 
    FormDescription, 
    FormMessage 
} from '@/components/ui/form';

const formSchema = z.object({
    email: z.string().email("Please enter a valid email address.").min(1, "Email is required."),
    password: z.string().min(6, "Password must be at least 6 characters."),
})

const SignupForm: React.FC = () => {
    const router = useRouter();
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post('/api/users/signup', values);
            toast.success('User registered successfully!', {
                position: 'top-right',
            });
            // console.log('User signed up:', response.data);
            setTimeout(() => {
                router.push('/'); 
            }, 2000); 
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                    "Error signing up: " +
                        (error.response?.data?.message || error.message),
                    {
                        position: "top-right",
                    }
                );
            } else {
                toast.error("An unexpected error occurred.", {
                    position: "top-right",
                });
            }
        }
    };

    const handleGoogleSignUp = () => {
        // console.log("Google Sign-In initiated");
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Enter your email address.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Enter your password.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 text-white hover:bg-blue-700"
                        disabled={form.formState.isSubmitting}
                    >
                        {form.formState.isSubmitting ? 'Signing Up...' : 'Sign Up'}
                    </Button>
                </form>
            </Form>

            <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="px-4 text-gray-500">OR</span>
                <hr className="flex-grow border-gray-300" />
            </div>

            <GoogleSignupButton onClick={handleGoogleSignUp} />
            
            <p className="mt-4 text-center text-sm">
                Have an account?{' '}
                <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                    Login
                </Link>
            </p>

            <ToastContainer />
        </div>
    )
}

export default SignupForm