// Video Upload Functionality
document.addEventListener('DOMContentLoaded', function() {
    const videoUpload = document.getElementById('video-upload');
    const fileInfo = document.getElementById('file-info');
    const fileName = document.getElementById('file-name');
    const removeFile = document.getElementById('remove-file');
    const analysisResults = document.getElementById('analysis-results');

    if (videoUpload) {
        videoUpload.addEventListener('change', function() {
            if (this.files.length > 0) {
                // Show selected file
                fileName.textContent = this.files[0].name;
                fileInfo.classList.remove('hidden');
                
                // Simulate analysis (in real app, upload to server)
                setTimeout(() => {
                    analysisResults.classList.remove('hidden');
                    fileInfo.classList.add('hidden');
                    videoUpload.value = '';
                }, 3000);
            }
        });
    }

    if (removeFile) {
        removeFile.addEventListener('click', function(e) {
            e.preventDefault();
            videoUpload.value = '';
            fileInfo.classList.add('hidden');
        });
    }

    // View details button
    const viewDetails = document.getElementById('view-details');
    if (viewDetails) {
        viewDetails.addEventListener('click', function() {
            window.location.href = 'dashboard.html';
        });
    }
});