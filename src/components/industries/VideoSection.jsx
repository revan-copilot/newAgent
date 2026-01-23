import React from 'react';
import arrowBtn from '../../assets/images/arrow.svg';
import './VideoSection.css';

const VideoSection = ({ title, thumbnail, caption, onPlay }) => {
    return (
        <div className="section fm-section">
            <div className="container">
                <div className="fm-video-section">
                    <h2 className="fm-heading-center">{title}</h2>
                    <div className="fm-video-wrapper">
                        <img src={thumbnail} alt="Video Thumbnail" className="fm-video-thumb" />
                        <button className="fm-play-button" onClick={onPlay}>
                            <img src={arrowBtn} alt="Play" className="video-play-icon" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} /> Play Video
                        </button>
                    </div>
                    {caption && (
                        <p className="fm-video-caption">
                            {caption}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
