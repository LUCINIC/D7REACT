import Carousel from 'react-bootstrap/Carousel'
import { carouselItems } from '..//data/carouselData'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Hero() {
    const { theme } = useContext(ThemeContext);
    return (
        <Carousel style={{
            backgroundColor: theme.background,
            color: theme.text,
            textAlign: 'center',
        }} >
            {
                carouselItems.map((item) => {
                    return (
                        <Carousel.Item key={item.id}>
                            <img
                                className="d-block w-100"
                                src={item.image}
                                alt={item.title}
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    );
}

export default Hero