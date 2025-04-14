document.addEventListener('DOMContentLoaded', () => {

    // --- Data ---

    const data = [
        {
            "role": "common", // Login affects everyone
            "section": "Login",
            "heading": "Login",
            "text": "Every feature is operating smoothly and only correct user role can login. If incorrect data is input, an error will be shown.",
            "img0": "./images/Login.png"
        },
        {
            "role": "common", // Dashboard likely visible to many roles
            "section": "Dashboard",
            "heading": "Dashboard",
            "text": "A hospital dashboard is a tool that consolidates and visualizes real-time data from various sources within a healthcare facility, providing a quick, easy-tounderstand overview of key performance indicators (KPIs) to support informed decision-making",
            "img0": "./images/Dashboard -_merged_page-0053.jpg"
        },
        {
            "role": "admin", // Managing departments is typically admin
            "section": "Department",
            "heading": "Add Department",
            "text": "Name: Max 100 characters, mandatory. Description: No length limit. Issue: Data loss on unsaved tab switch.",
            "img0": "./images/Dashboard -_merged_page-0013.jpg",
            "heading1": "Department List",
            "text1": "All features are functioning properly and delivering the desired results.",
            "img1": "./images/Dashboard -_merged_page-0049.jpg",
        },
        {
            "role": "admin", // Managing doctors
            "section": "Doctor",
            "heading": "Add Doctor",
            "text": "The system has successfully saved the accurate data without any errors or discrepancies, ensuring data integrity, reliability, and consistency for future access and processing.",
            "img0": "./images/Dashboard -_merged_page-0014.jpg",
            "heading1": "Doctor List",
            "text1": "The implemented features are functioning as intended, consistently delivering the expected results with accuracy and efficiency.",
            "img1": "./images/Dashboard -_merged_page-0050.jpg",
        },
        {
            "role": "admin", // Adding patients often done by staff/admin
            "section": "Patient Management", // Renamed for clarity
            "heading": "Add Patient",
            "img0": "./images/Dashboard -_merged_page-0026.jpg",
            "text": "If data is provided correct then it take all the input and save then without error.",
            "heading1": "Patient List (Admin View)",
            "text1": "All features function correctly and produce the expected results.",
            "img1": "./images/Dashboard -_merged_page-0071.jpg",
        },
        { // Example: User might view their own profile (if applicable)
            "role": "user",
            "section": "Patient Portal",
            "heading": "View My Profile",
            "text": "Patients can view their registered details and medical history.",
            "img0": "./images/placeholder_patient_profile.png" // Use a placeholder or relevant image
        },
        {
            "role": "admin", // Scheduling is usually admin/staff
            "section": "Schedule",
            "heading": "Add Schedule",
            "text": "If the provided data is correct, the system accepts all inputs and saves them without errors.",
            "img0": "./images/Dashboard -_merged_page-0030.jpg",
            "heading1": "Schedule List",
            "text1": "Every feature is operating smoothly and yielding the desired outcome.",
            "img1": "./images/Dashboard -_merged_page-0083.jpg",
        },
        {
            "role": "common", // Appointments involve admin, doctors, patients, receptionists
            "section": "Appointment",
            "heading": "Add Appointment",
            "text": "All features function correctly and produce the expected results.",
            "img0": "./images/Dashboard -_merged_page-0008.jpg",
            "heading1": "Appointment List",
            "text1": "The system accurately retrieves and displays the list of data without errors, ensuring completeness, correctness, and consistency in the presented information.",
            "img1": "./images/Dashboard -_merged_page-0032.jpg",
            // Keep other appointment headings if they represent distinct features/views
            // Decide if they are admin-specific or common views
            "heading2": "Appointment Assign by All", // Might be admin
            "text2": "The system accurately retrieves and displays the list of data without errors...",
            "img2": "./images/Dashboard -_merged_page-0033.jpg",
            "heading3": "Appointment Assign by Doctor", // Doctor's view? -> user/common
            "text3": "The system accurately retrieves and displays the list of data without errors...",
            "img3": "./images/Dashboard -_merged_page-0034.jpg",
            // ... Add role assessment for other appointment parts ...
        },
        {
            "role": "admin", // Insurance setup
            "section": "Insurance",
            "heading": "Add Insurance",
            "text": "All functionalities are running efficiently and delivering the required results.",
            "img0": "./images/Dashboard -_merged_page-0018.jpg",
            "heading1": "Insurance List",
            "text1": "Accurate data retrieval and display are ensured by the system...",
            "img1": "./images/Dashboard -_merged_page-0056.jpg",
        },
        {
            "role": "admin", // Case studies often managed by staff/doctors under admin umbrella
            "section": "Prescription & Case Study", // Combined section
            "heading": "Add Patient Case Study",
            "text": "Accurate data retrieval and display are ensured by the system...",
            "img0": "./images/Dashboard -_merged_page-0027.jpg",
            "heading1": "Patient Case Study List",
            "text1": "The system efficiently gathers and shows the data list with precision...",
            "img1": "./images/Dashboard -_merged_page-0070.jpg",
            "heading2": "Prescription List", // Viewing prescriptions might be user role too
            "text2": "The system correctly fetches and presents the data list...",
            "img2": "./images/Dashboard -_merged_page-0077.jpg",
        },
        {
            "role": "user", // Users (patients) might view their prescriptions
            "section": "Patient Portal",
            "heading": "View My Prescriptions",
            "text": "Patients can view their current and past prescriptions.",
            "img0": "./images/placeholder_prescription.png" // Placeholder image
        },
        {
            "role": "admin", // Financials
            "section": "Account Manager",
            "heading": "Add Account",
            "text": "The system processes and presents the data list flawlessly...",
            "img0": "./images/Dashboard -_merged_page-0006.jpg",
            // ... include other account manager headings/text/img pairs ...
            "heading5": "Payment List",
            "text5": "Accurate data retrieval and display are ensured by the system...",
            "img5": "./images/Dashboard -_merged_page-0073.jpg",
        },
        {
            "role": "admin", // HR management
            "section": "Human Resource",
            "heading": "Add Employee",
            "text": "Each feature is performing optimally and achieving the intended objectives.",
            "img0": "./images/Dashboard -_merged_page-0016.jpg",
            // ... include other HR headings/text/img pairs ...
            "heading7": "Case Manager List",
            "text7": "All functionalities are running efficiently and delivering the required results.",
            "img7": "./images/Dashboard -_merged_page-0042.jpg",
        },
        {
            "role": "admin", // Bed management
            "section": "Bed Manager",
            "heading": "Add Bed",
            "text": "The data has been accurately entered into the system...",
            "img0": "./images/Dashboard -_merged_page-0009.jpg",
            // ... include other Bed Manager headings/text/img pairs ...
            "heading4": "Report",
            "text4": "The data has been accurately entered into the system...",
            "img4": "./images/Dashboard -_merged_page-0080.jpg",
        },
        {
            "role": "admin", // Notices usually posted by admin
            "section": "Noticeboard",
            "heading": "Add Notice",
            "text": "The system has successfully saved the accurate data...",
            "img0": "./images/Dashboard -_merged_page-0024.jpg",
            "heading1": "Notice List", // Viewing might be common/user
            "text1": "The system has successfully saved the accurate data...",
            "img1": "./images/Dashboard -_merged_page-0066.jpg",
        },
        {
            "role": "user", // Users might view notices
            "section": "Noticeboard",
            "heading": "View Notices",
            "text": "Stay updated with the latest hospital announcements and notices.",
            "img0": "./images/Dashboard -_merged_page-0066.jpg" // Reuse notice list image?
        },
        // { // This seems redundant with "Patient Management" above
        //     "role": "admin", // Or specific role 'case_manager' if exists
        //     "section": "Case Manager",
        //     "heading": "Add Patient",
        //     "text": "If data is provided correctly, it takes all the input and saves it without error.",
        //     "img0": "./images/Dashboard -_merged_page-0026.jpg",
        //     "heading1": "Patient List",
        //     "text1": "If data is provided correct then it take all the input and save then without error.",
        //     "img1": "./images/Dashboard -_merged_page-0071.jpg",
        // },
        {
            "role": "admin", // Hospital activity reports
            "section": "Hospital Activities",
            "heading": "Add Birth Report",
            "text": "When accurate data is provided, the system processes all inputs seamlessly...",
            "img0": "./images/Dashboard -_merged_page-0010.jpg",
            // ... include other Hospital Activities headings/text/img pairs ...
            "heading10": "Medicine List",
            "text10": "When correct data is provided, all inputs are accepted and stored flawlessly by the system.",
            "img10": "./images/Dashboard -_merged_page-0064.jpg",
        },
        {
            "role": "admin", // System settings
            "section": "Setting",
            "heading": "App setting:",
            "text": "When accurate data is provided, the system processes all inputs seamlessly...",
            "img0": "./images/Dashboard -_merged_page-0031.jpg",
            "heading1": "Language",
            "text1": "The system has successfully saved the accurate data...",
            "img1": "./images/Dashboard -_merged_page-0001.jpg"
        },
        {
            "role": "common", // Internal messaging system
            "section": "Messages",
            "heading": "New Message",
            "text": "All features function correctly and produce the expected results.",
            "img0": "./images/Dashboard -_merged_page-0065.jpg",
            "heading1": "Inbox",
            "text1": "All features function correctly and produce the expected results.",
            "img1": "./images/Dashboard -_merged_page-0054.jpg",
            "heading2": "Sent",
            "text2": "The system accurately retrieves and displays the list of data...",
            "img2": "./images/Dashboard -_merged_page-0085.jpg",
        },
        {
            "role": "admin", // Mail config is usually admin
            "section": "Mail Configuration", // Renamed
            "heading": "Send Mail (Test?)", // Or maybe this is a general feature? Assess role.
            "text": "When accurate data is provided, the system processes all inputs seamlessly...",
            "img0": "./images/Dashboard -_merged_page-0084.jpg",
            "heading1": "Mail setting:",
            "text1": "The system has successfully saved the accurate data...",
            "img1": "./images/Dashboard -_merged_page-0062.jpg",

        },
        // Meta sections - keep separate or display differently if needed
        // {
        //     "role": "meta",
        //     "section": "Errors Section", ...
        // },
        // {
        //     "role": "meta",
        //     "section": "Suggestions", ...
        // }
    ];

    // --- DOM Elements ---
    const pageContent = document.getElementById('page-content');
    const navHome = document.getElementById('nav-home');
    const navAbout = document.getElementById('nav-about');
    const navAdmin = document.getElementById('nav-admin');
    const navUser = document.getElementById('nav-user');
    const homeLink = document.getElementById('home-link'); // Logo link
    const backgroundCirclesContainer = document.getElementById('background-circles'); // Circle container

    // --- Content Rendering Functions ---

    // Render Home Page
    function renderHomePage() {
        pageContent.innerHTML = `
            <div class="home-slider swiper">
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">
                        <img src="./images/Dashboard -_merged_page-0001.jpg" alt="Hospital Welcoming Entrance">
                      
                    </div>
                    <div class="swiper-slide">
                        <img src="./images/Dashboard -_merged_page-0006.jpg" alt="Doctor and Patient Interaction">
                        
                    </div>
                    <div class="swiper-slide">
                         <img src="./images/Dashboard -_merged_page-0004.jpg" alt="Modern Medical Technology">
                    </div>
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>
                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>

            <div class="about-section" style="text-align: center;">
                <h1>Streamlining Hospital Operations</h1>
                <p>ANDi Hospital software provides a comprehensive suite of tools designed to manage various aspects of hospital administration and patient care efficiently. Explore the features available for different user roles.</p>
                 <p style="margin-top: 20px;"><strong>Developed by:</strong> Prabhakar Rathore</p>
                 <p><strong>Contact:</strong> 8287744079 | <a href="mailto:prabhakarrathore15@gmail.com">prabhakarrathore15@gmail.com</a></p>
            </div>
        `;
        // Initialize Swiper
        new Swiper('.home-slider', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        setActiveNav(navHome); // Set Home as active
    }

    // Render About Page
    function renderAboutPage() {
        // Extract unique module names (sections) from the data
        const moduleNames = [...new Set(data.filter(item => item.role !== 'meta').map(item => item.section))].sort();

        pageContent.innerHTML = `
            <div class="about-section">
                <h1>About ANDi Hospital Software</h1>
                <p>This software is designed to provide an integrated solution for managing hospital operations. It aims to improve efficiency, accuracy, and communication across various departments.</p>
                <p>Key goals include simplifying patient management, streamlining administrative tasks, managing resources effectively, and providing essential tools for healthcare professionals.</p>
            </div>
            <div class="modules-section">
                <h2>Core Modules Include:</h2>
                <ul class="modules-list">
                    ${moduleNames.map(name => `<li>${name}</li>`).join('')}
                </ul>
            </div>
        `;
        setActiveNav(navAbout); // Set About as active
    }

    // Render Feature Pages (Admin or User)
    function renderFeaturesPage(role) {
        const rolesToInclude = role === 'admin' ? ['admin', 'common'] : ['user', 'common'];
        const filteredData = data.filter(item => rolesToInclude.includes(item.role));

        // Use original colors array or define a new one for features pages
        const colors = ["#b0c5ff", "#fff", "#d1e0ff", "#e8efff"]; // Example colors

        const featuresHTML = filteredData.map((item, itemIndex) => {
            // Select a background color - cycle through or random
            const bgColor = colors[itemIndex % colors.length];
            // const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Alternative: random

            // Generate HTML for each feature item (potentially multiple blocks per item)
            return Object.keys(item)
                .filter(key => key.startsWith("heading"))
                .map((key, index) => {
                    const textKey = key.replace("heading", "text");
                    const imgKey = `img${index}`;

                    // Only render if heading exists
                    if (!item[key]) return '';

                    return `
                    <div class="page" style="background-color: ${bgColor};"> <!-- Individual feature block -->
                       <div class="content-container">
                           <!-- Left: Image -->
                           ${item[imgKey] ? `<div class="image-container"><img class="content-image" src="${item[imgKey]}" alt="${item[key]} image" loading="lazy"></div>` : '<div class="image-container"></div>' /* Placeholder if no image */}

                           <!-- Right: Subheading & Text -->
                           <div class="text-container">
                               <div class="section-title">
                                   <h1>${item.section || 'Feature'}</h1>
                               </div>
                               <h2>${item[key]}</h2>
                               <p>${item[textKey] ? item[textKey] : ""}</p>
                           </div>
                       </div>
                    </div>`;
                }).join(""); // Join blocks within the same data item
        }).join(''); // Join all feature items

        // Wrap all generated feature blocks in a container
        pageContent.innerHTML = `
            <div class="features-container">
                 <h1 style="text-align: center; color: #05066d; margin-bottom: 30px;">
                    ${role === 'admin' ? 'Administrator' : 'User'} Features
                 </h1>
                ${featuresHTML}
            </div>
        `;

        setActiveNav(role === 'admin' ? navAdmin : navUser); // Set correct nav item active
    }


    // Function to set the active navigation link
    function setActiveNav(activeLink) {
        // Remove active class from all nav links
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.classList.remove('active');
        });
        // Add active class to the current link
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }


    // --- Navigation Event Listeners ---
    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        renderHomePage();
    });

    homeLink.addEventListener('click', (e) => { // Make logo click go home
        e.preventDefault();
        renderHomePage();
    });

    navAbout.addEventListener('click', (e) => {
        e.preventDefault();
        renderAboutPage();
    });

    navAdmin.addEventListener('click', (e) => {
        e.preventDefault();
        renderFeaturesPage('admin');
    });

    navUser.addEventListener('click', (e) => {
        e.preventDefault();
        renderFeaturesPage('user');
    });


    // --- Background Circles --- (Keep this if you like the effect)
    function generateCirclePositions() {
        // Adjust density and size/blur in CSS if needed
        const numCircles = 50; // Reduce number for performance/aesthetics
        const containerHeight = Math.max(document.body.scrollHeight, window.innerHeight);
        const containerWidth = window.innerWidth;

        return Array.from({ length: numCircles }, () => ({
            // Ensure circles spread across potential full scroll height
            x: Math.floor(Math.random() * containerWidth),
            y: Math.floor(Math.random() * containerHeight)
        }));
    }

    function placeCircles() {
        const positions = generateCirclePositions();
        backgroundCirclesContainer.innerHTML = ''; // Clear existing circles if any

        positions.forEach((pos) => {
            const circle = document.createElement("div");
            circle.classList.add("circle1");
            circle.style.left = `${pos.x}px`;
            circle.style.top = `${pos.y}px`;
            backgroundCirclesContainer.appendChild(circle);
        });
    }

    // --- Initial Page Load ---
    renderHomePage(); // Show home page by default
    placeCircles(); // Generate background circles on load

    // Optional: Regenerate circles on window resize if needed
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Re-calculate positions based on new dimensions
            // placeCircles(); // Uncomment if you want circles to reposition on resize
        }, 250); // Debounce resize event
    });

}); // End DOMContentLoaded