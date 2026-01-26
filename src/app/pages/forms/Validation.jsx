import React, { useState } from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import FormControl from "../../components/ui/FormControl";
import Button from "../../components/ui/Button";

export default function ValidationPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const inputClasses = (hasError) => `w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all dark:text-white ${
    hasError
      ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 dark:border-red-500/50 dark:bg-red-950/20"
      : "border-zinc-200 bg-zinc-50 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900"
  }`;

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Form Validation</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Contoh implementasi validasi form client-side menggunakan state React dan komponen FormControl.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Example</h2>
          <CodeBlock code={`const [formData, setFormData] = useState({
  username: "",
  email: "",
  password: "",
});
const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};
  if (!formData.username) newErrors.username = "Username is required";
  // ... validation logic
  return newErrors;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
  } else {
    // Submit form
  }
};

<form onSubmit={handleSubmit}>
  <FormControl label="Username" error={errors.username} required>
    <input 
      name="username" 
      onChange={handleChange} 
      className={errors.username ? "border-red-500..." : "border-zinc-200..."} 
    />
  </FormControl>
  {/* ... */}
</form>`}>
            <div className="w-full max-w-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <FormControl label="Username" error={errors.username} required>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={inputClasses(errors.username)}
                    placeholder="johndoe"
                  />
                </FormControl>

                <FormControl label="Email" error={errors.email} required>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses(errors.email)}
                    placeholder="john@example.com"
                  />
                </FormControl>

                <FormControl label="Password" error={errors.password} required>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={inputClasses(errors.password)}
                    placeholder="••••••"
                  />
                </FormControl>

                <FormControl label="Confirm Password" error={errors.confirmPassword} required>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={inputClasses(errors.confirmPassword)}
                    placeholder="••••••"
                  />
                </FormControl>

                <Button type="submit" className="w-full">Register</Button>
              </form>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}