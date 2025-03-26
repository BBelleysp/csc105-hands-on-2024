import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import loginP from "/public/loginP.jpg";
const userSchema = z.object({
  email: z.string().email({ message: "Email must be a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

function LoginPage() {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data) => {
    console.log("Login Success", data);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center ">
    <div className="flex w-1/3 min-h-4">
      <img src={loginP} alt="" />
    </div>
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <h1 className="text-2xl">LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg w-80">
        <div className="mb-4">
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        
        <div className="mb-4">
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password.message}</span>
          )}
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>

      {/* Link to Sign Up */}
      <p className="mt-4 text-gray-600">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </p>

      
    </div>
    </div>
  );
}

export default LoginPage;
