import React from "react";

import './category.css';

export default function Category()
{
    return(
        <>
        
        <div className="container-fluid bg-light">

           <div className="container text-center pt-5 ">
                <h1>Explore By Category</h1>
           </div>

           <div className="container mt-5">
                <div className="row">

                    <div className="col-md-3 mb-4 col-lg-3 col-sm-6">
                        <div className="card cat-item p-2">
                            <img src="https://img.lovepik.com/element/45009/2795.png_860.png" alt="" height={80} width={80} />
                            <div className="card-body">
                                <h4>Software Development</h4>
                                <p>C, C++, Java, Python</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3 mb-4 col-lg-3 col-sm-6">
                        <div className="card cat-item p-2">
                            <img src="https://www.vhv.rs/dpng/d/612-6122373_hire-web-developer-web-development-platform-hd-png.png" alt="" height={80} width={80} />
                            <div className="card-body">
                                <h4>Web Development</h4>
                                <p>Web Design, Full stack, Mern, Mean</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4 col-lg-3 col-sm-6">
                        <div className="card cat-item p-2">
                            <img src="https://img.lovepik.com/element/45009/8993.png_860.png" alt="" height={80} width={80} />
                            <div className="card-body">
                                <h4>Mobile Development</h4>
                                <p>React Native, Flutter, Swift, Android</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4 col-lg-3 col-sm-6">
                        <div className="card cat-item p-2">
                            <img src="https://img.lovepik.com/element/45009/8993.png_860.png" alt="" height={80} width={80} />
                            <div className="card-body">
                                <h4>Software Testing</h4>
                                <p>Manual Testing, Selenium, Appium</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4 col-lg-3 col-sm-6">
                        <div className="card cat-item p-2">
                            <img src="https://e7.pngegg.com/pngimages/371/618/png-clipart-cloud-computing-architecture-company-quebec-cloud-computing-computer-network-company-thumbnail.png" alt="" height={80} width={80} />
                            <div className="card-body">
                                <h4>Cloud Computing</h4>
                                <p>AWS, Azure, Devops, Google Cloud</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4 col-lg-3 col-sm-6">
                        <div className="card cat-item p-2">
                            <img src="https://png.pngtree.com/png-vector/20190802/ourmid/pngtree-data-scientist-isometric-illustration-concept-modern-flat-design-concept-of-png-image_1641077.jpg" alt="" height={80} width={80} />
                            <div className="card-body">
                                <h4>Data Science</h4>
                                <p>Python, R, SAS, Tableau, Excel</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4 col-lg-3 col-sm-6">
                        <div className="card cat-item p-2">
                            <img src="https://w7.pngwing.com/pngs/555/154/png-transparent-digital-marketing-advertising-marketing-strategy-business-zen-search-engine-optimization-text-content-marketing.png" alt="" height={80} width={80} />
                            <div className="card-body">
                                <h4>Digital Marketing</h4>
                                <p>SEO, SEM, SMM, Content Writing</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4 col-lg-3 col-sm-6">
                        <div className="card cat-item p-2">
                            <img src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" alt="" height={80} width={80} />
                            <div className="card-body">
                                <h4>Design</h4>
                                <p>Ux/Ui, Graphic, Animation, Video</p>
                            </div>
                        </div>
                    </div>

                </div>
           </div>

        </div>

        </>
    )
}

