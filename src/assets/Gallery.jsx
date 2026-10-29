import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../../data.json';
import "./Gallery.css";

export default function Gallery() {
  const cardArray = data;
  return (
    <div 
        className = "row" style= {{marginTop:'4%', margin: '2%'}}>
      {
        cardArray.map((eachCard, index) => (
          <div className= "col-md-3" key= {index} style={{marginBottom:"4%"}}
          >
          <Card style={{ width: '16rem', height: '75vh' }}>
            <Card.Img
              variant="top"
              src={"/images/" + eachCard.img + ".jpg"}
              style={{height:'30vh'}}
              alt="images"/>
            <Card.Body>
              <Card.Title>{eachCard.title}</Card.Title>
              <Card.Text style={{height:"25vh"}}>
              {eachCard.text}
              </Card.Text>

              <Button variant="primary" href={`${eachCard.link}`} target="_blank">
               Info
              </Button>
            </Card.Body>
          </Card>
          </div>
        ))
      }
    </div>
  );
}