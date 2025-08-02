/**
 * AI Sentinel-X Shared JavaScript Library V4 - Enhanced Network Discovery
 * Complete modular architecture with NetworkMapper V4 support
 */

// Version and configuration
const SENTINEL_VERSION = '4.0-network';
const API_VERSION = 'v4';

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
        main: '/api/v4/agent',
        threats: '/api/v4/threats',
        network: '/api/v4/network',
        encryption: '/api/v4/encryption',
        analytics: '/api/v4/analytics',
        compliance: '/api/v4/compliance',
        vpn: '/api/v4/vpn'
    }
};

// Enhanced sub-agent configurations including NetworkMapper V4
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
        description: 'V4 Enhanced Discovery',
        activity: 'Auto-scan & endpoint billing',
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
    // Enhanced encryption sub-agents
    encryptionDeployer: {
        name: 'EncryptionDeployer',
        icon: '🔧',
        description: 'Auto-deploying encryption',
        activity: 'Gap remediation active',
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
        }
    }
};

// Package configurations for NetworkMapper V4
const PackageConfigs = {
    essential: {
        name: 'Single Server Protection',
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
        serviceRange: [10, 25],
        chatContext: 'single server deployment with essential security monitoring'
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
        serviceRange: [50, 200],
        chatContext: 'multi-site business with enhanced security requirements'
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
        serviceRange: [500, 1500],
        chatContext: 'enterprise data center with distributed infrastructure'
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

// Enhanced Chat System with V4 NetworkMapper features
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
        if (lowerCommand.includes('scale') || lowerCommand.includes('environment') || lowerCommand.includes('reset') || lowerCommand.includes('license') || lowerCommand.includes('pricing') || lowerCommand.includes('package')) return 'network';
        return SentinelState.currentPage;
    }
    
    determineSubAgent(lowerCommand, context) {
        // Enhanced sub-agent routing including NetworkMapper V4
        if (lowerCommand.includes('vpn') || lowerCommand.includes('connection') || lowerCommand.includes('tunnel')) return 'VPNMonitor';
        if (lowerCommand.includes('deploy') || lowerCommand.includes('deployment') || lowerCommand.includes('gap')) return 'EncryptionDeployer';
        if (lowerCommand.includes('certificate') || lowerCommand.includes('cert') || lowerCommand.includes('expire')) return 'CertificateManager';
        if (lowerCommand.includes('compliance') || lowerCommand.includes('audit') || lowerCommand.includes('soc') || lowerCommand.includes('iso') || lowerCommand.includes('nist')) return 'ComplianceMonitor';
        if (lowerCommand.includes('scan') || lowerCommand.includes('discovery') || lowerCommand.includes('endpoint') || lowerCommand.includes('billing') || lowerCommand.includes('package')) return 'NetworkMapper';
        
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
        // Enhanced response generation with V4 features
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
        
        if (lowerCommand.includes('scan') || lowerCommand.includes('discovery')) {
            return this.handleNetworkScan(lowerCommand);
        }
        
        if (lowerCommand.includes('package') || lowerCommand.includes('pricing')) {
            return this.handlePackageQuery(lowerCommand);
        }
        
        if (lowerCommand.includes('endpoint') || lowerCommand.includes('billing')) {
            return this.handleEndpointQuery(lowerCommand);
        }
        
        if (lowerCommand.includes('deploy') || lowerCommand.includes('gap')) {
            return this.handleEncryptionDeployment(lowerCommand);
        }
        
        if (lowerCommand.includes('vpn') || lowerCommand.includes('connection')) {
            return this.handleVPNQuery(lowerCommand);
        }
        
        // Fallback to contextual responses
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    handleNetworkScan(lowerCommand) {
        if (lowerCommand.includes('status')) {
            return 'NetworkMapper V4: Auto-scan enabled. External scan via Shodan API + internal agent discovery. Endpoint billing calculated based on discovered devices. Ready for comprehensive network analysis.';
        }
        return 'NetworkMapper V4: Enhanced discovery engine ready. Run auto-scan to detect infrastructure and recommend optimal protection package with transparent endpoint pricing.';
    }
    
    handlePackageQuery(lowerCommand) {
        const packages = Object.values(PackageConfigs);
        
        if (lowerCommand.includes('compare')) {
            return `NetworkMapper V4: Package comparison:
• Essential ($29/mo): Single server, $0.10/endpoint
• Multi-Site ($149/mo): Business networks, $0.08/endpoint  
• Global ($499/mo): Enterprise, $0.05/endpoint
Run auto-scan for personalized recommendations.`;
        }
        
        return `NetworkMapper V4: Three protection levels available. License fees start at $29/month plus per-endpoint discovery charges. Auto-scan will recommend optimal package based on your infrastructure.`;
    }
    
    handleEndpointQuery(lowerCommand) {
        return `NetworkMapper V4: Endpoint billing model:
• You pay only for devices our agent discovers during internal scanning
• License fee covers AI agent, external scanning, and base monitoring
• Install agents only where needed to control costs
• Transparent monthly billing based on actual endpoint count
• No hidden fees or surprise charges`;
    }
    
    handleEncryptionDeployment(lowerCommand) {
        if (lowerCommand.includes('gap') || lowerCommand.includes('remediate')) {
            return 'EncryptionDeployer: Gap remediation active. Coordinating with NetworkMapper to identify unencrypted devices. Hybrid-resistant modules ready for deployment.';
        }
        return 'EncryptionDeployer: Auto-deployment active for discovered devices. All new endpoints receive encryption within 5 minutes of discovery.';
    }
    
    handleVPNQuery(lowerCommand) {
        const activeConnections = VPNConfigs.liveConnections.length;
        const totalServices = VPNConfigs.activeServices.length;
        
        if (lowerCommand.includes('status')) {
            return `VPNMonitor: ${activeConnections} active connections across ${totalServices} VPN services. All tunnels secured with hybrid-resistant protocols.`;
        }
        
        return `VPNMonitor: Monitoring ${activeConnections} active VPN connections. OpenVPN, WireGuard, and IPSec services operational with post-quantum encryption.`;
    }
    
    getContextualResponses(context, subAgent) {
        // Enhanced responses for V4 NetworkMapper
        const v4Responses = {
            'NetworkMapper': [
                'NetworkMapper V4: Enhanced discovery with auto-scan and endpoint billing. External + internal scanning for complete visibility.',
                'NetworkMapper V4: Package recommendations based on infrastructure analysis. Transparent pricing with per-endpoint billing.',
                'NetworkMapper V4: Encryption gap detection active. Coordinating with EncryptionDeployer for automatic remediation.',
                'NetworkMapper V4: Real-time endpoint discovery with immediate billing calculation. No surprises, full transparency.'
            ]
        };
        
        if (v4Responses[subAgent]) {
            return v4Responses[subAgent];
        }
        
        const responseMap = {
            threats: [
                'ThreatScanner: Currently tracking 7 active threats. All critical threats contained with hybrid encryption. ML confidence: 99.8%.',
                'ThreatScanner: Real-time analysis shows emerging attack patterns. All data protected with AES-256-GCM + Kyber-1024.'
            ],
            network: [
                'NetworkMapper V4: Enhanced discovery engine operational. Auto-scan + endpoint billing provides complete infrastructure visibility.',
                'NetworkMapper V4: Package recommendations based on real infrastructure analysis. Transparent endpoint pricing model.'
            ],
            encryption: [
                'EncryptionManager: Hybrid mode operational. Classical: AES-256-GCM, HMAC-SHA256. Post-Quantum: Kyber-1024, Dilithium-3.',
                'EncryptionManager: Coordinating with EncryptionDeployer for gap remediation and auto-deployment to new endpoints.'
            ],
            defense: [
                'DefenseOrchestrator: 8 honeypots active. Automated response enabled. Average mitigation time: 0.3 seconds.',
                'DefenseOrchestrator: 124 attacks neutralized today. All actions logged with Dilithium-3 signatures.'
            ],
            analytics: [
                'AnalyticsEngine: Processing 2.4M metrics/hour. ML accuracy: 99.8%. Predictive models active.',
                'AnalyticsEngine: Real-time dashboards updated. All analytics protected with hybrid encryption.'
            ],
            vpn: [
                'VPNMonitor: 12 active connections across 3 VPN services. All tunnels encrypted with hybrid-resistant protocols.',
                'VPNMonitor: Real-time anomaly detection active. Certificate management integrated.'
            ]
        };
        
        return responseMap[context] || ['Main Agent: Command processed successfully. All operations protected with hybrid encryption.'];
    }
    
    generateStatusResponse(context) {
        const apiKey = localStorage.getItem('sentinel_api_key');
        const package = localStorage.getItem('sentinel_package');
        
        let statusText = `System Status - ${context.toUpperCase()} Module:
• AI Mode: ${SentinelState.agentActive ? 'Autonomous' : 'Manual Control'}
• Version: V4 Network Discovery
• Encryption: Hybrid Active (Classical + Post-Quantum)
• Sub-Agents: 10 Online (including NetworkMapper V4)
• Discovery: ${SentinelState.discoveryActive ? 'ACTIVE' : 'PAUSED'}
• Performance: Optimal`;

        if (apiKey && package) {
            const config = PackageConfigs[package];
            if (config) {
                statusText += `
• Package: ${config.name}
• License: $${config.price}/month
• Endpoint Rate: $${config.endpointRate}/endpoint/month`;
            }
        } else {
            statusText += `
• Package: Not configured
• Status: Run auto-scan for setup`;
        }

        return statusText;
    }
    
    generateHelpResponse(context) {
        const commands = {
            general: ['status', 'help', 'scan network', 'show packages', 'endpoint pricing', 'deploy encryption', 'vpn status', 'threat stats'],
            network: ['scan network', 'show packages', 'endpoint pricing', 'package compare', 'discovery status', 'encryption gaps', 'billing info'],
            threats: ['list threats', 'analyze threat [ID]', 'quarantine [IP]', 'threat stats'],
            encryption: ['show encryption', 'deploy encryption', 'gap status', 'remediate gaps', 'cert status'],
            vpn: ['vpn status', 'list connections', 'security alerts', 'cert status']
        };
        
        const contextCommands = commands[context] || commands.general;
        return `Available Commands (${context.toUpperCase()} V4):
${contextCommands.map(cmd => `• ${cmd}`).join('\n')}

All commands route through appropriate sub-agents with hybrid encryption.`;
    }
    
    handleQuarantine(ipMatch) {
        if (ipMatch) {
            const ip = ipMatch[1];
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
            'help': `CLI Mode Commands (V4 Network):
• status - System overview
• scan network - Network discovery
• show packages - Available packages
• endpoint pricing - Billing model
• deploy encryption - Gap remediation
• vpn status - VPN connections
• enable agent - Restore AI control
• version - Show version info`,
            
            'status': `[CLI] System Status V4:
• Mode: CLI (Manual Control)
• Version: V4 Network Discovery
• NetworkMapper: Enhanced auto-scan
• Packages: Essential/Multi/Global
• Billing: Transparent endpoint model
• Discovery: ${SentinelState.discoveryActive ? 'ACTIVE' : 'PAUSED'}
• Sub-Agents: 10 online
• Uptime: 99.98%`,
            
            'version': `[CLI] AI Sentinel-X V4 Network Discovery
• Version: ${SENTINEL_VERSION}
• API: ${API_VERSION}
• NetworkMapper: Enhanced discovery engine
• Billing: Transparent endpoint model
• Encryption: Gap detection & auto-remediation
• Status: Operational`,
            
            'scan network': '[CLI] NetworkMapper V4: Auto-scan available. External + internal discovery with endpoint billing calculation.',
            
            'show packages': `[CLI] Available Packages:
• Essential: $29/mo + $0.10/endpoint
• Multi-Site: $149/mo + $0.08/endpoint  
• Global: $499/mo + $0.05/endpoint
Run auto-scan for recommendations.`,
            
            'endpoint pricing': `[CLI] Endpoint Billing Model:
• License fee covers base monitoring
• Per-endpoint charges for discovered devices
• Install agents only where needed
• Transparent monthly billing`,
            
            'enable agent': () => {
                this.enableAgent();
                return '✅ Main Agent re-enabled. NetworkMapper V4 ready for auto-scan.';
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
    
    static showAgentShutdownModal() {
        // For V4, show in chat instead of modal
        if (!SentinelState.chatOpen && sentinelChat) {
            sentinelChat.toggle();
        }
        setTimeout(() => {
            if (sentinelChat) {
                sentinelChat.addMessage('🤖 Agent control available. NetworkMapper V4 continues autonomous operation with enhanced discovery capabilities.', false, 'system');
            }
        }, 300);
    }
    
    static confirmAgentShutdown() {
        SentinelState.agentActive = !SentinelState.agentActive;
        
        if (!SentinelState.agentActive) {
            SentinelState.discoveryActive = false;
            SentinelState.scanningActive = false;
        }
        
        if (sentinelChat) {
            sentinelChat.updateAgentStatus();
        }
        
        const status = SentinelState.agentActive ? 'resumed autonomous operation' : 'switched to manual control mode';
        if (SentinelState.chatOpen && sentinelChat) {
            sentinelChat.addMessage(`⚠️ Main Agent has ${status}. NetworkMapper V4 continues monitoring.`, false, 'system');
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
    
    static formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    static formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    }
}

// Global instances
let sentinelChat;
let neuralCleanup;

// Enhanced initialization
function initializeSentinel() {
    initializePageContext();
    
    // Initialize chat system
    sentinelChat = new SentinelChat();
    
    // Initialize event handlers
    SentinelEventHandlers.initializeEventListeners();
    
    // Initialize neural background
    neuralCleanup = initNeuralBackground();
    
    // Add global CSS for enhanced features
    addEnhancedCSS();
    
    // Fix terminology in existing content
    fixTerminologyInDOM();
}

// Fix existing terminology in DOM
function fixTerminologyInDOM() {
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
    
    setTimeout(() => {
        replaceTextInNode(document.body);
    }, 100);
}

// Enhanced CSS for V4 features
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
        
        /* Package card enhancements */
        .package-preview-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 255, 136, 0.3);
        }
        
        /* Mobile responsive improvements */
        @media (max-width: 768px) {
            .packages-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .ai-chat-window {
                width: calc(100vw - 20px);
                height: calc(100vh - 100px);
                right: 0;
                bottom: 70px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Common logout handler
function handleLogout() {
    if (confirm('Are you sure you want to logout? The AI agent will continue protecting your network autonomously.')) {
        localStorage.removeItem('sentinel_auth');
        localStorage.removeItem('sentinel_api_key');
        localStorage.removeItem('sentinel_package');
        localStorage.removeItem('sentinel_api_config');
        window.location.href = 'index.html';
    }
}

// Cleanup function
function cleanupSentinel() {
    if (neuralCleanup) neuralCleanup();
    if (sentinelChat) sentinelChat = null;
}

// Global exports for backward compatibility
window.SentinelState = SentinelState;
window.PackageConfigs = PackageConfigs;
window.SubAgentConfigs = SubAgentConfigs;
window.VPNConfigs = VPNConfigs;
window.sentinelChat = sentinelChat;
window.SentinelUtils = SentinelUtils;
window.SentinelEventHandlers = SentinelEventHandlers;

// Legacy function exports - Fixed chat toggle
window.toggleChat = () => {
    if (sentinelChat) {
        sentinelChat.toggle();
    } else {
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

window.showAgentShutdownModal = SentinelEventHandlers.showAgentShutdownModal;
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
        PackageConfigs,
        SubAgentConfigs,
        VPNConfigs,
        SentinelChat,
        SentinelUtils,
        SentinelEventHandlers,
        initializeSentinel,
        cleanupSentinel
    };
}
