// SCREENS
let sectionMenu = document.querySelector('#menu')
let sectionCredits = document.querySelector('#credits')
let sectionBoardgame = document.querySelector('#boardgame')
let sectionQuestion = document.querySelector('#question')
let sectionAnswer = document.querySelector('#answer')
let sectionApresentation = document.querySelector('#apresentation')
let sectionRules = document.querySelector('#rules')
let sectionVictory = document.querySelector('#victory')
let sectionRotateScreen = document.querySelector('#rotateScreen')


// BTNs
let btnPlay = document.querySelector('img#btnPlay')
let btnCredits = document.querySelector('#btnCredits')
let btnExit = document.querySelector('#btnExit')
let btnContinue = document.querySelector('#btnContinue')
let btnRules = document.querySelector('#btnRules')
let btnBackFromRulesToApresentation = document.querySelector('#btnBackFromRulesToApresentation')
let btnBackFromCreditsToApresentation = document.querySelector('#btnBackFromCreditsToApresentation')
let btnBackFromQuestionToBoardgame = document.querySelector('#btnBackFromQuestionToBoardgame')
let btnNextFromToBoardgame = document.querySelector('#btnNextFromToBoardgame')
let btnBackFromBoardgameToMenu = document.querySelector('#btnBackFromBoardgameToMenu')

//CHARACTER
let superDentinhoBoardGame = document.querySelector('#superDentinhoBoardGame')

//SLOT OF QUESTIONS
let questionSlot1 = document.querySelector('img#q1')
let questionSlot2 = document.querySelector('img#q2')
let questionSlot3 = document.querySelector('img#q3')
let questionSlot4 = document.querySelector('img#q4')
let questionSlot5 = document.querySelector('img#q5')
let questionSlot6 = document.querySelector('img#q6')
let questionSlot7 = document.querySelector('img#q7')
let questionSlot8 = document.querySelector('img#q8')
let questionSlot9 = document.querySelector('img#q9')
let questionSlot10 = document.querySelector('img#q10')

let questionSlot11 = document.querySelector('img#q11')
let questionSlot12 = document.querySelector('img#q12')
let questionSlot13 = document.querySelector('img#q13')
let questionSlot14 = document.querySelector('img#q14')
let questionSlot15 = document.querySelector('img#q15')
let questionSlot16 = document.querySelector('img#q16')
let questionSlot17 = document.querySelector('img#q17')
let questionSlot18 = document.querySelector('img#q18')
let questionSlot19 = document.querySelector('img#q19')
let questionSlot20 = document.querySelector('img#q20')

// VARS
let numberQuestion = 0

// INITIALIZE
sectionMenu.style.display = 'none'
sectionCredits.style.display = 'none'
sectionBoardgame.style.display = 'none'
sectionQuestion.style.display = 'none'
sectionAnswer.style.display = 'none'
sectionApresentation.style.display = 'none'
sectionRules.style.display = 'none'
sectionVictory.style.display = 'none'
sectionRotateScreen.style.display = 'none'

// Escondendo o dedo
document.querySelector('#fingerPressing').style.display = 'none'

// DEFINE THE FIRST ACTIVE SLOT QUESTION
// questionSlot1.classList.add("questionSlotActive")

// DEFINE THE OTHERS SLOT QUESTION POSITIONS
questionSlot1.classList.add("p1")
questionSlot2.classList.add("p2")
questionSlot3.classList.add("p3")
questionSlot4.classList.add("p4")
questionSlot5.classList.add("p5")
questionSlot6.classList.add("p6")
questionSlot7.classList.add("p7")
questionSlot8.classList.add("p8")
questionSlot9.classList.add("p9")
questionSlot10.classList.add("p10")

questionSlot11.classList.add("p11")
questionSlot12.classList.add("p12")
questionSlot13.classList.add("p13")
questionSlot14.classList.add("p14")
questionSlot15.classList.add("p15")
questionSlot16.classList.add("p16")
questionSlot17.classList.add("p17")
questionSlot18.classList.add("p18")
questionSlot19.classList.add("p19")
questionSlot20.classList.add("p20")

// NAVIGATE FROM START PLAY TO APRESENTATION
btnPlay.addEventListener("click", function () {
    sectionMenu.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("apresentation")

    btnPlay.style.display = 'none'

    document.querySelector('#fingerPressing').style.display = 'block'
    document.querySelector('#fingerPressing').style.top = getOffset(document.querySelector('img#btnContinue.btnMenu')).top + 60 + 'px';
    document.querySelector('#fingerPressing').style.left = getOffset(document.querySelector('img#btnContinue.btnMenu')).left + 60 + 'px';

    playBackgroundSound()
});

// NAVIGATE FROM APRESENTATION TO CREDITS
btnCredits.addEventListener("click", function () {
    sectionApresentation.style.display = 'none'
    sectionCredits.style.display = 'flex'

    document.body.classList.remove("apresentation")
    document.body.classList.add("creditsVanessa")

    document.querySelector('#fingerPressing').style.display = 'block'
    document.querySelector('#fingerPressing').style.top = getOffset(document.querySelector('img#btnNextCredit')).top + 60 + 'px';
    document.querySelector('#fingerPressing').style.left = getOffset(document.querySelector('img#btnNextCredit')).left + 60 + 'px';

    displayApresentationCredits()
});

// NAVIGATE FROM APRESENTATION TO RULES
btnRules.addEventListener("click", function () {
    sectionApresentation.style.display = 'none'
    sectionRules.style.display = 'flex'

    document.body.classList.remove("background")
    document.body.classList.add("rules1")

    document.querySelector('#fingerPressing').style.display = 'block'
    document.querySelector('#fingerPressing').style.top = getOffset(document.querySelector('img#btnNextRule')).top + 60 + 'px';
    document.querySelector('#fingerPressing').style.left = getOffset(document.querySelector('img#btnNextRule')).left + 60 + 'px';

    displayApresentationRules()
});

// NAVIGATE FROM APRESENTATION TO BOARDGAME
btnContinue.addEventListener("click", function () {
    sectionApresentation.style.display = 'none'
    sectionBoardgame.style.display = 'flex'

    document.body.classList.remove("apresentation")
    document.body.classList.add("boardgame")

    document.querySelector('#fingerPressing').style.display = 'block'
    document.querySelector('#fingerPressing').style.top = getOffset(document.querySelector( `img#q1.questionSlot.p1` )).top + 60 + 'px';
    document.querySelector('#fingerPressing').style.left = getOffset(document.querySelector( `img#q1.questionSlot.p1` )).left + 60 + 'px';
});

btnNextFromToBoardgame.addEventListener("click", function () {
    sectionAnswer.style.display = 'none'
    sectionBoardgame.style.display = 'flex'
    
    document.body.classList.remove(`correctanswer${numberQuestion-1}`)
    document.body.classList.remove(`wronganswer${numberQuestion}`)
    document.body.classList.add("boardgame")  
    
    document.querySelector('#fingerPressing').style.display = 'block'
    document.querySelector('#fingerPressing').style.top = getOffset(document.querySelector( `img#q${numberQuestion+1}.questionSlot.p${numberQuestion+1}` )).top + 60 + 'px';
    document.querySelector('#fingerPressing').style.left = getOffset(document.querySelector( `img#q${numberQuestion+1}.questionSlot.p${numberQuestion+1}` )).left + 60 + 'px';
});

btnBackFromBoardgameToMenu.addEventListener("click", function () {
    sectionBoardgame.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("boardgame")
    document.body.classList.add("apresentation")

    document.querySelector('#fingerPressing').style.display = 'block'
    document.querySelector('#fingerPressing').style.top = getOffset(document.querySelector('img#btnPlay')).top + 60 + 'px';
    document.querySelector('#fingerPressing').style.left = getOffset(document.querySelector('img#btnPlay')).left + 60 + 'px';
});

btnBackFromRulesToApresentation.addEventListener("click", function () {
    sectionRules.style.display = 'none'
    sectionApresentation.style.display = 'flex'

    document.body.classList.remove("rules1")
    document.body.classList.remove("rules2")
    document.body.classList.add("apresentation")

    document.querySelector('#fingerPressing').style.display = 'block'
    document.querySelector('#fingerPressing').style.top = getOffset(document.querySelector('img#btnContinue')).top + 60 + 'px';
    document.querySelector('#fingerPressing').style.left = getOffset(document.querySelector('img#btnContinue')).left + 60 + 'px';
});

btnBackFromCreditsToApresentation.addEventListener("click", function () {
    sectionCredits.style.display = 'none'
    sectionApresentation.style.display = 'flex'    

    document.body.classList.remove("creditsVanessa")
    document.body.classList.remove("creditsCarlos")
    document.body.classList.remove("creditsGustavo")
    document.body.classList.add("apresentation")    

    document.querySelector('#fingerPressing').style.display = 'block'
    document.querySelector('#fingerPressing').style.top = getOffset(document.querySelector('img#btnPlay')).top + 60 + 'px';
    document.querySelector('#fingerPressing').style.left = getOffset(document.querySelector('img#btnPlay')).left + 60 + 'px';
});

function victory() {
    start();
    stop();

    sectionBoardgame.style.display = 'none'
    sectionVictory.style.display = 'flex'

    document.body.classList.remove("boardgame")
    document.body.classList.add("winner")
};

btnBackFromQuestionToBoardgame.addEventListener("click", function () {
    sectionQuestion.style.display = 'none'
    sectionBoardgame.style.display = 'flex'

    document.body.classList.remove(`question${numberQuestion}`)
    document.body.classList.add("boardgame")    
    
    // updateActiveSlotQuestion(numberQuestion-1)
    updateDentinhoPosition(numberQuestion)            
});

// EXIT THE GAME
btnExit.addEventListener("click", function() {
    window.close()
});

// BACKGROUND SOUND
function playBackgroundSound() {
    let sound = document.getElementById("audioBd")
    sound.currentTime = 0
    sound.loop = true
    sound.play()
}

// CORRECT SOUND
function playCorrectSound() {
    let sound = document.getElementById("audioCt")
    sound.currentTime = 0
    sound.loop = false
    sound.play()
}

// WRONG SOUND
function playWrongSound() {
    let sound = document.getElementById("audioWg")
    sound.currentTime = 0
    sound.loop = false
    sound.play()
}

/*  QUESTIONS  */

var questions = [
    {
        title: "Quantas vezes devemos escovar nossos dentinhos ao dia?",
        choices: ["Parte da manh?? e a noite.","Sempre ap??s nos alimentar."],
        answer: "Sempre ap??s nos alimentar.",
        correctAnswerExplanation: "Obaaa!!! Voc?? acertou, todas as vezes que nos alimentamos precisamos limpar nossos dentinhos.",
        wrongAnswerExplanation: "Resposta incorreta sobre bal??ozinho, Hum...:( Voc?? errou, todas as vezes que nos alimentamos precisamos limpar nossos dentinhos."
    },
    {
        title: "Qual a forma correta de escovar seus dentinhos, na sua idade?",
        choices: ["T??cnica da vassourinha, escovinha inclinada.","T??cnica da bolinha, escovinha n??o inclinada."],
        answer: "T??cnica da vassourinha, escovinha inclinada.",
        correctAnswerExplanation: "Isso a??!!! Voc?? acertou devemos inclinar a escova 45?? e escovar os dentes em todas suas faces, lembrando que acima (na oclusal) dos dentinhos faremos movimento de vai e vem.",
        wrongAnswerExplanation: "Incorreta ,que pena voc?? errou! A t??cnica da bolinha e para crian??as menores de 8 anos ou aqueles que tem dificuldade motora, na hora da escova????o."
    },
    {
        title: "Como deve ser a escovinha dental?",
        choices: ["Dura, e com a cabe??a da escova pequena.", "Macia, e com a cabe??a da escova pequena."],
        answer: "Macia, e com a cabe??a da escova pequena.",
        correctAnswerExplanation: "Parab??ns!! Isso mesmo voc?? est?? indo muito bem, a escova dental deve sempre ser pequena e macia para conseguir limpar todos os cantinhos do dente, sem machucar.",
        wrongAnswerExplanation: "Incorreta !A escovinha sempre deve ser pequena e macia  para conseguir limpar todos os cantinhos do dente ,sem machucar."
    },
    {
        title: "A pasta de dental e uma grande amiga da escovinha, ela precisa de fl??or para manter o dentinho longe das c??ries?",
        choices: ["Sim, precisa.", "N??o, precisa."],
        answer: "Sim, precisa.",
        correctAnswerExplanation: "Correta, todas as pastas precisam de fl??or para combater o bichinho da c??rie, e manter o esmalte forte .( bichinho c??rie, fl??or caindo no dentinho)gif",
        wrongAnswerExplanation: "Incorreta, sem fl??or as pastas n??o ajudar??o os dentinhos contras as c??ries. (dentinho lutando contra a c??rie)"
    },
    {
        title: "E a quantidade de pasta para colocar para idade de voc??s?",
        choices: ["A quantidade vai de um lado ao outro da escova.", "A quantidade e relativa a um gr??o de ervilha."],
        answer: "A quantidade e relativa a um gr??o de ervilha.",
        correctAnswerExplanation: "Acertou!!! a pasta deve ser colocada na idade de voc??s, do mesmo tamanho de um carocinho de ver ilha!! ( foto de uma ervilha)",
        wrongAnswerExplanation: "Errou !!! a pasta deve ser colocada na idade de voc??s ,do mesmo tamanho de um carocinho de ver ilha!! ( foto de uma ervilha)"
    },
    {
        title: "Voc?? precisa ir no dentista quando...",
        choices: ["Meu dente doer apenas.", "De 6 em 6 meses, mesmo se n??o estiver sentindo nenhuma dor."],
        answer: "De 6 em 6 meses, mesmo se n??o estiver sentindo nenhuma dor.",
        correctAnswerExplanation: "Acertou!!!! voc?? precisa ir no dentista mesmo se seu dentinho n??o estiver doendo ,para fazer a manuten????o da sua sa??de da boca.",
        wrongAnswerExplanation: "Errada, voc?? precisa ir no dentista mesmo se seu dentinho n??o estiver doendo, para fazer a manuten????o da sua sa??de da bucal."
    },
    {
        title: "A massinha branca que fica sobre os dentes, precisam ser removidas com a escova????o?",
        choices: ["Sim, caso n??o seja removida ela poder?? causar a c??rie ou doen??a na gengiva.", "N??o ,essa massinha ?? a pasta de dente que ficou no dente.(foto de varias bichinhos no dente, escovando eles somem)"],
        answer: "Sim, caso n??o seja removida ela poder?? causar a c??rie ou doen??a na gengiva.",
        correctAnswerExplanation: "Correta! Essa massinha e devido a n??o escova????o correta ?? ela que tem v??rias bact??rias e pode causar a c??rie e gengivite (doen??a que causa inflama????o, vermelh??o, dor e sangramento na gengiva)",
        wrongAnswerExplanation: "Errada! N??o ?? pasta n??o!! Essa massinha e devido a n??o escova????o correta ?? ela que tem v??rias bact??rias e pode causar a c??rie ou gengivite (doen??a que causa inflama????o, vermelh??o, dor e sangramento na gengiva)"
    },
    {
        title: "O fio dental ?? usado antes ou depois da escova????o?",
        choices: ["Depois da escova????o.", "Antes da escova????o."],
        answer: "Antes da escova????o.",
        correctAnswerExplanation: "Isso a??!! Muito bem sempre antes da escova????o passamos o fio dental",
        wrongAnswerExplanation: "Errou! ( carinha de triste) sempre antes da escova????o passamos o fio dental"
    },
    {
        title: "Alimentos cariog??nicos s??o aqueles que causam c??rie. Eles s??o:",
        choices: ["Balas, chocolates, refrigerantes.", "Frutas, legumes e verduras."],
        answer: "Balas, chocolates, refrigerantes.",
        correctAnswerExplanation: "Isso, as balas, chocolates s??o ricos em a????cares por isso causam c??rie.",
        wrongAnswerExplanation: "Esses alimentos n??o s??o cariog??nicos, ou seja, eles n??o causam a c??rie, e ainda contribuem para sa??de de uma forma geral prevenindo diabetes, obesidade e hipertens??o."
    },
    {
        title: "Os alimentos autolimpantes s??o aqueles, que limpam os dentes eles podem ser:",
        choices: ["Geleias e chicletes.", "Ma??as e cenouras."],
        answer: "Ma??as e cenouras.",
        correctAnswerExplanation: "Sim, eles limpam as faces dos dentes ,contribuindo para uma gengiva saud??vel",
        wrongAnswerExplanation: "N??o, pelo contr??rio esses alimentos agarram nos dentes"
    },
    {
        title: "A l??ngua precisa tamb??m ser escovada em todas as escova????es do dente?",
        choices: ["Uma vez ao dia ?? o suficiente.", "Sim, todas as escova????es precisamos escovar a l??ngua(l??ngua sendo limpa)"],
        answer: "Sim, todas as escova????es precisamos escovar a l??ngua(l??ngua sendo limpa)",
        correctAnswerExplanation: "Sim!!!! A l??ngua assim como os dentes ,precisa de cuidados ,todas as vezes que escovamos os dentes ,precisamos escovar a l??ngua tamb??m .",
        wrongAnswerExplanation: "Errada! A l??ngua assim como os dentes, precisa de cuidados ,todas as vezes que escovamos os dentes ,precisamos escovar a l??ngua tamb??m"
    },
    {
        title: "Estou com dor de dente na escola, o que devo fazer?",
        choices: ["Falar com a professora para ela falar com o meu respons??vel.", "Ficar quieto para n??o precisar ir ao dentista."],
        answer: "Falar com a professora para ela falar com o meu respons??vel.",
        correctAnswerExplanation: "Correta, sempre que estiver com dor preciso falar a um respons??vel assim, ele poder?? ajudar e lev??-lo ao dentista!",
        wrongAnswerExplanation: "Errada, sempre que estiver com dor preciso falar a um respons??vel assim ,ele poder?? ajudar e lev??-lo ao dentista. N??o precisa ter  medo pois o dentista ir??  para ajudar voc?? a n??o sentir mais dor! (DENTISTA TRATANDO)"
    },
    {
        title: "O que fazer para n??o ter c??ries?",
        choices: ["Diminuir os a????cares da comida, e sempre higienizar a boca.", "Manter os a????cares da comida, e higienizar 2 vezes a boca por dia."],
        answer: "Diminuir os a????cares da comida, e sempre higienizar a boca.",
        correctAnswerExplanation: "Correto! Diminuindo, e higienizando teremos sempre uma boca livre da doen??a c??rie",
        wrongAnswerExplanation: "Incorreto! Devemos diminuir da nossa comida os a????cares, como: balas, doces, refrigerantes e higienizar sempre a boca, ap??s todas as alimenta????es!"
    },
    {
        title: "Como os a????cares atacam o dente e formam as les??es de c??rie?",
        choices: ["As bact??rias na placa dental destroem o a????car que ?? ingerido e o convertem em ??cidos, destruindo o esmalte instalando-se a c??rie.", "As bact??rias na placa dental  colaboram com o dente ,destruindo o esmalte instalando-se a c??rie."],
        answer: "As bact??rias na placa dental destroem o a????car que ?? ingerido e o convertem em ??cidos, destruindo o esmalte instalando-se a c??rie.",
        correctAnswerExplanation: "Correto!!!  As bact??rias na placa dental destroem o a????car que ?? ingerido e o convertem em ??cidos, destruindo o esmalte instalando-se a c??rie. ( c??rie comendo o dente)",
        wrongAnswerExplanation: "N??o, n??o!! As bact??rias na placa dental, N??O colaboram com o dente elas destroem o esmalte instalando-se a c??rie."
    },
    {
        title: "A ??ltima escova????o do dia precisa:",
        choices: ["Ser supervisionada por um respons??vel.", "N??o precisa ser supervisionada por um respons??vel."],
        answer: "Ser supervisionada por um respons??vel.",
        correctAnswerExplanation: "Isso a??! sim, a escova????o da noite ?? a mais importante e precisa ser supervisionada por um respons??vel, para ver se foi feito da maneira correta.",
        wrongAnswerExplanation: "Precisa sim!! A supervis??o e para que o respons??vel verifique se foi realizada de maneira satisfat??ria a escova????o."
    },
    {
        title: "Por que alimentos como macarr??o, hamb??rguer e pizzas tamb??m precisam ser evitados para manuten????o da sa??de bucal, e da sa??de de uma forma geral?",
        choices: ["Esses alimentos s??o ricos em carboidratos e depois se transformam em a????cares no nosso corpo.", "Esses alimentos s??o ricos em prote??nas e depois se transformam em a????cares no nosso corpo."],
        answer: "Esses alimentos s??o ricos em carboidratos e depois se transformam em a????cares no nosso corpo.",
        correctAnswerExplanation: "Correto, esses alimentos depois se transformam em a????cares e potencializam o aparecimento da c??rie.",
        wrongAnswerExplanation: "Errado, as prote??nas n??o se transforma????o em a????cares !Elas s??o excelentes para a sa??de de uma forma geral."
    },
    {
        title: "Antibi??tico faz aparecer c??rie?",
        choices: ["Sim, sempre que a crian??a faz uso de antibi??tico ela faz aparecer a c??rie.", "N??o, ele n??o faz aparecer c??rie."],
        answer: "N??o, ele n??o faz aparecer c??rie.",
        correctAnswerExplanation: "Correta, o antibi??tico n??o tem a capacidade de fazer aparecer a doen??a c??rie. O que determina a instala????o da c??rie ?? o consumo excessivo de a????cares e falta de escova????o correta!",
        wrongAnswerExplanation: "Incorreta, o que determina a instala????o da c??rie ?? o consumo excessivo de a????cares e falta de escova????o correta!"
    },
    {
        title: "A ???massinha branca na parede do dente??? ?? chamada de biofilme dental, ela pode ocasionar o aparecimento de uma doen??a na gengiva que faz sangra, ela se chama?",
        choices: ["Gengivite.", "C??rie."],
        answer: "Gengivite.",
        correctAnswerExplanation: "Correta, gengivite ?? uma doen??a que pode ser ocasionada pela falta de uma escova????o correta, instalada pelo ac??mulo do biofilme que gera uma inflama????o na gengiva faz sangra e doer.",
        wrongAnswerExplanation: "A doen??a c??rie n??o sangra, mas doe e assim como a gengivite pode causar a perda do dentinho."
    },
    {
        title: "?? obrigat??rio o uso de enxaguante bucal?",
        choices: ["Sim.", "N??o."],
        answer: "N??o.",
        correctAnswerExplanation: "Correto, n??o e obrigat??rio mas ?? eficiente sua utiliza????o ?? aconselhado o enxaguante que contenha fl??or em sua composi????o.",
        wrongAnswerExplanation: "Incorreto, n??o ?? obrigat??rio, mas ?? eficiente sua utiliza????o ?? aconselhado o enxaguante que contenha fl??or em sua composi????o."
    },
    {
        title: "Qual a import??ncia desse jogo?",
        choices: ["Manter minha sa??de bucal, ajudar meus amigos familiares a manter a sa??de bucal deles tamb??m.", "Competir com meus colegas e ganhar o jogo apenas."],
        answer: "Manter minha sa??de bucal, ajudar meus amigos familiares a manter a sa??de bucal deles tamb??m.",
        correctAnswerExplanation: "Isso a??!!! Muito bem, o objetivo ?? promo????o e preven????o das doen??as da boca melhorando a qualidade de vida de voc??s, assim como proporcionando um conhecimento para que voc??s transmitam isso para a sociedade(pais, amigos, tios ..)",
        wrongAnswerExplanation: "O objetivo n??o ?? apenas competir e ganhar. Os Ganhadores s??o todos aqueles que chegaram at?? aqui com o super dentinho, aprendendo como devemos manter a nossa sa??de bucal ,ficando longe da c??rie e das doen??as da boca."
    },
];

function updateDentinhoPosition(numberQuestion) {
    switch (numberQuestion) {
        case -1:
            changeDentinhoPosition(questionSlot0)
            break;

        case 0:
            changeDentinhoPosition(questionSlot1)
            break;

        case 1:
            changeDentinhoPosition(questionSlot2)
            break;

        case 2:
            changeDentinhoPosition(questionSlot3)
            break;

        case 3:
            changeDentinhoPosition(questionSlot4)
            break;

        case 4:
            changeDentinhoPosition(questionSlot5)
            break;

        case 5:
            changeDentinhoPosition(questionSlot6)
            break;

        case 6:
            changeDentinhoPosition(questionSlot7)
            break;

        case 7:
            changeDentinhoPosition(questionSlot8)
            break;

        case 8:
            changeDentinhoPosition(questionSlot9)
            break;

        case 9:
            changeDentinhoPosition(questionSlot10)
            break;

        case 10:
            changeDentinhoPosition(questionSlot11)
            break;

            case 11:
                changeDentinhoPosition(questionSlot12)
                break;
    
            case 12:
                changeDentinhoPosition(questionSlot13)
                break;
    
            case 13:
                changeDentinhoPosition(questionSlot14)
                break;
    
            case 14:
                changeDentinhoPosition(questionSlot15)
                break;
    
            case 15:
                changeDentinhoPosition(questionSlot16)
                break;
    
            case 16:
                changeDentinhoPosition(questionSlot17)
                break;
    
            case 17:
                changeDentinhoPosition(questionSlot18)
                break;
    
            case 18:
                changeDentinhoPosition(questionSlot19)
                break;
    
            case 19:
                changeDentinhoPosition(questionSlot20)
                break;

        default:
            break;
    }
}

function updateActiveSlotQuestion(numberQuestion) {
    switch (numberQuestion) {
        case 0:
            questionSlot1.classList.remove("questionSlotActive")
            questionSlot2.classList.add("questionSlotActive")
            break;

        case 1:
            questionSlot2.classList.remove("questionSlotActive")
            questionSlot3.classList.add("questionSlotActive")
            break;

        case 2:
            questionSlot3.classList.remove("questionSlotActive")
            questionSlot4.classList.add("questionSlotActive")
            break;

        case 3:
            questionSlot4.classList.remove("questionSlotActive")
            questionSlot5.classList.add("questionSlotActive")
            break;

        case 4:
            questionSlot5.classList.remove("questionSlotActive")
            questionSlot6.classList.add("questionSlotActive")
            break;

        case 5:
            questionSlot6.classList.remove("questionSlotActive")
            questionSlot7.classList.add("questionSlotActive")
            break;

        case 6:
            questionSlot7.classList.remove("questionSlotActive")
            questionSlot8.classList.add("questionSlotActive")
            break;

        case 7:
            questionSlot8.classList.remove("questionSlotActive")
            questionSlot9.classList.add("questionSlotActive")
            break;

        case 8:
            questionSlot9.classList.remove("questionSlotActive")
            questionSlot10.classList.add("questionSlotActive")
            break;

        case 9:
            questionSlot10.classList.remove("questionSlotActive")
            questionSlot11.classList.add("questionSlotActive")
            break;

        case 10:
            questionSlot11.classList.remove("questionSlotActive")
            questionSlot12.classList.add("questionSlotActive")
            break;

        case 11:
            questionSlot12.classList.remove("questionSlotActive")
            questionSlot13.classList.add("questionSlotActive")
            break;

        case 12:
            questionSlot13.classList.remove("questionSlotActive")
            questionSlot14.classList.add("questionSlotActive")
            break;

        case 13:
            questionSlot14.classList.remove("questionSlotActive")
            questionSlot15.classList.add("questionSlotActive")
            break;

        case 14:
            questionSlot15.classList.remove("questionSlotActive")
            questionSlot16.classList.add("questionSlotActive")
            break;

        case 15:
            questionSlot16.classList.remove("questionSlotActive")
            questionSlot17.classList.add("questionSlotActive")
            break;

        case 16:
            questionSlot17.classList.remove("questionSlotActive")
            questionSlot18.classList.add("questionSlotActive")
            break;

        case 17:
            questionSlot18.classList.remove("questionSlotActive")
            questionSlot19.classList.add("questionSlotActive")
            break;

        case 18:
            questionSlot19.classList.remove("questionSlotActive")
            questionSlot20.classList.add("questionSlotActive")
            break;

        case 19:
            questionSlot19.classList.remove("questionSlotActive")            
            break;

        default:
            break;
    }
}

function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function changeDentinhoPosition(slotNumber) {
    // change position
    document.addEventListener('click', function handleClick(event) {
        superDentinhoBoardGame.style.top = getOffset(slotNumber).top + 'px';
        superDentinhoBoardGame.style.left = getOffset(slotNumber).left + 'px';
    });    
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

async function goToQuestion(slotSelectedFromUSer) {

    if (numberQuestion === questions.length) {
        victory()
        return
    }

    if (slotSelectedFromUSer === numberQuestion) {
        updateDentinhoPosition(numberQuestion)
        await delay(500);        

        // change background
        sectionBoardgame.style.display = 'none'
        sectionQuestion.style.display = 'flex'

        document.body.classList.remove("background")
        document.body.classList.add(`question${numberQuestion}`)

        document.querySelector('#fingerPressing').style.display = 'none'
    } 
}

function verifyQuestion(userChoice) {

    let answerUser = userChoice === "optionButton1" ? questions[numberQuestion].choices[0] : questions[numberQuestion].choices[1]

    let statusAnswerUser = questions[numberQuestion].answer === answerUser ? true : false

    feedbackAnswer(statusAnswerUser)
}

function feedbackAnswer(statusAnswerUser) {
    // change background
    sectionAnswer.style.display = 'flex'
    sectionQuestion.style.display = 'none'

    document.body.classList.remove(`question${numberQuestion}`)    

    if (statusAnswerUser) {
        document.body.classList.add(`correctanswer${numberQuestion}`)
        playCorrectSound()
        start();
        stop();

        // updateActiveSlotQuestion(numberQuestion)
        updateDentinhoPosition(numberQuestion)
        numberQuestion++  
    } else {
        document.body.classList.add(`wronganswer${numberQuestion}`)        

        playWrongSound()
                
        updateDentinhoPosition(numberQuestion)            

        document.querySelector('#fingerPressing').style.display = 'block'
        document.querySelector('#fingerPressing').style.top = getOffset(document.querySelector('img#btnNextFromToBoardgame')).top + 60 + 'px';
        document.querySelector('#fingerPressing').style.left = getOffset(document.querySelector('img#btnNextFromToBoardgame')).left + 60 + 'px';
    }    
}