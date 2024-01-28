const toggleBtn = document.querySelector('.sidebar-toggle')
const sidelink = document.querySelector('.sidelink')

toggleBtn.addEventListener('click', function () {
    if(sidelink.classList.contains('show-sidelink')) {
        sidelink.classList.remove('show-sidelink')
    } else {
        sidelink.classList.add('show-sidelink')
    }
})


const questions = document.querySelectorAll('.question')

questions.forEach(function(question) {
    btn = question.querySelector('.btn-container')
    btn.addEventListener('click', function(){

        questions.forEach(function(item){
         if(item !== question){
            item.classList.remove('show-answer')
         }
        })
        
        question.classList.toggle('show-answer')
    })
}) 