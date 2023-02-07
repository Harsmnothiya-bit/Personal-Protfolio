import React from 'react'
import { Button, Input } from "@mui/material";
function Contact() {
    return (
        <section className='max-w-5xl mx-auto p-5'>
            <div className='text-4xl font-semibold'>
                Contact
            </div>
            <div>
                <form action="https://formspree.io/f/xnqypqjw"

                    method="POST"

                    className='flex flex-col max-w-sm p-10 mb-10 space-y-4 mx-auto'
                >
                    <p>Name</p>
                    <Input name="name" />
                    <p>
                        Email
                    </p>
                    <Input name="email" />
                    <p>
                        Message
                    </p>
                    <Input name="Message" />
                    <Button type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default Contact
