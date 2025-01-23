import React from 'react'
import '../Styles/HomeContent.css'
import Footer from '../Components/Footer'
import Trainer from '../assets/Trainer.png'

const HomeContent = () => {
  return (
    <div style={{
         display: "grid",
         gridTemplateColumns: "repeat(2, 1fr)",
         gridTemplateRows: "80vh auto 100vh 100vh",
         gap: "10px",
         width: "100%",
      }}>
      {/* Row 1 */}
      <div className="row-hcontent">
        <h1 style={{ color: '#51c24c' }}>Intenernships at SLT</h1>
        <h3 style={{ fontWeight: "normal ", fontSize: "20px", fontStyle: "italic",color:'black'}} className='start-h3-style'>
        Embark on a transformative journey with an internship at SLT!
        <br />Dive into real-world projects, learn from experienced mentors, and build skills that shape your career. 
        <br />Whether you are exploring cutting-edge technology, mastering industry best practices, or expanding your professional network, SLT offers the perfect platform to grow. 
        <br /><b>Join us to gain invaluable experience and take the first step toward a bright future!</b>
         
        </h3>
        
      </div>

      <div className='himage-container'>
        <img src={Trainer} alt="Trainer" className='Trainer-style' />
      </div>

      {/* Row 2 */}
      <div className='about-trainer'>
        <h1 style={{ color: 'rgba(0, 255, 255, 0.7)' }} className='about-trainer-h1'>About Trainer</h1>
        <h3 style={{ fontWeight: "normal ", fontSize: "20px", fontStyle:"inherit"}} className='about-trainer-h3'>
        <p>
        Our trainers are a group of dedicated professionals with expertise in various fields, working together to ensure that every individual receives the highest quality training experience. 
        They specialize in areas such as technology, leadership, communication, and professional development, tailoring their approach to meet the diverse needs of trainees.
        <br/>At SLT-Mobitel, our trainers play a pivotal role in preparing individuals for the fast-evolving telecommunications and IT industry. 
        Equipped with in-depth knowledge of the latest advancements, they provide hands-on guidance in areas such as networking, digital transformation, customer service, and technical operations. 
        Their commitment to excellence ensures that every trainee is empowered with the skills and confidence needed to excel in their roles.
        <br/>Our trainers are not just educators but mentors who inspire and motivate, making learning an enriching and rewarding journey for all. Together, they uphold the values of professionalism, innovation, and growth, which are at the heart of SLT-Mobitel’s mission.
        </p>     
        </h3>
        
            

      </div>
      {/* Row 3 */}
      <div>

      </div>
      {/* Row 4 */ }
      <div>

      </div>
      {/* Row 5 */ }
      <div>

      </div>
      {/*Footer*/ }
      <div className='hfooter-container'>
        <Footer />
      </div>     
    </div>
  )
}

export default HomeContent
