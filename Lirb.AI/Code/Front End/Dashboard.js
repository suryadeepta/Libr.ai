// Dashboard Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Show sidebar on hover
    const sidebar = document.querySelector('.sidebar');
    
    // Form submission to show dashboard
    const setupForm = document.querySelector('.setup-form');
    const dashboardPlaceholder = document.querySelector('.dashboard-placeholder');
    
    if (setupForm) {
        setupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            dashboardPlaceholder.classList.remove('hidden');
            window.scrollTo({
                top: dashboardPlaceholder.offsetTop,
                behavior: 'smooth'
            });
        });
    }
    
    // Analyze New Button
    const analyzeBtn = document.getElementById('analyze-new-btn');
    const uploadModal = document.getElementById('upload-modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', function() {
            uploadModal.classList.remove('hidden');
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            uploadModal.classList.add('hidden');
        });
    }
    
    // Video Upload Simulation
    const videoUpload = document.getElementById('video-upload');
    const analysisProgress = document.querySelector('.analysis-progress');
    
    if (videoUpload) {
        videoUpload.addEventListener('change', function() {
            if (this.files.length > 0) {
                // Show analysis progress
                analysisProgress.classList.remove('hidden');
                
                // Simulate analysis progress
                let progress = 0;
                const progressInterval = setInterval(() => {
                    progress += Math.random() * 10;
                    if (progress > 100) progress = 100;
                    
                    document.querySelector('.analysis-progress .progress-fill').style.width = progress + '%';
                    document.querySelector('.progress-text').textContent = Math.floor(progress) + '%';
                    
                    if (progress === 100) {
                        clearInterval(progressInterval);
                        setTimeout(() => {
                            uploadModal.classList.add('hidden');
                            // In a real app, you would update the dashboard with actual data
                            updateDashboardWithSampleData();
                        }, 500);
                    }
                }, 300);
            }
        });
    }
    
    // Menu toggle for mobile
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
        });
    }
});

document.getElementById('logout-btn')?.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'Login.html';

});


function updateDashboardWithSampleData() {
    // This would be replaced with actual data from your backend
    const metrics = [
        { id: '.metric-card:nth-child(1)', value: '72%', width: '72%', desc: "Moderate anxiety detected during presentation" },
        { id: '.metric-card:nth-child(2)', value: '65%', width: '65%', desc: "Your confidence improved toward the end" },
        { id: '.metric-card:nth-child(3)', value: '58%', width: '58%', desc: "Some verbal hesitations detected" },
        { id: '.metric-card:nth-child(4)', value: '81%', width: '81%', desc: "Good posture but limited hand gestures" }
    ];
    
    metrics.forEach(metric => {
        const card = document.querySelector(metric.id);
        card.querySelector('.metric-value').textContent = metric.value;
        card.querySelector('.progress-fill').style.width = metric.width;
        card.querySelector('.metric-description').textContent = metric.desc;
    });
    
    // Update chart and tips sections
    document.querySelector('.chart-placeholder').innerHTML = '<canvas id="anxietyChart"></canvas>';
    document.querySelector('.tips-placeholder').innerHTML = `
        <ul class="tips-list">
            <li><i class="fas fa-check-circle"></i> Practice speaking more slowly during technical sections</li>
            <li><i class="fas fa-check-circle"></i> Try using more hand gestures to appear more confident</li>
            <li><i class="fas fa-check-circle"></i> Take deep breaths before starting - your anxiety was highest in first 2 minutes</li>
        </ul>
    `;
    
    // In a real app, you would initialize a chart here
    // initializeChart();
}