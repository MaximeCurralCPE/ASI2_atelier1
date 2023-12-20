import React from 'react';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Chat } from '../Component/Chat/Chat';


export const Arena = () => {

    return (
        <>
        <Row>
            <Col sm={4}>
                <div className="container mt-1 mb-2">
                    <Chat 
                        socket={socket}
                    />
                </div>
            </Col>
            <Col sm={4}>
                <div className="container mt-1 mb-2">
                    Zone de jeu
                </div>
            </Col>
            <Col sm={4}>
                <div className="container mt-1 mb-2">
                    Autre zone
                </div>
            </Col>
        </Row>
            
        </>
    );
}
