function getXMLHttpRequest() {
    var xhr = null;

    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
            xhr = new XMLHttpRequest
        }
    } else {
        alert("navigateur non supporter");
        return;
    }
    return xhr;
};

function ComboBoxCouleur(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/COULEUR/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.COULEUR.records).each(function (i) {
                    $(IdDeLemplacementAvecLeDiese).append('<option value=" ' + traitement.COULEUR.records[i][0] + ' "> ' + traitement.COULEUR.records[i][1] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }
    };

    request(readData);

};

function ComboBoxPays(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/PAYS/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.PAYS.records).each(function (i) {
                    $(IdDeLemplacementAvecLeDiese).append('<option value=" ' + traitement.PAYS.records[i][0] + ' "> ' + traitement.PAYS.records[i][1] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }

    };

    request(readData);

};

function ComboBoxAppellation(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/APPELLATION/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.APPELLATION.records).each(function (i) {
                    $(IdDeLemplacementAvecLeDiese).append('<option value=" ' + traitement.APPELLATION.records[i][0] + ' "> ' + traitement.APPELLATION.records[i][1] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }

    };

    request(readData);

};

function ComboBoxRegion(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/REGION/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.REGION.records).each(function (i) {
                    $(IdDeLemplacementAvecLeDiese).append('<option value=" ' + traitement.REGION.records[i][0] + ' "> ' + traitement.REGION.records[i][2] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }

    };

    request(readData);

};

function ComboBoxContenance(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/CONTENANCE/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.CONTENANCE.records).each(function (i) {
                    $(IdDeLemplacementAvecLeDiese).append('<option value=" ' + traitement.CONTENANCE.records[i][0] + ' "> ' + traitement.CONTENANCE.records[i][1] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }

    };

    request(readData);

};

function ComboBoxMets(IdDeLemplacementAvecLeDiese, IdDeLemplacementAvecLeDiesePourAfficheLienRecette) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/METS/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.METS.records).each(function (i) {
                    $("#METS").append('<option id="' + i + '" value=" ' + traitement.METS.records[i][0] + ' "> ' + traitement.METS.records[i][2] + '</option>');
                });
            })();
            (function () {
                $('#METS').change(function () {
                    $("#METS option:selected").each(function () {
                        let temp = $("#METS option:selected").attr("id");
                        $(IdDeLemplacementAvecLeDiesePourAfficheLienRecette).html('<a href="' + traitement.METS.records[temp][3] + '">La recette</a>');
                    });
                }).trigger("change");
            })();
        } else {
            console.log("Is bad");
        }
    };
    request(readData);
};

function CheckBoxCepages(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/CEPAGE/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(traitement.CEPAGE.records).each(function (i) {
                    $(IdDeLemplacementAvecLeDiese).append('<input type="checkbox" name="cepage" value=" ' + traitement.CEPAGE.records[i][0] + ' "> ' + traitement.CEPAGE.records[i][1] + '     ');
                });
            })();
        } else {
            console.log("Is bad");
        }

    };

    request(readData);

};

function ComboBoxEmplacement(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/EMPLACEMENT/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            $(IdDeLemplacementAvecLeDiese).html("");
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<select id="EMPLACEMENT" name="EMPLACEMENT"></select>');
                $(traitement.EMPLACEMENT.records).each(function (i) {
                    console.log(traitement);
                    $("#EMPLACEMENT").append('<option value=" ' + traitement.EMPLACEMENT.records[i][1] + ' "> ' + traitement.EMPLACEMENT.records[i][1] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }

    };

    request(readData);

};

function POSTVin(NomCuve, Appellation, Region, Couleur, Culture, Commentaire) {
    let Posturl = "http://fbrc.esy.es/afpa/Cave/api.php/VIN/"; 
    if (identification.length <= 0) {
        identification = null;
    }
    var data = "NOM_CUVEE=" + NomCuve + "&CODEAPPELLATION=" + Appellation + "&CODEREGION=" + Region + "&CODECOULEUR=" + Couleur+ "&TYPE_DE_CULTURE=" + Culture + "&COMMENTAIRES=" + Commentaire;

    var xhr = new getXMLHttpRequest();
    xhr.withCredentials =  false;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", Posturl);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);

};

$("#btnCave").click(function () {
    //initialisation de la div principal 
    $("#ContenairPrincipal").html("");
    //Combobox Couleur 
    $('#ContenairPrincipal').append('<select  id="couleur" name="couleur"></select>');
    ComboBoxCouleur('#couleur');
    //Combobox Pays
    $('#ContenairPrincipal').append('<select id="pays" name="pays"></select>');
    ComboBoxPays('#pays');
    //Combobox Appellation
    $('#ContenairPrincipal').append('<select id="APPELLATION" name="APPELLATION"></select>');
    ComboBoxAppellation('#APPELLATION');
    //Combobox Region
    $('#ContenairPrincipal').append('<select id="region" name="region"></select>');
    ComboBoxRegion('#region');
    //Combobox Contenance
    $('#ContenairPrincipal').append('<select id="CONTENANCE" name="CONTENANCE"></select>');
    ComboBoxContenance('#CONTENANCE');
    //Combobox Mets avec lien recette
    $('#ContenairPrincipal').append('<select id="METS" name="METS"></select><span id="afficheMets"></span>');
    ComboBoxMets('#METS', afficheMets);
    //checkbox Cepage
    $('#ContenairPrincipal').append('<span id="Cepage"></span>')
    CheckBoxCepages('#Cepage');

    //creation d'un bouton pour récuperer les codes PK 
    $('#ContenairPrincipal').append('<button id="RecuperationCodePk" > Recup</button>');
    //evenement clic sur bouton
    $('#RecuperationCodePk').click(function () {
        let CodePkCouleur = $("#couleur option:selected").attr("value");
        let CodePkPays = $("#pays option:selected").attr("value");
        let CodePkAppellation = $("#APPELLATION option:selected").attr("value");
        let CodePkRegion = $("#region option:selected").attr("value");
        let CodePkContenance = $("#CONTENANCE option:selected").attr("value");
        let CodePkMets = $("#METS option:selected").attr("value");
        //pour les code pk des cepages sont sous forme de tableaux
        let CodePkCepage = [];
        $("input[type='checkbox']:checked").each(
            function (i) {
                CodePkCepage[i] = ($(this).attr('value'));
            });
    });

});

/////// AJOUTER UN VIN //////////
$("#btnAjouterVin").click(function () {
    //initialisation de la div principal 
    $("#ContenairPrincipal").html("");
    // a coder le nom de la cuvé //
    $('#ContenairPrincipal').append('<span class="MiseEnForm" >Nom de la cuv&eacute; : <input type="text"  id="nomcuve" name="nomcuve"></input></span>');
    //fonction a coder pour le nom de la cuvé
    //Combobox Couleur 
    $('#ContenairPrincipal').append('<span class="MiseEnForm" >Type de vin : <select  id="couleur" name="couleur"></select></span>');
    ComboBoxCouleur('#couleur');
    //Combobox Appellation
    $('#ContenairPrincipal').append('<span class="MiseEnForm" >Appellation : <select id="APPELLATION" name="APPELLATION"></select></span>');
    ComboBoxAppellation('#APPELLATION');
    //Combobox Region
    $('#ContenairPrincipal').append('<span class="MiseEnForm" >Region : <select id="region" name="region"></select></span>');
    ComboBoxRegion('#region');
    //type de culture
    $('#ContenairPrincipal').append('<span class="MiseEnForm" >Type de culture : <input id="Type_de_culture" name="Type_de_culture"></input></span>');
    //checkbox Cepage
    $('#ContenairPrincipal').append('<span class="MiseEnForm" ><fieldset><span id="Cepage"></span></fieldset></span>');
    CheckBoxCepages('#Cepage');
    // commentaire
    $('#ContenairPrincipal').append('<span class="MiseEnForm" >Commentaire : <input id="commentaire" name="commentaire"></input></span>');

    // a coder le bouton s'accord avec ouvrant sur modal => selection cathégorie de mets, de recette et niv accord //

    //bouton annuler (qui reinitialise les combos )

    //bouton valider (qui verifira si toutes les zone on bien une doné) qui fera un post
    $("#ContenairPrincipal").append('<button id="btnEnregistreVin" >Enregistrer</button>');
    $("#btnEnregistreVin").click(function () {
        let Nom_Cuve = $("#nomcuve").val();
        let CodePkAppellation = $("#APPELLATION option:selected").attr("value");
        let CodePkRegion = $("#region option:selected").attr("value");
        let CodePkCouleur = $("#couleur option:selected").attr("value");
        let Type_De_Culture = $("#Type_de_culture").val();
        let Commentaire = $("#commentaire").val();
       
        
        console.log(CodePkAppellation + " | " + CodePkRegion +" | " + CodePkCouleur +" | " + Type_De_Culture +" | " + commentaire +" | " + Nom_Cuve);

        POSTVin(Nom_Cuve,CodePkAppellation,CodePkRegion,CodePkCouleur,Type_De_Culture,Commentaire);

    });


});
