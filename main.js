let faquestions = document.querySelectorAll('.faq-questions-list')
let faqAnswer = document.querySelectorAll('.faq-questions-list-buttom')

faquestions.forEach(
    question => {
        question.addEventListener('click', function(){

            faqAnswer.forEach(
                answer => {
                    answer.style.display = 'none'
                }

            )
            const answeree = this.querySelector('.faq-questions-list-buttom');
            answeree.style.display = 'flex'
            
        })

    }
)





$('.header-bottom-click').click(function(){
    $('.close').toggleClass('close, droppy')
})

$('.header-bottom-clicky').click(function() {
    $('.closey').toggleClass('close, droppy')
})

$('.menu-bar').find('i').click(function(){
    let headerButtom = document.querySelector('.header-bottom')
    headerButtom.style.display = 'flex'
    $(this).toggleClass('fa-bars, fa-times')
    
    if (($(this).hasClass('fa-times'))){
        let headerButtom = document.querySelector('.header-bottom')
        headerButtom.style.display = 'flex'
    } else{
        let headerButtom = document.querySelector('.header-bottom')
        headerButtom.style.display = 'none'
    }
})