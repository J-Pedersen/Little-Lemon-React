import React, { useState } from 'react';
import dishIcon from "../assets/dish-icon.png"
import delivery from "../assets/delivery.png"
import deliveryHover from "../assets/delivery-hover.png"
import '../components/styles/normalize.css';
import '../components/styles/menu.css';

function Menu() {

    const [isOpenBreakfast, setIsOpenBreakfast] = useState(true);
    const [isOpenAppetizers, setIsOpenAppetizers] = useState(false);
    const [isOpenEntrees, setIsOpenEntrees] = useState(false);
    const [isOpenDesserts, setIsOpenDesserts] = useState(false);
    const [isOpenBeverages, setIsOpenBeverages] = useState(false);

    const toggleSection = (section) => {

        const newSectionState =
            (section === 'breakfast' && !isOpenBreakfast) ||
            (section === 'appetizers' && !isOpenAppetizers) ||
            (section === 'entrees' && !isOpenEntrees) ||
            (section === 'desserts' && !isOpenDesserts) ||
            (section === 'beverages' && !isOpenBeverages);

        const openSectionsCount =
            (isOpenBreakfast ? 1 : 0) +
            (isOpenAppetizers ? 1 : 0) +
            (isOpenEntrees ? 1 : 0) +
            (isOpenDesserts ? 1 : 0) +
            (isOpenBeverages ? 1 : 0);

        if (openSectionsCount === 1 && !newSectionState) {
            return;
        }

        if (section === 'breakfast') {
            setIsOpenBreakfast(!isOpenBreakfast);
        }

        if (section === 'appetizers') {
            setIsOpenAppetizers(!isOpenAppetizers);
        }
        if (section === 'entrees') {
            setIsOpenEntrees(!isOpenEntrees);
        }
        if (section === 'desserts') {
            setIsOpenDesserts(!isOpenDesserts);
        }
        if (section === 'beverages') {
            setIsOpenBeverages(!isOpenBeverages);
        }

        setIsOpenBreakfast(section === 'breakfast' && newSectionState);
        setIsOpenAppetizers(section === 'appetizers' && newSectionState);
        setIsOpenEntrees(section === 'entrees' && newSectionState);
        setIsOpenDesserts(section === 'desserts' && newSectionState);
        setIsOpenBeverages(section === 'beverages' && newSectionState);
    };

    const [isHoveredBreakfast, setIsHoveredBreakfast] = useState(false);
    const [isHoveredAppetizers, setIsHoveredAppetizers] = useState(false);
    const [isHoveredEntrees, setIsHoveredEntrees] = useState(false);
    const [isHoveredDesserts, setIsHoveredDesserts] = useState(false);
    const [isHoveredBeverages, setIsHoveredBeverages] = useState(false);

    function DeliveryButton() {
        const [isHovered, setIsHovered] = useState(false);
        return (
            <button
                className='add-to-cart-btn'
                title="Order A Delivery"
                aria-label="Order A Delivery"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
            >
                Order A Delivery
                <img src={isHovered ? deliveryHover : delivery} alt="Delivery" />
            </button>
        );
    }

    return (
        <>
            <section className="menu-section">
                <div className="accent-bar-top" />

                <div className= "menu-header">
                    <div className= "menu-title">
                        <div className= "menu-title-content">
                            <img
                                src={dishIcon}
                                alt="dish icon"
                                aria-hidden="true"
                            />
                            <h1>MENU</h1>
                        </div>
                    </div>
                </div>

                {/* Content */}
                {/* Breakfast */}
                <section className={`section section-gap ${isOpenBreakfast ? 'open' : ''}`}>
                    <div className="header" onClick={() => toggleSection('breakfast')}>
                        <div className="menu-content-title">
                            <h2
                                onMouseEnter={() => setIsHoveredBreakfast(true)}
                                onMouseLeave={() => setIsHoveredBreakfast(false)}
                            >
                                &nbsp;&nbsp;&nbsp;&nbsp;BREAKFAST&nbsp;&nbsp;&nbsp;&nbsp;
                                {isOpenBreakfast ? (
                                    <img
                                        src={require(isHoveredBreakfast ? "../assets/chevron-up-hover.png" : "../assets/chevron-up.png")}
                                        alt="Up Chevron"
                                        className="chevron-icon"
                                    />
                                ) : (
                                    <img
                                        src={require(isHoveredBreakfast ? "../assets/chevron-down-hover.png" : "../assets/chevron-down.png")}
                                        alt="Down Chevron"
                                        className="chevron-icon"
                                    />
                                )}
                            </h2>
                        </div>
                    </div>
                    <div className={`menu-wrapper ${isOpenBreakfast ? 'show' : ''}`}>
                        <div className='menu-content spacer' role="list">
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/biscotti.png")}
                                    alt='Biscotti'
                                    title="Biscotti"
                                    aria-label="Biscotti"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Biscotti</h3>
                                    <p className='price'>$5.99</p>
                                </div>
                                <p className='menu-description'>
                                Italian biscuit served in three traditional flavors vanilla,
                                anise, or almonds well as several more modern flavors such as
                                chocolate, cherry, or lemon.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/loukoumades.png")}
                                    alt='Loukoumades'
                                    title="Loukoumades"
                                    aria-label="Loukoumades"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Loukoumades</h3>
                                    <p className='price'>$5.99</p>
                                </div>
                                <p className='menu-description'>
                                    Fried greek honey puff donuts.
                                    Sprinkled with powdered sugar
                                    and crushed pistachios.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/brioche.png")}
                                    alt='Brioche'
                                    title="Brioche"
                                    aria-label="Brioche"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Brioche</h3>
                                    <p className='price'>$6.99</p>
                                </div>
                                <p className='menu-description'>
                                    An italian sweet bun stuffed with cream and your choice
                                    of blueberry, rasberry, strawberry, Orange, or lemon jam,
                                    or semi-sweet almond paste.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/greek-yogurt-and-honey.png")}
                                    alt='Greek Yogurt and Honey'
                                    title="Greek Yogurt and Honey"
                                    aria-label="Greek Yogurt and Honey"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Greek Yogurt and Honey</h3>
                                    <p className='price'>$7.99</p>
                                </div>
                                <p className='menu-description'>
                                    Tangy greek yogurt drizzled with an ample ammount of
                                    honey and paired with seasonal fruits.
                                </p>
                                <DeliveryButton />
                            </article>
                        </div>
                        <div className='menu-content' role="list">
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/breakfast-frittata.png")}
                                    alt='Breakfast Frittata'
                                    title="Breakfast Frittata"
                                    aria-label="Breakfast Frittata"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Breakfast Frittata</h3>
                                    <p className='price'>$9.99</p>
                                </div>
                                <p className='menu-description'>
                                    Eggs, your choice of meat, and or vegetables
                                    whipped and fried to perfection.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/kagianas.png")}
                                    alt='Kagianas'
                                    title="Kagianas"
                                    aria-label="Kagianas"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Kagianas</h3>
                                    <p className='price'>$10.99</p>
                                </div>
                                <p className='menu-description'>
                                    Scrambled eggs combined with a thick tomato sauce
                                    served with bioche and feta.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/turkish-fried-eggs.png")}
                                    alt='Turkish Fried Eggs'
                                    title="Turkish Fried Eggs"
                                    aria-label="Turkish Fried Eggs"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Turkish Fried Eggs</h3>
                                    <p className='price'>$10.99</p>
                                </div>
                                <p className='menu-description'>
                                    Soft boiled eggs sliced in half and fried in butter with thyme,
                                    and red peppers. Served with a side of bread and fresh tomato slices.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/ispanakli-yumurta.png")}
                                    alt='Ispanakli Yumurta'
                                    title="Ispanakli Yumurta"
                                    aria-label="Ispanakli Yumurta"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Ispanakli Yumurta</h3>
                                    <p className='price'>$12.99</p>
                                </div>
                                <p className='menu-description'>
                                    Roasted spinach and onion with a low baked egg in the
                                    center to give it that gooey egg yolk goodness.
                                </p>
                                <DeliveryButton />
                            </article>
                        </div>
                    </div>
                </section>

                {/* Appetizers */}
                <section className={`section section-gap ${isOpenAppetizers ? 'open' : ''}`}>
                    <div className= "header" onClick={() => toggleSection('appetizers')} >
                        <div className= "menu-content-title">
                            <h2
                                onMouseEnter={() => setIsHoveredAppetizers(true)}
                                onMouseLeave={() => setIsHoveredAppetizers(false)}
                            >
                                &nbsp;&nbsp;&nbsp;&nbsp;APPETIZERS&nbsp;&nbsp;&nbsp;
                                {isOpenAppetizers ? (
                                    <img
                                        src={require(isHoveredAppetizers ? "../assets/chevron-up-hover.png" : "../assets/chevron-up.png")}
                                        alt="Up Chevron"
                                        className="chevron-icon"
                                    />
                                ) : (
                                    <img
                                        src={require(isHoveredAppetizers ? "../assets/chevron-down-hover.png" : "../assets/chevron-down.png")}
                                        alt="Down Chevron"
                                        className="chevron-icon"
                                    />
                                )}
                            </h2>
                        </div>
                    </div>
                    <div className={`menu-wrapper ${isOpenAppetizers ? 'show' : ''}`}>
                        <div className='menu-content spacer' role="list">
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/fruit.png")}
                                    alt='Fruit Salad'
                                    title="Fruit Salad"
                                    aria-label="Fruit Salad"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Fruit Salad</h3>
                                    <p className='price'>$5.99</p>
                                </div>
                                <p className='menu-description'>
                                    A mix of seasonal fruits.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/avgolemono.png")}
                                    alt='Avgolemono'
                                    title="Avgolemono"
                                    aria-label="Avgolemono"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Avgolemono</h3>
                                    <p className='price'>$6.99</p>
                                </div>
                                <p className='menu-description'>
                                    A traditional greek soup made with chicken, rice, lemon, and egg.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/eliopsomo.png")}
                                    alt='Eliopsomo'
                                    title="Eliopsomo"
                                    aria-label="Eliopsomo"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Eliopsomo</h3>
                                    <p className='price'>$7.99</p>
                                </div>
                                <p className='menu-description'>
                                    A greek olive bread served warm with sundried tomatoes,
                                    caramelized onions and feta cheese.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/spanakopita.png")}
                                    alt='Spanakopita'
                                    title="Spanakopita"
                                    aria-label="Spanakopita"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Spanakopita</h3>
                                    <p className='price'>$8.99</p>
                                </div>
                                <p className='menu-description'>
                                    A savory greek pie made with filo dough and filled
                                    with spinach, scallions, and feta cheese.
                                </p>
                                <DeliveryButton />
                            </article>
                        </div>
                        <div className='menu-content' role="list">
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/greek-salad.png")}
                                    alt='Greek salad'
                                    title="Greek Salad"
                                    aria-label="Greek Salad"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Greek Salad</h3>
                                    <p className='price'>$9.99</p>
                                </div>
                                <p className='menu-description'>
                                    Made with pieces of tomatoes, cucumbers,
                                    onion, feta cheese, and olives and dressed
                                    with salt, greek oregano, capers, and olive oil.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/dolmades.png")}
                                    alt='Dolmades'
                                    title="Dolmades"
                                    aria-label="Dolmades"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Dolmades</h3>
                                    <p className='price'>$10.99</p>
                                </div>
                                <p className='menu-description'>
                                    Grape leaves stuffed with rice, lemon, and fresh herbs.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/squash-blossoms.png")}
                                    alt='Squash Blossoms'
                                    title="Squash Blossoms"
                                    aria-label="Squash Blossoms"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Squash Blossoms</h3>
                                    <p className='price'>$11.99</p>
                                </div>
                                <p className='menu-description'>
                                Squash blossoms stuffed with ricotta cheese
                                and italian herbs, battered dipped and
                                fried to a crispy golden brown.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/risotto.png")}
                                    alt='Risotto'
                                    title="Risotto"
                                    aria-label="Risotto"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Risotto</h3>
                                    <p className='price'>$12.99</p>
                                </div>
                                <p className='menu-description'>
                                    Creamy risotto available in mushroom,
                                    asparagus, or italian herb and butter.
                                </p>
                                <DeliveryButton />
                            </article>
                        </div>
                    </div>
                </section>

                {/* Entrees */}
                <section className={`section section-gap ${isOpenEntrees ? 'open' : ''}`}>
                    <div className= "header" onClick={() => toggleSection('entrees')} >
                        <div className= "menu-content-title">
                            <h2
                                onMouseEnter={() => setIsHoveredEntrees(true)}
                                onMouseLeave={() => setIsHoveredEntrees(false)}
                            >
                                &nbsp;&nbsp;&nbsp;&nbsp;ENTREES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {isOpenEntrees ? (
                                    <img
                                        src={require(isHoveredEntrees ? "../assets/chevron-up-hover.png" : "../assets/chevron-up.png")}
                                        alt="Up Chevron"
                                        className="chevron-icon"
                                    />
                                ) : (
                                    <img
                                        src={require(isHoveredEntrees ? "../assets/chevron-down-hover.png" : "../assets/chevron-down.png")}
                                        alt="Down Chevron"
                                        className="chevron-icon"
                                    />
                                )}
                            </h2>
                        </div>
                    </div>
                    <div className={`menu-wrapper ${isOpenEntrees ? 'show' : ''}`}>
                        <div className='menu-content spacer' role="list">
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/fettuccine-alfredo.png")}
                                    alt='Fettuccine Alfredo'
                                    title="Fettuccine Alfredo"
                                    aria-label="Fettuccine Alfredo"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Fettuccine Alfredo</h3>
                                    <p className='price'>$11.99</p>
                                </div>
                                <p className='menu-description'>
                                    Fresh fettucine pasta served with alfredo sauce
                                    and your choice of grilled shrimp, chicken, or mushroom.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/pasta-carbonara.png")}
                                    alt='Pasta Carbonara'
                                    title="Pasta Carbonara"
                                    aria-label="Pasta Carbonara"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Pasta Carbonara</h3>
                                    <p className='price'>$11.99</p>
                                </div>
                                <p className='menu-description'>
                                    Fresh spaghetti with eggs, romano cheese,
                                    pork, garlic, and black pepper.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/lasagne.png")}
                                    alt='Lasagne'
                                    title="Lasagne"
                                    aria-label="Lasagne"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Lasagne</h3>
                                    <p className='price'>$12.99</p>
                                </div>
                                <p className='menu-description'>
                                    Spinach or meat layered between fresh pasta with ricotta
                                    cheese, and marinara sauce.
                                    Topped with a blend of mozzerella, parmesan, and romano.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/pizza.png")}
                                    alt='Pizza'
                                    title="Pizza"
                                    aria-label="Pizza"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Pizza</h3>
                                    <p className='price'>$12.99</p>
                                </div>
                                <p className='menu-description'>
                                    A 12" stone oven cooked pizza with your choice of three toppings.
                                    Additional toppings available for additional charge.
                                    Serves Two.
                                </p>
                                <DeliveryButton />
                            </article>
                        </div>
                        <div className='menu-content' role="list">
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/karniyarik.png")}
                                    alt='Karniyarik'
                                    title="Karniyarik"
                                    aria-label="Karniyarik"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Karniyarik</h3>
                                    <p className='price'>$13.99</p>
                                </div>
                                <p className='menu-description'>
                                    Roasted eggplant stuffed with a mix of sauteed
                                    chopped onions, garlic, black pepper, tomatoes,
                                    green pepper, parsley, and ground meat.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/eggplant-parmesan.png")}
                                    alt='Eggplant Parmesan'
                                    title="Eggplant Parmesan"
                                    aria-label="Eggplant Parmesan"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Eggplant Parmesan</h3>
                                    <p className='price'>$14.99</p>
                                </div>
                                <p className='menu-description'>
                                    Eggplant sliced, breaded and fried smothered
                                    with traditional italian spagetti sauce and
                                    topped with parmesan and mozzerella cheese.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/linguine-with-clams.png")}
                                    alt='Linguine with Clams'
                                    title="Linguine with Clams"
                                    aria-label="Linguine with Clams"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Linguine & Clams</h3>
                                    <p className='price'>$15.99</p>
                                </div>
                                <p className='menu-description'>
                                    Available in white or red.
                                    Served with steamed clams, a red
                                    or white wine sauce, and lemon.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/lamb-tandoori.png")}
                                    alt='Lamb Tandoori'
                                    title="Lamb Tandoori"
                                    aria-label="Lamb Tandoori"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Lamb Tandoori</h3>
                                    <p className='price'>$16.99</p>
                                </div>
                                <p className='menu-description'>
                                    Slow roasted lamb over a bed of seasoned rice.
                                </p>
                                <DeliveryButton />
                            </article>
                        </div>
                    </div>
                </section>

                {/* Desserts */}
                <section className={`section section-gap ${isOpenDesserts ? 'open' : ''}`}>
                    <div className= "header" onClick={() => toggleSection('desserts')} >
                        <div className= "menu-content-title">
                            <h2
                                onMouseEnter={() => setIsHoveredDesserts(true)}
                                onMouseLeave={() => setIsHoveredDesserts(false)}
                            >
                                &nbsp;&nbsp;&nbsp;&nbsp;DESSERTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {isOpenDesserts ? (
                                    <img
                                        src={require(isHoveredDesserts ? "../assets/chevron-up-hover.png" : "../assets/chevron-up.png")}
                                        alt="Up Chevron"
                                        className="chevron-icon"
                                    />
                                ) : (
                                    <img
                                        src={require(isHoveredDesserts ? "../assets/chevron-down-hover.png" : "../assets/chevron-down.png")}
                                        alt="Down Chevron"
                                        className="chevron-icon"
                                    />
                                )}
                            </h2>
                        </div>
                    </div>
                    <div className={`menu-wrapper ${isOpenDesserts ? 'show' : ''}`}>
                        <div className='menu-content spacer' role="list">
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/gelato.png")}
                                    alt='Gelato'
                                    title="Gelato"
                                    aria-label="Gelato"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Gelato</h3>
                                    <p className='price'>$6.99</p>
                                </div>
                                <p className='menu-description'>
                                    Little Lemon has over twenty flavors of
                                    gelato to choose from including classics.
                                    Pistachio, cherry and lemon.
                                    All are made by our talented chefs in our
                                    very own kitchen.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/baklava.png")}
                                    alt='Baklava'
                                    title="Baklava"
                                    aria-label="Baklava"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Baklava</h3>
                                    <p className='price'>$7.99</p>
                                </div>
                                <p className='menu-description'>
                                    A layered pastry dessert made of filo pastry sheets,
                                    filled with chopped nuts, and honey.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/halva.png")}
                                    alt='Halva'
                                    title="Halva"
                                    aria-label="Halva"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Halva</h3>
                                    <p className='price'>$7.99</p>
                                </div>
                                <p className='menu-description'>
                                    Made from dates, ghee, tahini, almonds,
                                    pistachios and cashews.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/greek-honey-cake.png")}
                                    alt='Greek Honey Cake'
                                    title="Greek Honey Cake"
                                    aria-label="Greek Honey Cake"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Greek Honey Cake</h3>
                                    <p className='price'>$7.99</p>
                                </div>
                                <p className='menu-description'>
                                    Made from anthotyros cheese, honey, egg,
                                    cornflour, and lemon zest.
                                </p>
                                <DeliveryButton />
                            </article>
                        </div>
                        <div className='menu-content' role="list">
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/ekmek-kataifi.png")}
                                    alt='ekmek kataifi'
                                    title="ekmek kataifi"
                                    aria-label="ekmek kataifi"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Ekmek Kataifi</h3>
                                    <p className='price'>$8.99</p>
                                </div>
                                <p className='menu-description'>
                                    Shredded phylo dough soaked in syrup layered
                                    with custard and whipped cream.
                                    Topped with crushed pistachios and cinnamon.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/lemon-cake.png")}
                                    alt='Lemon Cake'
                                    title="Lemon Cake"
                                    aria-label="Lemon Cake"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Lemon Cake</h3>
                                    <p className='price'>$8.99</p>
                                </div>
                                <p className='menu-description'>
                                    Layered lemon cake filled with lemon curd.
                                    Topped with a yogurt frosting and lightly
                                    dusted with nutmeg.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/panna-cotta.png")}
                                    alt='Panna Cotta'
                                    title="Panna Cotta"
                                    aria-label="Panna Cotta"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Panna Cotta</h3>
                                    <p className='price'>$8.99</p>
                                </div>
                                    <p className='menu-description'>
                                        Classic italian custard.
                                        Little Lemon serves two varieties of panna cotta.
                                        Classic vanilla or espresso.
                                        Topped with either berries, chocolate or caramel.
                                    </p>
                                    <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/tiramisu.png")}
                                    alt='Tiramisu'
                                    title="Tiramisu"
                                    aria-label="Tiramisu"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Tiramisu</h3>
                                    <p className='price'>$8.99</p>
                                </div>
                                <p className='menu-description'>
                                    Coffee-flavoured italian cake.
                                    Made of ladyfingers dipped in coffee.
                                    Layered with a whipped mixture of eggs,
                                    sugar and mascarpone.
                                    Dusted with cocoa.
                                </p>
                                <DeliveryButton />
                            </article>
                        </div>
                    </div>
                </section>

                {/* Beverages */}
                <section className={`section section-gap ${isOpenBeverages ? 'open' : ''}`}>
                    <div className= "header" onClick={() => toggleSection('beverages')} >
                        <div className= "menu-content-title">
                            <h2
                                onMouseEnter={() => setIsHoveredBeverages(true)}
                                onMouseLeave={() => setIsHoveredBeverages(false)}
                            >
                                &nbsp;&nbsp;&nbsp;&nbsp;BEVERAGES&nbsp;&nbsp;&nbsp;&nbsp;
                                {isOpenBeverages ? (
                                    <img
                                        src={require(isHoveredBeverages ? "../assets/chevron-up-hover.png" : "../assets/chevron-up.png")}
                                        alt="Up Chevron"
                                        className="chevron-icon"
                                    />
                                ) : (
                                    <img
                                        src={require(isHoveredBeverages ? "../assets/chevron-down-hover.png" : "../assets/chevron-down.png")}
                                        alt="Down Chevron"
                                        className="chevron-icon"
                                    />
                                )}
                            </h2>
                        </div>
                    </div>
                    <div className={`menu-wrapper ${isOpenBeverages ? 'show' : ''}`}>
                        <div className='menu-content spacer' role="list">
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/juice.png")}
                                    alt='Juice'
                                    title="Juice"
                                    aria-label="Juice"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Juice</h3>
                                    <p className='price'>$3.99</p>
                                </div>
                                <p className='menu-description'>
                                    Apple, grape, cranberry juices.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/milk.png")}
                                    alt='Milk'
                                    title="Milk"
                                    aria-label="Milk"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Milk</h3>
                                    <p className='price'>$3.99</p>
                                </div>
                                <p className='menu-description'>
                                    Whole, oat, chocolate milk.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/soft-drink.png")}
                                    alt='Soft Drink'
                                    title="Soft Drink"
                                    aria-label="Soft Drink"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Soft Drink</h3>
                                    <p className='price'>$3.99</p>
                                </div>
                                <p className='menu-description'>
                                    Pepsi, diet pepsi, mt. dew, root beer,
                                    sprite, or orange soft drinks.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/refresher.png")}
                                    alt='Refresher'
                                    title="Refresher"
                                    aria-label="Refresher"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Refresher</h3>
                                    <p className='price'>$4.99</p>
                                </div>
                                <p className='menu-description'>
                                    A mix of muddled berries or citrus fruits
                                    and sparkling ice water.
                                </p>
                                <DeliveryButton />
                            </article>
                        </div>
                        <div className='menu-content' role="list">
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/coffee.png")}
                                    alt='Coffee'
                                    title="Coffee"
                                    aria-label="Coffee"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Coffee</h3>
                                    <p className='price'>$5.99</p>
                                </div>
                                <p className='menu-description'>
                                    A wide variety from classic italiano, esspresso,
                                    cappuccino, americano or turkish blends.
                                    Grounded and brewed fresh.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/tea.png")}
                                    alt='Tea'
                                    title="Tea"
                                    aria-label="Tea"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Tea</h3>
                                    <p className='price'>$5.99</p>
                                </div>
                                <p className='menu-description'>
                                    We have many teas to choose from and
                                    all are fresh brewed.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/wine.png")}
                                    alt='Wine'
                                    title="Wine"
                                    aria-label="Wine"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Wine</h3>
                                    <p className='price'>$10.99</p>
                                </div>
                                <p className='menu-description'>
                                    We have a wide selection of wines to
                                    choose from on our wine list.
                                    Price per glass will vary base on
                                    which type and vintage you order.
                                </p>
                                <DeliveryButton />
                            </article>
                            <article className='menu-card'>
                                <img
                                    src={require("../assets/dishes/cocktail.png")}
                                    alt='Cocktail'
                                    title="Cocktail"
                                    aria-label="Cocktail"
                                />
                                <hr className='card-accent-bar'></hr>
                                <div className='menu-card-header'>
                                    <h3>Cocktail</h3>
                                    <p className='price'>$12.99</p>
                                </div>
                                <p className='menu-description'>
                                    The Little Lemon has a fully stocked bar.
                                    Our skilled mixologists are able to make
                                    just about any mixed drink you may desire.
                                </p>
                                <DeliveryButton />
                            </article>
                        </div>
                    </div>
                </section>

                <div className="accent-bar-bottom" />
            </section>
        </>
    );
}

export default Menu;