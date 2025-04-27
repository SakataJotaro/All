(function() {
  let currentVideo = null;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let containerStartX = 0;
  let containerStartY = 0;
  let isAdjustingSlider = false;
  const speeds = [0.5, 1, 1.5, 2];
  let currentSpeedIndex = 1; // default 1x

  // Controller container
  const sliderContainer = document.createElement('div');
  Object.assign(sliderContainer.style, {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(0, 0, 0, 0.7)',
    border: '1px solid white',
    padding: '8px',
    zIndex: '9999',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.6)',
    width: '340px',
    transition: 'opacity 0.3s ease',
    opacity: '0',
    cursor: 'move',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    userSelect: 'none'
  });

  // Top controls
  const controlBar = document.createElement('div');
  Object.assign(controlBar.style, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '5px'
  });

  const playPauseBtn = createButton('⏸️');
  const rewindBtn = createButton('⏪');
  const forwardBtn = createButton('⏩');
  const speedBtn = createButton(`${speeds[currentSpeedIndex]}x`);
  const muteBtn = createButton('🔊');

  controlBar.append(playPauseBtn, rewindBtn, forwardBtn, speedBtn, muteBtn);
  sliderContainer.appendChild(controlBar);

  // Time and progress bar
  const timeBar = document.createElement('div');
  Object.assign(timeBar.style, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '5px'
  });

  const timeLabel = document.createElement('div');
  Object.assign(timeLabel.style, {
    color: 'white',
    fontSize: '12px',
    whiteSpace: 'nowrap'
  });
  timeLabel.innerText = '0:00 / 0:00';

  const slider = document.createElement('input');
  slider.type = 'range';
  Object.assign(slider.style, {
    width: '100%',
    height: '6px',
    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
    borderRadius: '5px',
    outline: 'none',
    appearance: 'none',
    margin: '0'
  });

  timeBar.append(timeLabel, slider);
  sliderContainer.appendChild(timeBar);
  document.body.appendChild(sliderContainer);

  function createButton(text) {
    const btn = document.createElement('button');
    btn.innerText = text;
    Object.assign(btn.style, {
      background: 'transparent',
      border: '1px solid white',
      color: 'white',
      fontSize: '14px',
      cursor: 'pointer',
      padding: '2px 6px',
      borderRadius: '6px',
      userSelect: 'none'
    });
    return btn;
  }

  // Dragging
  sliderContainer.addEventListener('mousedown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') return;
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    const rect = sliderContainer.getBoundingClientRect();
    containerStartX = rect.left;
    containerStartY = rect.top;
    sliderContainer.style.transition = 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    sliderContainer.style.left = `${containerStartX + dx}px`;
    sliderContainer.style.top = `${containerStartY + dy}px`;
    sliderContainer.style.bottom = 'auto';
    sliderContainer.style.transform = 'none';
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      sliderContainer.style.transition = 'opacity 0.3s ease';
    }
  });

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  function findCurrentVideo() {
    const videos = document.querySelectorAll('video');
    let bestCandidate = null;
    let maxVisibleArea = 0;

    videos.forEach(video => {
      if (!video.duration || video.duration < 5) return;
      const rect = video.getBoundingClientRect();
      const visibleWidth = Math.max(0, Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0));
      const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
      const visibleArea = visibleWidth * visibleHeight;
      if (visibleArea > maxVisibleArea) {
        maxVisibleArea = visibleArea;
        bestCandidate = video;
      }
    });

    return bestCandidate;
  }

  function updateSlider() {
    const isOnReelPage = window.location.pathname.includes('/reel/');

    if (isOnReelPage) {
      const newVideo = findCurrentVideo();

      if (newVideo !== currentVideo) {
        currentVideo = newVideo;
        slider.value = 0;
        if (currentVideo) {
          currentVideo.muted = false;
          currentVideo.playbackRate = speeds[currentSpeedIndex]; // 🚀 Force apply saved speed here!
          sliderContainer.style.opacity = '1';
          console.log('🎬 New Reel loaded, applying speed', speeds[currentSpeedIndex]);
        } else {
          sliderContainer.style.opacity = '0';
        }
      }

      if (currentVideo && currentVideo.duration && !isAdjustingSlider) {
        slider.value = (currentVideo.currentTime / currentVideo.duration) * 100;
        timeLabel.innerText = `${formatTime(currentVideo.currentTime)} / ${formatTime(currentVideo.duration)}`;
      }
    } else {
      currentVideo = null;
      sliderContainer.style.opacity = '0';
    }

    requestAnimationFrame(updateSlider);
  }
  updateSlider();

  // Tap slider to jump
  slider.addEventListener('mousedown', () => { isAdjustingSlider = true; });
  slider.addEventListener('mouseup', () => { isAdjustingSlider = false; });
  slider.addEventListener('click', function(e) {
    if (!currentVideo) return;
    const rect = slider.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    currentVideo.currentTime = ratio * currentVideo.duration;
  });

  slider.addEventListener('input', function() {
    if (currentVideo && currentVideo.duration) {
      currentVideo.currentTime = (slider.value / 100) * currentVideo.duration;
    }
  });

  // Play/Pause
  playPauseBtn.addEventListener('click', function() {
    if (currentVideo) {
      if (currentVideo.paused) {
        currentVideo.play();
        playPauseBtn.innerText = '⏸️';
      } else {
        currentVideo.pause();
        playPauseBtn.innerText = '▶️';
      }
    }
  });

  // Rewind 5s
  rewindBtn.addEventListener('click', function() {
    if (currentVideo) {
      currentVideo.currentTime = Math.max(0, currentVideo.currentTime - 5);
    }
  });

  // Forward 5s
  forwardBtn.addEventListener('click', function() {
    if (currentVideo) {
      currentVideo.currentTime = Math.min(currentVideo.duration, currentVideo.currentTime + 5);
    }
  });

  // Speed button (click to cycle)
  speedBtn.addEventListener('click', function() {
    if (currentVideo) {
      currentSpeedIndex = (currentSpeedIndex + 1) % speeds.length;
      speedBtn.innerText = `${speeds[currentSpeedIndex]}x`;
      currentVideo.playbackRate = speeds[currentSpeedIndex];
      console.log('🔥 Speed set to', speeds[currentSpeedIndex], 'x');
    }
  });

  // Mute/Unmute
  muteBtn.addEventListener('click', function() {
    if (currentVideo) {
      currentVideo.muted = !currentVideo.muted;
      muteBtn.innerText = currentVideo.muted ? '🔇' : '🔊';
    }
  });

  console.log('✅ FULL FINAL Facebook Reel Controller loaded!');
})();
