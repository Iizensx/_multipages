import "./Home.css";




function Home() {
  return (
    <div className="home-container">
      <div classNAme="inner-border">
      <div classNAme="content-wrapper">
      <div className="title1">
         <img src="src/pages/Home/ice1.JPG" alt="My Image" style={{ maxWidth: '100%', height: 'auto' }}  />
      </div>

      <div className="tit1-1">
        <h3>
          <span className="highlight">Name :</span> Thanaphat Kreawring <br />
          <span className="highlight">Nickname :</span> Ice <br />
          <span className="highlight">Age :</span> 19 <br />
          <span className="highlight">Educational Institution :</span> Sripathum University <br />
          <span className="highlight">Faculty :</span> Information Technology <br />
          <span className="highlight">Department :</span> Computer Science and Software Development Innovation
        </h3>
        </div>
      </div>
      
      <div className="tit2-2">
        <h3>
        Hello, my name is Ice, I am from Prachuap Khiri Khan. I am studying at Sripatum University, year 2.
        </h3>
      </div>
      </div>
    </div>
  );
}

export default Home;
