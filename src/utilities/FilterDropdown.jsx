// import React from "react";

// const FilterDropdown = ({ filterBooks, genres }) => {
//   return (
//     <div className="flex justify-center space-x-4 mb-6">
//       <label htmlFor="filter-select" className="text-xl self-center ">
//         Filter by
//       </label>
//       <select
//         id="filter-select"
//         className="w-48 md:w-auto rounded-md px-2 py-1 md:px-4 md:py-2 text-lg md:text-xl text-center outline-none text-black font-semibold"
//         onChange={(event) => filterBooks(event.target.value)}
//       >
//         <option value="">All</option>
//         <optgroup label="Genres" className="bg-green-800 text-white">
//           {genres.map((genre) => (
//             <option
//               key={genre}
//               value={genre}
//               className="bg-slate-400 text-black "
//             >
//               {genre}
//             </option>
//           ))}
//         </optgroup>
//       </select>
//     </div>
//   );
// };

// export default FilterDropdown;
