const ajax = new XMLHttpRequest()
ajax.open('GET', 'https://jsonplaceholder.typicode.com/posts')
ajax.send()
ajax.onload = function(){
  if(ajax.status === 200){
    const hasil = JSON.parse(ajax.responseText)
    console.log(hasil);
  }else{
    console.log('ada error bro...');
  }
}


const postJson = getPost('POST', 'https://jsonplaceholder.typicode.com/posts')
then.postJson 