import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './EgyediCar.css';

const EgyediCar = () => {
    const { id } = useParams();

    const [car, setCar] = useState({});
    const [kepek, setKepek] = useState([]);
    const [slideIndex, setSlideIndex] = useState(1);
    const [slides, setSlides] = useState([]);
    const [dots, setDots] = useState([]);

    useEffect(() => {
        const kocsiLeker = async () => {
            const response = await fetch(
                'http://localhost:3500/api/cars-frontend'
            );

            const adat = await response.json();
            const kocsi = adat.cars.filter((elem) => elem._id === id);

            if (response.ok) {
                setCar(kocsi[0]);
                setKepek(kocsi[0].kepek);
            } else {
                window.alert(adat.msg);
            }
        };

        kocsiLeker();
    }, []);

    useEffect(() => {
        const slide = document.getElementsByClassName('mySlides');
        setSlides(slide);
        const dot = document.getElementsByClassName('dot');
        setDots(dot);

        function showSlides(n) {
            let slides = document.getElementsByClassName('mySlides');
            let dots = document.getElementsByClassName('dot');

            if (n > slides.length) {
                setSlideIndex(1);
            }
            if (n < 1) {
                setSlideIndex(slides.length);
            }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(' active', '');
            }
            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].className += ' active';
        }

        showSlides(slideIndex);
    }, []);

    let index = 1;

    function showSlides(n) {
        let slides = document.getElementsByClassName('mySlides');
        let dots = document.getElementsByClassName('dot');

        if (index > slides.length) {
            index = 1;
        }
        if (index < 1) {
            index = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        slides[index - 1].style.display = 'block';
        dots[index - 1].className += ' active';
    }

    function plusSlides(n) {
        index += n;
        showSlides(n);
    }

    function currentSlide(n) {
        index = n;
        showSlides(n);
    }

    return (
        <div className="egyedi-car-kontener">
            <Navbar />
            <h1>{car.marka}</h1>
            <div className="slideshow-container">
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img
                        src={kepek[0]}
                        style={{ width: '100%' }}
                    />
                    <div className="text">Caption Text</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">2 / 3</div>
                    <img
                        src={kepek[1]}
                        style={{ width: '100%' }}
                    />
                    <div className="text">Caption Two</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">3 / 3</div>
                    <img
                        src={kepek[2]}
                        style={{ width: '100%' }}
                    />
                    <div className="text">Caption Three</div>
                </div>

                <a
                    className="prev"
                    onClick={() => plusSlides(-1)}
                >
                    ❮
                </a>
                <a
                    className="next"
                    onClick={() => plusSlides(1)}
                >
                    ❯
                </a>
            </div>
            <br />

            <div style={{ textAlign: 'center' }}>
                <span
                    className="dot"
                    onClick={() => currentSlide(1)}
                ></span>
                <span
                    className="dot"
                    onClick={() => currentSlide(2)}
                ></span>
                <span
                    className="dot"
                    onClick={() => currentSlide(3)}
                ></span>
            </div>
        </div>
    );
};

export default EgyediCar;
