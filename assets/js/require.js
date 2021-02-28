let _header = document.querySelector('#header')
let _footer = document.querySelector('#footer')
let header_content = ` <div class="container-fluid">
<div class="row align-items-center">
    <div class="col-12">
        <div class="navigation-area">  
            <!-- Site Navigation -->
            <div class="site-navigation">
                <!-- Site Branding -->
                <div class="site-branding">
                    <a href="/">
                        <img src="/assets/images/logo/logo.png" width="50px" alt="Site Logo" />
                    </a>
                </div><!-- /.site-branding -->
                <div class="hamburger-menus">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav class="navigation">
                    <div class="overlaybg"></div><!-- /.overlaybg -->
                    <!-- Main Menu -->        
                    <div class="menu-wrapper">
                        <div class="menu-content">
                            <ul class="mainmenu">         
                                <li>
                                    <a class="nav-link" href="/">Home</a>
                                </li>        
                                <li>
                                    <a class="nav-link" href="/about/">About me</a>
                                </li>  
                                <li>
                                    <a class="nav-link" href="/contact/">Contact me</a>
                                </li>  
                                <li>
                                    <a class="nav-link" href="/libary/">Libary</a>
                                </li>  
                                 <li>
                                    <a class="nav-link" href="/articles/">Articles</a>
                                </li>
                                <!--                                  
                                <li>
                                    <a class="nav-link" href="#team-block">Team</a>
                                </li>                                  
                                <li>
                                    <a class="nav-link" href="#innovation-block">Projects</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="#testimonial-block">Testimonial</a>
                                </li>
                                <li class="megamenu">
                                    <a class="nav-link" href="#">Pages</a>
                                    <ul class="sub-menu megamenu-main">
                                        <li>
                                            <div class="megamenu-wrapper">
                                                <div class="container megamenu-container">
                                                    <div class="row">
                                                        <div class="col-lg-3 megamenu-column">
                                                            <h3 class="megamenu-heading">Home</h3>
                                                            <ul class="custom-megamenu">
                                                                <li><a href="index.html">Agency</a></li>
                                                                <li><a href="index02.html">Digital</a></li>
                                                                <li><a href="index03.html">Application</a></li>
                                                                <li><a href="index04.html">Stratup</a></li>
                                                                <li><a href="index05.html">Personal</a></li>
                                                                <li><a href="index06.html">Portfolio</a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-lg-3 megamenu-column">
                                                            <h3 class="megamenu-heading">Portfolio</h3>
                                                            <ul class="custom-megamenu">
                                                                <li><a href="portfolio-v1.html">Portfolio One</a></li>
                                                                <li><a href="portfolio-v2.html">Portfolio Two</a></li>
                                                                <li><a href="portfolio-v3.html">Portfolio Three</a></li>
                                                                <li><a href="portfolio-v4.html">Portfolio Four</a></li>
                                                                <li><a href="portfolio-single.html">Portfolio Single One</a></li>
                                                                <li><a href="portfolio-single-v2.html">Portfolio Single Two</a></li>
                                                                <li><a href="portfolio-single-v3.html">Portfolio Single Three</a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-lg-3 megamenu-column">
                                                            <h3 class="megamenu-heading">Main Pages</h3>
                                                            <ul class="custom-megamenu">
                                                                <li><a href="about-us.html">About Classic 1</a></li>
                                                                <li><a href="about-us-v2.html">About Classic 2</a></li>                        
                                                                <li><a href="services.html">Services Classic 1</a></li>
                                                                <li><a href="services-v2.html">Services Classic 2</a></li>
                                                                <li><a href="team.html">Team</a></li>
                                                                <li><a href="price.html">Pricing</a></li>
                                                                <li><a href="faq.html">FAQs</a></li>
                                                                <li><a href="contact.html">Contact</a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-lg-3 megamenu-column">
                                                            <h3 class="megamenu-heading">Blog Pages</h3>
                                                            <ul class="custom-megamenu">
                                                                <li><a href="blog.html">Blog Classic</a></li>
                                                                <li><a href="blog-grid.html">Blog Grid</a></li>                        
                                                                <li><a href="blog-single.html">Single Blog</a></li>
                                                                <li><a href="404.html">404</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li> -->
                            </ul> <!-- /.menu-list -->
                        </div> <!-- /.hours-content-->
                    </div><!-- /.menu-wrapper --> 
                </nav>
            </div><!-- /.site-navigation -->

            <div class="header-navigation-right">
                <div class="contact-info">
                    Call Us <a href="#">+2340000000</a>
                </div><!--~./ contact-info ~-->
                <div class="lets-talk-area">
                    <a class="btn btn-default" href="#">Let's Talk</a>
                </div><!--~./ lets-talk-area ~-->
            </div><!--~./ header-navigation-right ~-->
        </div><!--  /.navigation-area -->
    </div><!--  /.col-12 -->
</div><!--  /.row -->
</div><!--  /.container-fluid -->`

let footer_content = ` <div class="waves-effect top" style="background: url('../assets/images/shape/waves-top.png');"></div>
<div class="waves-effect bottom" style="background: url('../assets/images/shape/waves-bottom.png');"></div>

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Start Newsletter Block
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<div class="newsletter-block mrb-90">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title text-center">
                    <h4 class="title-sub">Newsletter</h4><!--  /.title-sub -->
                    <h2 class="title-main">Stay in touch</h2><!-- /.title-main -->
                    <div class="divider">
                        <img src="../assets/images/icon/divider.png" alt="icon">
                    </div>
                </div><!-- /.section-title -->
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="subscribe-form">
                    <!-- Subscribe form -->
                    <form class="dv-form" id="mc-form">
                        <div class="form-group">
                            <input id="mc-name" name="name" placeholder="Full Name" type="text">
                        </div>
                        <div class="form-group">
                            <input id="mc-email" name="EMAIL" placeholder="Email Address" type="email">
                        </div>
                        <button class="btn btn-default" name="Subscribe" id="subscribe-btn" type="submit"><span class="fa fa-send"></span></button>
                    </form>
                 </div><!-- /.subscribe-form -->
            </div>
        </div>
    </div><!-- /.container -->
</div><!--~~./ end newsletter block ~~-->

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Start Footer Widget Area
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<div class="footer-widget-area">
    <div class="container">
       
    </div>
</div><!--~./ end footer widgets area ~-->

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Start Footer Bottom Area
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<div class="footer-bottom-area pd-t-40">
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <div class="footer-logo">
                    <a href=""><img src="../assets/images/prof7.jpeg" width="200px" alt="Logo"></a>
                </div><!--~./ footer logo ~-->
                <div class="copyright-text">
                    <p>© 2020 Prof John Inyang. Powered By <a href="https://thecapacityhub.com">Prof John Inyang</a></p>
                </div><!--~./ end footer menu ~-->
            </div>
        </div>
    </div>
</div><!--~./ end footer bottom area ~-->`
    
window.addEventListener('DOMContentLoaded', () => {
    _header.innerHTML = header_content
    _footer.innerHTML = footer_content



    // fetch('/components/header.html', {
    //     method: 'GET',
    //     header: ''
    // }
    
    // )
    // .then( async(response) =>  {
        
    // if (!response.ok) {
    //     throw Error(response.statusText);
    // }
    //     const responseText = await response.text()
    //     console.log(responseText)
    //     _header.innerHTML = responseText
    // })
    // .catch((error) => {
    //     console.log('Looks like there was a problem: \n', error);
    // });

    // footer

   

  
})
