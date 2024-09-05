'use client'
import { ResponsiveAppBar } from "@/components/AppBar";
import { Footer } from "@/components/Footer";
import { InlineWidget } from "react-calendly";

const Page = () => (
    <>
        <ResponsiveAppBar />
        <div className="container">
            <InlineWidget url="https://calendly.com/lovely-studio" />
        </div>
        <Footer/>
    </>
)

export default Page;