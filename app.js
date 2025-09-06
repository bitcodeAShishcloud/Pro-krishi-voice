// pro.krishi - Enhanced Voice Assistant Agricultural Platform

// Application configuration
const APP_CONFIG = {
  apiKey: "AIzaSyBYIU2O3sXPBdaLp_YJ-UyTvlyS5i4gwkQ",
  apiEndpoint: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
  weatherApiKey: "a6bc3f59ffac7fd31b05fcaf557a38ba",
  weatherApiEndpoint: "https://api.openweathermap.org/data/2.5",
  googleMapsApiKey: "AIzaSyCQIl7lAjYEXk38P9IjKa3eabd7AqRyLso",
  geocodingEndpoint: "https://maps.googleapis.com/maps/api/geocode/json",
  languages: [
    {code: "en-IN", name: "English (India)", voice: "en-IN"},
    {code: "hi-IN", name: "हिन्दी", voice: "hi-IN"},
    {code: "bn-IN", name: "বাংলা", voice: "bn-IN"},
    {code: "mr-IN", name: "मराठी", voice: "mr-IN"},
    {code: "te-IN", name: "తెలుగు", voice: "te-IN"},
    {code: "ta-IN", name: "தमિழ்", voice: "ta-IN"},
    {code: "gu-IN", name: "ગુજરાતી", voice: "gu-IN"},
    {code: "kn-IN", name: "ಕನ್ನಡ", voice: "kn-IN"},
    {code: "ml-IN", name: "മലയാളം", voice: "ml-IN"},
    {code: "pa-IN", name: "ਪੰਜਾਬੀ", voice: "pa-IN"}
  ],
  voiceCommands: [
    {phrase: "check crop prices", action: "cropPrices", section: "crop-advisory"},
    {phrase: "diagnose disease", action: "diseaseDetection", section: "disease-detection"},
    {phrase: "farming advice", action: "farmingAdvice", section: "smart-farming"},
    {phrase: "show marketplace", action: "marketplace", section: "marketplace"},
    {phrase: "weather forecast", action: "weather", section: "crop-advisory"},
    {phrase: "calculate costs", action: "costCalculation", section: "smart-farming"}
  ]
};

// Application data
const appData = {
  states: [
    "Maharashtra", "Uttar Pradesh", "Punjab", "Haryana", "Gujarat", "Rajasthan", 
    "Madhya Pradesh", "Karnataka", "Andhra Pradesh", "Telangana", "Tamil Nadu", 
    "West Bengal", "Bihar", "Odisha", "Jharkhand", "Chhattisgarh"
  ],
  crops: [
    "Rice", "Wheat", "Cotton", "Sugarcane", "Pulses", "Soybeans", "Maize", 
    "Groundnut", "Millets", "Barley", "Rapeseed", "Mustard", "Tobacco", 
    "Tea", "Coffee", "Jute", "Potato", "Onion", "Banana"
  ],
  diseases: [
    // Rice Diseases
    {
      id: "rice_001",
      name: "Rice Blast",
      crop: "Rice",
      scientificName: "Magnaporthe oryzae",
      category: "Fungal",
      severity: "High",
      symptoms: ["Gray-green lesions on leaves", "Diamond-shaped spots", "Lesions on neck", "White to gray center with brown margin"],
      causes: ["High humidity", "Temperature 25-28°C", "Dense planting", "Excess nitrogen"],
      treatment: "Apply Tricyclazole or Carpropamid fungicide. Reduce nitrogen fertilizer. Improve drainage.",
      prevention: ["Use resistant varieties", "Avoid excess nitrogen", "Proper spacing", "Field sanitation"],
      affectedParts: ["Leaves", "Neck", "Panicle"],
      economicLoss: "10-50%",
      confidence: 0.95
    },
    {
      id: "rice_002",
      name: "Rice Brown Spot",
      crop: "Rice",
      scientificName: "Bipolaris oryzae",
      category: "Fungal",
      severity: "Medium",
      symptoms: ["Brown oval spots on leaves", "Dark brown lesions", "Seedling blight", "Grain discoloration"],
      causes: ["Nutrient deficiency", "Water stress", "Poor soil", "High humidity"],
      treatment: "Apply Mancozeb or Carbendazim. Improve soil fertility. Ensure proper irrigation.",
      prevention: ["Balanced fertilization", "Good water management", "Seed treatment", "Crop rotation"],
      affectedParts: ["Leaves", "Grains", "Seedlings"],
      economicLoss: "5-20%",
      confidence: 0.92
    },
    {
      id: "rice_003",
      name: "Rice Leaf Blight",
      crop: "Rice",
      scientificName: "Xanthomonas oryzae",
      category: "Bacterial",
      severity: "High",
      symptoms: ["Yellow stripes on leaves", "Water-soaked lesions", "Leaf tip burning", "V-shaped lesions"],
      causes: ["High humidity", "Warm temperature", "Wind-driven rain", "Wounds in plants"],
      treatment: "Apply Streptocycline or Copper oxychloride. Remove infected plants.",
      prevention: ["Use resistant varieties", "Avoid overhead irrigation", "Field sanitation", "Balanced nutrition"],
      affectedParts: ["Leaves"],
      economicLoss: "20-40%",
      confidence: 0.88
    },

    // Wheat Diseases
    {
      id: "wheat_001",
      name: "Wheat Rust",
      crop: "Wheat",
      scientificName: "Puccinia triticina",
      category: "Fungal",
      severity: "High",
      symptoms: ["Orange-red pustules on leaves", "Small circular spots", "Leaf yellowing", "Premature drying"],
      causes: ["Cool moist weather", "Temperature 15-25°C", "High humidity", "Dense canopy"],
      treatment: "Apply Propiconazole or Tebuconazole fungicide immediately upon detection.",
      prevention: ["Use resistant varieties", "Early sowing", "Proper spacing", "Remove alternate hosts"],
      affectedParts: ["Leaves", "Stems"],
      economicLoss: "10-40%",
      confidence: 0.94
    },
    {
      id: "wheat_002",
      name: "Powdery Mildew",
      crop: "Wheat",
      scientificName: "Blumeria graminis",
      category: "Fungal",
      severity: "Medium",
      symptoms: ["White powdery growth on leaves", "Stunted growth", "Reduced tillering", "Premature senescence"],
      causes: ["Cool humid conditions", "Dense planting", "Excess nitrogen", "Poor air circulation"],
      treatment: "Apply Sulfur or Triadimefon. Improve air circulation. Reduce nitrogen.",
      prevention: ["Resistant varieties", "Proper spacing", "Balanced fertilization", "Good ventilation"],
      affectedParts: ["Leaves", "Stems"],
      economicLoss: "5-25%",
      confidence: 0.91
    },

    // Cotton Diseases
    {
      id: "cotton_001",
      name: "Cotton Bollworm",
      crop: "Cotton",
      scientificName: "Helicoverpa armigera",
      category: "Insect Pest",
      severity: "High",
      symptoms: ["Holes in bolls", "Damaged squares", "Frass on plants", "Larval feeding damage"],
      causes: ["Warm weather", "High humidity", "Dense crop", "Poor natural enemies"],
      treatment: "Apply NPV or Bt spray. Use pheromone traps. Release Trichogramma.",
      prevention: ["Bt cotton varieties", "Monitor with traps", "Biological control", "Crop rotation"],
      affectedParts: ["Bolls", "Squares", "Flowers"],
      economicLoss: "20-60%",
      confidence: 0.89
    },
    {
      id: "cotton_002",
      name: "Cotton Leaf Curl",
      crop: "Cotton",
      scientificName: "Begomovirus",
      category: "Viral",
      severity: "High",
      symptoms: ["Upward curling of leaves", "Vein thickening", "Stunted growth", "Reduced bolls"],
      causes: ["Whitefly transmission", "High temperature", "Susceptible varieties", "Poor field hygiene"],
      treatment: "Remove infected plants. Control whiteflies with Imidacloprid. Use resistant varieties.",
      prevention: ["CLCuV resistant varieties", "Whitefly control", "Field sanitation", "Border crops"],
      affectedParts: ["Leaves", "Entire plant"],
      economicLoss: "30-80%",
      confidence: 0.93
    },

    // Tomato Diseases
    {
      id: "tomato_001",
      name: "Tomato Late Blight",
      crop: "Tomato",
      scientificName: "Phytophthora infestans",
      category: "Fungal",
      severity: "High",
      symptoms: ["Dark water-soaked lesions", "White mold on leaf undersides", "Brown fruit rot", "Rapid plant death"],
      causes: ["Cool moist weather", "High humidity", "Poor air circulation", "Overhead irrigation"],
      treatment: "Apply Metalaxyl or Dimethomorph. Remove infected plants. Improve drainage.",
      prevention: ["Resistant varieties", "Drip irrigation", "Good spacing", "Fungicide spray"],
      affectedParts: ["Leaves", "Stems", "Fruits"],
      economicLoss: "50-100%",
      confidence: 0.96
    },
    {
      id: "tomato_002",
      name: "Tomato Early Blight",
      crop: "Tomato",
      scientificName: "Alternaria solani",
      category: "Fungal",
      severity: "Medium",
      symptoms: ["Brown spots with concentric rings", "Target-like lesions", "Leaf yellowing", "Fruit spots"],
      causes: ["Warm humid weather", "Plant stress", "Poor nutrition", "Wounds"],
      treatment: "Apply Mancozeb or Chlorothalonil. Improve plant nutrition. Remove infected leaves.",
      prevention: ["Crop rotation", "Resistant varieties", "Good nutrition", "Avoid overhead watering"],
      affectedParts: ["Leaves", "Stems", "Fruits"],
      economicLoss: "20-40%",
      confidence: 0.88
    },

    // Potato Diseases
    {
      id: "potato_001",
      name: "Potato Late Blight",
      crop: "Potato",
      scientificName: "Phytophthora infestans",
      category: "Fungal",
      severity: "High",
      symptoms: ["Dark lesions on leaves", "White mold on undersides", "Brown tuber rot", "Rapid plant collapse"],
      causes: ["Cool moist conditions", "High humidity", "Dense foliage", "Poor drainage"],
      treatment: "Apply Metalaxyl-M or Fenamidone. Remove infected plants. Improve field drainage.",
      prevention: ["Certified seed", "Resistant varieties", "Proper spacing", "Avoid overhead irrigation"],
      affectedParts: ["Leaves", "Stems", "Tubers"],
      economicLoss: "40-100%",
      confidence: 0.97
    },

    // Corn/Maize Diseases
    {
      id: "corn_001",
      name: "Corn Leaf Blight",
      crop: "Maize",
      scientificName: "Exserohilum turcicum",
      category: "Fungal",
      severity: "Medium",
      symptoms: ["Long gray-green lesions", "Tan colored spots", "Leaf death", "Reduced yield"],
      causes: ["Warm humid weather", "Dense planting", "Corn residue", "Susceptible varieties"],
      treatment: "Apply Propiconazole or Azoxystrobin. Remove crop residue. Use resistant varieties.",
      prevention: ["Resistant hybrids", "Crop rotation", "Residue management", "Proper spacing"],
      affectedParts: ["Leaves"],
      economicLoss: "10-30%",
      confidence: 0.85
    },

    // Sugarcane Diseases
    {
      id: "sugarcane_001",
      name: "Sugarcane Red Rot",
      crop: "Sugarcane",
      scientificName: "Colletotrichum falcatum",
      category: "Fungal",
      severity: "High",
      symptoms: ["Reddish discoloration in internodes", "White patches with red margins", "Stunted growth", "Poor juice quality"],
      causes: ["High temperature", "High humidity", "Wounds", "Susceptible varieties"],
      treatment: "Remove infected canes. Apply Carbendazim. Use resistant varieties.",
      prevention: ["Disease-free setts", "Resistant varieties", "Proper field sanitation", "Avoid wounds"],
      affectedParts: ["Stems", "Internodes"],
      economicLoss: "25-75%",
      confidence: 0.92
    },

    // Apple Diseases
    {
      id: "apple_001",
      name: "Apple Scab",
      crop: "Apple",
      scientificName: "Venturia inaequalis",
      category: "Fungal",
      severity: "High",
      symptoms: ["Dark olive-green spots on leaves", "Scabby lesions on fruits", "Premature leaf drop", "Fruit cracking"],
      causes: ["Cool moist spring weather", "Overhead irrigation", "Dense canopy", "Poor air circulation"],
      treatment: "Apply Captan or Myclobutanil. Prune for air circulation. Remove fallen leaves.",
      prevention: ["Resistant varieties", "Proper pruning", "Good sanitation", "Fungicide program"],
      affectedParts: ["Leaves", "Fruits", "Twigs"],
      economicLoss: "30-70%",
      confidence: 0.94
    },

    // General/Multi-crop diseases
    {
      id: "general_001",
      name: "Nutrient Deficiency - Nitrogen",
      crop: "Multiple",
      scientificName: "N/A",
      category: "Nutritional",
      severity: "Medium",
      symptoms: ["Yellowing of older leaves", "Stunted growth", "Reduced vigor", "Poor flowering"],
      causes: ["Poor soil fertility", "Excess rainfall", "Sandy soil", "Poor root development"],
      treatment: "Apply urea or ammonium sulfate. Use foliar spray. Improve soil organic matter.",
      prevention: ["Soil testing", "Balanced fertilization", "Organic matter addition", "Proper irrigation"],
      affectedParts: ["Leaves", "Entire plant"],
      economicLoss: "10-50%",
      confidence: 0.82
    },
    {
      id: "general_002",
      name: "Aphid Infestation",
      crop: "Multiple",
      scientificName: "Aphididae",
      category: "Insect Pest",
      severity: "Medium",
      symptoms: ["Curled leaves", "Sticky honeydew", "Stunted growth", "Yellowing leaves"],
      causes: ["Warm weather", "Succulent growth", "Poor natural enemies", "Dense planting"],
      treatment: "Apply Imidacloprid or Thiamethoxam. Use reflective mulch. Release ladybird beetles.",
      prevention: ["Monitor regularly", "Encourage beneficial insects", "Avoid excess nitrogen", "Use yellow traps"],
      affectedParts: ["Leaves", "Shoots", "Buds"],
      economicLoss: "5-30%",
      confidence: 0.86
    }
  ],
  soilAnalysisData: [
    // Soil Health Conditions
    {
      id: "soil_001",
      name: "Healthy Fertile Soil",
      type: "Optimal",
      category: "Soil Health",
      severity: "Good",
      description: "Rich, dark, well-structured soil with good organic content",
      characteristics: ["Dark brown/black color", "Crumbly texture", "Good moisture retention", "Rich organic matter", "Earthworm presence"],
      pHRange: "6.0-7.0",
      organicMatter: "3-5%",
      nutrients: {
        nitrogen: "High",
        phosphorus: "Adequate",
        potassium: "Good",
        micronutrients: "Balanced"
      },
      recommendations: [
        "Continue current soil management practices",
        "Maintain organic matter through compost addition",
        "Regular crop rotation to preserve soil health",
        "Minimal tillage to preserve soil structure"
      ],
      suitableCrops: ["Rice", "Wheat", "Vegetables", "Legumes", "Fruits"],
      confidence: 0.95
    },
    {
      id: "soil_002", 
      name: "Sandy Soil",
      type: "Texture Issue",
      category: "Soil Structure",
      severity: "Medium",
      description: "Light-colored, loose soil with poor water and nutrient retention",
      characteristics: ["Light color", "Loose texture", "Fast drainage", "Low water retention", "Gritty feel"],
      pHRange: "6.5-7.5",
      organicMatter: "1-2%",
      nutrients: {
        nitrogen: "Low",
        phosphorus: "Variable",
        potassium: "Low",
        micronutrients: "Deficient"
      },
      recommendations: [
        "Add organic matter regularly (compost, manure)",
        "Use mulching to retain moisture",
        "Frequent but light fertilizer applications",
        "Plant cover crops to improve soil structure",
        "Install drip irrigation system"
      ],
      suitableCrops: ["Carrots", "Radish", "Groundnut", "Millets", "Watermelon"],
      confidence: 0.88
    },
    {
      id: "soil_003",
      name: "Clay Soil", 
      type: "Drainage Issue",
      category: "Soil Structure",
      severity: "Medium",
      description: "Heavy, dense soil with poor drainage and aeration",
      characteristics: ["Dark heavy texture", "Poor drainage", "Cracks when dry", "Sticky when wet", "Slow water infiltration"],
      pHRange: "6.0-8.0",
      organicMatter: "2-4%",
      nutrients: {
        nitrogen: "Good",
        phosphorus: "High",
        potassium: "High", 
        micronutrients: "Adequate"
      },
      recommendations: [
        "Improve drainage with raised beds",
        "Add organic matter to improve structure",
        "Avoid working when soil is wet",
        "Use gypsum to improve soil structure",
        "Plant deep-rooted crops to break compaction"
      ],
      suitableCrops: ["Rice", "Sugarcane", "Cotton", "Soybean", "Mustard"],
      confidence: 0.91
    },
    {
      id: "soil_004",
      name: "Acidic Soil",
      type: "pH Problem", 
      category: "Soil Chemistry",
      severity: "High",
      description: "Soil with low pH affecting nutrient availability",
      characteristics: ["pH below 6.0", "Stunted plant growth", "Yellowing leaves", "Poor nodulation in legumes", "Aluminum toxicity signs"],
      pHRange: "4.5-5.5",
      organicMatter: "Variable",
      nutrients: {
        nitrogen: "Low availability",
        phosphorus: "Locked",
        potassium: "Variable",
        micronutrients: "Toxic levels of Al, Mn"
      },
      recommendations: [
        "Apply agricultural lime to raise pH",
        "Use dolomitic lime if magnesium is deficient", 
        "Add organic matter to buffer pH",
        "Choose acid-tolerant crop varieties",
        "Monitor soil pH regularly"
      ],
      suitableCrops: ["Tea", "Coffee", "Blueberries", "Potatoes", "Azaleas"],
      confidence: 0.87
    },
    {
      id: "soil_005",
      name: "Alkaline Soil",
      type: "pH Problem",
      category: "Soil Chemistry", 
      severity: "High",
      description: "Soil with high pH causing nutrient deficiencies",
      characteristics: ["pH above 7.5", "White salt deposits", "Iron deficiency yellowing", "Poor plant growth", "Crusty surface"],
      pHRange: "8.0-9.5",
      organicMatter: "1-3%",
      nutrients: {
        nitrogen: "Variable",
        phosphorus: "Locked",
        potassium: "Variable",
        micronutrients: "Iron, Zinc deficient"
      },
      recommendations: [
        "Apply sulfur to lower pH gradually",
        "Use acidifying fertilizers",
        "Add organic matter regularly",
        "Apply iron chelates for immediate relief",
        "Improve drainage to reduce salt accumulation"
      ],
      suitableCrops: ["Barley", "Sugar beet", "Spinach", "Asparagus", "Brassicas"],
      confidence: 0.89
    },
    {
      id: "soil_006",
      name: "Saline Soil",
      type: "Salinity Problem",
      category: "Soil Chemistry",
      severity: "High", 
      description: "Soil with high salt content affecting plant growth",
      characteristics: ["White salt crusts", "Poor germination", "Burnt leaf edges", "Stunted growth", "High electrical conductivity"],
      pHRange: "7.0-8.5",
      organicMatter: "Low",
      nutrients: {
        nitrogen: "Variable",
        phosphorus: "May be locked",
        potassium: "Usually high",
        micronutrients: "Imbalanced"
      },
      recommendations: [
        "Improve drainage to leach salts",
        "Apply gypsum to displace sodium",
        "Use salt-tolerant crops initially", 
        "Add organic matter to improve structure",
        "Install subsurface drainage systems"
      ],
      suitableCrops: ["Barley", "Date palm", "Salt-tolerant rice varieties", "Quinoa", "Halophytes"],
      confidence: 0.92
    },
    {
      id: "soil_007",
      name: "Waterlogged Soil",
      type: "Drainage Problem",
      category: "Soil Physics",
      severity: "High",
      description: "Soil with poor drainage causing root problems",
      characteristics: ["Standing water", "Foul smell", "Gray/blue coloration", "Root rot", "Poor aeration"],
      pHRange: "Variable",
      organicMatter: "Variable",
      nutrients: {
        nitrogen: "Denitrification losses",
        phosphorus: "May be available",
        potassium: "Leaching losses",
        micronutrients: "Iron toxicity possible"
      },
      recommendations: [
        "Install drainage systems immediately",
        "Create raised beds for better drainage",
        "Avoid traffic on wet soil",
        "Plant water-tolerant crops temporarily",
        "Improve soil structure with organic matter"
      ],
      suitableCrops: ["Rice", "Taro", "Watercress", "Cranberries", "Willows"],
      confidence: 0.94
    },
    {
      id: "soil_008", 
      name: "Nutrient Deficient Soil",
      type: "Fertility Problem",
      category: "Soil Fertility",
      severity: "Medium",
      description: "Soil lacking essential nutrients for plant growth",
      characteristics: ["Pale plant color", "Poor growth", "Low yields", "Yellowing leaves", "Delayed maturity"],
      pHRange: "Variable",
      organicMatter: "Low (0-1%)",
      nutrients: {
        nitrogen: "Deficient",
        phosphorus: "Low",
        potassium: "Inadequate", 
        micronutrients: "Multiple deficiencies"
      },
      recommendations: [
        "Conduct detailed soil test",
        "Apply balanced NPK fertilizers",
        "Add micronutrient supplements",
        "Increase organic matter content",
        "Use crop-specific fertilizer programs"
      ],
      suitableCrops: ["Light feeders initially", "Legumes to fix nitrogen", "Green manure crops"],
      confidence: 0.86
    },
    {
      id: "soil_009",
      name: "Compacted Soil",
      type: "Physical Problem", 
      category: "Soil Physics",
      severity: "Medium",
      description: "Dense soil with poor root penetration and water infiltration",
      characteristics: ["Hard surface", "Poor water infiltration", "Runoff problems", "Shallow root development", "Equipment tracks visible"],
      pHRange: "Variable",
      organicMatter: "Variable",
      nutrients: {
        nitrogen: "Poor uptake",
        phosphorus: "Limited availability",
        potassium: "Reduced uptake",
        micronutrients: "Poor mobility"
      },
      recommendations: [
        "Deep tillage to break compaction",
        "Avoid traffic on wet soil",
        "Add organic matter to improve structure",
        "Use controlled traffic farming",
        "Plant deep-rooted cover crops"
      ],
      suitableCrops: ["Deep-rooted crops like sunflower", "Tillage radish", "Alfalfa"],
      confidence: 0.83
    },
    {
      id: "soil_010",
      name: "Eroded Soil",
      type: "Degradation Problem",
      category: "Soil Conservation",
      severity: "High",
      description: "Soil with significant topsoil loss and reduced fertility",
      characteristics: ["Exposed subsoil", "Rills and gullies", "Reduced organic matter", "Poor water retention", "Lower productivity"],
      pHRange: "Variable", 
      organicMatter: "Very low (0-0.5%)",
      nutrients: {
        nitrogen: "Very low",
        phosphorus: "Depleted",
        potassium: "Low",
        micronutrients: "Severely deficient"
      },
      recommendations: [
        "Implement immediate erosion control",
        "Plant cover crops for soil protection",
        "Build terraces on slopes",
        "Add large amounts of organic matter",
        "Use conservation tillage practices"
      ],
      suitableCrops: ["Erosion control grasses", "Pioneer legumes", "Soil-building crops"],
      confidence: 0.91
    }
  ],
  marketplaceItems: [
    {
      name: "Kisan Sprayer Drone",
      category: "Technology", 
      price: "Free",
      originalPrice: "₹50,000",
      rating: 4.9,
      features: ["HD Camera", "25min Flight Time", "GPS Enabled", "10L Tank"]
    },
    {
      name: "Drip Irrigation Kit",
      category: "Irrigation",
      price: "₹2,000", 
      originalPrice: "₹5,000",
      rating: 4.7,
      features: ["Water-saving", "Easy Installation", "Weather-resistant", "Coverage: 1 Acre"]
    }
  ]
};

// Translation data
const translations = {
  "en-IN": {
    nav_home: "Home",
    nav_disease: "Disease Detection", 
    nav_crop: "Crop Advisory",
    nav_smart: "Smart Farming",
    nav_marketplace: "Marketplace",
    nav_chat: "AI Chat Assistant",
    nav_about: "About",
    hero_title: "REVOLUTIONIZING AGRICULTURE",
    hero_subtitle: "Smart Farming Made Simple with AI Voice Assistant",
    welcome_voice_message: "Namaste! I am KrishiBot, your AI voice farming assistant. You can talk to me in your preferred language. How can I help you with farming today?",
    ready_to_help: "Ready to help - Click mic to start",
    start_listening: "Start Listening",
    stop_listening: "Stop",
    speak_response: "Speak Response",
    type_or_voice_message: "Type your farming question or use voice...",
    voice_commands_title: "🎯 Try These Voice Commands:",
    quick_questions: "💡 Quick Questions",
    kishan_role: "Your Smart Farming Guide",
    kishan_welcome: "Hello! I'm Kishan, your smart farming guide. I can tell you about all the features of pro.krishi. Feel free to ask me anything!",
    talk_to_kishan: "Talk to Kishan",
    ask_features: "Ask about features",
    ask_disease: "How does disease detection work?",
    ask_voice: "Voice assistant capabilities"
  },
  "hi-IN": {
    nav_home: "होम",
    nav_disease: "रोग पहचान",
    nav_crop: "फसल सलाह", 
    nav_smart: "स्मार्ट खेती",
    nav_marketplace: "बाजार",
    nav_chat: "एआई चैट सहायक",
    nav_about: "हमारे बारे में",
    hero_title: "कृषि में क्रांति",
    hero_subtitle: "एआई वॉयस असिस्टेंट के साथ स्मार्ट खेती आसान बनाई",
    welcome_voice_message: "नमस्ते! मैं कृषिबॉट हूं, आपका एआई वॉयस खेती सहायक। आप अपनी पसंदीदा भाषा में मुझसे बात कर सकते हैं। आज मैं खेती में आपकी कैसे मदद कर सकता हूं?",
    ready_to_help: "मदद के लिए तैयार - शुरू करने के लिए माइक पर क्लिक करें",
    start_listening: "सुनना शुरू करें",
    stop_listening: "रोकें",
    speak_response: "उत्तर बोलें",
    type_or_voice_message: "अपना खेती का सवाल टाइप करें या आवाज का उपयोग करें...",
    voice_commands_title: "🎯 ये वॉयस कमांड आजमाएं:",
    quick_questions: "💡 त्वरित प्रश्न",
    kishan_role: "आपका स्मार्ट खेती गाइड",
    kishan_welcome: "नमस्ते! मैं किशन हूं, आपका स्मार्ट खेती गाइड। मैं आपको pro.krishi के सभी फीचर्स के बारे में बता सकता हूं। आप मुझसे कुछ भी पूछ सकते हैं!",
    talk_to_kishan: "किशन से बात करें",
    ask_features: "फीचर्स के बारे में पूछें",
    ask_disease: "रोग पहचान कैसे काम करती है?",
    ask_voice: "वॉयस असिस्टेंट क्षमताएं"
  }
};

// Global state
let appState = {
  currentLanguage: 'en-IN',
  currentSection: 'home',
  isListening: false,
  isSpeaking: false,
  continuousMode: false,
  speechRate: 1.0,
  speechVolume: 1.0,
  recognition: null,
  synthesis: null,
  conversationHistory: [],
  lastBotMessage: '',
  userLocation: null,
  currentWeather: null,
  weatherForecast: null,
  locationError: null
};

// Voice Assistant Class
class VoiceAssistant {
  constructor() {
    this.recognition = null;
    this.synthesis = window.speechSynthesis;
    this.voices = [];
    this.isInitialized = false;
    this.currentUtterance = null;
    this.voicesLoaded = false;
    
    this.init();
  }
  
  async init() {
    try {
      // Initialize Speech Recognition
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
        this.recognition.lang = appState.currentLanguage;
        
        this.setupRecognitionEvents();
      }
      
      // Initialize Speech Synthesis
      if (this.synthesis) {
        this.loadVoices();
        this.synthesis.addEventListener('voiceschanged', () => {
          console.log('Voices changed, reloading...');
          this.loadVoices();
        });
        
        // Wait for voices to load
        setTimeout(() => {
          this.loadVoices();
          this.voicesLoaded = true;
        }, 1000);
      }
      
      this.isInitialized = true;
      this.updateStatus('Ready to help - Click mic to start');
      
    } catch (error) {
      console.error('Voice initialization error:', error);
      this.updateStatus('Voice features not available in this browser');
    }
  }
  
  loadVoices() {
    if (this.synthesis) {
      this.voices = this.synthesis.getVoices();
      console.log('Loaded voices:', this.voices.length);
      this.voicesLoaded = this.voices.length > 0;
    }
  }
  
  setupRecognitionEvents() {
    this.recognition.onstart = () => {
      appState.isListening = true;
      this.updateUI('listening');
      this.updateStatus('Listening... Speak now');
      this.showVoiceActivity(true);
    };
    
    this.recognition.onresult = (event) => {
      let finalTranscript = '';
      let interimTranscript = '';
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }
      
      if (finalTranscript) {
        this.processVoiceInput(finalTranscript.trim());
      } else if (interimTranscript) {
        this.updateStatus(`Listening: "${interimTranscript}"`);
      }
    };
    
    this.recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      this.stopListening();
      
      let errorMessage = 'Voice recognition error';
      switch (event.error) {
        case 'no-speech':
          errorMessage = 'No speech detected. Please try again.';
          break;
        case 'audio-capture':
          errorMessage = 'Microphone not available. Please check permissions.';
          break;
        case 'not-allowed':
          errorMessage = 'Microphone permission denied. Please allow access.';
          break;
        default:
          errorMessage = `Recognition error: ${event.error}`;
      }
      
      this.updateStatus(errorMessage, 'error');
    };
    
    this.recognition.onend = () => {
      appState.isListening = false;
      this.updateUI('idle');
      this.showVoiceActivity(false);
      
      if (appState.continuousMode && !this.manualStop) {
        setTimeout(() => this.startListening(), 1000);
      } else {
        this.updateStatus('Ready to help - Click mic to start');
      }
      
      this.manualStop = false;
    };
  }
  
  startListening() {
    if (!this.recognition || appState.isListening) return;
    
    try {
      this.recognition.lang = appState.currentLanguage;
      this.recognition.start();
    } catch (error) {
      console.error('Error starting recognition:', error);
      this.updateStatus('Could not start voice recognition', 'error');
    }
  }
  
  stopListening() {
    if (this.recognition && appState.isListening) {
      this.manualStop = true;
      this.recognition.stop();
    }
  }
  
  async processVoiceInput(text) {
    this.updateStatus('Processing your request...', 'processing');
    
    // Add user message to chat
    addMessage(text, 'user');
    
    // Check for voice commands first
    if (this.handleVoiceCommand(text)) {
      return;
    }
    
    // Generate AI response
    try {
      const response = await this.generateAIResponse(text);
      addMessage(response, 'bot');
      appState.lastBotMessage = response;
      
      // Enable speak button
      const speakBtn = document.getElementById('speakBtn');
      if (speakBtn) speakBtn.disabled = false;
      
      // Auto-speak if continuous mode
      if (appState.continuousMode) {
        setTimeout(() => this.speak(response), 500);
      }
      
    } catch (error) {
      console.error('AI response error:', error);
      const errorMsg = 'Sorry, I encountered an error. Please try again.';
      addMessage(errorMsg, 'bot');
      appState.lastBotMessage = errorMsg;
      this.updateStatus('Error processing request', 'error');
    }
  }
  
  handleVoiceCommand(text) {
    const lowerText = text.toLowerCase();
    
    // Navigation commands
    const sections = {
      'home': ['home', 'main', 'start'],
      'disease-detection': ['disease', 'diagnosis', 'plant health', 'plant problem'],
      'crop-advisory': ['crop advice', 'market price', 'advisory', 'prices'],
      'smart-farming': ['smart farming', 'farming techniques', 'farming plans'],
      'marketplace': ['marketplace', 'equipment', 'tools', 'buy'],
      'chat': ['chat', 'talk', 'assistant'],
      'about': ['about', 'information', 'help']
    };
    
    for (const [section, keywords] of Object.entries(sections)) {
      if (keywords.some(keyword => lowerText.includes(keyword))) {
        showSection(section);
        this.speak(`Navigating to ${section.replace('-', ' ')} section`);
        return true;
      }
    }
    
    // Specific farming commands
    if (lowerText.includes('crop price') || lowerText.includes('market price')) {
      showSection('crop-advisory');
      this.speak('Let me help you check crop prices. Please select your state and crop.');
      return true;
    }
    
    if (lowerText.includes('diagnose') || lowerText.includes('plant disease')) {
      showSection('disease-detection');
      this.speak('I can help diagnose plant diseases. Please upload a photo of your plant.');
      return true;
    }
    
    return false;
  }
  
  async generateAIResponse(userMessage) {
    const systemPrompt = `You are KrishiBot, an AI voice assistant specialized in Indian agriculture. You help farmers with crop advice, disease identification, market information, farming techniques, and agricultural technology. Always provide practical, region-specific advice considering Indian farming conditions, climate, and market dynamics. Keep responses conversational and suitable for voice interaction. Use simple language that farmers can understand. Respond in the same language the user is speaking. Current language: ${appState.currentLanguage}`;
    
    const requestBody = {
      contents: [{
        parts: [{
          text: `${systemPrompt}\n\nUser question: ${userMessage}\n\nProvide a helpful, concise response suitable for voice delivery:`
        }]
      }]
    };
    
    try {
      const response = await fetch(`${APP_CONFIG.apiEndpoint}?key=${APP_CONFIG.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });
      
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text;
      } else {
        throw new Error('Invalid API response format');
      }
    } catch (error) {
      console.log('Using fallback response due to API error:', error.message);
      // Fallback responses for demo
      const fallbackResponses = {
        'rice': 'For rice farming, ensure proper water management and use high-yielding varieties. Current market price is around ₹2,800 per quintal.',
        'wheat': 'Wheat requires well-drained soil and timely sowing. Consider using disease-resistant varieties for better yield.',
        'disease': 'For plant disease diagnosis, look for symptoms like leaf spots, yellowing, or wilting. Upload a photo for better analysis.',
        'price': 'Market prices vary by region and season. Check our crop advisory section for current rates in your area.',
        'irrigation': 'Drip irrigation is most water-efficient, saving up to 50% water. Consider soil type and crop requirements.',
        'default': 'I can help you with crop advice, disease detection, market prices, and farming techniques. What specific farming question do you have?'
      };
      
      const lowerMessage = userMessage.toLowerCase();
      if (lowerMessage.includes('rice')) return fallbackResponses.rice;
      if (lowerMessage.includes('wheat')) return fallbackResponses.wheat;
      if (lowerMessage.includes('disease')) return fallbackResponses.disease;
      if (lowerMessage.includes('price') || lowerMessage.includes('market')) return fallbackResponses.price;
      if (lowerMessage.includes('irrigation') || lowerMessage.includes('water')) return fallbackResponses.irrigation;
      return fallbackResponses.default;
    }
  }
  
  speak(text) {
    if (!text || text.trim() === '') {
      console.log('No text to speak');
      return;
    }
    
    console.log('Attempting to speak:', text);
    
    // Stop any current speech
    if (appState.isSpeaking || this.synthesis.speaking) {
      this.synthesis.cancel();
    }
    
    // Ensure voices are loaded
    if (!this.voicesLoaded) {
      this.loadVoices();
    }
    
    try {
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set language with fallback
      let targetLang = appState.currentLanguage;
      
      // Find appropriate voice with multiple fallback options
      let selectedVoice = null;
      
      if (this.voices.length > 0) {
        // Try exact match first
        selectedVoice = this.voices.find(v => v.lang === targetLang);
        
        // Try language prefix match
        if (!selectedVoice) {
          const langPrefix = targetLang.split('-')[0];
          selectedVoice = this.voices.find(v => v.lang.startsWith(langPrefix));
        }
        
        // Try English as fallback
        if (!selectedVoice) {
          selectedVoice = this.voices.find(v => v.lang.startsWith('en'));
        }
        
        // Use first available voice
        if (!selectedVoice) {
          selectedVoice = this.voices[0];
        }
      }
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
        console.log('Using voice:', selectedVoice.name, selectedVoice.lang);
      } else {
        utterance.lang = 'en-US'; // Final fallback
        console.log('Using default language: en-US');
      }
      
      utterance.rate = Math.max(0.1, Math.min(2.0, appState.speechRate));
      utterance.volume = Math.max(0, Math.min(1, appState.speechVolume));
      utterance.pitch = 1.0;
      
      utterance.onstart = () => {
        console.log('Speech started');
        appState.isSpeaking = true;
        this.updateStatus('Speaking...', 'speaking');
        
        // Show stop speaking button
        const stopSpeakingBtn = document.getElementById('stopSpeakingBtn');
        if (stopSpeakingBtn) {
          stopSpeakingBtn.classList.remove('hidden');
        }
        
        // Show Kishan stop button if Kishan is speaking
        const kishanStopBtn = document.getElementById('kishanStopBtn');
        if (kishanStopBtn) {
          kishanStopBtn.classList.remove('hidden');
        }
      };
      
      utterance.onend = () => {
        console.log('Speech ended');
        appState.isSpeaking = false;
        this.updateStatus('Ready to help - Click mic to start');
        
        // Hide stop speaking button
        const stopSpeakingBtn = document.getElementById('stopSpeakingBtn');
        if (stopSpeakingBtn) {
          stopSpeakingBtn.classList.add('hidden');
        }
        
        // Hide Kishan stop button
        const kishanStopBtn = document.getElementById('kishanStopBtn');
        if (kishanStopBtn) {
          kishanStopBtn.classList.add('hidden');
        }
      };
      
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        appState.isSpeaking = false;
        
        // More specific error handling
        let errorMessage = 'Speech unavailable';
        switch (event.error) {
          case 'network':
            errorMessage = 'Network error during speech';
            break;
          case 'synthesis-unavailable':
            errorMessage = 'Speech synthesis not available';
            break;
          case 'synthesis-failed':
            errorMessage = 'Speech synthesis failed';
            break;
          case 'audio-hardware':
            errorMessage = 'Audio hardware error';
            break;
          case 'not-allowed':
            errorMessage = 'Speech not allowed';
            break;
          case 'text-too-long':
            errorMessage = 'Text too long for speech';
            break;
        }
        
        this.updateStatus(errorMessage, 'error');
        
        // Try simplified speech as fallback
        setTimeout(() => {
          try {
            const simpleUtterance = new SpeechSynthesisUtterance('Message received');
            simpleUtterance.lang = 'en-US';
            simpleUtterance.rate = 1.0;
            simpleUtterance.volume = 1.0;
            this.synthesis.speak(simpleUtterance);
          } catch (fallbackError) {
            console.error('Fallback speech also failed:', fallbackError);
          }
        }, 1000);
      };
      
      this.currentUtterance = utterance;
      
      // Add to queue with retry logic
      setTimeout(() => {
        try {
          this.synthesis.speak(utterance);
          console.log('Speech queued successfully');
        } catch (speakError) {
          console.error('Error queuing speech:', speakError);
          this.updateStatus('Unable to speak at this time', 'error');
        }
      }, 100);
      
    } catch (error) {
      console.error('Error creating speech utterance:', error);
      this.updateStatus('Speech system error', 'error');
    }
  }
  
  stopSpeaking() {
    try {
      if (this.synthesis.speaking || appState.isSpeaking) {
        this.synthesis.cancel();
        appState.isSpeaking = false;
        this.updateStatus('Speech stopped');
        console.log('Speech stopped');
        
        // Hide stop speaking button
        const stopSpeakingBtn = document.getElementById('stopSpeakingBtn');
        if (stopSpeakingBtn) {
          stopSpeakingBtn.classList.add('hidden');
        }
        
        // Hide Kishan stop button
        const kishanStopBtn = document.getElementById('kishanStopBtn');
        if (kishanStopBtn) {
          kishanStopBtn.classList.add('hidden');
        }
      }
    } catch (error) {
      console.error('Error stopping speech:', error);
    }
  }
  
  updateStatus(message, type = 'normal') {
    const statusText = document.querySelector('.status-text');
    const statusIndicator = document.getElementById('statusIndicator');
    
    if (statusText) {
      statusText.textContent = message;
    }
    
    if (statusIndicator) {
      statusIndicator.className = `status-indicator ${type}`;
    }
    
    console.log('Status updated:', message, type);
  }
  
  updateUI(state) {
    const micBtn = document.getElementById('micBtn');
    const stopBtn = document.getElementById('stopBtn');
    
    if (state === 'listening') {
      if (micBtn) {
        micBtn.classList.add('listening');
        micBtn.classList.add('hidden');
      }
      if (stopBtn) stopBtn.classList.remove('hidden');
    } else {
      if (micBtn) {
        micBtn.classList.remove('listening');
        micBtn.classList.remove('hidden');
      }
      if (stopBtn) stopBtn.classList.add('hidden');
    }
  }
  
  showVoiceActivity(show) {
    const voiceActivity = document.getElementById('voiceActivity');
    if (voiceActivity) {
      if (show) {
        voiceActivity.classList.remove('hidden');
      } else {
        voiceActivity.classList.add('hidden');
      }
    }
  }
  
  changeLanguage(langCode) {
    appState.currentLanguage = langCode;
    if (this.recognition) {
      this.recognition.lang = langCode;
    }
    
    // Update status message in new language
    const translations_current = translations[langCode] || translations['en-IN'];
    this.updateStatus(translations_current.ready_to_help || 'Ready to help - Click mic to start');
  }
}

// Initialize voice assistant
let voiceAssistant;
let voiceAIChatbot; // New advanced voice AI system

// DOM elements
let languageSelector, navButtons, sections;

// Supporting classes for Voice AI Architecture
class VoiceActivityDetector {
  async initialize() { return true; }
  async process(source) { return true; }
}

class SpeechToTextEngine {
  async initialize() { return true; }
  async postProcess(text) { return text; }
}

class NLPProcessor {
  async initialize() { return true; }
  async process(text) { return { text, processed: true }; }
}

class IntentRecognizer {
  async initialize() { return true; }
  async recognize(nlpResult) { return { intent: 'general', confidence: 0.8 }; }
}

class ResponseGenerator {
  async initialize() { return true; }
  async generate(data) { return data.userInput ? `I understand you said: ${data.userInput}` : 'Hello!'; }
}

class TextToSpeechEngine {
  async initialize() { return true; }
  async synthesize(text, options) { return { text, options }; }
}

class WebSocketManager {
  constructor() { this.isConnected = false; }
  async connect() { this.isConnected = true; }
  async disconnect() { this.isConnected = false; }
}

// Enhanced Voice AI Chatbot System Architecture Implementation
class VoiceAIChatbotSystem {
  constructor() {
    this.isInitialized = false;
    this.isListening = false;
    this.isProcessing = false;
    this.isSpeaking = false;
    this.currentLanguage = 'en-IN';
    this.audioContext = null;
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.websocketConnection = null;
    this.conversationContext = [];
    this.speechSynthesis = window.speechSynthesis;
    this.speechRecognition = null;
    
    // Voice processing pipeline stages
    this.processingStages = {
      voiceActivityDetection: new VoiceActivityDetector(),
      speechToText: new SpeechToTextEngine(),
      nlpProcessing: new NLPProcessor(),
      intentRecognition: new IntentRecognizer(),
      responseGeneration: new ResponseGenerator(),
      textToSpeech: new TextToSpeechEngine()
    };
    
    // Real-time metrics
    this.metrics = {
      responseTime: 0,
      accuracy: 0,
      processingLatency: 0,
      apiLatency: 0
    };
    
    this.setupWebRTC();
  }
  
  async initialize() {
    try {
      console.log('🎤 Initializing Voice AI Chatbot System...');
      
      // Initialize all processing stages
      await this.initializeProcessingPipeline();
      
      // Setup real-time communication
      await this.setupWebSocket();
      
      // Initialize speech recognition
      await this.initializeSpeechRecognition();
      
      // Initialize audio context
      await this.initializeAudioContext();
      
      // Setup monitoring and error handling
      this.setupMonitoring();
      
      this.isInitialized = true;
      console.log('✅ Voice AI Chatbot System initialized successfully');
      
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize Voice AI Chatbot System:', error);
      this.handleError(error, 'initialization');
      return false;
    }
  }
  
  async initializeProcessingPipeline() {
    const stages = [
      'voiceActivityDetection',
      'speechToText', 
      'nlpProcessing',
      'intentRecognition',
      'responseGeneration',
      'textToSpeech'
    ];
    
    for (const stage of stages) {
      try {
        await this.processingStages[stage].initialize();
        console.log(`✅ ${stage} initialized`);
      } catch (error) {
        console.log(`⚠️ ${stage} using fallback implementation`);
      }
    }
  }
  
  async setupWebSocket() {
    try {
      this.websocketConnection = new WebSocketManager();
      await this.websocketConnection.connect();
    } catch (error) {
      console.log('⚠️ WebSocket connection using fallback');
    }
  }
  
  async initializeSpeechRecognition() {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      this.speechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      this.speechRecognition.continuous = true;
      this.speechRecognition.interimResults = true;
      this.speechRecognition.lang = this.currentLanguage;
      
      this.speechRecognition.onstart = () => {
        this.isListening = true;
        this.updateUIStatus('listening', 'Listening...');
      };
      
      this.speechRecognition.onresult = (event) => {
        this.handleSpeechResult(event);
      };
      
      this.speechRecognition.onerror = (event) => {
        this.handleError(event, 'speechRecognition');
      };
      
      this.speechRecognition.onend = () => {
        this.isListening = false;
        this.updateUIStatus('ready', 'Ready to listen');
      };
    }
  }
  
  async initializeAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      await this.audioContext.resume();
    } catch (error) {
      console.log('⚠️ Audio context not available');
    }
  }
  
  setupWebRTC() {
    this.rtcConfiguration = {
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    };
  }
  
  setupMonitoring() {
    setInterval(() => {
      this.collectMetrics();
      this.updateDashboard();
    }, 1000);
  }
  
  async startListening() {
    if (!this.isInitialized) {
      await this.initialize();
    }
    
    try {
      this.isListening = true;
      this.updateUIStatus('listening', 'Listening for your voice...');
      
      if (this.speechRecognition) {
        this.speechRecognition.start();
      }
      
      await this.startVoiceActivityDetection();
      this.updateVoiceUI('listening');
      
    } catch (error) {
      this.handleError(error, 'startListening');
      this.stopListening();
    }
  }
  
  async stopListening() {
    this.isListening = false;
    
    if (this.speechRecognition) {
      this.speechRecognition.stop();
    }
    
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }
    
    this.updateUIStatus('ready', 'Ready to listen');
    this.updateVoiceUI('ready');
  }
  
  async startVoiceActivityDetection() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const source = this.audioContext?.createMediaStreamSource(stream);
      
      if (source) {
        await this.processingStages.voiceActivityDetection.process(source);
      }
    } catch (error) {
      console.log('⚠️ Voice activity detection using fallback');
    }
  }
  
  async handleSpeechResult(event) {
    const startTime = performance.now();
    
    try {
      let finalTranscript = '';
      let interimTranscript = '';
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }
      
      if (interimTranscript) {
        this.updateInterimTranscript(interimTranscript);
      }
      
      if (finalTranscript) {
        await this.processVoiceInput(finalTranscript);
        this.metrics.responseTime = performance.now() - startTime;
      }
      
    } catch (error) {
      this.handleError(error, 'speechResult');
    }
  }
  
  async processVoiceInput(transcript) {
    this.isProcessing = true;
    this.updateUIStatus('processing', 'Processing your request...');
    
    try {
      console.log('🎯 Processing voice input:', transcript);
      
      this.updateChatDisplay('user', transcript);
      
      const cleanText = this.cleanTranscript(transcript);
      const intent = this.recognizeIntent(cleanText);
      const response = await this.generateResponse(intent, cleanText);
      
      await this.speakResponse(response);
      this.updateConversationHistory(transcript, response);
      
    } catch (error) {
      this.handleError(error, 'processVoiceInput');
      await this.speakResponse("I'm sorry, I couldn't process your request. Please try again.");
    } finally {
      this.isProcessing = false;
      this.updateUIStatus('ready', 'Ready for next input');
    }
  }
  
  cleanTranscript(text) {
    return text.trim().toLowerCase();
  }
  
  recognizeIntent(text) {
    const intents = {
      weather: ['weather', 'मौसम', 'climate', 'temperature', 'rain', 'sun'],
      farming: ['crop', 'farm', 'plant', 'seed', 'fertilizer', 'irrigation'],
      disease: ['disease', 'pest', 'infection', 'problem', 'sick'],
      price: ['price', 'cost', 'market', 'sell', 'buy'],
      general: ['hello', 'hi', 'help', 'what', 'how', 'when', 'where']
    };
    
    for (const [intent, keywords] of Object.entries(intents)) {
      if (keywords.some(keyword => text.includes(keyword))) {
        return intent;
      }
    }
    return 'general';
  }
  
  async generateResponse(intent, text) {
    const responses = {
      weather: await this.getWeatherResponse(text),
      farming: this.getFarmingResponse(text),
      disease: this.getDiseaseResponse(text),
      price: this.getPriceResponse(text),
      general: this.getGeneralResponse(text)
    };
    
    return responses[intent] || responses.general;
  }
  
  async getWeatherResponse(text) {
    if (appState.currentWeather) {
      const weather = appState.currentWeather;
      const temp = Math.round(weather.main.temp);
      const condition = weather.weather[0].description;
      return `Current weather is ${temp}°C with ${condition}. Perfect for farming activities!`;
    }
    return "Let me get the current weather for you. Please wait...";
  }
  
  getFarmingResponse(text) {
    const tips = [
      "For better crop yield, ensure proper irrigation and soil nutrition.",
      "Consider organic farming methods for sustainable agriculture.",
      "Monitor your crops regularly for early pest detection.",
      "Use modern technology like drones for efficient farming."
    ];
    return tips[Math.floor(Math.random() * tips.length)];
  }
  
  getDiseaseResponse(text) {
    return "To detect plant diseases, you can upload a photo in our Disease Detection section. I'll analyze it for you.";
  }
  
  getPriceResponse(text) {
    return "You can check current market prices in our Marketplace section. Prices are updated in real-time.";
  }
  
  getGeneralResponse(text) {
    const greetings = [
      "Hello! I'm your AI farming assistant. How can I help you today?",
      "Namaste! I'm here to help with all your farming needs.",
      "Hi there! Ask me anything about farming, weather, or crops.",
      "Welcome to pro.krishi! I'm your smart farming guide."
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }
  
  async speakResponse(text) {
    this.isSpeaking = true;
    this.updateUIStatus('speaking', 'Speaking response...');
    
    try {
      this.updateChatDisplay('bot', text);
      await this.playAudio(text);
    } catch (error) {
      this.handleError(error, 'speakResponse');
    } finally {
      this.isSpeaking = false;
      this.updateUIStatus('ready', 'Ready to listen');
    }
  }
  
  async playAudio(text) {
    return new Promise((resolve, reject) => {
      if (this.speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = this.currentLanguage;
        utterance.rate = appState.speechRate || 1.0;
        utterance.volume = appState.speechVolume || 1.0;
        utterance.voice = this.getPreferredVoice();
        
        utterance.onend = resolve;
        utterance.onerror = reject;
        
        this.speechSynthesis.speak(utterance);
      } else {
        reject(new Error('Speech synthesis not supported'));
      }
    });
  }
  
  getPreferredVoice() {
    const voices = this.speechSynthesis.getVoices();
    return voices.find(voice => voice.lang.startsWith(this.currentLanguage.split('-')[0])) || voices[0];
  }
  
  updateUIStatus(status, message) {
    const statusElement = document.getElementById('voiceStatus');
    const indicatorElement = document.getElementById('statusIndicator');
    
    if (statusElement && indicatorElement) {
      statusElement.className = `voice-status ${status}`;
      const textElement = indicatorElement.querySelector('.status-text');
      if (textElement) {
        textElement.textContent = message;
      }
      
      const iconElement = indicatorElement.querySelector('.status-icon');
      if (iconElement) {
        const icons = {
          ready: '🎤',
          listening: '🎙️',
          processing: '⚡',
          speaking: '🔊',
          error: '❌'
        };
        iconElement.textContent = icons[status] || '🎤';
      }
    }
  }
  
  updateVoiceUI(state) {
    const micBtn = document.getElementById('micBtn');
    const stopBtn = document.getElementById('stopBtn');
    const voiceActivity = document.getElementById('voiceActivity');
    
    if (state === 'listening') {
      micBtn?.classList.add('hidden');
      stopBtn?.classList.remove('hidden');
      voiceActivity?.classList.remove('hidden');
    } else {
      micBtn?.classList.remove('hidden');
      stopBtn?.classList.add('hidden');
      voiceActivity?.classList.add('hidden');
    }
  }
  
  updateInterimTranscript(transcript) {
    let interimElement = document.getElementById('interimTranscript');
    if (!interimElement) {
      interimElement = document.createElement('div');
      interimElement.id = 'interimTranscript';
      interimElement.style.cssText = 'padding:10px;background:rgba(0,0,0,0.1);border-radius:8px;margin:10px 0;font-style:italic;';
      const chatMessages = document.getElementById('chatMessages');
      if (chatMessages) {
        chatMessages.appendChild(interimElement);
      }
    }
    
    if (interimElement) {
      interimElement.textContent = `Listening: ${transcript}`;
      interimElement.style.opacity = '0.7';
    }
  }
  
  updateChatDisplay(sender, message) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const interimElement = document.getElementById('interimTranscript');
    if (interimElement && sender !== 'interim') {
      interimElement.remove();
    }
    
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender === 'user' ? 'user-message' : 'bot-message'}`;
    
    messageElement.innerHTML = `
      <div class="message-avatar">${sender === 'user' ? '👤' : '🤖'}</div>
      <div class="message-content">
        <p>${message}</p>
        <span class="message-time">${new Date().toLocaleTimeString()}</span>
        ${sender === 'bot' ? `<button class="speak-message-btn" data-message="${message}">🔊</button>` : ''}
      </div>
    `;
    
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  updateConversationHistory(userInput, botResponse) {
    this.conversationContext.push({
      timestamp: Date.now(),
      user: userInput,
      bot: botResponse
    });
    
    if (this.conversationContext.length > 10) {
      this.conversationContext.shift();
    }
  }
  
  collectMetrics() {
    this.metrics = {
      ...this.metrics,
      timestamp: Date.now(),
      isListening: this.isListening,
      isProcessing: this.isProcessing,
      isSpeaking: this.isSpeaking,
      activeConnections: this.websocketConnection?.isConnected ? 1 : 0
    };
  }
  
  updateDashboard() {
    const metricsElement = document.getElementById('voiceMetrics');
    if (metricsElement) {
      metricsElement.innerHTML = `
        <div class="metric">Response Time: ${this.metrics.responseTime.toFixed(0)}ms</div>
        <div class="metric">Status: ${this.isListening ? 'Listening' : this.isProcessing ? 'Processing' : 'Ready'}</div>
        <div class="metric">Language: ${this.currentLanguage}</div>
      `;
    }
  }
  
  changeLanguage(newLanguage) {
    this.currentLanguage = newLanguage;
    if (this.speechRecognition) {
      this.speechRecognition.lang = newLanguage;
    }
    console.log(`Voice language changed to: ${newLanguage}`);
  }
  
  handleError(error, context) {
    console.error(`Voice AI Error in ${context}:`, error);
    this.updateUIStatus('error', 'Error occurred, please try again');
    
    setTimeout(() => {
      this.updateUIStatus('ready', 'Ready to listen');
    }, 2000);
  }
  
  async destroy() {
    this.stopListening();
    
    if (this.websocketConnection) {
      await this.websocketConnection.disconnect();
    }
    
    if (this.audioContext) {
      await this.audioContext.close();
    }
    
    this.isInitialized = false;
  }
}

// Weather and Location Services
class WeatherService {
  constructor() {
    this.apiKey = APP_CONFIG.weatherApiKey;
    this.endpoint = APP_CONFIG.weatherApiEndpoint;
    this.cache = new Map();
    this.cacheTimeout = 10 * 60 * 1000; // 10 minutes
  }
  
  async getCurrentWeather(lat, lon) {
    try {
      const cacheKey = `current_${lat}_${lon}`;
      const cached = this.cache.get(cacheKey);
      
      if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
        console.log('Using cached weather data');
        return cached.data;
      }
      
      const url = `${this.endpoint}/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Cache the result
      this.cache.set(cacheKey, {
        data: data,
        timestamp: Date.now()
      });
      
      console.log('Weather data fetched:', data);
      return data;
      
    } catch (error) {
      console.error('Error fetching current weather:', error);
      throw error;
    }
  }
  
  async getWeatherForecast(lat, lon, days = 5) {
    try {
      const cacheKey = `forecast_${lat}_${lon}_${days}`;
      const cached = this.cache.get(cacheKey);
      
      if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
        console.log('Using cached forecast data');
        return cached.data;
      }
      
      const url = `${this.endpoint}/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&cnt=${days * 8}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Weather forecast API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Cache the result
      this.cache.set(cacheKey, {
        data: data,
        timestamp: Date.now()
      });
      
      console.log('Weather forecast data fetched:', data);
      return data;
      
    } catch (error) {
      console.error('Error fetching weather forecast:', error);
      throw error;
    }
  }
  
  formatWeatherData(weatherData) {
    const weather = weatherData.weather[0];
    const main = weatherData.main;
    const wind = weatherData.wind;
    
    return {
      location: weatherData.name,
      country: weatherData.sys.country,
      temperature: Math.round(main.temp),
      feelsLike: Math.round(main.feels_like),
      description: weather.description,
      humidity: main.humidity,
      pressure: main.pressure,
      windSpeed: wind.speed,
      windDirection: wind.deg,
      visibility: weatherData.visibility / 1000, // Convert to km
      cloudiness: weatherData.clouds.all,
      sunrise: new Date(weatherData.sys.sunrise * 1000),
      sunset: new Date(weatherData.sys.sunset * 1000),
      icon: weather.icon,
      timestamp: new Date(weatherData.dt * 1000)
    };
  }
  
  getFarmingAdvice(weatherData) {
    const formatted = this.formatWeatherData(weatherData);
    const advice = [];
    
    // Temperature-based advice
    if (formatted.temperature > 35) {
      advice.push("🌡️ Very hot weather - ensure adequate irrigation and provide shade for livestock");
    } else if (formatted.temperature < 10) {
      advice.push("❄️ Cold weather - protect crops from frost and reduce watering");
    }
    
    // Humidity-based advice
    if (formatted.humidity > 80) {
      advice.push("💧 High humidity - watch for fungal diseases and ensure good ventilation");
    } else if (formatted.humidity < 30) {
      advice.push("🏜️ Low humidity - increase irrigation frequency");
    }
    
    // Wind-based advice
    if (formatted.windSpeed > 10) {
      advice.push("💨 Strong winds - secure loose equipment and provide windbreaks for crops");
    }
    
    // Weather condition advice
    const condition = formatted.description.toLowerCase();
    if (condition.includes('rain')) {
      advice.push("🌧️ Rain expected - postpone spraying activities and ensure proper drainage");
    } else if (condition.includes('sun') || condition.includes('clear')) {
      advice.push("☀️ Clear weather - good for spraying, harvesting, and field work");
    }
    
    return advice.length > 0 ? advice : ["🌱 Weather conditions are suitable for normal farming activities"];
  }
}

class LocationService {
  constructor() {
    this.googleApiKey = APP_CONFIG.googleMapsApiKey;
    this.geocodingEndpoint = APP_CONFIG.geocodingEndpoint;
  }
  
  async getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by this browser'));
        return;
      }
      
      const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 5 * 60 * 1000 // 5 minutes
      };
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: new Date(position.timestamp)
          };
          console.log('Location obtained:', location);
          resolve(location);
        },
        (error) => {
          console.error('Geolocation error:', error);
          let errorMessage = 'Unable to get location';
          
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'Location access denied by user';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Location information unavailable';
              break;
            case error.TIMEOUT:
              errorMessage = 'Location request timed out';
              break;
          }
          
          reject(new Error(errorMessage));
        },
        options
      );
    });
  }
  
  async reverseGeocode(lat, lon) {
    try {
      const url = `${this.geocodingEndpoint}?latlng=${lat},${lon}&key=${this.googleApiKey}&language=en`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Geocoding API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.status !== 'OK' || !data.results.length) {
        throw new Error('No location data found');
      }
      
      const result = data.results[0];
      const locationInfo = {
        formattedAddress: result.formatted_address,
        components: {},
        placeId: result.place_id
      };
      
      // Extract location components
      result.address_components.forEach(component => {
        const types = component.types;
        if (types.includes('locality')) {
          locationInfo.components.city = component.long_name;
        } else if (types.includes('administrative_area_level_1')) {
          locationInfo.components.state = component.long_name;
        } else if (types.includes('country')) {
          locationInfo.components.country = component.long_name;
        } else if (types.includes('postal_code')) {
          locationInfo.components.postalCode = component.long_name;
        }
      });
      
      console.log('Reverse geocoding result:', locationInfo);
      return locationInfo;
      
    } catch (error) {
      console.error('Error in reverse geocoding:', error);
      throw error;
    }
  }
  
  async geocodeAddress(address) {
    try {
      const url = `${this.geocodingEndpoint}?address=${encodeURIComponent(address)}&key=${this.googleApiKey}&language=en`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Geocoding API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.status !== 'OK' || !data.results.length) {
        throw new Error('Address not found');
      }
      
      const result = data.results[0];
      const location = result.geometry.location;
      
      return {
        latitude: location.lat,
        longitude: location.lng,
        formattedAddress: result.formatted_address,
        placeId: result.place_id
      };
      
    } catch (error) {
      console.error('Error geocoding address:', error);
      throw error;
    }
  }
}

// Initialize services
let weatherService;
let locationService;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  try {
    console.log('🌾 pro.krishi - Initializing Smart Farming Assistant...');
    
    initializeApp();
    setupKishanAvatarVoice();
    initializeBackground();
    setupInteractions();
    initializeModernAvatar();
    
    // Initialize disease detection components
    initializeDiseaseDetection();
    
    // Initialize soil analysis components
    initializeSoilAnalysis();
    
    // Initialize weather service
    initializeWeatherService();
    
    console.log('✅ pro.krishi - All components initialized successfully!');
    
    // Show welcome message
    if (voiceAssistant) {
      setTimeout(() => {
        voiceAssistant.speak("Welcome to pro.krishi! Your smart farming assistant is ready to help you with crop diseases, soil analysis, weather forecasts, and farming advice. How can I assist you today?");
      }, 2000);
    }
    
  } catch (error) {
    console.error('❌ pro.krishi - Initialization error:', error);
    showErrorNotification('Failed to initialize some components. Please refresh the page.');
  }
});

// Initialize Disease Detection
function initializeDiseaseDetection() {
  const uploadBox = document.getElementById('uploadBox');
  const fileInput = document.getElementById('fileInput');
  const uploadBtn = document.getElementById('uploadBtn');
  const analyzeBtn = document.getElementById('analyzeBtn');
  const resetBtn = document.getElementById('resetBtn');
  
  if (!uploadBox || !fileInput) {
    console.warn('Disease detection elements not found');
    return;
  }
  
  // Ensure upload functionality is properly connected
  if (uploadBtn) {
    uploadBtn.addEventListener('click', () => fileInput.click());
  }
  
  if (analyzeBtn) {
    analyzeBtn.addEventListener('click', analyzeDisease);
  }
  
  if (resetBtn) {
    resetBtn.addEventListener('click', resetUpload);
  }
  
  console.log('✅ Disease Detection initialized');
}

// Initialize Soil Analysis
function initializeSoilAnalysis() {
  // Ensure soil analysis data is available
  if (!appData.soilAnalysisData) {
    console.warn('Soil analysis data not loaded');
    return;
  }
  
  console.log('✅ Soil Analysis initialized with', appData.soilAnalysisData.length, 'soil conditions');
}

// Initialize Weather Service
function initializeWeatherService() {
  try {
    weatherService = new WeatherService();
    locationService = new LocationService();
    
    // Get initial weather data
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          weatherService.getWeatherData(lat, lon);
        },
        (error) => {
          console.warn('Location access denied, using default location');
          // Use default location (Delhi)
          weatherService.getWeatherData(28.6139, 77.2090);
        }
      );
    }
    
    console.log('✅ Weather Service initialized');
  } catch (error) {
    console.error('Weather Service initialization failed:', error);
  }
}

// Error notification function
function showErrorNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'error-notification';
  notification.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: #ef4444;
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      max-width: 300px;
    ">
      <strong>⚠️ Error:</strong> ${message}
    </div>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// Initialize Modern Avatar Interactions
function initializeModernAvatar() {
  const avatarMain = document.querySelector('.avatar-main');
  const avatarCharacter = document.querySelector('.avatar-character');
  
  if (!avatarMain || !avatarCharacter) return;
  
  // Click interaction
  avatarMain.addEventListener('click', () => {
    avatarCharacter.style.transform = 'translate(-50%, -50%) scale(1.1)';
    setTimeout(() => {
      avatarCharacter.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 200);
    
    // Trigger voice greeting
    const welcomeMsg = "Hello! I'm your smart farming assistant. How can I help you today?";
    if (window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(welcomeMsg);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  });
  
  // Removed hover effects for stability
}

// Background with Three.js
function initializeBackground() {
  const canvas = document.getElementById('threejs-canvas');
  if (!canvas || !window.THREE) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  
  // Create floating farm elements
  const farmElements = [];
  
  // Add floating wheat particles
  const wheatGeometry = new THREE.SphereGeometry(0.1, 8, 8);
  const wheatMaterial = new THREE.MeshPhongMaterial({ color: 0xf4d03f });
  
  for (let i = 0; i < 50; i++) {
    const wheat = new THREE.Mesh(wheatGeometry, wheatMaterial);
    wheat.position.set(
      Math.random() * 40 - 20,
      Math.random() * 20 - 10,
      Math.random() * 20 - 10
    );
    wheat.userData = { speed: Math.random() * 0.02 + 0.01 };
    scene.add(wheat);
    farmElements.push(wheat);
  }
  
  // Add floating leaf particles
  const leafGeometry = new THREE.PlaneGeometry(0.3, 0.2);
  const leafMaterial = new THREE.MeshPhongMaterial({ color: 0x27ae60, transparent: true, opacity: 0.7 });
  
  for (let i = 0; i < 30; i++) {
    const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
    leaf.position.set(
      Math.random() * 40 - 20,
      Math.random() * 20 - 10,
      Math.random() * 20 - 10
    );
    leaf.userData = { speed: Math.random() * 0.015 + 0.005 };
    scene.add(leaf);
    farmElements.push(leaf);
  }
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
  scene.add(ambientLight);
  
  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight.position.set(1, 1, 0.5);
  scene.add(directionalLight);
  
  camera.position.z = 15;
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    // Animate farm elements
    farmElements.forEach((element, index) => {
      element.rotation.x += element.userData.speed;
      element.rotation.y += element.userData.speed * 0.5;
      element.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
      element.position.x += Math.cos(Date.now() * 0.0008 + index) * 0.008;
    });
    
    // Gentle camera movement
    camera.position.x = Math.sin(Date.now() * 0.0005) * 2;
    camera.position.y = Math.cos(Date.now() * 0.0003) * 1;
    
    renderer.render(scene, camera);
  }
  
  animate();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// Interactions and Enhanced Effects
function setupInteractions() {
  // Mode Toggle
  const toggleBtn = document.getElementById('toggleMode');
  let isEnhancedMode = true;
  
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isEnhancedMode = !isEnhancedMode;
      document.body.classList.toggle('enhanced-mode-disabled', !isEnhancedMode);
      toggleBtn.textContent = isEnhancedMode ? '🌐 Enhanced Mode' : '📱 Simple Mode';
      
      // Toggle canvas
      const canvas = document.getElementById('threejs-canvas');
      if (canvas) {
        canvas.style.display = isEnhancedMode ? 'block' : 'none';
      }
    });
  }
  
  // Enhanced quick ask buttons
  document.querySelectorAll('.quick-ask-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Click effect
      btn.style.transform = 'perspective(500px) rotateX(-15deg) rotateY(5deg) translateY(-5px) scale(0.95)';
      setTimeout(() => {
        btn.style.transform = '';
      }, 200);
      
      // Trigger Kishan response with effects
      const question = btn.dataset.question;
      triggerKishanResponse(question);
    });
  });
  
  // Removed hover effects for stat cards
  /*
  document.querySelectorAll('.stat-card').forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = `perspective(1000px) rotateX(-8deg) rotateY(${(index - 1) * 8}deg) translateY(-15px) scale(1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(5deg) rotateY(${(index - 1) * 5}deg)`;
    });
  });
  */
  
  // Removed button hover effects
  /*
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'perspective(1000px) rotateX(-12deg) rotateY(8deg) translateY(-8px) scale(1.02)';
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'perspective(1000px) rotateX(-5deg)';
    });
  });
  */
  
  // Mouse parallax effect for hero content
  document.addEventListener('mousemove', (e) => {
    const heroContent = document.querySelector('.hero__content');
    if (!heroContent) return;
    
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    heroContent.style.transform = `perspective(1000px) rotateY(${x * 0.5}deg) rotateX(${-y * 0.3}deg)`;
  });
}

// Enhanced Kishan Response Function
function triggerKishanResponse(question) {
  const avatar = document.querySelector('.kishan-avatar');
  const welcomeDiv = document.getElementById('kishanWelcome');
  const statusDiv = document.getElementById('kishanVoiceStatus');
  
  if (!avatar || !welcomeDiv || !statusDiv) return;
  
  // Processing animation
  avatar.classList.add('processing');
  statusDiv.textContent = 'Processing your request...';
  statusDiv.className = 'voice-status processing';
  
  // Enhanced answers for experience
  const enhancedAnswers = {
    features: "🌾 Welcome to pro.krishi! Our platform features advanced visualization of crops, AI-powered disease detection with detailed plant models, real-time market data displayed in interactive graphs, voice-guided farming simulations, and comprehensive equipment showcase. Experience farming like never before with our modern digital environment!",
    
    disease: "🔬 Our 3D disease detection is revolutionary! Upload plant photos and watch as our AI creates 3D models showing disease progression, affected areas highlighted in 3D space, treatment visualization with before/after 3D comparisons, and interactive 3D plant anatomy lessons. You can rotate and examine plants in full 3D detail!",
    
    voice: "🎤 The 3D voice assistant creates an immersive audio experience with spatial sound, 3D visual feedback during conversations, voice-controlled 3D navigation through the app, multilingual 3D tutorials, and hands-free 3D farming simulations. Talk to me and watch the world respond in three dimensions!",
    
    prices: "📊 Market prices come alive in 3D! View interactive 3D price charts, zoom through historical data in 3D space, compare prices across states with 3D maps, receive 3D price alerts with visual effects, and explore market trends in our immersive 3D trading floor environment!",
    
    default: "🌟 Welcome to the future of farming in 3D! I'm Kishan, your 3D guide through the revolutionary world of smart agriculture. Everything here is designed to give you an immersive, three-dimensional farming experience!"
  };
  
  setTimeout(() => {
    const answer = enhanced3DAnswers[question] || enhanced3DAnswers.default;
    
    // 3D speaking animation
    avatar.classList.remove('processing');
    avatar.classList.add('speaking');
    statusDiv.textContent = 'Speaking in 3D...';
    statusDiv.className = 'voice-status speaking';
    
    // Animate text change
    welcomeDiv.style.transform = 'perspective(1000px) rotateX(-90deg)';
    setTimeout(() => {
      welcomeDiv.textContent = answer;
      welcomeDiv.style.transform = 'perspective(1000px) rotateX(0deg)';
    }, 300);
    
    // Speak with 3D effects
    kishan3DSpeak(answer);
    
    setTimeout(() => {
      avatar.classList.remove('speaking');
      statusDiv.textContent = 'Ready for 3D interaction!';
      statusDiv.className = 'voice-status normal';
    }, 5000);
  }, 1500);
}

// Enhanced 3D Speech Function
function kishan3DSpeak(text) {
  if (!window.speechSynthesis) return;
  
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = appState.currentLanguage || 'en-IN';
  utterance.rate = 0.85;
  utterance.volume = 1.0;
  utterance.pitch = 1.1;
  
  // Find best voice
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find(voice => 
    voice.lang.startsWith(appState.currentLanguage?.split('-')[0] || 'en')
  );
  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }
  
  // Show stop button when speech starts
  utterance.onstart = () => {
    const kishanStopBtn = document.getElementById('kishanStopBtn');
    if (kishanStopBtn) {
      kishanStopBtn.classList.remove('hidden');
    }
  };
  
  // Hide stop button when speech ends
  utterance.onend = () => {
    const kishanStopBtn = document.getElementById('kishanStopBtn');
    if (kishanStopBtn) {
      kishanStopBtn.classList.add('hidden');
    }
  };
  
  window.speechSynthesis.speak(utterance);
}

// Kishan Avatar Voice Assistant for Home Page
function setupKishanAvatarVoice() {
  const micBtn = document.getElementById('kishanMicBtn');
  const speakBtn = document.getElementById('kishanSpeakBtn');
  const statusDiv = document.getElementById('kishanVoiceStatus');
  const welcomeDiv = document.getElementById('kishanWelcome');
  
  if (!micBtn || !speakBtn || !statusDiv) return;

  let isListening = false;
  let lastKishanAnswer = '';

  // Comprehensive Q&A for features
  const kishanAnswers = {
    features: "pro.krishi offers comprehensive smart farming solutions including: AI-powered disease detection using plant photos, real-time crop prices and market analysis, voice-based crop advisory in multiple Indian languages, smart farming plans with cost calculations, equipment marketplace with free and discounted tools, and 24/7 voice assistant support. Everything is designed to make farming easier and more profitable!",
    
    disease: "Our AI disease detection feature is very powerful! Just upload a photo of your plant, and our advanced AI will analyze it to identify diseases, pests, or nutrient deficiencies. You'll get instant diagnosis with confidence scores, detailed symptoms explanation, recommended treatments, and preventive measures. The AI supports detection for rice, wheat, cotton, sugarcane, and many other crops commonly grown in India.",
    
    voice: "The voice assistant supports 10+ Indian languages including Hindi, English, Bengali, Marathi, Telugu, Tamil, Gujarati, Kannada, Malayalam, and Punjabi. You can ask questions, get farming advice, navigate the app, check prices, and even get disease diagnosis results - all through voice commands. It works offline for basic features and provides hands-free operation perfect for farmers working in the field.",
    
    prices: "Our market price feature provides real-time crop prices from major mandis across India. You can check current rates, view 7-day price trends, get forecasts, compare prices across different states, and receive price alerts. We cover all major crops including grains, pulses, oilseeds, spices, fruits, and vegetables. The data is updated hourly from official market sources.",
    
    farming: "Smart farming plans are customized based on your farm size, budget, and location. We offer three scales: Small scale (under 5 lakh investment) for family farming with basic equipment, Medium scale (5-20 lakh) for commercial farming with modern tools, and Large scale (20+ lakh) for industrial farming with advanced technology. Each plan includes ROI calculations, implementation timeline, and success rates.",
    
    marketplace: "Our marketplace offers both free and discounted farming equipment. You can find drones for spraying, irrigation systems, soil testing kits, organic fertilizers, quality seeds, and modern tools. Many items are available for free through government schemes, while others are offered at up to 60% discount. All equipment is verified for quality and comes with installation support.",
    
    help: "I can help you with: asking about any app features, explaining how disease detection works, checking crop prices, getting farming advice, finding equipment in marketplace, navigating to different sections, or providing information in your preferred language. Just ask me anything about farming or the app!",
    
    default: "Namaste! I am Kishan, your personal smart farming guide. I can tell you about all the amazing features of pro.krishi - from AI disease detection to real-time crop prices, voice assistance in your language, smart farming plans, and our equipment marketplace. What would you like to know about?"
  };

  // Enhanced voice recognition setup
  let recognition;
  if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;
  }

  // Add visual feedback for voice interaction
  function updateKishanStatus(message, type = 'normal') {
    statusDiv.textContent = message;
    statusDiv.className = `voice-status ${type}`;
    
    // Add visual indication to avatar
    const avatar = document.querySelector('.kishan-avatar');
    if (avatar) {
      avatar.classList.remove('listening', 'speaking', 'processing');
      if (type !== 'normal') avatar.classList.add(type);
    }
  }

  micBtn.addEventListener('click', () => {
    if (!recognition) {
      updateKishanStatus('Voice recognition not supported in this browser.', 'error');
      return;
    }
    
    if (isListening) {
      recognition.stop();
      return;
    }
    
    updateKishanStatus('Listening... speak now!', 'listening');
    isListening = true;
    micBtn.textContent = '🔴 Stop';
    
    recognition.lang = appState.currentLanguage || 'en-IN';
    try {
      recognition.start();
    } catch (error) {
      updateKishanStatus('Could not start voice recognition.', 'error');
      isListening = false;
      micBtn.innerHTML = '<span class="btn-icon">🎤</span> <span data-key="talk_to_kishan">Talk to Kishan</span>';
    }
  });

  if (recognition) {
    recognition.onresult = (event) => {
      isListening = false;
      micBtn.innerHTML = '<span class="btn-icon">🎤</span> <span data-key="talk_to_kishan">Talk to Kishan</span>';
      updateKishanStatus('Processing your question...', 'processing');
      
      const transcript = event.results[0][0].transcript.toLowerCase();
      const confidence = event.results[0][0].confidence;
      
      console.log('Voice input:', transcript, 'Confidence:', confidence);
      
      let answer = '';
      
      // Enhanced keyword matching with multiple languages
      if (transcript.includes('feature') || transcript.includes('फीचर') || transcript.includes('सुविधा') || transcript.includes('option')) {
        answer = kishanAnswers.features;
      } else if (transcript.includes('disease') || transcript.includes('रोग') || transcript.includes('बीमारी') || transcript.includes('plant problem') || transcript.includes('पौधे की समस्या')) {
        answer = kishanAnswers.disease;
      } else if (transcript.includes('voice') || transcript.includes('वॉयस') || transcript.includes('आवाज') || transcript.includes('speak') || transcript.includes('बोल')) {
        answer = kishanAnswers.voice;
      } else if (transcript.includes('price') || transcript.includes('कीमत') || transcript.includes('दाम') || transcript.includes('market') || transcript.includes('बाजार')) {
        answer = kishanAnswers.prices;
      } else if (transcript.includes('farming') || transcript.includes('खेती') || transcript.includes('कृषि') || transcript.includes('plan') || transcript.includes('योजना')) {
        answer = kishanAnswers.farming;
      } else if (transcript.includes('marketplace') || transcript.includes('equipment') || transcript.includes('tools') || transcript.includes('उपकरण') || transcript.includes('औजार')) {
        answer = kishanAnswers.marketplace;
      } else if (transcript.includes('help') || transcript.includes('मदद') || transcript.includes('सहायता') || transcript.includes('guide') || transcript.includes('गाइड')) {
        answer = kishanAnswers.help;
      } else {
        answer = kishanAnswers.default;
      }
      
      lastKishanAnswer = answer;
      showKishanAnswer(answer);
      updateKishanStatus('Speaking...', 'speaking');
      kishanSpeak(answer);
    };
    
    recognition.onerror = (event) => {
      isListening = false;
      micBtn.innerHTML = '<span class="btn-icon">🎤</span> <span data-key="talk_to_kishan">Talk to Kishan</span>';
      let errorMessage = 'Could not understand. Please try again.';
      
      if (event.error === 'no-speech') {
        errorMessage = 'No speech detected. Please speak clearly.';
      } else if (event.error === 'network') {
        errorMessage = 'Network error. Check your connection.';
      }
      
      updateKishanStatus(errorMessage, 'error');
    };
    
    recognition.onend = () => {
      isListening = false;
      micBtn.innerHTML = '<span class="btn-icon">🎤</span> <span data-key="talk_to_kishan">Talk to Kishan</span>';
      if (statusDiv.textContent.includes('Listening')) {
        updateKishanStatus('Ready to help! Click mic to ask questions.', 'normal');
      }
    };
  }

  speakBtn.addEventListener('click', () => {
    const textToSpeak = lastKishanAnswer || kishanAnswers.default;
    updateKishanStatus('Speaking...', 'speaking');
    kishanSpeak(textToSpeak);
  });

  function showKishanAnswer(text) {
    if (welcomeDiv) {
      welcomeDiv.style.opacity = '0';
      setTimeout(() => {
        welcomeDiv.textContent = text;
        welcomeDiv.style.opacity = '1';
      }, 200);
    }
  }

  function kishanSpeak(text) {
    if (!window.speechSynthesis) {
      updateKishanStatus('Speech synthesis not supported.', 'error');
      return;
    }
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = appState.currentLanguage || 'en-IN';
    utterance.rate = appState.speechRate || 0.9;
    utterance.volume = appState.speechVolume || 1.0;
    utterance.pitch = 1.0;
    
    // Try to find a suitable voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.lang.startsWith(appState.currentLanguage?.split('-')[0] || 'en')
    );
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    
    utterance.onstart = () => {
      updateKishanStatus('Speaking...', 'speaking');
      
      // Show stop button when speech starts
      const kishanStopBtn = document.getElementById('kishanStopBtn');
      if (kishanStopBtn) {
        kishanStopBtn.classList.remove('hidden');
      }
    };
    
    utterance.onend = () => {
      updateKishanStatus('Ready to help! Ask me anything.', 'normal');
      
      // Hide stop button when speech ends
      const kishanStopBtn = document.getElementById('kishanStopBtn');
      if (kishanStopBtn) {
        kishanStopBtn.classList.add('hidden');
      }
    };
    
    utterance.onerror = (event) => {
      updateKishanStatus('Speech error occurred.', 'error');
      console.error('Speech synthesis error:', event);
    };
    
    window.speechSynthesis.speak(utterance);
  }

  // Auto-greet when page loads
  setTimeout(() => {
    if (appState.currentLanguage === 'hi-IN') {
      const greeting = "नमस्ते! मैं किशन हूं, आपका स्मार्ट खेती गाइड। pro.krishi के सभी फीचर्स के बारे में पूछें।";
      showKishanAnswer(greeting);
      kishanSpeak(greeting);
    } else {
      kishanSpeak(kishanAnswers.default);
    }
  }, 2000);

  // Quick ask buttons functionality
  document.querySelectorAll('.quick-ask-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const question = btn.dataset.question;
      let answer = kishanAnswers[question] || kishanAnswers.default;
      
      lastKishanAnswer = answer;
      showKishanAnswer(answer);
      updateKishanStatus('Speaking...', 'speaking');
      kishanSpeak(answer);
      
      // Visual feedback
      btn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        btn.style.transform = '';
      }, 150);
    });
  });
}

function initializeApp() {
  console.log('Initializing pro.krishi application...');
  
  // Initialize services
  weatherService = new WeatherService();
  locationService = new LocationService();
  
  // Get DOM elements
  languageSelector = document.getElementById('languageSelector');
  navButtons = document.querySelectorAll('.nav-btn');
  sections = document.querySelectorAll('.section');
  
  console.log('Found elements:', {
    languageSelector: !!languageSelector,
    navButtons: navButtons.length,
    sections: sections.length
  });
  
  // Initialize voice assistant
  voiceAssistant = new VoiceAssistant();
  
  // Initialize new Voice AI Chatbot System
  voiceAIChatbot = new VoiceAIChatbotSystem();
  
  // Setup event listeners
  setupEventListeners();
  
  // Initialize components
  initializeLanguageSelector();
  initializeChat();
  
  // Initialize weather functionality
  initializeWeather();
  
  // Initialize Voice AI Chatbot
  initializeVoiceAI();
  
  console.log('Application initialized successfully');
  initializeNavigation();
  initializeVoiceControls();
  initializeDiseaseDetection();
  initializeCropAdvisory();
  initializeSmartFarming();
  initializeMarketplace();
  initializeChat();
  initializeWeather();
  
  // Load initial content
  loadTranslations();
  showSection('home');
  
  console.log('Application initialized successfully');
}

function setupEventListeners() {
  // Language selector
  if (languageSelector) {
    languageSelector.addEventListener('change', handleLanguageChange);
  }
  
  // Navigation buttons
  navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const section = button.dataset.section;
      console.log('Navigation clicked:', section);
      if (section) {
        showSection(section);
      }
    });
  });
  
  // CTA buttons in hero
  document.querySelectorAll('[data-section]').forEach(button => {
    if (!button.classList.contains('nav-btn')) {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const section = button.dataset.section;
        console.log('CTA button clicked:', section);
        if (section) {
          showSection(section);
        }
      });
    }
  });
  
  // Weather refresh button
  const refreshWeatherBtn = document.getElementById('refreshWeatherBtn');
  if (refreshWeatherBtn) {
    refreshWeatherBtn.addEventListener('click', async () => {
      try {
        refreshWeatherBtn.disabled = true;
        refreshWeatherBtn.textContent = '🔄 Refreshing...';
        
        if (appState.userLocation) {
          await updateWeatherData();
        } else {
          await requestLocationAndWeather();
        }
        
        refreshWeatherBtn.textContent = '🔄 Refresh';
        refreshWeatherBtn.disabled = false;
      } catch (error) {
        console.error('Error refreshing weather:', error);
        refreshWeatherBtn.textContent = '🔄 Refresh';
        refreshWeatherBtn.disabled = false;
      }
    });
  }
}

function initializeVoiceControls() {
  // Voice language selector
  const voiceLanguageSelector = document.getElementById('voiceLanguageSelector');
  if (voiceLanguageSelector) {
    voiceLanguageSelector.addEventListener('change', (e) => {
      const newLang = e.target.value;
      console.log('Voice language changed to:', newLang);
      if (voiceAssistant) {
        voiceAssistant.changeLanguage(newLang);
      }
    });
  }
  
  // Speech rate control
  const speechRate = document.getElementById('speechRate');
  const rateValue = document.getElementById('rateValue');
  if (speechRate && rateValue) {
    speechRate.addEventListener('input', (e) => {
      appState.speechRate = parseFloat(e.target.value);
      rateValue.textContent = `${appState.speechRate}x`;
    });
  }
  
  // Volume control
  const volumeControl = document.getElementById('volumeControl');
  const volumeValue = document.getElementById('volumeValue');
  if (volumeControl && volumeValue) {
    volumeControl.addEventListener('input', (e) => {
      appState.speechVolume = parseFloat(e.target.value);
      volumeValue.textContent = `${Math.round(appState.speechVolume * 100)}%`;
    });
  }
  
  // Continuous mode toggle
  const continuousMode = document.getElementById('continuousMode');
  if (continuousMode) {
    continuousMode.addEventListener('change', (e) => {
      appState.continuousMode = e.target.checked;
      console.log('Continuous mode:', appState.continuousMode);
    });
  }
  
  // Main voice buttons
  const micBtn = document.getElementById('micBtn');
  const stopBtn = document.getElementById('stopBtn');
  const speakBtn = document.getElementById('speakBtn');
  
  if (micBtn) {
    micBtn.addEventListener('click', () => {
      console.log('Mic button clicked');
      if (voiceAssistant) {
        voiceAssistant.startListening();
      }
    });
  }
  
  if (stopBtn) {
    stopBtn.addEventListener('click', () => {
      console.log('Stop button clicked');
      if (voiceAssistant) {
        voiceAssistant.stopListening();
      }
    });
  }
  
  if (speakBtn) {
    speakBtn.addEventListener('click', () => {
      console.log('Speak button clicked, last message:', appState.lastBotMessage);
      if (voiceAssistant && appState.lastBotMessage) {
        voiceAssistant.speak(appState.lastBotMessage);
      } else {
        console.log('No message to speak or voice assistant not ready');
        if (voiceAssistant) {
          voiceAssistant.speak('Hello! I am your farming assistant. How can I help you today?');
        }
      }
    });
  }
  
  // Voice input button in chat
  const voiceInputBtn = document.getElementById('voiceInputBtn');
  if (voiceInputBtn) {
    voiceInputBtn.addEventListener('click', () => {
      if (appState.isListening) {
        voiceAssistant.stopListening();
        voiceInputBtn.classList.remove('listening');
      } else {
        voiceAssistant.startListening();
        voiceInputBtn.classList.add('listening');
      }
    });
  }
  
  // Command cards
  document.querySelectorAll('.command-card').forEach(card => {
    card.addEventListener('click', () => {
      const command = card.dataset.command;
      if (command && voiceAssistant) {
        console.log('Command card clicked:', command);
        voiceAssistant.processVoiceInput(command);
      }
    });
  });
}

function initializeLanguageSelector() {
  if (!languageSelector) return;
  languageSelector.value = appState.currentLanguage;
}

function initializeNavigation() {
  updateActiveNavButton('home');
}

function handleLanguageChange(event) {
  const newLanguage = event.target.value;
  console.log('Language changed to:', newLanguage);
  appState.currentLanguage = newLanguage;
  
  // Update voice assistant language
  if (voiceAssistant) {
    voiceAssistant.changeLanguage(newLanguage);
  }
  
  // Update voice language selector
  const voiceLanguageSelector = document.getElementById('voiceLanguageSelector');
  if (voiceLanguageSelector) {
    voiceLanguageSelector.value = newLanguage;
  }
  
  loadTranslations();
}

function showSection(sectionName) {
  console.log('Showing section:', sectionName);
  
  // Hide all sections
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.add('active');
    appState.currentSection = sectionName;
    updateActiveNavButton(sectionName);
    console.log('Section activated:', sectionName);
  } else {
    console.error('Section not found:', sectionName);
  }
}

function updateActiveNavButton(sectionName) {
  navButtons.forEach(button => {
    button.classList.remove('active');
    if (button.dataset.section === sectionName) {
      button.classList.add('active');
    }
  });
}

function loadTranslations() {
  const translationData = translations[appState.currentLanguage] || translations['en-IN'];
  
  document.body.classList.add('language-switching');
  
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.dataset.key;
    if (translationData[key]) {
      if (element.tagName === 'INPUT' && element.type === 'text') {
        element.placeholder = translationData[key];
      } else {
        element.textContent = translationData[key];
      }
    }
  });
  
  document.querySelectorAll('[data-key-placeholder]').forEach(element => {
    const key = element.dataset.keyPlaceholder;
    if (translationData[key]) {
      element.placeholder = translationData[key];
    }
  });
  
  setTimeout(() => {
    document.body.classList.remove('language-switching');
  }, 300);
}

// Disease Detection functionality
function initializeDiseaseDetection() {
  const uploadBtn = document.getElementById('uploadBtn');
  const fileInput = document.getElementById('fileInput');
  const uploadBox = document.getElementById('uploadBox');
  const analyzeBtn = document.getElementById('analyzeBtn');
  const resetBtn = document.getElementById('resetBtn');
  const speakResultBtn = document.getElementById('speakResultBtn');
  
  if (!uploadBtn || !fileInput) return;
  
  uploadBtn.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', handleFileUpload);
  
  if (uploadBox) {
    uploadBox.addEventListener('dragover', handleDragOver);
    uploadBox.addEventListener('drop', handleDrop);
  }
  
  if (analyzeBtn) analyzeBtn.addEventListener('click', analyzeDisease);
  if (resetBtn) resetBtn.addEventListener('click', resetUpload);
  if (speakResultBtn) {
    speakResultBtn.addEventListener('click', () => {
      const diseaseType = document.getElementById('diseaseType')?.textContent;
      const symptoms = document.getElementById('symptoms')?.textContent;
      const treatment = document.getElementById('treatment')?.textContent;
      
      const resultText = `Disease detected: ${diseaseType}. Symptoms: ${symptoms}. Treatment: ${treatment}`;
      if (voiceAssistant) {
        voiceAssistant.speak(resultText);
      }
    });
  }
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    displayImagePreview(file);
  }
}

function handleDragOver(event) {
  event.preventDefault();
  event.currentTarget.style.borderColor = 'var(--color-primary)';
}

function handleDrop(event) {
  event.preventDefault();
  event.currentTarget.style.borderColor = 'var(--color-border)';
  
  const files = event.dataTransfer.files;
  if (files.length > 0 && files[0].type.startsWith('image/')) {
    displayImagePreview(files[0]);
  }
}

function displayImagePreview(file) {
  const uploadBox = document.getElementById('uploadBox');
  const uploadPreview = document.getElementById('uploadPreview');
  const previewImage = document.getElementById('previewImage');
  
  const reader = new FileReader();
  reader.onload = function(e) {
    previewImage.src = e.target.result;
    uploadBox.querySelector('.upload-box__content').classList.add('hidden');
    uploadPreview.classList.remove('hidden');
    
    // Store the image data for analysis
    window.uploadedImageData = {
      file: file,
      dataUrl: e.target.result,
      uploadTime: new Date()
    };
    
    // Auto-detect image type and update UI
    detectImageType(e.target.result);
  };
  reader.readAsDataURL(file);
}

function detectImageType(imageDataUrl) {
  // Simulate image type detection based on filename and basic analysis
  const file = window.uploadedImageData?.file;
  const fileName = file?.name?.toLowerCase() || '';
  
  let detectedType = 'plant'; // default
  let confidence = 0.7;
  
  // Simple heuristic detection based on filename keywords
  if (fileName.includes('soil') || fileName.includes('ground') || fileName.includes('earth') || fileName.includes('dirt')) {
    detectedType = 'soil';
    confidence = 0.85;
  } else if (fileName.includes('leaf') || fileName.includes('plant') || fileName.includes('crop') || fileName.includes('disease')) {
    detectedType = 'plant';
    confidence = 0.85;
  }
  
  // Store detection results
  window.uploadedImageData.detectedType = detectedType;
  window.uploadedImageData.detectionConfidence = confidence;
  
  // Update UI to show detection
  updateImageTypeIndicator(detectedType, confidence);
}

function updateImageTypeIndicator(type, confidence) {
  const previewContainer = document.getElementById('uploadPreview');
  
  // Remove existing indicator
  const existingIndicator = previewContainer.querySelector('.image-type-indicator');
  if (existingIndicator) {
    existingIndicator.remove();
  }
  
  // Add new type indicator
  const indicator = document.createElement('div');
  indicator.className = 'image-type-indicator';
  indicator.innerHTML = `
    <div class="type-badge type-${type}">
      ${type === 'soil' ? '🌍' : '🌱'} ${type.charAt(0).toUpperCase() + type.slice(1)} Image
      <span class="confidence-badge">${Math.round(confidence * 100)}%</span>
    </div>
    <p class="type-description">
      ${type === 'soil' 
        ? 'This appears to be a soil image. I will analyze soil health, composition, and provide farming recommendations.'
        : 'This appears to be a plant image. I will analyze for diseases, pests, and health issues.'
      }
    </p>
  `;
  
  previewContainer.appendChild(indicator);
}

function analyzeDisease() {
  const analysisResults = document.getElementById('analysisResults');
  const diseaseType = document.getElementById('diseaseType');
  const symptoms = document.getElementById('symptoms');
  const treatment = document.getElementById('treatment');
  const confidenceScore = document.getElementById('confidenceScore');
  
  // Determine analysis type based on uploaded image
  const imageType = window.uploadedImageData?.detectedType || 'plant';
  
  // Show loading state
  analysisResults.classList.add('loading');
  analysisResults.classList.remove('hidden');
  
  // Update loading message based on image type
  const loadingMessage = document.createElement('div');
  loadingMessage.className = 'loading-message';
  
  if (imageType === 'soil') {
    loadingMessage.innerHTML = `
      <div class="analysis-stages">
        <div class="stage active">🌍 Analyzing soil composition...</div>
        <div class="stage">🧪 Testing soil properties...</div>
        <div class="stage">📊 Evaluating soil health...</div>
        <div class="stage">🌱 Generating recommendations...</div>
      </div>
    `;
  } else {
    loadingMessage.innerHTML = `
      <div class="analysis-stages">
        <div class="stage active">🔍 Analyzing plant image...</div>
        <div class="stage">🧠 Processing with AI...</div>
        <div class="stage">📊 Generating diagnosis...</div>
        <div class="stage">💊 Finding treatment...</div>
      </div>
    `;
  }
  
  analysisResults.appendChild(loadingMessage);
  
  // Simulate advanced AI analysis with multiple stages
  let currentStage = 0;
  const stages = loadingMessage.querySelectorAll('.stage');
  
  const stageInterval = setInterval(() => {
    if (currentStage < stages.length) {
      stages[currentStage].classList.remove('active');
      currentStage++;
      if (currentStage < stages.length) {
        stages[currentStage].classList.add('active');
      }
    } else {
      clearInterval(stageInterval);
    }
  }, 800);
  
  setTimeout(() => {
    // Remove loading message
    if (loadingMessage) loadingMessage.remove();
    
    // Perform appropriate analysis
    let analysisResult;
    if (imageType === 'soil') {
      analysisResult = performSoilAnalysis();
      displaySoilAnalysisResults(analysisResult, {
        diseaseType,
        symptoms,
        treatment,
        confidenceScore,
        analysisResults
      });
    } else {
      analysisResult = performAdvancedDiseaseDetection();
      displayDiseaseResults(analysisResult, {
        diseaseType,
        symptoms,
        treatment,
        confidenceScore,
        analysisResults
      });
    }
    
    analysisResults.classList.remove('loading');
    
    // Speak comprehensive result
    const resultText = generateVoiceResult(analysisResult, imageType);
    if (voiceAssistant) {
      voiceAssistant.speak(resultText);
    }
  }, 3500);
}

function performSoilAnalysis() {
  // Simulate advanced soil analysis with weighted selection
  const availableSoilConditions = appData.soilAnalysisData;
  
  // Simulate soil analysis factors
  const soilFactors = {
    color: Math.random(),
    texture: Math.random(),
    moisture: Math.random(),
    organicMatter: Math.random(),
    structure: Math.random()
  };
  
  // Weight soil conditions based on common occurrence and regional factors
  const weightedConditions = availableSoilConditions.map(condition => ({
    ...condition,
    detectionWeight: calculateSoilDetectionWeight(condition, soilFactors)
  }));
  
  // Sort by detection weight and select most likely
  weightedConditions.sort((a, b) => b.detectionWeight - a.detectionWeight);
  
  // Add some randomness but favor higher weighted conditions
  const randomFactor = Math.random();
  let selectedCondition;
  
  if (randomFactor < 0.6) {
    // 60% chance to select top 3 most likely
    selectedCondition = weightedConditions[Math.floor(Math.random() * Math.min(3, weightedConditions.length))];
  } else {
    // 40% chance for any condition
    selectedCondition = weightedConditions[Math.floor(Math.random() * weightedConditions.length)];
  }
  
  // Adjust confidence based on image quality and soil characteristics
  const baseConfidence = selectedCondition.confidence || 0.85;
  const adjustedConfidence = Math.min(0.99, Math.max(0.70, baseConfidence + (Math.random() - 0.5) * 0.15));
  
  return {
    ...selectedCondition,
    confidence: adjustedConfidence,
    analysisDate: new Date(),
    additionalInfo: generateSoilAdditionalInfo(selectedCondition),
    analysisType: 'soil'
  };
}

function calculateSoilDetectionWeight(condition, soilFactors) {
  let weight = condition.confidence || 0.5;
  
  // Adjust weight based on soil condition characteristics
  if (condition.severity === 'Good') weight += 0.3; // Healthy soil is common
  if (condition.category === 'Soil Health') weight += 0.2;
  if (condition.type === 'Optimal') weight += 0.25;
  
  // Factor in simulated soil analysis
  weight += (soilFactors.color + soilFactors.texture + soilFactors.organicMatter) * 0.08;
  
  return weight;
}

function generateSoilAdditionalInfo(soilCondition) {
  return {
    seasonalConsiderations: getSoilSeasonalInfo(soilCondition),
    managementPractices: getSoilManagementPractices(soilCondition),
    improvementTimeline: getSoilImprovementTimeline(soilCondition),
    costEstimates: getSoilImprovementCosts(soilCondition)
  };
}

function getSoilSeasonalInfo(condition) {
  if (condition.category === 'Soil Chemistry') {
    return 'pH adjustments are most effective during pre-planting season (March-May)';
  } else if (condition.type === 'Drainage Problem') {
    return 'Drainage improvements should be done during dry season (November-February)';
  } else if (condition.category === 'Soil Fertility') {
    return 'Nutrient management is critical during crop growing seasons';
  }
  return 'Year-round monitoring and management recommended';
}

function getSoilManagementPractices(condition) {
  const practices = [];
  
  if (condition.category === 'Soil Structure') {
    practices.push('Avoid tillage when soil is wet');
    practices.push('Use controlled traffic farming');
    practices.push('Maintain permanent soil cover');
  }
  
  if (condition.category === 'Soil Chemistry') {
    practices.push('Regular soil pH monitoring');
    practices.push('Gradual soil amendments');
    practices.push('Balanced fertilization program');
  }
  
  if (condition.category === 'Soil Physics') {
    practices.push('Improve soil drainage');
    practices.push('Break soil compaction');
    practices.push('Enhance soil aeration');
  }
  
  practices.push('Regular organic matter addition');
  practices.push('Crop rotation for soil health');
  
  return practices;
}

function getSoilImprovementTimeline(condition) {
  const timeline = {};
  
  if (condition.severity === 'High') {
    timeline.immediate = '1-2 weeks: Start urgent corrective measures';
    timeline.shortTerm = '1-3 months: Implement soil amendments';
    timeline.mediumTerm = '6-12 months: Monitor soil improvements';
    timeline.longTerm = '1-3 years: Achieve target soil health';
  } else if (condition.severity === 'Medium') {
    timeline.immediate = '1 month: Plan soil improvement strategy';
    timeline.shortTerm = '3-6 months: Apply soil amendments';
    timeline.mediumTerm = '6-18 months: Track soil progress';
    timeline.longTerm = '2-4 years: Reach optimal soil condition';
  } else {
    timeline.immediate = 'Ongoing: Maintain current practices';
    timeline.shortTerm = '2-3 months: Fine-tune management';
    timeline.mediumTerm = '6-12 months: Monitor soil status';
    timeline.longTerm = '1-2 years: Sustain soil health';
  }
  
  return timeline;
}

function getSoilImprovementCosts(condition) {
  // Simplified cost estimation in INR per acre
  let baseCost = 2000;
  
  if (condition.severity === 'High') baseCost *= 3;
  else if (condition.severity === 'Medium') baseCost *= 2;
  
  if (condition.category === 'Soil Chemistry') baseCost *= 1.5; // pH correction is expensive
  if (condition.type === 'Drainage Problem') baseCost *= 2.5; // Drainage systems are costly
  
  return {
    immediate: `₹${Math.round(baseCost * 0.3)} - ₹${Math.round(baseCost * 0.5)} per acre`,
    annual: `₹${Math.round(baseCost * 0.8)} - ₹${Math.round(baseCost * 1.2)} per acre`,
    total: `₹${Math.round(baseCost)} - ₹${Math.round(baseCost * 1.8)} per acre over 3 years`
  };
}

function performAdvancedDiseaseDetection() {
  // Simulate advanced AI detection with weighted selection
  const availableDiseases = appData.diseases;
  
  // Simulate image analysis factors
  const imageFactors = {
    leafCondition: Math.random(),
    colorAnalysis: Math.random(),
    spotPattern: Math.random(),
    severity: Math.random()
  };
  
  // Weight diseases based on common occurrence and season
  const weightedDiseases = availableDiseases.map(disease => ({
    ...disease,
    detectionWeight: calculateDetectionWeight(disease, imageFactors)
  }));
  
  // Sort by detection weight and select most likely
  weightedDiseases.sort((a, b) => b.detectionWeight - a.detectionWeight);
  
  // Add some randomness but favor higher weighted diseases
  const randomFactor = Math.random();
  let selectedDisease;
  
  if (randomFactor < 0.7) {
    // 70% chance to select top 3 most likely
    selectedDisease = weightedDiseases[Math.floor(Math.random() * Math.min(3, weightedDiseases.length))];
  } else {
    // 30% chance for any disease (simulating edge cases)
    selectedDisease = weightedDiseases[Math.floor(Math.random() * weightedDiseases.length)];
  }
  
  // Adjust confidence based on image quality and disease characteristics
  const baseConfidence = selectedDisease.confidence || 0.85;
  const adjustedConfidence = Math.min(0.99, Math.max(0.65, baseConfidence + (Math.random() - 0.5) * 0.2));
  
  return {
    ...selectedDisease,
    confidence: adjustedConfidence,
    analysisDate: new Date(),
    additionalInfo: generateAdditionalInfo(selectedDisease)
  };
}

function calculateDetectionWeight(disease, imageFactors) {
  let weight = disease.confidence || 0.5;
  
  // Adjust weight based on disease characteristics
  if (disease.severity === 'High') weight += 0.2;
  if (disease.category === 'Fungal') weight += 0.15; // More common
  if (disease.crop === 'Rice' || disease.crop === 'Wheat') weight += 0.1; // Common crops
  
  // Factor in image analysis simulation
  weight += (imageFactors.leafCondition + imageFactors.colorAnalysis) * 0.1;
  
  return weight;
}

function displaySoilAnalysisResults(soilCondition, elements) {
  const { diseaseType, symptoms, treatment, confidenceScore, analysisResults } = elements;
  
  // Update basic information for soil analysis
  diseaseType.textContent = soilCondition.name;
  symptoms.textContent = soilCondition.characteristics.join(', ');
  treatment.textContent = soilCondition.recommendations.slice(0, 2).join('. ');
  confidenceScore.textContent = `${Math.round(soilCondition.confidence * 100)}% Confidence`;
  
  // Create comprehensive soil analysis display
  const soilAnalysisResults = document.createElement('div');
  soilAnalysisResults.className = 'comprehensive-results soil-analysis-results';
  soilAnalysisResults.innerHTML = `
    <div class="soil-overview">
      <div class="soil-header">
        <div class="soil-identity">
          <h3>🌍 ${soilCondition.name}</h3>
          <p class="soil-description">${soilCondition.description}</p>
          <div class="soil-tags">
            <span class="tag category-${soilCondition.category?.toLowerCase().replace(/\s+/g, '-')}">${soilCondition.category}</span>
            <span class="tag type-${soilCondition.type?.toLowerCase().replace(/\s+/g, '-')}">${soilCondition.type}</span>
            <span class="tag severity-${soilCondition.severity?.toLowerCase()}">${soilCondition.severity} Condition</span>
          </div>
        </div>
        <div class="confidence-meter">
          <div class="confidence-circle" style="--confidence: ${Math.round(soilCondition.confidence * 100)}">
            <div class="confidence-value">${Math.round(soilCondition.confidence * 100)}%</div>
            <div class="confidence-label">Confidence</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="soil-analysis-details">
      <div class="detail-section">
        <h4>🧪 Soil Properties</h4>
        <div class="soil-properties-grid">
          <div class="property-card">
            <div class="property-icon">🎯</div>
            <div class="property-info">
              <div class="property-label">pH Range</div>
              <div class="property-value ph-${getPHCategory(soilCondition.pHRange)}">${soilCondition.pHRange}</div>
            </div>
          </div>
          <div class="property-card">
            <div class="property-icon">🌱</div>
            <div class="property-info">
              <div class="property-label">Organic Matter</div>
              <div class="property-value">${soilCondition.organicMatter}</div>
            </div>
          </div>
          <div class="property-card">
            <div class="property-icon">💧</div>
            <div class="property-info">
              <div class="property-label">Soil Type</div>
              <div class="property-value">${soilCondition.type}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="detail-section">
        <h4>🔬 Nutrient Analysis</h4>
        <div class="nutrient-analysis">
          <div class="nutrient-item">
            <span class="nutrient-name">Nitrogen (N)</span>
            <div class="nutrient-bar">
              <div class="nutrient-fill nutrient-${getNutrientLevel(soilCondition.nutrients.nitrogen)}" 
                   style="width: ${getNutrientPercentage(soilCondition.nutrients.nitrogen)}%"></div>
            </div>
            <span class="nutrient-level">${soilCondition.nutrients.nitrogen}</span>
          </div>
          <div class="nutrient-item">
            <span class="nutrient-name">Phosphorus (P)</span>
            <div class="nutrient-bar">
              <div class="nutrient-fill nutrient-${getNutrientLevel(soilCondition.nutrients.phosphorus)}" 
                   style="width: ${getNutrientPercentage(soilCondition.nutrients.phosphorus)}%"></div>
            </div>
            <span class="nutrient-level">${soilCondition.nutrients.phosphorus}</span>
          </div>
          <div class="nutrient-item">
            <span class="nutrient-name">Potassium (K)</span>
            <div class="nutrient-bar">
              <div class="nutrient-fill nutrient-${getNutrientLevel(soilCondition.nutrients.potassium)}" 
                   style="width: ${getNutrientPercentage(soilCondition.nutrients.potassium)}%"></div>
            </div>
            <span class="nutrient-level">${soilCondition.nutrients.potassium}</span>
          </div>
          <div class="nutrient-item">
            <span class="nutrient-name">Micronutrients</span>
            <div class="nutrient-bar">
              <div class="nutrient-fill nutrient-${getNutrientLevel(soilCondition.nutrients.micronutrients)}" 
                   style="width: ${getNutrientPercentage(soilCondition.nutrients.micronutrients)}%"></div>
            </div>
            <span class="nutrient-level">${soilCondition.nutrients.micronutrients}</span>
          </div>
        </div>
      </div>
      
      <div class="detail-section">
        <h4>🌾 Suitable Crops</h4>
        <div class="suitable-crops">
          ${soilCondition.suitableCrops.map(crop => `
            <div class="crop-tag">${crop}</div>
          `).join('')}
        </div>
      </div>
      
      <div class="detail-section">
        <h4>🔧 Soil Characteristics</h4>
        <ul class="characteristics-list">
          ${soilCondition.characteristics.map(char => `<li>${char}</li>`).join('')}
        </ul>
      </div>
      
      <div class="detail-section">
        <h4>💡 Improvement Recommendations</h4>
        <div class="recommendations-plan">
          <div class="immediate-recommendations">
            <h5>Immediate Actions:</h5>
            <ul>
              ${soilCondition.recommendations.slice(0, 3).map(rec => `<li>${rec}</li>`).join('')}
            </ul>
          </div>
          <div class="long-term-recommendations">
            <h5>Long-term Management:</h5>
            <ul>
              ${soilCondition.recommendations.slice(3).map(rec => `<li>${rec}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
      
      <div class="detail-section">
        <h4>📅 Improvement Timeline</h4>
        <div class="timeline-grid">
          ${Object.entries(soilCondition.additionalInfo?.improvementTimeline || {}).map(([period, action]) => `
            <div class="timeline-item">
              <div class="timeline-period">${period.charAt(0).toUpperCase() + period.slice(1)}</div>
              <div class="timeline-action">${action}</div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="detail-section">
        <h4>💰 Investment Estimates</h4>
        <div class="cost-estimates">
          ${Object.entries(soilCondition.additionalInfo?.costEstimates || {}).map(([period, cost]) => `
            <div class="cost-item">
              <span class="cost-period">${period.charAt(0).toUpperCase() + period.slice(1)}:</span>
              <span class="cost-amount">${cost}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    
    <div class="action-buttons">
      <button class="btn btn--primary" onclick="speakSoilAnalysis('${soilCondition.id}')">
        🔊 Hear Soil Analysis
      </button>
      <button class="btn btn--outline" onclick="downloadSoilReport('${soilCondition.id}')">
        📄 Download Soil Report
      </button>
      <button class="btn btn--secondary" onclick="getSoilExpertAdvice('${soilCondition.id}')">
        👨‍🌾 Soil Expert Consultation
      </button>
      <button class="btn btn--success" onclick="createSoilManagementPlan('${soilCondition.id}')">
        📋 Create Management Plan
      </button>
    </div>
  `;
  
  // Add soil analysis results to the analysis area
  const existingComprehensive = analysisResults.querySelector('.comprehensive-results');
  if (existingComprehensive) {
    existingComprehensive.replaceWith(soilAnalysisResults);
  } else {
    analysisResults.appendChild(soilAnalysisResults);
  }
}

function getPHCategory(pHRange) {
  const avgPH = parseFloat(pHRange.split('-')[0]);
  if (avgPH < 6.0) return 'acidic';
  if (avgPH > 7.5) return 'alkaline';
  return 'neutral';
}

function getNutrientLevel(nutrient) {
  const level = nutrient.toLowerCase();
  if (level.includes('high') || level.includes('good') || level.includes('adequate')) return 'high';
  if (level.includes('medium') || level.includes('variable')) return 'medium';
  return 'low';
}

function getNutrientPercentage(nutrient) {
  const level = getNutrientLevel(nutrient);
  switch(level) {
    case 'high': return 85;
    case 'medium': return 60;
    case 'low': return 30;
    default: return 50;
  }
}

function speakSoilAnalysis(soilId) {
  const soilCondition = appData.soilAnalysisData.find(s => s.id === soilId);
  if (!soilCondition || !voiceAssistant) return;
  
  const soilAnalysisText = `
    Complete soil analysis for ${soilCondition.name}:
    
    This is ${soilCondition.description.toLowerCase()}.
    Soil category: ${soilCondition.category}.
    Current condition: ${soilCondition.severity}.
    
    Key characteristics include: ${soilCondition.characteristics.slice(0, 4).join(', ')}.
    
    pH range is ${soilCondition.pHRange}, which is ${getPHCategory(soilCondition.pHRange)}.
    Organic matter content: ${soilCondition.organicMatter}.
    
    Nutrient status: Nitrogen is ${soilCondition.nutrients.nitrogen}, 
    Phosphorus is ${soilCondition.nutrients.phosphorus}, 
    Potassium is ${soilCondition.nutrients.potassium}.
    
    Suitable crops for this soil include: ${soilCondition.suitableCrops.slice(0, 5).join(', ')}.
    
    Key recommendations: ${soilCondition.recommendations.slice(0, 3).join('. ')}.
    
    This analysis has ${Math.round(soilCondition.confidence * 100)} percent confidence level.
  `;
  
  voiceAssistant.speak(soilAnalysisText);
}

function downloadSoilReport(soilId) {
  const soilCondition = appData.soilAnalysisData.find(s => s.id === soilId);
  if (!soilCondition) return;
  
  const reportContent = generateSoilReportContent(soilCondition);
  const blob = new Blob([reportContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `soil_analysis_report_${soilCondition.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  if (voiceAssistant) {
    voiceAssistant.speak(`Soil analysis report for ${soilCondition.name} has been downloaded successfully.`);
  }
}

function generateSoilReportContent(soilCondition) {
  return `
SOIL ANALYSIS REPORT
====================
Generated by pro.krishi AI Soil Analysis System
Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}

SOIL IDENTIFICATION
-------------------
Soil Condition: ${soilCondition.name}
Soil Type: ${soilCondition.type}
Category: ${soilCondition.category}
Overall Status: ${soilCondition.severity}
Confidence Score: ${Math.round(soilCondition.confidence * 100)}%

SOIL DESCRIPTION
----------------
${soilCondition.description}

SOIL CHARACTERISTICS
--------------------
${soilCondition.characteristics.map((char, index) => `${index + 1}. ${char}`).join('\n')}

SOIL PROPERTIES
---------------
pH Range: ${soilCondition.pHRange}
Organic Matter: ${soilCondition.organicMatter}

NUTRIENT ANALYSIS
-----------------
Nitrogen (N): ${soilCondition.nutrients.nitrogen}
Phosphorus (P): ${soilCondition.nutrients.phosphorus}
Potassium (K): ${soilCondition.nutrients.potassium}
Micronutrients: ${soilCondition.nutrients.micronutrients}

SUITABLE CROPS
--------------
${soilCondition.suitableCrops.join(', ')}

IMPROVEMENT RECOMMENDATIONS
---------------------------
${soilCondition.recommendations.map((rec, index) => `${index + 1}. ${rec}`).join('\n')}

MANAGEMENT PRACTICES
--------------------
${soilCondition.additionalInfo?.managementPractices?.map((practice, index) => `${index + 1}. ${practice}`).join('\n') || 'Follow standard soil management practices'}

IMPROVEMENT TIMELINE
--------------------
${Object.entries(soilCondition.additionalInfo?.improvementTimeline || {}).map(([period, action]) => `${period.toUpperCase()}: ${action}`).join('\n')}

COST ESTIMATES
--------------
${Object.entries(soilCondition.additionalInfo?.costEstimates || {}).map(([period, cost]) => `${period.charAt(0).toUpperCase() + period.slice(1)}: ${cost}`).join('\n')}

SEASONAL CONSIDERATIONS
-----------------------
${soilCondition.additionalInfo?.seasonalConsiderations || 'Year-round monitoring recommended'}

RECOMMENDATIONS
---------------
1. Implement immediate soil improvement measures as outlined above
2. Monitor soil conditions regularly throughout the growing season
3. Follow the improvement timeline for best results
4. Consider consulting local soil scientists for specialized advice
5. Keep detailed records of all soil management activities

DISCLAIMER
----------
This report is generated by AI-based soil analysis and should be used as a guide.
For critical agricultural decisions, please consult with local soil scientists or agricultural extension officers.
Consider conducting laboratory soil tests for precise nutrient analysis.

---
Report generated by pro.krishi
Your Smart Farming Assistant
`;
}

function getSoilExpertAdvice(soilId) {
  const soilCondition = appData.soilAnalysisData.find(s => s.id === soilId);
  if (!soilCondition) return;
  
  // Generate expert soil advice
  const expertAdvice = generateSoilExpertAdvice(soilCondition);
  showSoilExpertAdviceModal(soilCondition, expertAdvice);
  
  if (voiceAssistant) {
    voiceAssistant.speak(`Soil expert consultation for ${soilCondition.name} is now available. Please review the detailed soil management recommendations.`);
  }
}

function generateSoilExpertAdvice(soilCondition) {
  return {
    urgency: getSoilUrgencyLevel(soilCondition),
    detailedSteps: getSoilDetailedSteps(soilCondition),
    monitoring: getSoilMonitoringSchedule(soilCondition),
    management: soilCondition.additionalInfo?.managementPractices || [],
    alternatives: getSoilAlternativeApproaches(soilCondition),
    costBreakdown: getSoilCostBreakdown(soilCondition)
  };
}

function getSoilUrgencyLevel(soilCondition) {
  if (soilCondition.severity === 'High' || soilCondition.type.includes('Problem')) {
    return {
      level: 'URGENT',
      timeframe: 'Address within 2-4 weeks',
      reason: 'Severe soil condition affecting crop productivity'
    };
  } else if (soilCondition.severity === 'Medium') {
    return {
      level: 'MODERATE',
      timeframe: 'Plan improvements within 1-2 months',
      reason: 'Soil condition impacts optimal crop growth'
    };
  } else {
    return {
      level: 'MAINTENANCE',
      timeframe: 'Continue good practices',
      reason: 'Soil condition is favorable for crop production'
    };
  }
}

function getSoilDetailedSteps(soilCondition) {
  const steps = [
    'Conduct detailed soil testing for precise analysis',
    'Plan soil improvement strategy based on test results',
    ...soilCondition.recommendations,
    'Monitor soil improvement progress regularly',
    'Adjust management practices based on results'
  ];
  
  return steps;
}

function getSoilMonitoringSchedule(soilCondition) {
  return {
    weekly: 'Visual soil inspection and moisture check',
    monthly: 'pH testing and organic matter assessment',
    seasonal: 'Comprehensive soil analysis and nutrient testing',
    annual: 'Complete soil health evaluation and management review'
  };
}

function getSoilAlternativeApproaches(soilCondition) {
  const alternatives = [];
  
  if (soilCondition.category === 'Soil Chemistry') {
    alternatives.push('Biological pH adjustment using microbial inoculants');
    alternatives.push('Slow-release lime application over multiple seasons');
    alternatives.push('Green manure incorporation for gradual pH change');
  }
  
  if (soilCondition.category === 'Soil Structure') {
    alternatives.push('No-till farming to preserve soil structure');
    alternatives.push('Cover crop integration for natural improvement');
    alternatives.push('Biochar application for long-term soil enhancement');
  }
  
  if (soilCondition.category === 'Soil Fertility') {
    alternatives.push('Precision nutrient management');
    alternatives.push('Integrated nutrient management (INM)');
    alternatives.push('Foliar fertilization for quick nutrient supply');
  }
  
  alternatives.push('Organic farming transition program');
  alternatives.push('Precision agriculture technology adoption');
  
  return alternatives;
}

function getSoilCostBreakdown(soilCondition) {
  const costs = soilCondition.additionalInfo?.costEstimates || {};
  return {
    soilTesting: '₹500 - ₹1,500 per test',
    amendments: costs.immediate || '₹1,000 - ₹3,000 per acre',
    equipment: '₹2,000 - ₹8,000 per acre (one-time)',
    maintenance: costs.annual || '₹1,500 - ₹4,000 per acre annually',
    monitoring: '₹300 - ₹800 per acre annually'
  };
}

function showSoilExpertAdviceModal(soilCondition, advice) {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';
  modalOverlay.innerHTML = `
    <div class="expert-advice-modal soil-expert-modal">
      <div class="modal-header">
        <h3>🌍 Soil Expert Consultation - ${soilCondition.name}</h3>
        <button class="modal-close" onclick="closeSoilExpertModal()">&times;</button>
      </div>
      
      <div class="modal-content">
        <div class="urgency-alert urgency-${advice.urgency.level.toLowerCase()}">
          <strong>Priority Level: ${advice.urgency.level}</strong>
          <p>${advice.urgency.timeframe}</p>
          <small>${advice.urgency.reason}</small>
        </div>
        
        <div class="advice-section">
          <h4>🔧 Detailed Soil Management Steps</h4>
          <ol class="treatment-steps">
            ${advice.detailedSteps.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>
        
        <div class="advice-section">
          <h4>📅 Soil Monitoring Schedule</h4>
          <div class="monitoring-grid">
            ${Object.entries(advice.monitoring).map(([period, task]) => `
              <div class="monitoring-item">
                <strong>${period.charAt(0).toUpperCase() + period.slice(1)}:</strong> ${task}
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="advice-section">
          <h4>🔄 Alternative Soil Management Approaches</h4>
          <ul class="alternatives-list">
            ${advice.alternatives.map(alt => `<li>${alt}</li>`).join('')}
          </ul>
        </div>
        
        <div class="advice-section">
          <h4>💰 Detailed Cost Breakdown</h4>
          <div class="cost-grid">
            ${Object.entries(advice.costBreakdown).map(([item, cost]) => `
              <div class="cost-item">
                <strong>${item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}:</strong> ${cost}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      
      <div class="modal-footer">
        <button class="btn btn--primary" onclick="speakSoilExpertAdvice('${soilCondition.id}')">
          🔊 Hear Soil Expert Advice
        </button>
        <button class="btn btn--secondary" onclick="createSoilManagementPlan('${soilCondition.id}')">
          📋 Create Management Plan
        </button>
        <button class="btn btn--outline" onclick="closeSoilExpertModal()">
          Close
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modalOverlay);
  window.currentSoilAdvice = advice;
  window.currentSoilId = soilCondition.id;
}

function closeSoilExpertModal() {
  const modal = document.querySelector('.soil-expert-modal')?.parentElement;
  if (modal) {
    modal.remove();
  }
}

function speakSoilExpertAdvice(soilId) {
  const soilCondition = appData.soilAnalysisData.find(s => s.id === soilId);
  const advice = window.currentSoilAdvice;
  
  if (!soilCondition || !advice || !voiceAssistant) return;
  
  const expertAdviceText = `
    Soil expert consultation for ${soilCondition.name}:
    
    Priority level is ${advice.urgency.level}. ${advice.urgency.timeframe}.
    
    Key management steps include: ${advice.detailedSteps.slice(0, 4).join('. ')}.
    
    Monitoring schedule: ${Object.values(advice.monitoring).slice(0, 2).join('. ')}.
    
    Alternative approaches include: ${advice.alternatives.slice(0, 3).join('. ')}.
    
    Would you like more details on any specific soil management aspect?
  `;
  
  voiceAssistant.speak(expertAdviceText);
}

function createSoilManagementPlan(soilId) {
  const soilCondition = appData.soilAnalysisData.find(s => s.id === soilId);
  if (!soilCondition) return;
  
  showSoilManagementPlanModal(soilCondition);
  
  if (voiceAssistant) {
    voiceAssistant.speak(`Creating comprehensive soil management plan for ${soilCondition.name}. This will help you track soil improvements over time.`);
  }
}

function showSoilManagementPlanModal(soilCondition) {
  const planOverlay = document.createElement('div');
  planOverlay.className = 'modal-overlay';
  planOverlay.innerHTML = `
    <div class="treatment-tracker-modal soil-management-modal">
      <div class="modal-header">
        <h3>📋 Soil Management Plan - ${soilCondition.name}</h3>
        <button class="modal-close" onclick="closeSoilManagementPlan()">&times;</button>
      </div>
      
      <div class="tracker-content">
        <div class="treatment-timeline">
          <h4>📅 Soil Improvement Timeline</h4>
          <div class="timeline-items">
            <div class="timeline-item pending">
              <div class="timeline-date">Month 1</div>
              <div class="timeline-action">${soilCondition.recommendations[0] || 'Begin soil testing'}</div>
              <button class="btn btn--sm btn--success" onclick="markSoilCompleted(this)">Mark Done</button>
            </div>
            <div class="timeline-item pending">
              <div class="timeline-date">Month 2-3</div>
              <div class="timeline-action">${soilCondition.recommendations[1] || 'Apply soil amendments'}</div>
              <button class="btn btn--sm btn--secondary" onclick="setSoilReminder(this)">Set Reminder</button>
            </div>
            <div class="timeline-item pending">
              <div class="timeline-date">Month 6</div>
              <div class="timeline-action">Monitor soil improvement progress</div>
              <button class="btn btn--sm btn--secondary" onclick="setSoilReminder(this)">Set Reminder</button>
            </div>
            <div class="timeline-item pending">
              <div class="timeline-date">Month 12</div>
              <div class="timeline-action">Complete soil health evaluation</div>
              <button class="btn btn--sm btn--secondary" onclick="setSoilReminder(this)">Set Reminder</button>
            </div>
          </div>
        </div>
        
        <div class="progress-logging">
          <h4>📊 Log Soil Management Activities</h4>
          <div class="log-form">
            <div class="form-group">
              <label>Activity Performed:</label>
              <input type="text" id="soilActivity" placeholder="e.g., Applied lime, Added compost">
            </div>
            <div class="form-group">
              <label>Application Rate:</label>
              <input type="text" id="applicationRate" placeholder="e.g., 2 tons per acre">
            </div>
            <div class="form-group">
              <label>Area Covered:</label>
              <input type="text" id="areaCovered" placeholder="e.g., 5 acres">
            </div>
            <div class="form-group">
              <label>Observations/Results:</label>
              <textarea id="soilObservations" placeholder="Note any changes in soil condition, crop response, etc..."></textarea>
            </div>
            <button class="btn btn--primary" onclick="logSoilActivity('${soilCondition.id}')">
              💾 Save Activity
            </button>
          </div>
        </div>
        
        <div class="treatment-history">
          <h4>📋 Management History</h4>
          <div id="soilActivityLog" class="treatment-entries">
            <p class="no-entries">No activities logged yet.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(planOverlay);
}

function closeSoilManagementPlan() {
  const modal = document.querySelector('.soil-management-modal')?.parentElement;
  if (modal) {
    modal.remove();
  }
}

function markSoilCompleted(button) {
  const timelineItem = button.closest('.timeline-item');
  timelineItem.classList.remove('pending');
  timelineItem.classList.add('completed');
  button.textContent = '✓ Completed';
  button.disabled = true;
  
  if (voiceAssistant) {
    voiceAssistant.speak('Soil management milestone marked as completed.');
  }
}

function logSoilActivity(soilId) {
  const activity = document.getElementById('soilActivity').value;
  const rate = document.getElementById('applicationRate').value;
  const area = document.getElementById('areaCovered').value;
  const observations = document.getElementById('soilObservations').value;
  
  if (!activity) {
    alert('Please enter the activity performed.');
    return;
  }
  
  const logEntry = {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    activity,
    rate,
    area,
    observations,
    soilId
  };
  
  // Add to activity log display
  const activityLog = document.getElementById('soilActivityLog');
  const noEntries = activityLog.querySelector('.no-entries');
  if (noEntries) noEntries.remove();
  
  const entryElement = document.createElement('div');
  entryElement.className = 'treatment-entry';
  entryElement.innerHTML = `
    <div class="entry-header">
      <strong>${logEntry.date} at ${logEntry.time}</strong>
    </div>
    <div class="entry-details">
      <p><strong>Activity:</strong> ${logEntry.activity}</p>
      ${logEntry.rate ? `<p><strong>Application Rate:</strong> ${logEntry.rate}</p>` : ''}
      ${logEntry.area ? `<p><strong>Area:</strong> ${logEntry.area}</p>` : ''}
      ${logEntry.observations ? `<p><strong>Observations:</strong> ${logEntry.observations}</p>` : ''}
    </div>
  `;
  
  activityLog.insertBefore(entryElement, activityLog.firstChild);
  
  // Clear form
  document.getElementById('soilActivity').value = '';
  document.getElementById('applicationRate').value = '';
  document.getElementById('areaCovered').value = '';
  document.getElementById('soilObservations').value = '';
  
  if (voiceAssistant) {
    voiceAssistant.speak('Soil management activity logged successfully. Keep tracking your soil improvement progress.');
  }
}

// Utility Functions for Enhanced Functionality

// Reset upload function
function resetUpload() {
  const uploadPreview = document.getElementById('uploadPreview');
  const uploadBox = document.getElementById('uploadBox');
  const fileInput = document.getElementById('fileInput');
  const analysisResults = document.getElementById('analysisResults');
  
  if (uploadPreview) uploadPreview.classList.add('hidden');
  if (uploadBox) uploadBox.classList.remove('hidden');
  if (fileInput) fileInput.value = '';
  if (analysisResults) analysisResults.classList.add('hidden');
  
  console.log('Upload reset successfully');
}

// Enhanced error handling
function handleError(error, context = 'Application') {
  console.error(`${context} Error:`, error);
  
  const errorMsg = error.message || 'An unexpected error occurred';
  showNotification(errorMsg, 'error');
  
  // Log to analytics if available
  if (window.gtag) {
    gtag('event', 'exception', {
      description: `${context}: ${errorMsg}`,
      fatal: false
    });
  }
}

// Enhanced notification system
function showNotification(message, type = 'info', duration = 5000) {
  const notification = document.createElement('div');
  const typeColors = {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6'
  };
  
  const typeIcons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };
  
  notification.className = `${type}-notification`;
  notification.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${typeColors[type]};
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      max-width: 350px;
      animation: slideInRight 0.3s ease;
      font-family: 'Segoe UI', sans-serif;
    ">
      <strong>${typeIcons[type]} ${type.charAt(0).toUpperCase() + type.slice(1)}:</strong> ${message}
    </div>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, duration);
}

// Enhanced loading overlay
function showLoadingOverlay(message = 'Processing...') {
  const overlay = document.createElement('div');
  overlay.id = 'loadingOverlay';
  overlay.className = 'loading-overlay';
  overlay.innerHTML = `
    <div style="text-align: center; color: white;">
      <div class="loading-spinner"></div>
      <p style="margin-top: 20px; font-size: 1.1em;">${message}</p>
    </div>
  `;
  
  document.body.appendChild(overlay);
}

function hideLoadingOverlay() {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) {
    overlay.style.opacity = '0';
    setTimeout(() => overlay.remove(), 300);
  }
}

// Enhanced file validation
function validateImageFile(file) {
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  const maxSize = 10 * 1024 * 1024; // 10MB
  
  if (!validTypes.includes(file.type)) {
    throw new Error('Please upload a valid image file (JPEG, PNG, or WebP)');
  }
  
  if (file.size > maxSize) {
    throw new Error('File size must be less than 10MB');
  }
  
  return true;
}

// Enhanced speech synthesis with better error handling
function speakText(text, options = {}) {
  try {
    if (!window.speechSynthesis) {
      throw new Error('Speech synthesis not supported');
    }
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = options.rate || 0.9;
    utterance.pitch = options.pitch || 1.0;
    utterance.volume = options.volume || 1.0;
    utterance.lang = options.lang || 'en-IN';
    
    utterance.onstart = () => {
      console.log('Speech started');
      updateVoiceStatus('speaking');
    };
    
    utterance.onend = () => {
      console.log('Speech ended');
      updateVoiceStatus('idle');
    };
    
    utterance.onerror = (error) => {
      console.error('Speech synthesis error:', error);
      updateVoiceStatus('idle');
    };
    
    window.speechSynthesis.speak(utterance);
    
  } catch (error) {
    handleError(error, 'Speech Synthesis');
  }
}

// Update voice status indicator
function updateVoiceStatus(status) {
  const statusIndicator = document.querySelector('.avatar-status-indicator');
  if (statusIndicator) {
    statusIndicator.className = `avatar-status-indicator ${status}`;
  }
  
  const statusText = document.querySelector('.status-text');
  if (statusText) {
    const statusTexts = {
      idle: 'Ready to help',
      listening: 'Listening...',
      processing: 'Processing...',
      speaking: 'Speaking...'
    };
    statusText.textContent = statusTexts[status] || 'Ready';
  }
}

// Enhanced drag and drop functionality
function setupDragAndDrop() {
  const uploadBox = document.getElementById('uploadBox');
  if (!uploadBox) return;
  
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    uploadBox.addEventListener(eventName, preventDefaults, false);
  });
  
  ['dragenter', 'dragover'].forEach(eventName => {
    uploadBox.addEventListener(eventName, () => {
      uploadBox.classList.add('dragover');
    }, false);
  });
  
  ['dragleave', 'drop'].forEach(eventName => {
    uploadBox.addEventListener(eventName, () => {
      uploadBox.classList.remove('dragover');
    }, false);
  });
  
  uploadBox.addEventListener('drop', handleDrop, false);
}

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

function handleDrop(e) {
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    try {
      validateImageFile(files[0]);
      displayImagePreview(files[0]);
    } catch (error) {
      handleError(error, 'File Upload');
    }
  }
}

// Performance monitoring
function initializePerformanceMonitoring() {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('🚀 Performance Metrics:', {
          loadTime: Math.round(perfData.loadEventEnd - perfData.fetchStart),
          domReady: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
          interactive: Math.round(perfData.domInteractive - perfData.fetchStart)
        });
      }, 1000);
    });
  }
}

// Initialize enhanced features
function initializeEnhancedFeatures() {
  setupDragAndDrop();
  initializePerformanceMonitoring();
  
  // Add status indicator to avatar if not present
  const avatarContainer = document.querySelector('.kishan-avatar');
  if (avatarContainer && !avatarContainer.querySelector('.avatar-status-indicator')) {
    const statusIndicator = document.createElement('div');
    statusIndicator.className = 'avatar-status-indicator idle';
    avatarContainer.appendChild(statusIndicator);
  }
  
  console.log('✅ Enhanced features initialized');
}

// Call enhanced initialization
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initializeEnhancedFeatures, 1000);
});

function displayDiseaseResults(disease, elements) {
  const { diseaseType, symptoms, treatment, confidenceScore, analysisResults } = elements;
  
  // Update basic information
  diseaseType.textContent = disease.name;
  symptoms.textContent = disease.symptoms.join(', ');
  treatment.textContent = disease.treatment;
  confidenceScore.textContent = `${Math.round(disease.confidence * 100)}% Confidence`;
  
  // Create comprehensive results display
  const comprehensiveResults = document.createElement('div');
  comprehensiveResults.className = 'comprehensive-results';
  comprehensiveResults.innerHTML = `
    <div class="disease-overview">
      <div class="disease-header">
        <div class="disease-identity">
          <h3>${disease.name}</h3>
          <p class="scientific-name">${disease.scientificName || 'N/A'}</p>
          <div class="disease-tags">
            <span class="tag category-${disease.category?.toLowerCase()}">${disease.category}</span>
            <span class="tag severity-${disease.severity?.toLowerCase()}">${disease.severity} Risk</span>
            <span class="tag crop-tag">${disease.crop}</span>
          </div>
        </div>
        <div class="confidence-meter">
          <div class="confidence-circle">
            <div class="confidence-value">${Math.round(disease.confidence * 100)}%</div>
            <div class="confidence-label">Confidence</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="analysis-details">
      <div class="detail-section">
        <h4>🔬 Detailed Analysis</h4>
        <div class="detail-grid">
          <div class="detail-item">
            <strong>Affected Parts:</strong>
            <span>${disease.affectedParts?.join(', ') || 'Various parts'}</span>
          </div>
          <div class="detail-item">
            <strong>Potential Economic Loss:</strong>
            <span class="economic-loss">${disease.economicLoss || '10-30%'}</span>
          </div>
          <div class="detail-item">
            <strong>Disease Category:</strong>
            <span>${disease.category}</span>
          </div>
          <div class="detail-item">
            <strong>Primary Crop:</strong>
            <span>${disease.crop}</span>
          </div>
        </div>
      </div>
      
      <div class="detail-section">
        <h4>🧪 Symptoms Identified</h4>
        <ul class="symptoms-list">
          ${disease.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
        </ul>
      </div>
      
      <div class="detail-section">
        <h4>🎯 Root Causes</h4>
        <ul class="causes-list">
          ${disease.causes?.map(cause => `<li>${cause}</li>`).join('') || '<li>Multiple environmental factors</li>'}
        </ul>
      </div>
      
      <div class="detail-section">
        <h4>💊 Treatment Plan</h4>
        <div class="treatment-plan">
          <div class="immediate-action">
            <h5>Immediate Action:</h5>
            <p>${disease.treatment}</p>
          </div>
          ${disease.prevention ? `
            <div class="prevention-measures">
              <h5>Prevention Measures:</h5>
              <ul>
                ${disease.prevention.map(measure => `<li>${measure}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      </div>
      
      <div class="detail-section">
        <h4>📊 Risk Assessment</h4>
        <div class="risk-indicators">
          <div class="risk-item">
            <span class="risk-label">Severity Level:</span>
            <div class="risk-bar">
              <div class="risk-fill severity-${disease.severity?.toLowerCase()}" 
                   style="width: ${getSeverityPercentage(disease.severity)}%"></div>
            </div>
            <span class="risk-value">${disease.severity}</span>
          </div>
          <div class="risk-item">
            <span class="risk-label">Spread Risk:</span>
            <div class="risk-bar">
              <div class="risk-fill spread-risk" 
                   style="width: ${getSpreadRisk(disease.category)}%"></div>
            </div>
            <span class="risk-value">${getSpreadRiskLabel(disease.category)}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="action-buttons">
      <button class="btn btn--primary" onclick="speakFullDiagnosis('${disease.id}')">
        🔊 Hear Full Diagnosis
      </button>
      <button class="btn btn--outline" onclick="downloadReport('${disease.id}')">
        📄 Download Report
      </button>
      <button class="btn btn--secondary" onclick="getExpertAdvice('${disease.id}')">
        👨‍🌾 Expert Consultation
      </button>
      <button class="btn btn--success" onclick="trackTreatment('${disease.id}')">
        📱 Track Treatment
      </button>
    </div>
  `;
  
  // Add comprehensive results to the analysis area
  const existingComprehensive = analysisResults.querySelector('.comprehensive-results');
  if (existingComprehensive) {
    existingComprehensive.replaceWith(comprehensiveResults);
  } else {
    analysisResults.appendChild(comprehensiveResults);
  }
}

function getSeverityPercentage(severity) {
  switch(severity?.toLowerCase()) {
    case 'low': return 25;
    case 'medium': return 60;
    case 'high': return 90;
    default: return 50;
  }
}

function getSpreadRisk(category) {
  switch(category?.toLowerCase()) {
    case 'viral': return 85;
    case 'bacterial': return 75;
    case 'fungal': return 60;
    case 'insect pest': return 70;
    case 'nutritional': return 20;
    default: return 50;
  }
}

function getSpreadRiskLabel(category) {
  const risk = getSpreadRisk(category);
  if (risk >= 80) return 'Very High';
  if (risk >= 60) return 'High';
  if (risk >= 40) return 'Medium';
  return 'Low';
}

function generateVoiceResult(disease) {
  return `Disease analysis complete. I have detected ${disease.name} with ${Math.round(disease.confidence * 100)}% confidence. This is a ${disease.severity?.toLowerCase()} severity ${disease.category?.toLowerCase()} disease affecting ${disease.crop}. The main symptoms include ${disease.symptoms.slice(0, 3).join(', ')}. For treatment, ${disease.treatment}. Would you like me to explain the full diagnosis?`;
}

function generateAdditionalInfo(disease) {
  return {
    weatherConditions: getOptimalWeatherConditions(disease),
    seasonality: getSeasonalInfo(disease),
    geographicalSpread: getGeographicalInfo(disease)
  };
}

function getOptimalWeatherConditions(disease) {
  // Based on disease characteristics
  if (disease.category === 'Fungal') {
    return 'High humidity (>80%), moderate temperature (20-30°C)';
  } else if (disease.category === 'Bacterial') {
    return 'Warm temperature (25-35°C), high moisture';
  } else if (disease.category === 'Viral') {
    return 'Dependent on vector insects, warm conditions';
  }
  return 'Various weather conditions depending on specific factors';
}

function getSeasonalInfo(disease) {
  // Simplified seasonal information
  if (disease.category === 'Fungal') {
    return 'Most common during monsoon and post-monsoon seasons';
  } else if (disease.category === 'Insect Pest') {
    return 'Peak during warm months (March-May, September-November)';
  }
  return 'Can occur throughout the year under favorable conditions';
}

function getGeographicalInfo(disease) {
  if (disease.crop === 'Rice') {
    return 'Common in rice-growing regions: Punjab, Haryana, Andhra Pradesh, West Bengal';
  } else if (disease.crop === 'Wheat') {
    return 'Prevalent in wheat belt: Punjab, Haryana, Uttar Pradesh, Madhya Pradesh';
  } else if (disease.crop === 'Cotton') {
    return 'Major cotton states: Gujarat, Maharashtra, Telangana, Karnataka';
  }
  return 'Distribution varies based on crop cultivation patterns';
}

function resetUpload() {
  const uploadBox = document.getElementById('uploadBox');
  const uploadPreview = document.getElementById('uploadPreview');
  const analysisResults = document.getElementById('analysisResults');
  const fileInput = document.getElementById('fileInput');
  
  fileInput.value = '';
  uploadBox.querySelector('.upload-box__content').classList.remove('hidden');
  uploadPreview.classList.add('hidden');
  analysisResults.classList.add('hidden');
  
  // Clear comprehensive results
  const comprehensiveResults = analysisResults.querySelector('.comprehensive-results');
  if (comprehensiveResults) {
    comprehensiveResults.remove();
  }
}

// Additional Disease Detection Functions
function speakFullDiagnosis(diseaseId) {
  const disease = appData.diseases.find(d => d.id === diseaseId);
  if (!disease || !voiceAssistant) return;
  
  const fullDiagnosis = `
    Complete diagnosis for ${disease.name}:
    
    This is a ${disease.category.toLowerCase()} disease affecting ${disease.crop} plants.
    Severity level: ${disease.severity}.
    
    Key symptoms include: ${disease.symptoms.join(', ')}.
    
    Root causes are: ${disease.causes?.join(', ') || 'environmental factors'}.
    
    Treatment recommendation: ${disease.treatment}
    
    Prevention measures include: ${disease.prevention?.join(', ') || 'general farm hygiene practices'}.
    
    Potential economic loss ranges from ${disease.economicLoss || '10 to 30 percent'}.
    
    This analysis has ${Math.round(disease.confidence * 100)} percent confidence level.
  `;
  
  voiceAssistant.speak(fullDiagnosis);
}

function downloadReport(diseaseId) {
  const disease = appData.diseases.find(d => d.id === diseaseId);
  if (!disease) return;
  
  const reportContent = generateReportContent(disease);
  const blob = new Blob([reportContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `disease_report_${disease.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  // Voice feedback
  if (voiceAssistant) {
    voiceAssistant.speak(`Disease report for ${disease.name} has been downloaded successfully.`);
  }
}

function generateReportContent(disease) {
  return `
DISEASE DETECTION REPORT
========================
Generated by pro.krishi AI Disease Detection System
Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}

DISEASE IDENTIFICATION
----------------------
Disease Name: ${disease.name}
Scientific Name: ${disease.scientificName || 'N/A'}
Crop Affected: ${disease.crop}
Disease Category: ${disease.category}
Severity Level: ${disease.severity}
Confidence Score: ${Math.round(disease.confidence * 100)}%

SYMPTOMS OBSERVED
-----------------
${disease.symptoms.map((symptom, index) => `${index + 1}. ${symptom}`).join('\n')}

AFFECTED PLANT PARTS
--------------------
${disease.affectedParts?.join(', ') || 'Various parts'}

ROOT CAUSES
-----------
${disease.causes?.map((cause, index) => `${index + 1}. ${cause}`).join('\n') || 'Multiple environmental factors'}

TREATMENT RECOMMENDATIONS
-------------------------
Immediate Action:
${disease.treatment}

Prevention Measures:
${disease.prevention?.map((measure, index) => `${index + 1}. ${measure}`).join('\n') || 'Follow general farm hygiene practices'}

ECONOMIC IMPACT
---------------
Potential Loss: ${disease.economicLoss || '10-30%'}

ADDITIONAL INFORMATION
----------------------
Weather Conditions Favoring Disease: ${disease.additionalInfo?.weatherConditions || 'Variable'}
Seasonal Pattern: ${disease.additionalInfo?.seasonality || 'Year-round risk'}
Geographical Distribution: ${disease.additionalInfo?.geographicalSpread || 'Varies by region'}

RECOMMENDATIONS
---------------
1. Implement immediate treatment measures as outlined above
2. Monitor crop regularly for spread of infection
3. Follow prevention measures to avoid reoccurrence
4. Consider consulting local agricultural extension officer
5. Keep records of treatment applied and results observed

DISCLAIMER
----------
This report is generated by AI-based analysis and should be used as a guide.
For critical decisions, please consult with local agricultural experts or extension officers.

---
Report generated by pro.krishi
Your Smart Farming Assistant
`;
}

function getExpertAdvice(diseaseId) {
  const disease = appData.diseases.find(d => d.id === diseaseId);
  if (!disease) return;
  
  // Simulate expert consultation
  const expertAdvice = generateExpertAdvice(disease);
  
  // Create modal or popup with expert advice
  showExpertAdviceModal(disease, expertAdvice);
  
  // Voice feedback
  if (voiceAssistant) {
    voiceAssistant.speak(`Expert consultation for ${disease.name} is now available. Please review the detailed recommendations.`);
  }
}

function generateExpertAdvice(disease) {
  const advice = {
    urgency: getUrgencyLevel(disease),
    detailedSteps: getDetailedTreatmentSteps(disease),
    monitoring: getMonitoringSchedule(disease),
    followUp: getFollowUpRecommendations(disease),
    alternativeTreatments: getAlternativeTreatments(disease),
    costEstimate: getTreatmentCostEstimate(disease)
  };
  
  return advice;
}

function getUrgencyLevel(disease) {
  if (disease.severity === 'High') {
    return {
      level: 'URGENT',
      timeframe: 'Treat within 24-48 hours',
      reason: 'High risk of rapid spread and significant crop loss'
    };
  } else if (disease.severity === 'Medium') {
    return {
      level: 'MODERATE',
      timeframe: 'Treat within 3-5 days',
      reason: 'Manageable if treated promptly'
    };
  } else {
    return {
      level: 'LOW',
      timeframe: 'Treat within 1-2 weeks',
      reason: 'Slow progression, preventive measures sufficient'
    };
  }
}

function getDetailedTreatmentSteps(disease) {
  const steps = [
    'Isolate affected plants to prevent spread',
    'Remove and destroy severely infected plant parts',
    disease.treatment,
    'Apply treatment during cooler hours (early morning or evening)',
    'Ensure proper coverage of all plant surfaces',
    'Maintain treatment schedule as recommended'
  ];
  
  if (disease.category === 'Fungal') {
    steps.push('Improve air circulation around plants');
    steps.push('Reduce humidity if possible');
  } else if (disease.category === 'Bacterial') {
    steps.push('Avoid overhead watering');
    steps.push('Disinfect tools between plants');
  } else if (disease.category === 'Viral') {
    steps.push('Control vector insects');
    steps.push('Remove infected plants completely');
  }
  
  return steps;
}

function getMonitoringSchedule(disease) {
  return {
    daily: 'Check for new symptoms and spread',
    weekly: 'Assess treatment effectiveness',
    monthly: 'Evaluate overall crop health',
    seasonal: 'Plan prevention for next season'
  };
}

function getFollowUpRecommendations(disease) {
  return [
    'Document treatment response with photos',
    'Keep records of all applications',
    'Monitor weather conditions',
    'Prepare for potential re-treatment',
    'Plan crop rotation if necessary',
    'Consider resistant varieties for next planting'
  ];
}

function getAlternativeTreatments(disease) {
  const alternatives = [];
  
  if (disease.category === 'Fungal') {
    alternatives.push('Organic neem oil treatment');
    alternatives.push('Baking soda spray (1 tsp per liter)');
    alternatives.push('Copper sulfate solution');
  } else if (disease.category === 'Bacterial') {
    alternatives.push('Copper-based bactericides');
    alternatives.push('Streptomycin spray');
    alternatives.push('Hot water treatment for seeds');
  } else if (disease.category === 'Insect Pest') {
    alternatives.push('Biological control agents');
    alternatives.push('Neem-based insecticides');
    alternatives.push('Pheromone traps');
  }
  
  alternatives.push('Integrated Pest Management (IPM) approach');
  alternatives.push('Organic farming methods');
  
  return alternatives;
}

function getTreatmentCostEstimate(disease) {
  // Simplified cost estimation
  let baseCost = 500; // Base cost in INR per acre
  
  if (disease.severity === 'High') baseCost *= 2;
  if (disease.category === 'Viral') baseCost *= 1.5; // More expensive to manage
  
  return {
    chemical: `₹${baseCost} - ₹${baseCost * 1.5} per acre`,
    organic: `₹${baseCost * 0.7} - ₹${baseCost * 1.2} per acre`,
    biological: `₹${baseCost * 1.2} - ₹${baseCost * 2} per acre`
  };
}

function showExpertAdviceModal(disease, advice) {
  // Create modal overlay
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';
  modalOverlay.innerHTML = `
    <div class="expert-advice-modal">
      <div class="modal-header">
        <h3>🧑‍🔬 Expert Consultation - ${disease.name}</h3>
        <button class="modal-close" onclick="closeExpertModal()">&times;</button>
      </div>
      
      <div class="modal-content">
        <div class="urgency-alert urgency-${advice.urgency.level.toLowerCase()}">
          <strong>Urgency Level: ${advice.urgency.level}</strong>
          <p>${advice.urgency.timeframe}</p>
          <small>${advice.urgency.reason}</small>
        </div>
        
        <div class="advice-section">
          <h4>🔧 Detailed Treatment Steps</h4>
          <ol class="treatment-steps">
            ${advice.detailedSteps.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>
        
        <div class="advice-section">
          <h4>📅 Monitoring Schedule</h4>
          <div class="monitoring-grid">
            <div class="monitoring-item">
              <strong>Daily:</strong> ${advice.monitoring.daily}
            </div>
            <div class="monitoring-item">
              <strong>Weekly:</strong> ${advice.monitoring.weekly}
            </div>
            <div class="monitoring-item">
              <strong>Monthly:</strong> ${advice.monitoring.monthly}
            </div>
            <div class="monitoring-item">
              <strong>Seasonal:</strong> ${advice.monitoring.seasonal}
            </div>
          </div>
        </div>
        
        <div class="advice-section">
          <h4>🔄 Alternative Treatments</h4>
          <ul class="alternatives-list">
            ${advice.alternativeTreatments.map(alt => `<li>${alt}</li>`).join('')}
          </ul>
        </div>
        
        <div class="advice-section">
          <h4>💰 Cost Estimates (per acre)</h4>
          <div class="cost-grid">
            <div class="cost-item">
              <strong>Chemical:</strong> ${advice.costEstimate.chemical}
            </div>
            <div class="cost-item">
              <strong>Organic:</strong> ${advice.costEstimate.organic}
            </div>
            <div class="cost-item">
              <strong>Biological:</strong> ${advice.costEstimate.biological}
            </div>
          </div>
        </div>
        
        <div class="advice-section">
          <h4>📋 Follow-up Recommendations</h4>
          <ul class="followup-list">
            ${advice.followUp.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
      
      <div class="modal-footer">
        <button class="btn btn--primary" onclick="speakExpertAdvice('${disease.id}')">
          🔊 Hear Expert Advice
        </button>
        <button class="btn btn--secondary" onclick="scheduleReminder('${disease.id}')">
          ⏰ Set Reminders
        </button>
        <button class="btn btn--outline" onclick="closeExpertModal()">
          Close
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modalOverlay);
  
  // Store advice data for later use
  window.currentExpertAdvice = advice;
  window.currentDiseaseId = disease.id;
}

function closeExpertModal() {
  const modal = document.querySelector('.modal-overlay');
  if (modal) {
    modal.remove();
  }
}

function speakExpertAdvice(diseaseId) {
  const disease = appData.diseases.find(d => d.id === diseaseId);
  const advice = window.currentExpertAdvice;
  
  if (!disease || !advice || !voiceAssistant) return;
  
  const expertAdviceText = `
    Expert consultation for ${disease.name}:
    
    Urgency level is ${advice.urgency.level}. ${advice.urgency.timeframe}.
    
    Treatment steps: ${advice.detailedSteps.slice(0, 5).join('. ')}.
    
    Cost estimates: Chemical treatment ranges from ${advice.costEstimate.chemical}, 
    organic treatment costs ${advice.costEstimate.organic}.
    
    Key monitoring points: Check daily for new symptoms, assess weekly for treatment effectiveness.
    
    Would you like more details on any specific aspect?
  `;
  
  voiceAssistant.speak(expertAdviceText);
}

function trackTreatment(diseaseId) {
  const disease = appData.diseases.find(d => d.id === diseaseId);
  if (!disease) return;
  
  // Create treatment tracking interface
  showTreatmentTracker(disease);
  
  if (voiceAssistant) {
    voiceAssistant.speak(`Treatment tracker for ${disease.name} is now active. You can record progress and schedule follow-ups.`);
  }
}

function showTreatmentTracker(disease) {
  // Create treatment tracking modal
  const trackerOverlay = document.createElement('div');
  trackerOverlay.className = 'modal-overlay';
  trackerOverlay.innerHTML = `
    <div class="treatment-tracker-modal">
      <div class="modal-header">
        <h3>📱 Treatment Tracker - ${disease.name}</h3>
        <button class="modal-close" onclick="closeTreatmentTracker()">&times;</button>
      </div>
      
      <div class="tracker-content">
        <div class="treatment-timeline">
          <h4>📅 Treatment Schedule</h4>
          <div class="timeline-items">
            <div class="timeline-item pending">
              <div class="timeline-date">Day 1 (Today)</div>
              <div class="timeline-action">Initial treatment application</div>
              <button class="btn btn--sm btn--success" onclick="markCompleted(this)">Mark Done</button>
            </div>
            <div class="timeline-item pending">
              <div class="timeline-date">Day 3</div>
              <div class="timeline-action">Monitor for improvement</div>
              <button class="btn btn--sm btn--secondary" onclick="setReminder(this)">Set Reminder</button>
            </div>
            <div class="timeline-item pending">
              <div class="timeline-date">Day 7</div>
              <div class="timeline-action">Second treatment if needed</div>
              <button class="btn btn--sm btn--secondary" onclick="setReminder(this)">Set Reminder</button>
            </div>
            <div class="timeline-item pending">
              <div class="timeline-date">Day 14</div>
              <div class="timeline-action">Assess treatment effectiveness</div>
              <button class="btn btn--sm btn--secondary" onclick="setReminder(this)">Set Reminder</button>
            </div>
          </div>
        </div>
        
        <div class="progress-logging">
          <h4>📊 Log Progress</h4>
          <div class="log-form">
            <div class="form-group">
              <label>Treatment Applied:</label>
              <input type="text" id="treatmentApplied" placeholder="e.g., Fungicide spray">
            </div>
            <div class="form-group">
              <label>Dosage/Amount:</label>
              <input type="text" id="dosageAmount" placeholder="e.g., 2ml per liter">
            </div>
            <div class="form-group">
              <label>Area Treated:</label>
              <input type="text" id="areaTreated" placeholder="e.g., 1 acre">
            </div>
            <div class="form-group">
              <label>Observations:</label>
              <textarea id="observations" placeholder="Note any changes, improvements, or concerns..."></textarea>
            </div>
            <button class="btn btn--primary" onclick="logTreatment('${disease.id}')">
              💾 Save Entry
            </button>
          </div>
        </div>
        
        <div class="treatment-history">
          <h4>📋 Treatment History</h4>
          <div id="treatmentLog" class="treatment-entries">
            <p class="no-entries">No treatments logged yet.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(trackerOverlay);
}

function closeTreatmentTracker() {
  const modal = document.querySelector('.treatment-tracker-modal')?.parentElement;
  if (modal) {
    modal.remove();
  }
}

function markCompleted(button) {
  const timelineItem = button.closest('.timeline-item');
  timelineItem.classList.remove('pending');
  timelineItem.classList.add('completed');
  button.textContent = '✓ Completed';
  button.disabled = true;
  
  if (voiceAssistant) {
    voiceAssistant.speak('Treatment milestone marked as completed.');
  }
}

function logTreatment(diseaseId) {
  const treatment = document.getElementById('treatmentApplied').value;
  const dosage = document.getElementById('dosageAmount').value;
  const area = document.getElementById('areaTreated').value;
  const observations = document.getElementById('observations').value;
  
  if (!treatment) {
    alert('Please enter the treatment applied.');
    return;
  }
  
  const logEntry = {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    treatment,
    dosage,
    area,
    observations,
    diseaseId
  };
  
  // Add to treatment log display
  const treatmentLog = document.getElementById('treatmentLog');
  const noEntries = treatmentLog.querySelector('.no-entries');
  if (noEntries) noEntries.remove();
  
  const entryElement = document.createElement('div');
  entryElement.className = 'treatment-entry';
  entryElement.innerHTML = `
    <div class="entry-header">
      <strong>${logEntry.date} at ${logEntry.time}</strong>
    </div>
    <div class="entry-details">
      <p><strong>Treatment:</strong> ${logEntry.treatment}</p>
      ${logEntry.dosage ? `<p><strong>Dosage:</strong> ${logEntry.dosage}</p>` : ''}
      ${logEntry.area ? `<p><strong>Area:</strong> ${logEntry.area}</p>` : ''}
      ${logEntry.observations ? `<p><strong>Notes:</strong> ${logEntry.observations}</p>` : ''}
    </div>
  `;
  
  treatmentLog.insertBefore(entryElement, treatmentLog.firstChild);
  
  // Clear form
  document.getElementById('treatmentApplied').value = '';
  document.getElementById('dosageAmount').value = '';
  document.getElementById('areaTreated').value = '';
  document.getElementById('observations').value = '';
  
  if (voiceAssistant) {
    voiceAssistant.speak('Treatment entry saved successfully. Keep monitoring your crop progress.');
  }
}

function scheduleReminder(diseaseId) {
  if (voiceAssistant) {
    voiceAssistant.speak('Reminder scheduling feature will notify you about follow-up treatments and monitoring schedules.');
  }
  
  // This would integrate with device notifications in a real app
  alert('Reminders set! You will be notified about upcoming monitoring and treatment schedules.');
}

// Crop Advisory functionality
function initializeCropAdvisory() {
  const stateSelector = document.getElementById('stateSelector');
  const cropSelector = document.getElementById('cropSelector');
  const getAdvisoryBtn = document.getElementById('getAdvisoryBtn');
  
  if (!stateSelector || !cropSelector) return;
  
  appData.states.forEach(state => {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    stateSelector.appendChild(option);
  });
  
  appData.crops.forEach(crop => {
    const option = document.createElement('option');
    option.value = crop;
    option.textContent = crop;
    cropSelector.appendChild(option);
  });
  
  if (getAdvisoryBtn) {
    getAdvisoryBtn.addEventListener('click', () => {
      if (stateSelector.value && cropSelector.value) {
        showMarketData();
        const advisory = `Showing market data for ${cropSelector.value} in ${stateSelector.value}`;
        if (voiceAssistant) {
          voiceAssistant.speak(advisory);
        }
      }
    });
  }
}

function showMarketData() {
  const marketData = document.getElementById('marketData');
  const currentPrice = document.getElementById('currentPrice');
  const priceChange = document.getElementById('priceChange');
  
  if (!marketData) return;
  
  const basePrice = Math.floor(Math.random() * 3000) + 1000;
  const change = (Math.random() - 0.5) * 20;
  
  currentPrice.textContent = `₹${basePrice.toLocaleString()}`;
  priceChange.textContent = `${change > 0 ? '+' : ''}${change.toFixed(1)}%`;
  priceChange.className = `price-change ${change > 0 ? 'positive' : 'negative'}`;
  
  marketData.classList.add('active');
}

// Smart Farming functionality
function initializeSmartFarming() {
  const scaleCards = document.querySelectorAll('.scale-card');
  
  scaleCards.forEach(card => {
    card.addEventListener('click', () => {
      scaleCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      
      const scale = card.dataset.scale;
      const scaleName = card.querySelector('h4').textContent;
      if (voiceAssistant) {
        voiceAssistant.speak(`Selected ${scaleName} farming. Showing relevant techniques.`);
      }
    });
  });
}

// Marketplace functionality  
function initializeMarketplace() {
  const categoryFilter = document.getElementById('categoryFilter');
  const sortFilter = document.getElementById('sortFilter');
  
  if (!categoryFilter || !sortFilter) return;
  
  categoryFilter.addEventListener('change', filterMarketplace);
  sortFilter.addEventListener('change', filterMarketplace);
  
  renderMarketplace(appData.marketplaceItems);
}

function filterMarketplace() {
  // Simple filtering implementation
  renderMarketplace(appData.marketplaceItems);
}

function renderMarketplace(items) {
  const marketplaceGrid = document.getElementById('marketplaceGrid');
  if (!marketplaceGrid) return;
  
  // Keep existing items for simplicity
}

// Voice AI Chatbot initialization
function initializeVoiceAI() {
  console.log('Initializing Advanced Voice AI Chatbot...');
  
  // Initialize the voice AI system
  voiceAIChatbot.initialize().then(() => {
    console.log('✅ Voice AI Chatbot ready');
    
    // Setup enhanced voice controls
    setupAdvancedVoiceControls();
    
  }).catch(error => {
    console.error('❌ Voice AI Chatbot initialization failed:', error);
  });
}

function setupAdvancedVoiceControls() {
  // Enhanced microphone button
  const micBtn = document.getElementById('micBtn');
  if (micBtn) {
    micBtn.addEventListener('click', async () => {
      if (!voiceAIChatbot.isListening) {
        await voiceAIChatbot.startListening();
      }
    });
  }
  
  // Stop button
  const stopBtn = document.getElementById('stopBtn');
  if (stopBtn) {
    stopBtn.addEventListener('click', () => {
      voiceAIChatbot.stopListening();
    });
  }
  
  // Stop speaking button
  const stopSpeakingBtn = document.getElementById('stopSpeakingBtn');
  if (stopSpeakingBtn) {
    stopSpeakingBtn.addEventListener('click', () => {
      voiceAIChatbot.stopSpeaking();
      
      // Also stop any Kishan voice
      const kishanStopBtn = document.getElementById('kishanStopBtn');
      if (kishanStopBtn) {
        kishanStopBtn.classList.add('hidden');
      }
    });
  }
  
  // Kishan stop button
  const kishanStopBtn = document.getElementById('kishanStopBtn');
  if (kishanStopBtn) {
    kishanStopBtn.addEventListener('click', () => {
      voiceAIChatbot.stopSpeaking();
      kishanStopBtn.classList.add('hidden');
    });
  }
  
  // Voice language selector
  const voiceLanguageSelector = document.getElementById('voiceLanguageSelector');
  if (voiceLanguageSelector) {
    voiceLanguageSelector.addEventListener('change', (e) => {
      const newLang = e.target.value;
      voiceAIChatbot.changeLanguage(newLang);
      
      // Also update app state
      appState.currentLanguage = newLang;
    });
  }
  
  // Speech rate control
  const speechRate = document.getElementById('speechRate');
  const rateValue = document.getElementById('rateValue');
  if (speechRate && rateValue) {
    speechRate.addEventListener('input', (e) => {
      appState.speechRate = parseFloat(e.target.value);
      rateValue.textContent = `${appState.speechRate}x`;
    });
  }
  
  // Volume control
  const volumeControl = document.getElementById('volumeControl');
  const volumeValue = document.getElementById('volumeValue');
  if (volumeControl && volumeValue) {
    volumeControl.addEventListener('input', (e) => {
      appState.speechVolume = parseFloat(e.target.value);
      volumeValue.textContent = `${Math.round(appState.speechVolume * 100)}%`;
    });
  }
  
  // Continuous mode toggle
  const continuousMode = document.getElementById('continuousMode');
  if (continuousMode) {
    continuousMode.addEventListener('change', (e) => {
      appState.continuousMode = e.target.checked;
      
      if (appState.continuousMode && !voiceAIChatbot.isListening) {
        voiceAIChatbot.startListening();
      } else if (!appState.continuousMode && voiceAIChatbot.isListening) {
        voiceAIChatbot.stopListening();
      }
    });
  }
  
  // Voice input button in chat
  const voiceInputBtn = document.getElementById('voiceInputBtn');
  if (voiceInputBtn) {
    voiceInputBtn.addEventListener('click', async () => {
      if (!voiceAIChatbot.isListening) {
        await voiceAIChatbot.startListening();
      } else {
        voiceAIChatbot.stopListening();
      }
    });
  }
  
  // Quick command buttons
  document.querySelectorAll('.command-card').forEach(card => {
    card.addEventListener('click', async () => {
      const command = card.dataset.command;
      if (command && voiceAIChatbot) {
        await voiceAIChatbot.processVoiceInput(command);
      }
    });
  });
  
  // Speak message buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('speak-message-btn')) {
      const message = e.target.dataset.message;
      if (message && voiceAIChatbot) {
        voiceAIChatbot.speakResponse(message);
      }
    }
  });
  
  console.log('✅ Advanced Voice Controls initialized');
}

// Enhanced Chat functionality
function initializeChat() {
  const chatInput = document.getElementById('chatInput');
  const sendButton = document.getElementById('sendMessage');
  const quickQuestions = document.querySelectorAll('.question-btn');
  
  if (sendButton && chatInput) {
    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }
  
  quickQuestions.forEach(button => {
    button.addEventListener('click', () => {
      const question = button.dataset.question || button.textContent;
      if (voiceAssistant) {
        voiceAssistant.processVoiceInput(question);
      }
    });
  });
  
  // Speak message buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('speak-message-btn')) {
      const message = e.target.dataset.message;
      if (message && voiceAssistant) {
        voiceAssistant.speak(message);
      }
    }
  });
}

// Weather functionality
function initializeWeather() {
  console.log('Initializing weather functionality...');
  
  // Request location permission and get initial weather
  requestLocationAndWeather();
  
  // Set up periodic weather updates (every 10 minutes)
  setInterval(() => {
    if (appState.userLocation) {
      updateWeatherData();
    }
  }, 10 * 60 * 1000);
  
  // Add weather-related voice commands
  addWeatherVoiceCommands();
}

async function requestLocationAndWeather() {
  try {
    showWeatherStatus('Getting your location...', 'loading');
    
    // Get current location
    const location = await locationService.getCurrentLocation();
    appState.userLocation = location;
    
    // Get location details
    const locationInfo = await locationService.reverseGeocode(
      location.latitude, 
      location.longitude
    );
    appState.userLocation.info = locationInfo;
    
    showWeatherStatus('Getting weather data...', 'loading');
    
    // Get current weather
    await updateWeatherData();
    
    console.log('Location and weather initialized successfully');
    
  } catch (error) {
    console.error('Error getting location or weather:', error);
    appState.locationError = error.message;
    showWeatherStatus(`Location error: ${error.message}`, 'error');
    
    // Try to get weather for a default location (Delhi, India)
    try {
      await getWeatherForCity('Delhi, India');
      showWeatherStatus('Using default location: Delhi, India', 'warning');
    } catch (defaultError) {
      showWeatherStatus('Weather service unavailable', 'error');
    }
  }
}

async function updateWeatherData() {
  if (!appState.userLocation) return;
  
  try {
    const { latitude, longitude } = appState.userLocation;
    
    // Get current weather
    const currentWeather = await weatherService.getCurrentWeather(latitude, longitude);
    appState.currentWeather = currentWeather;
    
    // Get forecast
    const forecast = await weatherService.getWeatherForecast(latitude, longitude, 5);
    appState.weatherForecast = forecast;
    
    // Update UI
    displayWeatherData(currentWeather, forecast);
    
    // Update status
    const temp = Math.round(currentWeather.main.temp);
    const condition = currentWeather.weather[0].description;
    showWeatherStatus(`${temp}°C, ${condition}`, 'success');
    
    console.log('Weather data updated successfully');
    
  } catch (error) {
    console.error('Error updating weather data:', error);
    showWeatherStatus('Weather update failed', 'error');
  }
}

async function getWeatherForCity(cityName) {
  try {
    // Geocode the city name
    const location = await locationService.geocodeAddress(cityName);
    
    // Get weather data
    const currentWeather = await weatherService.getCurrentWeather(
      location.latitude, 
      location.longitude
    );
    const forecast = await weatherService.getWeatherForecast(
      location.latitude, 
      location.longitude, 
      5
    );
    
    // Update state
    appState.currentWeather = currentWeather;
    appState.weatherForecast = forecast;
    
    // Update UI
    displayWeatherData(currentWeather, forecast);
    
    return { currentWeather, forecast };
    
  } catch (error) {
    console.error('Error getting weather for city:', error);
    throw error;
  }
}

function displayWeatherData(currentWeather, forecast) {
  // Update weather cards in the UI
  updateWeatherCards(currentWeather);
  updateForecastCards(forecast);
  updateFarmingAdvice(currentWeather);
}

function updateWeatherCards(weatherData) {
  const formatted = weatherService.formatWeatherData(weatherData);
  
  // Update current weather display
  const weatherCard = document.getElementById('currentWeatherCard');
  if (weatherCard) {
    weatherCard.innerHTML = `
      <div class="weather-card">
        <div class="weather-header">
          <h3>🌤️ Current Weather</h3>
          <span class="weather-location">${formatted.location}</span>
        </div>
        <div class="weather-main">
          <div class="temperature">${formatted.temperature}°C</div>
          <div class="condition">${formatted.description}</div>
        </div>
        <div class="weather-details">
          <div class="detail-item">
            <span class="label">Feels like:</span>
            <span class="value">${formatted.feelsLike}°C</span>
          </div>
          <div class="detail-item">
            <span class="label">Humidity:</span>
            <span class="value">${formatted.humidity}%</span>
          </div>
          <div class="detail-item">
            <span class="label">Wind:</span>
            <span class="value">${formatted.windSpeed} m/s</span>
          </div>
          <div class="detail-item">
            <span class="label">Pressure:</span>
            <span class="value">${formatted.pressure} hPa</span>
          </div>
        </div>
        <div class="weather-timestamp">
          Updated: ${formatted.timestamp.toLocaleTimeString()}
        </div>
      </div>
    `;
  }
}

function updateForecastCards(forecastData) {
  const forecastContainer = document.getElementById('weatherForecast');
  if (!forecastContainer || !forecastData.list) return;
  
  // Get daily forecasts (every 8th item = 24 hours)
  const dailyForecasts = forecastData.list.filter((item, index) => index % 8 === 0).slice(0, 5);
  
  const forecastHTML = dailyForecasts.map(item => {
    const date = new Date(item.dt * 1000);
    const temp = Math.round(item.main.temp);
    const condition = item.weather[0].description;
    const icon = item.weather[0].icon;
    
    return `
      <div class="forecast-card">
        <div class="forecast-date">${date.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric' })}</div>
        <div class="forecast-icon">🌤️</div>
        <div class="forecast-temp">${temp}°C</div>
        <div class="forecast-condition">${condition}</div>
      </div>
    `;
  }).join('');
  
  forecastContainer.innerHTML = `
    <h3>5-Day Forecast</h3>
    <div class="forecast-grid">
      ${forecastHTML}
    </div>
  `;
}

function updateFarmingAdvice(weatherData) {
  const advice = weatherService.getFarmingAdvice(weatherData);
  const adviceContainer = document.getElementById('farmingAdvice');
  
  if (adviceContainer) {
    const adviceHTML = advice.map(tip => `
      <div class="advice-item">
        <span class="advice-text">${tip}</span>
      </div>
    `).join('');
    
    adviceContainer.innerHTML = `
      <h3>🌱 Farming Advice</h3>
      <div class="advice-list">
        ${adviceHTML}
      </div>
    `;
  }
}

function showWeatherStatus(message, type = 'info') {
  const statusElement = document.getElementById('weatherStatus');
  if (statusElement) {
    statusElement.textContent = message;
    statusElement.className = `weather-status ${type}`;
  }
  console.log(`Weather Status (${type}):`, message);
}

function addWeatherVoiceCommands() {
  // Add weather-related responses to the voice assistant
  const originalProcessVoiceInput = voiceAssistant.processVoiceInput.bind(voiceAssistant);
  
  voiceAssistant.processVoiceInput = async function(text) {
    const lowerText = text.toLowerCase();
    
    // Check for weather-related queries
    if (lowerText.includes('weather') || lowerText.includes('मौसम') || lowerText.includes('climate')) {
      await handleWeatherQuery(text);
      return;
    }
    
    // Check for location-related queries
    if (lowerText.includes('location') || lowerText.includes('स्थान') || lowerText.includes('where am i')) {
      await handleLocationQuery();
      return;
    }
    
    // Check for specific city weather
    const cityMatch = lowerText.match(/weather (?:in|for) (.+?)(?:\?|$)/);
    if (cityMatch) {
      await handleCityWeatherQuery(cityMatch[1]);
      return;
    }
    
    // Continue with original processing
    return originalProcessVoiceInput(text);
  };
}

async function handleWeatherQuery(query) {
  try {
    addMessage(query, 'user');
    
    if (!appState.currentWeather) {
      addMessage('Getting current weather data...', 'bot');
      await updateWeatherData();
    }
    
    if (appState.currentWeather) {
      const formatted = weatherService.formatWeatherData(appState.currentWeather);
      const advice = weatherService.getFarmingAdvice(appState.currentWeather);
      
      const response = `🌤️ **Current Weather in ${formatted.location}:**
      
**Temperature:** ${formatted.temperature}°C (feels like ${formatted.feelsLike}°C)
**Condition:** ${formatted.description}
**Humidity:** ${formatted.humidity}%
**Wind Speed:** ${formatted.windSpeed} m/s
**Pressure:** ${formatted.pressure} hPa

**🌱 Farming Advice:**
${advice.join('\n')}`;
      
      addMessage(response, 'bot');
      appState.lastBotMessage = response;
      
      // Auto-speak if continuous mode
      if (appState.continuousMode && voiceAssistant) {
        setTimeout(() => voiceAssistant.speak(response), 500);
      }
    } else {
      addMessage('Sorry, I could not get the current weather information. Please try again.', 'bot');
    }
    
  } catch (error) {
    console.error('Error handling weather query:', error);
    addMessage('There was an error getting weather information. Please try again later.', 'bot');
  }
}

async function handleLocationQuery() {
  try {
    addMessage('Where am I?', 'user');
    
    if (appState.userLocation && appState.userLocation.info) {
      const location = appState.userLocation.info;
      const response = `📍 **Your Current Location:**

**Address:** ${location.formattedAddress}
**City:** ${location.components.city || 'Unknown'}
**State:** ${location.components.state || 'Unknown'}
**Country:** ${location.components.country || 'Unknown'}

**Coordinates:** ${appState.userLocation.latitude.toFixed(4)}, ${appState.userLocation.longitude.toFixed(4)}`;

      addMessage(response, 'bot');
      appState.lastBotMessage = response;
    } else {
      addMessage('I don\'t have your location information. Please allow location access to get weather and location-based farming advice.', 'bot');
    }
    
  } catch (error) {
    console.error('Error handling location query:', error);
    addMessage('There was an error getting your location. Please try again.', 'bot');
  }
}

async function handleCityWeatherQuery(cityName) {
  try {
    addMessage(`Weather for ${cityName}`, 'user');
    addMessage(`Getting weather data for ${cityName}...`, 'bot');
    
    const { currentWeather } = await getWeatherForCity(cityName);
    const formatted = weatherService.formatWeatherData(currentWeather);
    const advice = weatherService.getFarmingAdvice(currentWeather);
    
    const response = `🌤️ **Weather in ${formatted.location}, ${formatted.country}:**
    
**Temperature:** ${formatted.temperature}°C (feels like ${formatted.feelsLike}°C)
**Condition:** ${formatted.description}
**Humidity:** ${formatted.humidity}%
**Wind Speed:** ${formatted.windSpeed} m/s

**🌱 Farming Advice:**
${advice.join('\n')}`;
    
    addMessage(response, 'bot');
    appState.lastBotMessage = response;
    
  } catch (error) {
    console.error('Error getting city weather:', error);
    addMessage(`Sorry, I could not get weather information for ${cityName}. Please check the city name and try again.`, 'bot');
  }
}

function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  const message = chatInput.value.trim();
  
  if (!message) return;
  
  if (voiceAssistant) {
    voiceAssistant.processVoiceInput(message);
  }
  chatInput.value = '';
}

function addMessage(text, sender) {
  const chatMessages = document.getElementById('chatMessages');
  if (!chatMessages) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  
  const avatar = sender === 'bot' ? '🤖' : '👨‍🌾';
  const time = new Date().toLocaleTimeString('en-IN', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  const speakBtn = sender === 'bot' ? 
    `<button class="speak-message-btn" data-message="${text.replace(/"/g, '&quot;')}">🔊</button>` : '';
  
  messageDiv.innerHTML = `
    <div class="message-avatar">${avatar}</div>
    <div class="message-content">
      <p>${text}</p>
      <span class="message-time">${time}</span>
      ${speakBtn}
    </div>
  `;
  
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Utility functions
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0
  }).format(amount);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Error handling
window.addEventListener('error', (event) => {
  console.error('Application error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    VoiceAssistant,
    appData,
    translations,
    handleLanguageChange,
    showSection,
    addMessage
  };
}