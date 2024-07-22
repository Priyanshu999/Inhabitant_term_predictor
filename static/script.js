document.addEventListener('DOMContentLoaded', function() {
    const cityInput = document.getElementById('cityInput');
    const modelSelect = document.getElementById('modelSelect');
    const predictButton = document.getElementById('predictButton');
    const predictionResult = document.getElementById('predictionResult');

    predictButton.addEventListener('click', function() {
        const city = cityInput.value;
        const selectedModel = modelSelect.value;
        
        // Creating a request object to send to the backend API
        // Just replace '/api/predict' with the actual API endpoint URL
        const request = new Request(`${selectedModel}/${city}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        fetch(request)
            .then(response => response.json())
            .then(data => {
                // handle the reesponse data here
                predictionResult.innerHTML = `Predicted result : <b>${data.prediction}</b>`;
                predictionResult.classList.add('show');
            })
            .catch(error => {
                predictionResult.textContent = 'Error: Unable to fetch prediction.';
                console.error(error);
            });
    });
});
