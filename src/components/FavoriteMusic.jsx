import { useState, useRef, useEffect } from 'react';
import './FavoriteMusic.css';

const FavoriteMusic = () => {
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);

    const tracks = [
        {
            id: 1,
            title: '8 Letters',
            artist: 'Why Dont we',
            album: 'After Hours',
            cover: 'image/8letterss.jpg',
            audio: 'music/8letters.mp3'
        },
        {
            id: 2,
            title: 'Waiting For Love',
            artist: 'Avicii',
            album: 'Future Nostalgia',
            cover: 'image/avici.jpg',
            audio: 'music/Avicii - Waiting For Love - AviciiOfficialVEVO.mp3'
        },
        {
            id: 3,
            title: 'Consume',
            artist: 'Chase Atlantic',
            album: 'F*ck Love 3',
            cover: 'image/consume.jpg',
            audio: 'music/Consume riel.mp3'
        },
        {
            id: 4,
            title: 'By your side',
            artist: 'Jonas blue',
            album: 'Dreamland',
            cover: 'image/byyourside.jpg',
            audio: 'music/Jonas blue.mp3'
        },
        {
            id: 5,
            title: 'Happier',
            artist: 'Marshmello ft. Bastille',
            album: 'Justice',
            cover: 'image/happier.jpg',
            audio: 'music/Marshmello ft Bastille Happier .mp3'
        },
        {
            id: 6,
            title: 'Paris',
            artist: 'The Chainsmokers',
            album: 'Montero',
            cover: 'image/Paris.jpg',
            audio: 'music/Paris.mp3'
        },
        {
            id: 7,
            title: 'Something just like this',
            artist: 'The Chainsmokers',
            album: 'Montero',
            cover: 'image/Something Just Like This.jpg',
            audio: 'music/something just like this.mp3'
        },
        {
            id: 8,
            title: 'Takeaway',
            artist: 'The Chainsmokers',
            album: 'Montero',
            cover: 'image/Takeaway.jpg',
            audio: 'music/Takeaway.mp3'
        },
        {
            id: 9,
            title: 'Closer ft.halsey',
            artist: 'The Chainsmokers',
            album: 'Montero',
            cover: 'image/Closer.jpg',
            audio: 'music/The Chainsmokers - Closer Ft. Halsey (1).mp3'
        },
    ];

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
                setCurrentTime(audio.currentTime);
            }
        };

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        const handleEnded = () => {
            if (currentTrack < tracks.length - 1) {
                setCurrentTrack(currentTrack + 1);
            } else {
                setCurrentTrack(0);
                setIsPlaying(false);
            }
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [currentTrack, tracks.length]);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(() => setIsPlaying(false));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentTrack]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const selectTrack = (index) => {
        setCurrentTrack(index);
        setIsPlaying(true);
    };

    const handleProgressClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        if (audioRef.current) {
            audioRef.current.currentTime = percent * audioRef.current.duration;
        }
    };

    const formatTime = (time) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const skipPrevious = () => {
        setCurrentTrack(currentTrack === 0 ? tracks.length - 1 : currentTrack - 1);
    };

    const skipNext = () => {
        setCurrentTrack(currentTrack === tracks.length - 1 ? 0 : currentTrack + 1);
    };

    return (
        <section className="music section" id="music">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Vibes</span>
                    <h2 className="section-title">
                        Favorite <span className="text-gradient">Music</span>
                    </h2>
                    <p className="section-subtitle">
                        The soundtrack to my creative process. These tracks fuel my design sessions
                        and keep the ideas flowing.
                    </p>
                </div>

                <div className="music-content">
                    {/* Now Playing Card */}
                    <div className="now-playing">
                        <div className="now-playing-cover">
                            <img
                                src={tracks[currentTrack].cover}
                                alt={tracks[currentTrack].album}
                                className={`album-art ${isPlaying ? 'playing' : ''}`}
                            />
                            <div className="cover-glow"></div>
                            <div className="vinyl-disc"></div>
                        </div>

                        <div className="now-playing-info">
                            <span className="now-playing-label">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                                Now Playing
                            </span>
                            <h3 className="track-title">{tracks[currentTrack].title}</h3>
                            <p className="track-artist">{tracks[currentTrack].artist}</p>
                            <p className="track-album">{tracks[currentTrack].album}</p>
                        </div>

                        <div className="player-controls">
                            <div className="progress-container" onClick={handleProgressClick}>
                                <div className="progress-bar">
                                    <div
                                        className="progress-fill"
                                        style={{ width: `${progress}%` }}
                                    >
                                        <div className="progress-glow"></div>
                                    </div>
                                </div>
                                <div className="time-display">
                                    <span>{formatTime(currentTime)}</span>
                                    <span>{formatTime(duration)}</span>
                                </div>
                            </div>

                            <div className="control-buttons">
                                <button className="control-btn" onClick={skipPrevious}>
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                                    </svg>
                                </button>
                                <button className="control-btn play-btn" onClick={togglePlay}>
                                    {isPlaying ? (
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    )}
                                </button>
                                <button className="control-btn" onClick={skipNext}>
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <audio ref={audioRef} src={tracks[currentTrack].audio} />
                    </div>

                    {/* Playlist */}
                    <div className="playlist">
                        <h3 className="playlist-title">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="8" y1="6" x2="21" y2="6" />
                                <line x1="8" y1="12" x2="21" y2="12" />
                                <line x1="8" y1="18" x2="21" y2="18" />
                                <line x1="3" y1="6" x2="3.01" y2="6" />
                                <line x1="3" y1="12" x2="3.01" y2="12" />
                                <line x1="3" y1="18" x2="3.01" y2="18" />
                            </svg>
                            Playlist
                        </h3>
                        <div className="playlist-tracks">
                            {tracks.map((track, index) => (
                                <div
                                    key={track.id}
                                    className={`playlist-track ${currentTrack === index ? 'active' : ''}`}
                                    onClick={() => selectTrack(index)}
                                >
                                    <div className="playlist-track-number">
                                        {currentTrack === index && isPlaying ? (
                                            <div className="equalizer">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        ) : (
                                            <span>{String(index + 1).padStart(2, '0')}</span>
                                        )}
                                    </div>
                                    <img
                                        src={track.cover}
                                        alt={track.album}
                                        className="playlist-track-cover"
                                    />
                                    <div className="playlist-track-info">
                                        <span className="playlist-track-title">{track.title}</span>
                                        <span className="playlist-track-artist">{track.artist}</span>
                                    </div>
                                    <button className="playlist-play-btn">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FavoriteMusic;
