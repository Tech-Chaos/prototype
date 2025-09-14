import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Itinerary = () => {
  // Form state management
  const [formData, setFormData] = useState({
    duration: '',
    travelers: '',
    budgetPerPerson: '',
    startDate: '',
    interests: [],
    accommodation: '',
    transport: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState(null);

  // Load from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('itineraryForm');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem('itineraryForm', JSON.stringify(formData));
  }, [formData]);

  // Form options
  const durationOptions = [
    { value: '2', label: '2 days' },
    { value: '3-4', label: '3-4 days' },
    { value: '5-7', label: '5-7 days' },
    { value: '8-10', label: '8-10 days' },
    { value: '10+', label: '10+ days' }
  ];

  const travelerOptions = [
    { value: '1', label: '1 person' },
    { value: '2', label: '2 people' },
    { value: '3', label: '3 people' },
    { value: '4', label: '4 people' },
    { value: '5', label: '5 people' },
    { value: '6+', label: '6+ people' }
  ];

  const accommodationOptions = [
    { value: 'budget', label: 'Budget' },
    { value: 'mid-range', label: 'Mid-range' },
    { value: 'heritage-homestay', label: 'Heritage homestay' },
    { value: 'luxury', label: 'Luxury' }
  ];

  const transportOptions = [
    { value: 'public', label: 'Public transport' },
    { value: 'private-cab', label: 'Private cab' },
    { value: 'self-drive', label: 'Self-drive' },
    { value: 'mixed', label: 'Mixed' }
  ];

  const interestOptions = [
    { value: 'nature', label: 'Nature & Wildlife', icon: '🌿' },
    { value: 'heritage', label: 'Cultural Heritage', icon: '🏛️' },
    { value: 'tribal', label: 'Tribal Culture', icon: '🪶' },
    { value: 'temples', label: 'Temples & Spirituality', icon: '🕉️' },
    { value: 'adventure', label: 'Adventure Sports', icon: '⛰️' },
    { value: 'photography', label: 'Photography', icon: '📸' },
    { value: 'waterfalls', label: 'Waterfalls', icon: '💧' },
    { value: 'cuisine', label: 'Local Cuisine', icon: '🍽️' }
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: checked 
          ? [...prev.interests, value]
          : prev.interests.filter(interest => interest !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.duration) newErrors.duration = 'Trip duration is required';
    if (!formData.travelers) newErrors.travelers = 'Number of travelers is required';
    if (!formData.budgetPerPerson) newErrors.budgetPerPerson = 'Budget is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (formData.interests.length === 0) newErrors.interests = 'Please select at least one interest';
    if (!formData.accommodation) newErrors.accommodation = 'Accommodation preference is required';
    if (!formData.transport) newErrors.transport = 'Transportation preference is required';

    // Date format validation - more flexible
    if (formData.startDate) {
      // Accept various formats: dd-mm-yyyy, dd/mm/yyyy, dd.mm.yyyy
      const datePattern = /^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})$/;
      if (!datePattern.test(formData.startDate)) {
        newErrors.startDate = 'Please use dd-mm-yyyy format (e.g., 15-12-2025)';
      } else {
        // Additional validation to check if it's a valid date
        const [, day, month, year] = formData.startDate.match(datePattern);
        const date = new Date(year, month - 1, day);
        if (date.getDate() != day || date.getMonth() != month - 1 || date.getFullYear() != year) {
          newErrors.startDate = 'Please enter a valid date';
        }
      }
    }

    // Budget validation
    if (formData.budgetPerPerson) {
      const budget = Number(formData.budgetPerPerson);
      if (isNaN(budget) || budget < 500) {
        newErrors.budgetPerPerson = 'Budget should be at least ₹500';
      } else if (budget > 50000) {
        newErrors.budgetPerPerson = 'Budget seems too high. Please enter a reasonable amount.';
      }
    }

    setErrors(newErrors);
    
    // Log validation results for debugging
    if (Object.keys(newErrors).length > 0) {
      console.log('Form validation failed:', newErrors);
    } else {
      console.log('Form validation passed!');
    }
    
    return Object.keys(newErrors).length === 0;
  };

  // Generate AI prompt
  const generatePrompt = () => {
    const interestLabels = formData.interests.map(value => 
      interestOptions.find(opt => opt.value === value)?.label
    ).join(', ');

    return `Create a detailed ${formData.duration} days itinerary for ${formData.travelers} travelers visiting Jharkhand, India. 

Trip Details:
- Duration: ${formData.duration} days
- Travelers: ${formData.travelers} people
- Budget: ₹${formData.budgetPerPerson} per person per day
- Start Date: ${formData.startDate}
- Interests: ${interestLabels}
- Accommodation: ${accommodationOptions.find(opt => opt.value === formData.accommodation)?.label}
- Transportation: ${transportOptions.find(opt => opt.value === formData.transport)?.label}
${formData.notes ? `- Special Requirements: ${formData.notes}` : ''}

Please provide:
1. Day-by-day detailed itinerary
2. Recommended places to visit based on their interests
3. Estimated costs for activities and meals
4. Transportation recommendations between locations
5. Best time to visit each location
6. Cultural tips and local customs
7. Must-try local foods

Focus specifically on Jharkhand's attractions including Ranchi, tribal villages, waterfalls like Jonha Falls, Hundru Falls, cultural sites, and adventure activities. Make it practical and actionable.`;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      console.log('Form validation failed - check the form for errors');
      return;
    }

    console.log('Form validation passed, starting AI generation...');
    setIsLoading(true);

    try {
      const prompt = generatePrompt();
      console.log('Generated prompt length:', prompt.length);
      
      // For now, let's create a mock response to test the UI
      // This simulates what the AI would return
      const mockItinerary = `# Your Personalized ${formData.duration} Days Jharkhand Itinerary

## Trip Overview
**Duration:** ${formData.duration} days  
**Travelers:** ${formData.travelers} people  
**Budget:** ₹${formData.budgetPerPerson} per person per day  
**Start Date:** ${formData.startDate}

## Day 1: Arrival in Ranchi
**Morning:**
- Arrive at Birsa Munda Airport, Ranchi
- Check into ${formData.accommodation === 'heritage-homestay' ? 'Heritage Homestay' : formData.accommodation} accommodation
- Fresh breakfast at local restaurant

**Afternoon:**
- Visit Jagannath Temple - ancient temple with rich cultural significance
- Explore Rock Garden - beautiful landscape with waterfalls
- Lunch at traditional Jharkhandi restaurant

**Evening:**
- Sunset at Kanke Dam
- Traditional dinner featuring local cuisine
- Rest and prepare for adventure ahead

**Estimated Cost:** ₹${Math.round(formData.budgetPerPerson * 0.8)} per person

## Day 2: Waterfall Adventure
**Morning:**
- Early departure to Jonha Falls (Gautamdhara)
- ${formData.interests.includes('photography') ? 'Photography session at the scenic waterfall' : 'Enjoy the natural beauty'}
- Picnic breakfast by the falls

**Afternoon:**
- Trek to Hundru Falls - spectacular 98-meter cascade
- ${formData.interests.includes('adventure') ? 'Adventure activities like rappelling (if available)' : 'Relaxing by the waterfall'}
- Local lunch

**Evening:**
- Return to Ranchi
- Cultural show featuring tribal dances
- Dinner at heritage restaurant

**Estimated Cost:** ₹${Math.round(formData.budgetPerPerson * 0.9)} per person

## Day 3: Cultural Immersion
**Morning:**
- Visit to tribal village near Ranchi
- ${formData.interests.includes('tribal') ? 'Deep dive into tribal culture and traditions' : 'Cultural interaction with local communities'}
- Traditional craft workshop

**Afternoon:**
- Tribal museum visit
- Local handicraft shopping
- Traditional lunch with tribal family

**Evening:**
- Folk music and dance performance
- Farewell dinner
- ${formData.transport === 'private-cab' ? 'Private transfer arrangements' : 'Transportation coordination'}

**Estimated Cost:** ₹${Math.round(formData.budgetPerPerson * 0.85)} per person

## Transportation
- **Mode:** ${formData.transport === 'private-cab' ? 'Private cab for comfortable travel' : 'Mixed transportation as selected'}
- **Distance:** Approximately 200km total
- **Road Conditions:** Generally good, some hilly terrain

## Cultural Tips
- Respect local customs and traditions
- Ask permission before photographing tribal communities
- Try local delicacies like litti chokha and handia
- Carry cash for small vendors and local shops

## What to Pack
- Comfortable trekking shoes
- Light cotton clothes
- Camera for scenic photography
- Sunscreen and hat
- First aid kit

${formData.notes ? `## Special Notes\n${formData.notes}` : ''}

## Emergency Contacts
- Local Tourism Office: +91 651 2490500
- Emergency Services: 102/108

**Have an amazing trip to Jharkhand! 🏞️**

---
*This itinerary is customized based on your preferences and can be modified according to local conditions and availability.*`;

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      console.log('Mock itinerary generated successfully');
      setItinerary(mockItinerary);
      
    } catch (error) {
      console.error('Error generating itinerary:', error);
      alert('Failed to generate itinerary. Please try again or contact support.');
    } finally {
      setIsLoading(false);
    }
  };

  // If itinerary is generated, show results
  if (itinerary) {
    return (
      <div className="bg-[#f1ead8] min-h-screen">
        {/* Header */}
        <nav className="bg-gradient-to-r from-[#C6AE95] to-[#A78669] shadow-lg fixed top-0 w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="text-white text-xl font-bold">
                Jharkhand Tourism
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all">
                  Home
                </Link>
                <Link to="/destinations" className="text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all">
                  Destinations
                </Link>
                <Link to="/experience" className="text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all">
                  Experience
                </Link>
                <Link to="/itinerary" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Plan Your Trip
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Results Content */}
        <div className="pt-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="py-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-serif text-[#4e2d18] mb-2 tracking-wide">
                YOUR PERSONALIZED
              </h1>
              <h1 className="text-5xl md:text-6xl font-serif text-[#4e2d18] mb-6 tracking-wide">
                ITINERARY
              </h1>
              <div className="flex justify-center gap-4 mb-8">
                <button 
                  onClick={() => setItinerary(null)}
                  className="bg-[#A0856B] text-white px-6 py-3 rounded-full hover:bg-[#8C6E56] transition-colors"
                >
                  Create New Itinerary
                </button>
                <button 
                  onClick={() => window.print()}
                  className="bg-white text-[#A0856B] px-6 py-3 rounded-full border-2 border-[#A0856B] hover:bg-[#A0856B] hover:text-white transition-colors"
                >
                  Print Itinerary
                </button>
              </div>
            </div>

            {/* Itinerary Content */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap font-light leading-relaxed text-gray-800">
                  {itinerary}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#8C6E56] text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-[#C6AE95]">Our Story</a></li>
                  <li><a href="#" className="hover:text-[#C6AE95]">Culture</a></li>
                  <li><a href="#" className="hover:text-[#C6AE95]">Heritage</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Tourism Services</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-[#C6AE95]">Guided Tours</a></li>
                  <li><a href="#" className="hover:text-[#C6AE95]">Accommodations</a></li>
                  <li><a href="#" className="hover:text-[#C6AE95]">Transportation</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">📞</span>
                    <span>+91 651 2490500</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✉️</span>
                    <span>tourism@jharkhand.gov.in</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="bg-[#f1ead8] min-h-screen">
      {/* Header */}
      <nav className="bg-gradient-to-r from-[#C6AE95] to-[#A78669] shadow-lg fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-white text-xl font-bold">
              Jharkhand Tourism
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all">
                Home
              </Link>
              <Link to="/destinations" className="text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all">
                Destinations
              </Link>
              <Link to="/experience" className="text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all">
                Experience
              </Link>
              <Link to="/itinerary" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium">
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="py-12">
          {/* Title Block */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif text-[#4e2d18] mb-2 tracking-wide leading-tight">
              AI ITINERARY
            </h1>
            <h1 className="text-5xl md:text-6xl font-serif text-[#4e2d18] mb-6 tracking-wide leading-tight">
              PLANNER
            </h1>
            <p className="text-lg text-[#6b4e3d] max-w-2xl mx-auto leading-relaxed">
              Create a personalized travel itinerary for your Jharkhand adventure. Our AI will craft a detailed plan based on your preferences, budget, and interests.
            </p>
          </div>

          {/* Form Panel */}
          <div className="bg-[#E5D5B7] rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl font-semibold text-[#4e2d18] mb-8 text-center">Trip Basics</h2>
            
            <form onSubmit={handleSubmit} role="form" aria-label="AI Itinerary Planner – Trip Basics">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Trip Duration */}
                <div className="md:col-span-1">
                  <label htmlFor="duration" className="block text-sm font-medium text-[#4e2d18] mb-2 flex items-center">
                    <span className="mr-2">📅</span>
                    Trip Duration
                  </label>
                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#A0856B] ${
                      errors.duration ? 'border-red-500' : 'border-gray-200'
                    }`}
                    aria-describedby="duration-help"
                    aria-invalid={errors.duration ? 'true' : 'false'}
                  >
                    <option value="">Select duration</option>
                    {durationOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  <p id="duration-help" className="text-sm text-gray-600 mt-1">Total trip length in days.</p>
                  {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
                </div>

                {/* Number of Travelers */}
                <div className="md:col-span-1">
                  <label htmlFor="travelers" className="block text-sm font-medium text-[#4e2d18] mb-2 flex items-center">
                    <span className="mr-2">👥</span>
                    Number of Travelers
                  </label>
                  <select
                    id="travelers"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#A0856B] ${
                      errors.travelers ? 'border-red-500' : 'border-gray-200'
                    }`}
                    aria-describedby="travelers-help"
                    aria-invalid={errors.travelers ? 'true' : 'false'}
                  >
                    <option value="">Select travelers</option>
                    {travelerOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  <p id="travelers-help" className="text-sm text-gray-600 mt-1">Count adults and children.</p>
                  {errors.travelers && <p className="text-red-500 text-sm mt-1">{errors.travelers}</p>}
                </div>

                {/* Budget Range */}
                <div className="md:col-span-1">
                  <label htmlFor="budgetPerPerson" className="block text-sm font-medium text-[#4e2d18] mb-2 flex items-center">
                    <span className="mr-2">💰</span>
                    Budget Range (Per Person)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">₹</span>
                    <input
                      type="number"
                      id="budgetPerPerson"
                      name="budgetPerPerson"
                      value={formData.budgetPerPerson}
                      onChange={handleInputChange}
                      placeholder="Enter budget"
                      min="500"
                      className={`w-full pl-8 pr-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#A0856B] ${
                        errors.budgetPerPerson ? 'border-red-500' : 'border-gray-200'
                      }`}
                      aria-describedby="budget-help"
                      aria-invalid={errors.budgetPerPerson ? 'true' : 'false'}
                    />
                  </div>
                  <p id="budget-help" className="text-sm text-gray-600 mt-1">Per person per day in ₹ (INR).</p>
                  {errors.budgetPerPerson && <p className="text-red-500 text-sm mt-1">{errors.budgetPerPerson}</p>}
                </div>

                {/* Start Date */}
                <div className="md:col-span-1">
                  <label htmlFor="startDate" className="block text-sm font-medium text-[#4e2d18] mb-2 flex items-center">
                    <span className="mr-2">📆</span>
                    Start Date
                  </label>
                  <input
                    type="text"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    placeholder="15-12-2025"
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#A0856B] ${
                      errors.startDate ? 'border-red-500' : 'border-gray-200'
                    }`}
                    aria-describedby="date-help"
                    aria-invalid={errors.startDate ? 'true' : 'false'}
                  />
                  <p id="date-help" className="text-sm text-gray-600 mt-1">Example: 15-12-2025 (day-month-year)</p>
                  {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
                </div>

                {/* Interests */}
                <fieldset className="md:col-span-2">
                  <legend className="text-sm font-medium text-[#4e2d18] mb-4 flex items-center">
                    <span className="mr-2">❤️</span>
                    What interests you? (Select all that apply)
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {interestOptions.map(option => (
                      <div key={option.value} className="flex items-center">
                        <input
                          type="checkbox"
                          id={option.value}
                          name="interests"
                          value={option.value}
                          checked={formData.interests.includes(option.value)}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-[#A0856B] focus:ring-[#A0856B] border-gray-300 rounded"
                        />
                        <label htmlFor={option.value} className="ml-2 text-sm text-[#4e2d18] flex items-center">
                          <span className="mr-2">{option.icon}</span>
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.interests && <p className="text-red-500 text-sm mt-2">{errors.interests}</p>}
                </fieldset>

                {/* Accommodation */}
                <div className="md:col-span-1">
                  <label htmlFor="accommodation" className="block text-sm font-medium text-[#4e2d18] mb-2 flex items-center">
                    <span className="mr-2">🏨</span>
                    Accommodation
                  </label>
                  <select
                    id="accommodation"
                    name="accommodation"
                    value={formData.accommodation}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#A0856B] ${
                      errors.accommodation ? 'border-red-500' : 'border-gray-200'
                    }`}
                    aria-describedby="accommodation-help"
                    aria-invalid={errors.accommodation ? 'true' : 'false'}
                  >
                    <option value="">Select accommodation</option>
                    {accommodationOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  <p id="accommodation-help" className="text-sm text-gray-600 mt-1">Preferred stay type; actual options may vary by destination.</p>
                  {errors.accommodation && <p className="text-red-500 text-sm mt-1">{errors.accommodation}</p>}
                </div>

                {/* Transportation */}
                <div className="md:col-span-1">
                  <label htmlFor="transport" className="block text-sm font-medium text-[#4e2d18] mb-2 flex items-center">
                    <span className="mr-2">🚗</span>
                    Transportation
                  </label>
                  <select
                    id="transport"
                    name="transport"
                    value={formData.transport}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#A0856B] ${
                      errors.transport ? 'border-red-500' : 'border-gray-200'
                    }`}
                    aria-describedby="transport-help"
                    aria-invalid={errors.transport ? 'true' : 'false'}
                  >
                    <option value="">Select transport</option>
                    {transportOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  <p id="transport-help" className="text-sm text-gray-600 mt-1">Primary mode between attractions.</p>
                  {errors.transport && <p className="text-red-500 text-sm mt-1">{errors.transport}</p>}
                </div>

                {/* Special Requests */}
                <div className="md:col-span-2">
                  <label htmlFor="notes" className="block text-sm font-medium text-[#4e2d18] mb-2 flex items-center">
                    <span className="mr-2">📝</span>
                    Special Requests or Requirements
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Add dietary restrictions, accessibility needs, or must-visit places..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A0856B] resize-none"
                    aria-describedby="notes-help"
                  />
                  <p id="notes-help" className="text-sm text-gray-600 mt-1">Add dietary restrictions, accessibility needs, or must-visit places.</p>
                </div>
              </div>

              {/* Debug Information */}
              {Object.keys(errors).length > 0 && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <h4 className="text-red-800 font-medium mb-2">Please fix the following errors:</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    {Object.entries(errors).map(([field, error]) => (
                      <li key={field}>• {error}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#A0856B] text-white py-4 px-8 rounded-full text-lg font-medium hover:bg-[#8C6E56] focus:outline-none focus:ring-4 focus:ring-[#A0856B]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-live="polite"
                >
                  {isLoading ? 'Generating Your Itinerary...' : 'Generate My Itinerary'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#8C6E56] text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#C6AE95]">Our Story</a></li>
                <li><a href="#" className="hover:text-[#C6AE95]">Culture</a></li>
                <li><a href="#" className="hover:text-[#C6AE95]">Heritage</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Tourism Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#C6AE95]">Guided Tours</a></li>
                <li><a href="#" className="hover:text-[#C6AE95]">Accommodations</a></li>
                <li><a href="#" className="hover:text-[#C6AE95]">Transportation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">📞</span>
                  <span>+91 651 2490500</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✉️</span>
                  <span>tourism@jharkhand.gov.in</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Itinerary;
