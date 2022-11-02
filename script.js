const input = document.querySelector("input"),
      btn = document.querySelector("button"),
      ol = document.querySelector("ol"),
      div = document.querySelectorAll(".List div")

//添加
function AddList(){
  let value = input.value
  if(value !== ""){
    let div = document.createElement('div')
    div.insertAdjacentHTML('beforeend',`<li>${value}</li><span>X</span>`)
    ol.appendChild(div)
    input.value = ""
    Del(div)
    addEvent(div) 
  }else{
    alert("内容不能为空！")
  }
}

// 删除
function Del(ele){
  
  if(typeof ele === 'object'){
    
    for(let i=0; i<ele.length; i++){
      let span = ele[i].querySelectorAll('span')[0]
 
      span.addEventListener('click',function(){
        ol.removeChild(ele[i])
      })
    }

  }

  if(ele.nodeType == 1){
    const span = ele.querySelector("span")
    span.addEventListener("click",function(){
      ol.removeChild(ele)
    })
  }
  
}

//点击按钮添加
btn.addEventListener('click',function(){
  AddList()
})

//li绑定事件
function addEvent(ele){
  let flag = false

  //判断是否为伪数组
  if (typeof ele == 'object') {
    
    for (const item of Array.from(ele)) {
      item.querySelector('li').addEventListener('click',function(){
        this.style.textDecoration = (flag == false) ? "line-through" : "none";
        this.className = (flag == false) ? "ture" : "false"
        flag = !flag
      })
    }
  }

  //判断是否为单个元素
  if (ele.nodeType == 1) {
    ele.querySelector('li').addEventListener('click', function () {
      this.style.textDecoration = (flag == false) ? "line-through" : "none";
      this.className = (flag == false) ? "ture" : "false"
      flag = !flag
    })
  }

  
}

Del(div)
addEvent(div)