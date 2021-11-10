import './Landing.css';
import './index.css';


function Footer() {
    return(
        <footer>
                <div class="wrap">
                    <div class="social-links">
                        <a href=""><i class="fa fa-facebook-square" aria-hidden="false"></i></a>
                        <a href=""><i class="fa fa-twitter-square" aria-hidden="false"></i></a>
                        <a href=""><i class="fa fa-instagram" aria-hidden="false"></i></a>
                    </div>
                    <input type="text" placeholder="Email Address"/>
                    <button type="submit">Subscribe</button>
                </div>

                <p class="copyright">&copy;2016 Sarah Holden</p>
            </footer>
    )
}

export default Footer 
