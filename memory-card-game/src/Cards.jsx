import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import cardInfo from "./cardInfo.json";
import bigbosss from "./assets/bigbosss.webp";
import end from "./assets/end.webp";
import fear from "./assets/fear.webp";
import fortune from "./assets/fortune.webp";
import fury from "./assets/fury.webp";
import grayfox from "./assets/grayfox.jpeg";
import liquid from "./assets/liquidsnake.webp";
import naked from "./assets/nakedsnake.jpg";
import pain from "./assets/pain.webp";
import psycho from "./assets/psycho.jpg";
import quiet from "./assets/quiet.webp";
import raiden from "./assets/raiden.jpg";
import revolver from "./assets/revolverocelot.webp";
import solidsnake from "./assets/solidsnake.webp";
import solidus from "./assets/solidus.webp";
import sorrow from "./assets/thesorrow.webp";
import vamp from "./assets/vamp.webp";
import theboss from "./assets/theboss.webp";
import venom from "./assets/venomsnake.webp";
import sniperwolf from "./assets/sniperwolf.webp";
import outerheaven from "./assets/outerheaven.png";
import codec from './assets/codec.ttf';
import { useScore } from "./scoreContext";




const FlipForwardsAnimation = keyframes`
0% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
  }
`

const FlipReverseAnimation = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0);
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

const Cardscontainer = styled.div`
display: block; 
grid-template-columns: 1fr 1fr 1fr; 
grid-template-rows: 1fr; 
gap: 0px 0px;
padding: 10px;
animation: ${slideIn} 2s ease-in-out forwards;
grid-template-areas: 
  "cards cards cards";
    justify-content: center;
    align-items: center;
    align-content: center;
    `;
    
    const Cards = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px;
    grid-template-areas: 
      ". . ."
      "card-area-1 card-area-2 card-area-3"
      ". . ."; 
    grid-area: cards;`;

    const Cardarea1 = styled.div`
    display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 50px 0px; 
  grid-template-areas: 
    "card-1-1 card-1-1 card-1-1"
    "card-1-2 card-1-2 card-1-2"
    "card-1-3 card-1-3 card-1-3"; 
  grid-area: card-area-1; `;

    const Cardarea11 = styled.div`
    grid-area: card-1-1;`;

    const Cardarea12 = styled.div`
    grid-area: card-1-2;`;

    const Cardarea13 = styled.div`
    grid-area: card-1-3;`;

    const Cardarea2 = styled.div`
    display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 50px 0px; 
  grid-template-areas: 
    "card-2-1 card-2-1 card-2-1"
    "card-2-2 card-2-2 card-2-2"
    "card-2-3 card-2-3 card-2-3"; 
  grid-area: card-area-2; `;

    const Cardarea21 = styled.div`
    grid-area: card-2-1;`;

    const Cardarea22 = styled.div`

    grid-area: card-2-2;`;

    const Cardarea23 = styled.div`
    grid-area: card-2-3;`;

    const Cardarea3 = styled.div`
    display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 50px 0px; 
  grid-template-areas: 
    "card-3-1 card-3-1 card-3-1"
    "card-3-2 card-3-2 card-3-2"
    "card-3-3 card-3-3 card-3-3"; 
  grid-area: card-area-3; `;

    const Cardarea31 = styled.div`
    grid-area: card-3-1;`;

    const Cardarea32 = styled.div`
    grid-area: card-3-2;`;

    const Cardarea33 = styled.div`
    grid-area: card-3-3;`;

    const PlayCardContainer = styled.div`
    display: block; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    ". . ."
    ". play-card ."
    ". . ."; 
    `
    const PlayCard = styled.div`
    display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    ". play-card-surface ."
    ". play-card-surface ."
    ". play-card-surface ."; 
  grid-area: play-card; 
  `

    const PlayCardSurface = styled.div`
    display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr 1fr; 
  gap: 0px 0px;
  background-color: white;
  border-radius: 10px; 
  grid-template-areas: 
  
    "play-card-title play-card-title play-card-title"
    "play-card-image play-card-image play-card-image"
    "play-card-image play-card-image play-card-image"
    "play-card-subtitle play-card-subtitle play-card-subtitle"; 
  grid-area: play-card-surface;
  &:hover {
    animation: ${FlipReverseAnimation} 0.3s ease-in-out forwards;
    box-shadow: rgba(2, 140, 250, 0.56) 0px 22px 70px 4px;
    cursor: pointer;
    }
    &:not(:hover) {
    animation: ${FlipForwardsAnimation} 0.3s ease-in-out forwards;
    background-color: #000000;
    box-shadow: rgba(255, 0, 0, 0.56) 0px 22px 70px 4px;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    }
  `

    const PlayCardTitle = styled.div`
    grid-area: play-card-title;
    text-align: center;
    padding: 5px;
    `

    const PlayCardImage = styled.div`
    grid-area: play-card-image;
    `
    const PlayCardSubtitle = styled.div`
    grid-area: play-card-subtitle;
    text-align: center;
    padding: 5px;
    `
    const PlayCardTitleText = styled.div`
    display:grid;
    font-size: 2em;
    justify-content: center;
    align-items: center;
    justify-items: center;
    text-align: center;
    padding: 40px;
    @font-face {
        font-family: 'codec';
        src: local('codec'), url(${codec}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'codec';
    
;
    
    
    `
    const PlayCardSubtitleText = styled.div`
    display:grid;
    font-size: 2em;
    text-align: center;
    padding: 15px;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    justify-items: center;
    @font-face {
        font-family: 'codec';
        src: local('codec'), url(${codec}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'codec';
        
    
    `
    const PlayCardCharacterImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fit;
    &:not(:hover) {
        content: url(${outerheaven});
    `





export default function CardsComponent (pressed) {

const cardsList = {
    cardOne: {
        id: 1,
        title: "Big Boss",
        image: bigbosss,
        imageAlt: "Big Boss",
        subtitle: "Boss of All Bosses",
        pressed: 0
    },
    cardTwo: {
        id: 2,
        title: "Solid Snake",
        image: solidsnake,
        imageAlt: "Solid Snake",
        subtitle: "The Original",
        pressed: 0
    },
    cardThree: {
        id: 3,
        title: "Liquid Snake",
        image: liquid,
        imageAlt: "Liquid Snake",
        subtitle: "The Clone",
        pressed: 0
    },
    cardFour: {
        id: 4,
        title: "Solidus Snake",
        image: solidus,
        imageAlt: "Solidus Snake",
        subtitle: "The Politician",
        pressed: 0
    },
    cardFive: {
        id: 5,
        title: "Venom Snake",
        image: venom,
        imageAlt: "Venom Snake",
        subtitle: "The Phantom",
        pressed: 0
    },
    cardSix: {
        id: 6,
        title: "Naked Snake",
        image: naked,
        imageAlt: "Naked Snake",
        subtitle: "Trick Question",
        pressed: 0
    },
    cardSeven: {
        id: 7,
        title: "The Raiden",
        image: raiden,
        imageAlt: "Raiden",
        subtitle: "The Rookie",
        pressed: 0
    },
    cardEight: {
        id: 8,
        title: "Gray Fox",
        image: grayfox,
        imageAlt: "Gray Fox",
        subtitle: "The Cyborg",
        pressed: 0
    },
    cardNine: {
        id: 9,
        title: "The Boss",
        image: theboss,
        imageAlt: "The Boss",
        subtitle: "The Mother",
        pressed: 0
    },
    cardTen: {
        id: 10,
        title: "Revolver Ocelot",
        image: revolver,
        imageAlt: "Revolver Ocelot",
        subtitle: "The Triple Agent",
        pressed: 0
    },
    cardEleven: {
        id: 11,
        title: "Psycho Mantis",
        image: psycho,
        imageAlt: "Psycho Mantis",
        subtitle: "The Psychic",
        pressed: 0
    },
    cardTwelve: {
        id: 12,
        title: "Sniper Wolf",
        image: sniperwolf,
        imageAlt: "Sniper Wolf",
        subtitle: "The Sniper",
        pressed: 0
    },
    cardThirteen: {
        id: 13,
        title: "The Vamp",
        image: vamp,
        imageAlt: "Vamp",
        subtitle: "The Immortal",
        pressed: 0
    },
    cardFourteen: {
        id: 14,
        title: "The Fortune",
        image: fortune,
        imageAlt: "Fortune",
        subtitle: "The Lucky One",
        pressed: 0
    },
    cardFifteen: {
        id: 15,
        title: "The Sorrow",
        image: sorrow,
        imageAlt: "The Sorrow",
        subtitle: "The Dead One",
        pressed: 0
    },
    cardSixteen: {
        id: 16,
        title: "The End",
        image: end,
        imageAlt: "The End",
        subtitle: "The Sleeping Assassin",
        pressed: 0
    },
    cardSeventeen: {
        id: 17,
        title: "The Fury",
        image: fury,
        subtitle: "The Pyromaniac",
        pressed: 0

    },
    cardEighteen: {
        id: 18,
        title: "The Pain",
        image: pain,
        imageAlt: "The Pain",
        subtitle: "The Hornet",
        pressed: 0
    },
    cardNineteen: {
        id: 19,
        title: "The Fear",
        image: fear,
        imageAlt: "The Fear",
        subtitle: "The Spider",
        pressed: 0
    },
    cardTwenty: {
        id: 20,
        title: "The Quiet",
        image: quiet,
        imageAlt: "The Boss",
        subtitle: "The Hummingbird",
        pressed: 0
    }
}
 

function setCardsRandomly (cards) {
    const cardsArray = Object.values(cards);
    const randomCards = [];
    while (randomCards.length < 9) {
        const randomCard = cardsArray[Math.floor(Math.random() * cardsArray.length)];
        if (!randomCards.includes(randomCard)) {
            randomCards.push(randomCard);
        }
    }
    return randomCards;
}

function setStateWithRandomCards (cards) {
    cards = cardsList;
    const randomCards = setCardsRandomly(cards);
    const cardOne = randomCards[0];
    const cardTwo = randomCards[1];
    const cardThree = randomCards[2];
    const cardFour = randomCards[3];
    const cardFive = randomCards[4];
    const cardSix = randomCards[5];
    const cardSeven = randomCards[6];
    const cardEight = randomCards[7];
    const cardNine = randomCards[8];
    return { cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven, cardEight, cardNine };
}

const [cardOne, setCardOne] = useState(setStateWithRandomCards(cardsList).cardOne);
const [cardTwo, setCardTwo] = useState(setStateWithRandomCards(cardsList).cardTwo);
const [cardThree, setCardThree] = useState(setStateWithRandomCards(cardsList).cardThree);
const [cardFour, setCardFour] = useState(setStateWithRandomCards(cardsList).cardFour);
const [cardFive, setCardFive] = useState(setStateWithRandomCards(cardsList).cardFive);
const [cardSix, setCardSix] = useState(setStateWithRandomCards(cardsList).cardSix);
const [cardSeven, setCardSeven] = useState(setStateWithRandomCards(cardsList).cardSeven);
const [cardEight, setCardEight] = useState(setStateWithRandomCards(cardsList).cardEight);
const [cardNine, setCardNine] = useState(setStateWithRandomCards(cardsList).cardNine);
const [shuffle , setShuffle] = useState(false);
const [gameOver, setGameOver] = useState(false);
const [quietPressed, setQuietPressed] = useState(0);
const [bigBossPressed, setBigBossPressed] = useState(0);
const [solidSnakePressed, setSolidSnakePressed] = useState(0);
const [liquidSnakePressed, setLiquidSnakePressed] = useState(0);
const [solidusSnakePressed, setSolidusSnakePressed] = useState(0);
const [venomSnakePressed, setVenomSnakePressed] = useState(0);
const [nakedSnakePressed, setNakedSnakePressed] = useState(0);
const [raidenPressed, setRaidenPressed] = useState(0);
const [grayFoxPressed, setGrayFoxPressed] = useState(0);
const [theBossPressed, setTheBossPressed] = useState(0);
const [revolverOcelotPressed, setRevolverOcelotPressed] = useState(0);
const [psychoMantisPressed, setPsychoMantisPressed] = useState(0);
const [sniperWolfPressed, setSniperWolfPressed] = useState(0);
const [vampPressed, setVampPressed] = useState(0);
const [fortunePressed, setFortunePressed] = useState(0);
const [theSorrowPressed, setTheSorrowPressed] = useState(0);
const [theEndPressed, setTheEndPressed] = useState(0);
const [theFuryPressed, setTheFuryPressed] = useState(0);
const [thePainPressed, setThePainPressed] = useState(0);
const [theFearPressed, setTheFearPressed] = useState(0);
const { score, setScore, highScore, setHighScore } = useScore();


useEffect(() => {
    setShuffle(false);
    if (shuffle) {
        const randomCards = setCardsRandomly(cardsList);
        setCardOne(randomCards[0]);
        setCardTwo(randomCards[1]);
        setCardThree(randomCards[2]);
        setCardFour(randomCards[3]);
        setCardFive(randomCards[4]);
        setCardSix(randomCards[5]);
        setCardSeven(randomCards[6]);
        setCardEight(randomCards[7]);
        setCardNine(randomCards[8]);
        setShuffle(false);
    }
    
}, [shuffle, cardsList]);





function onCardClick (card) {
    if (card.title === "Quiet") {
        setQuietPressed(quietPressed + 1);
        setScore(score + 1);
        console.log(card.title + quietPressed);
    }
    if (card.title === "Big Boss") {
        setBigBossPressed(bigBossPressed + 1);
        setScore(score + 1);
        console.log(card.title + bigBossPressed);
    }
    if (card.title === "Solid Snake") {
        setSolidSnakePressed(solidSnakePressed + 1);
        setScore(score + 1);
        console.log(card.title + solidSnakePressed);
    }
    if (card.title === "Liquid Snake") {
        setLiquidSnakePressed(liquidSnakePressed + 1);
        setScore(score + 1);
        console.log(card.title + liquidSnakePressed);
    }
    if (card.title === "Solidus Snake") {
        setSolidusSnakePressed(solidusSnakePressed + 1);
        setScore(score + 1);
        console.log(card.title + solidusSnakePressed);
    }
    if (card.title === "Venom Snake") {
        setVenomSnakePressed(venomSnakePressed + 1);
        setScore(score + 1);
        console.log(card.title + venomSnakePressed);
    }
    if (card.title === "Naked Snake") {
        setNakedSnakePressed(nakedSnakePressed + 1);
        setScore(score + 1);
        console.log(card.title + nakedSnakePressed);
    }
    if (card.title === "Raiden") {
        setRaidenPressed(raidenPressed + 1);
        setScore(score + 1);
        console.log(card.title + raidenPressed);
    }
    if (card.title === "Gray Fox") {
        setGrayFoxPressed(grayFoxPressed + 1);
        setScore(score + 1);
        console.log(card.title + grayFoxPressed);
    }
    if (card.title === "The Boss") {
        setTheBossPressed(theBossPressed + 1);
        setScore(score + 1);
        console.log(card.title + theBossPressed);
    }
    if (card.title === "Revolver Ocelot") {
        setRevolverOcelotPressed(revolverOcelotPressed + 1);
        setScore(score + 1);
        console.log(card.title + revolverOcelotPressed);
    }
    if (card.title === "Psycho Mantis") {
        setPsychoMantisPressed(psychoMantisPressed + 1);
        setScore(score + 1);
        console.log( card.title + psychoMantisPressed);
    }
    if (card.title === "Sniper Wolf") {
        setSniperWolfPressed(sniperWolfPressed + 1);
        setScore(score + 1);
        console.log( card.title + sniperWolfPressed);
    }
    if (card.title === "Vamp") {
        setVampPressed(vampPressed + 1);
        setScore(score + 1);
        console.log( card.title + vampPressed);
    }
    if (card.title === "Fortune") {
        setFortunePressed(fortunePressed + 1);
        setScore(score + 1);
        console.log( card.title + fortunePressed);
    }
    if (card.title === "The Sorrow") {
        setTheSorrowPressed(theSorrowPressed + 1);
        setScore(score + 1);
        console.log( card.title + theSorrowPressed);
    }
    if (card.title === "The End") {
        setTheEndPressed(theEndPressed + 1);
        setScore(score + 1);
        console.log( card.title + theEndPressed);
    }
    if (card.title === "The Fury") {
        setTheFuryPressed(theFuryPressed + 1);
        setScore(score + 1);
        console.log( card.title + theFuryPressed);
    }
    if (card.title === "The Pain") {
        setThePainPressed(thePainPressed + 1);
        setScore(score + 1);
        console.log( card.title + thePainPressed);
    }
    if (card.title === "The Fear") {
        setTheFearPressed(theFearPressed + 1);
        setScore(score + 1);
        console.log(card.title + theFearPressed);
    }




    if (card.pressed === 0) {
        card.pressed = card.pressed + 1;
        console.log(card.pressed);
        
        setShuffle(true);
    }

    if (quietPressed === 2  || bigBossPressed === 2  || solidSnakePressed === 2  || liquidSnakePressed === 2  || solidusSnakePressed === 2  || venomSnakePressed === 2  || nakedSnakePressed === 2  || raidenPressed === 2  || grayFoxPressed === 2  || theBossPressed === 2  || revolverOcelotPressed === 2  || psychoMantisPressed === 2  || sniperWolfPressed === 2  || vampPressed === 2  || fortunePressed === 2  || theSorrowPressed === 2  || theEndPressed === 2  || theFuryPressed === 2  || thePainPressed === 2 || theFearPressed === 2) {
        setGameOver(true)
        alert("Game Over! Press OK to play again!");
    }
}

if (gameOver && score > highScore) {
    setGameOver(false);
    setHighScore(score);
    setScore(0);
    setQuietPressed(0);
    setBigBossPressed(0);
    setSolidSnakePressed(0);
    setLiquidSnakePressed(0);
    setSolidusSnakePressed(0);
    setVenomSnakePressed(0);
    setNakedSnakePressed(0);
    setRaidenPressed(0);
    setGrayFoxPressed(0);
    setTheBossPressed(0);
    setRevolverOcelotPressed(0);
    setPsychoMantisPressed(0);
    setSniperWolfPressed(0);
    setVampPressed(0);
    setFortunePressed(0);
    setTheSorrowPressed(0);
    setTheEndPressed(0);
    setTheFuryPressed(0);
    setThePainPressed(0);
    setTheFearPressed(0);
}

if (gameOver && score < highScore) {
    setGameOver(false);
    setScore(0);
        setQuietPressed(0);
    setBigBossPressed(0);
    setSolidSnakePressed(0);
    setLiquidSnakePressed(0);
    setSolidusSnakePressed(0);
    setVenomSnakePressed(0);
    setNakedSnakePressed(0);
    setRaidenPressed(0);
    setGrayFoxPressed(0);
    setTheBossPressed(0);
    setRevolverOcelotPressed(0);
    setPsychoMantisPressed(0);
    setSniperWolfPressed(0);
    setVampPressed(0);
    setFortunePressed(0);
    setTheSorrowPressed(0);
    setTheEndPressed(0);
    setTheFuryPressed(0);
    setThePainPressed(0);
    setTheFearPressed(0);
}


const gameOverStyle = {
    display: "block",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "4em",
    textAlign: "center",
    padding: "15px",
    backgroundColor: "black",
    borderRadius: "10px",
    filter: "drop-shadow(0px 0px 10px #000000)",
    zIndex: "1",
    opacity: "0.8",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    textShadow: "0 0 10px black"

}






        return (
            <Cardscontainer>
                <Cards>
                    <Cardarea1>
                        <Cardarea11>
                            <PlayCardContainer key={cardOne.id}>
                                <PlayCard>
                                    <PlayCardSurface onClick={() => onCardClick(cardOne)}>
                                        <PlayCardTitle>
                                            <PlayCardTitleText>{cardOne.title}</PlayCardTitleText>
                                        </PlayCardTitle>
                                        <PlayCardImage>
                                            <PlayCardCharacterImage src={cardOne.image} alt={cardOne.imageAlt}/>
                                        </PlayCardImage>
                                        <PlayCardSubtitle>
                                            <PlayCardSubtitleText>{cardOne.subtitle}</PlayCardSubtitleText>
                                        </PlayCardSubtitle>
                                    </PlayCardSurface>
                                </PlayCard>
                            </PlayCardContainer>
                        </Cardarea11>
                        <Cardarea12>
                        <PlayCardContainer key={cardTwo.id}>
                                <PlayCard>
                                    <PlayCardSurface onClick={() => onCardClick(cardTwo)}>
                                        <PlayCardTitle>
                                            <PlayCardTitleText>{cardTwo.title}</PlayCardTitleText>
                                        </PlayCardTitle>
                                        <PlayCardImage>
                                            <PlayCardCharacterImage src={cardTwo.image} alt={cardTwo.imageAlt} />
                                        </PlayCardImage>
                                        <PlayCardSubtitle>
                                            <PlayCardSubtitleText>{cardTwo.subtitle}</PlayCardSubtitleText>
                                        </PlayCardSubtitle>
                                    </PlayCardSurface>
                                </PlayCard>
                            </PlayCardContainer>
                        </Cardarea12>
                        <Cardarea13>
                        <PlayCardContainer key={cardThree.id}>
                                <PlayCard>
                                    <PlayCardSurface onClick={() => onCardClick(cardThree)}>
                                        <PlayCardTitle>
                                            <PlayCardTitleText>{cardThree.title}</PlayCardTitleText>
                                        </PlayCardTitle>
                                        <PlayCardImage>
                                            <PlayCardCharacterImage src={cardThree.image} alt={cardThree.imageAlt} />
                                        </PlayCardImage>
                                        <PlayCardSubtitle>
                                            <PlayCardSubtitleText>{cardThree.subtitle}</PlayCardSubtitleText>
                                        </PlayCardSubtitle>
                                    </PlayCardSurface>
                                </PlayCard>
                            </PlayCardContainer>
                        </Cardarea13>
                    </Cardarea1>
                    <Cardarea2>
                        <Cardarea21>
                        <PlayCardContainer key={cardFour.id}>
                                <PlayCard>
                                    <PlayCardSurface onClick={() => onCardClick(cardFour)}>
                                        <PlayCardTitle>
                                            <PlayCardTitleText>{cardFour.title}</PlayCardTitleText>
                                        </PlayCardTitle>
                                        <PlayCardImage>
                                            <PlayCardCharacterImage src={cardFour.image} alt={cardFour.imageAlt} />
                                        </PlayCardImage>
                                        <PlayCardSubtitle>
                                            <PlayCardSubtitleText>{cardFour.subtitle}</PlayCardSubtitleText>
                                        </PlayCardSubtitle>
                                    </PlayCardSurface>
                                </PlayCard>
                            </PlayCardContainer>
                        </Cardarea21>
                        <Cardarea22>
                        <PlayCardContainer key={cardFive.id}>
                                <PlayCard>
                                    <PlayCardSurface onClick={() => onCardClick(cardFive)}>
                                        <PlayCardTitle>
                                            <PlayCardTitleText>{cardFive.title}</PlayCardTitleText>
                                        </PlayCardTitle>
                                        <PlayCardImage>
                                            <PlayCardCharacterImage src={cardFive.image} alt={cardFive.imageAlt} />
                                        </PlayCardImage>
                                        <PlayCardSubtitle>
                                            <PlayCardSubtitleText>{cardFive.subtitle}</PlayCardSubtitleText>
                                        </PlayCardSubtitle>
                                    </PlayCardSurface>
                                </PlayCard>
                            </PlayCardContainer>
                        </Cardarea22>
                        <Cardarea23>
                        <PlayCardContainer key={cardSix.id}>
                                <PlayCard>
                                    <PlayCardSurface onClick={() => onCardClick(cardSix)}>
                                        <PlayCardTitle>
                                            <PlayCardTitleText>{cardSix.title}</PlayCardTitleText>
                                        </PlayCardTitle>
                                        <PlayCardImage>
                                            <PlayCardCharacterImage src={cardSix.image} alt={cardSix.imageAlt} />
                                        </PlayCardImage>
                                        <PlayCardSubtitle>
                                            <PlayCardSubtitleText>{cardSix.subtitle}</PlayCardSubtitleText>
                                        </PlayCardSubtitle>
                                    </PlayCardSurface>
                                </PlayCard>
                            </PlayCardContainer>
                        </Cardarea23>
                    </Cardarea2>
                    <Cardarea3>
                        <Cardarea31>
                        <PlayCardContainer key={cardSeven.id}>
                                <PlayCard>
                                    <PlayCardSurface onClick={() => onCardClick(cardSeven)}>
                                        <PlayCardTitle>
                                            <PlayCardTitleText>{cardSeven.title}</PlayCardTitleText>
                                        </PlayCardTitle>
                                        <PlayCardImage>
                                            <PlayCardCharacterImage src={cardSeven.image} alt={cardSeven.imageAlt} />
                                        </PlayCardImage>
                                        <PlayCardSubtitle>
                                            <PlayCardSubtitleText>{cardSeven.subtitle}</PlayCardSubtitleText>
                                        </PlayCardSubtitle>
                                    </PlayCardSurface>
                                </PlayCard>
                            </PlayCardContainer>
                        </Cardarea31>
                        <Cardarea32>
                        <PlayCardContainer key={cardEight.id}>
                                <PlayCard>
                                    <PlayCardSurface onClick={() => onCardClick(cardEight)}>
                                        <PlayCardTitle>
                                            <PlayCardTitleText>{cardEight.title}</PlayCardTitleText>
                                        </PlayCardTitle>
                                        <PlayCardImage>
                                            <PlayCardCharacterImage src={cardEight.image} alt={cardEight.imageAlt} />
                                        </PlayCardImage>
                                        <PlayCardSubtitle>
                                            <PlayCardSubtitleText>{cardEight.subtitle}</PlayCardSubtitleText>
                                        </PlayCardSubtitle>
                                    </PlayCardSurface>
                                </PlayCard>
                            </PlayCardContainer>
                        </Cardarea32>
                        <Cardarea33>
                        <PlayCardContainer key={cardNine.id}>
                                <PlayCard>
                                    <PlayCardSurface onClick={() => onCardClick(cardNine)}>
                                        <PlayCardTitle>
                                            <PlayCardTitleText>{cardNine.title}</PlayCardTitleText>
                                        </PlayCardTitle>
                                        <PlayCardImage>
                                            <PlayCardCharacterImage src={cardNine.image} alt={cardNine.imageAlt} />
                                        </PlayCardImage>
                                        <PlayCardSubtitle>
                                            <PlayCardSubtitleText>{cardNine.subtitle}</PlayCardSubtitleText>
                                        </PlayCardSubtitle>
                                    </PlayCardSurface>
                                </PlayCard>
                            </PlayCardContainer>
                        </Cardarea33>
                    </Cardarea3>
                </Cards>
            </Cardscontainer>
        )
    }




