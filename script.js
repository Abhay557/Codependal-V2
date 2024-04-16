function update() {
	let htmlCode = document.getElementById("htmlCode").value;
	let cssCode = document.getElementById("cssCode").value;
	let javascriptCode = document.getElementById("javascriptCode").value;
	let text = htmlCode + "<style>" + cssCode + "</style>" + "<script>" + javascriptCode + "</script>";
	let iframe = document.getElementById('viewer').contentWindow.document;
	iframe.open();
	iframe.write(text);
	iframe.close();
}

const languageButtons = document.querySelectorAll('.language');
const editors = document.querySelectorAll('.editor');

languageButtons.forEach(button => {
	button.addEventListener('click', () => {
		const target = button.getAttribute('data-target');
		editors.forEach(editor => {
			if (editor.id === target + 'Editor') {
				editor.classList.add('active');
			} else {
				editor.classList.remove('active');
			}
		});
	});
});
Split([".editor-container", ".chat", ".viewer"]);