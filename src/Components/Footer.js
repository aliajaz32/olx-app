import React from 'react';
import "./Footer.css";

function Footer() {
    return (
    <div>
        <div style={{ backgroundColor: '#ebeeef', display: 'flex', justifyContent: 'center', paddingBottom: '30px' }}  >
            <div className='f1' style={{  flex: '1.5' }}>
                <h3>POPULAR CATEGORIES</h3>
                {/* <br /> */}
                <p> Cars</p>
                <p> Flats for rent</p>
                <p> Mobile phones</p>
                <p> Jobs</p>
            </div>
            <div className='f1' style={{  flex: '1.5' }}>
                <h3>TRENDING SEARCHES</h3>

                <p> Cars</p>
                <p> Flats for rent</p>
                <p> Mobile phones</p>
                <p> Jobs</p>
            </div>
            <div className='f1' style={{  flex: '1.5' }}>
                <h3>ABOUT US</h3>
                <p> About EMPO</p>
                <p> OLX Blog</p>
                <p> Contact Us</p>
                <p> Olx for Business</p>
            </div>
            <div className='f1' style={{  flex: '1.5' }}>
                <h3>OLX</h3>

                <p> Help</p>
                <p> Sitemap</p>
                <p> Terms of use</p>
                <p> Privacy Policy</p>
            </div>
            <div className='f1' style={{ flex: '3' }}>
                <h3>Follow us </h3>
                <div className='social-icons'>
                    <a href=""><img src="https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg" alt="" /></a>
                    <a href=""><img src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" alt="" /></a>
                    <a href=""><img src="https://www.olx.com.pk/assets/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg" alt="" /></a>
                    <a href=""><img src="https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg" alt="" /></a>
                </div>
                <br />
                <a href="">
                    <img className='ftimg' src='https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg' alt="avonapp" />
                </a>
                <a href="">
                    <img className='ftimg' src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="" />
                </a>
                <a href="">
                    <img className='ftimg' src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt="" />
                </a>
            </div>
        </div>
        <div style={{ fontSize:'0.7rem' , backgroundColor:'#002f34',padding:'20px',textAlign:'right',color:"white",fontFamily:'Roboto,Helvetica,sans-serif'}}>
            <span style={{fontWeight:'bold'}} >Free Classified in Pakistan</span>  . © 2006-2022 OLX

        </div>
    </div>

    )
  
}

export default Footer