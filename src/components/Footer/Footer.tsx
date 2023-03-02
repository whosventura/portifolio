import { Segment, Container } from 'semantic-ui-react';
import './styles.css';

const Footer = () => {
  return (
      <Segment className="footer" inverted>
        <Container textAlign="center">
          <p>Seu conteúdo aqui</p>
        </Container>
      </Segment>
    );
  }
  
  export default Footer;