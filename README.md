<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>finTrack – Your Ultimate Finance Tracker</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- External Badges (Dynamic) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
  <style>
    body {
      background: #f0f4f8;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #333;
      padding: 2rem;
      text-align: center;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    .badge-container {
      margin: 1rem 0;
    }
    .badge-container img {
      margin: 0 0.5rem;
      transition: transform 0.3s;
    }
    .badge-container img:hover {
      transform: scale(1.2);
    }
    .section {
      background: #fff;
      border-radius: 8px;
      padding: 1.5rem;
      margin: 1rem auto;
      max-width: 800px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .features li, .tech li {
      text-align: left;
      margin: 0.5rem 0;
      font-size: 1.1rem;
    }
    .moving-logos {
      margin: 2rem auto;
      overflow: hidden;
      white-space: nowrap;
    }
    .moving-logos img {
      height: 50px;
      margin: 0 1rem;
      animation: slide 20s linear infinite;
    }
    @keyframes slide {
      from { transform: translateX(100%); }
      to { transform: translateX(-100%); }
    }
    .footer {
      margin-top: 2rem;
      font-size: 0.9rem;
      color: #777;
    }
  </style>
</head>
<body>

  <!-- Dynamic Title -->
  <h1 class="animate__animated animate__fadeInDown">finTrack</h1>
  <p class="animate__animated animate__fadeInUp">Struggling to track your finances across multiple bank accounts? Meet <strong>finTrack</strong> – the easiest way to track your income and expenses.</p>

  <!-- Dynamic Badges -->
  <div class="badge-container animate__animated animate__bounceIn">
    <img src="https://img.shields.io/badge/Seamless%20Access-Google%20OAuth-brightgreen?style=for-the-badge" alt="Seamless Access Badge">
    <img src="https://img.shields.io/badge/User-Friendly-Experience-blue?style=for-the-badge" alt="User-Friendly Experience Badge">
    <img src="https://img.shields.io/badge/Global-Compatibility-orange?style=for-the-badge" alt="Global Compatibility Badge">
    <img src="https://img.shields.io/badge/One--Click%20Export-purple?style=for-the-badge" alt="One-Click Export Badge">
    <img src="https://img.shields.io/badge/Security-Enabled-red?style=for-the-badge" alt="Security Badge">
  </div>

  <!-- Features Section -->
  <div class="section animate__animated animate__fadeInUp">
    <h2>Why Choose finTrack?</h2>
    <ul class="features">
      <li>✔️ <strong>Seamless Access</strong> – Sign up or log in with your Google account in seconds.</li>
      <li>✔️ <strong>User-Friendly Experience</strong> – Navigate effortlessly with a modular design tailored for different financial tasks.</li>
      <li>✔️ <strong>Global Compatibility</strong> – Customize currency settings to fit your needs, no matter where you are.</li>
      <li>✔️ <strong>One-Click Export</strong> – Export last year's data to Excel with a single click to start fresh.</li>
      <li>✔️ <strong>Complete Control</strong> – Add bank accounts, transfer funds, and track transactions with transparency and security.</li>
      <li>✔️ <strong>Dynamic Analysis</strong> – Visualize your income & expense with interactive line and pie charts.</li>
      <li>✔️ <strong>Dark Mode</strong> – Toggle effortlessly between light and dark themes.</li>
    </ul>
  </div>

  <!-- Technology Breakdown Section -->
  <div class="section animate__animated animate__fadeInUp">
    <h2>Project Breakdown</h2>
    <h3>Frontend Mastery 🚀</h3>
    <ul class="tech">
      <li><strong>React</strong> paired with <strong>Vite</strong> ensures lightning-fast builds and unbeatable flexibility.</li>
      <li><strong>TailwindCSS</strong> creates a clean, responsive interface without the overhead.</li>
      <li><strong>Zustand</strong> streamlines state management for a lean, efficient experience.</li>
    </ul>
    <h3>Backend ⚙️</h3>
    <ul class="tech">
      <li><strong>Express</strong> on Node.js delivers robust and scalable APIs.</li>
      <li><strong>PostgreSQL</strong> ensures reliable and precise data storage for heavy-duty transactions.</li>
    </ul>
    <h3>Security & Real-Time Edge 🔒</h3>
    <ul class="tech">
      <li>JWT provides ironclad authentication and secure sessions.</li>
      <li><strong>Firebase</strong> powers real-time features and streamlines backend services.</li>
    </ul>
  </div>

  <!-- Animated Moving Logos -->
  <div class="moving-logos">
    <!-- Replace these src URLs with your actual logo URLs or GIFs -->
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo">
    <img src="https://vitejs.dev/logo.svg" alt="Vite Logo">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="TailwindCSS Logo">
    <img src="https://raw.githubusercontent.com/pmndrs/zustand/main/logo.png" alt="Zustand Logo">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express Logo">
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL Logo">
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Firebase_Logo.svg" alt="Firebase Logo">
  </div>

  <!-- Footer -->
  <div class="footer animate__animated animate__fadeInUp">
    <p>Made with ❤️ by [Your Name]. Stay tuned for more dynamic updates!</p>
  </div>
  
</body>
</html>
