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
        <div>
            <Navbar />
            <AboutSection about={place.about} />
            <HeroSection place={place.hero} />
            <DiscoverySection place={place.discover} />
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