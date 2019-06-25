
//const storage = window.localStorage;
let gameOverFlag = false;

window.onload = () => {
  const downloadBtn = document.getElementById('download');
  downloadBtn.onclick = download;
}

function download() {
  const _link = document.getElementById('link');
  const link = _link.value;
  const data = {
    url: link,
  };
  const url = 'http://localhost:3000/file/download';
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then(data => data.json())
    .then(data => {
      console.log(data);
      const msg = data.err ? 'Error' : 'Work done';
      done(msg);
    })
    .catch(err => {
      console.error(err);
      done('Error');
    });
}

function done(res) {
  const _res = document.getElementById('res');
  _res.innerText = res;
  console.log(_res);
  const _link = document.getElementById('link');
  _link.value = ""


}

