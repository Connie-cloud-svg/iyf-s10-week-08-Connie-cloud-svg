import { useState } from "react";

function ContactForm () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData)
        setFormData({name: '', email: '', message: ''});
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
            />

            <input 
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="youremail@gmail.com"
            />

            <textarea
            name="name" 
            value={formData.message}
            onChange={handleChange}
            placeholder="Input your message here"
            />

            <button type="submit">Send</button>
        </form>
    );
}

export default ContactForm;