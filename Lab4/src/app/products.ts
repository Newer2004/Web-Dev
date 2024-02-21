export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
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
    name: 'Sony PlayStation 5',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/hf2/66015013568542/sony-playstation-5-god-of-war-ragnarok-107674130-1.jpg',
    price: 638803,
    rating : 4.5,
    description: 'Stunning Games - Marvel at incredible graphics and experience new PS5 features. Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.',
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-god-of-war-ragnar-k-107674130/?c=750000000#!/item'
  },
  {
    id: 4,
    name: 'Дрон DJI Mini 3 Pro + DJI RC',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/h04/52064013287454/dji-mini-3-pro-belyj-105597357-1.jpg',
    price: 595380,
    rating : 4.7,
    description: 'Квадрокоптер DJI Mini 3 Pro – миниатюрный, но мощный квадрокоптер для съемки с воздуха в высоком разрешении 3840×2160 в формате 4К. У этой модели усовершенствованный внешний вид и более надежная конструкция для создания невероятных видео материалов. Время полета этого устройства увеличено за счет использования больших винтов и системы обнаружения препятствий. Усовершенствованный подвес предоставляет более широкий охват для проведения съемки. Кроме того, с этим дроном вы сможете вести вертикальную съемку, выводя создание видео материалов на новый уровень.',
    link: 'https://kaspi.kz/shop/p/dji-mini-3-pro-belyi-dji-rc-105597357/?c=750000000#!/item'
  },
  {
    id: 5,
    name: 'Игровой контроллер Artifact NJOS M3',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h39/hbd/68938471604254/artifact-njos-m3-chernyi-103347636-1.jpg',
    price: 34900,
    rating : 4.1,
    description: 'Наш игровой геймпад Artifact NJOS M3 для смартфонов выведет вашу игру на новый уровень! ',
    link: 'https://kaspi.kz/shop/p/artifact-njos-m3-chernyi-103347636/?c=750000000#!/item'
  },
  {
    id: 6,
    name: 'чки виртуальной реальности VR Box VR',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h4c/31514855833630/vr-box-vr-2-0-black-11800010-1-Container.jpg',
    price: 3500,
    rating : 5,
    description: 'Definition of VR Box Headset for Beginners. Virtual reality VR Box headset is a head-mounted device that you wear over your eyes like a pair of goggles. This vr device provides virtual reality for the wearer. The goal of the VR headset is too provide immersive virtual reality experience.',
    link: ''
  },
  {
    id: 7,
    name: 'Умная колонка Яндекс Станция Мини',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/hb7/46546983649310/yandeks-novaya-stantsiya-mini-s-chasami-chernyi-102580021-1.jpg',
    price: 44500,
    rating : 4.4,
    description: 'Станция Мини разбудит вас вовремя, напомнит покормить кота, расскажет новости, напомнит о важных или приятных делах. - Алиса, напомни про встречу через час.',
    link: 'https://kaspi.kz/shop/p/jandeks-stantsija-mini-2-s-chasami-chernyi-102580021/?c=750000000#!/item'
  },
  {
    id: 8,
    name: 'Компьютерные колонки Microlab M',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/hb6/49343579947038/microlab-m-106-chernyi-100472133-1.jpg',
    price: 12405,
    rating : 5,
    description: 'Компактные размеры дают возможность установить систему даже на небольшом компьютерном столе или на полке. M-105 подходит для озвучивания фильмов',
    link: 'https://kaspi.kz/shop/p/microlab-m-106-chernyi-100472133/?c=750000000#!/item'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/