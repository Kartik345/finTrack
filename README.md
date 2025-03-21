<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>finTrack – Your Ultimate Finance Tracker</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;600;700&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
    <style>
        body {
            background: #f0f4f8;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333;
            padding: 2rem;
            text-align: center;
            margin: 0; /* Reset default body margin */
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 0.5rem;
            color: #2c3e50; /* Darker heading color */
        }
        p {
            font-size: 1.1rem;
            color: #666; /* Slightly darker paragraph color */
            margin-bottom: 2rem;
        }
        .badge-container {
            margin: 1rem 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .badge-container img {
            margin: 0.5rem;
            height: 30px; /* Consistent badge height */
        }
        .section {
            background: #fff;
            border-radius: 12px; /* Slightly more rounded corners */
            padding: 2rem; /* Increased padding */
            margin: 2rem auto; /* Increased margin */
            max-width: 800px;
            box-shadow: 0 6px 15px rgba(0,0,0,0.08); /* Subtle shadow */
            text-align: left; /* Align text to left within sections */
        }
        .section h2 {
            font-size: 2rem;
            color: #2c3e50;
            margin-bottom: 1.5rem;
            text-align: center; /* Center section titles */
        }
        .features li, .tech li {
            margin: 0.75rem 0; /* Increased vertical spacing */
            font-size: 1.1rem;
            line-height: 1.7; /* Improved line height for readability */
            color: #444; /* Slightly darker list text */
        }
        .features li strong, .tech li strong {
            color: #2c3e50; /* Strong font color */
        }
        .moving-logos {
            margin: 2rem auto;
            overflow: hidden;
            white-space: nowrap;
            padding: 1rem 0; /* Add padding for visual space */
            border-top: 1px solid #eee; /* Add subtle borders */
            border-bottom: 1px solid #eee;
        }
        .moving-logos img {
            height: 60px; /* Increased logo height */
            margin: 0 1.5rem; /* Increased horizontal margin */
            display: inline-block; /* Ensure logos are treated as inline elements */
        }
        .footer {
            margin-top: 3rem;
            font-size: 0.9rem;
            color: #888; /* Lighter footer text */
            text-align: center;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            body {
                padding: 1rem;
            }
            h1 {
                font-size: 2.5rem;
            }
            .section {
                padding: 1.5rem;
                margin: 1.5rem auto;
            }
            .moving-logos img {
                height: 50px; /* Adjust logo height for smaller screens */
                margin: 0 1rem;
            }
            .badge-container img {
                height: 25px;
            }
        }

        /* Animation Keyframes */
        @keyframes slide {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
        }

        /* Apply animation to moving logos */
        .moving-logos {
            animation: slide 30s linear infinite; /* Increased duration for smoother animation */
        }
    </style>
</head>
<body>

    <h1>finTrack</h1>
    <p>Struggling to track your finances across multiple bank accounts? Meet <strong>finTrack</strong> – the easiest way to track your income and expenses.</p>

    <div class="badge-container">
        <img src="https://img.shields.io/badge/Seamless%20Access-Google%20OAuth-brightgreen?style=for-the-badge" alt="Seamless Access Badge">
        <img src="https://img.shields.io/badge/User-Friendly-Experience-blue?style=for-the-badge" alt="User-Friendly Experience Badge">
        <img src="https://img.shields.io/badge/Global-Compatibility-orange?style=for-the-badge" alt="Global Compatibility Badge">
        <img src="https://img.shields.io/badge/One--Click%20Export-purple?style=for-the-badge" alt="One-Click Export Badge">
        <img src="https://img.shields.io/badge/Security-Enabled-red?style=for-the-badge" alt="Security Badge">
    </div>

    <div class="section">
        <h2>Why Choose finTrack?</h2>
        <ul class="features">
            <li><strong>Seamless Access</strong> – Sign up or log in with your Google account in seconds.</li>
            <li><strong>User-Friendly Experience</strong> – Navigate effortlessly with a modular design tailored for different financial tasks.</li>
            <li><strong>Global Compatibility</strong> – Customize currency settings to fit your needs, no matter where you are.</li>
            <li><strong>One-Click Export</strong> – Export last year's data to Excel with a single click to start fresh.</li>
            <li><strong>Complete Control</strong> – Add bank accounts, transfer funds, and track transactions with transparency and security.</li>
            <li><strong>Dynamic Analysis</strong> – Visualize your income & expense with interactive line and pie charts.</li>
            <li><strong>Dark Mode</strong> – Toggle effortlessly between light and dark themes.</li>
        </ul>
    </div>

    <div class="section">
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

    <div class="moving-logos">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo">
        <img src="https://vitejs.dev/logo.svg" alt="Vite Logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="TailwindCSS Logo">
        <img src="https://raw.githubusercontent.com/pmndrs/zustand/main/logo.png" alt="Zustand Logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express Logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL Logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Firebase_Logo.svg" alt="Firebase Logo">
    </div>

    <div class="footer">
        <p>Made with ❤️ by [Your Name]. Stay tuned for more dynamic updates!</p>
    </div>

    <script>
        //<![CDATA[
        document.addEventListener('DOMContentLoaded', () => {
            // ---  Dynamic Animations ---

            // 1. Title Animation (Using anime.js)
            anime({
                targets: 'h1',
                translateY: [-50, 0],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeInOutQuad'
            });

            // 2. Subtitle Animation
            anime({
                targets: 'p',
                opacity: [0, 1],
                delay: 500,
                duration: 1000,
                easing: 'easeInOutQuad'
            });

            // 3. Badge Container Animation
            anime({
                targets: '.badge-container img',
                scale: [0.8, 1],
                opacity: [0, 1],
                delay: anime.stagger(100, { start: 1000 }),
                duration: 800,
                easing: 'easeInOutBack'
            });

            // 4. Section Animations
            document.querySelectorAll('.section').forEach((section, index) => {
                anime({
                    targets: section,
                    translateY: [50, 0],
                    opacity: [0, 1],
                    delay: 1200 + index * 200, // Staggered delay
                    duration: 1000,
                    easing: 'easeInOutQuad'
                });
            });

            // 5. Moving Logos - CSS Animation (Improved with smoother timing in CSS)
            //    -  No JavaScript animation needed here, handled by CSS.

            // 6. Footer Animation
            anime({
                targets: '.footer',
                opacity: [0, 1],
                delay: 2000,
                duration: 1000,
                easing: 'easeInOutQuad'
            });
        });
        //]]>
    </script>
</body>
</html>
