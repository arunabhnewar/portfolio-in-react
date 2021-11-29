import React from 'react';

const MenuItems = ({ menuItem }) => {

    return (
        <div className="portfolis">
            {
                menuItem.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                            {/* <ul className="hover-items">
                                <li>
                                    <a href={item.link1}>{item.icon1}</a>
                                    <a href={item.link2}>{item.icon2}</a>
                                </li>
                            </ul> */}
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>  {item.details}</p>
                        <br />
                        <div>
                            <span>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={item.link}
                                    className="btn-port"
                                    style={{ textDecoration: 'none', marginRight: '2px' }}
                                >
                                    Live
                                </a>
                            </span>

                            <span>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={item.link2}
                                    className="btn-port"
                                    style={{ textDecoration: 'none' }}
                                >
                                    Client
                                </a>
                            </span>
                        </div>

                        <br />
                        {item.link3 &&
                            <div>
                                <span>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={item.link3}
                                        className="btn-port"
                                        style={{ textDecoration: 'none', marginTop: "100px" }}
                                    >
                                        Server
                                    </a>
                                </span>
                            </div>
                        }


                    </div>
                })
            }
        </div>
    );
};

export default MenuItems;