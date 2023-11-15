import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import { AiFillLike, AiFillDislike, AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BiUpArrowCircle } from "react-icons/bi";
import { Mascota } from '../interfaces/Mascota';
import { db } from '../db';


export const TinderCards = () => {
    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
            Array(db.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canGoBack = currentIndex < db.length - 1

    const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
    }

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < db.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
    }

    // increase current index and show card
    const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
    }

    const verMas = async () => {
        console.log(childRefs[currentIndex].current);
    }
    return (
        <div>
            <div className='cardContainer'>
                {db.map((mascota, index) => (
                    <TinderCard
                        ref={childRefs[index]}
                        className='swipe'
                        key={mascota.name}
                        onSwipe={(dir) => swiped(dir, mascota.name, index)}
                        onCardLeftScreen={() => outOfFrame(mascota.name, index)}
                    >
                        <div
                            style={{
                                backgroundImage: "url(" + mascota.url + ")"
                            }}
                            className='card'
                        >
                            <div className='cardContent'>
                                <div className='title'>
                                    <p>{mascota.name}</p>
                                    <button style={{ borderStyle: "none", background: "none" }}>
                                        <BiUpArrowCircle size={"3rem"} />
                                    </button>
                                </div>
                                <p>{mascota.edad}</p>
                                <p><FaLocationDot /> {mascota.ubicacion}</p>
                                <p>
                                    {mascota.genero == "Macho" ? <AiOutlineMan /> : <AiOutlineWoman />}
                                    {mascota.genero}
                                </p>
                            </div>
                        </div>
                    </TinderCard>
                ))}
            </div>

            <div className='buttons'>
                <button style={{ background: "#e59191" }}>
                    <AiFillDislike size={"3rem"} />
                </button>
                <button >
                    <BsFillBookmarkFill size={"2.5rem"} />
                </button>
                <button style={{ background: "#92d1ad" }}>
                    <AiFillLike size={"3rem"} />
                </button>
            </div>
        </div>
    )
}

/*
import { AiFillLike, AiFillDislike, AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BiUpArrowCircle } from "react-icons/bi";
import Swal from 'sweetalert2';
import { Mascota } from '../interfaces/Mascota';


<div>
                <button style={{ backgroundColor: !canSwipe ? '#c3c4d3' : "" }} onClick={() => swipe('left')}>left!</button>
                <button style={{ backgroundColor: !canGoBack ? '#c3c4d3' : "" }} onClick={() => goBack()}>undo!</button>
                <button style={{ backgroundColor: !canSwipe ? '#c3c4d3' : "" }} onClick={() => swipe('right')}>right!</button>
            </div>
const Card = styled.div`
  position:relative;
  width: 300px;
  height:70vh;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;

const CardContent = styled.div`
   position: absolute;
   bottom:0;
   left:0;
   background: rgba(255,255,255,0.6);
   padding: 1rem;
   border-radius: 30px 0 0 0;
   p{
    margin: 0;
    font-weight: 400;
   }

   div{
    display: flex;
    justify-content: space-between;
    align-items:center;
    p{
        font-size: 2rem;
        font-weight: 500;
    }
   }
`;

const ActionButtons = styled.div`
   position: absolute;
   bottom:0;
   display:flex;
   width: 40vw;
   justify-content: space-between;
`;



<TinderCard
                    key={index}
                    className="swipe"
                    preventSwipe={[`up`, `down`]}
                    onSwipe={(dir) => swiped(dir, mascota.name)}
                    onCardLeftScreen={() => outOfFrame(mascota.name)}

                >
                    <Card
                        style={{
                            backgroundImage: "url(" + mascota.url + ")"
                        }}>
                        <CardContent>
                            <div>
                                <p>{mascota.name}</p>
                                <button style={{ borderStyle: "none", background: "none" }}>
                                    <BiUpArrowCircle size={"3rem"} />
                                </button>
                            </div>
                            <p>{mascota.edad}</p>
                            <p><FaLocationDot /> {mascota.ubicacion}</p>
                            <p>
                                {mascota.genero == "Macho" ? <AiOutlineMan /> : <AiOutlineWoman />}
                                {mascota.genero}
                            </p>
                        </CardContent>
                    </Card>

                </TinderCard>



                <ActionButtons>
                    <AiFillDislike size={"3.5rem"} color={"#9d9d9d"} />
                    <BsFillBookmarkFill size={"3rem"} color={"#9d9d9d"} />
                    <AiFillLike size={"3.5rem"} color={"#9d9d9d"} />
                </ActionButtons>
*/
