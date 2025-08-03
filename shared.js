/**
 * AI Sentinel-X Shared JavaScript Library - V3.1 Updated
 * Enhanced module balance system and standardized banner sizing
 */

// Version and configuration
const SENTINEL_VERSION = '3.1-updated';
const API_VERSION = 'v3';

// Global state management
const SentinelState = {
    chatOpen: false,
    agentActive: true,
    cliMode: false,
    classicalActive: true,
    quantumActive: true,
    discoveryActive: true,
    scanningActive: true,
    currentPage: 'unknown',
    currentScale: null,
    apiEndpoints: {
        main: '/api/v3/agent',
        threats: '/api/v3/threats',
        network: '/api/v3/network',
        encryption: '/api/v3/encryption',
        analytics: '/api/v3/analytics',
        compliance: '/api/v3/compliance',
        vpn: '/api/v3/vpn'
    }
};

// Enhanced sub-agent configurations including VPNMonitor
const SubAgentConfigs = {
    threatScanner: {
        name: 'ThreatScanner',
        icon: '🛡️',
        description: 'Analyzing 147K events/sec',
        activity: '7 active threats detected',
        link: 'threats.html',
        status: 'Active'
    },
    networkMapper: {
        name: 'NetworkMapper',
        icon: '🌐',
        description: 'Monitoring 247 devices',
        activity: '12 new devices today',
        link: 'network.html',
        status: 'Active'
    },
    defenseOrchestrator: {
        name: 'DefenseOrchestrator',
        icon: '⚔️',
        description: '8 honeypots active',
        activity: '124 attacks neutralized',
        link: 'defense.html',
        status: 'Active'
    },
    encryptionManager: {
        name: 'EncryptionManager',
        icon: '🔐',
        description: 'Hybrid mode active',
        activity: '8 algorithms protecting data',
        link: 'encryption.html',
        status: 'Active'
    },
    analyticsEngine: {
        name: 'AnalyticsEngine',
        icon: '📊',
        description: 'Processing 2.4M metrics',
        activity: '99.8% prediction accuracy',
        link: 'analytics.html',
        status: 'Active'
    },
    logAgent: {
        name: 'LogAgent',
        icon: '📝',
        description: 'Securing audit trails',
        activity: 'All logs Dilithium signed',
        link: 'analytics.html',
        status: 'Active'
    },
    // New encryption sub-agents
    encryptionDeployer: {
        name: 'EncryptionDeployer',
        icon: '🔧',
        description: 'Deploying encryption modules',
        activity: '15 deployments today',
        link: 'encryption.html',
        status: 'Active'
    },
    certificateManager: {
        name: 'CertificateManager',
        icon: '📜',
        description: 'Managing certificates',
        activity: '247 certs monitored',
        link: 'encryption.html',
        status: 'Active'
    },
    complianceMonitor: {
        name: 'ComplianceMonitor',
        icon: '✅',
        description: 'Monitoring compliance',
        activity: 'SOC2/ISO27001 verified',
        link: 'analytics.html',
        status: 'Active'
    },
    // VPNMonitor sub-agent
    vpnMonitor: {
        name: 'VPNMonitor',
        icon: '🔒',
        description: 'VPN security monitoring',
        activity: '12 active connections',
        link: 'vpn.html',
        status: 'Active'
    }
};

// Shared Global Network Updates - Expanded for better module filling
const SharedGlobalUpdates = [
    {
        type: 'system',
        title: 'Global Fleet Update v2.3.1',
        message: 'Enhanced VPN monitoring and certificate auto-renewal deployed across all regions. Improved threat correlation algorithms active.',
        timestamp: '2 min ago',
        source: 'AI Sentinel HQ',
        priority: 'high'
    },
    {
        type: 'security',
        title: 'New Threat Signatures',
        message: 'Command center pushed 47 new threat signatures to global network. Your agent has been updated automatically.',
        timestamp: '15 min ago',
        source: 'Threat Intelligence',
        priority: 'medium'
    },
    {
        type: 'info',
        title: 'Performance Optimization',
        message: 'Hybrid encryption performance improved by 12% after global optimization. All agents benefit from enhanced algorithms.',
        timestamp: '45 min ago',
        source: 'Performance Team',
        priority: 'low'
    },
    {
        type: 'warning',
        title: 'Regional Alert - EMEA',
        message: 'Elevated threat activity in European region. Enhanced monitoring protocols activated for all EMEA customers.',
        timestamp: '1h ago',
        source: 'Regional Control',
        priority: 'high'
    },
    {
        type: 'system',
        title: 'Certificate Renewal Notice',
        message: 'Global certificate renewal completed for 2,847 agents. Your agent certificates updated with hybrid signatures.',
        timestamp: '2h ago',
        source: 'Certificate Authority',
        priority: 'medium'
    },
    {
        type: 'info',
        title: 'ML Model Enhancement',
        message: 'Command center deployed improved behavioral analysis models. Detection accuracy increased to 99.8% across all agents.',
        timestamp: '3h ago',
        source: 'AI Research',
        priority: 'low'
    },
    {
        type: 'security',
        title: 'Zero-Day Protection',
        message: 'Emergency patch distributed for CVE-2025-0147. All agents automatically protected against new vulnerability.',
        timestamp: '4h ago',
        source: 'Emergency Response',
        priority: 'high'
    },
    {
        type: 'system',
        title: 'Network Infrastructure Upgrade',
        message: 'Global command center infrastructure upgraded. Reduced latency by 25ms and improved throughput by 40%.',
        timestamp: '5h ago',
        source: 'Infrastructure Team',
        priority: 'medium'
    }
];

// VPN Configurations for VPNMonitor - Optimized and Lightweight
const VPNConfigs = {
    activeServices: [
        {
            id: 'openvpn-main',
            name: 'OpenVPN Main Gateway',
            protocol: 'OpenVPN',
            port: 1194,
            status: 'active',
            connections: 8,
            encryption: 'AES-256-GCM + Kyber-1024',
            location: 'Primary DC'
        },
        {
            id: 'wireguard-mobile',
            name: 'WireGuard Mobile',
            protocol: 'WireGuard',
            port: 51820,
            status: 'active',
            connections: 4,
            encryption: 'ChaCha20-Poly1305 + SPHINCS+',
            location: 'Mobile Gateway'
        },
        {
            id: 'ipsec-site2site',
            name: 'IPSec Site-to-Site',
            protocol: 'IPSec',
            port: 500,
            status: 'active',
            connections: 1,
            encryption: 'AES-256-CBC + Dilithium-3',
            location: 'Remote Office'
        }
    ],
    liveConnections: [
        {
            id: 'conn-001',
            deviceName: 'LAPTOP-DEV-001',
            clientIP: '10.8.0.15',
            serverIP: '203.45.67.89',
            city: 'San Francisco',
            country: 'United States',
            protocol: 'OpenVPN',
            duration: '2h 45m',
            bytesIn: '1.2 GB',
            bytesOut: '456 MB'
        },
        {
            id: 'conn-002',
            deviceName: 'MOBILE-ENG-047',
            clientIP: '10.8.0.23',
            serverIP: '203.45.67.89',
            city: 'London',
            country: 'United Kingdom',
            protocol: 'WireGuard',
            duration: '1h 12m',
            bytesIn: '890 MB',
            bytesOut: '234 MB'
        },
        {
            id: 'conn-003',
            deviceName: 'WORKSTATION-SEC-12',
            clientIP: '10.8.0.45',
            serverIP: '203.45.67.89',
            city: 'Tokyo',
            country: 'Japan',
            protocol: 'OpenVPN',
            duration: '4h 22m',
            bytesIn: '2.1 GB',
            bytesOut: '789 MB'
        },
        {
            id: 'conn-004',
            deviceName: 'REMOTE-OFFICE-GW',
            clientIP: '172.16.1.1',
            serverIP: '203.45.67.89',
            city: 'Frankfurt',
            country: 'Germany',
            protocol: 'IPSec',
            duration: '48h 15m',
            bytesIn: '15.2 GB',
            bytesOut: '12.8 GB'
        }
    ],
    securityOverview: {
        encryptionProtocols: [
            { name: 'AES-256-GCM', status: 'secure', usage: '85%' },
            { name: 'ChaCha20-Poly1305', status: 'secure', usage: '65%' },
            { name: 'Kyber-1024', status: 'future-proof', usage: '90%' },
            { name: 'Dilithium-3', status: 'future-proof', usage: '75%' },
            { name: 'SPHINCS+', status: 'future-proof', usage: '45%' }
        ]
    },
    anomalyAlerts: [
        {
            id: 'alert-001',
            message: 'Multiple failed authentication attempts detected',
            clientIP: '185.234.72.45',
            action: 'IP blocked automatically',
            severity: 'high',
            timestamp: new Date(Date.now() - 15 * 60 * 1000),
            type: 'multiple-failures'
        },
        {
            id: 'alert-002',
            message: 'Unusual traffic spike from new geographic location',
            clientIP: '203.189.45.123',
            action: 'Enhanced monitoring activated',
            severity: 'medium',
            timestamp: new Date(Date.now() - 45 * 60 * 1000),
            type: 'new-country'
        },
        {
            id: 'alert-003',
            message: 'Certificate expiration warning for mobile gateway',
            clientIP: 'N/A',
            action: 'Auto-renewal scheduled',
            severity: 'low',
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
            type: 'cert-expiry'
        }
    ]
};

// Complete Activity Feed System - Enhanced with Better Balance
class ActivityFeedManager {
    constructor() {
        this.feeds = new Map();
        this.messageTemplates = {
            dashboard: [
                { msg: '🤖 Main Agent: Coordinating {subAgentCount} sub-agents with {accuracy}% ML accuracy', type: '', agent: 'Main Agent' },
                { msg: '🛡️ Global threat correlation: {threatCount} active threats across all modules', type: 'warning', agent: 'ThreatScanner' },
                { msg: '🌐 Network discovery: {deviceCount} devices monitored with hybrid encryption', type: '', agent: 'NetworkMapper' },
                { msg: '🔐 Encryption deployment: {deploymentCount} modules active across infrastructure', type: 'encryption', agent: 'EncryptionManager' },
                { msg: '📊 Analytics processing: {metricsCount} metrics/hour with predictive models active', type: '', agent: 'AnalyticsEngine' },
                { msg: '🔒 VPN security: {vpnConnections} connections monitored by VPNMonitor sub-agent', type: '', agent: 'VPNMonitor' },
                { msg: '✅ Compliance verification: {complianceScore}% average across SOC2, ISO27001, NIST', type: '', agent: 'ComplianceMonitor' },
                { msg: '📜 Certificate management: {certCount} certificates monitored, {expiringCount} expiring soon', type: 'warning', agent: 'CertificateManager' },
                { msg: '⚔️ Defense coordination: {honeypotCount} honeypots active, {attacksBlocked} attacks neutralized', type: '', agent: 'DefenseOrchestrator' }
            ],
            vpn: [
                { msg: '🔒 VPN tunnel established: {protocol} connection from {location}', type: '', agent: 'VPNMonitor' },
                { msg: '🌍 Geographic anomaly: Suspicious access pattern from {suspiciousCountry}', type: 'warning', agent: 'VPNMonitor → ThreatScanner' },
                { msg: '🔐 Hybrid key exchange: {tunnelCount} tunnels upgraded with post-quantum algorithms', type: 'encryption', agent: 'VPNMonitor → EncryptionManager' },
                { msg: '📊 Traffic analysis: {trafficVolume}GB/hr average, {percentChange}% from baseline', type: '', agent: 'VPNMonitor → AnalyticsEngine' },
                { msg: '🚫 Brute force blocked: {failedAttempts} attempts from {attackerIP}', type: 'danger', agent: 'VPNMonitor → DefenseOrchestrator' },
                { msg: '⚡ Certificate validation: Device cert chain verified for {deviceCount} endpoints', type: '', agent: 'VPNMonitor → CertificateManager' },
                { msg: '🎯 Behavioral detection: Anomalous user pattern flagged for investigation', type: 'warning', agent: 'VPNMonitor → AnalyticsEngine' },
                { msg: '📈 Performance metrics: Avg latency {latency}ms, packet loss < 0.1%', type: '', agent: 'VPNMonitor' }
            ],
            threats: [
                { msg: '🛡️ Threat signature update: {newSignatures} patterns deployed globally', type: '', agent: 'ThreatScanner' },
                { msg: '⚠️ Critical threat detected: {threatType} targeting {targetSystem}', type: 'danger', agent: 'ThreatScanner' },
                { msg: '🔍 Behavioral analysis: {anomalyCount} anomalies detected in last hour', type: 'warning', agent: 'ThreatScanner → AnalyticsEngine' },
                { msg: '🚫 Auto-quarantine: {quarantinedIPs} IPs isolated by DefenseOrchestrator', type: 'danger', agent: 'ThreatScanner → DefenseOrchestrator' },
                { msg: '📊 ML confidence: {confidence}% accuracy in threat classification', type: '', agent: 'ThreatScanner' }
            ],
            network: [
                { msg: '🌐 Device discovery: {newDevices} new endpoints detected and secured', type: '', agent: 'NetworkMapper' },
                { msg: '🔍 Port scan completed: {portCount} services identified across {deviceRange} devices', type: '', agent: 'NetworkMapper' },
                { msg: '🚨 Rogue device detected: {rogueIP} blocked and quarantined', type: 'warning', agent: 'NetworkMapper → DefenseOrchestrator' },
                { msg: '📡 Network topology updated: {topologyChanges} changes mapped', type: '', agent: 'NetworkMapper' },
                { msg: '🔐 Encryption gaps detected: {gapCount} devices require encryption deployment', type: 'warning', agent: 'NetworkMapper → EncryptionDeployer' }
            ],
            defense: [
                { msg: '⚔️ Honeypot triggered: {attackType} attempt from {attackerIP}', type: 'warning', agent: 'DefenseOrchestrator' },
                { msg: '🛡️ Auto-mitigation: {mitigationAction} deployed in {responseTime}ms', type: '', agent: 'DefenseOrchestrator' },
                { msg: '🚫 IP blacklist updated: {blockedIPs} malicious IPs added', type: 'danger', agent: 'DefenseOrchestrator' },
                { msg: '📋 Playbook executed: {playbookName} completed successfully', type: '', agent: 'DefenseOrchestrator' },
                { msg: '🔄 Defense posture adjusted: Threat level {threatLevel}', type: 'warning', agent: 'DefenseOrchestrator' }
            ],
            encryption: [
                { msg: '🔐 Key rotation completed: {keyCount} keys updated with hybrid algorithms', type: 'encryption', agent: 'EncryptionManager' },
                { msg: '🚀 Deployment successful: {moduleName} encryption active on {deviceCount} devices', type: 'encryption', agent: 'EncryptionDeployer' },
                { msg: '📜 Certificate renewed: {certName} updated with post-quantum signature', type: '', agent: 'CertificateManager' },
                { msg: '⚠️ Certificate expiring: {certName} expires in {daysLeft} days', type: 'warning', agent: 'CertificateManager' },
                { msg: '✅ Compliance verified: {frameworkName} audit passed with {score}% score', type: '', agent: 'ComplianceMonitor' }
            ],
            analytics: [
                { msg: '📊 Trend analysis: {trendType} showing {percentChange}% change', type: '', agent: 'AnalyticsEngine' },
                { msg: '🎯 Prediction model: {accuracy}% accuracy in threat forecasting', type: '', agent: 'AnalyticsEngine' },
                { msg: '📈 Performance metrics: {metricType} improved by {improvement}%', type: '', agent: 'AnalyticsEngine' },
                { msg: '🔍 Anomaly detected: {anomalyType} requires investigation', type: 'warning', agent: 'AnalyticsEngine' },
                { msg: '📋 Report generated: {reportType} ready for compliance review', type: '', agent: 'AnalyticsEngine → ComplianceMonitor' }
            ]
        };
        this.placeholderGenerators = this.initializePlaceholderGenerators();
    }

    initializePlaceholderGenerators() {
        return {
            '{subAgentCount}': () => Object.keys(SubAgentConfigs).length.toString(),
            '{accuracy}': () => (99.6 + Math.random() * 0.3).toFixed(1),
            '{threatCount}': () => Math.floor(Math.random() * 5 + 5).toString(),
            '{deviceCount}': () => Math.floor(Math.random() * 10 + 245).toString(),
            '{deploymentCount}': () => Math.floor(Math.random() * 3 + 15).toString(),
            '{metricsCount}': () => (2.2 + Math.random() * 0.4).toFixed(1) + 'M',
            '{vpnConnections}': () => Math.floor(Math.random() * 5 + 10).toString(),
            '{complianceScore}': () => Math.floor(Math.random() * 3 + 97).toString(),
            '{certCount}': () => Math.floor(Math.random() * 10 + 245).toString(),
            '{expiringCount}': () => Math.floor(Math.random() * 3 + 1).toString(),
            '{honeypotCount}': () => Math.floor(Math.random() * 3 + 8).toString(),
            '{attacksBlocked}': () => Math.floor(Math.random() * 20 + 120).toString(),
            '{protocol}': () => ['OpenVPN', 'WireGuard', 'IPSec'][Math.floor(Math.random() * 3)],
            '{location}': () => ['San Francisco', 'London', 'Tokyo', 'Frankfurt', 'Sydney'][Math.floor(Math.random() * 5)],
            '{suspiciousCountry}': () => ['Russia', 'China', 'Iran', 'North Korea'][Math.floor(Math.random() * 4)],
            '{tunnelCount}': () => Math.floor(Math.random() * 5 + 1).toString(),
            '{trafficVolume}': () => (Math.random() * 3 + 0.5).toFixed(1),
            '{percentChange}': () => (Math.random() > 0.5 ? '+' : '-') + Math.floor(Math.random() * 30 + 5).toString(),
            '{failedAttempts}': () => Math.floor(Math.random() * 15 + 5).toString(),
            '{attackerIP}': () => this.generateRandomIP(),
            '{latency}': () => Math.floor(Math.random() * 30 + 20).toString(),
            '{newSignatures}': () => Math.floor(Math.random() * 20 + 30).toString(),
            '{threatType}': () => ['SQL Injection', 'DDoS', 'Malware C2', 'Zero-Day'][Math.floor(Math.random() * 4)],
            '{targetSystem}': () => ['Web Server', 'Database', 'API Gateway', 'File Server'][Math.floor(Math.random() * 4)],
            '{anomalyCount}': () => Math.floor(Math.random() * 10 + 3).toString(),
            '{quarantinedIPs}': () => Math.floor(Math.random() * 5 + 1).toString(),
            '{confidence}': () => (99.4 + Math.random() * 0.5).toFixed(1),
            '{newDevices}': () => Math.floor(Math.random() * 3 + 1).toString(),
            '{portCount}': () => Math.floor(Math.random() * 50 + 100).toString(),
            '{deviceRange}': () => Math.floor(Math.random() * 20 + 230).toString(),
            '{rogueIP}': () => this.generateRandomIP(),
            '{topologyChanges}': () => Math.floor(Math.random() * 5 + 1).toString(),
            '{gapCount}': () => Math.floor(Math.random() * 8 + 2).toString(),
            '{attackType}': () => ['Port Scan', 'Brute Force', 'SQL Injection', 'XSS'][Math.floor(Math.random() * 4)],
            '{mitigationAction}': () => ['IP Block', 'Rate Limit', 'Traffic Redirect', 'Honeypot'][Math.floor(Math.random() * 4)],
            '{responseTime}': () => Math.floor(Math.random() * 200 + 100).toString(),
            '{blockedIPs}': () => Math.floor(Math.random() * 5 + 1).toString(),
            '{playbookName}': () => ['Auto-Encrypt', 'Threat Response', 'Compliance Scan'][Math.floor(Math.random() * 3)],
            '{threatLevel}': () => ['LOW', 'MEDIUM', 'HIGH'][Math.floor(Math.random() * 3)],
            '{keyCount}': () => Math.floor(Math.random() * 10 + 5).toString(),
            '{moduleName}': () => ['TLS', 'Database', 'Disk', 'Messaging'][Math.floor(Math.random() * 4)],
            '{certName}': () => ['Web Certificate', 'API Gateway', 'Client Auth'][Math.floor(Math.random() * 3)],
            '{daysLeft}': () => Math.floor(Math.random() * 30 + 1).toString(),
            '{frameworkName}': () => ['SOC2', 'ISO27001', 'NIST'][Math.floor(Math.random() * 3)],
            '{score}': () => Math.floor(Math.random() * 5 + 95).toString(),
            '{trendType}': () => ['Threat Activity', 'Network Usage', 'Performance'][Math.floor(Math.random() * 3)],
            '{metricType}': () => ['Response Time', 'Detection Rate', 'Uptime'][Math.floor(Math.random() * 3)],
            '{improvement}': () => Math.floor(Math.random() * 15 + 5).toString(),
            '{anomalyType}': () => ['User Behavior', 'Network Traffic', 'System Performance'][Math.floor(Math.random() * 3)],
            '{reportType}': () => ['Security Assessment', 'Compliance Report', 'Performance Analysis'][Math.floor(Math.random() * 3)]
        };
    }

    initializeFeed(feedId, feedType = 'dashboard') {
        if (!this.feeds.has(feedId)) {
            this.feeds.set(feedId, {
                type: feedType,
                messages: [],
                maxMessages: 15, // Optimized for performance
                autoGenerate: true,
                container: null,
                autoInterval: null
            });
        }
        return this.feeds.get(feedId);
    }

    setFeedContainer(feedId, containerId) {
        const feed = this.feeds.get(feedId);
        if (feed) {
            feed.container = document.getElementById(containerId);
        }
    }

    addMessage(feedId, message, type = '', agent = '') {
        const feed = this.feeds.get(feedId);
        if (!feed) return;

        const messageObj = {
            id: Date.now() + Math.random(),
            message,
            type,
            agent,
            timestamp: new Date()
        };

        feed.messages.unshift(messageObj);

        // Limit message history for performance
        if (feed.messages.length > feed.maxMessages) {
            feed.messages = feed.messages.slice(0, feed.maxMessages);
        }

        this.renderFeed(feedId);
    }

    generateRandomMessage(feedId) {
        const feed = this.feeds.get(feedId);
        if (!feed || !feed.autoGenerate) return;

        const templates = this.messageTemplates[feed.type] || this.messageTemplates.dashboard;
        const template = templates[Math.floor(Math.random() * templates.length)];
        
        const message = this.processMessageTemplate(template.msg, feed.type);
        this.addMessage(feedId, message, template.type, template.agent);
    }

    processMessageTemplate(template, feedType) {
        let processedMessage = template;
        
        // Replace all placeholders using the generators
        for (const [placeholder, generator] of Object.entries(this.placeholderGenerators)) {
            const regex = new RegExp(placeholder.replace(/[{}]/g, '\\$&'), 'g');
            processedMessage = processedMessage.replace(regex, generator);
        }

        return processedMessage;
    }

    generateRandomIP() {
        return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    }

    renderFeed(feedId) {
        const feed = this.feeds.get(feedId);
        if (!feed || !feed.container) return;

        feed.container.innerHTML = '';

        feed.messages.forEach((messageObj) => {
            const item = document.createElement('div');
            item.className = `feed-item ${messageObj.type}`;
            
            const time = messageObj.timestamp.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            
            item.innerHTML = `
                <div class="feed-time">${time}</div>
                <div class="feed-message">${messageObj.message}</div>
                ${messageObj.agent ? `<div class="feed-agent">via ${messageObj.agent}</div>` : ''}
            `;
            
            // Add slide-in animation
            item.style.animation = 'feedSlide 0.3s ease';
            
            feed.container.appendChild(item);
        });
    }

    startAutoGeneration(feedId, intervalMs = 6000) {
        const feed = this.feeds.get(feedId);
        if (!feed) return;

        // Clear any existing interval
        if (feed.autoInterval) {
            clearInterval(feed.autoInterval);
        }

        feed.autoInterval = setInterval(() => {
            if (feed.autoGenerate && SentinelState.agentActive) {
                this.generateRandomMessage(feedId);
            }
        }, intervalMs);
    }

    stopAutoGeneration(feedId) {
        const feed = this.feeds.get(feedId);
        if (feed && feed.autoInterval) {
            clearInterval(feed.autoInterval);
            feed.autoInterval = null;
        }
    }

    pauseAllFeeds() {
        this.feeds.forEach((feed, feedId) => {
            this.stopAutoGeneration(feedId);
        });
    }

    resumeAllFeeds() {
        this.feeds.forEach((feed, feedId) => {
            if (feed.autoGenerate) {
                this.startAutoGeneration(feedId);
            }
        });
    }

    cleanup() {
        this.feeds.forEach((feed, feedId) => {
            this.stopAutoGeneration(feedId);
        });
        this.feeds.clear();
    }
}

// Encryption deployment configurations
const EncryptionDeploymentConfigs = {
    modules: [
        {
            id: 'tls',
            name: 'TLS Configuration',
            status: 'deployed',
            lastDeployed: '2024-12-19T10:30:00Z',
            coverage: '247/247 devices',
            protocols: ['TLS 1.3', 'Hybrid KEX']
        },
        {
            id: 'database',
            name: 'Database Encryption',
            status: 'deployed',
            lastDeployed: '2024-12-19T09:15:00Z',
            coverage: '12/12 databases',
            protocols: ['AES-256-GCM', 'Kyber-1024']
        },
        {
            id: 'disk',
            name: 'Disk Encryption',
            status: 'pending',
            lastDeployed: null,
            coverage: '189/247 devices',
            protocols: ['LUKS2', 'BitLocker']
        },
        {
            id: 'messaging',
            name: 'Message Encryption',
            status: 'deployed',
            lastDeployed: '2024-12-19T08:45:00Z',
            coverage: '100% channels',
            protocols: ['Signal Protocol', 'Dilithium-3']
        }
    ]
};

// Certificate management configurations
const CertificateConfigs = {
    certificates: [
        {
            id: 'web-primary',
            name: 'Primary Web Certificate',
            domain: '*.sentinel-x.com',
            issuer: 'DigiCert',
            expires: '2025-06-15T23:59:59Z',
            status: 'valid',
            keyAlgorithm: 'RSA-4096 + Dilithium-3'
        },
        {
            id: 'api-cert',
            name: 'API Gateway Certificate',
            domain: 'api.sentinel-x.com',
            issuer: 'Let\'s Encrypt',
            expires: '2025-01-20T12:00:00Z',
            status: 'expiring',
            keyAlgorithm: 'ECDSA P-384 + SPHINCS+'
        },
        {
            id: 'internal-ca',
            name: 'Internal CA Root',
            domain: 'Internal CA',
            issuer: 'Sentinel-X CA',
            expires: '2027-12-31T23:59:59Z',
            status: 'valid',
            keyAlgorithm: 'Hybrid Root CA'
        },
        {
            id: 'client-auth',
            name: 'Client Authentication',
            domain: 'client-auth.sentinel-x.com',
            issuer: 'Sentinel-X CA',
            expires: '2024-12-25T12:00:00Z',
            status: 'expiring',
            keyAlgorithm: 'Ed25519 + Falcon'
        }
    ]
};

// Compliance monitoring configurations
const ComplianceConfigs = {
    frameworks: [
        {
            id: 'soc2',
            name: 'SOC 2 Type II',
            status: 'compliant',
            lastAudit: '2024-10-15',
            nextAudit: '2025-10-15',
            issuesFound: 0,
            coverage: '100%'
        },
        {
            id: 'iso27001',
            name: 'ISO 27001:2022',
            status: 'compliant',
            lastAudit: '2024-11-01',
            nextAudit: '2025-11-01',
            issuesFound: 2,
            coverage: '98%'
        },
        {
            id: 'nist',
            name: 'NIST Cybersecurity Framework',
            status: 'compliant',
            lastAudit: '2024-12-01',
            nextAudit: '2025-06-01',
            issuesFound: 1,
            coverage: '99%'
        },
        {
            id: 'pci',
            name: 'PCI DSS 4.0',
            status: 'pending',
            lastAudit: '2024-09-15',
            nextAudit: '2025-03-15',
            issuesFound: 5,
            coverage: '85%'
        }
    ]
};

// Encryption playbook configurations for defense page
const EncryptionPlaybooks = [
    {
        id: 'auto-encrypt-devices',
        name: 'Auto-encrypt New Devices',
        description: 'Automatically deploy encryption to newly discovered devices',
        executions: 47,
        status: 'Active',
        agent: 'EncryptionDeployer → NetworkMapper'
    },
    {
        id: 'key-rotation',
        name: 'Quarterly Key Rotation',
        description: 'Rotate all encryption keys every 90 days',
        executions: 4,
        status: 'Active',
        agent: 'CertificateManager → EncryptionManager'
    },
    {
        id: 'tls-enforcement',
        name: 'TLS Port Enforcement',
        description: 'Block unencrypted connections when open ports detected',
        executions: 23,
        status: 'Active',
        agent: 'EncryptionDeployer → DefenseOrchestrator'
    },
    {
        id: 'compliance-scan',
        name: 'Compliance Gap Scanner',
        description: 'Scan for encryption compliance gaps across frameworks',
        executions: 12,
        status: 'Active',
        agent: 'ComplianceMonitor → AnalyticsEngine'
    }
];

// Scale-specific configurations for network module - Updated with new pricing
const ScaleConfigs = {
    individual: {
        icon: '🌐',
        text: 'SINGLE IP',
        className: 'scale-individual',
        modalTitle: '🌐 Add Server Range',
        maxRanges: 1,
        deviceRange: [5, 25],
        serviceRange: [3, 12],
        description: 'Single server monitoring • Essential protection • Hybrid-resistant security',
        scanDetails: 'Server + External',
        chatContext: 'single IP deployment with essential security monitoring',
        licenseFeeMo: 29,
        endpointCostMo: 0.10
    },
    business: {
        icon: '🏢',
        text: 'SMALL BUSINESS',
        className: 'scale-business',
        modalTitle: '🏢 Add Business Network',
        maxRanges: 5,
        deviceRange: [25, 250],
        serviceRange: [12, 50],
        description: 'Multi-location scanning • Business-grade security • Advanced monitoring',
        scanDetails: 'Multi-site + External',
        chatContext: 'small business with multiple locations and enhanced security requirements',
        licenseFeeMo: 149,
        endpointCostMo: 0.08
    },
    enterprise: {
        icon: '🏭',
        text: 'ENTERPRISE',
        className: 'scale-enterprise',
        modalTitle: '🏢 Add Data Center Range',
        maxRanges: 50,
        deviceRange: [250, 5000],
        serviceRange: [50, 200],
        description: 'Enterprise-scale scanning • Cross-DC correlation • Full data center monitoring',
        scanDetails: 'Multi-DC + Global',
        chatContext: 'enterprise data center with distributed infrastructure and advanced threat correlation',
        licenseFeeMo: 499,
        endpointCostMo: 0.05
    }
};

// Initialize the activity feed manager globally
const activityFeedManager = new ActivityFeedManager();

// Initialize page context
function initializePageContext() {
    const path = window.location.pathname;
    if (path.includes('dashboard')) SentinelState.currentPage = 'dashboard';
    else if (path.includes('threats')) SentinelState.currentPage = 'threats';
    else if (path.includes('network')) SentinelState.currentPage = 'network';
    else if (path.includes('defense')) SentinelState.currentPage = 'defense';
    else if (path.includes('ai-engine')) SentinelState.currentPage = 'ai-engine';
    else if (path.includes('encryption')) SentinelState.currentPage = 'encryption';
    else if (path.includes('analytics')) SentinelState.currentPage = 'analytics';
    else if (path.includes('vpn')) SentinelState.currentPage = 'vpn';
    else if (path.includes('settings')) SentinelState.currentPage = 'settings';
    else SentinelState.currentPage = 'general';
}

// Enhanced Neural Network Background Animation - Optimized
function initNeuralBackground() {
    const canvas = document.getElementById('neuralCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    
    const nodes = [];
    const nodeCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000)); // Reduced for performance
    
    // Create nodes with improved distribution
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.6, // Reduced speed for better performance
            vy: (Math.random() - 0.5) * 0.6,
            radius: Math.random() * 2 + 1,
            activity: Math.random()
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update nodes
        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;
            node.activity = Math.sin(Date.now() * 0.001 + node.x * 0.01) * 0.5 + 0.5;
            
            // Boundary collision
            if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        });
        
        // Draw connections with improved performance
        ctx.strokeStyle = 'rgba(0, 255, 136, 0.1)';
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const node1 = nodes[i];
                const node2 = nodes[j];
                const dist = Math.hypot(node1.x - node2.x, node1.y - node2.y);
                
                if (dist < 100) { // Reduced connection distance
                    const opacity = (1 - dist / 100) * 0.2;
                    ctx.globalAlpha = opacity;
                    ctx.beginPath();
                    ctx.moveTo(node1.x, node1.y);
                    ctx.lineTo(node2.x, node2.y);
                    ctx.stroke();
                }
            }
        }
        
        // Draw nodes with activity-based glow
        ctx.globalAlpha = 1;
        nodes.forEach(node => {
            const intensity = node.activity;
            const gradient = ctx.createRadialGradient(
                node.x, node.y, 0, 
                node.x, node.y, node.radius * 2
            );
            gradient.addColorStop(0, `rgba(0, 255, 136, ${intensity * 0.6 + 0.2})`);
            gradient.addColorStop(1, 'rgba(0, 255, 136, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius * (intensity * 0.3 + 1), 0, Math.PI * 2);
            ctx.fill();
        });
        
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
        resizeCanvas();
    });
    
    // Return cleanup function
    return () => {
        if (animationId) cancelAnimationFrame(animationId);
    };
}

// Enhanced Chat System with V3.1 optimizations
class SentinelChat {
    constructor() {
        this.messageHistory = [];
        this.typingTimeout = null;
        this.connectionState = 'connected';
        this.retryAttempts = 0;
        this.maxRetries = 3;
    }
    
    toggle() {
        SentinelState.chatOpen = !SentinelState.chatOpen;
        const chatWindow = document.getElementById('aiChatWindow');
        if (chatWindow) {
            if (SentinelState.chatOpen) {
                chatWindow.classList.add('active');
                this.focusInput();
            } else {
                chatWindow.classList.remove('active');
            }
        }
    }
    
    focusInput() {
        setTimeout(() => {
            const input = document.getElementById('aiChatInput');
            if (input) input.focus();
        }, 100);
    }
    
    addMessage(message, isUser = false, type = 'normal') {
        const messagesContainer = document.getElementById('aiChatMessages');
        if (!messagesContainer) return;
        
        const messageObj = {
            id: Date.now(),
            message,
            isUser,
            type,
            timestamp: new Date(),
            context: SentinelState.currentPage
        };
        
        this.messageHistory.push(messageObj);
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'ai-message';
        messageDiv.dataset.messageId = messageObj.id;
        
        const time = messageObj.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        let bubbleClass = 'ai-message-bubble';
        if (isUser) bubbleClass += ' user';
        if (type === 'system') bubbleClass += ' system';
        if (type === 'error') bubbleClass += ' error';
        
        messageDiv.innerHTML = `
            <div class="${bubbleClass}">${this.formatMessage(message)}</div>
            <div class="ai-message-time">${time}</div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
        
        // Limit message history for performance
        if (this.messageHistory.length > 50) {
            this.messageHistory = this.messageHistory.slice(-25);
        }
    }
    
    formatMessage(message) {
        return message
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
            .replace(/quantum-resistant/gi, 'hybrid-resistant')
            .replace(/Quantum-resistant/gi, 'Hybrid-resistant');
    }
    
    scrollToBottom() {
        const messagesContainer = document.getElementById('aiChatMessages');
        if (messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }
    
    showTypingIndicator() {
        this.removeTypingIndicator();
        
        const messagesContainer = document.getElementById('aiChatMessages');
        if (!messagesContainer) return;
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-typing';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="typing-dots">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        
        messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }
    
    removeTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    sendMessage(userMessage) {
        // Add user message
        this.addMessage(userMessage, true);
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Simulate agent response delay
        setTimeout(() => {
            this.removeTypingIndicator();
            
            // Get context-aware response
            const response = this.generateResponse(userMessage, SentinelState.currentPage);
            this.addMessage(response, false);
        }, Math.random() * 1200 + 600); // Reduced delay for better UX
    }
    
    generateResponse(userMessage, context) {
        const lowerMessage = userMessage.toLowerCase();
        
        // Context-specific responses
        if (context === 'vpn') {
            if (lowerMessage.includes('vpn') || lowerMessage.includes('connection')) {
                return `VPNMonitor: I'm monitoring ${Math.floor(Math.random() * 5 + 10)} active VPN connections with hybrid encryption. OpenVPN, WireGuard, and IPSec services are operational. Current threat level: ${Math.random() > 0.5 ? 'ELEVATED' : 'NORMAL'}. Would you like details on specific connections or security protocols?`;
            }
            if (lowerMessage.includes('threat') || lowerMessage.includes('alert')) {
                return `VPNMonitor: ${Math.floor(Math.random() * 4 + 1)} critical alerts detected. Enhanced monitoring active for suspicious IPs. Geo-blocking and behavioral analysis coordinating with ThreatScanner. Auto-response actions ready for deployment.`;
            }
            if (lowerMessage.includes('certificate') || lowerMessage.includes('cert')) {
                return `VPNMonitor → CertificateManager: Monitoring ${Math.floor(Math.random() * 10 + 15)} certificates. ${Math.floor(Math.random() * 3 + 1)} expiring within 30 days. Auto-renewal scheduled with hybrid signatures. All VPN endpoints using post-quantum certificate chains.`;
            }
        }
        
        if (context === 'dashboard') {
            if (lowerMessage.includes('status') || lowerMessage.includes('overview')) {
                return `Main Agent: Coordinating ${Object.keys(SubAgentConfigs).length} sub-agents. ${Math.floor(Math.random() * 10 + 240)} devices protected, ${Math.floor(Math.random() * 5 + 5)} active threats, ${Math.floor(Math.random() * 5 + 10)} VPN connections secure. Global Network Updates sync active. All encryption modules operational.`;
            }
        }
        
        // Common command responses
        if (lowerMessage.includes('help')) {
            return `Available commands: status, threats, encrypt, vpn, scan, deploy, audit, analyze. I coordinate with ${Object.keys(SubAgentConfigs).length} specialized sub-agents for comprehensive security. What would you like me to investigate?`;
        }
        
        if (lowerMessage.includes('encrypt')) {
            return `EncryptionManager: Hybrid encryption active across all systems. Classical algorithms: AES-256-GCM, ChaCha20-Poly1305. Post-quantum: Kyber-1024, Dilithium-3, SPHINCS+. ${Math.floor(Math.random() * 20 + 15)} deployments completed today.`;
        }
        
        if (lowerMessage.includes('scan') || lowerMessage.includes('discover')) {
            return `NetworkMapper: Scanning ${Math.floor(Math.random() * 50 + 200)} devices. ${Math.floor(Math.random() * 3 + 1)} new devices discovered today. ${Math.floor(Math.random() * 100 + 500)} services mapped with security assessment complete.`;
        }
        
        // Default responses
        const responses = [
            `Main Agent: Processing your request. Coordinating with relevant sub-agents for optimal response.`,
            `Acknowledged. Analyzing current security posture and preparing detailed response.`,
            `Roger that. Cross-referencing with threat intelligence and compliance frameworks.`,
            `Command received. Initiating secure analysis with hybrid-resistant encryption.`
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Enhanced Module Balance Manager - FIXED V3.1
class ModuleBalanceManager {
    static balanceRightColumnModules() {
        const rightColumnModules = document.querySelectorAll('.right-column-module');
        if (rightColumnModules.length < 2) return;

        // Set consistent height for right column modules - matching defense page standards
        const targetHeight = '360px'; // Increased from 285px for better balance
        rightColumnModules.forEach(module => {
            module.style.height = targetHeight;
            module.style.display = 'flex';
            module.style.flexDirection = 'column';
        });
    }

    static balanceSystemStatusBanner() {
        const banners = document.querySelectorAll('.system-status-banner, .defense-status-bar');
        
        banners.forEach(banner => {
            // Standardize banner sizing across all pages to match defense page
            banner.style.padding = '20px 25px';
            banner.style.marginBottom = '25px';
            
            // Ensure consistent stat item sizing
            const statItems = banner.querySelectorAll('.banner-stat, .status-item');
            statItems.forEach(item => {
                item.style.padding = '10px 16px';
                item.style.borderRadius = '10px';
            });
        });
    }

    static balanceAllModules() {
        // Balance right column modules
        this.balanceRightColumnModules();
        
        // Standardize banner sizing
        this.balanceSystemStatusBanner();
        
        // Balance other module types if they exist
        const generalModules = document.querySelectorAll('.section-card, .module-card');
        generalModules.forEach(module => {
            // Ensure consistent padding and structure
            if (!module.querySelector('.feed-content')) { // Don't modify feed containers
                module.style.display = 'flex';
                module.style.flexDirection = 'column';
            }
        });
    }

    static initializeBalancedModules() {
        // Wait for DOM to be ready, then balance modules
        setTimeout(() => {
            this.balanceAllModules();
        }, 100);

        // Rebalance on window resize
        window.addEventListener('resize', () => {
            setTimeout(() => {
                this.balanceAllModules();
            }, 100);
        });
    }
}

// Auto-initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize page context
    initializePageContext();
    
    // Initialize enhanced module balance manager
    ModuleBalanceManager.initializeBalancedModules();
    
    // Make sure all globals are available
    if (typeof window !== 'undefined') {
        window.activityFeedManager = activityFeedManager;
        window.SentinelState = SentinelState;
        window.SubAgentConfigs = SubAgentConfigs;
        window.VPNConfigs = VPNConfigs;
        window.SharedGlobalUpdates = SharedGlobalUpdates;
        window.SentinelChat = SentinelChat;
        window.ModuleBalanceManager = ModuleBalanceManager;
        window.initializePageContext = initializePageContext;
        window.initNeuralBackground = initNeuralBackground;
        
        // Configuration exports
        window.EncryptionDeploymentConfigs = EncryptionDeploymentConfigs;
        window.CertificateConfigs = CertificateConfigs;
        window.ComplianceConfigs = ComplianceConfigs;
        window.EncryptionPlaybooks = EncryptionPlaybooks;
        window.ScaleConfigs = ScaleConfigs;
    }
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SentinelState,
        SubAgentConfigs,
        VPNConfigs,
        SharedGlobalUpdates,
        ActivityFeedManager,
        SentinelChat,
        ModuleBalanceManager,
        activityFeedManager,
        initializePageContext,
        initNeuralBackground,
        EncryptionDeploymentConfigs,
        CertificateConfigs,
        ComplianceConfigs,
        EncryptionPlaybooks,
        ScaleConfigs
    };
}
