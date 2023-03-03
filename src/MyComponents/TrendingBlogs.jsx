import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TrendingBlog = ()=>{
return(
//     <div className="card" style={{ width: '18rem' }}>
//     <img src="..." className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">Card title</h5>
//       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" className="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>
<div>
<Card.Header>Featured</Card.Header>
<Card.Body>
  <Card.Title>Special title treatment</Card.Title>
  <Card.Text>
    With supporting text below as a natural lead-in to additional content.
  </Card.Text>
  <Button variant="primary" href='/login'>Read More</Button>
</Card.Body>
<Card.Footer className="text-muted">2 days ago</Card.Footer>
</div>

)
}
export default TrendingBlog;