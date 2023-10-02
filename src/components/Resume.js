import './Resume.css'
function Resume() {
   return (
    <div className="header">
      
        <h1 className='h1'>Resume</h1>
        <h2>Emily</h2>
        <hr/>
        <p class='head'>Interests</p>
        <ul>
            <li>Drawing</li>
            <li>Photography</li>
            <li>Design</li>
            <li>Progamming</li>
            <li>Computer Science</li>
        </ul>
        <p class='head'>Skils</p>
        <ul>
            <li>
                Web Design with HTML & CSS
            </li>
        </ul>
        <p class='head'>Education</p>
        <ul>
            <li>Wilton High school</li>
            <li>Silvermine School of Arts</li>
            <li>Coder academy</li>
        </ul>
        <p class='head'>Experience</p>
        <ul>
            <li>Student Technology Intern for Wilton school District</li>
            <li>Babysitter</li>
        </ul>
        <p class='head'>Extra Curriculars</p>
        <ul>
            <li>Recycling club</li>
            <li>Gardening club</li>
            <li>Drawing club</li>
            <li>Book club</li>
        </ul>
    </div>
   );
}

export default Resume;