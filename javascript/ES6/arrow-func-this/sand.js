const sandwich = {
    bread: 'white',
    cheese: 'cheddar',

    prepare: function() {
        return `I want a sandwich with ${this.bread} bread and ${this.cheese} cheese!`;
    },

    make: function() {
        window.setTimeout(() => {
            console.log( this.prepare() );
        }, 500);
    }

};

const btn = document.getElementById('btn');

btn.addEventListener('click', function () { sandwich.make() });

