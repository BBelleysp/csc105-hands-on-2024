import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  number: z
    .string()
    .refine((value) => !isNaN(parseInt(value)) && parseInt(value) >= 1 && parseInt(value) <= 100, {
      message: "Number must be between 1 and 100",
    }),
  q: z.enum(["love", "like"], {
    message: "Select either 'love' or 'like'",
  }),
  size: z.enum(["small", "medium", "large"], {
    message: "Select a valid size",
  }),
});

const FavoritesPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    const { number, q, size } = data;
    navigate(`/fav/${number}?q=${q}&size=${size}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg shadow-[#3C6876]  rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#3c6876] via-[#ECE0D9] to-[#D47D46] text-transparent bg-clip-text mb-6 text-center">
          Favorites Page
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Number:</label>
            <input
              {...register("number")}
              type="number"
              placeholder="Enter a number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.number && (
              <span className="text-red-500 text-sm mt-1">{errors.number.message}</span>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Q:</label>
            <select
              {...register("q")}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              <option value="love">Love</option>
              <option value="like">Like</option>
            </select>
            {errors.q && (
              <span className="text-red-500 text-sm mt-1">{errors.q.message}</span>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Size:</label>
            <select
              {...register("size")}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            {errors.size && (
              <span className="text-red-500 text-sm mt-1">{errors.size.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FavoritesPage;
