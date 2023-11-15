import styled from 'styled-components';
import { keyframes } from 'styled-components';
import codec from './assets/codec.ttf';
import codecSound from './assets/codecSound.mp3';
import { useMemo, useState } from 'react';
import enterSound from './assets/enterSound.mp3';
import audioIcon from './assets/speaker.svg';
import { useEffect } from 'react';
import loadingTheme from './assets/loadingtheme.mp3';

const spin = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

const slideOut = keyframes`
0% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px) scaleY(2) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
`;

const slideIn = keyframes`
0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
`;

const rollIn = keyframes`
0% {
    -webkit-transform: translateX(-1000px) rotate(-720deg);
            transform: translateX(-1000px) rotate(-720deg);
    -webkit-filter: blur(50px);
            filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
`;

const textFlash = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

const PingAnimation = keyframes`
from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`;


const PushEnter = styled.div`
    @font-face {
        font-family: 'codec';
        src: url(${codec});
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    display: flex;
    font-family: 'codec', sans-serif;
    font-size: 4rem;
    color: white;
    justify-content: center;
    align-items: center;
    animation: ${textFlash} 1s linear infinite;
    padding: 10px;
    border-radius: 100px;
    &:hover {
        background-color: #800a01;
        color: white;
    }
    cursor: pointer;
    `;


    const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    height: 100vh;
    
    
    `;
    const LoadingText = styled.div`
    @font-face {
        font-family: 'codec';
        src: url(${codec});
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    display: flex;
    font-family: 'codec', sans-serif;
    font-size: 4rem;
    color: black;
    justify-content: center;
    align-items: center;
    animation: ${textFlash} 1s linear infinite;
    background-color: #800a01;
    padding: 10px;
    border-radius: 10px;
    `;

    const LoadingText2 = styled.div`
    @font-face {
        font-family: 'codec';
        src: url(${codec});
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    display: flex;
    font-family: 'codec', sans-serif;
    font-size: 4rem;
    color: black;
    justify-content: center;
    align-items: center;
    animation: ${props => props.animation ? slideOut : slideIn} 2s cubic-bezier(0.5, 1, 0.89, 1);
    background-color: #800a01;
    padding: 10px;
    border-radius: 10px;
    `;

    const Loading = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid #800a01;
    border-top: 5px solid #000;
    animation: ${spin} 0.5s linear infinite;
    margin: 20px;
    `;

    const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${PingAnimation} 1s linear infinite;
    margin-top: 50px;
    animation: ${props => props.animation ? slideOut : rollIn} 2s cubic-bezier(0.5, 1, 0.89, 1);
    `;


    const EnableAudio = styled.div`
    @font-face {
        font-family: 'codec';
        src: url(${codec});
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    display: flex;
    flex-direction: column;
    font-family: 'codec', sans-serif;
    font-size: 4rem;
    color: white;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 50px;
    animation: ${props => props.animation ? slideOut : slideIn} 2s cubic-bezier(0.5, 1, 0.89, 1);
    &:hover {
        background-color: #800a01;
        color: white;
    }
    cursor: pointer;
    `;

const AudioIcon = styled.img`
    width: 100px;
    height: 100px;
    justify-content: center;
    justify-items: center;
    padding: 10px;
    animation: ${props => props.animation ? slideOut : slideIn} 2s cubic-bezier(0.5, 1, 0.89, 1);
    `;

const audioIconStyle = {
    width: '100px',
    height: '100px',
    justifyContent: 'center',
    justifyItems: 'center',
    backgroundColor: '#800a01',
    borderRadius: '50%',
    };



    const LoadingComponent = () => {
        const audio = new Audio(codecSound);
        const enter = new Audio(enterSound);
        const loading = new Audio(loadingTheme);

    
        const [keyPress, setListenToKeyPress] = useState("");
        const [audioEnabled, setAudioEnabled] = useState(false);
        const [slideOutAnimation, setSlideOutAnimation] = useState(false);
    
        useEffect(() => {
            if (keyPress === "first") {
                const playAudio = () => {
                    audio.play();
                    audio.loop = true;
                    console.log('play');

                };
    
                const timeoutId = setTimeout(playAudio, 1000);
    
                return () => {
                    // Cleanup function to clear the timeout when the component unmounts
                    clearTimeout(timeoutId);
                    audio.pause();
                };
            }
        }, [keyPress, audio]);
    
        function handleKeyDown(e) {
            if (e.key === 'Enter') {
                setListenToKeyPress("second");
                audio.pause();
                enter.play();
                
                console.log(keyPress);
                setSlideOutAnimation(true);
            }
        }
    
        function handleAudioClick() {
            setAudioEnabled(true);
            setSlideOutAnimation(true);
            setListenToKeyPress("first");
            console.log('audio enabled');
        }
    
        useEffect(() => {
            function handleKeyDown(e) {
                if (e.key === 'Enter') {                    
                    setListenToKeyPress("second");
                    audio.pause();
                    setSlideOutAnimation(true);
                    enter.play();
                    console.log(keyPress);
                    

                }
                
               
            }
            const playLoading = () => {
                if (keyPress === "second") {
                    loading.play();
                    console.log('play');

                }

            }
            let timeoutId = setTimeout(playLoading, 2000);
            document.addEventListener('keydown', handleKeyDown);
            return () => {
                // Cleanup function to remove the event listener when the component unmounts
                document.removeEventListener('keydown', handleKeyDown);
                clearTimeout(timeoutId);
                loading.pause();
                
            };
        }, [handleKeyDown, audio, enter, keyPress, loading]);
    
        if (audioEnabled === false) {
            return (
                <LoadingContainer>
                    <EnableAudio onClick={handleAudioClick} animation={slideOutAnimation}>
                        <AudioIcon src={audioIcon} style={audioIconStyle} animation={slideOutAnimation}/>
                        Enable Audio TO START
                    </EnableAudio>
                </LoadingContainer>
            );
        }
    
        if (keyPress === "first") {
            return (
                <LoadingContainer>
                    <LoadingText >CALL</LoadingText>
                    <PushEnter>Press Enter</PushEnter>
                </LoadingContainer>
            );
        }
    
        if (keyPress === "second") {

            return (
                <LoadingContainer animation={slideOutAnimation}>
                    <LoadingText2 >LOADING</LoadingText2>
                    <LoadingWrapper>
                    <Loading /></LoadingWrapper>
                </LoadingContainer>
            );
        }
    };
    
    export default LoadingComponent;
