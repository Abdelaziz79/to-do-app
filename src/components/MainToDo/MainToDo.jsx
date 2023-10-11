import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ToDo from "../ToDo/ToDo";
import { useState } from "react";
import { BiSolidAddToQueue } from "react-icons/bi";


// async function wait(seconds) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, seconds * 1000);
//     });
// }

const MainToDo = () => {



    const add = () => {

        const lastId = window.localStorage.getItem("lastId") ? parseInt(window.localStorage.getItem("lastId")) : 0;
        window.localStorage.setItem("lastId", lastId + 1);
        const todo = window.localStorage.getItem("todo") ? JSON.parse(window.localStorage.getItem("todo")) : [];
        todo.push({
            title: document.getElementById("todoT").value,
            description: document.getElementById("todoD").value,
            done: false,
            id: lastId,
        });

        window.localStorage.setItem("todo", JSON.stringify(todo));
    };



    const [todo, setTodo] = useState(window.localStorage.getItem("todo") ? JSON.parse(window.localStorage.getItem("todo")) : null);
    return (
        <>
            <Container className="pt-5">
                <Container className="text-center bg-dark rounded p-4 bg-light shadow shadow-lg ">
                    <h1 className="text-primary mb-4">ToDo App</h1>
                    <Row>

                        <Col className="col-lg-6 col-sm-12 col-12 text-start rounded shadow p-3" style={{ backgroundColor: "#272c31" }}>
                            <form>
                                <label htmlFor="todoT" className="form-label text-white ">ToDo Title</label><br />
                                <input type="text" name="todoT" id="todoT" className="form-control bg-dark text-white" /><br />
                                <label htmlFor="todoD" className="form-label text-white ">ToDo Description</label><br />
                                <textarea name="todoD" id="todoD" cols="15" rows="5" className="form-control bg-dark text-white"></textarea><br />
                                <button className="btn btn-primary py-2 px-4 fs-3  " type="submit" onClick={() => { add(); }}><BiSolidAddToQueue /></button>

                            </form>

                        </Col>
                        <Col className="col-lg-6 col-sm-12 col-12 text-start">
                            {todo && todo.map((item, index) => {
                                return <ToDo key={index} title={item.title} description={item.description} done={item.done} id={item.id} />
                            })}

                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default MainToDo;