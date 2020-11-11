import React, { useMemo } from 'react';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Slider.module.scss';
import './slider.css';

const Slider = ({ categories, setCategoryOption, selectedCategory }) => {
	const categoryLength = useMemo(() => categories.length, [categories]);
	const handleCategoryChange = (category) => setCategoryOption(category);

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: categoryLength > 5 ? 6 : categoryLength,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: categoryLength <= 3 ? categoryLength : 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: categoryLength <= 2 ? categoryLength : 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div>
			<Carousel {...settings}>
				{categories.map((name) => (
					<div
						onClick={() => handleCategoryChange(name)}
						key={name}
						className={`${styles.slide} ${name === selectedCategory ? styles.active : ''}`}
					>
						<div>{name}</div>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default Slider;
