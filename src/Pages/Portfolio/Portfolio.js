import React, { useState } from 'react';
import Title from '../../Components/Title';
import Categories from '../../Components/Categories';
import MenuItems from '../../Components/MenuItems';
import portfolios from '../../Components/allPortfolios';
import Zoom from 'react-reveal/Zoom';

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

const Portfolio = () => {

    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) => {
        if (category === 'All') {
            setMenuItems(portfolios)
            return;
        }
        const filteredData = portfolios.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="portfolio-container">
            <div className="portfolio-section">
                <Title title={'Projects'} span={'About Me'} />
            </div>

            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <Zoom bottom>
                    <MenuItems menuItem={menuItems} />
                </Zoom>

            </div>
        </div>
    );
};

export default Portfolio;