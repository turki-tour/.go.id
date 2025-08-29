// Package filter functionality
function showPackage(category) {
    const packages = document.querySelectorAll('.package-card');
    const tabs = document.querySelectorAll('button');
    
    // Update active tab
    tabs.forEach(tab => {
        if (tab.textContent.toLowerCase().includes(category) || (category === 'all' && tab.textContent.includes('Semua'))) {
            tab.classList.add('tab-active');
            tab.classList.remove('text-gray-600');
        } else {
            tab.classList.remove('tab-active');
            tab.classList.add('text-gray-600');
        }
    });
    
    // Show/hide packages
    packages.forEach(pkg => {
        if (category === 'all' || pkg.dataset.category === category) {
            pkg.style.display = 'block';
        } else {
            pkg.style.display = 'none';
        }
    });
}

// WhatsApp booking function
function pesanPaket(namaPaket) {
    const whatsappNumber = "6285624675208";
    const message = `Halo, saya tertarik dengan paket "${namaPaket}". Mohon informasi lebih lanjut.`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Chat functionality
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    
    if (input.value.trim() === '') return;
    
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'mb-4 text-right';
    userMsg.innerHTML = `
        <div class="bg-blue-600 text-white rounded-lg p-3 inline-block">
            <p>${input.value}</p>
        </div>
    `;
    messages.appendChild(userMsg);
    
    // Clear input
    const userMessage = input.value;
    input.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'mb-4';
        
        let response = '';
        if (userMessage.toLowerCase().includes('harga') || userMessage.toLowerCase().includes('biaya')) {
            response = 'Untuk informasi harga, silakan lihat paket-paket yang tersedia di halaman ini. Setiap paket memiliki harga yang berbeda sesuai fasilitasnya.';
        } else if (userMessage.toLowerCase().includes('visa')) {
            response = 'Kami menyediakan layanan pengurusan visa untuk Turki. Ada paket khusus visa kerja jangka pendek dengan harga terjangkau.';
        } else if (userMessage.toLowerCase().includes('hotel') || userMessage.toLowerCase().includes('akomodasi')) {
            response = 'Semua paket kami sudah termasuk akomodasi. Mulai dari hotel bintang 3 hingga bintang 5 tergantung paket yang Anda pilih.';
        } else {
            response = 'Terima kasih atas pertanyaan Anda. Untuk informasi lebih lengkap, silakan hubungi customer service kami di +62 812-3456-7890.';
        }
        
        botMsg.innerHTML = `
            <div class="bg-gray-100 rounded-lg p-3 inline-block">
                <p>${response}</p>
            </div>
        `;
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
    
    messages.scrollTop = messages.scrollHeight;
}

function handleChatInput(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
