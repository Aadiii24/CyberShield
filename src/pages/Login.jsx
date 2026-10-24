import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
const [formData, setFormData] = useState({
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
            "https://cybershield-api-la3m.onrender.com/api/login",
            formData
        );

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        navigate("/");
    } catch (error) {
        setMessage(
            error.response?.data?.message ||
            "Login failed. Please check your connection and try again."
        );
    } finally {
        setLoading(false);
    }
};

return (
    <div className="auth-card">
        <h2>Welcome Back</h2>
        <p>Login to your CyberShield account.</p>

        <form onSubmit={handleSubmit}>
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
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />

            <button type="submit" disabled={loading}>
                {loading ? "Logging In..." : "Login"}
            </button>
        </form>

        {message && <p role="alert">{message}</p>}

        <p>
            Don't have an account? <Link to="/register">Register</Link>
        </p>
    </div>
);

}

export default Login;
