import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import TrendingBlog from './TrendingBlogs';
import Card from 'react-bootstrap/Card';

const Home = () =>{
  return(
  <div className='fluid'>
      <Carousel fade >
    <Carousel.Item>
      <img
        // className="fluid"
        src="https://source.unsplash.com/random/1400x400/?wallpaper,landscape,technology"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Publish your passions, your way</h3>
        <p>Create a unique and beautiful blog easily..</p>
        <Button variant="primary" href='/login'>Get Started</Button>{' '}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        // className="d-block w-100"
        src="https://source.unsplash.com/random/1400x400/?wallpaper,landscape,coding"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="fluid"
        src="https://source.unsplash.com/random/1400x400/?wallpaper,landscape"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <h1 className="font-italic mt-5">Trendings..... </h1><hr className="divider"/>
  <div className="row mt-3">
  <div className="col">
  <Card className="text-center " style={{ width: '18rem' }}>
  <TrendingBlog></TrendingBlog>
  </Card>
  </div>
  <div className="col">
    <Card className="text-center " style={{ width: '18rem' }}>
  <TrendingBlog></TrendingBlog>
  </Card>
  </div>
  <div className="col">
    <Card className="text-center " style={{ width: '18rem' }}>
  <TrendingBlog></TrendingBlog>
  </Card>
  </div>
  <div className="col">
    <Card className="text-center " style={{ width: '18rem' }}>
  <TrendingBlog></TrendingBlog>
  </Card>
  </div>
  <div className="col">
    <Card className="text-center " style={{ width: '18rem' }}>
  <TrendingBlog></TrendingBlog>
  </Card>
  </div>
  <div className="col">
  <Card className="text-center " style={{ width: '18rem' }}>
  <TrendingBlog></TrendingBlog>
  </Card>
  </div>
  <div className="col">
  <Card className="text-center " style={{ width: '18rem' }}>
  <TrendingBlog></TrendingBlog>
  </Card>
  </div>
  <div className="col">
  <Card className="text-center " style={{ width: '18rem' }}>
  <TrendingBlog></TrendingBlog>
  </Card>
  </div>
  </div>
  {/* <TrendingBlog></TrendingBlog>
  <TrendingBlog></TrendingBlog>
  <TrendingBlog></TrendingBlog>
  <TrendingBlog></TrendingBlog>
  <TrendingBlog></TrendingBlog> */}
  
  </div>
  )
}
export default Home;