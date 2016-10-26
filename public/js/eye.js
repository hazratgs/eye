var eye = {
    init: function () {
        this.defaultValue();
        this.setting();
        this.font();
        this.fontSeirf();
        this.letterSpacing();
        this.lineHeight();
        this.color();
        this.img();
        this.imgFilter();
    },

    body: document.querySelector('body'),

    defaultValue: function () {

        /* find save param font-size */
        if (localStorage.getItem('font-size')){
            
            eye.body.classList.add(localStorage.getItem('font-size'));
            document.querySelector('.eye-wrapper-item-data-fonts-item.' + localStorage.getItem('font-size')).classList.add('active');

        } else {

            /* default size font */
            eye.body.classList.add('font-middle');
            document.querySelector('.eye-wrapper-item-data-fonts-item.font-middle').classList.add('active');
        }

        /* find save param font sans */
        if (localStorage.getItem('type-font')){

            eye.body.classList.add(localStorage.getItem('type-font'));
            document.querySelector('.eye-wrapper-modal-item-wrapper-item.type-font.' + localStorage.getItem('type-font')).classList.add('active');

        } else {

            /* default size font */
            eye.body.classList.add('font-sans');
            document.querySelector('.eye-wrapper-modal-item-wrapper-item.type-font.font-sans').classList.add('active');
        }

        /* Межбуквевенный интервал */
        if (localStorage.getItem('letter-spacing')){

            eye.body.classList.add(localStorage.getItem('letter-spacing'));
            document.querySelector('.eye-wrapper-modal-item-wrapper-item.letter-spacing.' + localStorage.getItem('letter-spacing')).classList.add('active');

        } else {

            /* default size font */
            eye.body.classList.add('letter-spacing-1');
            document.querySelector('.eye-wrapper-modal-item-wrapper-item.letter-spacing.letter-spacing-1').classList.add('active');
        }

        /* межстрочный интервал */
        if (localStorage.getItem('line-height')){

            eye.body.classList.add(localStorage.getItem('line-height'));
            document.querySelector('.eye-wrapper-modal-item-wrapper-item.line-height.' + localStorage.getItem('line-height')).classList.add('active');

        } else {

            /* default size font */
            eye.body.classList.add('line-height-1');
            document.querySelector('.eye-wrapper-modal-item-wrapper-item.line-height.line-height-1').classList.add('active');
        }

        /* Фильтр изображений */
        if (localStorage.getItem('img-filter')){

            eye.body.classList.add(localStorage.getItem('img-filter'));
            document.querySelector('.eye-wrapper-modal-item-wrapper-item.img-filter.' + localStorage.getItem('img-filter')).classList.add('active');

        } else {

            /* default size font */
            eye.body.classList.add('img-filter-1');
            document.querySelector('.eye-wrapper-modal-item-wrapper-item.img-filter.img-filter-1').classList.add('active');
        }

        /* find save param color-bg */
        if (localStorage.getItem('color-bg')){

            eye.body.classList.add(localStorage.getItem('color-bg'));
            document.querySelector('.eye-wrapper-item-data-color-item.' + localStorage.getItem('color-bg')).classList.add('active');

        } else {

            /* default color background */
            eye.body.classList.add('color-white');
            document.querySelector('.eye-wrapper-item-data-color-item.color-white').classList.add('active');
        }

        /* find save param img */
        if (localStorage.getItem('img')){

            eye.body.classList.add(localStorage.getItem('img'));
            document.querySelector('.eye-wrapper-item-data-checkbox-item.' + localStorage.getItem('img')).classList.add('active');

        } else {

            /* default color background */
            eye.body.classList.add('color-white');
            document.querySelector('.eye-wrapper-item-data-checkbox-item.img-on').classList.add('active');
        }
    },

    setting: function () {
        var modal = document.querySelector('.eye-wrapper-modal');
        document.querySelector('.eye-setting-head').addEventListener('click', function (e) {
            var self = this;

            if (!modal.classList.contains('active')){

                self.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="24" viewBox="0 0 24 24" width="24"> <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/> <path d="M0 0h24v24H0z" fill="none"/> </svg>Закрыть';

                modal.classList.add('active');
            } else {

                self.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></svg>Настройки';

                modal.classList.remove('active');
            }
        });
    },

    font: function () {
        var arr = document.querySelectorAll('.eye-wrapper-item-data-fonts-item');
        arr.forEach(function (item, i, arr) {

            item.addEventListener('click', function (e) {
                document.querySelector('.eye-wrapper-item-data-fonts-item.active').classList.remove('active');
                this.classList.add('active');

                /* remove old class */
                eye.body.classList.remove('font-min', 'font-middle', 'font-big');
                eye.body.classList.add(this.getAttribute('data-type'));

                /* save params */
                localStorage.setItem('font-size', this.getAttribute('data-type'));
            })
        })
    },

    fontSeirf: function () {
        var arr = document.querySelectorAll('.eye-wrapper-modal-item-wrapper-item.type-font');
        arr.forEach(function (item, i, arr) {

            item.addEventListener('click', function (e) {
                document.querySelector('.eye-wrapper-modal-item-wrapper-item.type-font.active').classList.remove('active');
                this.classList.add('active');

                /* remove old class */
                eye.body.classList.remove('font-sans', 'font-serif');
                eye.body.classList.add(this.getAttribute('data-type'));

                /* save params */
                localStorage.setItem('type-font', this.getAttribute('data-type'));
            })
        })
    },

    letterSpacing: function () {
        var arr = document.querySelectorAll('.eye-wrapper-modal-item-wrapper-item.letter-spacing');
        arr.forEach(function (item, i, arr) {

            item.addEventListener('click', function (e) {
                document.querySelector('.eye-wrapper-modal-item-wrapper-item.letter-spacing.active').classList.remove('active');
                this.classList.add('active');

                /* remove old class */
                eye.body.classList.remove('letter-spacing-1', 'letter-spacing-2', 'letter-spacing-3');
                eye.body.classList.add(this.getAttribute('data-type'));

                /* save params */
                localStorage.setItem('letter-spacing', this.getAttribute('data-type'));
            })
        })
    },

    lineHeight: function () {
        var arr = document.querySelectorAll('.eye-wrapper-modal-item-wrapper-item.line-height');
        arr.forEach(function (item, i, arr) {

            item.addEventListener('click', function (e) {
                document.querySelector('.eye-wrapper-modal-item-wrapper-item.line-height.active').classList.remove('active');
                this.classList.add('active');

                /* remove old class */
                eye.body.classList.remove('line-height-1', 'line-height-2', 'line-height-3');
                eye.body.classList.add(this.getAttribute('data-type'));

                /* save params */
                localStorage.setItem('line-height', this.getAttribute('data-type'));
            })
        })
    },

    imgFilter: function () {
        var arr = document.querySelectorAll('.eye-wrapper-modal-item-wrapper-item.img-filter');
        arr.forEach(function (item, i, arr) {

            item.addEventListener('click', function (e) {
                document.querySelector('.eye-wrapper-modal-item-wrapper-item.img-filter.active').classList.remove('active');
                this.classList.add('active');

                /* remove old class */
                eye.body.classList.remove('img-filter-1', 'img-filter-2');
                eye.body.classList.add(this.getAttribute('data-type'));

                /* save params */
                localStorage.setItem('img-filter', this.getAttribute('data-type'));
            })
        })
    },

    color: function () {
        var arr = document.querySelectorAll('.eye-wrapper-item-data-color-item');
        arr.forEach(function (item, i, arr) {

            item.addEventListener('click', function (e) {
                document.querySelector('.eye-wrapper-item-data-color-item.active').classList.remove('active');
                this.classList.add('active');

                /* remove old class */
                eye.body.classList.remove('color-white', 'color-black', 'color-blue', 'color-yellow', 'color-green');
                eye.body.classList.add(this.getAttribute('data-type'));

                /* save params */
                localStorage.setItem('color-bg', this.getAttribute('data-type'));
            })
        })
    },

    img: function () {
        var arr = document.querySelectorAll('.eye-wrapper-item-data-checkbox-item');
        arr.forEach(function (item, i, arr) {

            item.addEventListener('click', function (e) {
                document.querySelector('.eye-wrapper-item-data-checkbox-item.active').classList.remove('active');
                this.classList.add('active');

                /* remove old class */
                eye.body.classList.remove('img-on', 'img-off');
                eye.body.classList.add(this.getAttribute('data-type'));

                /* save params */
                localStorage.setItem('img', this.getAttribute('data-type'));
            })
        })
    }
};

/* Инициализация */
eye.init();
