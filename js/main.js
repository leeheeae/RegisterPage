//value가 있을 경우  active한 상태
const inputCheck = () => {
    const inputs = document.querySelectorAll('.inputForm input');
    const getStartedBtn = document.querySelector('.getStartedBtn');
    const successBox = document.querySelector('.successBox');
    const toLoginBtn = document.querySelector('.toLogin');

	for (item of inputs) {
		item.addEventListener('input', (e) => {
			inputChangeCheckItem(e.target);
		});
		item.addEventListener('focus', (e) => {
			inputFocusValue(e.target);
		});
		item.addEventListener('blur', (e) => {
			setTimeout(inputFocusBlur, 200, e.target);
		});
    }
    
    getStartedBtn.addEventListener('click', (e) => {
        getStartedSubmit(e.currentTarget, inputs, successBox);
    });

    toLoginBtn.addEventListener('click', toLogin);
};

// value가 있고 없고 설정
const inputChangeCheckItem = (item) => {
	if (item.value.length > 0) {
		item.classList.add('focus');
		inputFocusValue(item);
	} else {
		item.classList.remove('focus');
	}
};

//focus 됐을 때 value가 있으면 x표시 나타나도록
const inputFocusValue = (item) => {
	let itemPerent = item.parentNode;
	let resetBtn = document.createElement('div');
	resetBtn.innerHTML = `X`;
	resetBtn.classList.add('resetBtn');

	//리셋버튼 연결
	resetBtn.addEventListener('click', () => {
		resetInput(item);
	});

	if (itemPerent.querySelector('.resetBtn')) return;
	if (item.value.length > 0) {
		itemPerent.append(resetBtn);
	}
};

const resetInput = (item) => {
	item.value = '';
	item.classList.remove('focus');
};

//포커스 풀렸을 때
const inputFocusBlur = (item) => {
	let resetBtn = item.parentNode.querySelector('.resetBtn');
	if (!resetBtn) return;
	resetBtn.remove();
};

//이메일 체크
const emailCheck = (email) => {
	const reg =
		/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

	return reg.test(email);
};

//이메일 체크 표시
const emailCheckInfo = (input) => {
	const self = input;
	const check = emailCheck(self.value);
	const infoBox = self.parentNode.querySelector('.info');

	if (check || self.value.length === 0) return (infoBox.innerHTML = '');

	infoBox.innerHTML = '이메일 형식이 아닙니다.';
};

const getStartedSubmit = (btn, inputs, success) => {
	if (inputs[0].value.length === 0) {
	    alert('Name을 입력해주세요')
	    return inputs[0].focus();
	}
	if (inputs[1].value.length === 0) {
	    alert('ID를 입력해주세요');
	    return inputs[1].focus();
	}
	if (inputs[2].value.length === 0) {
		alert('Email을 입력해주세요');
	    return inputs[2].focus();
	}
	if (emailCheck(inputs[2].value) === false) {
		alert('Email을 형식에 맞춰 정확히 입력해주세요.');
		return inputs[2].focus();
	}
	if (inputs[3].value.length === 0) {
	    alert('Password를 입력해주세요');
	    return inputs[3].focus();
	}

	btn.innerHTML = '<div class="circle"></div>';
	btn.classList.add('loading');

	setTimeout(() => {
		console.log('셋타임실행', success);
		success.classList.add('success');
	}, 1000);

	console.log(btn);
};

const toLogin = () => {
    //임시 새로고침
    location.reload();
}

window.addEventListener('load', inputCheck);
