/**
 * AI Sentinel-X V4 Network Discovery Core Module
 * Enhanced with VPNMonitor integration and improved checkout flow
 */

// Network module state
let currentPackage = null;
let scanResults = null;
let endpointCount = 0;
let encryptionGaps = 0;
let feedInterval = null;
let discoveryActive = false;

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
            'VPNMonitor integration'
        ],
        maxEndpoints: 50
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
            'Priority VPN scanning'
        ],
        maxEndpoints: 500
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
            'Dedicated VPN monitoring'
        ],
        maxEndpoints: null
    }
};

// Initialize network discovery
function initializeNetworkDiscovery() {
    console.log('Initializing V4 Network Discovery...');
    
    // Update sub-agent metrics periodically
    setInterval(updateSubAgentMetrics, 5000);
    
    // Initialize feed if main content is visible
    if (document.getElementById('mainContent').style.display !== 'none') {
        initializeActivityFeed();
    }
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
        { progress: 30, text: "Coordinating with VPNMonitor for external scan..." },
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

// Generate realistic scan results
function generateScanResults() {
    console.log('Generating scan results...');
    
    // Simulate different network scenarios
    const scenarios = [
        {
            publicIPs: 1,
            endpoints: 12,
            services: 18,
            vulnerabilities: 2,
            encryptionGaps: 3,
            complexity: 'Low',
            recommendation: 'essential',
            confidence: 95
        },
        {
            publicIPs: 3,
            endpoints: 87,
            services: 124,
            vulnerabilities: 5,
            encryptionGaps: 8,
            complexity: 'Medium',
            recommendation: 'multi',
            confidence: 92
        },
        {
            publicIPs: 12,
            endpoints: 523,
            services: 687,
            vulnerabilities: 14,
            encryptionGaps: 27,
            complexity: 'High',
            recommendation: 'global',
            confidence: 97
        }
    ];
    
    // Select scenario based on simulated complexity
    scanResults = scenarios[Math.floor(Math.random() * scenarios.length)];
    endpointCount = scanResults.endpoints;
    encryptionGaps = scanResults.encryptionGaps;
    
    // Display results
    displayScanResults();
}

// Display scan results
function displayScanResults() {
    const scanProgress = document.getElementById('scanProgress');
    const scanResults = document.getElementById('scanResults');
    const resultsGrid = document.getElementById('resultsGrid');
    const packageSelection = document.getElementById('packageSelection');
    
    // Hide progress
    scanProgress.style.display = 'none';
    
    // Show results
    scanResults.style.display = 'block';
    
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
    `;
    
    // Show package selection
    packageSelection.style.display = 'block';
    displayPackageOptions();
    
    // Show encryption gap alert if gaps found
    if (window.scanResults.encryptionGaps > 0) {
        showEncryptionGapAlert();
    }
    
    // Update sub-agent metrics
    updateSubAgentMetrics(true);
    
    // Update chat
    if (window.sentinelChat) {
        sentinelChat.addMessage(`🎯 NetworkMapper: Scan complete! Discovered ${window.scanResults.endpoints} endpoints across ${window.scanResults.publicIPs} public IPs. ${window.scanResults.encryptionGaps} devices need encryption. Recommending ${packageConfigs[window.scanResults.recommendation].name} package.`, false, 'system');
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
    
    // Initialize main content
    initializeMainContent();
    initializeActivityFeed();
    
    // Show encryption gaps if any
    if (encryptionGaps > 0) {
        document.getElementById('encryptionGapAlert').style.display = 'flex';
    }
}

// Initialize main content
function initializeMainContent() {
    const contentGrid = document.getElementById('contentGrid');
    const config = packageConfigs[currentPackage];
    
    // Create content based on package type
    if (currentPackage === 'essential') {
        contentGrid.innerHTML = `
            <div class="section-card">
                <div class="section-header">
                    <h3 class="section-title">
                        <span>🖥️</span>
                        Server Overview
                    </h3>
                    <div class="section-status">
                        <div class="status-dot active"></div>
                        <span>PROTECTED</span>
                    </div>
                </div>
                <div class="server-details">
                    <div class="detail-item">
                        <span class="detail-label">Public IP:</span>
                        <span class="detail-value">203.0.113.42</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Hostname:</span>
                        <span class="detail-value">sentinel-protected-01</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">OS:</span>
                        <span class="detail-value">Ubuntu 22.04 LTS</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Uptime:</span>
                        <span class="detail-value">47 days</span>
                    </div>
                </div>
            </div>
            
            <div class="section-card">
                <div class="section-header">
                    <h3 class="section-title">
                        <span>🔐</span>
                        Encryption Status
                    </h3>
                    <div class="section-status">
                        <div class="status-dot ${encryptionGaps > 0 ? 'warning' : 'active'}"></div>
                        <span>${encryptionGaps > 0 ? 'GAPS DETECTED' : 'FULLY ENCRYPTED'}</span>
                    </div>
                </div>
                <div class="encryption-overview">
                    <div class="encryption-stat">
                        <div class="stat-value">${endpointCount - encryptionGaps}</div>
                        <div class="stat-label">Encrypted</div>
                    </div>
                    <div class="encryption-stat">
                        <div class="stat-value" style="color: var(--warning);">${encryptionGaps}</div>
                        <div class="stat-label">Unencrypted</div>
                    </div>
                    <div class="encryption-stat">
                        <div class="stat-value">100%</div>
                        <div class="stat-label">Hybrid Ready</div>
                    </div>
                </div>
            </div>
        `;
    } else if (currentPackage === 'multi') {
        contentGrid.innerHTML = `
            <div class="section-card">
                <div class="section-header">
                    <h3 class="section-title">
                        <span>🏢</span>
                        Site Overview
                    </h3>
                    <div class="section-status">
                        <div class="status-dot active"></div>
                        <span>ALL SITES ONLINE</span>
                    </div>
                </div>
                <div class="sites-grid">
                    <div class="site-card">
                        <div class="site-name">Headquarters</div>
                        <div class="site-status">Online</div>
                        <div class="site-endpoints">45 endpoints</div>
                    </div>
                    <div class="site-card">
                        <div class="site-name">Branch Office 1</div>
                        <div class="site-status">Online</div>
                        <div class="site-endpoints">28 endpoints</div>
                    </div>
                    <div class="site-card">
                        <div class="site-name">Branch Office 2</div>
                        <div class="site-status">Online</div>
                        <div class="site-endpoints">14 endpoints</div>
                    </div>
                </div>
            </div>
            
            <div class="section-card">
                <div class="section-header">
                    <h3 class="section-title">
                        <span>🔒</span>
                        VPN Status
                    </h3>
                    <div class="section-status">
                        <div class="status-dot active"></div>
                        <span>TUNNELS ACTIVE</span>
                    </div>
                </div>
                <div class="vpn-overview">
                    <div class="vpn-tunnel">
                        <span>HQ ↔ Branch 1:</span>
                        <span class="tunnel-status">Connected</span>
                    </div>
                    <div class="vpn-tunnel">
                        <span>HQ ↔ Branch 2:</span>
                        <span class="tunnel-status">Connected</span>
                    </div>
                    <div class="vpn-tunnel">
                        <span>Branch 1 ↔ Branch 2:</span>
                        <span class="tunnel-status">Connected</span>
                    </div>
                </div>
            </div>
        `;
    } else {
        contentGrid.innerHTML = `
            <div class="section-card">
                <div class="section-header">
                    <h3 class="section-title">
                        <span>🏭</span>
                        Global Infrastructure
                    </h3>
                    <div class="section-status">
                        <div class="status-dot active"></div>
                        <span>FULLY OPERATIONAL</span>
                    </div>
                </div>
                <div class="infrastructure-grid">
                    <div class="datacenter-card">
                        <div class="dc-name">US-EAST-1</div>
                        <div class="dc-endpoints">247 endpoints</div>
                        <div class="dc-status">Operational</div>
                    </div>
                    <div class="datacenter-card">
                        <div class="dc-name">US-WEST-2</div>
                        <div class="dc-endpoints">189 endpoints</div>
                        <div class="dc-status">Operational</div>
                    </div>
                    <div class="datacenter-card">
                        <div class="dc-name">EU-CENTRAL-1</div>
                        <div class="dc-endpoints">87 endpoints</div>
                        <div class="dc-status">Operational</div>
                    </div>
                </div>
            </div>
            
            <div class="section-card">
                <div class="section-header">
                    <h3 class="section-title">
                        <span>📊</span>
                        Network Analytics
                    </h3>
                    <div class="section-status">
                        <div class="status-dot active"></div>
                        <span>REAL-TIME</span>
                    </div>
                </div>
                <div class="analytics-overview">
                    <div class="analytic-stat">
                        <div class="stat-value">15.7TB</div>
                        <div class="stat-label">Daily Traffic</div>
                    </div>
                    <div class="analytic-stat">
                        <div class="stat-value">99.98%</div>
                        <div class="stat-label">Uptime</div>
                    </div>
                    <div class="analytic-stat">
                        <div class="stat-value">0.003ms</div>
                        <div class="stat-label">Avg Latency</div>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Add custom styles
    addCustomStyles();
}

// Add custom styles for dynamic content
function addCustomStyles() {
    if (!document.getElementById('dynamic-styles')) {
        const style = document.createElement('style');
        style.id = 'dynamic-styles';
        style.textContent = `
            .server-details, .sites-grid, .infrastructure-grid {
                display: grid;
                gap: 15px;
                margin-top: 20px;
            }
            
            .detail-item {
                display: flex;
                justify-content: space-between;
                padding: 10px;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 8px;
            }
            
            .detail-label {
                color: var(--text-secondary);
                font-size: 14px;
            }
            
            .detail-value {
                color: var(--primary);
                font-weight: bold;
                font-size: 14px;
            }
            
            .encryption-overview, .analytics-overview {
                display: flex;
                justify-content: space-around;
                gap: 20px;
                margin-top: 20px;
                text-align: center;
            }
            
            .encryption-stat, .analytic-stat {
                flex: 1;
            }
            
            .stat-value {
                font-size: 28px;
                font-weight: bold;
                color: var(--primary);
                margin-bottom: 5px;
            }
            
            .stat-label {
                font-size: 12px;
                color: var(--text-secondary);
                text-transform: uppercase;
            }
            
            .site-card, .datacenter-card {
                background: rgba(0, 204, 255, 0.1);
                border: 1px solid var(--secondary);
                border-radius: 10px;
                padding: 15px;
                text-align: center;
            }
            
            .site-name, .dc-name {
                font-weight: bold;
                color: var(--secondary);
                margin-bottom: 8px;
            }
            
            .site-status, .dc-status {
                color: var(--success);
                font-size: 12px;
                text-transform: uppercase;
            }
            
            .site-endpoints, .dc-endpoints {
                color: var(--text-secondary);
                font-size: 14px;
                margin: 5px 0;
            }
            
            .vpn-overview {
                margin-top: 20px;
            }
            
            .vpn-tunnel {
                display: flex;
                justify-content: space-between;
                padding: 12px;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 8px;
                margin-bottom: 10px;
            }
            
            .tunnel-status {
                color: var(--success);
                font-weight: bold;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize activity feed
function initializeActivityFeed() {
    const feedContent = document.getElementById('networkFeed');
    if (!feedContent) return;
    
    // Clear any existing interval
    if (feedInterval) clearInterval(feedInterval);
    
    // Add initial messages
    addFeedItem('🚀 NetworkMapper V4: Enhanced with VPNMonitor integration', 'system');
    addFeedItem('🔐 All network traffic encrypted with hybrid-resistant algorithms', 'encryption');
    addFeedItem(`📊 Monitoring ${endpointCount} endpoints across your infrastructure`, 'ai-action');
    
    // Start generating feed items
    feedInterval = setInterval(() => {
        generateFeedItem();
    }, 4000);
}

// Generate random feed item
function generateFeedItem() {
    const feedMessages = {
        essential: [
            { msg: '🔍 External port scan completed - all services secure', type: 'ai-action' },
            { msg: '🛡️ Firewall rules updated - blocked 3 suspicious IPs', type: 'warning' },
            { msg: '📊 Server health check: CPU 23%, Memory 41%, Disk 67%', type: 'system' },
            { msg: '🔐 SSL certificate renewed automatically', type: 'encryption' },
            { msg: '🌐 VPNMonitor: No unauthorized VPN connections detected', type: 'system' },
            { msg: '✅ Backup completed successfully', type: 'system' }
        ],
        multi: [
            { msg: '🏢 Site-to-site VPN tunnel health check passed', type: 'system' },
            { msg: '🔄 Cross-site replication completed', type: 'ai-action' },
            { msg: '📍 Branch office network scan initiated', type: 'system' },
            { msg: '🔐 Inter-site encryption upgraded to Kyber-1024', type: 'encryption' },
            { msg: '⚠️ Unusual traffic pattern detected at Branch 2', type: 'warning' },
            { msg: '✅ All locations synchronized successfully', type: 'system' }
        ],
        global: [
            { msg: '🌍 Global threat correlation updated', type: 'ai-action' },
            { msg: '🏭 Data center failover test completed', type: 'system' },
            { msg: '📊 CDN performance optimized - 15% improvement', type: 'ai-action' },
            { msg: '🔐 Enterprise PKI certificates rotated', type: 'encryption' },
            { msg: '🚨 DDoS mitigation activated - attack deflected', type: 'danger' },
            { msg: '✅ Compliance audit passed - SOC2 ready', type: 'system' }
        ]
    };
    
    const messages = feedMessages[currentPackage] || feedMessages.essential;
    const item = messages[Math.floor(Math.random() * messages.length)];
    
    addFeedItem(item.msg, item.type);
}

// Add feed item
function addFeedItem(message, type = 'system') {
    const feedContent = document.getElementById('networkFeed');
    if (!feedContent) return;
    
    const item = document.createElement('div');
    item.className = `feed-item ${type}`;
    
    const time = new Date().toLocaleTimeString();
    const agent = type === 'encryption' ? 'EncryptionDeployer' : 
                  type === 'ai-action' ? 'AI Engine' : 
                  type === 'warning' || type === 'danger' ? 'ThreatScanner' : 
                  'NetworkMapper';
    
    item.innerHTML = `
        <div class="feed-time">${time}</div>
        <div class="feed-message">${message}</div>
        <div class="feed-agent">via ${agent}</div>
    `;
    
    feedContent.insertBefore(item, feedContent.firstChild);
    
    // Keep only last 20 items
    while (feedContent.children.length > 20) {
        feedContent.removeChild(feedContent.lastChild);
    }
}

// Show encryption gap alert
function showEncryptionGapAlert() {
    const alert = document.getElementById('encryptionGapAlert');
    const description = document.getElementById('gapDescription');
    
    if (alert && description) {
        description.textContent = `${encryptionGaps} devices lack proper encryption and require immediate attention.`;
        alert.style.display = 'flex';
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
        // Skip discovery, show main content
        currentPackage = savedPackage;
        endpointCount = packageConfigs[savedPackage].maxEndpoints ? 
            Math.floor(Math.random() * packageConfigs[savedPackage].maxEndpoints * 0.7) : 
            Math.floor(Math.random() * 1000 + 500);
        
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
