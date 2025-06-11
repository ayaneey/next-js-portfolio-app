"use client";

import React, { useState, useEffect } from "react";
import {
	ChevronDown,
	Mail,
	Phone,
	MapPin,
	Github,
	Linkedin,
	ExternalLink,
	Menu,
	X,
} from "lucide-react";

const AnimatedPortfolio = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Scroll effects
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);

			// Update active section based on scroll position
			const sections = ["home", "about", "skills", "projects", "contact"];
			const scrollPosition = window.scrollY + 100;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	const navigation = [
		{ name: "Home", id: "home" },
		{ name: "About", id: "about" },
		{ name: "Skills", id: "skills" },
		{ name: "Projects", id: "projects" },
		{ name: "Contact", id: "contact" },
	];

	return (
		<div className="min-h-screen bg-black text-white overflow-x-hidden">
			{/* Navigation */}
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? "bg-black/80 backdrop-blur-md border-b border-white/10"
						: "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<div className="text-2xl font-bold text-purple-400">Ayan Ahmed</div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex space-x-8">
							{navigation.map((item) => (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className={`transition-all duration-300 hover:text-purple-400 ${
										activeSection === item.id
											? "text-purple-400 border-b-2 border-purple-400"
											: "text-white"
									}`}
								>
									{item.name}
								</button>
							))}
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden text-white hover:text-purple-400 transition-colors"
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>

					{/* Mobile Navigation */}
					{isMenuOpen && (
						<div className="md:hidden mt-4 p-4 bg-black/90 rounded-lg border border-white/10">
							{navigation.map((item) => (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className={`block w-full text-left py-2 transition-colors ${
										activeSection === item.id
											? "text-purple-400"
											: "text-white hover:text-purple-400"
									}`}
								>
									{item.name}
								</button>
							))}
						</div>
					)}
				</div>
			</nav>

			{/* Hero Section */}
			<section
				id="home"
				className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"
			>
				<div className="text-center z-10 px-6">
					<p className="text-lg md:text-xl text-purple-300 mb-4">I'M</p>
					<h1 className="text-6xl md:text-8xl font-bold mb-6 text-purple-400">
						AYAN
					</h1>
					<div className="text-xl md:text-2xl text-white/80 mb-8">
						JUNIOR SOFTWARE ENGINEER
					</div>
					<button
						onClick={() => scrollToSection("about")}
						className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
					>
						<span>Discover More</span>
						<ChevronDown size={20} />
					</button>
				</div>
			</section>

			{/* About Section */}
			<section
				id="about"
				className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black"
			>
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">
							ABOUT
						</h2>
						<h3 className="text-2xl md:text-3xl font-semibold text-white">
							Who I Am
						</h3>
					</div>

					<div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
						<p className="text-lg text-white/90 leading-relaxed mb-6">
							I'm a web developer with a focus on the{" "}
							<span className="bg-purple-600 text-white px-2 py-1 rounded">
								MERN stack
							</span>{" "}
							but still continuously learning and exploring other technologies
							and frameworks.
						</p>
						<p className="text-lg text-white/90 leading-relaxed mb-6">
							My background involves a lot of{" "}
							<span className="bg-pink-600 text-white px-2 py-1 rounded">
								critical thinking
							</span>{" "}
							and{" "}
							<span className="bg-blue-600 text-white px-2 py-1 rounded">
								problem solving
							</span>{" "}
							which have been monumental for my coding journey.
						</p>
						<p className="text-lg text-white/90 leading-relaxed">
							I am passionate about coding and solving challenges and connecting
							with fellow programmers!
						</p>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="py-20 px-6 bg-black">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">
							SKILLS
						</h2>
						<h3 className="text-2xl md:text-3xl font-semibold text-white">
							What I Can Do
						</h3>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{[
							"HTML",
							"CSS",
							"JavaScript",
							"React",
							"Tailwind",
							"MongoDB",
							"GitHub",
							"REST API",
						].map((skill, index) => (
							<div
								key={skill}
								className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
							>
								<div className="text-center">
									<div className="text-2xl mb-2">⚡</div>
									<h3 className="text-white font-semibold">{skill}</h3>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section
				id="projects"
				className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black"
			>
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">
							PROJECTS
						</h2>
						<h3 className="text-2xl md:text-3xl font-semibold text-white">
							What I've Built
						</h3>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 hover:scale-105 transition-all duration-300">
							<h3 className="text-white font-bold text-xl mb-2">FilmFlix</h3>
							<p className="text-white/80 text-sm mb-4">
								React • API Integration
							</p>
							<p className="text-white/90 mb-4">
								A Netflix-inspired movie streaming platform with dynamic content
								loading.
							</p>
							<button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all">
								View Project
							</button>
						</div>

						<div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 hover:scale-105 transition-all duration-300">
							<h3 className="text-white font-bold text-xl mb-2">
								Password Generator
							</h3>
							<p className="text-white/80 text-sm mb-4">
								JavaScript • Security
							</p>
							<p className="text-white/90 mb-4">
								Secure password generator with customizable options.
							</p>
							<button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all">
								View Project
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 px-6 bg-black">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">
						CONTACT
					</h2>
					<h3 className="text-2xl md:text-3xl font-semibold text-white mb-12">
						Get In Touch
					</h3>

					<div className="bg-white/5 rounded-2xl p-8 border border-white/10">
						<h3 className="text-2xl font-bold text-purple-400 mb-2">
							Ayan Ahmed
						</h3>
						<p className="text-white/80 mb-8">Junior Software Engineer</p>

						<div className="flex justify-center space-x-4 mb-8">
							<button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
								<Linkedin size={20} />
							</button>
							<button className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
								<Github size={20} />
							</button>
							<button className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
								<Mail size={20} />
							</button>
						</div>

						<button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
							Hire me?
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AnimatedPortfolio;
