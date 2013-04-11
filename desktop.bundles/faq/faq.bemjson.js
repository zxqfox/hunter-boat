({
    block: 'b-page',
    title: 'faq',
    head: [
        { elem: 'css', url: '_faq.css', ie: false},
        { elem: 'css', url: '_faq', ie: true },
        /*{ block: 'i-jquery', elem: 'core'},*/
        { elem: 'js', url: 'jquery-1.7.2.js'},
        { elem: 'js', url:'_faq.js'},
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
                                        block: 'faq',
                                        js: true,
                                        content: [
                                            {
                                                elem: 'top',
                                                content: [
                                                    {
                                                        elem: 'header',
                                                        content: 'Вопрос-ответ'
                                                    },
                                                    {
                                                        elem: 'info',
                                                        content: '<a class="faq__add-link" href="/faq/question/add">Задать вопрос</a> легко'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'list',
                                                content: [
                                                    {
                                                        elem: 'item',
                                                        elemMods: { state: 'opened' },
                                                        content: [
                                                            {
                                                                elem: 'question',
                                                                content: {
                                                                    block: 'b-link', mods: { pseudo: 'yes' }, content: 'Какую ткань используете вы в производстве ваших лодок, а то поступает очень противоречивая информация?'
                                                                }
                                                            },
                                                            {
                                                                elem: 'answer',
                                                                content: 'Компания "Бот-Трэйдинг" в производстве надувных лодок Хантер использует немецкую лодочную ткань компании HEYTEX одного из мировых лидеров в производстве ПВХ тканей. Плотность ткани  составляет 750 гр/м.'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'item',
                                                        elemMods: { state: 'closed' },
                                                        content: [
                                                            {
                                                                elem: 'question',
                                                                content: {
                                                                    block: 'b-link', mods: { pseudo: 'yes' }, content: 'Какую ткань используете вы в производстве ваших лодок, а то поступает очень противоречивая информация?'
                                                                }
                                                            },
                                                            {
                                                                elem: 'answer',
                                                                content: 'Компания "Бот-Трэйдинг" в производстве надувных лодок Хантер использует немецкую лодочную ткань компании HEYTEX одного из мировых лидеров в производстве ПВХ тканей. Плотность ткани  составляет 750 гр/м.'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'item',
                                                        elemMods: { state: 'closed' },
                                                        content: [
                                                            {
                                                                elem: 'question',
                                                                content: {
                                                                    block: 'b-link', mods: { pseudo: 'yes' }, content: 'Какую ткань используете вы в производстве ваших лодок, а то поступает очень противоречивая информация?'
                                                                }
                                                            },
                                                            {
                                                                elem: 'answer',
                                                                content: 'Компания "Бот-Трэйдинг" в производстве надувных лодок Хантер использует немецкую лодочную ткань компании HEYTEX одного из мировых лидеров в производстве ПВХ тканей. Плотность ткани  составляет 750 гр/м.'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'item',
                                                        elemMods: { state: 'closed' },
                                                        content: [
                                                            {
                                                                elem: 'question',
                                                                content: {
                                                                    block: 'b-link', mods: { pseudo: 'yes' }, content: 'Какую ткань используете вы в производстве ваших лодок, а то поступает очень противоречивая информация?'
                                                                }
                                                            },
                                                            {
                                                                elem: 'answer',
                                                                content: 'Компания "Бот-Трэйдинг" в производстве надувных лодок Хантер использует немецкую лодочную ткань компании HEYTEX одного из мировых лидеров в производстве ПВХ тканей. Плотность ткани  составляет 750 гр/м.'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'item',
                                                        elemMods: { state: 'opened' },
                                                        content: [
                                                            {
                                                                elem: 'question',
                                                                content: {
                                                                    block: 'b-link', mods: { pseudo: 'yes' }, content: 'Какую ткань используете вы в производстве ваших лодок, а то поступает очень противоречивая информация?'
                                                                }
                                                            },
                                                            {
                                                                elem: 'answer',
                                                                content: 'Компания "Бот-Трэйдинг" в производстве надувных лодок Хантер использует немецкую лодочную ткань компании HEYTEX одного из мировых лидеров в производстве ПВХ тканей. Плотность ткани  составляет 750 гр/м.'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'item',
                                                        elemMods: { state: 'closed' },
                                                        content: [
                                                            {
                                                                elem: 'question',
                                                                content: {
                                                                    block: 'b-link', mods: { pseudo: 'yes' }, content: 'Какую ткань используете вы в производстве ваших лодок, а то поступает очень противоречивая информация?'
                                                                }
                                                            },
                                                            {
                                                                elem: 'answer',
                                                                content: 'Компания "Бот-Трэйдинг" в производстве надувных лодок Хантер использует немецкую лодочную ткань компании HEYTEX одного из мировых лидеров в производстве ПВХ тканей. Плотность ткани  составляет 750 гр/м.'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'add-question',
                                                content: [
                                                    {
                                                        block: 'form',
                                                        method: 'post',
                                                        action: '/faq/questions/add',
                                                        mods: { type: 'add-question' },
                                                        content: [
                                                            {
                                                                elem: 'header',
                                                                content: 'Вы можете задать свой вопрос'
                                                            },
                                                            {
                                                                elem: 'author-info',
                                                                content: [
                                                                    {
                                                                        elem   : 'author-info-item',
                                                                        content: {
                                                                            block      : 'input',
                                                                            name       : 'name',
                                                                            placeholder: 'Имя'
                                                                        }
                                                                    },
                                                                    {
                                                                        elem   : 'author-info-item',
                                                                        content: {
                                                                            block      : 'input',
                                                                            name       : 'email',
                                                                            placeholder: 'E-mail'
                                                                        }
                                                                    },
                                                                    {
                                                                        elem   : 'author-info-item',
                                                                        content: {
                                                                            block      : 'input',
                                                                            name       : 'city',
                                                                            placeholder: 'Город'
                                                                        }
                                                                    },
                                                                    {
                                                                        elem   : 'author-info-item',
                                                                        content: {
                                                                            block      : 'input',
                                                                            name       : 'phone',
                                                                            placeholder: 'Телефон'
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                elem: 'question',
                                                                content: {
                                                                    block: 'textarea',
                                                                    name: 'question',
                                                                    placeholder: 'Ваш вопрос'
                                                                }
                                                            },
                                                            {
                                                                elem: 'send-panel',
                                                                content: [
                                                                    {
                                                                        elem: 'validate',
                                                                        content: {
                                                                            block: 'validate',
                                                                            id: 'captchaID'
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'send-button',
                                                                        content: { block: 'button', mods: { type: 'submit' }, content: 'Задать вопрос' }
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