const tarots = [
    'chariot', 'death', 'devil', 'emperor',
    'empress', 'fool', 'hanged_man', 'hermit',
    'hierophant', 'high_priestess', 'judgement',
    'justice', 'lovers', 'magician', 'moon',
    'star', 'strength', 'temperance', 'tower',
    'wheel_of_fortune', 'world'
];

const randomCard = ()=> {
    return tarots[Math.floor(Math.random() * tarots.length)];
};

document.getElementById('card_btn').onclick = ()=> {
    const card = randomCard();

    document.getElementById('card_img').src = './assets/images/tarot_' + card + '.png';
    document.getElementById('card_name').innerText = 'The ' + card.replaceAll('_', ' ');
};
