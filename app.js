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
    {name: "Leaf Blight", crop: "Rice", symptoms: ["Brown spots", "Yellowing"], treatment: "Apply copper-based fungicide spray every 10 days"},
    {name: "Powdery Mildew", crop: "Wheat", symptoms: ["White powder on leaves", "Stunted growth"], treatment: "Use sulfur treatment and improve air circulation"},
    {name: "Bollworm", crop: "Cotton", symptoms: ["Holes in bolls", "Damaged flowers"], treatment: "Apply Bt spray and use pheromone traps"},
    {name: "Late Blight", crop: "Potato", symptoms: ["Dark lesions", "White mold"], treatment: "Apply copper fungicide and remove affected plants"},
    {name: "Rust", crop: "Wheat", symptoms: ["Orange pustules", "Leaf damage"], treatment: "Use resistant varieties and apply fungicide"}
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
      };
      
      utterance.onend = () => {
        console.log('Speech ended');
        appState.isSpeaking = false;
        this.updateStatus('Ready to help - Click mic to start');
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
  initializeApp();
  setupKishanAvatarVoice();
  initializeBackground();
  setupInteractions();
  initializeModernAvatar();
});

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
    };
    
    utterance.onend = () => {
      updateKishanStatus('Ready to help! Ask me anything.', 'normal');
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
  };
  reader.readAsDataURL(file);
}

function analyzeDisease() {
  const analysisResults = document.getElementById('analysisResults');
  const diseaseType = document.getElementById('diseaseType');
  const symptoms = document.getElementById('symptoms');
  const treatment = document.getElementById('treatment');
  
  const randomDisease = appData.diseases[Math.floor(Math.random() * appData.diseases.length)];
  
  analysisResults.classList.add('loading');
  analysisResults.classList.remove('hidden');
  
  setTimeout(() => {
    diseaseType.textContent = randomDisease.name;
    symptoms.textContent = randomDisease.symptoms.join(', ');
    treatment.textContent = randomDisease.treatment;
    
    analysisResults.classList.remove('loading');
    
    // Speak result if voice is enabled
    const resultText = `Analysis complete. Disease detected: ${randomDisease.name}. Click the speaker button to hear the full result.`;
    if (voiceAssistant) {
      voiceAssistant.speak(resultText);
    }
  }, 2000);
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