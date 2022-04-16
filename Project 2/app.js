let data = [
    {
        name:'Semi',
        genre:'Rap'
    },
    {
        name:'Floyd',
        genre:'R&B and Rap'
    },
    {
        name:'Mason',
        genre:'R&B and Rap'
    },
    {
        name:'Zayy',
        genre:'Rap'
    },
    {
        name:'Hendo',
        genre:'Rap'
    },
    {
        name:'Fuego',
        genre:'Rap'
    }
];

const info = document.querySelector('#info')

let details = data.map(function (item) {
    return '<div>' + item.name + ' ' + 'makes ' + item.genre + '</div>';
});

info.innerHTML = details.join('\n');
