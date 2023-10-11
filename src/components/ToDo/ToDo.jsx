import React, { useEffect } from "react";
import { Col, Container, InputGroup, Row } from "react-bootstrap";
import { useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { CgDetailsMore } from 'react-icons/cg';

const remove = (id) => {
    let todo = JSON.parse(window.localStorage.getItem("todo"));
    todo = todo?.filter((item) => {
        return item.id !== id
    })
    window.localStorage.setItem("todo", JSON.stringify(todo));
}

const check = (id) => {
    const todo = JSON.parse(window.localStorage.getItem("todo"));
    todo.map((item) => {
        if (item.id === id) {
            item.done = !item.done;
        }
    })
    window.localStorage.setItem("todo", JSON.stringify(todo));

}

const ToDo = ({ title, description, done, id }) => {

    const [do1, setDo] = useState(false);
    const [count, setCount] = useState(0);
    const [d, setD] = useState(done);




    const createDetails = () => {
        return (
            <Container>
                <h4 className="text-white">{description}</h4>
            </Container>
        );
    }
    const [details, setDetails] = useState(false);

    return (
        <div className="shadow rounded my-3 p-3 " style={{ backgroundColor: "#272c31" }} >
            <Row className="align-items-center">
                <Col className=" col-2 ">
                    {d ? <input className="form-check-input  fs-1" checked style={{ backgroundColor: "#272c31" }} onClick={() => { setD(!d); check(id) }} type="checkbox" value="" id="flexCheckDefault" /> : <input className="form-check-input  fs-1" style={{ backgroundColor: "#272c31" }} onClick={() => { setD(!d); check(id) }} type="checkbox" value="" id="flexCheckDefault" />}
                </Col>
                <Col className="col-lg-5 col-md-5 col-sm-9" >
                    {d ? <strike className="text-white"><h3 className='text-primary '  >{title}</h3></strike> : <h3 className='text-primary '  >{title}</h3>}
                    {/* <h3 className='text-primary '  >{title}</h3> */}
                </Col>
                <Col className="text-end col-lg-4 col-md-4 col-sm-12  ">
                    <form>
                        <a className="  text-success border-0 fs-1 mx-2 " style={{ cursor: "pointer" }} onClick={() => { setDetails(!details); }}><CgDetailsMore /></a>
                        <button type="submit" className=" border-0 text-danger border-none fs-1 " style={{ backgroundColor: "#272c31" }} onClick={() => { remove(id); }}><CiSquareRemove /></button>
                    </form>
                </Col>
            </Row>
            <Row >
                <Col>
                    {details ? createDetails() : null}
                </Col>
            </Row>
        </div>
    );
}


export default ToDo;


