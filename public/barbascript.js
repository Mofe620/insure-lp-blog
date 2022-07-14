// Barba Transitions
// import barba from '@barba/core';
// import barbaCss from '@barba/css';

// tell Barba to use the css plugin
//barba.use(barbaCss);


barba.init({
    transitions: [{
        name: 'default-transition',
        leave(data) {
            return gsap.to(data.current.container, {
              opacity: 0,
              x: 100
            });
        },
        enter(data) {
            return gsap.from(data.next.container, {
              opacity: 1,
              x: -50
            });
        }
    }]
})