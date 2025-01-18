import React from 'react'
import ProjectCard from './ProjectCard.jsx'

function Projects(){

    const img1="/flpybird.jpg"
    const desc1="Created a hardware-based implementation of Flappy Bird using Verilog to run on an FPGA.  Designed digital circuits to implement an FSM to control game logic and VGA output, collision detection logic, counters for timing of in-game objects, and utilized on-chip memory for sprites and background images. Synthesized logic using Quartus Prime and verified project using ModelSim."

    const img2="/appstore.png"
    const desc2="Developed a program that simulates a mobile app store using Java and OOP principles. Implemented an interactive GUI using Java Swing to select between different apps. Furthermore, implemented a clock app consisting of various functionalities such as a stopwatch, timer, and world clock."

    const img3="/reversi.png"
    const desc3="Implemented a version of Reversi that allows users to play against a CPU using C. The program consists of dynamic board-sizing, an updating display of the board, and an updating list of valid moves for each player. Developed a custom function implementing heuristics and the minimax algorithm to determine moves for the CPU."



    return (
        <section>
            <section className="projects-section" id="projects">
                        <h2>Projects</h2>
                        <div className="cards-container">
                            <ProjectCard title={"Verilog Flappy Bird"} image={img1} description={desc1}></ProjectCard>
                            <ProjectCard title={"Java App Store"} image={img2} description={desc2}></ProjectCard>
                            <ProjectCard title={"Reversi"} image={img3} description={desc3}></ProjectCard>
                        </div>
                    </section>
        </section>
    )
}

export default Projects