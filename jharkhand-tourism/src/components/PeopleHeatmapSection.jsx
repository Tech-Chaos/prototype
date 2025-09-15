import React, { useEffect, useRef, useState } from 'react';

// Mock data representing people density along various routes in Ranchi
const ranchiRouteData = [
  // Main Road (High Traffic)
  { location: { lat: 23.3441, lng: 85.3096 }, weight: 85 }, // Near Railway Station
  { location: { lat: 23.3450, lng: 85.3108 }, weight: 90 }, // Central Bus Stand
  { location: { lat: 23.3463, lng: 85.3125 }, weight: 80 }, // Commercial Area
  { location: { lat: 23.3475, lng: 85.3142 }, weight: 75 }, // Market Street
  { location: { lat: 23.3488, lng: 85.3158 }, weight: 70 }, // Residential Mix
  
  // Albert Ekka Chowk Area (Very High Traffic)
  { location: { lat: 23.3521, lng: 85.3270 }, weight: 95 }, // Albert Ekka Chowk
  { location: { lat: 23.3535, lng: 85.3285 }, weight: 88 }, // Shopping Complex
  { location: { lat: 23.3548, lng: 85.3298 }, weight: 82 }, // Office Area
  
  // Kanke Road (Medium-High Traffic)
  { location: { lat: 23.4094, lng: 85.4381 }, weight: 65 }, // Kanke Dam Road
  { location: { lat: 23.4085, lng: 85.4365 }, weight: 70 }, // Educational Institutes
  { location: { lat: 23.4076, lng: 85.4350 }, weight: 68 }, // Residential Area
  
  // HEC Township (Medium Traffic)
  { location: { lat: 23.3890, lng: 85.3420 }, weight: 55 }, // HEC Gate
  { location: { lat: 23.3902, lng: 85.3435 }, weight: 60 }, // Township Center
  { location: { lat: 23.3915, lng: 85.3448 }, weight: 58 }, // Housing Complex
  
  // Circular Road (High Traffic)
  { location: { lat: 23.3600, lng: 85.3320 }, weight: 78 }, // Circular Road Start
  { location: { lat: 23.3615, lng: 85.3335 }, weight: 85 }, // Shopping Area
  { location: { lat: 23.3630, lng: 85.3350 }, weight: 80 }, // Business District
  { location: { lat: 23.3645, lng: 85.3365 }, weight: 75 }, // Mixed Use Area
  
  // Ratu Road (Medium Traffic)  
  { location: { lat: 23.3025, lng: 85.2890 }, weight: 45 }, // Ratu Area
  { location: { lat: 23.3040, lng: 85.2905 }, weight: 50 }, // Village Center
  { location: { lat: 23.3055, lng: 85.2920 }, weight: 48 }, // Rural-Urban Mix
  
  // Bariatu (Low-Medium Traffic)
  { location: { lat: 23.3820, lng: 85.3180 }, weight: 40 }, // Bariatu Road
  { location: { lat: 23.3835, lng: 85.3195 }, weight: 45 }, // Residential
  { location: { lat: 23.3850, lng: 85.3210 }, weight: 42 }, // Suburban Area
];

const PeopleHeatmapSection = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const heatmapRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [intensity, setIntensity] = useState(50);
  const [radius, setRadius] = useState(20);
  const [opacity, setOpacity] = useState(0.7);

  useEffect(() => {
    // Load Google Maps API with visualization library
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        setIsLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBoKdJnb6dN1cnndMh4hgPfJXhgJfoaXWA&libraries=visualization`;
      script.async = true;
      script.defer = true;
      script.onload = () => setIsLoaded(true);
      script.onerror = () => {
        console.error('Failed to load Google Maps API');
        // Fallback - show static message
        setIsLoaded(false);
      };
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  useEffect(() => {
    if (isLoaded && mapRef.current && window.google) {
      initializeMap();
    }
  }, [isLoaded]);

  const initializeMap = () => {
    try {
      // Initialize map centered on Ranchi
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 23.3441, lng: 85.3096 }, // Ranchi center
        zoom: 12,
        mapTypeId: 'roadmap',
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'on' }]
          },
          {
            featureType: 'road',
            elementType: 'labels',
            stylers: [{ visibility: 'on' }]
          }
        ]
      });

      mapInstanceRef.current = map;

      // Create heatmap data points
      const heatmapData = ranchiRouteData.map(point => ({
        location: new window.google.maps.LatLng(point.location.lat, point.location.lng),
        weight: point.weight
      }));

      // Create heatmap layer
      const heatmap = new window.google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        map: map,
        radius: radius,
        opacity: opacity,
      });

      heatmapRef.current = heatmap;

      // Add some markers for reference points
      const markers = [
        { position: { lat: 23.3441, lng: 85.3096 }, title: 'Ranchi Railway Station' },
        { position: { lat: 23.3521, lng: 85.3270 }, title: 'Albert Ekka Chowk' },
        { position: { lat: 23.4094, lng: 85.4381 }, title: 'Kanke Dam Area' },
      ];

      markers.forEach(marker => {
        new window.google.maps.Marker({
          position: marker.position,
          map: map,
          title: marker.title,
          icon: {
            url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iOCIgZmlsbD0iIzgwNEEzMCIgZmlsbC1vcGFjaXR5PSIwLjgiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNCIgZmlsbD0iI0Y1RTZEMyIvPgo8L3N2Zz4K',
            scaledSize: new window.google.maps.Size(20, 20),
          }
        });
      });

    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const updateHeatmapRadius = (newRadius) => {
    setRadius(newRadius);
    if (heatmapRef.current) {
      heatmapRef.current.setOptions({ radius: newRadius });
    }
  };

  const updateHeatmapOpacity = (newOpacity) => {
    setOpacity(newOpacity);
    if (heatmapRef.current) {
      heatmapRef.current.setOptions({ opacity: newOpacity });
    }
  };

  const updateHeatmapIntensity = (newIntensity) => {
    setIntensity(newIntensity);
    if (heatmapRef.current && mapInstanceRef.current) {
      // Adjust data weights based on intensity
      const adjustedData = ranchiRouteData.map(point => ({
        location: new window.google.maps.LatLng(point.location.lat, point.location.lng),
        weight: (point.weight * newIntensity) / 50
      }));
      heatmapRef.current.setData(adjustedData);
    }
  };

  if (!isLoaded) {
    return (
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">
              Ranchi People Density Map
            </h3>
            <p className="text-[#4B5563] text-sm sm:text-base max-w-3xl mx-auto">
              Explore the bustling streets of Ranchi with our interactive heatmap showing people density across major routes and landmarks.
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-2xl h-64 sm:h-80 md:h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#A0856B] mx-auto mb-4"></div>
              <p className="text-[#4B5563] text-sm sm:text-base">Loading Interactive Map...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">
            Ranchi People Density Map
          </h3>
          <p className="text-[#4B5563] text-sm sm:text-base max-w-3xl mx-auto">
            Explore the bustling streets of Ranchi with our interactive heatmap showing people density across major routes and landmarks.
          </p>
        </div>

        {/* Control Panel */}
        <div className="bg-[#F5E6D3] rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
          <h4 className="font-semibold text-[#2C1810] mb-4 text-base sm:text-lg">Map Controls</h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {/* Intensity Control */}
            <div>
              <label className="block text-sm font-medium text-[#4B5563] mb-2">
                People Intensity: {intensity}%
              </label>
              <input
                type="range"
                min="20"
                max="100"
                value={intensity}
                onChange={(e) => updateHeatmapIntensity(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #A0856B 0%, #A0856B ${intensity}%, #D1D5DB ${intensity}%, #D1D5DB 100%)`
                }}
              />
            </div>

            {/* Radius Control */}
            <div>
              <label className="block text-sm font-medium text-[#4B5563] mb-2">
                Heat Radius: {radius}px
              </label>
              <input
                type="range"
                min="10"
                max="50"
                value={radius}
                onChange={(e) => updateHeatmapRadius(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #A0856B 0%, #A0856B ${(radius - 10) * 2.5}%, #D1D5DB ${(radius - 10) * 2.5}%, #D1D5DB 100%)`
                }}
              />
            </div>

            {/* Opacity Control */}
            <div>
              <label className="block text-sm font-medium text-[#4B5563] mb-2">
                Opacity: {Math.round(opacity * 100)}%
              </label>
              <input
                type="range"
                min="0.3"
                max="1"
                step="0.1"
                value={opacity}
                onChange={(e) => updateHeatmapOpacity(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #A0856B 0%, #A0856B ${(opacity - 0.3) * 142.86}%, #D1D5DB ${(opacity - 0.3) * 142.86}%, #D1D5DB 100%)`
                }}
              />
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
          <div 
            ref={mapRef}
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]"
            style={{ minHeight: '400px' }}
          />
        </div>

        {/* Legend */}
        <div className="mt-6 sm:mt-8 bg-[#F5E6D3] rounded-xl p-4 sm:p-6">
          <h4 className="font-semibold text-[#2C1810] mb-4 text-base sm:text-lg">Heat Map Legend</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              <span className="text-[#4B5563]">Low Density (20-40%)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
              <span className="text-[#4B5563]">Medium Density (41-60%)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
              <span className="text-[#4B5563]">High Density (61-80%)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-[#4B5563]">Very High Density (81-100%)</span>
            </div>
          </div>
          
          <div className="mt-4 text-xs sm:text-sm text-[#6B7280]">
            <p><strong>Key Areas:</strong> Railway Station, Albert Ekka Chowk, Commercial Districts, and major road intersections show highest people density throughout the day.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #A0856B;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #A0856B;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
};

export default PeopleHeatmapSection;