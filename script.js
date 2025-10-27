// Data for Guides is static in HTML

// Data for the Recommended Tools section
const tools = [
    {
        name: "OBD-II Scanner",
        details: "Essential for reading diagnostic trouble codes (DTCs) from the vehicle's computer."
    },
    {
        name: "Multimeter",
        details: "Used for testing voltage, current, and resistance in electrical circuits."
    },
    {
        name: "Code Reader",
        details: "A basic tool for retrieving and clearing engine fault codes."
    },
    {
        name: "Brake Bleeder Kit",
        details: "Allows for one-person brake fluid changes and bleeding."
    },
    {
        name: "Fuel Pressure Tester",
        details: "Helps diagnose issues with the fuel delivery system."
    },
    {
        name: "Compression Tester",
        details: "Measures the compression in each engine cylinder to identify internal problems."
    }
];

// Data for Downloads section
const downloads = [
    {
        name: "TunerPro XDF Pack",
        details: "XDF definition files for GM PCMs, compatible with TunerPro tuning software.",
        link: "https://github.com/Snoman002/Engine-Tune-Repository-TunerPro-EFIlive-TunerCat"
    },
    {
        name: "OBD Auto Doctor Free",
        details: "Open-source automotive diagnostics app for OBD-II scanning.",
        link: "https://github.com/obd-auto-doctor-free"
    }
];

// Data for GitHub repositories section
const repositories = [
    {
        name: "OpenVehicleDiag",
        details: "Rust-based cross-platform vehicle ECU diagnostics using J2534/SocketCAN.",
        link: "https://github.com/rnd-ash/OpenVehicleDiag"
    },
    {
        name: "VW_Flash",
        details: "Flashing tools for VW AG control units with encryption and checksum fixes.",
        link: "https://github.com/bri3d/VW_Flash"
    },
    {
        name: "HyperTuner",
        details: "Modern ECU tuning and dash software for enthusiasts and pros.",
        link: "https://github.com/hyper-tuner/hypertuner"
    }
];

// Populate a section with dynamic cards
function populateToolsSection(sectionId, items) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        const nameElem = document.createElement('div');
        nameElem.textContent = item.name;
        const detailsElem = document.createElement('div');
        detailsElem.className = 'card-details';
        detailsElem.textContent = item.details;
        card.appendChild(nameElem);
        card.appendChild(detailsElem);
        section.appendChild(card);
    });
}

function populateLinksSection(sectionId, items) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        const nameElem = document.createElement('div');
        nameElem.textContent = item.name;
        const detailsElem = document.createElement('div');
        detailsElem.className = 'card-details';
        detailsElem.textContent = item.details;
        const linkElem = document.createElement('a');
        linkElem.href = item.link;
        linkElem.target = '_blank';
        linkElem.rel = 'noopener';
        linkElem.textContent = 'Visit';
        linkElem.className = 'card-link';
        linkElem.style.display = 'block';
        linkElem.style.marginTop = '10px';
        card.appendChild(nameElem);
        card.appendChild(detailsElem);
        card.appendChild(linkElem);
        section.appendChild(card);
    });
}

// Run population functions on page load
document.addEventListener("DOMContentLoaded", function() {
    populateToolsSection('tools-section', tools);
    populateLinksSection('downloads-section', downloads);
    populateLinksSection('repositories-section', repositories);
});
