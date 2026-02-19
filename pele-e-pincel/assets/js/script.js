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
                const seuEmail = 'seuemaildecontato@exemplo.com'; 
                
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

    // =======================================================
    // 3. FUNCIONALIDADE LIGHTBOX (MODO ESPECTADOR)
    // =======================================================

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentMediaIndex = 0;
    let mediaSources = []; // Array para armazenar os SRCs das imagens/vídeos

    // ------------------------------------------
    // A. LÓGICA ESPECÍFICA PARA PÁGINAS DE DETALHE (OBRA-X.HTML)
    // ------------------------------------------
    if (document.querySelector('.obra-detail-page')) {
        const mediaElements = document.querySelectorAll('.lightbox-media');
        
        // Coleta as fontes de mídia (SRC)
        mediaSources = Array.from(mediaElements).map(el => el.src || el.poster || el.querySelector('source')?.src || el.querySelector('img')?.src);

        // Adiciona listener de clique a todas as mídias para abrir o LightBox
        mediaElements.forEach((media, index) => {
            media.addEventListener('click', () => {
                currentMediaIndex = index;
                showMedia(currentMediaIndex);
                lightbox.classList.add('active');
            });
        });

        // Ativa botões de navegação
        if (prevBtn) prevBtn.addEventListener('click', prevMedia);
        if (nextBtn) nextBtn.addEventListener('click', nextMedia);
        
    } 

    // ------------------------------------------
    // B. LÓGICA ESPECÍFICA PARA A GALERIA PRINCIPAL (GALERIA.HTML)
    // ------------------------------------------
    else if (document.querySelector('body.gallery-page')) { // Usamos a classe no body, se houver, ou buscamos a seção
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function(e) {
                
                // Se for um item de vídeo (como "O Pensador"), navegamos para a página
                if (this.classList.contains('video-item')) {
                    // Deixa o fluxo de navegação normal
                    return; 
                }
                
                // Se for um quadro (Silêncio, Liberdade), abrimos o LightBox
                e.preventDefault(); // Impede a navegação para a página de detalhe
                
                const imgElement = this.querySelector('img');
                if (imgElement && imgElement.src) {
                    // Abre a imagem clicada em LightBox
                    lightboxImg.src = imgElement.src;
                    lightbox.classList.add('active');

                    // DESATIVA a navegação na Galeria principal (se houver)
                    if (prevBtn) prevBtn.style.display = 'none';
                    if (nextBtn) nextBtn.style.display = 'none';
                }
            });
        });
    } 

    // Se não estiver em obra-detail-page nem gallery-page, os listeners não serão ativados.
    // Para garantir isso, remova o LightBox do HTML da index.html e sobre.html.

    // --- Funções de Navegação (Reutilizadas em Detalhe) ---
    function showMedia(index) {
        if (index >= 0 && index < mediaSources.length) {
            lightboxImg.src = mediaSources[index];
            currentMediaIndex = index;
        }
    }

    function nextMedia() {
        currentMediaIndex = (currentMediaIndex + 1) % mediaSources.length;
        showMedia(currentMediaIndex);
    }

    function prevMedia() {
        currentMediaIndex = (currentMediaIndex - 1 + mediaSources.length) % mediaSources.length;
        showMedia(currentMediaIndex);
    }

    // --- LISTENERS DE FECHAMENTO (Universais) ---

    // Botão 'x'
    if (closeBtn) closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        // Reativa a navegação ao fechar (para não afetar a próxima abertura)
        if (prevBtn) prevBtn.style.display = ''; 
        if (nextBtn) nextBtn.style.display = '';
    });

    // Fechar ao clicar fora e com ESC
    if (lightbox) lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            if (prevBtn) prevBtn.style.display = ''; 
            if (nextBtn) nextBtn.style.display = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            if (prevBtn) prevBtn.style.display = ''; 
            if (nextBtn) nextBtn.style.display = '';
        }
    });
});