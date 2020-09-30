//done - złap tezę
//done - złap etap
//done - złap imiona uczetników
//done - po kliknięciu przerzuć tezę i imiona do drugiego ekranu
//done - po kliknięciu dalej zsumuj wszystkij uczestników i wyślij to do pól na trzecim ekranie
//done - zsumuj co pozostało
//done - dodaj wyniki innych sędziów i porównaj wyniki
//done - po klinięciu zakończ wyświetl ekran podsumowujący
//done -uwzględnij tezę, etap, i członków zespołu w ekranie końcowym
//done - dodaj przyciski sterujące - exit, restart, back

// alert($("input[name=competition-stage]:checked").val());
//to wyżej ^^ daje od razu info który radiobutton jest wybrany i podaje jego value

//STEROWANIE
// chowa EKRAN NR 0 i pokazuje EKRAN NR 1
hideLoadScreen = () => {
  $(".fader").css("opacity", "0");
  $(".prepare-data").addClass("showMe");
  $(".fader").addClass("hideMe");
};

//CHOWA EKRAN NR 1 I POKAZUJE EKRAN NR 2
$("#toDebateRounds").click(() => {
  $(".prepare-data").removeClass("showMe");
  $(".debate-rounds").addClass("showMe");
  $(window).scrollTop(0);
});

//CHOWA EKRAN NR 2 I POKAZUJE EKRAN NR 3
$("#debate-rounds-forward-btn").click(() => {
  $(".debate-rounds").removeClass("showMe");
  $(".summary-view").addClass("showMe");
  setTimeout(() => {
    $(window).scrollTop(0);
    $(".summary-view").css("opacity", "1");
}, 1000);
});

//CHOWA EKRAN NR 3 I POKAZUJE EKRAN NR 4
$("#summary-view-btn").click(() => {
    $(".summary-view").css("opacity", "0");
    $(".summary-view").removeClass("showMe");
    $(window).scrollTop(0);
  $(".ending-page").addClass("showMe");
})

//CHOWA EKRAN NR 2 I POKAZUJE EKRAN NR 1
$("#debate-rounds-back-btn").click(() => {
  $(".debate-rounds").removeClass("showMe");
  $(".prepare-data").addClass("showMe");
});

//CHOWA EKRAN NR 3 I POKAZUJE EKRAN NR 2
$("#summary-view-back-btn").click(() => {
  $(".summary-view").css("opacity", "0");
  $(".summary-view").removeClass("showMe");
  $(".debate-rounds").addClass("showMe");
});


//odświeża stronę - resetuje "program"
$(".restart-btn").click(() => {
    location.reload();
})

//cofa do ekranu głównego
$(".back-btn").click(() => {
    $(".fader").css("opacity", "1");
    $(".prepare-data").removeClass("showMe");
    $(".fader").removeClass("hideMe");
})



let thesis = $("#thesis-input");
let stage = $("input[name=competition-stage]:checked");

let firstStage = $("first-stage").val();
let secondStage = $("second-stage").val();
let semiFinal = $("semi-final").val();
let final = $("final").val();

let propositionMember1Name = $("#oratorName1P");
let propositionMember2Name = $("#oratorName2P");
let propositionMember3Name = $("#oratorName3P");
let propositionMember4Name = $("#oratorName4P");

let opositionMember1Name = $("#oratorName1O");
let opositionMember2Name = $("#oratorName2O");
let opositionMember3Name = $("#oratorName3O");
let opositionMember4Name = $("#oratorName4O");


$("#toDebateRounds").click(() => {
    //podaje imiona na EKRAN NR 2
    $("#pm1").html(`${propositionMember1Name.val()}`);
    $("#pm2").html(`${propositionMember2Name.val()}`);
    $("#pm3").html(`${propositionMember3Name.val()}`);
    $("#pm4").html(`${propositionMember4Name.val()}`);
    
    $("#om1").html(`${opositionMember1Name.val()}`);
    $("#om2").html(`${opositionMember2Name.val()}`);
    $("#om3").html(`${opositionMember3Name.val()}`);
    $("#om4").html(`${opositionMember4Name.val()}`);
    
    //podaje imiona na EKRAN NR 3
    $("#oratorName1Pshow").html(`${propositionMember1Name.val()}`);
    $("#oratorName2Pshow").html(`${propositionMember2Name.val()}`);
    $("#oratorName3Pshow").html(`${propositionMember3Name.val()}`);
    $("#oratorName4Pshow").html(`${propositionMember4Name.val()}`);
    
    $("#oratorName1Oshow").html(`${opositionMember1Name.val()}`);
    $("#oratorName2Oshow").html(`${opositionMember2Name.val()}`);
    $("#oratorName3Oshow").html(`${opositionMember3Name.val()}`);
    $("#oratorName4Oshow").html(`${opositionMember4Name.val()}`);
    
    //przekazuje tezę na EKRAN DRUGI
    //tak trzeba będzie zabezpieczyć niewypełnienie pierwszego ekranu
    // if (thesis.val() === "" || $("input[name=competition-stage]:checked").val() == undefined
    //  || propositionMember1Name.val() === "" || propositionMember2Name.val() === "" || propositionMember3Name.val() === "" || propositionMember4Name.val() === ""
    //  || opositionMember1Name.val() === ""  || opositionMember2Name.val() === "" || opositionMember3Name.val() === "" || opositionMember4Name.val() === "")
    //   {
    //     alert(`Aby przejść dalej zupełnij wszystkie pola`);
    //     $(".debate-rounds").removeClass("showMe");
    //     $(".prepare-data").addClass("showMe");
    // } else {
    //     $("#thesis-place").html(`${thesis.val()}`);
    // }




    // if ($("input[name=competition-stage]:!checked")) {
    //     alert(`wybierz etap rozgrywek`);
    //     $(".debate-rounds").removeClass("showMe");
    //     $(".prepare-data").addClass("showMe");
   
});


$("#debate-rounds-forward-btn").click(() => {
    //zlicza punkty 1 PRO i wysyła na EKRAN NR 3
    $("#orator1P").val(propositionMember1TotalScoreFunction());
    
    //zlicza punkty 2 PRO i wysyła na EKRAN NR 3
    $("#orator2P").val(propositionMember2TotalScoreFunction());

    //zlicza punkty 3 PRO i wysyła na EKRAN NR 3
    $("#orator3P").val(propositionMember3TotalScoreFunction());

    //zlicza punkty 4 PRO i wysyła na EKRAN NR 3
    $("#orator4P").val(propositionMember4TotalScoreFunction());

    //zlicza punkty 1 OPO i wysyła na EKRAN NR 3
    $("#orator1O").val(opositionMember1TotalScoreFunction());
    
    //zlicza punkty 2 OPO i wysyła na EKRAN NR 3
    $("#orator2O").val(opositionMember2TotalScoreFunction());

    //zlicza punkty 3 OPO i wysyła na EKRAN NR 3
    $("#orator3O").val(opositionMember3TotalScoreFunction());

    //zlicza punkty 4 OPO i wysyła na EKRAN NR 3
    $("#orator4O").val(opositionMember4TotalScoreFunction());
})

propositionMember1TotalScoreFunction = () => {
    let propositionMember1ScoreRetoryka = parseInt($("#proposition_member_1_retoryka").val());
    let propositionMember1ScoreStruktura = parseInt($("#proposition_member_1_struktura").val());
    let propositionMember1ScoreMerytoryka = parseInt($("#proposition_member_1_merytoryka").val());
    let propositionMember1ScorePytania = parseInt($("#proposition_member_1_pytania").val());
    let propositionMember1ScoreRola = parseInt($("#proposition_member_1_rola").val());

    let propositionMember1TotalScore = yourSum(propositionMember1ScoreRetoryka,
                                                propositionMember1ScoreStruktura,
                                                propositionMember1ScoreMerytoryka,
                                                propositionMember1ScorePytania,
                                                propositionMember1ScoreRola)

    return propositionMember1TotalScore;
}
propositionMember2TotalScoreFunction = () => {
    let propositionMember2ScoreRetoryka = parseInt($("#proposition_member_2_retoryka").val());
    let propositionMember2ScoreStruktura = parseInt($("#proposition_member_2_struktura").val());
    let propositionMember2ScoreMerytoryka = parseInt($("#proposition_member_2_merytoryka").val());
    let propositionMember2ScorePytania = parseInt($("#proposition_member_2_pytania").val());
    let propositionMember2ScoreRola = parseInt($("#proposition_member_2_rola").val());
    let propositionMember2TotalScore = propositionMember2ScoreRetoryka
                                     + propositionMember2ScoreStruktura 
                                     + propositionMember2ScoreMerytoryka 
                                     + propositionMember2ScorePytania 
                                     + propositionMember2ScoreRola;

    return propositionMember2TotalScore;
}
propositionMember3TotalScoreFunction = () => {
    let propositionMember3ScoreRetoryka = parseInt($("#proposition_member_3_retoryka").val());
    let propositionMember3ScoreStruktura = parseInt($("#proposition_member_3_struktura").val());
    let propositionMember3ScoreMerytoryka = parseInt($("#proposition_member_3_merytoryka").val());
    let propositionMember3ScorePytania = parseInt($("#proposition_member_3_pytania").val());
    let propositionMember3ScoreRola = parseInt($("#proposition_member_3_rola").val());
    let propositionMember3TotalScore = propositionMember3ScoreRetoryka
                                     + propositionMember3ScoreStruktura 
                                     + propositionMember3ScoreMerytoryka 
                                     + propositionMember3ScorePytania 
                                     + propositionMember3ScoreRola;

    return propositionMember3TotalScore;
}
propositionMember4TotalScoreFunction = () => {
    let propositionMember4ScoreRetoryka = parseInt($("#proposition_member_4_retoryka").val());
    let propositionMember4ScoreStruktura = parseInt($("#proposition_member_4_struktura").val());
    let propositionMember4ScoreMerytoryka = parseInt($("#proposition_member_4_merytoryka").val());
    let propositionMember4ScorePytania = parseInt($("#proposition_member_4_pytania").val());
    let propositionMember4ScoreRola = parseInt($("#proposition_member_4_rola").val());
    let propositionMember4TotalScore = propositionMember4ScoreRetoryka
                                     + propositionMember4ScoreStruktura 
                                     + propositionMember4ScoreMerytoryka 
                                     + propositionMember4ScorePytania 
                                     + propositionMember4ScoreRola;

    return propositionMember4TotalScore;
}
opositionMember1TotalScoreFunction = () => {
    let opositionMember1ScoreRetoryka = parseInt($("#oposition_member_1_retoryka").val());
    let opositionMember1ScoreStruktura = parseInt($("#oposition_member_1_struktura").val());
    let opositionMember1ScoreMerytoryka = parseInt($("#oposition_member_1_merytoryka").val());
    let opositionMember1ScorePytania = parseInt($("#oposition_member_1_pytania").val());
    let opositionMember1ScoreRola = parseInt($("#oposition_member_1_rola").val());
    let opositionMember1TotalScore = opositionMember1ScoreRetoryka
                                    + opositionMember1ScoreStruktura 
                                    + opositionMember1ScoreMerytoryka 
                                    + opositionMember1ScorePytania 
                                    + opositionMember1ScoreRola;

    return opositionMember1TotalScore;
}
opositionMember2TotalScoreFunction = () => {
    let opositionMember2ScoreRetoryka = parseInt($("#oposition_member_2_retoryka").val());
    let opositionMember2ScoreStruktura = parseInt($("#oposition_member_2_struktura").val());
    let opositionMember2ScoreMerytoryka = parseInt($("#oposition_member_2_merytoryka").val());
    let opositionMember2ScorePytania = parseInt($("#oposition_member_2_pytania").val());
    let opositionMember2ScoreRola = parseInt($("#oposition_member_2_rola").val());
    let opositionMember2TotalScore = opositionMember2ScoreRetoryka
                                    + opositionMember2ScoreStruktura 
                                    + opositionMember2ScoreMerytoryka 
                                    + opositionMember2ScorePytania 
                                    + opositionMember2ScoreRola;
    return opositionMember2TotalScore;
}
opositionMember3TotalScoreFunction = () => {
    let opositionMember3ScoreRetoryka = parseInt($("#oposition_member_3_retoryka").val());
    let opositionMember3ScoreStruktura = parseInt($("#oposition_member_3_struktura").val());
    let opositionMember3ScoreMerytoryka = parseInt($("#oposition_member_3_merytoryka").val());
    let opositionMember3ScorePytania = parseInt($("#oposition_member_3_pytania").val());
    let opositionMember3ScoreRola = parseInt($("#oposition_member_3_rola").val());
    let opositionMember3TotalScore = opositionMember3ScoreRetoryka
                                    + opositionMember3ScoreStruktura 
                                    + opositionMember3ScoreMerytoryka 
                                    + opositionMember3ScorePytania 
                                    + opositionMember3ScoreRola;
    return opositionMember3TotalScore;
}
opositionMember4TotalScoreFunction = () => {
    let opositionMember4ScoreRetoryka = parseInt($("#oposition_member_4_retoryka").val());
    let opositionMember4ScoreStruktura = parseInt($("#oposition_member_4_struktura").val());
    let opositionMember4ScoreMerytoryka = parseInt($("#oposition_member_4_merytoryka").val());
    let opositionMember4ScorePytania = parseInt($("#oposition_member_4_pytania").val());
    let opositionMember4ScoreRola = parseInt($("#oposition_member_4_rola").val());
    let opositionMember4TotalScore = opositionMember4ScoreRetoryka
                                    + opositionMember4ScoreStruktura 
                                    + opositionMember4ScoreMerytoryka 
                                    + opositionMember4ScorePytania 
                                    + opositionMember4ScoreRola;
    return opositionMember4TotalScore;
}


yourSum = (...arguments) => {
    let yT = 0;
    for(let i=0; i<arguments.length; i++) {
        yT += arguments[i];
    }
    return yT;
}






//suma punktów przyznanych PROPOZYCJI przez sędziego, siedzącego przed tym komputerem
$("#yourPropositionSum").click(() => {
    let propositionSpojnoscDruzyny = parseInt($("#sdP").val());
    let propositionDefiniowanieLiniiSporu = parseInt($("#dlsP").val());
    let propositionLiniaArgumentacyjna = parseInt($("#laP").val());
    let propositionKontrargumentacja = parseInt($("#kP").val());
    let propositionPuntySedziowskie = parseInt($("#psP").val());

    $("#yourSumPshow").html(yourSum(propositionMember1TotalScoreFunction(), 
    propositionMember2TotalScoreFunction(),
    propositionMember3TotalScoreFunction(),
    propositionMember4TotalScoreFunction(),
    propositionSpojnoscDruzyny,
    propositionDefiniowanieLiniiSporu,
    propositionLiniaArgumentacyjna,
    propositionKontrargumentacja,
    propositionPuntySedziowskie))
})
//suma punktów przyznanych OPOZYCJI przez sędziego, siedzącego przed tym komputerem
$("#yourOpositionSum").click(() => {
    let opositionSpojnoscDruzyny = parseInt($("#sdO").val());
    let opositionDefiniowanieLiniiSporu = parseInt($("#dlsO").val());
    let opositionLiniaArgumentacyjna = parseInt($("#laO").val());
    let opositionKontrargumentacja = parseInt($("#kO").val());
    let opositionPuntySedziowskie = parseInt($("#psO").val());

    $("#yourSumOshow").html(yourSum(opositionMember1TotalScoreFunction(), 
    opositionMember2TotalScoreFunction(),
    opositionMember3TotalScoreFunction(),
    opositionMember4TotalScoreFunction(),
    opositionSpojnoscDruzyny,
    opositionDefiniowanieLiniiSporu,
    opositionLiniaArgumentacyjna,
    opositionKontrargumentacja,
    opositionPuntySedziowskie))
})
//suma punktów przyznanych PROPOZYCJI przez wszystkich sędziów
$("#proposition-total-btn").click(() => {
    let propositionSpojnoscDruzyny = parseInt($("#sdP").val());
    let propositionDefiniowanieLiniiSporu = parseInt($("#dlsP").val());
    let propositionLiniaArgumentacyjna = parseInt($("#laP").val());
    let propositionKontrargumentacja = parseInt($("#kP").val());
    let propositionPuntySedziowskie = parseInt($("#psP").val());
    let propositionJudge1Points = parseInt($("#proposition-judge-1").val());
    let propositionJudge2Points = parseInt($("#proposition-judge-2").val());

    $("#proposition-total").html(yourSum(
        propositionMember1TotalScoreFunction(), 
        propositionMember2TotalScoreFunction(),
        propositionMember3TotalScoreFunction(),
        propositionMember4TotalScoreFunction(),
        propositionSpojnoscDruzyny,
        propositionDefiniowanieLiniiSporu,
        propositionLiniaArgumentacyjna,
        propositionKontrargumentacja,
        propositionPuntySedziowskie,
        propositionJudge1Points,
        propositionJudge2Points
    ))
})
//suma punktów przyznanych OPOZYCJI przez wszystkich sędziów
$("#oposition-total-btn").click(() => {
    let opositionSpojnoscDruzyny = parseInt($("#sdO").val());
    let opositionDefiniowanieLiniiSporu = parseInt($("#dlsO").val());
    let opositionLiniaArgumentacyjna = parseInt($("#laO").val());
    let opositionKontrargumentacja = parseInt($("#kO").val());
    let opositionPuntySedziowskie = parseInt($("#psO").val());
    let opositionJudge1Points = parseInt($("#oposition-judge-1").val());
    let opositionJudge2Points = parseInt($("#oposition-judge-2").val());

    $("#oposition-total").html(yourSum(
        opositionMember1TotalScoreFunction(), 
        opositionMember2TotalScoreFunction(),
        opositionMember3TotalScoreFunction(),
        opositionMember4TotalScoreFunction(),
        opositionSpojnoscDruzyny,
        opositionDefiniowanieLiniiSporu,
        opositionLiniaArgumentacyjna,
        opositionKontrargumentacja,
        opositionPuntySedziowskie,
        opositionJudge1Points,
        opositionJudge2Points
    ))
})
$("#summary-view-btn").click(() => {



    let propositionSpojnoscDruzyny = parseInt($("#sdP").val());
    let propositionDefiniowanieLiniiSporu = parseInt($("#dlsP").val());
    let propositionLiniaArgumentacyjna = parseInt($("#laP").val());
    let propositionKontrargumentacja = parseInt($("#kP").val());
    let propositionPuntySedziowskie = parseInt($("#psP").val());
    let propositionJudge1Points = parseInt($("#proposition-judge-1").val());
    let propositionJudge2Points = parseInt($("#proposition-judge-2").val());

    $("#proposition-total").html(yourSum(
        propositionMember1TotalScoreFunction(), 
        propositionMember2TotalScoreFunction(),
        propositionMember3TotalScoreFunction(),
        propositionMember4TotalScoreFunction(),
        propositionSpojnoscDruzyny,
        propositionDefiniowanieLiniiSporu,
        propositionLiniaArgumentacyjna,
        propositionKontrargumentacja,
        propositionPuntySedziowskie,
        propositionJudge1Points,
        propositionJudge2Points
    ))


    

    let opositionSpojnoscDruzyny = parseInt($("#sdO").val());
    let opositionDefiniowanieLiniiSporu = parseInt($("#dlsO").val());
    let opositionLiniaArgumentacyjna = parseInt($("#laO").val());
    let opositionKontrargumentacja = parseInt($("#kO").val());
    let opositionPuntySedziowskie = parseInt($("#psO").val());
    let opositionJudge1Points = parseInt($("#oposition-judge-1").val());
    let opositionJudge2Points = parseInt($("#oposition-judge-2").val());

    $("#oposition-total").html(yourSum(
        opositionMember1TotalScoreFunction(), 
        opositionMember2TotalScoreFunction(),
        opositionMember3TotalScoreFunction(),
        opositionMember4TotalScoreFunction(),
        opositionSpojnoscDruzyny,
        opositionDefiniowanieLiniiSporu,
        opositionLiniaArgumentacyjna,
        opositionKontrargumentacja,
        opositionPuntySedziowskie,
        opositionJudge1Points,
        opositionJudge2Points
    ))




    let stage = $("input[name=competition-stage]:checked").val();
    let propositionTeamTotalPoints = parseInt($("#proposition-total").text(), 10);
    let opositionTeamTotalPoints = parseInt($("#oposition-total").text(), 10);
    let thesis = $("#thesis-input").val();
    let propositionMember1Name = $("#oratorName1P").val();
    let propositionMember2Name = $("#oratorName2P").val();
    let propositionMember3Name = $("#oratorName3P").val();
    let propositionMember4Name = $("#oratorName4P").val();
    let opositionMember1Name = $("#oratorName1O").val();
    let opositionMember2Name = $("#oratorName2O").val();
    let opositionMember3Name = $("#oratorName3O").val();
    let opositionMember4Name = $("#oratorName4O").val();

    if(propositionTeamTotalPoints > opositionTeamTotalPoints) {
        $("#ending-paragraph").html(`Pochylając się nad tezą <br>
            "${thesis}"<br>
            w ${stage} rozgrywek Ligi Debadanckiej XIX LO<br>
            wynikiem ${propositionTeamTotalPoints} : ${opositionTeamTotalPoints} <br>
            wygrywa PROPOZYCJA w składzie <br>
            ${propositionMember1Name}, ${propositionMember2Name}, ${propositionMember3Name}, ${propositionMember4Name} <br>
            SERDECZNIE GRATULUJEMY!`);
    } else if(propositionTeamTotalPoints < opositionTeamTotalPoints) {
        $("#ending-paragraph").html(`Pochylając się nad tezą <br>
            "${thesis}"<br>
            w ${stage} rozgrywek Ligi Debadanckiej XIX LO<br>
            wynikiem ${propositionTeamTotalPoints} : ${opositionTeamTotalPoints} <br>
            wygrywa OPOZYCJA w składzie <br>
            ${opositionMember1Name}, ${opositionMember2Name}, ${opositionMember3Name}, ${opositionMember4Name} <br>
            SERDECZNIE GRATULUJEMY!`);
    } else {
        $("#ending-paragraph").html(`Pochylając się nad tezą <br>
            "${thesis}"<br>
            w ${stage} rozgrywek Ligi Debadanckiej XIX LO<br>
            wynikiem ${propositionTeamTotalPoints} : ${opositionTeamTotalPoints} <br>
            OPOZYCJA w składzie <br>
            ${opositionMember1Name}, ${opositionMember2Name}, ${opositionMember3Name}, ${opositionMember4Name} <br>
            remisuje z PROPOZYCJą w składzie <br>
            ${propositionMember1Name}, ${propositionMember2Name}, ${propositionMember3Name}, ${propositionMember4Name} <br>
            Oczekujemy rozstrzygnięcia wyniku!`);
    }
})