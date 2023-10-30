import React, { useState } from 'react';
import validator from 'validator';

function App() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        phoneNumber: ''
    });

    const [errors, setErrors] = useState({
        email: null,
        password: null,
        phoneNumber: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const validateForm = () => {
        let newErrors = {
        };

        // Validate email
        if (!validator.isEmail(formData.email)) newErrors.email = 'Enter a valid email address';
        

        // Validate password (this is basic, you can add more checks)
        if (!validator.isStrongPassword(formData.password)) newErrors.password = 'Password must be stronger (we can tell user here how may chars, special characters, etc.';
        

        // Validate phone number (assuming US format)
        if (!validator.isMobilePhone(formData.phoneNumber, 'any', { strictMode: false })) newErrors.phoneNumber = 'Enter a valid phone number';

        // sanatize our data (make sure they aren't msending code)


        // Object.keys gives an array of all keys
        // if there were any problems, the keys array will have stuff inside

        let isValid = Object.keys(newErrors).length === 0;
        if (!isValid) {
          setErrors(newErrors);

        }
        return isValid

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form data submitted:', formData);
            // use axios to send to backend!
        }
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                    />
                    {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;