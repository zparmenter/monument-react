import './index.css';
import './Landing.css';

function Navbar() {
    return(
    <nav>
        <a class="hamburger" href=""><i class="fa fa-bars"></i></a>
		<ul>
            <li><a href="index.html#about">About</a></li>
            <li><a href="index.html#gallery">Gallery</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="index.html#contact">Contact</a></li>
		</ul>
    </nav>
    )
    
}

export default Navbar 