import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
  const form = useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    emailjs.init('qgc1zfkX2Xooq6MZW');
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_j0ykilm', 'template_zy5161i', form.current, 'qgc1zfkX2Xooq6MZW')
        .then((result) => {
          console.log(result.text);
          toast.success('Message sent successfully!');
          onClose();
        }, (error) => {
          console.log(error.text);
          toast.error('Message not sent !');
          onClose();
          alert('An error occurred, please try again.');
        });
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div
        className={`bg-white text-black rounded-lg overflow-hidden shadow-xl transform transition-transform ${isOpen ? 'scale-100' : 'scale-75'
          } w-11/12 max-w-md p-6`}
      >
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
