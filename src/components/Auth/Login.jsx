import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Login = ({ handleLogin }) => {
  const { userData } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fillCredentials = (role) => {
    if (role === "admin") {
      setEmail("admin@example.com");
      setPassword("qwer");
    } else {
      const employee = userData?.employees?.[0];
      if (employee) {
        setEmail(employee.email);
        setPassword(employee.password);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1c1c1c]">
      <div className="bg-[#2a2a2a] p-8 rounded shadow-md w-[400px] text-white">
        <h2 className="text-2xl mb-6 font-semibold text-center text-purple-400">
          Employee Manager Login
        </h2>

        <label className="text-sm text-gray-300">Choose User</label>
        <select
          className="w-full mt-1 mb-4 p-2 rounded bg-[#333] border border-gray-500 text-sm"
          onChange={(e) => {
            const selected = e.target.value;
            if (selected === "admin") {
              fillCredentials("admin");
            } else {
              const emp = userData.employees.find((emp) => emp.email === selected);
              if (emp) {
                setEmail(emp.email);
                setPassword(emp.password);
              }
            }
          }}
        >
          <option value="">-- Select User --</option>
          <option value="admin">Admin (admin@example.com)</option>
          {userData?.employees?.map((emp) => (
            <option key={emp.email} value={emp.email}>
              {emp.firstName} ({emp.email})
            </option>
          ))}
        </select>

        <label className="text-sm text-gray-300">Email</label>
        <input
          className="w-full mt-1 mb-4 p-2 rounded bg-[#333] border border-gray-500 text-sm"
          type="email"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="text-sm text-gray-300">Password</label>
        <input
          className="w-full mt-1 mb-6 p-2 rounded bg-[#333] border border-gray-500 text-sm"
          type="password"
          placeholder="qwer"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          onClick={() => handleLogin(email, password)}
          className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded text-sm"
        >
          Login
        </button>

        <div className="flex justify-between mt-4 text-sm">
          <button
            onClick={() => fillCredentials("admin")}
            className="text-purple-400 hover:underline"
          >
            Use Admin Demo
          </button>
          <button
            onClick={() => fillCredentials("employee")}
            className="text-blue-400 hover:underline"
          >
            Use Employee Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
