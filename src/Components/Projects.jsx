import React from 'react';
import projectsData from '../Data/projectsData.json'; // Update the path as necessary
import { useTheme } from '../ThemeContext'; // Adjust path as necessary

const Projects = () => {
    const { theme, toggleTheme } = useTheme(); // Get theme and toggle function

    return (
        <>
            <button
                onClick={toggleTheme}
                className={`absolute top-4 right-4 px-4 py-2 rounded ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-700 text-white'}`}
            >
                Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
            <section className={`py-24 md:py-40 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'}`}>
                <div className="container px-4 mx-auto">
                    <div className="flex items-center mb-12">
                        <span className="font-heading text-xl">07</span>
                        <div className="mx-4 rounded-full bg-gray-200 h-1 w-1"></div>
                        <span className="font-heading text-xl">My Projects</span>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {projectsData.map((project) => (
                            <div key={project.id} className="w-full lg:w-1/3 px-4 mb-8"> {/* Reduced bottom margin for better spacing */}
                                <div className={`max-w-md mx-auto ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-lg shadow-lg overflow-hidden`}> {/* Added overflow-hidden for cleaner edges */}
                                    <img className="block w-full h-48 object-cover mb-4" src={project.image} alt={project.title} /> {/* Adjusted height for better image aspect */}
                                    <div className="px-6 py-4"> {/* Added padding for better spacing */}
                                        <div className="flex items-center mb-2"> {/* Improved alignment of category and date */}
                                            <span className={`inline-block px-3 py-1 mr-3 text-xs font-semibold rounded-full ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-700 text-white'}`}>{project.category}</span>
                                            <span className="font-light text-xs text-gray-600">{project.date}</span>
                                        </div>
                                        <h4 className={`font-heading text-xl mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{project.title}</h4>
                                        <div className="flex items-center mb-4">
                                            <img className="w-8 h-8 mr-2 rounded-full" src={project.author.avatar} alt={project.author.name} />
                                            <span className="text-gray-500 text-sm">{project.author.name}</span>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-6"> {/* Added padding for the button */}
                                        <a
                                            className={`inline-block w-full text-center font-medium px-4 py-2 rounded transition duration-250 ${theme === 'light' ? 'bg-indigo-500 hover:bg-indigo-600 text-white' : 'bg-indigo-700 hover:bg-indigo-800 text-white'}`}
                                            href={project.link}
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default Projects;
