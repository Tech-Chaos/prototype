import React from 'react'
import places from '../data/place'
import { useParams } from 'react-router-dom'
import AboutSection from '../components/AboutSection'
import HeroSection from '../components/HeroSection'
import DiscoverySection from '../components/DiscoverySection'
import SymphonyOfGreen from "../components/SymphonyOfGreen";
import MustVisit from "../components/MustVisit";
import JourneySection from "../components/JourneySection";
import GettingThereSection from "../components/GettingThereSection";
import TasteSection from "../components/TasteSection";
import TribalArtSection from "../components/TribalArtSection";
import Navbar from '../components/Navbar'
const PlacePage = () => {
    const { id } = useParams();
    const place = places.find(p => p.id === id);
    
    if (!place) {
        return (
            <div className='bg-[#f1ead8] w-full min-h-screen m-0 p-0 pt-16 flex items-center justify-center'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold text-[#4e2d18] mb-4'>Place Not Found</h1>
                    <p className='text-lg text-[#4e2d18]'>The requested destination could not be found.</p>
                </div>
            </div>
        );
    }
    
    return (
        <div className='bg-[#f1ead8] w-full min-h-screen m-0 p-0 pt-16'>
            <Navbar />
            <HeroSection hero={place?.hero} />
            <AboutSection about={place?.about} />
            <DiscoverySection discover={place?.discover} />
            <SymphonyOfGreen place={place?.symphony} />
            <MustVisit place={place?.mustVisit} />
            <JourneySection place={place?.journey} />
            <GettingThereSection place={place?.gettingThere} />
            <TasteSection place={place?.taste} />
            <TribalArtSection place={place?.tribalArt} />
        </div>
    )
}

export default PlacePage