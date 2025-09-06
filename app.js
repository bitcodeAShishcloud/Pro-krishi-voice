// pro.krishi - Enhanced Voice Assistant Agricultural Platform

// Application configuration
const APP_CONFIG = {
  apiKey: "AIzaSyBYIU2O3sXPBdaLp_YJ-UyTvlyS5i4gwkQ",
  apiEndpoint: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
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
  lastBotMessage: ''
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

// DOM elements
let languageSelector, navButtons, sections;

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
  
  // Setup event listeners
  setupEventListeners();
  
  // Initialize components
  initializeLanguageSelector();
  initializeNavigation();
  initializeVoiceControls();
  initializeDiseaseDetection();
  initializeCropAdvisory();
  initializeSmartFarming();
  initializeMarketplace();
  initializeChat();
  
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

// Enhanced AI Chat Assistant functionality
function initializeChat() {
  const chatInput = document.getElementById('chatInput');
  const sendButton = document.getElementById('sendMessage');
  const voiceInputBtn = document.getElementById('voiceInputBtn');
  const chatMessages = document.getElementById('chatMessages');
  const quickQuestions = document.querySelectorAll('.question-btn');
  const commandCards = document.querySelectorAll('.command-card');
  
  console.log('Initializing AI Chat Assistant...');
  
  // Enhanced send message functionality
  if (sendButton && chatInput) {
    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
    
    // Auto-resize textarea functionality
    chatInput.addEventListener('input', () => {
      if (chatInput.value.trim()) {
        sendButton.disabled = false;
        sendButton.classList.add('active');
      } else {
        sendButton.disabled = true;
        sendButton.classList.remove('active');
      }
    });
  }
  
  // Enhanced voice input button
  if (voiceInputBtn) {
    voiceInputBtn.addEventListener('click', () => {
      if (!voiceAssistant) {
        showChatError('Voice assistant not available');
        return;
      }
      
      if (appState.isListening) {
        voiceAssistant.stopListening();
        voiceInputBtn.classList.remove('listening');
        voiceInputBtn.innerHTML = '🎤';
        voiceInputBtn.title = 'Start Voice Input';
      } else {
        voiceAssistant.startListening();
        voiceInputBtn.classList.add('listening');
        voiceInputBtn.innerHTML = '🔴';
        voiceInputBtn.title = 'Stop Voice Input';
      }
    });
  }
  
  // Enhanced quick question buttons
  quickQuestions.forEach(button => {
    button.addEventListener('click', () => {
      const question = button.dataset.question || button.textContent;
      console.log('Quick question clicked:', question);
      
      // Visual feedback
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
      
      // Add user message and process
      addMessage(question, 'user');
      if (voiceAssistant) {
        voiceAssistant.processVoiceInput(question);
      } else {
        handleFallbackResponse(question);
      }
    });
  });
  
  // Enhanced command cards
  commandCards.forEach(card => {
    card.addEventListener('click', () => {
      const command = card.dataset.command;
      if (command) {
        console.log('Command card clicked:', command);
        
        // Visual feedback
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
          card.style.transform = '';
        }, 150);
        
        // Add user message and process
        addMessage(command, 'user');
        if (voiceAssistant) {
          voiceAssistant.processVoiceInput(command);
        } else {
          handleFallbackResponse(command);
        }
      }
    });
  });
  
  // Enhanced speak message buttons with event delegation
  if (chatMessages) {
    chatMessages.addEventListener('click', (e) => {
      if (e.target.classList.contains('speak-message-btn')) {
        const message = e.target.dataset.message;
        if (message && voiceAssistant) {
          // Visual feedback
          e.target.style.background = 'var(--color-primary)';
          e.target.style.color = 'white';
          setTimeout(() => {
            e.target.style.background = '';
            e.target.style.color = '';
          }, 500);
          
          voiceAssistant.speak(message);
        } else {
          showChatError('Speech synthesis not available');
        }
      }
      
      // Copy message functionality
      if (e.target.classList.contains('copy-message-btn')) {
        const message = e.target.dataset.message;
        navigator.clipboard.writeText(message).then(() => {
          showChatNotification('Message copied to clipboard');
        }).catch(() => {
          showChatError('Failed to copy message');
        });
      }
      
      // Delete message functionality
      if (e.target.classList.contains('delete-message-btn')) {
        const messageElement = e.target.closest('.message');
        if (messageElement && confirm('Delete this message?')) {
          messageElement.remove();
          updateConversationHistory();
        }
      }
    });
  }
  
  // Initialize chat with welcome message
  initializeChatWelcome();
  
  // Auto-scroll functionality
  if (chatMessages) {
    const observer = new MutationObserver(() => {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    });
    observer.observe(chatMessages, { childList: true });
  }
  
  console.log('AI Chat Assistant initialized successfully');
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