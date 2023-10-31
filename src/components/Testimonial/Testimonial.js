import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './Testimonial.css'

const testimonials = [
  {
    name: 'Thomas',
    image: 'https://dev.nitex.com/wp-content/uploads/2020/06/thomas-1.png',
    text: 'After working for 20 years with Bangladesh, I’m really happy to finally find a young company with a great team, with a really fast reactivity to my needs, with competitive prices, and respecting the production time. We can reach them any time and get a reply in an hour, many times sooner. I’m glad to have started a new collaboration with this team and sure it will last for years!',
    position: 'CEO, Company A',
  },
  {
    name: 'Jorge',
    image: 'https://dev.nitex.com/wp-content/uploads/2020/06/WhatsApp-Image-2020-03-31-at-14.22.21-1-1-136x150-1.jpeg',
    text: 'NITEX is not a manufacturer. It is not a trading company. It is not an online store or market place. NITEX is the future of the textile business. They cover everything from the factory to show our production status live in streaming! Yes. That can be termed as Textiles 4.0! When they say it’s 24/7, it means that the team is always available to pick up the phone when you call them. Their customer service is great!',
    position: 'COO, Company B',
  },
  {
    name: 'Drew',
    image: 'https://dev.nitex.com/wp-content/uploads/2020/06/drew.png',
    text: 'NITEX is excellent at communicating from design through production and all the way until shipments are received. The products we receive are always top-notch material and the packaging is durable. If there is ever an issue with a shipment deadline, they do everything in their power to make sure we have something in our hands, if not everything. Working with the NITEX team does not feel like work!',
    position: 'COO, Company B',
  },
  {
    name: 'Antonio',
    image: 'https://dev.nitex.com/wp-content/uploads/2020/06/20190929_195813-150x150-1.jpg',
    text: 'We have been doing business with NITEX for over two years, assigning them production orders for important governmental tenders. In my 28 years of experience their service, delivery timing, and quality have proved to be nearly impeccable while keeping a reasonable price level. Their efforts count more than anything. They said no to anything. Always ready to listen to us and never make excuses!',
    position: 'COO, Company B',
  },
  {
    name: 'H.M Merajul Hasan',
    image: 'https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/299680905_1263318187805183_730735663122793204_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE3WrPMuiaFCKSkesS6q1TJZurIhm27HYlm6siGbbsdiYWVGPmEsjeheHuyXBQedCJUVlbOeUQirBAPnb2M9iVJ&_nc_ohc=AS6IPDJW4usAX8Bf5A9&_nc_ht=scontent.fdac27-1.fna&oh=00_AfAjCQTPzLgR-Wk2Y5kggaDwKEH1bQ1kQfg03Z4YW_vtlQ&oe=6545455A',
    text: 'We have been doing business with NITEX for over two years, assigning them production orders for important governmental tenders. In my 28 years of experience their service, delivery timing, and quality have proved to be nearly impeccable while keeping a reasonable price level. Their efforts count more than anything. They said no to anything. Always ready to listen to us and never make excuses!',
    position: 'COO, Company B',
  },
  // Add more testimonials here
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <img src={testimonial.image} alt={testimonial.name} />
      <p className='testimonial_text'>{testimonial.text}</p>
      <h3 className='testimonial_name'>{testimonial.name}</h3>
      <p>{testimonial.position}</p>
    </div>
  );
};

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Auto-play the slider
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 768, // Adjust the breakpoint as needed
          settings: {
            slidesToShow: 1, // Show one card at a time for smaller devices
            slidesToScroll: 1,
          },
        },
      ], // Set the interval (in milliseconds)
  };

  return (
   <div id="Testimonial">
     <h1 className='testimonial_topic_headingText'>Success stories with Nitex</h1>
     <p className='testimonial_topic_text'>We take pride in empowering our customers with values<br/> that they found nowhere else. Learn their stories.</p>
    <div className="testimonial-carousel container">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </Slider>
    </div>
   </div> 
  );
};

export default Testimonial;
