import {Col, Container, Row} from "react-bootstrap";
import android from "./icon/icons8-android-studio.svg";
import intellij from "./icon/icons8-intellij-idea.svg";
import arduino from "./icon/icons8-arduino.svg";
import git from "./icon/icons8-git.svg";
import github from "./icon/icons8-github.svg";
import pycharm from "./icon/icons8-pycharm.svg";
import postgre from "./icon/icons8-postgresql.svg";
import unity from "./icon/icons8-unity.svg";
import java from "./icon/icons8-java.svg";
import react from "./icon/icons8-react.svg";
import webstorm from "./icon/icons8-webstorm.svg";
import kotlin from "./icon/icons8-kotlin.svg";
import React from "react";
import {Animator, MoveIn, Sticky, FadeIn, Fade, FadeOut} from "react-scroll-motion";

export function Skills() {
    return <div className="content">
        <div className="title">
            <h1>Skills</h1>
        </div>
        <div className="text w-75 m-auto">
            <Container>
                <Animator animation={FadeIn()}>
                    <Row>
                        <Col className="d-flex"><img className="mx-auto" src={android} alt="android"/></Col>
                        <Col className="d-flex"><img className="mx-auto" src={intellij} alt="intellij"/></Col>
                        <Col className="d-flex"><img className="mx-auto" src={arduino} alt="arduino"/></Col>
                        <Col className="d-flex"><img className="mx-auto" src={git} alt="git"/></Col>
                    </Row>
                </Animator>
                <Row>
                    <Col className="d-flex"><img className="mx-auto" src={github} alt="github"/></Col>
                    <Col className="d-flex"><img className="mx-auto" src={pycharm} alt="pycharm"/></Col>
                    <Col className="d-flex"><img className="mx-auto" src={postgre} alt="postgre"/></Col>
                    <Col className="d-flex"><img className="mx-auto" src={unity} alt="unity"/></Col>
                </Row>
                <Row>
                    <Col className="d-flex"><img className="mx-auto" src={java} alt="github"/></Col>
                    <Col className="d-flex"><img className="mx-auto" src={react} alt="pycharm"/></Col>
                    <Col className="d-flex"><img className="mx-auto" src={webstorm} alt="postgre"/></Col>
                    <Col className="d-flex"><img className="mx-auto" src={kotlin} alt="unity"/></Col>
                </Row>
            </Container>
        </div>
    </div>;
}