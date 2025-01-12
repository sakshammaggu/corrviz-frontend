"use client"
import React from "react";
import Link from "next/link"
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input } from '@/components/ui/input';
import { Button } from "../ui/button";
import GoogleLoginButton from "../GoogleAuthenticationButton/GoogleLoginButton/page";

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

const LoginForm: React.FC = () => {
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
            const response = await axios.post("/api/users/login", values);
            const { token } = response.data;
            localStorage.setItem("token", token);
            toast.success("Login successful!", { position: "top-right" });
            router.push("/"); 
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                  error.response?.data?.message || "An error occurred",
                  { position: "top-right" }
                );
            } else {
                toast.error("An unexpected error occurred", { position: "top-right" });
            }
        }
    };

    const handleGoogleLogin = () => {
        // console.log("Google Sign-In initiated");
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

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
                                    Enter your registered email address.
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
                                    Enter your registered password.
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
                        {form.formState.isSubmitting ? 'Logging in...' : 'Login'}
                    </Button>
                </form>
            </Form>

            <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="px-4 text-gray-500">OR</span>
                <hr className="flex-grow border-gray-300" />
            </div>

            <GoogleLoginButton onClick={handleGoogleLogin} />

            <p className="mt-4 text-center text-sm">
                Dont have an account?{' '}
                <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                    Sign up
                </Link>
            </p>
            <ToastContainer />
        </div>
    )
}

export default LoginForm