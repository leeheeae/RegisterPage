//value가 있을 경우  active한 상태
const inputCheck = () => {
    const inputs = document.querySelectorAll('.inputForm input');

    for (item of inputs) {
        item.addEventListener('input', (e) => {
			inputChangeCheckItem(e.target);
        });
        item.addEventListener('focus', (e) => {
            
        })
    }
    
}

// value가 있고 없고 설정
const inputChangeCheckItem = (item) => {
    item.value.length > 0
		? item.classList.add('focus')
		: item.classList.remove('focus');
}

//focus 됐을 때 value가 있으면 x표시 나타나도록
const inputFocusValue = (item) => {
    // if (item.value.length > 0) {
    //     item.classList.add('focus');
    // } else {
    //     item.classList.remove('focus');
    // }
}


window.addEventListener('load', inputCheck)
