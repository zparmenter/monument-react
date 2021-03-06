import './Landing.css';
import './index.css';


function Header() {
    return(
        <header class='vertical-center'>
            <div>
                <h1><a href="">Monument</a></h1>
                <h2>A Lifestyle Magazine</h2>
            </div>
        </header>
    )
}


	

function Archive() {
    return(
        <section>
            <h2>From the Archive</h2>

            <div class="grid-wrapper articles">
                <article class="col-third">
                    <img src="/images/article_1.jpg" alt=""/>
                    <div>
                        <h3>Issue Twenty &mdash; The Southwest</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptate eos nisi necessitatibus aperiam dolorem ut eveniet quae dolores quisquam nulla, cumque tenetur blanditiis modi tempora excepturi error veniam suscipit dicta praesentium reiciendis illo obcaecati odit inventore minima. Pariatur facilis, excepturi! Facilis cumque dicta reiciendis nam accusantium cum pariatur sunt accusamus voluptas eaque sapiente totam dolorum nulla eligendi molestiae, quidem odit repellat temporibus quae ipsa aut placeat modi sint doloribus. Ipsum nisi veritatis, facere doloribus. Nihil veritatis corporis eaque odio.</p>
                        <button>Read More</button>
                    </div>
                </article>
                <article class="col-third">
                    <img src="/images/article_2.jpg" alt=""/>
                    <div>
                        <h3>Issue Nineteen &mdash; Camping</h3>
                        <p>Maiores qui doloremque suscipit molestias. Saepe omnis dolore, ipsum voluptatem quisquam eveniet repellat! Eius in vero, cum dolorem ad earum, dignissimos quasi qui obcaecati, minima, esse aliquid beatae. Placeat, adipisci temporibus suscipit neque assumenda earum perferendis autem voluptatem nostrum ipsa porro, voluptas cumque ullam et reiciendis deserunt eos aspernatur esse laudantium cum natus cupiditate nesciunt. Nostrum doloremque odio maiores, quis architecto vero unde error, obcaecati ullam esse soluta et incidunt. Totam quaerat unde doloribus inventore sapiente molestiae, rem? Dolor, est.</p>
                        <button>Read More</button>
                    </div>
                </article>
                <article class="col-third">
                    <img src="/images/article_3.jpg" alt="larry"/>
                    <h3>Issue Eighteen - Food</h3>
                    <p>Dolore asperiores, ad nam, molestiae, fugiat numquam ut dolorum est unde eum cupiditate! Totam optio ullam enim sed ipsum molestias quod fugiat, placeat, fugit nemo saepe quidem ex asperiores excepturi rerum! Earum obcaecati non dignissimos voluptate repellendus voluptatibus ratione sit totam architecto, pariatur, amet ea. Officia nulla repellat, eius voluptatibus provident repellendus sint dolorum veniam? Amet rerum alias quas aut ratione illum voluptatem excepturi, ea saepe illo quis maxime repudiandae minus praesentium nihil quaerat ducimus reprehenderit consequatur qui?</p>
                    <button>Read More</button>
                </article>
            </div>
	    </section>
    )
};

function About() {
    return(
        <section id="about" class="callout about">
            <article class="wrap">
                <h2>About The Magazine</h2>
                <h3>A Lifestyle Magazine Crafted with Love</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaque facere quibusdam rerum, maiores consequuntur, aliquam esse blanditiis eum a libero fuga consectetur non neque amet rem impedit quos, fugit. Culpa ratione iure facilis est ea, ducimus neque voluptas fugiat velit unde ipsam suscipit laudantium cupiditate, officiis eaque id? Eaque ad, nisi assumenda facere qui accusantium alias, fugit adipisci natus.</p>
                <p>Dignissimos quasi nisi maiores dolor sunt. Fuga unde, rem quo sint dolore est pariatur cupiditate nostrum et suscipit, aperiam aliquam officia libero vel error modi ratione, dolorem consectetur doloribus mollitia! Temporibus aliquid laboriosam expedita quia, id consectetur culpa? Enim iusto ab facere aliquid cumque aut amet tenetur dolores, iure tempora perspiciatis incidunt eveniet nostrum, ea esse doloribus labore unde nobis?</p>
            </article>
	    </section>
    )
}

function Gallery() {
    return(
        <section id="gallery">
            <div class="wrap">
                <h2>Issue Twenty</h2>
                <h3>A visual guide to the Southwest</h3>
                <div class="masonry">
                    <img src="./images/gallery_1.jpg" alt=""/>
                    <img src="./images/gallery_3.jpg" alt=""/>
                    <img src="./images/gallery_4.jpg" alt=""/>
                    <img src="./images/gallery_2.jpg" alt=""/>
                    <img src="./images/gallery_5.jpg" alt=""/>
                    <img src="./images/gallery_6.jpg" alt=""/>
                </div>
            </div>
	    </section>
    )
}

function Contact() {
    return (
        <section id="contact">
            <div class="wrap">
            <h2>Get in Touch</h2>
                <form class="contact">
                    <input type="text" placeholder="Full Name" class="col-third"/>
                    <input type="email" placeholder="Email" class="col-third"/>
                    <input type="text" placeholder="Subject" class="col-third"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
	    </section>
    )
}

export default Header(); 
export {
    Header,
    Archive,
    About, 
    Gallery,
    Contact 
}
