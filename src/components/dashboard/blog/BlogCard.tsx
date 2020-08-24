import * as React from "react";
import Card from "react-bootstrap/Card";

interface Props {
  blog: any;
}

const BlogCard = ({ blog }: Props) => {
  return (
    <Card border="primary">
      <Card.Img variant="top" src={blog.image} />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>
          {blog.blurb}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};
export default BlogCard;
