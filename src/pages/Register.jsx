import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
const [formData, setFormData] = useState({
name: "",
email: "",
password: ""
});

const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
        const response = await axios.post(
            "https://cybershield-api-la3m.onrender.com/api/register",
            formData
        );

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        setMessage("Registration successful!");
        navigate("/");
    } catch (error) {
        setMessage(
            error.response?.data?.message ||
            "Registration failed. Please try again."
        );
    } finally {
        setLoading(false);
    }
};

return (
    <div className="auth-card">
        <h2>Create Account</h2>
        <p>Join CyberShield and stay safer online.</p>

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <input
                type="password"
                name="password"
                placeholder="Password (minimum 8 characters)"
                value={formData.password}
                onChange={handleChange}
                minLength={8}
                required
            />

            <button type="submit" disabled={loading}>
                {loading ? "Creating Account..." : "Register"}
            </button>
        </form>

        {message && <p role="status">{message}</p>}

        <p>
            Already have an account? <Link to="/login">Login</Link>
        </p>
    </div>
);
}

export default Register;
