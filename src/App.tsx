import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import ProjectsSection from './components/Projects/ProjectsSection';
import Footer from './components/Footer/Footer';

export default function App() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="max-w-7xl mx-auto px-8 pt-56 pb-0 md:pt-96">
				<Hero />
				<ProjectsSection />
			</main>
			<Footer />
		</div>
	);
}