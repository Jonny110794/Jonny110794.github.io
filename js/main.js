menu = document.querySelector('.menu').querySelectorAll('a');


menu.forEach(elemento => {
    elemento.addEventListener('click', function () {
        menu.forEach(men => men.classList.remove('activo'))

        this.classList.add('activo');
    });
})



var formulario = document.getElementsByName('formulario')[0];
elementos = formulario.elements,
    boton = document.getElementById('btn');

var validarNombre = function (e) {
    if (formulario.nombre.value == 0) {
        alert('Completa el campo nombre');
        e.preventDefault();
    }
}

var validarApellidos = function (e) {
    if (formulario.apellidos.value == 0) {
        alert('Completa el campo apellidos');
        e.preventDefault();
    }
}

var validarCorreo = function (e) {
    if (formulario.correo.value == 0) {
        alert('Completa el campo correo electrónico');
        e.preventDefault();
    }
}

var validar = function (e) {

    validarNombre(e);
    validarApellidos(e);
    validarCorreo(e);


};

formulario.addEventListener('submit', validar);




document.querySelectorAll('.menu a').forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        document.querySelectorAll('#todo-1').forEach((categoria) => {
            categoria.classList.remove('activo')
            if (categoria.dataset.categoria == e.target.dataset.categoria) {
                categoria.classList.add('activo');
            }

        });

    });

});











const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if (!localStorage.getItem('cookies-aceptadas')) {
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
} else {
    dataLayer.push({ 'event': 'cookies-aceptadas' });
}

botonAceptarCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    localStorage.setItem('cookies-aceptadas', true);

    dataLayer.push({ 'event': 'cookies-aceptadas' });
});





document.querySelectorAll('#navegacion .logo').forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        document.querySelectorAll('#todo-1').forEach((categoria) => {
            categoria.classList.remove('activo')
            if (categoria.dataset.categoria == e.target.dataset.categoria) {
                categoria.classList.add('activo');
            }

        });

    });

});




document.addEventListener("DOMContentLoaded", function () {
    // Variables
    var buttonUp = document.querySelector('a[href="#up"]');
    var easings = {
        linear(t) {
            return t;
        },
        easeInQuad(t) {
            return t * t;
        },
        easeOutQuad(t) {
            return t * (2 - t);
        },
        easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic(t) {
            return t * t * t;
        },
        easeOutCubic(t) {
            return (--t) * t * t + 1;
        },
        easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart(t) {
            return t * t * t * t;
        },
        easeOutQuart(t) {
            return 1 - (--t) * t * t * t;
        },
        easeInOutQuart(t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
        },
        easeInQuint(t) {
            return t * t * t * t * t;
        },
        easeOutQuint(t) {
            return 1 + (--t) * t * t * t * t;
        },
        easeInOutQuint(t) {
            return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
        }
    };

    // Functions
    /**
     * Animated scroll to up
     */
    function scrollUp(duration, easing) {
        var start = window.pageYOffset;
        var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, 0);
            return;
        }
        // Animation
        function scroll() {
            var now = 'now' in window.performance ? performance.now() : new Date().getTime();
            var time = Math.min(1, ((now - startTime) / duration));
            var timeFunction = easings[easing](time);
            window.scroll(0, Math.ceil((timeFunction * (0 - start)) + start));
            if (window.pageYOffset === 0) {
                return;
            }
            requestAnimationFrame(scroll);
        }
        // Move
        scroll();
    }

    /**
     * Show and hide button
     */
    function isVisibled() {
        var heightHide = parseInt(buttonUp.getAttribute('height-hide')) || 100;
        if (document.body.scrollTop > heightHide || document.documentElement.scrollTop > heightHide) {
            buttonUp.classList.remove('simplescrollup__button--hide');
            buttonUp.classList.add('simplescrollup__button--show');
        } else {
            // Hide
            buttonUp.classList.remove('simplescrollup__button--show');
            buttonUp.classList.add('simplescrollup__button--hide');
        }
    }

    // Events

    // Click button
    buttonUp.addEventListener('click', function () {
        // Get attributes
        var duration = parseInt(buttonUp.getAttribute('duration')) || 1000;
        var easing = buttonUp.getAttribute('easing') || 'easeInOutQuad';
        // Run
        scrollUp(duration, easing);
    });

    // Auto show and hide button
    window.addEventListener('scroll', isVisibled);
});




(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
        'gtm.start':

            new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],

        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =

            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);

})(window, document, 'script', 'dataLayer', 'GTM-MB7HJ8K');



var tmrReady = setInterval(isPageFullyLoaded, 100);

function isPageFullyLoaded() {
    if (document.readyState == "loaded" || document.readyState == "interactive" || document.readyState == "complete") {
        doWhatYouWant();
        clearInterval(tmrReady);
    }
}