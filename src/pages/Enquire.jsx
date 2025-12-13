import { useState } from "react";
import "../styles/enquire.css";

export default function Enquire() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    model: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const carModels = ["Vortex X1", "Voltura S3", "Aurelio Cruiser", "Electro Nova"];

  const validate = () => {
    let temp = {};
    if (!formData.name.trim()) temp.name = "Name is required";
    if (!formData.email) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) temp.email = "Invalid email";
    if (!formData.phone) temp.phone = "Phone number is required";
    if (!formData.model) temp.model = "Please select a model";
    if (!formData.message.trim()) temp.message = "Message cannot be empty";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        model: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="enquire-bg">

      <div className="enquire-card">

        <h2 className="form-title">Enquire About a Model</h2>

        {success && <div className="success-message">Thank you! We'll get back to you soon.</div>}

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              className={errors.name ? "error" : ""}
              value={formData.name}
              onChange={handleChange}
            />
            <small>{errors.name}</small>
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              className={errors.email ? "error" : ""}
              value={formData.email}
              onChange={handleChange}
            />
            <small>{errors.email}</small>
          </div>

          <div className="form-group">
            <label>Phone *</label>
            <input
              type="tel"
              name="phone"
              className={errors.phone ? "error" : ""}
              value={formData.phone}
              onChange={handleChange}
            />
            <small>{errors.phone}</small>
          </div>

          <div className="form-group">
            <label>Select Model *</label>
            <select
              name="model"
              className={errors.model ? "error" : ""}
              value={formData.model}
              onChange={handleChange}
            >
              <option value="">-- Select a model --</option>
              {carModels.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <small>{errors.model}</small>
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea
              name="message"
              rows="4"
              className={errors.message ? "error" : ""}
              value={formData.message}
              onChange={handleChange}
            />
            <small>{errors.message}</small>
          </div>

          <button type="submit" className="submit-btn">Submit Enquiry</button>
        </form>

      </div>

    </div>
  );
}
