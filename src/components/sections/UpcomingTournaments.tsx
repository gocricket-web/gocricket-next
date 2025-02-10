// const UpcomingTournaments = () => {
//   const tournaments = [
//     {
//       id: 1,
//       name: "Champions Trophy 2025",
//       location: "Pakistan",
//       image: "/images/tournament1.png",
//     },
//     {
//       id: 2,
//       name: "Indian Premier League",
//       image: "/images/tournament.png",
//     },
//     {
//       id: 3,
//       name: "ICC Women's T20 World Cup 2025",
//       location: "Malaysia",
//       image: "/images/tournament2.png",
//     },
//   ];

//   return (
//     <section className="relative py-20">
//       {/* Background gradient */}
//       <div className="absolute inset-0" />

//       {/* Cricket players illustration */}
//       <div className="absolute right-0 -top-10 z-10">
//         <img
//           src="/images/cricket-players.png"
//           alt="Cricket Players"
//           className="w-[300px] md:w-[400px] lg:w-[450px]"
//           loading="lazy"
//         />
//       </div>

//       <div className="container mx-auto px-4 relative">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
//             Upcoming Tournaments
//           </h2>

//           {/* Tournament logos container */}
//           <div className="relative bg-gradient-to-br from-[#121638] to-[#1E1E4B] rounded-2xl p-8">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//               {tournaments.map((tournament) => (
//                 <div key={tournament.id} className="flex-1 flex justify-center">
//                   <img
//                     src={tournament.image}
//                     alt={tournament.name}
//                     className="h-12 object-contain"
//                     loading="lazy"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UpcomingTournaments;
