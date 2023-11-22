import React, { useState, useMemo, useRef } from 'react';
import TinderCard from 'react-tinder-card';
import { AiFillLike, AiFillDislike, AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import { BiUpArrowCircle } from "react-icons/bi";
import { db } from '../db';
import Swal from 'sweetalert2';


const TinderCards = () => {
    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    const [lastDirection, setLastDirection] = useState();
    const [aprobado, setAprobado] = useState(true);
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

        if (direction == "right") {
            handleLike();
        }
    }

    const handleLike = () => {
        return Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Se ha guardado en favoritos",
            showConfirmButton: false,
            timer: 1500
        });
    }
    const handleInit = () => {

        return Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Se ha iniciado un proceso de adopcion",
            showConfirmButton: false,
            timer: 1500
        });

    }

    const outOfFrame = (name, idx) => {
        //console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
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
                        key={mascota.name + index}
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
                <button onClick={handleInit}>
                    <FaStar size={"2.5rem"} />
                </button>
                <button style={{ background: "#92d1ad" }} onClick={handleLike}>
                    <AiFillLike size={"3rem"} />
                </button>
            </div>
        </div>
    )
}

export default TinderCards;