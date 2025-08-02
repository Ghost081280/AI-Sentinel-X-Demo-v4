/**
 * AI Sentinel-X V4 Network Discovery Core Module
 * Enhanced with comprehensive device discovery and network visualization
 */

// Network module state
let currentPackage = null;
let scanResults = null;
let endpointCount = 0;
let encryptionGaps = 0;
let discoveryActive = false;
let ipRanges = [];
let internalDevices = [];
let deviceCounter = 1;
let scanningActive = true;

// Package configurations
const packageConfigs = {
    essential: {
        name: 'Single Server Discovery',
        icon: '🌐',
        description: 'Perfect for individual servers, VPS, or cloud instances',
        price: 29,
        endpointRate: 0.10,
        features: [
            'Single public IP monitoring',
            'Up to 50 internal endpoints',
            'Real-time threat detection',
            'Hybrid-resistant encryption',
            'Basic network discovery',
            'Essential security reports'
        ],
        maxEndpoints: 50,
        maxRanges: 1,
        deviceRange: [5, 15],
        serviceRange: [10, 25]
    },
    multi: {
        name: 'Multi-Site Security',
        icon: '🏢',
        description: 'Ideal for businesses with multiple locations',
        price: 149,
        endpointRate: 0.08,
        features: [
            'Up to 5 network locations',
            'Up to 500 internal endpoints',
            'Cross-site correlation',
            'Advanced threat intelligence',
            'Business compliance reports',
            'Priority support'
        ],
        maxEndpoints: 500,
        maxRanges: 5,
        deviceRange: [50, 150],
        serviceRange: [50, 200]
    },
    global: {
        name: 'Global Infrastructure Defense',
        icon: '🏭',
        description: 'Enterprise-grade protection for large infrastructures',
        price: 499,
        endpointRate: 0.05,
        features: [
            'Unlimited network locations',
            'Unlimited endpoints',
            'Global threat correlation',
            'Custom threat modeling',
            'SOC integration & APIs',
            'Dedicated support team'
        ],
        maxEndpoints: null,
        maxRanges: null,
        deviceRange: [500, 2000],
        serviceRange: [500, 1500]
    }
};

// Initialize network discovery
function initializeNetworkDiscovery() {
    console.log('Initializing V4 Network Discovery...');
    
    // Update sub-agent metrics periodically
    setInterval(updateSubAgentMetrics, 5000);
}

// Start network scan
function startNetworkScan() {
    console.log('Starting network scan...');
    const scanBtn = document.getElementById('scanBtn');
    const scanProgress = document.getElementById('scanProgress');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (!scanBtn || !scanProgress) {
        console.error('Missing scan elements');
        return;
    }
    
    // Disable button and show progress
    scanBtn.disabled = true;
    scanProgress.style.display = 'block';
    
    // Update sub-agent status
    updateSubAgentStatus('Scanning network infrastructure...');
    
    // Simulate comprehensive network scanning
    const scanSteps = [
        { progress: 10, text: "Initializing NetworkMapper agent..." },
        { progress: 20, text: "Detecting network boundaries..." },
        { progress: 30, text: "External scan via Shodan API..." },
        { progress: 40, text: "Discovering internal endpoints..." },
        { progress: 50, text: "Analyzing network topology..." },
        { progress: 60, text: "Identifying services and protocols..." },
        { progress: 70, text: "Checking encryption status..." },
        { progress: 80, text: "Evaluating security posture..." },
        { progress: 90, text: "Generating recommendations..." },
        { progress: 100, text: "Scan complete! Analyzing results..." }
    ];
    
    let currentStep = 0;
    discoveryActive = true;
    
    const interval = setInterval(() => {
        if (currentStep < scanSteps.length) {
            const step = scanSteps[currentStep];
            progressFill.style.width = step.progress + '%';
            progressText.textContent = step.text;
            currentStep++;
            
            // Add to chat
            if (window.sentinelChat && currentStep % 2 === 0) {
                sentinelChat.addMessage(`NetworkMapper: ${step.text}`, false, 'system');
            }
        } else {
            clearInterval(interval);
            
            // Generate scan results
            setTimeout(() => {
                generateScanResults();
            }, 1000);
        }
    }, 800);
}

// Generate realistic scan results with varying data for demos
function generateScanResults() {
    console.log('Generating scan results...');
    
    // Randomize scenarios for demo purposes
    const scenarios = [
        {
            // Small server scenario
            publicIPs: 1,
            endpoints: Math.floor(Math.random() * 10) + 8,
            services: Math.floor(Math.random() * 15) + 12,
            vulnerabilities: Math.floor(Math.random() * 3),
            encryptionGaps: Math.floor(Math.random() * 4) + 1,
            complexity: 'Low',
            recommendation: 'essential',
            confidence: 94,
            externalPorts: [22, 80, 443, 3306],
            locations: ['New York, US']
        },
        {
            // Multi-site business scenario
            publicIPs: Math.floor(Math.random() * 3) + 2,
            endpoints: Math.floor(Math.random() * 50) + 75,
            services: Math.floor(Math.random() * 80) + 100,
            vulnerabilities: Math.floor(Math.random() * 5) + 3,
            encryptionGaps: Math.floor(Math.random() * 10) + 5,
            complexity: 'Medium',
            recommendation: 'multi',
            confidence: 91,
            externalPorts: [22, 25, 80, 443, 3389, 8080],
            locations: ['Atlanta, GA', 'Charlotte, NC', 'Miami, FL']
        },
        {
            // Enterprise scenario
            publicIPs: Math.floor(Math.random() * 8) + 8,
            endpoints: Math.floor(Math.random() * 300) + 450,
            services: Math.floor(Math.random() * 400) + 600,
            vulnerabilities: Math.floor(Math.random() * 10) + 8,
            encryptionGaps: Math.floor(Math.random() * 30) + 20,
            complexity: 'High',
            recommendation: 'global',
            confidence: 96,
            externalPorts: [22, 25, 53, 80, 443, 1433, 3306, 3389, 5432, 8080, 8443],
            locations: ['Virginia, US', 'Oregon, US', 'Frankfurt, DE', 'Singapore, SG']
        }
    ];
    
    // Select scenario randomly for demo variety
    scanResults = scenarios[Math.floor(Math.random() * scenarios.length)];
    endpointCount = scanResults.endpoints;
    encryptionGaps = scanResults.encryptionGaps;
    
    // Display results
    displayScanResults();
}

// Display scan results
function displayScanResults() {
    const scanProgress = document.getElementById('scanProgress');
    const scanResultsDiv = document.getElementById('scanResults');
    const resultsGrid = document.getElementById('resultsGrid');
    const packageSelection = document.getElementById('packageSelection');
    
    // Hide progress
    scanProgress.style.display = 'none';
    
    // Show results
    scanResultsDiv.style.display = 'block';
    
    // Populate results grid
    resultsGrid.innerHTML = `
        <div class="result-card">
            <div class="result-icon">🌐</div>
            <div class="result-value">${window.scanResults.publicIPs}</div>
            <div class="result-label">Public IPs</div>
        </div>
        <div class="result-card">
            <div class="result-icon">💻</div>
            <div class="result-value">${window.scanResults.endpoints}</div>
            <div class="result-label">Endpoints</div>
        </div>
        <div class="result-card">
            <div class="result-icon">🔌</div>
            <div class="result-value">${window.scanResults.services}</div>
            <div class="result-label">Services</div>
        </div>
        <div class="result-card">
            <div class="result-icon">⚠️</div>
            <div class="result-value">${window.scanResults.vulnerabilities}</div>
            <div class="result-label">Vulnerabilities</div>
        </div>
        <div class="result-card">
            <div class="result-icon">🔓</div>
            <div class="result-value">${window.scanResults.encryptionGaps}</div>
            <div class="result-label">Unencrypted</div>
        </div>
        <div class="result-card">
            <div class="result-icon">🎯</div>
            <div class="result-value">${window.scanResults.confidence}%</div>
            <div class="result-label">Confidence</div>
        </div>
    `;
    
    // Show package selection
    packageSelection.style.display = 'block';
    displayPackageOptions();
    
    // Update sub-agent metrics
    updateSubAgentMetrics(true);
    
    // Update chat
    if (window.sentinelChat) {
        sentinelChat.addMessage(`🎯 NetworkMapper: Scan complete! Discovered ${window.scanResults.endpoints} endpoints across ${window.scanResults.publicIPs} public IPs in ${window.scanResults.locations.length} location(s). ${window.scanResults.encryptionGaps} devices need encryption. External scan found ${window.scanResults.externalPorts.length} open ports. Recommending ${packageConfigs[window.scanResults.recommendation].name} package with ${window.scanResults.confidence}% confidence.`, false, 'system');
    }
}

// Display package options
function displayPackageOptions() {
    const packagesGrid = document.getElementById('packagesGrid');
    const recommended = window.scanResults.recommendation;
    
    packagesGrid.innerHTML = Object.entries(packageConfigs).map(([key, config]) => {
        const isRecommended = key === recommended;
        const monthlyEndpointCost = endpointCount * config.endpointRate;
        const totalMonthly = config.price + monthlyEndpointCost;
        
        return `
            <div class="package-card ${isRecommended ? 'recommended' : ''}" onclick="selectPackage('${key}')">
                ${isRecommended ? '<div class="package-badge">RECOMMENDED</div>' : ''}
                <div class="package-icon">${config.icon}</div>
                <h3 class="package-name">${config.name}</h3>
                <p class="package-description">${config.description}</p>
                <div class="package-features">
                    ${config.features.map(feature => `
                        <div class="package-feature">${feature}</div>
                    `).join('')}
                </div>
                <div class="package-pricing">
                    <div class="package-price">$${config.price}<span class="package-price-period">/month</span></div>
                </div>
                <div class="package-endpoints">+ $${monthlyEndpointCost.toFixed(2)}/mo for ${endpointCount} endpoints</div>
                <div class="package-endpoints" style="font-weight: bold; color: var(--primary);">
                    Total: $${totalMonthly.toFixed(2)}/month
                </div>
                <button class="package-select-btn">Select Package</button>
            </div>
        `;
    }).join('');
}

// Select package
function selectPackage(packageKey) {
    console.log('Package selected:', packageKey);
    currentPackage = packageKey;
    
    // Open checkout modal
    openCheckout();
}

// Open checkout modal
function openCheckout() {
    const modal = document.getElementById('checkoutModal');
    const config = packageConfigs[currentPackage];
    
    // Update checkout summary
    document.getElementById('checkoutPackage').textContent = config.name;
    document.getElementById('checkoutLicense').textContent = `$${config.price}/month`;
    document.getElementById('checkoutEndpoints').textContent = endpointCount;
    
    const endpointCost = endpointCount * config.endpointRate;
    document.getElementById('checkoutEndpointCost').textContent = `$${endpointCost.toFixed(2)}/month`;
    
    const total = config.price + endpointCost;
    document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}/month`;
    
    // Show modal
    modal.style.display = 'flex';
}

// Close checkout
function closeCheckout() {
    document.getElementById('checkoutModal').style.display = 'none';
}

// Process payment
function processPayment() {
    const email = document.getElementById('checkoutEmail').value;
    if (!email) {
        alert('Please enter your email address');
        return;
    }
    
    // Hide form, show success
    document.getElementById('checkoutForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    
    // Simulate API key generation
    setTimeout(() => {
        // Generate mock API key
        const apiKey = 'sk_live_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        
        // Store in localStorage (in production, this would be handled securely)
        localStorage.setItem('sentinel_api_key', apiKey);
        localStorage.setItem('sentinel_package', currentPackage);
        
        // Update chat
        if (window.sentinelChat) {
            sentinelChat.addMessage(`✅ Payment successful! Your AI Sentinel-X API key has been generated and stored securely. Activating ${packageConfigs[currentPackage].name} protection...`, false, 'system');
        }
        
        // Redirect to main content
        setTimeout(() => {
            closeCheckout();
            activateProtection();
        }, 3000);
    }, 2000);
}

// Activate protection
function activateProtection() {
    console.log('Activating protection...');
    
    // Hide discovery section
    document.getElementById('discoverySection').style.display = 'none';
    
    // Show main content
    document.getElementById('mainContent').style.display = 'block';
    
    // Update sub-agent status
    updateSubAgentStatus(`${packageConfigs[currentPackage].name} active • Monitoring ${endpointCount} endpoints`);
    
    // Initialize main content with V3 features
    initializeDataForPackage();
    populateAllContent();
    
    // Show encryption gaps if any
    if (encryptionGaps > 0) {
        document.getElementById('encryptionGapAlert').style.display = 'flex';
        document.getElementById('gapDescription').textContent = `${encryptionGaps} devices lack proper encryption and require immediate attention.`;
    }
}

// Initialize data structures for each package
function initializeDataForPackage() {
    // Reset data
    ipRanges = [];
    internalDevices = [];
    deviceCounter = 1;
    
    const config = packageConfigs[currentPackage];

    // Generate appropriate data based on package
    if (currentPackage === 'essential') {
        // Single server data
        ipRanges = [{
            id: 'server-main',
            name: 'Production Server',
            range: '203.0.113.42/32',
            location: scanResults.locations[0],
            organization: 'DigitalOcean',
            status: 'Active',
            devices: endpointCount,
            services: scanResults.services,
            vulnerabilities: scanResults.vulnerabilities,
            bandwidth: '1Gbps'
        }];
        
        // Generate internal devices
        internalDevices = [
            {
                id: 'server-1',
                name: 'Web Server',
                ip: '203.0.113.42',
                type: 'Server',
                icon: '🖥️',
                services: 'HTTP, HTTPS, SSH',
                status: 'Secure',
                encryption: 'AES-256-GCM',
                aiStatus: 'Monitored',
                os: 'Ubuntu 22.04 LTS',
                location: scanResults.locations[0]
            }
        ];
        
        // Add discovered services
        for (let i = 0; i < Math.min(5, endpointCount - 1); i++) {
            internalDevices.push({
                id: `service-${i + 1}`,
                name: ['Database Server', 'Cache Server', 'Load Balancer', 'API Gateway', 'Backup Server'][i],
                ip: `10.0.1.${10 + i}`,
                type: 'Service',
                icon: ['🗄️', '💾', '⚖️', '🚪', '📦'][i],
                services: ['MySQL', 'Redis', 'Nginx', 'Kong', 'Restic'][i],
                status: Math.random() > 0.7 ? 'Warning' : 'Secure',
                encryption: Math.random() > 0.3 ? 'Hybrid-resistant' : 'Needs Update',
                aiStatus: 'Monitored',
                os: 'Docker Container',
                location: 'Internal Network'
            });
        }
    } else if (currentPackage === 'multi') {
        // Multi-site business data
        const locations = scanResults.locations;
        const devicesPerLocation = Math.floor(endpointCount / locations.length);
        
        ipRanges = locations.map((location, i) => ({
            id: `site-${i}`,
            name: ['Headquarters', 'Branch Office 1', 'Branch Office 2', 'Remote Site'][i] || `Site ${i + 1}`,
            range: `203.0.${113 + i}.0/26`,
            location: location,
            organization: 'Business Fiber',
            status: 'Active',
            devices: devicesPerLocation + (i === 0 ? endpointCount % locations.length : 0),
            services: Math.floor(scanResults.services / locations.length),
            vulnerabilities: Math.floor(scanResults.vulnerabilities / locations.length),
            bandwidth: i === 0 ? '1Gbps' : '500Mbps'
        }));

        // Generate diverse internal devices
        const deviceTypes = [
            { name: 'Domain Controller', icon: '🏢', services: 'AD, DNS, DHCP' },
            { name: 'Mail Server', icon: '📧', services: 'Exchange, SMTP' },
            { name: 'File Server', icon: '📁', services: 'SMB, DFS' },
            { name: 'Database Server', icon: '🗄️', services: 'SQL Server' },
            { name: 'Web Server', icon: '🌐', services: 'IIS, Apache' },
            { name: 'Firewall', icon: '🛡️', services: 'pfSense' },
            { name: 'VPN Gateway', icon: '🔒', services: 'IPSec, OpenVPN' },
            { name: 'Backup Server', icon: '💾', services: 'Veeam' },
            { name: 'Print Server', icon: '🖨️', services: 'CUPS' },
            { name: 'VOIP Server', icon: '📞', services: 'Asterisk' }
        ];

        locations.forEach((location, locIdx) => {
            const deviceCount = devicesPerLocation + (locIdx === 0 ? endpointCount % locations.length : 0);
            for (let i = 0; i < Math.min(deviceCount, 10); i++) {
                const deviceType = deviceTypes[i % deviceTypes.length];
                internalDevices.push({
                    id: `${location.toLowerCase().replace(/[,\s]/g, '-')}-device-${i}`,
                    name: `${location} ${deviceType.name}`,
                    ip: `10.${locIdx}.${Math.floor(i / 255)}.${i % 255 + 10}`,
                    type: deviceType.name,
                    icon: deviceType.icon,
                    services: deviceType.services,
                    status: Math.random() > 0.8 ? 'Warning' : 'Secure',
                    encryption: Math.random() > 0.2 ? 'Hybrid-resistant' : 'Needs Update',
                    aiStatus: 'Monitored',
                    os: ['Windows Server 2022', 'Ubuntu 22.04', 'CentOS 8'][Math.floor(Math.random() * 3)],
                    location: location
                });
            }
        });
    } else { // global
        // Enterprise data with multiple data centers
        const locations = scanResults.locations;
        const devicesPerDC = Math.floor(endpointCount / locations.length);
        
        ipRanges = locations.map((location, i) => ({
            id: `dc-${i}`,
            name: `DataCenter-${location.split(',')[0]}`,
            range: `${198 + i}.51.100.0/24`,
            location: location,
            organization: `AS6451${i}`,
            status: 'Active',
            devices: devicesPerDC + (i === 0 ? endpointCount % locations.length : 0),
            services: Math.floor(scanResults.services / locations.length),
            vulnerabilities: Math.floor(scanResults.vulnerabilities / locations.length),
            bandwidth: `${10 + Math.floor(Math.random() * 10)}GB/s`
        }));

        // Generate enterprise-grade devices
        const enterpriseDevices = [
            { name: 'Core Router', icon: '🌐', services: 'BGP, OSPF, MPLS' },
            { name: 'Load Balancer', icon: '⚖️', services: 'F5 Big-IP' },
            { name: 'Database Cluster', icon: '🗄️', services: 'Oracle RAC' },
            { name: 'App Server Farm', icon: '🚀', services: 'Kubernetes' },
            { name: 'Storage Array', icon: '💾', services: 'NetApp SAN' },
            { name: 'Security Appliance', icon: '🛡️', services: 'Palo Alto' },
            { name: 'Monitoring System', icon: '📊', services: 'Prometheus' },
            { name: 'Backup Infrastructure', icon: '📦', services: 'Commvault' },
            { name: 'CDN Edge', icon: '🌍', services: 'Cloudflare' },
            { name: 'API Gateway', icon: '🚪', services: 'Kong Enterprise' }
        ];

        locations.forEach((location, dcIdx) => {
            const deviceCount = devicesPerDC + (dcIdx === 0 ? endpointCount % locations.length : 0);
            for (let i = 0; i < Math.min(deviceCount, 20); i++) {
                const deviceType = enterpriseDevices[i % enterpriseDevices.length];
                internalDevices.push({
                    id: `${location.toLowerCase().replace(/[,\s]/g, '-')}-ent-${i}`,
                    name: `${location.split(',')[0]} ${deviceType.name}`,
                    ip: `${198 + dcIdx}.51.100.${i + 10}`,
                    type: deviceType.name,
                    icon: deviceType.icon,
                    services: deviceType.services,
                    status: Math.random() > 0.9 ? 'Critical' : Math.random() > 0.7 ? 'Warning' : 'Secure',
                    encryption: Math.random() > 0.1 ? 'Hybrid-resistant' : 'Legacy',
                    aiStatus: 'AI Monitored',
                    os: ['RHEL 8', 'Windows Server 2022', 'VMware ESXi', 'Cisco IOS'][Math.floor(Math.random() * 4)],
                    location: location
                });
            }
        });
    }
    
    deviceCounter = internalDevices.length + 1;
}

// Populate all content sections
function populateAllContent() {
    updateMetrics();
    populateIPRangesGrid();
    populateOverviewGrid();
    populateScanningGrid();
    populateDeviceGrid();
}

// Update metrics
function updateMetrics() {
    const totalRanges = ipRanges.length;
    const totalDevices = ipRanges.reduce((sum, range) => sum + range.devices, 0);
    const totalServices = ipRanges.reduce((sum, range) => sum + range.services, 0);

    // Update sub-agent metrics
    const totalNetworks = document.getElementById('totalNetworks');
    const discoveredDevices = document.getElementById('discoveredDevices');
    const openServices = document.getElementById('openServices');
    const newDevices = document.getElementById('newDevices');

    if (totalNetworks) totalNetworks.textContent = totalRanges.toString();
    if (discoveredDevices) discoveredDevices.textContent = totalDevices.toLocaleString();
    if (openServices) openServices.textContent = totalServices.toString();
    if (newDevices) newDevices.textContent = Math.floor(Math.random() * 5 + 1).toString();
}

// Populate IP ranges grid
function populateIPRangesGrid() {
    const grid = document.getElementById('ipRangesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    ipRanges.forEach((range, index) => {
        const card = document.createElement('div');
        card.className = 'ip-range-card';
        
        let statusClass = 'status-secure';
        if (range.status === 'Migrating') statusClass = 'status-warning';
        if (range.vulnerabilities > 0) statusClass = 'status-vulnerable';
        
        card.innerHTML = `
            <div class="range-header">
                <div class="range-name">${range.name}</div>
                <div class="range-status ${statusClass}">${range.status}</div>
            </div>
            <div class="range-info">
                <div class="info-item">
                    <div class="info-label">IP Range</div>
                    <div class="info-value">${range.range}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Location</div>
                    <div class="info-value">${range.location}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Organization</div>
                    <div class="info-value">${range.organization}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Bandwidth</div>
                    <div class="info-value">${range.bandwidth}</div>
                </div>
            </div>
            <div class="range-metrics">
                <div class="range-metric">
                    <div class="range-metric-value">${range.devices}</div>
                    <div class="range-metric-label">Devices</div>
                </div>
                <div class="range-metric">
                    <div class="range-metric-value">${range.services}</div>
                    <div class="range-metric-label">Services</div>
                </div>
                <div class="range-metric">
                    <div class="range-metric-value">${range.vulnerabilities}</div>
                    <div class="range-metric-label">Vulnerabilities</div>
                </div>
            </div>
        `;
        
        card.onclick = () => showRangeDetails(range);
        grid.appendChild(card);
    });
}

// Populate overview grid
function populateOverviewGrid() {
    const grid = document.getElementById('overviewGrid');
    if (!grid) return;

    grid.innerHTML = '';

    const overviewData = getOverviewData();
    
    overviewData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'overview-metric';
        card.onclick = () => showOverviewDetails(item.type);
        
        card.innerHTML = `
            <div class="metric-icon">${item.icon}</div>
            <div class="metric-number">${item.value}</div>
            <div class="metric-description">${item.label}</div>
        `;
        
        grid.appendChild(card);
    });
}

function getOverviewData() {
    const totalDevices = ipRanges.reduce((sum, range) => sum + range.devices, 0);
    const totalServices = ipRanges.reduce((sum, range) => sum + range.services, 0);
    const totalVulnerabilities = ipRanges.reduce((sum, range) => sum + range.vulnerabilities, 0);

    if (currentPackage === 'essential') {
        return [
            { icon: '🖥️', value: '1', label: 'Server', type: 'serverIP' },
            { icon: '🌐', value: totalServices.toString(), label: 'Services', type: 'services' },
            { icon: '🔒', value: 'Hybrid', label: 'Encryption', type: 'encryption' },
            { icon: '🛡️', value: totalVulnerabilities.toString(), label: 'Threats', type: 'threats' }
        ];
    } else if (currentPackage === 'multi') {
        return [
            { icon: '🏢', value: ipRanges.length.toString(), label: 'Sites', type: 'sites' },
            { icon: '💻', value: totalDevices.toLocaleString(), label: 'Devices', type: 'devices' },
            { icon: '🌐', value: totalServices.toString(), label: 'Services', type: 'services' },
            { icon: '🔐', value: 'Active', label: 'Encryption', type: 'encryption' },
            { icon: '⚠️', value: totalVulnerabilities.toString(), label: 'Alerts', type: 'alerts' },
            { icon: '📊', value: '99.8%', label: 'Uptime', type: 'uptime' }
        ];
    } else { // global
        return [
            { icon: '🏭', value: ipRanges.length.toString(), label: 'Data Centers', type: 'datacenters' },
            { icon: '💻', value: totalDevices.toLocaleString(), label: 'Devices', type: 'devices' },
            { icon: '🌐', value: totalServices.toString(), label: 'Services', type: 'services' },
            { icon: '🔐', value: 'Hybrid', label: 'Encryption', type: 'encryption' },
            { icon: '⚠️', value: totalVulnerabilities.toString(), label: 'Critical', type: 'critical' },
            { icon: '📊', value: '99.9%', label: 'SLA', type: 'sla' },
            { icon: '🔄', value: '24/7', label: 'Monitoring', type: 'monitoring' },
            { icon: '🌍', value: scanResults.locations.length.toString(), label: 'Regions', type: 'regions' }
        ];
    }
}

// Populate scanning grid with external and internal scans
function populateScanningGrid() {
    // External scan content
    const externalContent = document.getElementById('externalScanContent');
    if (externalContent) {
        externalContent.innerHTML = `
            <div class="scan-results">
                ${scanResults.externalPorts.map(port => `
                    <div class="scan-results-item">
                        <span class="scan-results-label">Port ${port}</span>
                        <span class="scan-results-value">${getServiceName(port)}</span>
                    </div>
                `).join('')}
                <div class="scan-results-item">
                    <span class="scan-results-label">SSL Rating</span>
                    <span class="scan-results-value">A+</span>
                </div>
                <div class="scan-results-item">
                    <span class="scan-results-label">Reputation</span>
                    <span class="scan-results-value">Clean</span>
                </div>
            </div>
        `;
    }

    // Internal scan content
    const internalContent = document.getElementById('internalScanContent');
    if (internalContent) {
        const services = getInternalServices();
        
        internalContent.innerHTML = `
            <div class="service-list">
                ${services.map(service => `
                    <div class="service-item" onclick="showServiceDetails('${service.name}')">
                        <div class="service-info">
                            <div class="service-name">${service.name}</div>
                            <div class="service-details">${service.details}</div>
                            <div class="service-encryption">${service.encryption}</div>
                        </div>
                        <div class="service-status ${service.statusClass}">${service.status}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

function getServiceName(port) {
    const services = {
        22: 'SSH',
        25: 'SMTP',
        53: 'DNS',
        80: 'HTTP',
        443: 'HTTPS',
        1433: 'SQL Server',
        3306: 'MySQL',
        3389: 'RDP',
        5432: 'PostgreSQL',
        8080: 'HTTP-Alt',
        8443: 'HTTPS-Alt'
    };
    return services[port] || 'Unknown';
}

function getInternalServices() {
    if (currentPackage === 'essential') {
        return [
            {
                name: 'Web Application',
                details: 'Nginx + Node.js',
                encryption: 'TLS 1.3 + Hybrid',
                status: 'Secure',
                statusClass: 'status-secure'
            },
            {
                name: 'Database Service',
                details: 'MySQL 8.0',
                encryption: 'At-rest encryption',
                status: 'Secure',
                statusClass: 'status-secure'
            },
            {
                name: 'SSH Access',
                details: 'OpenSSH 8.9',
                encryption: 'Ed25519 + Post-quantum',
                status: 'Secure',
                statusClass: 'status-secure'
            }
        ];
    } else if (currentPackage === 'multi') {
        return [
            {
                name: 'Active Directory',
                details: 'Windows Server 2022',
                encryption: 'Kerberos + Hybrid',
                status: 'Secure',
                statusClass: 'status-secure'
            },
            {
                name: 'Exchange Server',
                details: 'Exchange 2019',
                encryption: 'S/MIME + TLS',
                status: 'Warning',
                statusClass: 'status-warning'
            },
            {
                name: 'File Sharing',
                details: 'SMB 3.1.1',
                encryption: 'SMB encryption',
                status: 'Secure',
                statusClass: 'status-secure'
            },
            {
                name: 'VPN Gateway',
                details: 'WireGuard',
                encryption: 'ChaCha20Poly1305',
                status: 'Secure',
                statusClass: 'status-secure'
            }
        ];
    } else {
        return [
            {
                name: 'Load Balancer',
                details: 'HAProxy Cluster',
                encryption: 'TLS 1.3 termination',
                status: 'Secure',
                statusClass: 'status-secure'
            },
            {
                name: 'Kubernetes',
                details: 'K8s 1.28',
                encryption: 'mTLS + Service Mesh',
                status: 'Secure',
                statusClass: 'status-secure'
            },
            {
                name: 'Database Cluster',
                details: 'PostgreSQL 15',
                encryption: 'TDE + SSL',
                status: 'Critical',
                statusClass: 'status-vulnerable'
            },
            {
                name: 'API Gateway',
                details: 'Kong Enterprise',
                encryption: 'OAuth2 + JWT',
                status: 'Secure',
                statusClass: 'status-secure'
            },
            {
                name: 'Object Storage',
                details: 'MinIO Cluster',
                encryption: 'SSE-S3 + KMS',
                status: 'Secure',
                statusClass: 'status-secure'
            }
        ];
    }
}

// Populate device grid
function populateDeviceGrid() {
    const grid = document.getElementById('deviceGrid');
    if (!grid) return;

    grid.innerHTML = '';

    // Show first 12 devices, mark first 3 as new
    const devicesToShow = internalDevices.slice(0, 12);
    
    devicesToShow.forEach((device, index) => {
        const card = document.createElement('div');
        card.className = 'device-card';
        if (index < 3) card.classList.add('new-device');
        
        card.innerHTML = `
            <div class="device-header">
                <div class="device-icon">${device.icon}</div>
            </div>
            <div class="device-name">${device.name}</div>
            <div class="device-ip">${device.ip}</div>
            <div class="device-details">
                <div>Type: ${device.type}</div>
                <div>OS: ${device.os}</div>
                <div>Location: ${device.location}</div>
            </div>
            <div class="device-services">Services: ${device.services}</div>
            <div class="device-encryption">
                🔐 ${device.encryption}
            </div>
        `;
        
        card.onclick = () => showDeviceDetails(device);
        grid.appendChild(card);
    });
}

// Show range details
function showRangeDetails(range) {
    if (!SentinelState.chatOpen) sentinelChat.toggle();
    setTimeout(() => {
        sentinelChat.addMessage(`NetworkMapper: Analyzing ${range.name} (${range.range}) in ${range.location}. ${range.devices} devices, ${range.services} services, ${range.vulnerabilities} vulnerabilities. Bandwidth: ${range.bandwidth}. Organization: ${range.organization}.`, false);
    }, 300);
}

// Show device details
function showDeviceDetails(device) {
    if (!SentinelState.chatOpen) sentinelChat.toggle();
    setTimeout(() => {
        sentinelChat.addMessage(`NetworkMapper: Device ${device.name} (${device.ip}) - ${device.type}. OS: ${device.os}. Location: ${device.location}. Services: ${device.services}. Status: ${device.status}. Encryption: ${device.encryption}. AI Monitoring: ${device.aiStatus}.`, false);
    }, 300);
}

// Show overview details
function showOverviewDetails(type) {
    if (!SentinelState.chatOpen) sentinelChat.toggle();
    setTimeout(() => {
        const messages = {
            serverIP: 'NetworkMapper: Single server deployment with full hybrid encryption protection.',
            sites: 'NetworkMapper: Multi-site deployment with cross-location monitoring and correlation.',
            datacenters: 'NetworkMapper: Enterprise data center infrastructure with global presence.',
            devices: 'NetworkMapper: Complete device inventory with real-time status monitoring.',
            services: 'NetworkMapper: All services monitored with deep packet inspection.',
            encryption: 'NetworkMapper: Hybrid-resistant encryption active across all endpoints.',
            threats: 'NetworkMapper: Active threat monitoring with AI-powered detection.',
            alerts: 'NetworkMapper: Alert correlation across all sites for unified visibility.',
            critical: 'NetworkMapper: Critical issues tracked with automated remediation.',
            uptime: 'NetworkMapper: High availability with redundant monitoring systems.',
            sla: 'NetworkMapper: Enterprise SLA compliance with 99.9% uptime guarantee.',
            monitoring: 'NetworkMapper: 24/7 autonomous monitoring with human oversight.',
            regions: 'NetworkMapper: Global presence ensures low-latency monitoring.'
        };
        sentinelChat.addMessage(messages[type] || 'NetworkMapper: Network component analysis complete.', false);
    }, 300);
}

// Show service details
function showServiceDetails(service) {
    if (!SentinelState.chatOpen) sentinelChat.toggle();
    setTimeout(() => {
        sentinelChat.addMessage(`NetworkMapper: Analyzing service ${service}. All protocols secured with hybrid encryption. Service health: optimal. Coordinating with EncryptionManager for continuous protection.`, false);
    }, 300);
}

// Toggle scanning
function toggleScanning() {
    scanningActive = !scanningActive;
    const toggle = document.getElementById('scanToggle');
    
    if (toggle) {
        if (scanningActive) {
            toggle.textContent = 'Auto-Scan Active';
            toggle.style.background = 'rgba(0, 255, 136, 0.2)';
            toggle.style.color = 'var(--success)';
        } else {
            toggle.textContent = 'Auto-Scan Paused';
            toggle.style.background = 'rgba(255, 170, 0, 0.2)';
            toggle.style.color = 'var(--warning)';
        }
    }
    
    if (SentinelState.chatOpen) {
        const status = scanningActive ? 'resumed' : 'paused';
        sentinelChat.addMessage(`NetworkMapper: Auto-scan ${status}. Discovery mode: ${scanningActive ? 'ACTIVE' : 'PAUSED'}.`, false, 'system');
    }
}

// Add IP range modal
function showAddRangeModal() {
    alert('Add IP Range functionality would open a modal here. For demo purposes, this is disabled.');
    
    if (SentinelState.chatOpen) {
        sentinelChat.addMessage('NetworkMapper: To add additional IP ranges, please upgrade your package or contact support for custom configurations.', false, 'system');
    }
}

// Remediate encryption gaps
function remediateEncryptionGaps() {
    if (!window.sentinelChat) return;
    
    // Open chat if not already open
    if (!SentinelState.chatOpen) {
        sentinelChat.toggle();
    }
    
    setTimeout(() => {
        sentinelChat.addMessage('deploy encryption to unprotected devices', true);
        
        setTimeout(() => {
            sentinelChat.addMessage('🔐 EncryptionDeployer: Initiating deployment to ' + encryptionGaps + ' unencrypted devices...', false, 'system');
        }, 500);
        
        setTimeout(() => {
            sentinelChat.addMessage('📡 Establishing secure connections to target devices...', false, 'system');
        }, 1500);
        
        setTimeout(() => {
            sentinelChat.addMessage('🔧 Deploying hybrid-resistant encryption modules: AES-256-GCM + Kyber-1024...', false, 'system');
        }, 2500);
        
        setTimeout(() => {
            sentinelChat.addMessage('✅ Encryption deployment complete! All devices now protected with quantum-resistant algorithms.', false, 'system');
            
            // Hide alert
            document.getElementById('encryptionGapAlert').style.display = 'none';
            encryptionGaps = 0;
            
            // Update metrics
            updateSubAgentMetrics();
        }, 4000);
    }, 300);
}

// Update sub-agent status
function updateSubAgentStatus(status) {
    const description = document.getElementById('subAgentDescription');
    if (description) {
        description.textContent = status;
    }
}

// Update sub-agent metrics
function updateSubAgentMetrics(fromScan = false) {
    const totalNetworks = document.getElementById('totalNetworks');
    const discoveredDevices = document.getElementById('discoveredDevices');
    const openServices = document.getElementById('openServices');
    const newDevices = document.getElementById('newDevices');
    
    if (fromScan && scanResults) {
        if (totalNetworks) totalNetworks.textContent = scanResults.publicIPs;
        if (discoveredDevices) discoveredDevices.textContent = scanResults.endpoints;
        if (openServices) openServices.textContent = scanResults.services;
        if (newDevices) newDevices.textContent = Math.floor(Math.random() * 5 + 1);
    } else if (discoveryActive) {
        // Animate numbers during scanning
        if (totalNetworks && totalNetworks.textContent === '-') totalNetworks.textContent = '0';
        if (discoveredDevices && discoveredDevices.textContent === '-') discoveredDevices.textContent = '0';
        if (openServices && openServices.textContent === '-') openServices.textContent = '0';
        if (newDevices && newDevices.textContent === '-') newDevices.textContent = '0';
        
        // Increment values
        if (Math.random() > 0.7) {
            if (totalNetworks) totalNetworks.textContent = Math.min(parseInt(totalNetworks.textContent) + 1, 12);
            if (discoveredDevices) discoveredDevices.textContent = Math.min(parseInt(discoveredDevices.textContent) + Math.floor(Math.random() * 10), 500);
            if (openServices) openServices.textContent = Math.min(parseInt(openServices.textContent) + Math.floor(Math.random() * 5), 200);
        }
    }
}

// Handle encryption status display
function showEncryptionStatus(type) {
    if (!window.sentinelChat) return;
    
    if (!SentinelState.chatOpen) {
        sentinelChat.toggle();
    }
    
    setTimeout(() => {
        if (type === 'classical') {
            sentinelChat.addMessage('🔐 Classical encryption status: AES-256-GCM active on all endpoints. RSA-4096 for key exchange. All classical algorithms operating at maximum security levels.', false, 'system');
        } else {
            sentinelChat.addMessage('🔮 Hybrid encryption status: Quantum-resistant algorithms active. Kyber-1024 for key encapsulation, Dilithium-3 for signatures. Your infrastructure is protected against both classical and quantum threats.', false, 'system');
        }
    }, 300);
}

// Agent control functions
function showAgentShutdownModal() {
    const modal = document.getElementById('agentShutdownModal');
    if (modal) modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('agentShutdownModal');
    if (modal) modal.style.display = 'none';
}

function closeModalOnOverlay(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal();
        closeCheckout();
    }
}

function confirmAgentShutdown() {
    if (window.SentinelEventHandlers) {
        SentinelEventHandlers.confirmAgentShutdown();
    }
    closeModal();
}

// Chat functions
function toggleChat() {
    if (window.sentinelChat) {
        sentinelChat.toggle();
    }
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function sendChatMessage() {
    const input = document.getElementById('aiChatInput');
    if (input && window.sentinelChat) {
        const message = input.value.trim();
        if (message) {
            sentinelChat.sendMessage(message);
            input.value = '';
        }
    }
}

// Logout
function handleLogout() {
    if (confirm('Are you sure you want to logout? The AI agent will continue protecting your network autonomously.')) {
        localStorage.removeItem('sentinel_auth');
        localStorage.removeItem('sentinel_api_key');
        localStorage.removeItem('sentinel_package');
        window.location.href = 'index.html';
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Network V4 module loaded');
    initializeNetworkDiscovery();
    
    // Check if returning user with active subscription
    const apiKey = localStorage.getItem('sentinel_api_key');
    const savedPackage = localStorage.getItem('sentinel_package');
    
    if (apiKey && savedPackage) {
        // Skip discovery, show main content with randomized data
        currentPackage = savedPackage;
        
        // Generate random scan results for returning users
        const scenarios = [
            { endpoints: 12, services: 23, vulnerabilities: 2, encryptionGaps: 3, locations: ['New York, US'] },
            { endpoints: 89, services: 145, vulnerabilities: 5, encryptionGaps: 8, locations: ['Atlanta, GA', 'Charlotte, NC', 'Miami, FL'] },
            { endpoints: 523, services: 892, vulnerabilities: 12, encryptionGaps: 28, locations: ['Virginia, US', 'Oregon, US', 'Frankfurt, DE', 'Singapore, SG'] }
        ];
        
        const selectedScenario = scenarios[savedPackage === 'essential' ? 0 : savedPackage === 'multi' ? 1 : 2];
        
        scanResults = {
            publicIPs: savedPackage === 'essential' ? 1 : savedPackage === 'multi' ? 4 : 12,
            endpoints: selectedScenario.endpoints,
            services: selectedScenario.services,
            vulnerabilities: selectedScenario.vulnerabilities,
            encryptionGaps: selectedScenario.encryptionGaps,
            locations: selectedScenario.locations,
            externalPorts: savedPackage === 'essential' ? [22, 80, 443] : savedPackage === 'multi' ? [22, 25, 80, 443, 3389] : [22, 25, 53, 80, 443, 1433, 3306, 3389, 5432, 8080, 8443],
            recommendation: savedPackage,
            confidence: 95
        };
        
        endpointCount = selectedScenario.endpoints;
        encryptionGaps = selectedScenario.encryptionGaps;
        
        document.getElementById('discoverySection').style.display = 'none';
        activateProtection();
    }
});

// Export functions for global access
window.startNetworkScan = startNetworkScan;
window.selectPackage = selectPackage;
window.closeCheckout = closeCheckout;
window.processPayment = processPayment;
window.remediateEncryptionGaps = remediateEncryptionGaps;
window.showEncryptionStatus = showEncryptionStatus;
window.showAgentShutdownModal = showAgentShutdownModal;
window.closeModal = closeModal;
window.closeModalOnOverlay = closeModalOnOverlay;
window.confirmAgentShutdown = confirmAgentShutdown;
window.toggleChat = toggleChat;
window.handleChatKeyPress = handleChatKeyPress;
window.sendChatMessage = sendChatMessage;
window.handleLogout = handleLogout;
window.showRangeDetails = showRangeDetails;
window.showDeviceDetails = showDeviceDetails;
window.showOverviewDetails = showOverviewDetails;
window.showServiceDetails = showServiceDetails;
window.showAddRangeModal = showAddRangeModal;
window.toggleScanning = toggleScanning;
