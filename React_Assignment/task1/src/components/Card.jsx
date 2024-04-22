import Card from 'react-bootstrap/Card';
import Photo from '../assets/cards.png';
import { Button } from 'react-bootstrap';

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={Photo} alt="Card image" style={{width:'100%',height:'80vh',filter:'brightness'}} />
      <Card.ImgOverlay  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Card.Text style={{justifyContent:"center",position:"absolute"}}>
          
          <h2 class="wixui-rich-text__text" style={{letterSpacing:"0.1em",textAlign:"center",font:"70px cinzel,serif",position:"relative"}}>THE ART OF FOOD</h2>
          <h4 style={{textAlign:"center",letterSpacing:"0.2rem",position:"relative"}}>PHOTOGRAPHY</h4>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <a href='#Viewmore'> <Button variant="outline-secondary"  style={{display:"flex",justifyContent:"center"}}>View More</Button>{' '}</a>
         </div> 
         
          
        </Card.Text>
         
      </Card.ImgOverlay>
    </Card>
    
     
  );
}

export default ImgOverlayExample;