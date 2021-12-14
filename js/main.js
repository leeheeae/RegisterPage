//value가 있을 경우  active한 상태
const inputCheck = () => {
    const inputs = document.querySelectorAll('.inputForm input');

    for (item of inputs) {
        item.addEventListener('input', (e) => {
            inputChangeCheckItem(e.target);
        });
        item.addEventListener('focus', (e) => {
            inputFocusValue(e.target)
        })
        item.addEventListener('blur', (e) => {
            setTimeout(inputFocusBlur, 200, e.target);
        });
    }
}

//리셋
// value가 있고 없고 설정
const inputChangeCheckItem = (item) => {
    if (item.value.length > 0) {
        item.classList.add('focus')
        inputFocusValue(item)
    } else {
        item.classList.remove('focus');
    }
}

//focus 됐을 때 value가 있으면 x표시 나타나도록
const inputFocusValue = (item) => {
    let itemPerent = item.parentNode;
    let resetBtn = document.createElement('div');
    resetBtn.innerHTML = `X`;
    resetBtn.classList.add('resetBtn');

    resetBtn.addEventListener('click', () => {
		item.value = '';
        item.classList.remove('focus');
    })

    if (itemPerent.querySelector('.resetBtn')) return;
    if (item.value.length > 0) {
        itemPerent.append(resetBtn);
    }
}

const inputFocusBlur = (item) => {
    let resetBtn = item.parentNode.querySelector('.resetBtn');
    resetBtn.remove()
}



window.addEventListener('load', inputCheck)
