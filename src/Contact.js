import "./App.css";
import facebook from "./images/facebook.png";
import phone from "./images/phone-call.png";
import github from "./images/github (1).png";
import linkedin from "./images/linkedin.png";
import insagram from "./images/instagram.png";
import Gmail from "./images/social.png";
import website from "./images/click.png";

function Contact() {
  const facebookProfileUrl = "https://www.facebook.com/chintu.deepak.56/";
  const instagramProfileUrl = "https://www.instagram.com/muvvaladeepak814";
  const GithubProfileUrl = "https://github.com/muvvaladeepak";
  const linkedinProfileUrl =
    "https://www.linkedin.com/in/deepak-muvvala-275670278";
  const websiteProfileUrl = "https://muvvaladeepak.github.io/my-profile/";

  return (
    <div className="Contact" id="Contact">
      <h1>Contact :</h1>
      <div class="row">
        <div class="column">
          <div class="card">
            <div className="icon">
              <img src={Gmail} alt="Gmail" className="gmail" />
              <span className="tex">deepakmuvvala959@gmail.com</span>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div className="icon">
              <img src={phone} alt="phone" className="phone" />
              <span  className="tex1">6303674755</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <div class="card">
            <div className="icon">
              <a
                href={GithubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="github" className="icons" />
              </a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div className="icon">
              <a
                href={linkedinProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="linkedin" className="icons" />
              </a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div className="icon">
              <a
                href={facebookProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="facebook" className="icons" />
              </a>
            </div>
          </div>
          </div>

          <div class="column">
          <div class="card">
            <div className="icon">
              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insagram} alt="instagram" className="icons" />
              </a>
            </div>
          </div>
          </div>


        <div class="column">
          <div class="card">
            <div className="icon">
              <a
                href={websiteProfileUrl}
                target="_blank"
                rel="noopener noreferrer">
                <img src={website} alt="website" className="icons" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
