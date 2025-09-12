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
    return (
        <div className='bg-[#f1ead8] w-screen m-0 p-0' >
            <Navbar />
            <HeroSection hero={place.hero} />
            <AboutSection about={place.about} />
            <DiscoverySection discover={place.discover} />
            <SymphonyOfGreen place={place.symphony} />
            <MustVisit place={place.mustVisit} />
            <JourneySection place={place.journey} />
            <GettingThereSection place={place.gettingThere} />
            <TasteSection place={place.taste} />
            <TribalArtSection place={place.tribalArt} />
        </div>
    )
}

export default PlacePage