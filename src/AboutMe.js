import yaesol from "./yaesol.png";
import React from "react";

export function AboutMe() {
    return <div className="content about-me">
        <div className="yaesol"><img src={yaesol} alt="yaesol"/></div>

        <div className="title">
            <h1>İbrahim B. Demirok</h1>
        </div>
        <div className="text m-auto w-50">
            <div className="text-item">
                <div>
                    <h3>
                        About Me
                    </h3>
                    <p>I am a developer who is always upset and hungry. I'm hungry for learning new things, maths
                        and eating food (Döner will be overpreferred). But even though I'm always sad, sometimes I
                        can be happy, especially when the person I love and care about is next to me.</p>

                </div>
            </div>
            <div className="text-item">
                <div>
                    <h3>I Make Minecraft Plugins</h3>
                    <p>
                        I'm currently making Minecraft plugins using Kotlin! I work on private plugins that is
                        unique to every customer. I have a Discord server called KingOf Plugins. You can view my
                        public resources there. Since 2018 I have sold over 400 private Minecraft plugins.
                    </p>
                </div>
            </div>
            <div className="text-item">
                <div>
                    <h3>Arduino and Electronics</h3>
                    <p>
                        I used to play with electronic components since my childhood. I have made a lot of "science"
                        with them. I'm currently making small arduino projects like wireless RGB night lamp, 3D
                        Printer and a Spidey Servo Robot
                    </p>
                </div>
            </div>
            <div className="text-item">
                <div>
                    <h3>Game Development</h3>
                    <p>
                        I'm not really into making a game from scratch but it's really fun to join Game Jams. I took
                        part in the first 50 games of Magara Jam 3 with the game Fix Me Philly. I also took part in
                        Magara Jam 5 with Red Ball but Mouse is a Villain. This game was made under 6 hours in the
                        area at Gaming Istanbul.
                    </p>
                </div>
            </div>
            <div className="text-item">
                <div>
                    <h3>Education & Activities</h3>
                    <p>
                        I am a software engineering student at Samsun University. I am also a part of some UAV
                        (Unmanned Aerial Vehicles) teams like Sampa, AGM and Temren. I am one of finalists of the
                        Teknofest 2022 International UAV Competition. We achieved this success with the AGM UAV
                        team.
                    </p>
                </div>
            </div>
            <div className="text-item">
                <div>
                    <h3>I Love Kotlin</h3>
                    <p>
                        Kotlin is a programming language which compiling into Java. This allows it to run on all JVM
                        based platforms like Android, Linux and Windows. Dont forget to check out Jetpack Compose!
                    </p>
                </div>
            </div>
        </div>
    </div>;
}