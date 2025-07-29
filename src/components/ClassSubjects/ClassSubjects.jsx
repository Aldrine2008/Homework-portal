import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const subjects = [
  "Mathematics",
  "English",
  "Physics",
  "Biology",
  "Chemistry",
  "Geography",
  "History",
  "ICT",
  "ENTRE",
  "KISWAHILI",
  "CRE",
  "FINE ART",
];

// Define a palette of appealing color pairs for gradients
const colorPalette = [
  { from: "from-purple-400", to: "to-indigo-600" }, // Deep purple to indigo
  { from: "from-green-400", to: "to-teal-600" }, // Vibrant green to teal
  { from: "from-red-400", to: "to-orange-600" }, // Warm red to orange
  { from: "from-blue-400", to: "to-cyan-600" }, // Bright blue to cyan
  { from: "from-pink-400", to: "to-fuchsia-600" }, // Soft pink to fuchsia
  { from: "from-yellow-400", to: "to-lime-600" }, // Sunny yellow to lime
  { from: "from-indigo-400", to: "to-purple-600" }, // Indigo to deep purple
  { from: "from-teal-400", to: "to-green-600" }, // Teal to vibrant green
  { from: "from-orange-400", to: "to-red-600" }, // Orange to warm red
  { from: "from-cyan-400", to: "to-blue-600" }, // Cyan to bright blue
  { from: "from-fuchsia-400", to: "to-pink-600" }, // Fuchsia to soft pink
  { from: "from-lime-400", to: "to-yellow-600" }, // Lime to sunny yellow
];

function ClassSubjects() {
  const { className } = useParams();
  const { user } = useSelector((state) => state.auth);

  // Function to get dynamic colors for subject cards
  const getSubjectColors = (index) => {
    return colorPalette[index % colorPalette.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8"> {/* Softer background */}
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12 relative"> {/* Darker text for contrast */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 capitalize"> {/* Main title gradient */}
            {className.replace(/-/g, " ")} - Subjects
          </span>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div> {/* Title underline */}
        </h1>

        {/* User Information */}
        {user && (
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-6 py-3 bg-white/90 rounded-full shadow-lg border border-gray-100"> {/* More defined card */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-green-600 flex items-center justify-center shadow-md"> {/* User initial background */}
                <span className="text-white font-semibold text-lg">
                  {user.username[0].toUpperCase()}
                </span>
              </div>
              <div className="ml-4 text-gray-800"> {/* Adjusted text color */}
                <p className="font-medium">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 pr-1"> {/* Role gradient */}
                    {user.role}
                  </span>
                  <span className="mx-2 text-gray-400">·</span> {/* Separator color */}
                  <span className="font-semibold">{user.username}</span> {/* Username remains strong */}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {subjects.map((subject, index) => {
            const { from, to } = getSubjectColors(index);
            return (
              <Link
                key={index}
                to={`/class/${className}/subject/${subject
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="block group"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white border border-gray-100"> {/* Softer white, rounded, shadow */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${from} ${to} rounded-2xl rotate-45 transform transition-transform group-hover:rotate-0 duration-300 flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white text-3xl font-bold -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                        {subject.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl text-center text-gray-800 font-bold mb-4"> {/* Darker, bolder text */}
                    {subject}
                  </h2>
                  <div className={`w-1/3 h-1 mx-auto bg-gradient-to-r ${from.replace('from-', 'from-').replace('-400', '-300')} ${to.replace('to-', 'to-').replace('-600', '-500')} rounded-full opacity-70 group-hover:w-2/3 transition-all duration-300`}></div> {/* Dynamic underline */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ClassSubjects;