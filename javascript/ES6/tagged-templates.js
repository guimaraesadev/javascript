const city = 'Dublin';
const something = 'Guinness';
const otherThing = 'Leprechaums';

// essa função é a func. tagged 

function green(template, ...values) {
    return template.reduce((accumulator, part, i) => {
        return ` 
            ${accumulator}
            <span class="green">${values[i - 1].toUpperCase()}</span>
            ${part}
        `
    });
}

const ireland = green`I live in ${city} the city of ${something} and ${otherThing}!`;

