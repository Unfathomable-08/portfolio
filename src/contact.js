import react, { forwardRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = forwardRef((props, ref) => {

    const { register, handleSubmit } = useForm();

    useEffect(()=>{
        emailjs.init('tkWMhfTljoEZw4INe'); 
    },[]);

    const onSubmitFn = (data) => {
        emailjs.send(
            'service_124711', 'template_ekjziwa', data
        ).then(
            alert('Message Sent!')
        );
    }

    return (
        <>
            <section id="contact" ref={ref} className="min-h-screen bg-primary grid grid-cols-1 md:grid-cols-2 pt-24 text-white">
                <div className="px-6 sm:px-20">
                    <h1 className="text-center text-2xl md:mt-24 font-medium">Contact <span className="text-cyan-500">Me</span></h1>
                    <h2 className="pb-3 pt-6 font-medium text-md">Let's Work Together</h2>
                    <p>Feel free to reach out if you have any question, opportunities, or just want to connect. Whether it's a potential project, feedback, or a collaboration idea, I'd love to hear from you and discuss how we can work together.</p>
                    <i className="fa fa-envelope text-cyan-500 text-xl transform translate-y-[3px] pt-8"/><a href="mailto:muhammad124711@gmail.com" className="ps-2 underline">muhammad124711@gmail.com</a><br/>
                    <i className="fab fa-github text-cyan-500 text-xl transform translate-y-[3px]"/><a href="https://github.com/unfathomable-08" target="_blank" className="ps-2 underline">@Unfathomable-08</a><br/>
                    <div className="py-12">
                        <i className="hover-shadow rounded-full mx-3 px-1 border border-cyan-500 fab fa-twitter text-xl text-cyan-500 hover:bg-cyan-500 hover:text-primary"></i>
                        <i className="hover-shadow rounded-full me-3 px-[6px] border border-cyan-500 fab fa-instagram text-xl text-cyan-500 hover:bg-cyan-500 hover:text-primary"></i>
                        <i className="hover-shadow rounded-full me-3 px-2 border border-cyan-500 fab fa-facebook-f text-xl text-cyan-500 hover:bg-cyan-500 hover:text-primary"></i>
                        <i className="hover-shadow rounded-full me-3 px-[6px] py-[0.2px] border border-cyan-500 fab fa-linkedin-in text-xl text-cyan-500 hover:bg-cyan-500 hover:text-primary"></i>
                    </div>
                </div>

                <div className="px-10 md:px-20 sm:px-32 md:mt-24">
                    <form onSubmit={handleSubmit(onSubmitFn)}>
                        <input type="text" name="user_name" className="bg-primary border-b border-gray-500 w-full h-10 my-2 focus:outline-none  focus:border-gray-300" placeholder="Your Name" {...register('user_name')}/><br/>
                        <input type="text" name="user_email" className="bg-primary border-b border-gray-500 w-full h-10 my-2 focus:outline-none focus:border-gray-300" placeholder="Your Email" {...register('user_email')}/><br/>
                        <input type="text" name="subject" className="bg-primary border-b border-gray-500 w-full h-10 my-2 focus:outline-none focus:border-gray-300" placeholder="Your Subject" {...register('subject')}/><br/>
                        <textarea type="text" name="message" className="bg-primary border border-gray-500 w-full h-36 mt-6 px-4 py-2 focus:outline-none focus:border-gray-300 focus:rounded-xl transition ease-in-out" placeholder="Your Message" {...register('message')}/><br/>
                        <button className="border-2 border-cyan-500 text-cyan-500 font-medium w-full rounded-lg h-10 hover:bg-cyan-500 hover:text-white my-8 hover-shadow">Submit</button>
                    </form>
                </div>
            </section>
        </>
    );
});

export default Contact;