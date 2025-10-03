document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // 1. FUNÇÃO DE INQUÉRITO DE VENDA (Email)
    // =======================================================
    const inquiryButton = document.getElementById('inquiry-button');

    if (inquiryButton) {
        const obraTituloElement = document.querySelector('.obra-titulo');
        
        if (!inquiryButton.disabled && obraTituloElement) {
            const obraTitulo = obraTituloElement.textContent.trim();
            
            inquiryButton.addEventListener('click', () => {
                // ⚠️ Lembre-se de substituir pelo seu email REAL!
                const seuEmail = 'candinholuiz@gmail.com'; 
                
                const subject = `Interesse na Obra: ${obraTitulo}`;
                const body = `Olá, gostaria de saber mais sobre a obra "${obraTitulo}", incluindo o preço e as opções de envio. Por favor, entre em contato.`;
                
                window.location.href = `mailto:${seuEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            });
        }
    }


    // =======================================================
    // 2. CONTROLE DE REPRODUÇÃO ÚNICA DE VÍDEO (Pausar o outro)
    // =======================================================
    
    const videoMain = document.getElementById('video-main');
    const videoSecond = document.getElementById('video-second');
    const allVideos = document.querySelectorAll('video'); // Inclui o vídeo principal

    // A. Garante que o vídeo principal seja mudo por padrão (por segurança do Autoplay)
    if (videoMain) {
        // videoMain.muted = true; 
    }

    // B. Aplica o listener de pausa em todos os vídeos
    allVideos.forEach(currentVideo => {
        currentVideo.addEventListener('play', () => {
            
            // Pausa explicitamente todos os outros vídeos
            allVideos.forEach(otherVideo => {
                // Se não for o vídeo que está tocando agora, pause-o.
                if (otherVideo !== currentVideo) {
                    otherVideo.pause();
                }
            });
        });
    });

    // C. Ajuste para o vídeo principal (se o usuário clicar no segundo)
    // Se o segundo vídeo for tocado manualmente, o principal deve ser pausado e desmutado.
    if (videoSecond) {
        videoSecond.addEventListener('play', () => {
            if (videoMain) {
                videoMain.pause();
                // Opcional: Desmuta o segundo vídeo ao ser tocado
                videoSecond.muted = false; 
            }
        });
    }
});