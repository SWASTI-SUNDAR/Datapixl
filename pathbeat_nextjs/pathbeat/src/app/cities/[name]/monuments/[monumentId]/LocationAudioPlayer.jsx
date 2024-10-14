import React, { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler'; // You can uncomment this if you're using Howler
import { MdForward10, MdReplay10 } from 'react-icons/md';
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/hooks/reduxStoreHooks'; 
import { setSignInModalInfo } from '@/redux-store/slices/generalSlice';

const LocationAudioPlayer = ({
  monumentAreas,
  selectedAudioSequence,
  setSelectedAudioSequence,
  selectedAreaId,
  setSelectedAreaId,
  allAudios,
  isManualSelected,
  setIsManualSelected,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState({ position: 0, duration: 0 });
  const [playbackState, setPlaybackState] = useState('paused'); // 'playing', 'paused'
  const [currentTrack, setCurrentTrack] = useState(null);
  const [allTracks, setAllTracks] = useState([]);
  const dispatch = useDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.userSlice);

  const audioPlayerRef = useRef(null);
  const progressInterval = useRef(null);

  useEffect(() => {
    loadPlaylist(allAudios);
    return () => {
      resetPlayer();
    };
  }, [allAudios]);

  useEffect(() => {
    if (!selectedAudioSequence) return;
    const nextTrack = allTracks[selectedAudioSequence];
    setSelectedAreaId(allAudios[selectedAudioSequence]?.AreaId || null);
    setCurrentTrack(nextTrack);
    setupAudio(nextTrack);
    console.log(isAuthenticated, nextTrack);
    if (!isAuthenticated && nextTrack?.AccessTier === 2) {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
      }
      dispatch(
        setSignInModalInfo({
          isModalVisible: true,
          singInModalText: 'Sign in to access this audio',
        })
      );
      return;
    }
  }, [selectedAudioSequence]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const loadPlaylist = async (playlist) => {
    if (!playlist || playlist.length === 0) return;
    const tracks = playlist.map((audio, index) => ({
      id: audio.Uuid,
      url: audio.Url,
      title: audio.Name,
      artist: audio.Artist,
      artwork: audio.ThumbnailImageUrl,
      index,
      AccessTier: audio.AccessTier,
    }));

    setAllTracks(tracks);
    setCurrentTrack(tracks[selectedAudioSequence]);
    setupAudio(tracks[selectedAudioSequence]);
  };

  const setupAudio = (track) => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.unload();
    }

    const newPlayer = new Howl({
      src: [track.url],
      html5: true,
      onplay: () => {
        setPlaybackState('playing');
        setIsLoading(false);
        setProgress({ position: 0, duration: newPlayer.duration() });
        progressInterval.current = setInterval(updateProgress, 1000);
      },
      onpause: () => {
        setPlaybackState('paused');
        clearInterval(progressInterval.current);
      },
      onend: () => {
        handleNextTrack();
        clearInterval(progressInterval.current);
      },
      onseek: () => {
        setProgress({
          ...progress,
          position: newPlayer.seek(),
        });
      },
    });

    audioPlayerRef.current = newPlayer;
    audioPlayerRef.current.play();
  };

  const updateProgress = () => {
    if (audioPlayerRef.current) {
      setProgress({
        position: audioPlayerRef.current.seek(),
        duration: audioPlayerRef.current.duration(),
      });
    }
  };

  const togglePlayback = () => {
    if (!audioPlayerRef.current) return;
    if (!isAuthenticated && currentTrack?.AccessTier === 2) {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
      }
      dispatch(
        setSignInModalInfo({
          isModalVisible: true,
          singInModalText: 'Sign in to access this audio',
        })
      );
      return;
    }

    if (playbackState === 'playing') {
      audioPlayerRef.current.pause();
    } else {
      audioPlayerRef.current.play();
    }
  };

  const handleSeek = (value) => {
    if (!audioPlayerRef.current) return;

    // Pause the current track before seeking
    audioPlayerRef.current.pause();

    // Seek to the desired value, and use the callback when it's done
    audioPlayerRef.current.seek(value);

    // Resume playback after seek
    audioPlayerRef.current.play();

    // Update progress after the seek operation is completed
    setTimeout(() => {
      updateProgress(); // Ensure that progress is updated after seeking
    }, 100); // Small delay to let the seek take effect
  };

  const handleNextTrack = () => {
    if (!currentTrack) return;
    setIsManualSelected(true);
    const nextIndex = (currentTrack.index + 1) % allAudios.length;
    setSelectedAudioSequence(nextIndex);
  };

  const handlePreviousTrack = () => {
    if (!currentTrack) return;
    setIsManualSelected(true);
    const prevIndex =
      (currentTrack.index - 1 + allAudios.length) % allAudios.length;
    setSelectedAudioSequence(prevIndex);
  };

  const resetPlayer = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.unload();
      clearInterval(progressInterval.current);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.titleAndImgContainer}>
        <div style={styles.thumbnailView}>
          <img
            src={currentTrack?.artwork || 'placeholder-image-url'}
            alt="Artwork"
            style={styles.thumbnail}
          />
        </div>
        <div style={styles.detailsContainer}>
          <p style={styles.title}>{currentTrack?.title}</p>
          <p style={styles.subtitle}>{currentTrack?.artist}</p>
        </div>
      </div>

      <div style={styles.actionBtns}>
        <MdReplay10
          size={24}
          onClick={() => handleSeek(progress.position - 10)}
        />
        <FaStepBackward
          size={18}
          onClick={() => handlePreviousTrack()}
          disabled={isLoading || currentTrack?.index === 0}
        />
        {!isLoading &&
          (playbackState === 'playing' ? (
            <FaPause size={18} onClick={() => togglePlayback()} />
          ) : (
            <FaPlay size={18} onClick={() => togglePlayback()} />
          ))}
        <FaStepForward
          size={18}
          onClick={() => handleNextTrack()}
          disabled={isLoading || currentTrack?.index === allAudios.length - 1}
        />
        <MdForward10
          size={24}
          onClick={() => handleSeek(progress.position + 10)}
        />
      </div>

      <div style={styles.progressBar}>
        <p style={styles.timeStampText}>{formatTime(progress.position)}</p>
        <input
          type="range"
          value={progress.position}
          min="0"
          max={progress.duration}
          onChange={(e) => handleSeek(parseFloat(e.target.value))}
          disabled={isLoading}
          style={styles.slider}
        />
        <p style={styles.timeStampText}>
          {formatTime(progress.duration - progress.position)}
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  titleAndImgContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailsContainer: {
    paddingVertical: 8,
    paddingRight: 10,
    width: '75%',
  },
  thumbnailView: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 50,
    height: 50,
    objectFit: 'cover',
  },
  title: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  subtitle: {
    color: '#868782',
    fontSize: 13,
    fontWeight: '400',
  },
  actionBtns: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    justifyContent: 'center',
  },
  progressBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  slider: {
    flex: 1,
  },
  timeStampText: {
    color: '#A7A7A7',
    fontSize: 14,
  },
};

export default LocationAudioPlayer;
