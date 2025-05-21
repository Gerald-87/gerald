"use client";

import { useForm, SubmitHandler } from 'react-hook-form';
import SectionHeading from './SectionHeading';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' | null }>({ message: '', type: null });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setStatus({ message: '', type: null });
    try {
      setIsLoading(true);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Submission failed');
      }
      
      setStatus({
        message: 'Message sent successfully!',
        type: 'success'
      });
      reset();
    } catch (error) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Failed to send message. Please try again.';
      
      setStatus({
        message: errorMessage,
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="bg-[#1E1E1E] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="$ ./contact_form --init"
          titleClassName="text-[#00ff00] font-mono"
          description={
            <span className="text-[#00ff00]/80 font-mono">
              Initializing secure communication channel
              <span className="dot-pulse animate-dot-pulse">...</span>
            </span>
          }
        />
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-[#2A2A2A] p-8 rounded-lg border-2 border-[#00ff00]/20">
            <div className="space-y-6 font-mono text-[#00ff00]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#00ff00] font-mono">$</span>
                  <div className="flex-1">
                    <label htmlFor="name" className="block font-mono text-[#00ff00]/80 mb-2">Name:</label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full p-3 bg-[#2A2A2A] border border-[#00ff00]/40 rounded-md text-[#00ff00]"
                      placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00ff00] font-mono">$</span>
                  <div className="flex-1">
                    <label htmlFor="email" className="block font-mono text-[#00ff00]/80 mb-2">Email:</label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: 'Invalid email address',
                        },
                      })}
                      className="w-full p-3 bg-[#2A2A2A] border border-[#00ff00]/40 rounded-md text-[#00ff00]"
                      placeholder="user@domain.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block font-mono text-[#00ff00]/80 mb-2">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: 'Subject is required' })}
                  placeholder="Subject"
                  className="w-full p-3 bg-[#2A2A2A] border border-[#00ff00]/40 rounded-md text-[#00ff00]"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block font-mono text-[#00ff00]/80 mb-2">Message:</label>
                <textarea
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Your message"
                  className="w-full p-3 bg-[#2A2A2A] border border-[#00ff00]/40 rounded-md text-[#00ff00] min-h-[150px] resize-y"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              {status.message && (
                <p className={`text-sm ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                  {status.message}
                </p>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#00ff00]/10 border-2 border-[#00ff00]/40 px-6 py-3 rounded-md font-mono hover:bg-[#00ff00]/20 transition-colors"
              >
                {isLoading ? '$ Sending...' : '$ send_message'}
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
