'use strict';

{
    const btn = document.getElementById('btn')

    btn.addEventListener('click', () => {
        btn.textContent = 'hit!';

        const n =Math.floor(Math.random() * 3);

        switch (n) {
            case 0:
                btn.textContent = '大吉'
                break;
            case 1:
                btn.textContent = '忠吉'
                break;
            case 2:
                btn.textContent = '凶'
                break;
        }
    });
}