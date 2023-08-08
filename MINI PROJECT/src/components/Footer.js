// import React from 'react'
// import InstagramIcon from '@mui/icons-material/Instagram'
// import TwitterIcon from '@mui/icons-material/Twitter'
// import FacebookIcon from '@mui/icons-material/Facebook'
// import LinkedinIcon from '@mui/icons-material/LinkedIn'
// import "../styles/Footer.css"

// function Footer() {
//   return (
//     <div className="footer">
//         <div className="socialMedia">
//             {/* <a href="https://instagram.com/vibeholic_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer"></a> */}
//             <InstagramIcon/>
//             <TwitterIcon />
//             <FacebookIcon />
//             <LinkedinIcon />
//         </div>
//         <p>&copy; 2023 team7 developments</p>
//     </div>
//   )
// }

// export default Footer
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon/>
            </a>
            <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon />
            </a>
        </div>
        <p>&copy; 2023 team7 developments</p>
    </div>
  )
}

export default Footer
