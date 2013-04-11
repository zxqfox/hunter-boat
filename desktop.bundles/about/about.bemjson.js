({
    block  : 'b-page',
    title  : 'about',
    head   : [
        { elem: 'css', url: '_about.css', ie: false},
        { elem: 'css', url: '_about', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_about.js'},
    ],
    content: [
        {
            block  : 'header',
            content: [
                {
                    block  : 'wrapper-fix-width',
                    mods   : { width: '960' },
                    content: [
                        {
                            block   : 'header',
                            elem    : 'column',
                            elemMods: { position: 'left' },
                            content : [
                                {
                                    block  : 'logo',
                                    content: 'HUNTERBOAT'
                                }
                            ]
                        },

                        {
                            block   : 'header',
                            elem    : 'column',
                            elemMods: { position: 'right' },
                            content : [
                                {
                                    block  : 'cart-info',
                                    content: [
                                        {
                                            elem   : 'link',
                                            content: {
                                                block  : 'b-link',
                                                url    : 'cart',
                                                content: 'В заказе:'
                                            }
                                        },
                                        {
                                            elem   : 'info',
                                            content: [
                                                {
                                                    elem   : 'text',
                                                    content: '3 товара на сумму'
                                                },
                                                {
                                                    elem   : 'total-price',
                                                    content: { block: 'price', mods: { currency: 'dot-dash' }, value: '95000' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block  : 'contacts',
                                    mods   : { color: '000000' },
                                    content: [
                                        {
                                            elem   : 'phone',
                                            content: [
                                                {
                                                    elem   : 'phone-city-code',
                                                    content: '812'
                                                },
                                                {
                                                    elem   : 'phone-number',
                                                    content: '320-02-60'
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'link',
                                            content: {
                                                block  : 'b-link',
                                                mods   : { pseudo: 'yes' },
                                                content: 'Обратный звонок'
                                            }
                                        }
                                    ]
                                },
                                {
                                    block  : 'main-menu',
                                    content: [
                                        {
                                            elem    : 'section',
                                            elemMods: { background: 'red' },
                                            content : {
                                                elem   : 'list',
                                                content: [
                                                    {
                                                        elem    : 'item',
                                                        elemMods: { section: 'catalog' },
                                                        name    : 'Каталог',
                                                        url     : '/catalog/'
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            elem   : 'section',
                                            content: {
                                                elem   : 'list',
                                                content: [
                                                    {
                                                        elem: 'item',
                                                        name: 'О компании',
                                                        url : '/about/'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        name: 'Отзывы',
                                                        url : '/feedback/'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        name: 'Вопрос-ответ',
                                                        url : '/faq/'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        name: 'Фотографии',
                                                        url : '/photos/'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        name: 'Оптовикам',
                                                        url : '/wholesale/'
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                {
                                    block  : 'buyer-menu',
                                    content: [
                                        {
                                            elem: 'item',
                                            name: 'Как купить',
                                            url : '/howtobuy/'
                                        },
                                        {
                                            elem: 'item',
                                            name: 'Где купить',
                                            url : '/wheretobuy/'
                                        },
                                        {
                                            elem: 'item',
                                            name: 'Доставка',
                                            url : '/shipping/'
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
            ]
        },
        {
            block  : 'content',
            content: [
                {
                    block  : 'wrapper-fix-width',
                    mods   : { width: '960' },
                    content: [
                        {
                            block   : 'content',
                            elem    : 'column',
                            elemMods: { position: 'full' },
                            content : [
                                {
                                    block  : 'about-page',
                                    content: [
                                        {
                                            elem   : 'header',
                                            content: 'О Компании'
                                        },
                                        {
                                            elem   : 'sections',
                                            content: [
                                                {
                                                    elem   : 'section',
                                                    attrs: { style: 'margin-top: -110px;' },
                                                    content: [
                                                        {
                                                            elem: 'section-column',
                                                            attrs: { style: 'width: 385px; margin: 100px 105px 0 35px;'  },
                                                            content: [
                                                                {
                                                                    block  : 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem   : 'p',
                                                                            content: '«Производственно Торговая Компания Хантер» - новая организация пришедшая на смену  «Бот-Трэйдинг» в результате расширения производства и подписания дилерских договоров на поставку и продажу подвесных лодочных моторов «HDX» и всемирно известных лодочных моторов «Yamaha» '
                                                                        },
                                                                        {
                                                                            elem   : 'p',
                                                                            content: [
                                                                                {
                                                                                    tag    : '',
                                                                                    content: 'Создавая наш '
                                                                                },
                                                                                {
                                                                                    block  : 'b-link',
                                                                                    url    : '/catlog/boats/',
                                                                                    content: 'модельный ряд'
                                                                                },
                                                                                {
                                                                                    tag    : '',
                                                                                    content: ' надувных лодок, мы в первую очередь учитывали пожелания и опыт многих рыбаков и охотников, отсюда и родилась идея продвигать на рынок надувные лодки под брендом «HUNTERBOAT»'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'certificates',
                                                                    content: {
                                                                        block  : 'certificates',
                                                                        content: [
                                                                            {
                                                                                elem   : 'list',
                                                                                content: [
                                                                                    {
                                                                                        elem   : 'item',
                                                                                        attrs  : { rel: 'img/content/certificates/1/1_big.png' },
                                                                                        content: { block: 'b-icon', url: 'img/content/certificates/1/1_icon.png', alt: 'сертификат_1' }
                                                                                    },
                                                                                    {
                                                                                        elem   : 'item',
                                                                                        attrs  : { rel: 'img/content/certificates/2/2_big.png' },
                                                                                        content: { block: 'b-icon', url: 'img/content/certificates/2/2_icon.png', alt: 'сертификат_2' }
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem   : 'text',
                                                                                content: 'Мы продаём качественные сертифицированные товары.'
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'section-column',
                                                            attrs: { style: 'width: 430px;'  },
                                                            content: [
                                                                {
                                                                    elem   : 'section-title',
                                                                    attrs: { style: 'width: 330px; text-align: left;' },
                                                                    content: [
                                                                        {
                                                                            elem   : 'section-header',
                                                                            content: [
                                                                                {
                                                                                    tag: '',
                                                                                    content: 'Почему люди выбирают именно нас?'
                                                                                },
                                                                                {
                                                                                    block  : 'b-link',
                                                                                    attrs: { style: 'font-size: 13px;font-family: Arial, sans-serif; margin: 0 0 0 35px;' },
                                                                                    content: 'Стать дилером компании',
                                                                                    url    : '/'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block  : 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem    : 'ul',
                                                                            elemMods: { 'list-type': 'blue-circle' },
                                                                            content : [
                                                                                {
                                                                                    elem   : 'li',
                                                                                    content: 'Тройная система проверки качества!'
                                                                                },
                                                                                {
                                                                                    elem   : 'li',
                                                                                    content: 'Постоянное наличие товара на складе.'
                                                                                },
                                                                                {
                                                                                    elem   : 'li',
                                                                                    content: 'Честность и порядочность.'
                                                                                },
                                                                                {
                                                                                    elem   : 'li',
                                                                                    content: 'Качественное гарантийное и постгарантийное обслуживание.'
                                                                                },
                                                                                {
                                                                                    elem   : 'li',
                                                                                    content: 'Своевременные и бесперебойные отгрузки продукции в любые регионы РФ. '
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block  : 'finished-products-counter',
                                                                    content: [
                                                                        {
                                                                            elem: 'value',
                                                                            content: [
                                                                                {
                                                                                    elem: 'value-item',
                                                                                    content: '3'
                                                                                },
                                                                                {
                                                                                    elem: 'value-item',
                                                                                    content: '4'
                                                                                },
                                                                                {
                                                                                    elem: 'separator'
                                                                                },
                                                                                {
                                                                                    elem: 'value-item',
                                                                                    content: '5'
                                                                                },
                                                                                {
                                                                                    elem: 'value-item',
                                                                                    content: '0'
                                                                                },
                                                                                {
                                                                                    elem: 'value-item',
                                                                                    elemMods: { position: 'last' },
                                                                                    content: '0'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem   : 'text',
                                                                            content: 'лодок мы уже сделали'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem   : 'separator',
                                                    content: { block: 'line', mods: { type: 'wavy-0081bd' } }
                                                },
                                                {
                                                    elem   : 'section',
                                                    content: [
                                                        {
                                                            elem: 'section-column',
                                                            attrs: { style: 'width: 205px; vertical-align: middle; margin: 0 0 0 85px;'  },
                                                            content: [
                                                                {
                                                                    elem   : 'section-title',
                                                                    content: [
                                                                        {
                                                                            elem   : 'section-header',
                                                                            content: 'Где мы находимся'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block  : 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem   : 'p',
                                                                            content: '192019, г. Санкт-Петербург ул. Профессора Качалова, д. 8'
                                                                        },
                                                                        {
                                                                            elem   : 'p',
                                                                            content: 'Тел.: (812) 654-32-55/57'
                                                                        },
                                                                        {
                                                                            elem   : 'p',
                                                                            content: {
                                                                                block  : 'b-link',
                                                                                url    : 'mailto:mail@hunterboat.ru',
                                                                                content: 'mail@hunterboat.ru'
                                                                            }
                                                                        }
                                                                    ]
                                                                },

                                                            ]
                                                        },

                                                        {
                                                            elem : 'section-column',
                                                            attrs: { style: 'width: 300px; vertical-align: middle; margin: 0 70px 0 50px;'  },
                                                            content: [
                                                                {
                                                                    block: 'map',
                                                                    mods : { figure: 'circle', provider: 'yandex' },
                                                                    js: {
                                                                        center   : [
                                                                            59.917565, 30.388754
                                                                        ],
                                                                        zoom     : 13,
                                                                        placemark: {
                                                                            center : [59.915043, 30.399097],
                                                                            content: '<div><div>Санкт-Петербург ул. Профессора Качалова, д. 8</div><div>Тел.: (812) 654-32-55/57</div></div>' } }
                                                                }
                                                            ]
                                                        },

                                                        {
                                                            elem: 'section-column',
                                                            attrs: { style: 'width: 300px; vertical-align: middle; width: 190px;'  },
                                                            content: [
                                                                {
                                                                    elem   : 'section-title',
                                                                    content: [
                                                                        {
                                                                            elem   : 'section-header',
                                                                            attrs: { style: 'font-size: 20px;' },
                                                                            content: 'Купить лодку Hunter:'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block  : 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem   : 'p',
                                                                            attrs: { style: 'margin-bottom: 10px' },
                                                                            content: [
                                                                                { tag: '', content: 'В нашем ' },
                                                                                { block: 'b-link', url: '/', content: 'интернет-магазине' }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem   : 'p',
                                                                            content: [
                                                                                { tag: '', content: 'У ' },
                                                                                { block: 'b-link', url: '/', content: 'дилеров компании' }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem   : 'separator',
                                                    content: { block: 'line', mods: { type: 'wavy-0081bd' } }
                                                },
                                                {
                                                    elem   : 'section',
                                                    content: [
                                                        {
                                                            elem   : 'section-title',
                                                            content: [
                                                                {
                                                                    elem   : 'section-header',
                                                                    content: 'Популярность моделей лодок Хантер'
                                                                },
                                                                {
                                                                    elem   : 'section-sub-header',
                                                                    content: 'по данным за 2013 год'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block  : 'popularity-graph',
                                                            content: [
                                                                {
                                                                    elem : 'image',
                                                                    tag  : 'img',
                                                                    attrs: { src: 'img/content/diagrams/boat_model_hunter_popularity_2013.png' }
                                                                },
                                                                {
                                                                    elem   : 'links',
                                                                    content: [
                                                                        {
                                                                            elem   : 'section',
                                                                            content: [
                                                                                {
                                                                                    block  : 'b-link',
                                                                                    url    : '/',
                                                                                    content: '335'
                                                                                },
                                                                                {
                                                                                    block  : 'b-link',
                                                                                    url    : '/',
                                                                                    content: '360'
                                                                                },
                                                                            ]
                                                                        },

                                                                        {
                                                                            elem   : 'section',
                                                                            content: [
                                                                                {
                                                                                    block  : 'b-link',
                                                                                    url    : '/',
                                                                                    content: '280РТ'
                                                                                },
                                                                                {
                                                                                    block  : 'b-link',
                                                                                    url    : '/',
                                                                                    content: '280Т'
                                                                                },
                                                                                {
                                                                                    block  : 'b-link',
                                                                                    url    : '/',
                                                                                    content: '280ЛТ'
                                                                                },
                                                                                {
                                                                                    block  : 'b-link',
                                                                                    url    : '/',
                                                                                    content: '300Л'
                                                                                },
                                                                                {
                                                                                    block  : 'b-link',
                                                                                    url    : '/',
                                                                                    content: '290Р'
                                                                                },
                                                                                {
                                                                                    block  : 'b-link',
                                                                                    url    : '/',
                                                                                    content: '290Л'
                                                                                },
                                                                                {
                                                                                    block  : 'b-link',
                                                                                    url    : '/',
                                                                                    content: '320Л'
                                                                                },
                                                                                {
                                                                                    block  : 'b-link',
                                                                                    url    : '/',
                                                                                    content: '320ЛК'
                                                                                },
                                                                            ]
                                                                        },

                                                                        {
                                                                            elem   : 'section',
                                                                            content: [

                                                                                {
                                                                                    block  : 'b-link',
                                                                                    url    : '/',
                                                                                    content: '250м'
                                                                                },
                                                                                {
                                                                                    block  : 'b-link',
                                                                                    url    : '/',
                                                                                    content: '250мл'
                                                                                },
                                                                                {
                                                                                    block  : 'b-link',
                                                                                    url    : '/',
                                                                                    content: '280Р'
                                                                                },
                                                                                {
                                                                                    block  : 'b-link',
                                                                                    url    : '/',
                                                                                    content: '280'
                                                                                },
                                                                                {
                                                                                    block  : 'b-link',
                                                                                    url    : '/',
                                                                                    content: '280Л'
                                                                                }
                                                                            ]
                                                                        },



                                                                    ]
                                                                }

                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem   : 'separator',
                                                    content: { block: 'line', mods: { type: 'wavy-0081bd' } }
                                                },
                                                {
                                                    elem   : 'section',
                                                    content: [
                                                        {
                                                            elem   : 'section-title',
                                                            content: [
                                                                {
                                                                    elem   : 'section-header',
                                                                    content: 'Бренды, с которыми мы работаем'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block  : 'brands',
                                                            content: [
                                                                {
                                                                    elem   : 'list',
                                                                    content: [

                                                                        {
                                                                            elem   : 'item',
                                                                            content: [
                                                                                {
                                                                                    elem   : 'item-header',
                                                                                    content: { block: 'b-icon', alt: 'yamaha', url: 'img/content/brand-icons/yamaha-logo.png' }
                                                                                },
                                                                                {
                                                                                    elem   : 'item-text',
                                                                                    content: 'Моторы Yamaha заслужили свою никем не оспариваемую репутацию благодаря технической инновационности, превосходным эксплуатационным характеристикам и легендарной надежности с момента установки на лодку.'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            content: [
                                                                                {
                                                                                    elem   : 'item-header',
                                                                                    content: { block: 'b-icon', alt: 'hdx', url: 'img/content/brand-icons/hdx-logo.png' }
                                                                                },
                                                                                {
                                                                                    elem   : 'item-text',
                                                                                    content: 'Лодочные моторы HDX выпускаются специально для российского рынка. При разработке каждой модели большое внимание было уделено соответствию технических параметров двигателей российским условиям эксплуатации. '
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            content: [
                                                                                {
                                                                                    elem   : 'item-header',
                                                                                    content: { block: 'b-icon', alt: 'nissamaran', url: 'img/content/brand-icons/nissamaran-logo.png' }
                                                                                },
                                                                                {
                                                                                    elem   : 'item-text',
                                                                                    content: 'В основе популярности электромоторов NISSAMARAN Minn Kota лежит низкий уровень шумности, прочная и легкая конструкция, тяговитость на всех режимах, универсальность и простота установки и снятия.'
                                                                                }
                                                                            ]
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }

            ]
        },
        {
            block  : 'footer',
            content: [
                {
                    block  : 'wrapper-fix-width',
                    mods   : { width: '960' },
                    content: [
                        {
                            block   : 'footer',
                            elem    : 'column',
                            elemMods: { position: 'left' },
                            content : [
                                {
                                    block  : 'contacts',
                                    mods   : { color: 'e5e5e5' },
                                    content: [
                                        {
                                            elem   : 'phone',
                                            content: [
                                                {
                                                    elem   : 'phone-city-code',
                                                    content: '812'
                                                },
                                                {
                                                    elem   : 'phone-number',
                                                    content: '320-02-60'
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'link',
                                            content: {
                                                block  : 'b-link',
                                                mods   : { pseudo: 'yes' },
                                                content: 'Обратный звонок'
                                            }
                                        },
                                        {
                                            elem   : 'address',
                                            content: 'Санкт-Петербург, ул. Профессора Качалова, 8'
                                        }
                                    ]
                                },
                                {
                                    block  : 'copyright',
                                    content: 'ООО «Производственно-торговая Компания Хантер — производство и продажа надувных лодок Хантер» '
                                }
                            ]
                        },
                        {
                            block   : 'footer',
                            elem    : 'column',
                            elemMods: { position: 'center' },
                            content : [
                                {
                                    block: 'search'
                                },
                                {
                                    block  : 'menu',
                                    content: [
                                        {
                                            elem: 'item',
                                            name: 'Вакансии',
                                            url : '/vacancies/'
                                        },
                                        {
                                            elem: 'item',
                                            name: 'Отзывы',
                                            url : '/feedback/'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block   : 'footer',
                            elem    : 'column',
                            elemMods: { position: 'right' },
                            content : [
                                {
                                    block     : 'studio-idei',
                                    mods      : { color: '865151' },
                                    projectUrl: 'project-url'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})