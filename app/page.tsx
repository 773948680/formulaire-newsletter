import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 p-4">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader className="flex flex-col items-center space-y-2 pt-6">
          <div className="mb-2 rounded-full bg-purple-100 p-2">
            <Mail className="h-6 w-6 text-purple-600" />
          </div>
          <Image src="/placeholder.svg?height=40&width=120" alt="Brand Logo" width={120} height={40} className="mb-2" />
          <h1 className="text-center text-2xl font-bold tracking-tight">Subscribe to My Newsletter</h1>
          <p className="text-center text-sm text-muted-foreground">
            Get the latest updates, tips, and exclusive content delivered straight to your inbox.
          </p>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sky-500"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
              <span className="sr-only">YouTube</span>
            </Button>
          </div>
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-4 flex-shrink text-xs text-gray-400">or continue with</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          <div className="space-y-2">
            <Input type="email" placeholder="Enter your email" className="h-10" />
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Subscribe Now</Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2 pb-6">
          <div className="flex space-x-4 text-xs text-muted-foreground">
            <Link href="#" className="hover:underline">
              Terms
            </Link>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <Link href="#" className="hover:underline">
              Help
            </Link>
          </div>
          <p className="text-center text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
        </CardFooter>
      </Card>
    </div>
  )
}
