export interface Category{
    id : number,
    title : string,
    items : []
}

export const categories = [
    {
        id : 1,
        title : 'Mobile Phones',
        items : [
            {
                id: 1,
                name: 'Смартфон Apple iPhone 14 Pro 256Gb фиолетовый',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h62/62948396728350/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg',
                price: 648000,
                rating : 5,
                description: 'технология NFC: Да\n' +
                    'цвет: фиолетовый\n' +
                    'тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы\n' +
                    'диагональ: 6.1 дюйм\n' +
                    'размер оперативной памяти: 6 ГБ\n' +
                    'процессор: 6-ядерный Apple A16 Bionic\n' +
                    'объем встроенной памяти: 256 ГБ\n' +
                    'емкость аккумулятора: 3125 мАч',
                link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAo-yfBhD_ARIsANr56g5NRiCucqaaUjbyI6MLl8mXS3u_JGonVLj_PwLDHAClCvX9EfyDSjgaAoYJEALw_wcB#!/item'
            },
            {
                id: 2,
                name: 'Смартфон Apple iPhone 13 128Gb синий',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h1d/46392661737502/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg',
                price: 378000,
                rating : 4.9,
                description: 'технология NFC: Да\n' +
                    'цвет: синий\n' +
                    'тип экрана: OLED, Super Retina XDR\n' +
                    'диагональ: 6.1 дюйм\n' +
                    'размер оперативной памяти: 4 ГБ\n' +
                    'процессор: 6-ядерный Apple A15 Bionic\n' +
                    'объем встроенной памяти: 128 ГБ\n' +
                    'емкость аккумулятора: 3095 мАч',
                link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAo-yfBhD_ARIsANr56g5NRiCucqaaUjbyI6MLl8mXS3u_JGonVLj_PwLDHAClCvX9EfyDSjgaAoYJEALw_wcB#!/item',
            },
            {
                id: 3,
                name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ оранжевый',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/h07/49792674463774/samsung-galaxy-a23-128gb-peach-104347752-1.jpg',
                price: 104625,
                rating : 4,
                description: 'ехнология NFC: Да\n' +
                    'цвет: оранжевый\n' +
                    'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
                    'диагональ: 6.6 дюйм\n' +
                    'размер оперативной памяти: 6 ГБ\n' +
                    'процессор: 8-ядерный Snapdragon 680',
                link: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-oranzhevyi-104347752/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAo-yfBhD_ARIsANr56g5NRiCucqaaUjbyI6MLl8mXS3u_JGonVLj_PwLDHAClCvX9EfyDSjgaAoYJEALw_wcB#!/item',
            },
            {
                id: 4,
                name: 'Смартфон Samsung Galaxy S22 Ultra 12 ГБ/256 ГБ черный',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd9/h1e/48695060561950/samsung-galaxy-s22-ultra-12-256gb-cernyj-podarok-103668309-1.jpg',
                price: 800000,
                rating : 5,
                description: 'технология NFC: Да\n' +
                    'цвет: черный\n' +
                    'тип экрана: Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus+\n' +
                    'диагональ: 6.8 дюйм\n' +
                    'размер оперативной памяти: 12 ГБ\n' +
                    'процессор: 8-ядерный Exynos 2200\n' +
                    'объем встроенной памяти: 256 ГБ\n' +
                    'емкость аккумулятора: 5000 мАч',
                link: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-12-gb-256-gb-chernyi-103668309/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAo-yfBhD_ARIsANr56g5NRiCucqaaUjbyI6MLl8mXS3u_JGonVLj_PwLDHAClCvX9EfyDSjgaAoYJEALw_wcB#!/item',
            },
            {
                id: 5,
                name: 'Смартфон Samsung Galaxy S23+ 5G 8 ГБ/512 ГБ черный + подарок',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h14/h7e/68538729332766/samsung-galaxy-s23-5g-8-gb-512-gb-chernyi-108714366-1.jpg',
                price: 600000,
                rating : 4.8,
                description: 'технология NFC: Да\n' +
                    'цвет: черный\n' +
                    'тип экрана: Dynamic AMOLED 2X, HDR10+\n' +
                    'диагональ: 6.6 дюйм\n' +
                    'размер оперативной памяти: 8 ГБ\n' +
                    'процессор: 8-ядерный Snapdragon 8 Gen 2\n' +
                    'объем встроенной памяти: 512 ГБ\n' +
                    'емкость аккумулятора: 4700 мАч',
                link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-512-gb-chernyi-podarok-108714366/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAo-yfBhD_ARIsANr56g5NRiCucqaaUjbyI6MLl8mXS3u_JGonVLj_PwLDHAClCvX9EfyDSjgaAoYJEALw_wcB#!/item',
            }
        ]
    },
    {
        id : 2,
        title : 'Household Appliances',
        items: [
            {
                id: 1,
                name: 'Стиральная машина LG F2J3HS4L серебристый',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/h56/31753168060446/lg-f2j3hs4l-serebristyj-3601603-1.jpg',
                price: 220000 ,
                rating : 3.9,
                description: 'установка: отдельностоящая\n' +
                    'управление: электронное (интеллектуальное)\n' +
                    'максимальная загрузка белья: 7 кг\n' +
                    'класс потребления электроэнергии: A\n' +
                    'скорость вращения при отжиме: 1200 об/мин\n' +
                    'защита от протечек воды: Нет\n' +
                    'цвет: серебристый',
                link: 'https://kaspi.kz/shop/p/lg-f2j3hs4l-serebristyi-3601603/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAo-yfBhD_ARIsANr56g5NRiCucqaaUjbyI6MLl8mXS3u_JGonVLj_PwLDHAClCvX9EfyDSjgaAoYJEALw_wcB#!/item'
            },
            {
                id: 2,
                name: 'Вытяжка Midea MH 60F10 B черный',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/h75/45367114039326/midea-mh-60f10-b-chernyi-102249318-1.jpg',
                price: 21000,
                rating : 2.5,
                description: 'установка: подвесная\n' +
                    'ширина встраивания: 60 см\n' +
                    'производительность: 300 куб.м/ч\n' +
                    'количество скоростей: 3\n' +
                    'управление: механическое\n' +
                    'тип освещения: светодиодная лампа\n' +
                    'цвет: черный',
                link: 'https://kaspi.kz/shop/p/midea-mh-60f10-b-chernyi-102249318/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAo-yfBhD_ARIsANr56g5NRiCucqaaUjbyI6MLl8mXS3u_JGonVLj_PwLDHAClCvX9EfyDSjgaAoYJEALw_wcB#!/item'
            },
            {
                id: 3,
                name: 'Духовой шкаф Smeg ALFA 43XMFDS серебристый',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/h1b/52116977156126/smeg-alfa-43xmfds-serebristyj-105626129-1.jpg',
                price: 500000,
                rating : 5,
                description: 'размеры (ВхШхГ): 54x60x58 см\n' +
                    'конвекция: Да\n' +
                    'цвет: серебристый',
                link: 'https://kaspi.kz/shop/p/smeg-alfa-43xmfds-serebristyi-105626129/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAo-yfBhD_ARIsANr56g5NRiCucqaaUjbyI6MLl8mXS3u_JGonVLj_PwLDHAClCvX9EfyDSjgaAoYJEALw_wcB#!/item'
            },
            {
                id: 4,
                name: 'Морозильник FROSTOR F 2500 B 999 л белый',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h79/h2a/49243905949726/frostor-f-2500-b-belyj-104045575-1.jpg',
                price: 899000,
                rating : 4.8,
                description: 'тип: морозильник-ларь\n' +
                    'размораживание морозильной камеры: ручное\n' +
                    'мощность замораживания: 1 кг/сут\n' +
                    'климатический класс: ST\n' +
                    'класс энергопотребления: A\n' +
                    'цвет: белый',
                link: 'https://kaspi.kz/shop/p/frostor-f-2500-b-999-l-belyi-104045575/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAo-yfBhD_ARIsANr56g5NRiCucqaaUjbyI6MLl8mXS3u_JGonVLj_PwLDHAClCvX9EfyDSjgaAoYJEALw_wcB#!/item'
            },
            {
                id: 5,
                name: 'Пылесос ARNICA Hydra Rain Plus красный',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/hda/68829486022686/arnica-hydra-rain-plus-krasnyi-3700837-1.jpg',
                price: 99970,
                rating : 4,
                description: 'тип: сепараторный\n' +
                    'уборка: сухая, ,влажная\n' +
                    'тип пылесборника: аквафильтр\n' +
                    'потребляемая мощность: 2400 Вт\n' +
                    'источник питания: сеть\n' +
                    'цвет: красный',
                link: 'https://kaspi.kz/shop/p/arnica-hydra-rain-plus-krasnyi-3700837/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAo-yfBhD_ARIsANr56g5NRiCucqaaUjbyI6MLl8mXS3u_JGonVLj_PwLDHAClCvX9EfyDSjgaAoYJEALw_wcB#!/item'
            },
        ]
    },
    {
        id : 3,
        title : 'Computers and Laptops',
        items: [
            {
                id: 1,
                name: 'Acer Nitro 5 AN515-57',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
                price: 389980,
                rating: 4.8,
                description: 'Dominate the Game: With the 11th Gen Intel Core i7-11800H processor, your Nitro 5 is packed with incredible power for all your games.',
                link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item'
            },
            {
                id: 2,
                name: 'Apple MacBook Air 13 MLXY3',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h91/61792617299998/apple-macbook-air-13-mlxy3-serebristyj-106110064-1.jpg',
                price: 638803,
                rating : 5,
                description: 'Apple MacBook Air 2022 MLXY3 13.6 Inch M2 Chipset 8 Core CPU & 8 Core GPU 8GB Memory 256GB SSD Silver. Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminum enclosure.',
                link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxy3-serebristyi-106110064/?c=750000000#!/item'
            },
            {
                id: 3,
                name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
                price: 189000,
                rating : 4,
                description: 'диагональ экрана: 15.6 дюйм\n' +
                    'процессор: Intel Pentium Gold 7505\n' +
                    'видеокарта: Intel UHD Graphics\n' +
                    'размер оперативной памяти: 8 ГБ\n' +
                    'тип жесткого диска: SSD\n' +
                    'общий объем накопителей: 256 ГБ',
                link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAo-yfBhD_ARIsANr56g5NRiCucqaaUjbyI6MLl8mXS3u_JGonVLj_PwLDHAClCvX9EfyDSjgaAoYJEALw_wcB#!/item'
            },
            {
                id: 4,
                name: 'Ноутбук Apple MacBook Air 13 Z15S000MP серый',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8d/h50/62957120356382/apple-macbook-air-13-z15s000mp-seryi-106722601-1.jpg',
                price: 760000,
                rating : 5,
                description: 'Apple MacBook Air 2022 MLXY3 13.6 Inch M2 Chipset 8 Core CPU & 8 Core GPU 8GB Memory 256GB SSD Silver. Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminum enclosure.',
                link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-z15s000mp-seryi-106722601/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAo-yfBhD_ARIsANr56g5NRiCucqaaUjbyI6MLl8mXS3u_JGonVLj_PwLDHAClCvX9EfyDSjgaAoYJEALw_wcB#!/item'
            },
            {
                id: 5,
                name: 'Ноутбук Apple MacBook Pro 16 MK1H3 серый',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h43/h58/48005378932766/apple-macbook-pro-16-2021-mk1h3-103316814-1.jpg',
                price: 2100000,
                rating : 5,
                description: 'диагональ экрана: 16 дюйм\n' +
                    'процессор: Apple M1 Max\n' +
                    'видеокарта: Apple M1 Max 32-Core\n' +
                    'размер оперативной памяти: 32 ГБ\n' +
                    'тип жесткого диска: SSD\n' +
                    'общий объем накопителей: 1024 ГБ',
                link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mk1h3-seryi-103316814/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAo-yfBhD_ARIsANr56g5NRiCucqaaUjbyI6MLl8mXS3u_JGonVLj_PwLDHAClCvX9EfyDSjgaAoYJEALw_wcB#!/item'
            }
        ]
    },
    {
        id : 4,
        title : 'Entertainment',
        items: [
            {
                id: 1,
                name: 'Sony PlayStation 5',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/hf2/66015013568542/sony-playstation-5-god-of-war-ragnarok-107674130-1.jpg',
                price: 638803,
                rating : 4.5,
                description: 'Stunning Games - Marvel at incredible graphics and experience new PS5 features. Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.',
                link: 'https://kaspi.kz/shop/p/sony-playstation-5-god-of-war-ragnar-k-107674130/?c=750000000#!/item'
            },
            {
                id: 2,
                name: 'Дрон DJI Mini 3 Pro + DJI RC',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/h04/52064013287454/dji-mini-3-pro-belyj-105597357-1.jpg',
                price: 595380,
                rating : 4.7,
                description: 'Квадрокоптер DJI Mini 3 Pro – миниатюрный, но мощный квадрокоптер для съемки с воздуха в высоком разрешении 3840×2160 в формате 4К. У этой модели усовершенствованный внешний вид и более надежная конструкция для создания невероятных видео материалов. Время полета этого устройства увеличено за счет использования больших винтов и системы обнаружения препятствий. Усовершенствованный подвес предоставляет более широкий охват для проведения съемки. Кроме того, с этим дроном вы сможете вести вертикальную съемку, выводя создание видео материалов на новый уровень.',
                link: 'https://kaspi.kz/shop/p/dji-mini-3-pro-belyi-dji-rc-105597357/?c=750000000#!/item'
            },
            {
                id: 3,
                name: 'Игровой контроллер Artifact NJOS M3',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h39/hbd/68938471604254/artifact-njos-m3-chernyi-103347636-1.jpg',
                price: 34900,
                rating : 4.1,
                description: 'Наш игровой геймпад Artifact NJOS M3 для смартфонов выведет вашу игру на новый уровень! ',
                link: 'https://kaspi.kz/shop/p/artifact-njos-m3-chernyi-103347636/?c=750000000#!/item'
            },
            {
                id: 4,
                name: 'Умная колонка Яндекс Станция Мини',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/hb7/46546983649310/yandeks-novaya-stantsiya-mini-s-chasami-chernyi-102580021-1.jpg',
                price: 44500,
                rating : 4.4,
                description: 'Станция Мини разбудит вас вовремя, напомнит покормить кота, расскажет новости, напомнит о важных или приятных делах. - Алиса, напомни про встречу через час.',
                link: 'https://kaspi.kz/shop/p/jandeks-stantsija-mini-2-s-chasami-chernyi-102580021/?c=750000000#!/item'
            },
            {
                id: 5,
                name: 'Очки виртуальной реальности VR Box VR',
                image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h4c/31514855833630/vr-box-vr-2-0-black-11800010-1-Container.jpg',
                price: 3500,
                rating : 5,
                description: 'Definition of VR Box Headset for Beginners. Virtual reality VR Box headset is a head-mounted device that you wear over your eyes like a pair of goggles. This vr device provides virtual reality for the wearer. The goal of the VR headset is too provide immersive virtual reality experience.',
                link: 'https://kaspi.kz/shop/p/vr-box-vr-2-0-11800010/?c=750000000#!/item'
            },
        ]
    }
];