import React, {useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experiencia from './Experiencia';
import Tecnologias from './Tecnologias';
import AcercaDe from './AcercaDe';
import TextSpiral from './TextSpiral'
import "../styles/ScrollTrig.css";

function ScrollTrig() {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const pin = gsap.fromTo(sectionRef.current,
            {
                translateX: 0
            }, 
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "1000 top",
                    scrub: 0.6,
                    pin: true
                }
            }
        )
        return () => {
            pin.kill();
        }
    }, []);

    return (
        <section className="scroll-section-outer">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="scroll-section-inner">
                    <div className="scroll-section">
                        <Experiencia />
                    </div>
                    <div className="scroll-section">
                        <Tecnologias />
                    </div>
                    <div className="scroll-section">
                        <AcercaDe />
                    </div>
                    <div className="scroll-section">
                        <TextSpiral />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScrollTrig;