import * as React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BlogCard from "../blog/BlogCard";

import Header from '../../shared/Header';
import background1 from "../../../assets/background1.gif";
import "./Home.scss";

const Blogs = [
  {
    title: "Test",
    author: "Joe Frazier",
    blurb: "This is a test post",
    content:
      "THis is dafsf asdg adsf g asd v asdjvbalsdbvas dasdblvkasjdb faksdjf kjbvasdlbaliurgasjdb",
    image: background1,
    posted: Date.now(),
    lastUpdate: Date.now(),
  },
  {
    title: "Test2",
    author: "Joe Frazier",
    blurb: "This is a test post",
    content:
      "THis is dafsf asdg adsf g asd v asdjvbalsdbvas dasdblvkasjdb faksdjf kjbvasdlbaliurgasjdb",
    image: background1,
    posted: Date.now(),
    lastUpdate: Date.now(),
  },
  {
    title: "Test3",
    author: "Joe Frazier",
    blurb: "This is a test post",
    content:
      "THis is dafsf asdg adsf g asd v asdjvbalsdbvas dasdblvkasjdb faksdjf kjbvasdlbaliurgasjdb",
    image: background1,
    posted: Date.now(),
    lastUpdate: Date.now(),
  },
];

const Home = () => {
  return (
    <div className="text-text">
      <Header />
      <Container fluid className="bg-white d-flex flex-column py-5">
        <Container className="bg-light d-flex flex-column py-5 rounded-lg">
          <h1 className="text-center pb-5">Blog</h1>

          <Row className="px-5 my-2">
            {Blogs.map((blog) => (
              <Col xs={12} md={6} xl={4} className="px-2 py-3">
                <BlogCard blog={blog} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default Home;
