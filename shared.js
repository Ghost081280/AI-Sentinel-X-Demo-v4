/**
 * AI Sentinel-X Shared JavaScript Library - Hybrid V2.2
 * Enhanced modular architecture with VPNMonitor and encryption sub-agents
 */

// Version and configuration
const SENTINEL_VERSION = '2.2-hybrid';
const API_VERSION = 'v2';

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
        main: '/api/v2/agent',
        threats: '/api/v2/threats',
        network: '/api/v2/network',
        encryption: '/api/v2/encryption',
        analytics: '/api/v2/analytics',
        compliance: '/api/v2/compliance',
        vpn: '/api/v2/vpn'
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
    // NEW: VPNMonitor sub-agent
    vpnMonitor: {
        name: 'VPNMonitor',
        icon: '🔒',
        description: 'VPN security monitoring',
        activity: '12 active connections',
        link: 'vpn.html',
        status: 'Active'
    }
};

// VPN monitoring configurations
const VPNConfigs = {
    activeServices: [
        {
            id: 'openvpn-main',
            name: 'OpenVPN Primary',
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
            encryption: 'ChaCha20-Poly1305 + Hybrid KEX',
            location: 'Mobile Gateway'
        },
        {
            id: 'ipsec-site',
            name: 'IPSec Site-to-Site',
            protocol: 'IPSec',
            port: 500,
            status: 'active',
            connections: 0,
            encryption: 'AES-256-CBC + Dilithium-3',
            location: 'Branch Office'
        }
    ],
    liveConnections: [
        {
            id: 'conn-001',
            clientIP: '192.168.1.105',
            serverIP: '10.0.1.1',
            country: 'Germany',
            city: 'Frankfurt',
            deviceName: 'Mobile-Device-47',
            protocol: 'OpenVPN',
            connected: '2024-12-19T14:23:15Z',
            duration: '2h 15m',
            bytesIn: '245MB',
            bytesOut: '89MB',
            status: 'connected'
        },
        {
            id: 'conn-002',
            clientIP: '192.168.1.178',
            serverIP: '10.0.1.2',
            country: 'Japan',
            city: 'Tokyo',
            deviceName: 'Laptop-Executive-12',
            protocol: 'WireGuard',
            connected: '2024-12-19T13:45:22Z',
            duration: '2h 53m',
            bytesIn: '1.2GB',
            bytesOut: '456MB',
            status: 'connected'
        },
        {
            id: 'conn-003',
            clientIP: '192.168.1.234',
            serverIP: '10.0.1.1',
            country: 'Canada',
            city: 'Toronto',
            deviceName: 'Workstation-Dev-08',
            protocol: 'OpenVPN',
            connected: '2024-12-19T15:12:08Z',
            duration: '1h 26m',
            bytesIn: '678MB',
            bytesOut: '234MB',
            status: 'connected'
        }
    ],
    securityOverview: {
        encryptionProtocols: [
            { name: 'AES-256-GCM', usage: '67%', status: 'secure' },
            { name: 'ChaCha20-Poly1305', usage: '33%', status: 'secure' },
            { name: 'Kyber-1024 (PQC)', usage: '100%', status: 'future-proof' },
            { name: 'Dilithium-3 (PQC)', usage: '100%', status: 'future-proof' }
        ],
        certificateStatus: {
            total: 15,
            valid: 13,
            expiring: 2,
            expired: 0,
            nextExpiry: '2025-01-15T23:59:59Z'
        },
        keyRotation: {
            lastRotation: '2024-12-18T02:00:00Z',
            nextRotation: '2024-12-25T02:00:00Z',
            status: 'scheduled',
            frequency: 'weekly'
        }
    },
    anomalyAlerts: [
        {
            id: 'alert-001',
            type: 'new-country',
            severity: 'medium',
            message: 'New country login detected: Russia (Moscow)',
            timestamp: '2024-12-19T15:45:12Z',
            clientIP: '192.168.1.189',
            action: 'flagged-for-review'
        },
        {
            id: 'alert-002',
            type: 'multiple-failures',
            severity: 'high',
            message: '5 failed authentication attempts from 203.45.67.89',
            timestamp: '2024-12-19T15:32:18Z',
            clientIP: '203.45.67.89',
            action: 'ip-blocked'
        },
        {
            id: 'alert-003',
            type: 'traffic-spike',
            severity: 'low',
            message: 'Unusual traffic volume: 2.3GB in 30 minutes',
            timestamp: '2024-12-19T15:20:45Z',
            clientIP: '192.168.1.234',
            action: 'monitoring'
        }
    ],
    suggestedActions: [
        {
            id: 'action-001',
            priority: 'high',
            action: 'Rotate OpenVPN server keys',
            reason: 'Scheduled weekly rotation',
            estimated: '5 minutes'
        },
        {
            id: 'action-002',
            priority: 'medium',
            action: 'Review new country access',
            reason: 'Unusual location detected',
            estimated: '2 minutes'
        },
        {
            id: 'action-003',
            priority: 'low',
            action: 'Upgrade to PQC-only mode',
            reason: 'Enhanced future security',
            estimated: '15 minutes'
        }
    ]
};

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
    },
    {
        id: 'vpn-security-check',
        name: 'VPN Security Monitoring',
        description: 'Monitor VPN connections for security anomalies',
        executions: 28,
        status: 'Active',
        agent: 'VPNMonitor → ThreatScanner'
    }
};

// Scale-specific configurations for network module
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

// Enhanced Neural Network Background Animation
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
    const nodeCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 10000));
    
    // Create nodes with improved distribution
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
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
                
                if (dist < 120) {
                    const opacity = (1 - dist / 120) * 0.3;
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
                node.x, node.y, node.radius * 3
            );
            gradient.addColorStop(0, `rgba(0, 255, 136, ${intensity * 0.8 + 0.2})`);
            gradient.addColorStop(1, 'rgba(0, 255, 136, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius * (intensity * 0.5 + 1), 0, Math.PI * 2);
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

// Enhanced Chat System with V2.2 features including VPNMonitor
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
        
        // Limit message history
        if (this.messageHistory.length > 100) {
            this.messageHistory = this.messageHistory.slice(-50);
        }
    }
    
    formatMessage(message) {
        // Enhanced message formatting with security considerations
        return message
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
            // Fix terminology
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
        const indicator = document.getElementById('typingIndicator');
        if (indicator) indicator.remove();
    }
    
    async sendMessage(message) {
        if (!message?.trim()) return;
        
        // Add user message
        this.addMessage(message, true);
        
        // Show typing indicator
        this.showTypingIndicator();
        
        try {
            // Process command with enhanced routing
            await this.processCommand(message);
        } catch (error) {
            console.error('Chat error:', error);
            this.addMessage('⚠️ Communication error. Switching to local CLI mode.', false, 'error');
            SentinelState.cliMode = true;
        }
    }
    
    async processCommand(command) {
        const lowerCommand = command.toLowerCase();
        
        // Check agent state
        if (!SentinelState.agentActive || SentinelState.cliMode) {
            await this.processCLICommand(command);
            return;
        }
        
        // Simulate network delay
        await this.delay(300);
        this.removeTypingIndicator();
        
        // Enhanced command routing with context awareness
        await this.routeCommand(command, lowerCommand);
    }
    
    async routeCommand(command, lowerCommand) {
        this.addMessage('Routing to Main Agent...', false, 'system');
        await this.delay(500);
        
        // Context-aware routing
        const context = this.getCommandContext(lowerCommand);
        const subAgent = this.determineSubAgent(lowerCommand, context);
        
        if (subAgent !== 'main') {
            this.addMessage(`Main Agent: Routing to ${subAgent} sub-agent...`, false, 'system');
            await this.delay(800);
        }
        
        const response = this.generateResponse(lowerCommand, context, subAgent);
        this.addMessage(response, false);
    }
    
    getCommandContext(lowerCommand) {
        if (lowerCommand.includes('threat') || lowerCommand.includes('attack') || lowerCommand.includes('malware')) return 'threats';
        if (lowerCommand.includes('network') || lowerCommand.includes('device') || lowerCommand.includes('scan') || lowerCommand.includes('endpoint')) return 'network';
        if (lowerCommand.includes('encrypt') || lowerCommand.includes('crypto') || lowerCommand.includes('quantum') || lowerCommand.includes('hybrid') || lowerCommand.includes('certificate') || lowerCommand.includes('cert') || lowerCommand.includes('deploy')) return 'encryption';
        if (lowerCommand.includes('defense') || lowerCommand.includes('response') || lowerCommand.includes('honeypot')) return 'defense';
        if (lowerCommand.includes('analytics') || lowerCommand.includes('report') || lowerCommand.includes('metric') || lowerCommand.includes('compliance') || lowerCommand.includes('audit')) return 'analytics';
        if (lowerCommand.includes('log') || lowerCommand.includes('audit') || lowerCommand.includes('compliance')) return 'logs';
        if (lowerCommand.includes('vpn') || lowerCommand.includes('connection') || lowerCommand.includes('tunnel')) return 'vpn';
        if (lowerCommand.includes('scale') || lowerCommand.includes('environment') || lowerCommand.includes('reset') || lowerCommand.includes('license') || lowerCommand.includes('pricing')) return 'network';
        return SentinelState.currentPage;
    }
    
    determineSubAgent(lowerCommand, context) {
        // Enhanced sub-agent routing including VPNMonitor
        if (lowerCommand.includes('vpn') || lowerCommand.includes('connection') || lowerCommand.includes('tunnel')) return 'VPNMonitor';
        if (lowerCommand.includes('deploy') || lowerCommand.includes('deployment')) return 'EncryptionDeployer';
        if (lowerCommand.includes('certificate') || lowerCommand.includes('cert') || lowerCommand.includes('expire')) return 'CertificateManager';
        if (lowerCommand.includes('compliance') || lowerCommand.includes('audit') || lowerCommand.includes('soc') || lowerCommand.includes('iso') || lowerCommand.includes('nist')) return 'ComplianceMonitor';
        
        const agentMap = {
            threats: 'ThreatScanner',
            network: 'NetworkMapper',
            encryption: 'EncryptionManager',
            defense: 'DefenseOrchestrator',
            analytics: 'AnalyticsEngine',
            logs: 'LogAgent',
            vpn: 'VPNMonitor'
        };
        return agentMap[context] || 'main';
    }
    
    generateResponse(lowerCommand, context, subAgent) {
        // Enhanced response generation with V2.2 features
        const responses = this.getContextualResponses(context, subAgent);
        
        // Command-specific responses
        if (lowerCommand.includes('status')) {
            return this.generateStatusResponse(context);
        }
        
        if (lowerCommand.includes('help')) {
            return this.generateHelpResponse(context);
        }
        
        if (lowerCommand.includes('quarantine')) {
            const ipMatch = lowerCommand.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/);
            return this.handleQuarantine(ipMatch);
        }
        
        if (lowerCommand.includes('deploy') || lowerCommand.includes('deployment')) {
            return this.handleEncryptionDeployment(lowerCommand);
        }
        
        if (lowerCommand.includes('certificate') || lowerCommand.includes('cert')) {
            return this.handleCertificateQuery(lowerCommand);
        }
        
        if (lowerCommand.includes('compliance') || lowerCommand.includes('audit')) {
            return this.handleComplianceQuery(lowerCommand);
        }
        
        if (lowerCommand.includes('vpn') || lowerCommand.includes('connection')) {
            return this.handleVPNQuery(lowerCommand);
        }
        
        if (lowerCommand.includes('scale') || lowerCommand.includes('environment') || lowerCommand.includes('pricing') || lowerCommand.includes('license')) {
            return this.handleScaleQuery(lowerCommand);
        }
        
        if (lowerCommand.includes('endpoint') || lowerCommand.includes('cost') || lowerCommand.includes('billing')) {
            return this.handleEndpointPricing();
        }
        
        // Fallback to contextual responses
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    handleVPNQuery(lowerCommand) {
        const activeConnections = VPNConfigs.liveConnections.length;
        const totalServices = VPNConfigs.activeServices.length;
        const alerts = VPNConfigs.anomalyAlerts.length;
        
        if (lowerCommand.includes('status')) {
            return `VPNMonitor: ${activeConnections} active connections across ${totalServices} VPN services. OpenVPN: 8 connections, WireGuard: 4 connections, IPSec: Site-to-Site tunnel stable. ${alerts} security alerts requiring attention.`;
        }
        
        if (lowerCommand.includes('connections') || lowerCommand.includes('list')) {
            const connectionSummary = VPNConfigs.liveConnections.map(conn => 
                `${conn.deviceName} (${conn.country}) - ${conn.duration}`
            ).join(', ');
            return `VPNMonitor: Active connections - ${connectionSummary}. All connections using hybrid-resistant encryption.`;
        }
        
        if (lowerCommand.includes('security') || lowerCommand.includes('alerts')) {
            return `VPNMonitor: ${alerts} security alerts detected. New country login from Russia flagged for review. 5 failed auth attempts blocked from external IP. Traffic monitoring active with hybrid encryption.`;
        }
        
        if (lowerCommand.includes('certificates') || lowerCommand.includes('cert')) {
            const expiring = VPNConfigs.securityOverview.certificateStatus.expiring;
            return `VPNMonitor: ${VPNConfigs.securityOverview.certificateStatus.total} VPN certificates monitored. ${expiring} expiring soon. Next renewal scheduled with hybrid signatures. All certificates use post-quantum algorithms.`;
        }
        
        return `VPNMonitor: Monitoring ${activeConnections} active VPN connections with hybrid-resistant protocols. OpenVPN, WireGuard, and IPSec services operational. ${alerts} security events under review.`;
    }
    
    handleEncryptionDeployment(lowerCommand) {
        if (lowerCommand.includes('status')) {
            return 'EncryptionDeployer: TLS: ✅ Deployed, Database: ✅ Deployed, Disk: ⏳ Pending, Messaging: ✅ Deployed. 15 deployments completed today.';
        }
        return 'EncryptionDeployer: Ready to deploy encryption modules. Current status: 3/4 modules deployed. Use "deploy all" to complete remaining deployments.';
    }
    
    handleCertificateQuery(lowerCommand) {
        const expiringCount = CertificateConfigs.certificates.filter(cert => cert.status === 'expiring').length;
        if (lowerCommand.includes('status') || lowerCommand.includes('expire')) {
            return `CertificateManager: ${CertificateConfigs.certificates.length} certificates monitored. ${expiringCount} expiring soon. Next renewal: API Gateway cert (6 days). All certs use hybrid signatures.`;
        }
        return `CertificateManager: Certificate health check complete. ${expiringCount} certificates require attention. Auto-renewal scheduled with hybrid key algorithms.`;
    }
    
    handleComplianceQuery(lowerCommand) {
        const compliantCount = ComplianceConfigs.frameworks.filter(framework => framework.status === 'compliant').length;
        const totalFrameworks = ComplianceConfigs.frameworks.length;
        
        if (lowerCommand.includes('status')) {
            return `ComplianceMonitor: ${compliantCount}/${totalFrameworks} frameworks compliant. SOC2: ✅, ISO27001: ✅, NIST: ✅, PCI DSS: ⏳ Pending. All audits verified with hybrid-resistant logging.`;
        }
        
        if (lowerCommand.includes('report')) {
            return `ComplianceMonitor: Generating compliance report... Coverage: SOC2 100%, ISO27001 98%, NIST 99%, PCI DSS 85%. Report will be Dilithium-signed and encrypted.`;
        }
        
        return `ComplianceMonitor: Monitoring ${totalFrameworks} compliance frameworks. ${compliantCount} fully compliant. Next audit: PCI DSS (85 days). All data protected with hybrid encryption.`;
    }
    
    handleScaleQuery(lowerCommand) {
        const currentScale = SentinelState.currentScale;
        if (currentScale && ScaleConfigs[currentScale]) {
            const config = ScaleConfigs[currentScale];
            
            if (lowerCommand.includes('pricing') || lowerCommand.includes('cost') || lowerCommand.includes('license')) {
                return `NetworkMapper: Current deployment: ${config.text}
• License Fee: ${config.licenseFeeMo}/month
• Endpoint Cost: ${config.endpointCostMo}/endpoint/month
• Description: ${config.description}
• Cost Model: You pay a base license fee plus per-endpoint charges for discovered internal assets.`;
            }
            
            return `NetworkMapper: Current deployment scale: ${config.text}. ${config.description}. Interface optimized for ${config.chatContext}.`;
        }
        return 'NetworkMapper: Scale detection in progress. Please select your deployment type from the options above to see pricing details.';
    }
    
    handleEndpointPricing() {
        const currentScale = SentinelState.currentScale;
        if (currentScale && ScaleConfigs[currentScale]) {
            const config = ScaleConfigs[currentScale];
            return `NetworkMapper: Endpoint pricing for ${config.text} tier:
• License Fee: ${config.licenseFeeMo}/month (includes AI agent, threat detection, basic monitoring)
• Internal Endpoint Discovery: ${config.endpointCostMo}/endpoint/month
• You only pay for endpoints the agent discovers during internal scanning
• Install the agent only where you need monitoring to control costs
• Annual subscriptions include 20% discount on license fees`;
        }
        return 'NetworkMapper: Please select a deployment scale first to see endpoint pricing details.';
    }
    
    getContextualResponses(context, subAgent) {
        // Enhanced responses including VPNMonitor
        const newAgentResponses = {
            'VPNMonitor': [
                'VPNMonitor: 12 active VPN connections monitored. OpenVPN, WireGuard, and IPSec services operational with hybrid encryption.',
                'VPNMonitor: Security analysis complete. 2 anomalies detected, 1 new country login flagged for review. All tunnels secure.',
                'VPNMonitor: Certificate status: 13/15 valid, 2 expiring within 30 days. Auto-renewal configured with hybrid signatures.'
            ],
            'EncryptionDeployer': [
                'EncryptionDeployer: 15 encryption modules deployed today. TLS coverage: 100%, Database encryption: 100%, Disk encryption: 76% complete.',
                'EncryptionDeployer: Auto-deployment active for new devices. All deployments use hybrid algorithms with zero downtime.',
                'EncryptionDeployer: Rollback capability enabled. Can revert any deployment within 24 hours if issues detected.'
            ],
            'CertificateManager': [
                'CertificateManager: 247 certificates monitored across all systems. 2 expiring within 30 days. Auto-renewal configured.',
                'CertificateManager: Hybrid signature algorithms deployed: RSA+Dilithium, ECDSA+SPHINCS+, Ed25519+Falcon.',
                'CertificateManager: Certificate transparency logs verified. All issuances logged with hybrid-resistant signatures.'
            ],
            'ComplianceMonitor': [
                'ComplianceMonitor: SOC2 Type II: 100% compliant. ISO27001: 98% compliant (2 minor findings). NIST CSF: 99% compliant.',
                'ComplianceMonitor: Continuous monitoring active. Real-time compliance scoring with automated remediation suggestions.',
                'ComplianceMonitor: Audit trail complete with Dilithium-3 signatures. Ready for external auditor review.'
            ]
        };
        
        if (newAgentResponses[subAgent]) {
            return newAgentResponses[subAgent];
        }
        
        const responseMap = {
            threats: [
                'ThreatScanner: Currently tracking 7 active threats. All critical threats contained with hybrid encryption. ML confidence: 99.8%.',
                'ThreatScanner: Real-time analysis shows emerging attack patterns. All data protected with AES-256-GCM + Kyber-1024.',
                'ThreatScanner: Behavioral analysis detected 3 new threat signatures. DefenseOrchestrator coordinating response.'
            ],
            network: [
                'NetworkMapper: 247 devices discovered and monitored. Live discovery active with hybrid-resistant protocols.',
                'NetworkMapper: Dual-layer scanning (external + internal) operating normally. All communications hybrid encrypted.',
                'NetworkMapper: New device detection rate: 1 every 8-15 seconds. Endpoint billing calculated monthly based on discoveries.',
                'NetworkMapper: Agent-based internal scanning provides accurate endpoint counts for transparent billing.',
                'NetworkMapper: Encryption gap detected on 3 devices. EncryptionDeployer standing by for remediation.'
            ],
            encryption: [
                'EncryptionManager: Hybrid mode operational. Classical: AES-256-GCM, HMAC-SHA256. Post-Quantum: Kyber-1024, Dilithium-3.',
                'EncryptionManager: Processing 2.1M crypto operations/second. Key rotation scheduled every 24 hours.',
                'EncryptionManager: All systems hybrid-ready. NIST-approved algorithms with zero performance impact.',
                'EncryptionManager: Coordinating with EncryptionDeployer and CertificateManager for seamless key management.'
            ],
            defense: [
                'DefenseOrchestrator: 8 honeypots active. Automated response enabled. Average mitigation time: 0.3 seconds.',
                'DefenseOrchestrator: 124 attacks neutralized today. All actions logged with Dilithium-3 signatures.',
                'DefenseOrchestrator: Playbook execution successful. Coordinating with ThreatScanner and NetworkMapper.',
                'DefenseOrchestrator: 5 encryption playbooks active. Auto-encryption triggers deployed on 47 new devices.'
            ],
            analytics: [
                'AnalyticsEngine: Processing 2.4M metrics/hour. ML accuracy: 99.8%. Predictive models active.',
                'AnalyticsEngine: Trend analysis shows 78% increase in phishing attempts. Enhanced monitoring deployed.',
                'AnalyticsEngine: Real-time dashboards updated. All analytics protected with hybrid encryption.',
                'AnalyticsEngine: Compliance metrics integrated. ComplianceMonitor reporting 97% average compliance score.'
            ],
            logs: [
                'LogAgent: Processing 147K entries/minute. All logs Dilithium-signed for compliance.',
                'LogAgent: SOC2, ISO27001, NIST compliance verified. Tamper-proof storage active.',
                'LogAgent: Audit trail complete with hybrid-resistant signatures. Ready for forensic analysis.'
            ],
            vpn: [
                'VPNMonitor: 12 active connections across 3 VPN services. All tunnels encrypted with hybrid-resistant protocols.',
                'VPNMonitor: Real-time anomaly detection active. 2 security alerts under review, 1 new country flagged.',
                'VPNMonitor: Certificate management integrated. 15 VPN certificates monitored, 2 scheduled for renewal.'
            ]
        };
        
        return responseMap[context] || ['Main Agent: Command processed successfully. All operations protected with hybrid encryption.'];
    }
    
    generateStatusResponse(context) {
        const scaleText = SentinelState.currentScale ? ScaleConfigs[SentinelState.currentScale].text : 'DETECTING';
        const config = SentinelState.currentScale ? ScaleConfigs[SentinelState.currentScale] : null;
        
        let statusText = `System Status - ${context.toUpperCase()} Module:
• AI Mode: ${SentinelState.agentActive ? 'Autonomous' : 'Manual Control'}
• Scale: ${scaleText}
• Encryption: Hybrid Active (Classical + Post-Quantum)
• Sub-Agents: 10 Online (including VPNMonitor + 3 encryption specialists)
• Threat Level: Medium
• Discovery: ${SentinelState.discoveryActive ? 'ACTIVE' : 'PAUSED'}
• Performance: Optimal
• Uptime: 99.98%`;

        if (context === 'vpn') {
            statusText += `
• VPN Services: 3 Active
• Active Connections: ${VPNConfigs.liveConnections.length}
• Security Alerts: ${VPNConfigs.anomalyAlerts.length}`;
        }

        if (config) {
            statusText += `
• License: ${config.licenseFeeMo}/month
• Endpoint Rate: ${config.endpointCostMo}/endpoint/month`;
        }

        return statusText;
    }
    
    generateHelpResponse(context) {
        const commands = {
            general: ['status', 'help', 'list threats', 'scan network', 'show encryption', 'view logs', 'vpn status', 'scale info', 'pricing info', 'deploy encryption', 'cert status', 'compliance report'],
            threats: ['list threats', 'analyze threat [ID]', 'quarantine [IP]', 'threat stats'],
            network: ['scan network', 'list devices', 'discovery status', 'device info [IP]', 'scale info', 'reset config', 'endpoint pricing', 'encryption gaps'],
            encryption: ['show encryption', 'key rotation', 'algorithm status', 'hybrid readiness', 'deploy all', 'cert status', 'deployment status'],
            defense: ['defense status', 'list honeypots', 'response time', 'playbook status', 'encryption playbooks'],
            analytics: ['analytics report', 'threat trends', 'performance metrics', 'predictions', 'compliance report', 'audit status'],
            vpn: ['vpn status', 'list connections', 'security alerts', 'cert status', 'anomaly report', 'connection stats']
        };
        
        const contextCommands = commands[context] || commands.general;
        return `Available Commands (${context.toUpperCase()}):
${contextCommands.map(cmd => `• ${cmd}`).join('\n')}

All commands route through appropriate sub-agents with hybrid encryption.`;
    }
    
    handleQuarantine(ipMatch) {
        if (ipMatch) {
            const ip = ipMatch[1];
            // Simulate quarantine action
            setTimeout(() => {
                this.addMessage(`DefenseOrchestrator: IP ${ip} quarantined successfully. All traffic blocked. Action logged with hybrid-resistant signature.`, false);
            }, 1000);
            return `Main Agent: Initiating quarantine for IP ${ip}...`;
        }
        return 'Main Agent: Please specify a valid IP address. Usage: quarantine 192.168.1.105';
    }
    
    async processCLICommand(command) {
        const lowerCommand = command.toLowerCase();
        
        // Show CLI mode indicator
        const cliIndicator = document.getElementById('cliModeIndicator');
        if (cliIndicator) cliIndicator.classList.add('active');
        
        await this.delay(300);
        this.removeTypingIndicator();
        
        const cliResponses = {
            'help': `CLI Mode Commands (Hybrid V2.2):
• status - System overview
• list threats - Active threats
• scan network - Network devices
• show encryption - Encryption status
• vpn status - VPN connections
• view logs - Recent events
• quarantine [IP] - Block IP
• enable agent - Restore AI control
• discovery status - Device discovery
• scale info - Current scale
• pricing info - License & endpoint costs
• deploy status - Encryption deployments
• cert status - Certificate status
• compliance status - Compliance overview
• version - Show version info`,
            
            'status': `[CLI] System Status:
• Mode: CLI (Manual Control)
• Scale: ${SentinelState.currentScale ? ScaleConfigs[SentinelState.currentScale].text : 'DETECTING'}
• Version: ${SENTINEL_VERSION}
• Threats: 7 active
• Devices: 247 protected  
• VPN Connections: ${VPNConfigs.liveConnections.length} active
• Encryption: Hybrid Active
• Discovery: ${SentinelState.discoveryActive ? 'ACTIVE' : 'PAUSED'}
• Sub-Agents: 10 online (7 core + 3 encryption)
• Uptime: 99.98%`,
            
            'version': `[CLI] AI Sentinel-X Hybrid V2.2
• Version: ${SENTINEL_VERSION}
• API: ${API_VERSION}
• Encryption: Classical + Post-Quantum
• Architecture: Modular Sub-Agent System
• New Features: VPNMonitor, EncryptionDeployer, CertificateManager, ComplianceMonitor
• Status: Operational`,
            
            'vpn status': () => {
                const connections = VPNConfigs.liveConnections.length;
                const services = VPNConfigs.activeServices.length;
                const alerts = VPNConfigs.anomalyAlerts.length;
                return `[CLI] VPN Status:
• Services: ${services} active (OpenVPN, WireGuard, IPSec)
• Connections: ${connections} active
• Security Alerts: ${alerts}
• OpenVPN Port 1194: 8 connections
• WireGuard Port 51820: 4 connections
• IPSec Site-to-Site: Active tunnel`;
            },
            
            'deploy status': () => {
                const deployed = EncryptionDeploymentConfigs.modules.filter(m => m.status === 'deployed').length;
                const total = EncryptionDeploymentConfigs.modules.length;
                return `[CLI] Encryption Deployment Status:
• Modules: ${deployed}/${total} deployed
• TLS: ✅ 247/247 devices
• Database: ✅ 12/12 databases  
• Disk: ⏳ 189/247 devices
• Messaging: ✅ 100% channels`;
            },
            
            'cert status': () => {
                const expiring = CertificateConfigs.certificates.filter(cert => cert.status === 'expiring').length;
                const total = CertificateConfigs.certificates.length;
                const vpnExpiring = VPNConfigs.securityOverview.certificateStatus.expiring;
                const vpnTotal = VPNConfigs.securityOverview.certificateStatus.total;
                return `[CLI] Certificate Status:
• System Certs: ${total} total, ${expiring} expiring
• VPN Certs: ${vpnTotal} total, ${vpnExpiring} expiring
• Next renewal: API Gateway (6 days)
• All use hybrid signatures`;
            },
            
            'compliance status': () => {
                const compliant = ComplianceConfigs.frameworks.filter(f => f.status === 'compliant').length;
                const total = ComplianceConfigs.frameworks.length;
                return `[CLI] Compliance Status:
• Frameworks: ${compliant}/${total} compliant
• SOC2: ✅ 100%
• ISO27001: ⚠️ 98% (2 findings)
• NIST: ✅ 99%
• PCI DSS: ⏳ 85% (pending)`;
            },
            
            'scale info': () => {
                const currentScale = SentinelState.currentScale;
                if (currentScale && ScaleConfigs[currentScale]) {
                    const config = ScaleConfigs[currentScale];
                    return `[CLI] Current Scale: ${config.text}
• Type: ${currentScale.toUpperCase()}
• Max Ranges: ${config.maxRanges}
• Device Range: ${config.deviceRange[0]}-${config.deviceRange[1]}
• License Fee: ${config.licenseFeeMo}/month
• Endpoint Cost: ${config.endpointCostMo}/endpoint/month
• Description: ${config.description}`;
                }
                return '[CLI] Scale: Not configured. Please select deployment type.';
            },
            
            'pricing info': () => {
                const currentScale = SentinelState.currentScale;
                if (currentScale && ScaleConfigs[currentScale]) {
                    const config = ScaleConfigs[currentScale];
                    return `[CLI] ${config.text} Pricing:
• License Fee: ${config.licenseFeeMo}/month
• Endpoint Discovery: ${config.endpointCostMo}/endpoint/month
• Billing: Monthly based on discovered endpoints
• Annual discount: 20% off license fees`;
                }
                return '[CLI] Please select a deployment scale first.';
            },
            
            'list threats': `[CLI] Active Threats:
1. SQL Injection - /api/users - BLOCKED
2. DDoS Attack - Port 80 - MITIGATING
3. Port Scan - 185.*.*.* - MONITORED  
4. Brute Force - SSH - RATE LIMITED
5. Malware C2 - ISOLATED
6. Phishing - Email - QUARANTINED
7. Zero-Day - Web Server - ANALYZING`,
            
            'enable agent': () => {
                this.enableAgent();
                return '✅ Main Agent re-enabled. Autonomous mode restored.';
            }
        };
        
        const response = typeof cliResponses[lowerCommand] === 'function' 
            ? cliResponses[lowerCommand]() 
            : cliResponses[lowerCommand] || `[CLI] Command executed: ${command}`;
        
        this.addMessage(response, false);
    }
    
    enableAgent() {
        SentinelState.agentActive = true;
        SentinelState.cliMode = false;
        SentinelState.discoveryActive = true;
        
        const cliIndicator = document.getElementById('cliModeIndicator');
        if (cliIndicator) cliIndicator.classList.remove('active');
        
        // Update UI elements
        this.updateAgentStatus();
    }
    
    updateAgentStatus() {
        const agentStatus = document.querySelector('.agent-status');
        if (agentStatus) {
            agentStatus.style.background = 'rgba(0, 255, 136, 0.1)';
            agentStatus.style.borderColor = '#00ff88';
            
            const title = agentStatus.querySelector('.agent-title');
            const text = agentStatus.querySelector('.agent-status-text');
            
            if (title) title.textContent = 'AI Agent Active';
            if (text) text.textContent = 'Autonomous with Manual Override';
        }
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Enhanced Event Handlers
class SentinelEventHandlers {
    static initializeEventListeners() {
        // Chat input handlers
        const chatInput = document.getElementById('aiChatInput');
        if (chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const message = chatInput.value.trim();
                    if (message) {
                        sentinelChat.sendMessage(message);
                        chatInput.value = '';
                    }
                }
            });
        }
        
        // Chat send button
        const sendButton = document.getElementById('aiChatSend');
        if (sendButton) {
            sendButton.addEventListener('click', () => {
                const chatInput = document.getElementById('aiChatInput');
                if (chatInput) {
                    const message = chatInput.value.trim();
                    if (message) {
                        sentinelChat.sendMessage(message);
                        chatInput.value = '';
                    }
                }
            });
        }
        
        // Chat toggle - Fixed to work properly
        const chatToggle = document.querySelector('.ai-chat-toggle');
        if (chatToggle) {
            // Remove any existing listeners to prevent duplicates
            chatToggle.onclick = null;
            chatToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (sentinelChat) {
                    sentinelChat.toggle();
                } else {
                    // Fallback
                    window.toggleChat();
                }
            });
        }
        
        // Chat close button
        const chatClose = document.querySelector('.ai-chat-close');
        if (chatClose) {
            chatClose.onclick = null;
            chatClose.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (sentinelChat) {
                    sentinelChat.toggle();
                } else {
                    window.toggleChat();
                }
            });
        }
    }
    
    static initializeModalHandlers() {
        // Modal overlay click handlers for all modals
        const modals = ['agentShutdownModal', 'addRangeModal', 'rescanModal'];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        SentinelEventHandlers.closeModal(modalId);
                    }
                });
            }
        });
    }
    
    static showAgentShutdownModal() {
        const modal = document.getElementById('agentShutdownModal');
        if (modal) modal.style.display = 'flex';
    }
    
    static closeModal(modalId = 'agentShutdownModal') {
        const modal = document.getElementById(modalId);
        if (modal) modal.style.display = 'none';
    }
    
    static confirmAgentShutdown() {
        SentinelState.agentActive = !SentinelState.agentActive;
        
        if (!SentinelState.agentActive) {
            SentinelState.discoveryActive = false;
            SentinelState.scanningActive = false;
        }
        
        sentinelChat.updateAgentStatus();
        SentinelEventHandlers.closeModal();
        
        const status = SentinelState.agentActive ? 'resumed autonomous operation' : 'switched to manual control mode';
        if (SentinelState.chatOpen) {
            sentinelChat.addMessage(`⚠️ Main Agent has ${status}. CLI mode available if external connections fail.`, false, 'system');
        }
    }
}

// Enhanced Utilities
class SentinelUtils {
    static formatTimestamp(date = new Date()) {
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    }
    
    static generateSecureId() {
        return 'sentinel_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    static validateIP(ip) {
        const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return ipRegex.test(ip);
    }
    
    static validateCIDR(cidr) {
        const cidrRegex = /^(\d{1,3}\.){3}\d{1,3}\/\d{1,2}$/;
        return cidrRegex.test(cidr);
    }
    
    static sanitizeInput(input) {
        if (typeof input !== 'string') return '';
        return input
            .replace(/[<>]/g, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+=/gi, '')
            .trim();
    }
    
    static debounce(func, wait) {
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
    
    static throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Network-specific utilities
    static updateElementText(elementId, text) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = text;
        }
    }
    
    static updateElementHTML(elementId, html) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
        }
    }
    
    static showElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.display = element.tagName.toLowerCase() === 'div' ? 'block' : 'flex';
        }
    }
    
    static hideElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.display = 'none';
        }
    }
    
    static setElementClass(elementId, className) {
        const element = document.getElementById(elementId);
        if (element) {
            element.className = className;
        }
    }
    
    static addElementClass(elementId, className) {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.add(className);
        }
    }
    
    static removeElementClass(elementId, className) {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.remove(className);
        }
    }
    
    // Enhanced utility functions for new features
    static formatDateFromISO(isoString) {
        if (!isoString) return 'Never';
        const date = new Date(isoString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
    
    static getDaysUntilExpiry(isoString) {
        if (!isoString) return null;
        const expiry = new Date(isoString);
        const now = new Date();
        const diffTime = expiry - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
    
    static getStatusClass(status) {
        const statusMap = {
            'valid': 'status-secure',
            'expiring': 'status-warning',
            'expired': 'status-vulnerable',
            'revoked': 'status-vulnerable',
            'deployed': 'status-secure',
            'pending': 'status-warning',
            'failed': 'status-vulnerable',
            'compliant': 'status-secure',
            'non-compliant': 'status-vulnerable',
            'active': 'status-secure',
            'inactive': 'status-warning',
            'connected': 'status-secure',
            'disconnected': 'status-vulnerable'
        };
        return statusMap[status.toLowerCase()] || 'status-warning';
    }
    
    static formatDuration(startTime) {
        const start = new Date(startTime);
        const now = new Date();
        const diffMs = now - start;
        
        const hours = Math.floor(diffMs / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        
        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        } else {
            return `${minutes}m`;
        }
    }
    
    static formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
}

// Connection Monitor for V2.2
class SentinelConnectionMonitor {
    constructor() {
        this.connected = true;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.reconnectDelay = 1000;
    }
    
    startMonitoring() {
        setInterval(() => {
            this.checkConnection();
        }, 30000);
    }
    
    checkConnection() {
        // Simulate connection check
        if (Math.random() > 0.95 && SentinelState.agentActive) {
            this.handleConnectionLoss();
        }
    }
    
    handleConnectionLoss() {
        if (this.connected) {
            this.connected = false;
            SentinelState.cliMode = true;
            
            const cliIndicator = document.getElementById('cliModeIndicator');
            if (cliIndicator) cliIndicator.classList.add('active');
            
            if (SentinelState.chatOpen) {
                sentinelChat.addMessage('⚠️ Main Agent connection lost. Switching to CLI fallback mode. Type "help" for available commands.', false, 'system');
            }
            
            this.attemptReconnection();
        }
    }
    
    attemptReconnection() {
        setTimeout(() => {
            this.reconnectAttempts++;
            
            if (this.reconnectAttempts <= this.maxReconnectAttempts) {
                // Simulate successful reconnection
                if (Math.random() > 0.3) {
                    this.handleReconnection();
                } else {
                    this.attemptReconnection();
                }
            }
        }, this.reconnectDelay * this.reconnectAttempts);
    }
    
    handleReconnection() {
        this.connected = true;
        this.reconnectAttempts = 0;
        SentinelState.cliMode = false;
        
        const cliIndicator = document.getElementById('cliModeIndicator');
        if (cliIndicator) cliIndicator.classList.remove('active');
        
        if (SentinelState.chatOpen) {
            sentinelChat.addMessage('✅ Main Agent connection restored. Autonomous mode resumed.', false, 'system');
        }
    }
}

// Global instances
let sentinelChat;
let connectionMonitor;
let neuralCleanup;

// Enhanced initialization
function initializeSentinel() {
    initializePageContext();
    
    // Initialize chat system
    sentinelChat = new SentinelChat();
    
    // Initialize connection monitor
    connectionMonitor = new SentinelConnectionMonitor();
    connectionMonitor.startMonitoring();
    
    // Initialize event handlers
    SentinelEventHandlers.initializeEventListeners();
    SentinelEventHandlers.initializeModalHandlers();
    
    // Initialize neural background
    neuralCleanup = initNeuralBackground();
    
    // Add global CSS for enhanced features
    addEnhancedCSS();
    
    // Fix terminology in existing content
    fixTerminologyInDOM();
}

// Fix existing terminology in DOM
function fixTerminologyInDOM() {
    // Function to recursively replace text content
    function replaceTextInNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = node.textContent
                .replace(/quantum-resistant/gi, 'hybrid-resistant')
                .replace(/Quantum-resistant/gi, 'Hybrid-resistant');
        } else {
            for (let child of node.childNodes) {
                replaceTextInNode(child);
            }
        }
    }
    
    // Apply to document body after a short delay to ensure DOM is ready
    setTimeout(() => {
        replaceTextInNode(document.body);
    }, 100);
}

// Enhanced CSS for V2.2 features
function addEnhancedCSS() {
    const style = document.createElement('style');
    style.textContent = `
        /* Typing indicator animation */
        .typing-dots {
            display: flex;
            gap: 4px;
            padding: 10px;
        }
        
        .typing-dot {
            width: 8px;
            height: 8px;
            background: var(--primary, #00ff88);
            border-radius: 50%;
            animation: typingDot 1.4s ease-in-out infinite;
        }
        
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        
        @keyframes typingDot {
            0%, 60%, 100% {
                transform: translateY(0);
                opacity: 0.7;
            }
            30% {
                transform: translateY(-10px);
                opacity: 1;
            }
        }
        
        /* Enhanced message bubbles */
        .ai-message-bubble.error {
            background: rgba(255, 0, 68, 0.1);
            border-color: var(--danger, #ff0044);
        }
        
        .ai-message-bubble code {
            background: rgba(255, 255, 255, 0.1);
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
        }
        
        /* Connection status indicators */
        .connection-status {
            position: fixed;
            top: 10px;
            right: 10px;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: bold;
            z-index: 10001;
            transition: all 0.3s ease;
        }
        
        .connection-status.connected {
            background: rgba(0, 255, 136, 0.2);
            color: var(--success, #00ff88);
        }
        
        .connection-status.disconnected {
            background: rgba(255, 0, 68, 0.2);
            color: var(--danger, #ff0044);
            animation: pulse 2s ease-in-out infinite;
        }
        
        /* Enhanced reset button styling */
        .reset-config-btn {
            transition: all 0.3s ease;
        }
        
        .reset-config-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(255, 170, 0, 0.3);
        }
        
        /* New encryption gap alert styling */
        .encryption-gap-alert {
            background: linear-gradient(135deg, rgba(255, 170, 0, 0.15) 0%, rgba(255, 68, 68, 0.1) 100%);
            border: 2px solid var(--warning);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            animation: alertPulse 3s ease-in-out infinite;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .encryption-gap-alert:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 170, 0, 0.4);
        }
        
        @keyframes alertPulse {
            0%, 100% { box-shadow: 0 0 20px rgba(255, 170, 0, 0.3); }
            50% { box-shadow: 0 0 30px rgba(255, 170, 0, 0.6); }
        }
        
        .alert-content {
            flex: 1;
        }
        
        .alert-title {
            font-size: 18px;
            font-weight: bold;
            color: var(--warning);
            margin-bottom: 8px;
        }
        
        .alert-description {
            color: var(--text-secondary);
            font-size: 14px;
        }
        
        .alert-button {
            background: var(--gradient-1);
            border: none;
            border-radius: 10px;
            padding: 12px 24px;
            color: var(--bg-darker);
            font-weight: bold;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s ease;
        }
        
        .alert-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 255, 136, 0.4);
        }
        
        /* Enhanced status badges */
        .status-expiring {
            background: rgba(255, 170, 0, 0.2);
            color: var(--warning);
            border: 1px solid var(--warning);
        }
        
        .status-expired {
            background: rgba(255, 0, 68, 0.2);
            color: var(--danger);
            border: 1px solid var(--danger);
        }
        
        .status-pending {
            background: rgba(0, 204, 255, 0.2);
            color: var(--secondary);
            border: 1px solid var(--secondary);
        }
        
        /* VPN-specific styling */
        .vpn-connection-card {
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 255, 136, 0.02) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 15px;
            transition: all 0.3s ease;
        }
        
        .vpn-connection-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 255, 136, 0.2);
            border-color: var(--primary);
        }
        
        .vpn-service-status {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
        }
        
        .vpn-service-status.active {
            background: rgba(0, 255, 136, 0.2);
            color: var(--success);
            border: 1px solid var(--success);
        }
        
        .vpn-service-status.inactive {
            background: rgba(255, 0, 68, 0.2);
            color: var(--danger);
            border: 1px solid var(--danger);
        }
        
        /* Improved responsive design */
        @media (max-width: 768px) {
            .ip-range-controls {
                flex-direction: column;
                gap: 10px;
                width: 100%;
            }
            
            .reset-config-btn,
            .add-range-btn {
                width: 100%;
                justify-content: center;
            }
            
            .range-info {
                grid-template-columns: 1fr;
            }
            
            .range-metrics {
                flex-direction: column;
                gap: 10px;
            }
            
            .encryption-gap-alert {
                flex-direction: column;
                gap: 15px;
                text-align: center;
            }
            
            .vpn-connection-card {
                padding: 15px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Common logout handler
function handleLogout() {
    if (confirm('Are you sure you want to logout? The AI agent will continue protecting your network autonomously.')) {
        localStorage.removeItem('sentinel_auth');
        localStorage.removeItem('sentinel_scale'); // Reset scale on logout
        window.location.href = 'index.html';
    }
}

// Cleanup function
function cleanupSentinel() {
    if (neuralCleanup) neuralCleanup();
    if (connectionMonitor) connectionMonitor = null;
    if (sentinelChat) sentinelChat = null;
}

// Global exports for backward compatibility
window.SentinelState = SentinelState;
window.ScaleConfigs = ScaleConfigs;
window.SubAgentConfigs = SubAgentConfigs;
window.EncryptionDeploymentConfigs = EncryptionDeploymentConfigs;
window.CertificateConfigs = CertificateConfigs;
window.ComplianceConfigs = ComplianceConfigs;
window.EncryptionPlaybooks = EncryptionPlaybooks;
window.VPNConfigs = VPNConfigs;
window.sentinelChat = sentinelChat;
window.SentinelUtils = SentinelUtils;
window.SentinelEventHandlers = SentinelEventHandlers;

// Legacy function exports - Fixed chat toggle
window.toggleChat = () => {
    if (sentinelChat) {
        sentinelChat.toggle();
    } else {
        // Fallback for before initialization
        SentinelState.chatOpen = !SentinelState.chatOpen;
        const chatWindow = document.getElementById('aiChatWindow');
        if (chatWindow) {
            if (SentinelState.chatOpen) {
                chatWindow.classList.add('active');
            } else {
                chatWindow.classList.remove('active');
            }
        }
    }
};
window.addChatMessage = (msg, isUser, type) => sentinelChat?.addMessage(msg, isUser, type);
window.processCommand = (cmd) => sentinelChat?.sendMessage(cmd);
window.showAgentShutdownModal = SentinelEventHandlers.showAgentShutdownModal;
window.closeModal = SentinelEventHandlers.closeModal;
window.closeModalOnOverlay = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        const modalId = e.target.id;
        SentinelEventHandlers.closeModal(modalId);
    }
};
window.confirmAgentShutdown = SentinelEventHandlers.confirmAgentShutdown;
window.handleChatKeyPress = (e) => {
    if (e.key === 'Enter') {
        const input = e.target;
        const message = input.value.trim();
        if (message) {
            sentinelChat?.sendMessage(message);
            input.value = '';
        }
    }
};
window.sendChatMessage = () => {
    const input = document.getElementById('aiChatInput');
    if (input) {
        const message = input.value.trim();
        if (message) {
            sentinelChat?.sendMessage(message);
            input.value = '';
        }
    }
};
window.handleLogout = handleLogout;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSentinel);
} else {
    initializeSentinel();
}

// Cleanup on page unload
window.addEventListener('beforeunload', cleanupSentinel);

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SentinelState,
        ScaleConfigs,
        SubAgentConfigs,
        EncryptionDeploymentConfigs,
        CertificateConfigs,
        ComplianceConfigs,
        EncryptionPlaybooks,
        VPNConfigs,
        SentinelChat,
        SentinelUtils,
        SentinelEventHandlers,
        initializeSentinel,
        cleanupSentinel
    };
}
