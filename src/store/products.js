let initialState = {
    products: [
        {
            category: 'ELECTRONICS',
            name: 'PIHEN Timer',
            price: 17.99,
            tags: 'PIHEN Timer, Kitchen Timer Multi-Function Electronic Digital Timer for Kids, Flip Timer with Time and Alarm Function, Suitable for Work, Exercise, Games, Cooking.',
            description: 'The timer is designed with electroplated alloy. The durability of the product has been greatly improved. The bottom of our timer is designed with magnetic attraction, which makes our products suitable for more occasions.',
            inventory: 13,
            image: 'https://images-na.ssl-images-amazon.com/images/I/5163ZbhjKyL._AC_SX522_.jpg'
        }, {
            category: 'ELECTRONICS',
            name: 'Everlasting Mist Humidifier',
            price: 59.99,
            tags: 'Everlasting Comfort Cool Mist Humidifier for Bedroom (6L) - Filterless, Quiet, Ultrasonic - Large Room Home Air Vaporizer with Diffuser and Essential Oil Tray (Black)',
            description: 'Features a 6 liter (1.6 gallons) tank with an adjustable mist output. Our ultrasonic humidifier works in rooms up to 500 square feet and lasts for 50 straight hours. This makes our air humidifier ideally suited for large rooms and is fantastic for any home, apartment, office, nursery, or college dorm.',
            inventory: 20,
            image: 'https://images-na.ssl-images-amazon.com/images/I/613AyI8iW0S._AC_SX466_.jpg'
        },
        {
            category: 'FOOD',
            name: 'Smartfood',
            price: 15.99,
            tags: 'Smartfood White Cheddar Flavored Popcorn, 0.625 Ounce (Pack of 40)',
            description: '40 count of .625 ounce bags of Smart food White Cheddar Popcorn. Only 100 calories per bag. Delicious popcorn with real cheese makes for a great snack. No artificial flavors or preservatives. Air popped 100% whole grain popcorn made with real ingredients',
            inventory: 19,
            image: 'https://images-na.ssl-images-amazon.com/images/I/81LOYQEdW3L._SX569_PIbundle-40,TopRight,0,0_AA569SH20_.jpg'
        }, {
            category: 'FOOD',
            name: "Welch's Fruit Snacks",
            price: 54.99,
            tags: "Welch's Fruit Snacks, Mixed Fruit & Berries 'n Cherries Bulk Variety Pack, Gluten Free, 0.9 oz Individual Single Serve Bags (Pack of 110)",
            description: "Mixed Fruit- Fruit puree, (grape, peach, orange, strawberry and raspberry), corn syrup, sugar, modiged corn starch, gelatin, concord grape juice from concentrate, citric acid, lactic acid, natural and artifical flavors, ascorbic acid (vitamin C), alpha tocopherol acetate (vitamin E), vitamin A palmitate, sodium citrate, coconut oil, carnauba wax, annatto (color), tumeric (color), red 40, and blue 1. Berries 'n Cherries- Fruit puree (pear, peach, strawberry, raspberry, blackberry, blueberry and cherry), corn syrup, sugar, modified corn starch, gelatin, citric acid, lactic acid, natural and artifical flavors, ascorbic acid (vitamin c), alpha tocopherol acetate (vitamin E), vitamin A palmitate, sodium citrate, coconut oil, carnauba wax, red 40, and blue 1.",
            inventory: 39,
            image: 'https://images-na.ssl-images-amazon.com/images/I/91sTWGXiHgL._SX425_.jpg'
        },

        {
            category: 'ANIME',
            name: 'Death Note',
            price: 319.99,
            tags: 'Mystery, Psychological thriller, Thriller',
            description: 'Death Note (stylized as DEATH NOTE) is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who discovers a mysterious notebook: the "Death Note", which belonged to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages.',
            inventory: 5,
            image: 'https://images-na.ssl-images-amazon.com/images/I/51S7T9tAe6L._SX354_BO1,204,203,200_.jpg'
        },
        {
            category: 'ANIME',
            name: 'Tokyo Ghoul',
            price: 99.99,
            tags: 'Dark fantasy, Thriller',
            description: "Tokyo Ghoul is a Japanese dark fantasy manga series written and illustrated by Sui Ishida. It was serialized in Shueisha's seinen manga magazine Weekly Young Jump between September 2011 and September 2014, and was collected in fourteen tankōbon volumes. A prequel, titled Tokyo Ghoul [Jack], ran online on Jump Live in 2013 and was collected in a single tankōbon volume. A sequel, titled Tokyo Ghoul:re, was serialized in Weekly Young Jump between October 2014 and July 2018, and was collected in sixteen tankōbon volumes.",
            inventory: 8,
            image: 'https://images-na.ssl-images-amazon.com/images/I/51gTbdvr9tL._SX347_BO1,204,203,200_.jpg'
        },

    ],
}

const productReducer = (state = initialState, action) => {
    let { type } = action;

    switch (type) {
        case 'SETCATEGORY':
            let products = initialState.products;
            return { products };

        case 'RESET':
            return initialState;

        default:
            return state;
    }
}


export default productReducer;